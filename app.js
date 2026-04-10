import { DEFAULT_OPTIONS, DIMENSIONS, QUESTIONS, TYPES } from "./data.js";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function makeEmptyScores() {
  const scores = {};
  for (const d of DIMENSIONS) scores[d.key] = [];
  return scores;
}

function computeDimensionScores(answersById) {
  // For each dimension, average normalized to 0..100.
  const bucket = makeEmptyScores();

  for (const q of QUESTIONS) {
    const raw = answersById[q.id];
    if (raw == null) continue;
    const v = raw * q.dir; // default -1..+1 (or question override)
    bucket[q.dim].push(v);
  }

  const out = {};
  for (const d of DIMENSIONS) {
    const arr = bucket[d.key];
    if (!arr.length) out[d.key] = 50;
    else {
      const avg = arr.reduce((a, b) => a + b, 0) / arr.length; // usually -1..1
      // Map [-1,1] -> [0,100]
      const normalized = ((avg + 1) / 2) * 100;
      out[d.key] = Math.round(clamp(normalized, 0, 100));
    }
  }
  return out;
}

function cosineSimilarity(a, b) {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (const d of DIMENSIONS) {
    const k = d.key;
    const av = a[k] ?? 50;
    const bv = b[k] ?? 50;
    dot += av * bv;
    na += av * av;
    nb += bv * bv;
  }
  if (na === 0 || nb === 0) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

function pickType(dimScores) {
  let best = null;
  for (const t of TYPES) {
    const sim = cosineSimilarity(dimScores, t.profile);
    if (!best || sim > best.sim) best = { t, sim };
  }
  const match = Math.round(clamp(best.sim * 100, 0, 100));
  return { type: best.t, match };
}

function levelFromScore(score) {
  if (score <= 33) return "L";
  if (score <= 66) return "M";
  return "H";
}

function fmtLongTextToHtml(text) {
  if (!text) return "";
  // Minimal formatting: blank line => paragraph break; **x** => bold.
  const safe = String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const withBold = safe.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const paras = withBold
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
    .join("");
  return paras;
}

function renderMiniList(container, items, kind) {
  container.innerHTML = "";
  for (const it of items) {
    const row = document.createElement("div");
    row.className = "miniRow";

    const tag = document.createElement("div");
    tag.className = `tag ${kind === "good" ? "good" : "bad"}`;
    tag.textContent = it.dim.code;

    const mid = document.createElement("div");
    const name = document.createElement("div");
    name.className = "miniName";
    name.textContent = it.dim.name;
    const meta = document.createElement("div");
    meta.className = "miniMeta";
    meta.textContent = `${it.level} · ${it.micro}`;
    mid.appendChild(name);
    mid.appendChild(meta);

    const score = document.createElement("div");
    score.className = "miniScore";
    score.innerHTML = `<b>${it.score}</b>/100`;

    row.appendChild(tag);
    row.appendChild(mid);
    row.appendChild(score);
    container.appendChild(row);
  }
}

function formatCount(done, total) {
  return `${done} / ${total}`;
}

function renderQuestions(state) {
  const list = $("#questionList");
  list.innerHTML = "";

  for (const q of QUESTIONS) {
    const card = document.createElement("div");
    card.className = "qcard";
    card.dataset.qid = String(q.id);

    const title = document.createElement("div");
    title.className = "qtitle";
    title.textContent = `${q.id}. ${q.text}`;
    card.appendChild(title);

    const opts = document.createElement("div");
    opts.className = "qopts";

    const options = Array.isArray(q.options) && q.options.length ? q.options : DEFAULT_OPTIONS;
    for (const a of options) {
      const id = `q_${q.id}_${a.key}`;
      const label = document.createElement("label");
      label.className = "opt";
      label.setAttribute("for", id);

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q_${q.id}`;
      input.id = id;
      input.value = String(a.value);
      input.checked = Number(state.answers[q.id]) === Number(a.value);
      input.addEventListener("change", () => {
        state.answers[q.id] = a.value;
        clearMissingMarkers();
        syncProgress(state);
        persistState(state);
      });

      const key = document.createElement("span");
      key.className = "optKey";
      key.textContent = a.key;

      const span = document.createElement("span");
      span.textContent = a.label;

      label.appendChild(input);
      label.appendChild(key);
      label.appendChild(span);
      opts.appendChild(label);
    }

    card.appendChild(opts);
    list.appendChild(card);
  }
}

function getMissingQuestionIds(state) {
  return QUESTIONS.filter((q) => state.answers[q.id] == null).map((q) => q.id);
}

function clearMissingMarkers() {
  for (const el of $$(".qcard.isMissing")) el.classList.remove("isMissing");
  const warn = $("#submitWarn");
  if (warn) {
    warn.textContent = "";
    warn.classList.add("hidden");
  }
}

function markMissing(missingIds) {
  for (const id of missingIds) {
    const card = document.querySelector(`.qcard[data-qid="${id}"]`);
    if (card) card.classList.add("isMissing");
  }
}

function scrollToQuestion(qid) {
  const card = document.querySelector(`.qcard[data-qid="${qid}"]`);
  if (!card) return;
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  // Focus first radio for that question
  const input = card.querySelector(`input[name="q_${qid}"]`);
  if (input) input.focus({ preventScroll: true });
}

function syncProgress(state) {
  const total = QUESTIONS.length;
  const done = QUESTIONS.filter((q) => state.answers[q.id] != null).length;
  $("#count").textContent = formatCount(done, total);

  const pct = Math.round((done / total) * 100);
  $("#progressFill").style.width = `${pct}%`;

  const canSubmit = done === total;
  // Allow clicking submit even when incomplete, so we can show missing hints.
  $("#submitBtn").disabled = false;
  $("#gateHint").style.display = canSubmit ? "none" : "block";
  $("#submitBtn").classList.toggle("isBlocked", !canSubmit);
}

function showScreen(name) {
  for (const el of $$(".screen")) el.classList.add("hidden");
  $(`#screen_${name}`).classList.remove("hidden");
}

function persistState(state) {
  try {
    localStorage.setItem("sbti_like_state_v2", JSON.stringify(state));
  } catch {
    // ignore
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem("sbti_like_state_v2");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    if (!parsed.answers || typeof parsed.answers !== "object") return null;
    return { answers: parsed.answers };
  } catch {
    return null;
  }
}

function resetState() {
  try {
    localStorage.removeItem("sbti_like_state_v2");
  } catch {
    // ignore
  }
  return { answers: {} };
}

function renderResult(dimScores, picked) {
  $("#resultTypeKey").textContent = picked.type.key;
  $("#resultTypeName").textContent = `（${picked.type.name}）`;
  $$("#resultMatch").forEach((el) => (el.textContent = `${picked.match}%`));
  $("#resultDone").textContent = `${QUESTIONS.length}/${QUESTIONS.length}`;
  $("#resultNote").textContent = picked.type.note ?? "";
  $("#resultBlurb").textContent = picked.type.blurb ?? "";
  $("#resultTips").textContent = picked.type.tips ?? "";
  $("#resultOneLiner").textContent =
    picked.type.oneLiner ?? "维度中度偏高，请温柔使用你的技能树。";
  $("#resultLong").innerHTML = fmtLongTextToHtml(
    picked.type.long ?? "（这里以后可以给每个类型写更长的分段解读。）"
  );

  const decorated = DIMENSIONS.map((d) => {
    const score = Number(dimScores[d.key] ?? 50);
    const level = levelFromScore(score);
    const micro = d.micro?.[level] ?? "";
    return { dim: d, score, level, micro };
  });

  const top3 = [...decorated].sort((a, b) => b.score - a.score).slice(0, 3);
  const bottom3 = [...decorated].sort((a, b) => a.score - b.score).slice(0, 3);
  renderMiniList($("#resultTop"), top3, "good");
  renderMiniList($("#resultBottom"), bottom3, "bad");

  const grid = $("#dimensionGrid");
  grid.innerHTML = "";
  for (const d of DIMENSIONS) {
    const score = Number(dimScores[d.key] ?? 50);
    const level = levelFromScore(score);
    const micro = d.micro?.[level] ?? "";
    const row = document.createElement("div");
    row.className = "drow";

    const left = document.createElement("div");
    left.className = "dname";
    left.textContent = `${d.code} ${d.name}`;

    const bar = document.createElement("div");
    bar.className = "dbar";
    const fill = document.createElement("div");
    fill.className = "dbarFill";
    fill.style.width = `${score}%`;
    bar.appendChild(fill);

    const right = document.createElement("div");
    right.className = "dval";
    right.textContent = `${level} / ${score}`;

    row.appendChild(left);
    row.appendChild(bar);
    row.appendChild(right);

    const tip = document.createElement("div");
    tip.className = "dtip";
    tip.textContent = micro;
    row.appendChild(tip);
    grid.appendChild(row);
  }
}

function main() {
  let state = loadState() ?? { answers: {} };

  $("#startBtn").addEventListener("click", () => {
    showScreen("quiz");
    renderQuestions(state);
    syncProgress(state);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const goHome = () => {
    showScreen("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  $("#homeBtn").addEventListener("click", goHome);
  for (const el of $$("[data-action='home']")) el.addEventListener("click", goHome);

  $("#submitBtn").addEventListener("click", () => {
    const missing = getMissingQuestionIds(state);
    if (missing.length) {
      clearMissingMarkers();
      markMissing(missing);
      const warn = $("#submitWarn");
      if (warn) {
        warn.textContent = `你还有 ${missing.length} 题没选：先去第 ${missing[0]} 题。`;
        warn.classList.remove("hidden");
      }
      scrollToQuestion(missing[0]);
      return;
    }

    const dimScores = computeDimensionScores(state.answers);
    const picked = pickType(dimScores);
    renderResult(dimScores, picked);
    showScreen("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#retryBtn").addEventListener("click", () => {
    state = resetState();
    renderQuestions(state);
    syncProgress(state);
    showScreen("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const clear = () => {
    state = resetState();
    persistState(state);
    // If user clears on home, the list might not exist yet.
    if ($("#questionList")) renderQuestions(state);
    if ($("#count")) syncProgress(state);
  };
  for (const el of $$("[data-action='clear']")) el.addEventListener("click", clear);

  // Initial screen
  showScreen("home");
}

main();


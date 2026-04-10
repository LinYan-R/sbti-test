export const DIMENSIONS = [
  {
    key: "ctrl",
    code: "S1",
    name: "拿捏欲",
    micro: {
      L: "更随和：不太想掌控节奏，能放手就放手。",
      M: "选择性控场：需要时才接管，平时随缘。",
      H: "强控场：喜欢收束结论，天然想把局面捏稳。",
    },
  },
  {
    key: "self",
    code: "S2",
    name: "自洽程度",
    micro: {
      L: "容易摇摆：想要什么不太稳定，常被外界带走。",
      M: "大体清楚：知道方向，但偶尔也会迷路。",
      H: "很自洽：边界清晰，知道自己要什么/不要什么。",
    },
  },
  {
    key: "focus",
    code: "S3",
    name: "专注力",
    micro: {
      L: "容易被打断：信息流一来就被带跑。",
      M: "看状态：能专注一阵，但需要环境配合。",
      H: "进入心流：一旦上头，外界像静音。",
    },
  },
  {
    key: "order",
    code: "S4",
    name: "秩序偏好",
    micro: {
      L: "随手型：流程可有可无，能通就行。",
      M: "半秩序：喜欢有框架，但不至于死磕。",
      H: "强秩序：爱清单、爱步骤、爱规范。",
    },
  },
  {
    key: "chaos",
    code: "S5",
    name: "混乱耐受",
    micro: {
      L: "讨厌变动：计划被打乱会明显影响心情。",
      M: "可接受：会不爽，但能调整。",
      H: "混乱如鱼得水：不确定反而更灵活。",
    },
  },
  {
    key: "logic",
    code: "S6",
    name: "理性优先",
    micro: {
      L: "感受优先：更看氛围与直觉，不爱硬讲证据。",
      M: "双通道：讲道理也讲人情，取决于对象。",
      H: "证据优先：标准、结构、逻辑是你的安全感。",
    },
  },
  {
    key: "feel",
    code: "S7",
    name: "情绪敏感",
    micro: {
      L: "低敏：不太会被他人情绪牵动。",
      M: "中敏：能感觉到变化，但不一定放大。",
      H: "高敏：空气一变就知道，细节会被你捕捉。",
    },
  },
  {
    key: "social",
    code: "S8",
    name: "社交电量",
    micro: {
      L: "社交耗电：热闹过后需要独处回血。",
      M: "看人看场：熟人局能量更稳。",
      H: "社交充电：人越多越来劲，擅长带气氛。",
    },
  },
  {
    key: "risk",
    code: "S9",
    name: "冒险倾向",
    micro: {
      L: "稳健：更愿意确定性，先保证不翻车。",
      M: "小步试错：愿意试，但要可控。",
      H: "敢冲：机会来了先上车，路上修正。",
    },
  },
  {
    key: "lazy",
    code: "S10",
    name: "摆烂指数",
    micro: {
      L: "硬扛型：不太会偷懒，甚至会自我加压。",
      M: "可松可紧：该躺就躺，该冲就冲。",
      H: "省力大师：能不做就不做，做就走捷径。",
    },
  },
  {
    key: "grind",
    code: "S11",
    name: "内卷强度",
    micro: {
      L: "松弛派：不追“更强”，更追“更舒服”。",
      M: "机会主义：有资源就进步，没资源就保命。",
      H: "燃起来：目标明确就能持续加速。",
    },
  },
  {
    key: "spend",
    code: "S12",
    name: "消费冲动",
    micro: {
      L: "理性省钱：买之前会先把自己劝退。",
      M: "中等冲动：偶尔会为快乐付费。",
      H: "快乐优先：先买再说，情绪价值最大。",
    },
  },
  {
    key: "moral",
    code: "S13",
    name: "道德洁癖",
    micro: {
      L: "低洁癖：更多是理解与放过自己。",
      M: "有原则但不极端：底线在，但能沟通。",
      H: "高洁癖：对没底线/不公平很难装看不见。",
    },
  },
  {
    key: "spite",
    code: "S14",
    name: "攻击性",
    micro: {
      L: "不爱较劲：不太记仇，翻篇快。",
      M: "看对方：你是否出手取决于对方态度。",
      H: "记账型：嘴上没事，心里有本账。",
    },
  },
  {
    key: "romance",
    code: "S15",
    name: "浪漫滤镜",
    micro: {
      L: "低滤镜：不太吃仪式感，偏实用。",
      M: "适量滤镜：偶尔来点小惊喜也不错。",
      H: "高滤镜：细节/仪式感能直接点燃你。",
    },
  },
];

// Default options (A/B/C). Values are -1, 0, +1.
// Each question can override by providing `options: [{ key, label, value }]`.
export const DEFAULT_OPTIONS = [
  { key: "A", label: "不认同", value: -1 },
  { key: "B", label: "中立 / 看情况", value: 0 },
  { key: "C", label: "认同", value: 1 },
];

// Each question contributes to one dimension.
// dir = +1 means higher choice => higher dimension score; -1 means reversed.
export const QUESTIONS = [
  {
    id: 1,
    dim: "ctrl",
    dir: 1,
    text: "群聊里大家讨论半天没结论，你的手会不会开始痒？",
    options: [
      { key: "A", label: "不痒，我负责围观与点赞。", value: -1 },
      { key: "B", label: "看情况，必要时提醒一下。", value: 0 },
      { key: "C", label: "痒爆了，我要立刻总结三点并拍板。", value: 1 },
    ],
  },
  {
    id: 2,
    dim: "social",
    dir: 1,
    text: "朋友临时拉你去一个全是陌生人的局，你的第一反应是？",
    options: [
      { key: "A", label: "婉拒，我要把电量留给自己。", value: -1 },
      { key: "B", label: "先去看看，觉得不对就撤。", value: 0 },
      { key: "C", label: "走起，我最会把陌生人聊成熟人。", value: 1 },
    ],
  },
  {
    id: 3,
    dim: "order",
    dir: 1,
    text: "做事前你更像哪一种？",
    options: [
      { key: "A", label: "想起来就做，顺序随缘。", value: -1 },
      { key: "B", label: "大概有个方向，边做边调。", value: 0 },
      { key: "C", label: "先列清单和时间点，不然心里不踏实。", value: 1 },
    ],
  },
  {
    id: 4,
    dim: "chaos",
    dir: 1,
    text: "计划被打乱（比如临时改时间/地点），你通常会？",
    options: [
      { key: "A", label: "直接烦躁，脑子卡一下。", value: -1 },
      { key: "B", label: "皱眉但能接受。", value: 0 },
      { key: "C", label: "行啊，我甚至觉得更刺激。", value: 1 },
    ],
  },
  {
    id: 5,
    dim: "logic",
    dir: 1,
    text: "别人跟你争论但只会“我觉得”，你会？",
    options: [
      { key: "A", label: "算了，情绪对线没意义。", value: -1 },
      { key: "B", label: "我会试着把话题拉回事实。", value: 0 },
      { key: "C", label: "请把依据拿出来，不然我当你在表演。", value: 1 },
    ],
  },
  {
    id: 6,
    dim: "feel",
    dir: 1,
    text: "你能不能第一时间察觉到“对方不开心但嘴硬”？",
    options: [
      { key: "A", label: "不太行，我主要听字面意思。", value: -1 },
      { key: "B", label: "有时能感觉到。", value: 0 },
      { key: "C", label: "很行，空气一变我就知道。", value: 1 },
    ],
  },
  {
    id: 7,
    dim: "risk",
    dir: 1,
    text: "遇到一个“看起来会翻车但也可能很爽”的机会，你更像？",
    options: [
      { key: "A", label: "先别，我宁愿稳一点。", value: -1 },
      { key: "B", label: "做个小试验，控制风险。", value: 0 },
      { key: "C", label: "冲！不试怎么知道自己行不行。", value: 1 },
    ],
  },
  {
    id: 8,
    dim: "lazy",
    dir: 1,
    text: "要交作业/做报告时，你的风格更像？",
    options: [
      { key: "A", label: "越早开始越焦虑，越晚开始越清醒。", value: -1 },
      { key: "B", label: "能拖一点，但会留出救命时间。", value: 0 },
      { key: "C", label: "我会找最省力的路径，高效搞定。", value: 1 },
    ],
  },
  {
    id: 9,
    dim: "grind",
    dir: 1,
    text: "看到别人都在努力，你会？",
    options: [
      { key: "A", label: "关我啥事，我要活得松弛。", value: -1 },
      { key: "B", label: "偶尔会被影响。", value: 0 },
      { key: "C", label: "立刻燃起来：我也要更强。", value: 1 },
    ],
  },
  {
    id: 10,
    dim: "spend",
    dir: 1,
    text: "你买东西更像哪种消费人格？",
    options: [
      { key: "A", label: "不买，省钱最快乐。", value: -1 },
      { key: "B", label: "对比一下再决定。", value: 0 },
      { key: "C", label: "先买再说，快乐到账最重要。", value: 1 },
    ],
  },
  {
    id: 11,
    dim: "moral",
    dir: 1,
    text: "看到明显不公平/没底线的事，你会？",
    options: [
      { key: "A", label: "少管闲事，保命要紧。", value: -1 },
      { key: "B", label: "看情况，能帮就帮。", value: 0 },
      { key: "C", label: "不行，我忍不了，我要说两句。", value: 1 },
    ],
  },
  {
    id: 12,
    dim: "spite",
    dir: 1,
    text: "有人阴阳你一下，你会？",
    options: [
      { key: "A", label: "当没听见，转身就忘。", value: -1 },
      { key: "B", label: "记着，但不一定发作。", value: 0 },
      { key: "C", label: "我会记住，等一个合适的时机。", value: 1 },
    ],
  },
  {
    id: 13,
    dim: "romance",
    dir: 1,
    text: "对方准备了一个小惊喜（不贵但用心），你会？",
    options: [
      { key: "A", label: "挺好，但我情绪起伏不大。", value: -1 },
      { key: "B", label: "开心一下，继续正常生活。", value: 0 },
      { key: "C", label: "直接被拿捏，我会记很久。", value: 1 },
    ],
  },
  {
    id: 14,
    dim: "focus",
    dir: 1,
    text: "你进入专注状态的难度大吗？",
    options: [
      { key: "A", label: "很大，我一会儿就想看手机。", value: -1 },
      { key: "B", label: "一般，有时能沉进去。", value: 0 },
      { key: "C", label: "不大，进状态后外界像静音。", value: 1 },
    ],
  },
  {
    id: 15,
    dim: "self",
    dir: 1,
    text: "别人问“你到底想要什么”，你通常？",
    options: [
      { key: "A", label: "我也不知道，别问。", value: -1 },
      { key: "B", label: "大概知道，但说不太清。", value: 0 },
      { key: "C", label: "我很清楚，并且能讲出原因。", value: 1 },
    ],
  },
  {
    id: 16,
    dim: "ctrl",
    dir: 1,
    text: "团队分工没人认领最难的那块，你会？",
    options: [
      { key: "A", label: "别看我，我也不想。", value: -1 },
      { key: "B", label: "我会提议重新拆分任务。", value: 0 },
      { key: "C", label: "我来，并顺便把全局也管了。", value: 1 },
    ],
  },
  {
    id: 17,
    dim: "order",
    dir: 1,
    text: "你的桌面/文件夹更像？",
    options: [
      { key: "A", label: "混乱但我找得到。", value: -1 },
      { key: "B", label: "大体整齐，偶尔失控。", value: 0 },
      { key: "C", label: "分类明确，命名统一，看着就爽。", value: 1 },
    ],
  },
  {
    id: 18,
    dim: "chaos",
    dir: 1,
    text: "朋友突然说“现在出发，随机去一个地方”，你会？",
    options: [
      { key: "A", label: "拒绝，我要先知道去哪。", value: -1 },
      { key: "B", label: "看我当天状态。", value: 0 },
      { key: "C", label: "可以，我就喜欢这种不确定。", value: 1 },
    ],
  },
  {
    id: 19,
    dim: "logic",
    dir: 1,
    text: "你更习惯用哪种方式说服别人？",
    options: [
      { key: "A", label: "我不说服，爱咋咋地。", value: -1 },
      { key: "B", label: "讲道理 + 给例子。", value: 0 },
      { key: "C", label: "给结构、给标准、给证据，闭环。", value: 1 },
    ],
  },
  {
    id: 20,
    dim: "feel",
    dir: 1,
    text: "你会不会因为一句语气不对而胡思乱想？",
    options: [
      { key: "A", label: "不会，我更在意事实。", value: -1 },
      { key: "B", label: "偶尔会。", value: 0 },
      { key: "C", label: "会，而且我还能猜到对方在想啥。", value: 1 },
    ],
  },
  {
    id: 21,
    dim: "risk",
    dir: 1,
    text: "你做决定更像？",
    options: [
      { key: "A", label: "先保证不出错。", value: -1 },
      { key: "B", label: "评估一下得失。", value: 0 },
      { key: "C", label: "先上车，路上再修正。", value: 1 },
    ],
  },
  {
    id: 22,
    dim: "lazy",
    dir: 1,
    text: "遇到重复性的麻烦事，你会？",
    options: [
      { key: "A", label: "忍着做，心里骂两句。", value: -1 },
      { key: "B", label: "能简化就简化。", value: 0 },
      { key: "C", label: "我会想办法一键解决，以后都别烦我。", value: 1 },
    ],
  },
  {
    id: 23,
    dim: "grind",
    dir: 1,
    text: "你对“更强”这件事的态度更像？",
    options: [
      { key: "A", label: "不追，我只想过得舒服。", value: -1 },
      { key: "B", label: "有机会就进步。", value: 0 },
      { key: "C", label: "我会主动给自己加难度。", value: 1 },
    ],
  },
  {
    id: 24,
    dim: "spend",
    dir: 1,
    text: "购物车里有个“有点贵但很想要”的东西，你会？",
    options: [
      { key: "A", label: "删掉，理性战胜一切。", value: -1 },
      { key: "B", label: "先放着，过两天再看。", value: 0 },
      { key: "C", label: "买！我会用快乐给自己续命。", value: 1 },
    ],
  },
  {
    id: 25,
    dim: "moral",
    dir: 1,
    text: "朋友想让你帮忙做一件“有点不厚道”的事，你会？",
    options: [
      { key: "A", label: "帮不了，我怕麻烦。", value: -1 },
      { key: "B", label: "先问清楚程度。", value: 0 },
      { key: "C", label: "不行，这事我过不了自己那关。", value: 1 },
    ],
  },
  {
    id: 26,
    dim: "spite",
    dir: 1,
    text: "你和人闹矛盾后，一般会？",
    options: [
      { key: "A", label: "很快就翻篇，不爱记。", value: -1 },
      { key: "B", label: "看对方态度再决定。", value: 0 },
      { key: "C", label: "我会记得很清楚，尤其是细节。", value: 1 },
    ],
  },
  {
    id: 27,
    dim: "romance",
    dir: 1,
    text: "你对“仪式感”的态度更像？",
    options: [
      { key: "A", label: "我不吃这套。", value: -1 },
      { key: "B", label: "偶尔来点也不错。", value: 0 },
      { key: "C", label: "很重要，没有我会失去灵魂。", value: 1 },
    ],
  },
  {
    id: 28,
    dim: "focus",
    dir: 1,
    text: "你工作/学习时被消息打断，会？",
    options: [
      { key: "A", label: "立刻回，顺便刷会儿。", value: -1 },
      { key: "B", label: "看重要程度再回。", value: 0 },
      { key: "C", label: "先关掉通知，做完再说。", value: 1 },
    ],
  },
  {
    id: 29,
    dim: "self",
    dir: 1,
    text: "你更像“知道自己不想要什么”的人吗？",
    options: [
      { key: "A", label: "不太像，我经常摇摆。", value: -1 },
      { key: "B", label: "有些知道，有些不确定。", value: 0 },
      { key: "C", label: "像，我的边界感很清晰。", value: 1 },
    ],
  },
  {
    id: 30,
    dim: "social",
    dir: 1,
    text: "饭局冷场了，你通常？",
    options: [
      { key: "A", label: "假装在看手机，装死。", value: -1 },
      { key: "B", label: "笑一笑，等别人开口。", value: 0 },
      { key: "C", label: "我来抛话题，把气氛救回来。", value: 1 },
    ],
  },
  {
    id: 31,
    dim: "ctrl",
    dir: 1,
    text: "你在聊天里更像？",
    options: [
      { key: "A", label: "随便聊，别给我任务。", value: -1 },
      { key: "B", label: "有来有回，顺其自然。", value: 0 },
      { key: "C", label: "我会把节奏带到我想要的结论。", value: 1 },
    ],
  },
];

// Type profiles: values are preferred scores (0..100) for each dimension.
// Match is computed via cosine similarity, then scaled to 0..100.
export const TYPES = [
  {
    key: "GRIPPER",
    name: "拿捏者",
    note: "系统备注会显示在这里。",
    blurb: "你不是爱控制，你只是讨厌失控。你擅长把松散的局面收束成一句结论。",
    oneLiner: "你擅长把混乱压缩成结论，但别把所有人都当成项目管理。",
    long:
      "**你给人的第一印象**：稳、快、能拍板。\n\n" +
      "**你擅长的事**：把模糊目标变成可执行的动作，关键时刻敢站出来负责。\n\n" +
      "**你容易踩的坑**：把“效率”当成唯一价值，导致别人觉得你在催命或夺权。\n\n" +
      "**建议**：当你想接管时，先问一句“你希望我帮你整理，还是你自己来？”效果立刻变好。",
    tips: "友情提示：别把测试当诊断/面试/相亲/分手/招魂/算命或人生判决书。",
    profile: { ctrl: 92, order: 70, logic: 68, spite: 55, self: 65, chaos: 45, lazy: 35, romance: 40, social: 55 },
  },
  {
    key: "CYNIC",
    name: "愤世者",
    note: "（嘴臭但有边界）",
    blurb: "你不是悲观，你只是观察力太强。你能精准指出荒谬，并且不想假装没看见。",
    oneLiner: "你不是刻薄，你只是对虚伪过敏。",
    long:
      "**你给人的第一印象**：清醒、犀利、好像随时要开火。\n\n" +
      "**你擅长的事**：识别漏洞、拆穿自欺、把问题讲到点子上。\n\n" +
      "**你容易踩的坑**：把“指出问题”当成终点，而不是通往解决的起点。\n\n" +
      "**建议**：先说结论再说理由，最后留一句“你想要我帮你想办法吗？”你的杀伤力会变成生产力。",
    tips: "友情提示：输出可以有，伤害没必要。",
    profile: { spite: 85, moral: 65, logic: 60, chaos: 55, self: 55, ctrl: 50, social: 35, romance: 20, lazy: 45 },
  },
  {
    key: "ROMANTIC",
    name: "粉红泡泡",
    note: "（浪漫过敏者勿近）",
    blurb: "你对美好有执念。你相信氛围能救命，仪式感能续命。",
    oneLiner: "你要的不是戏剧，是被认真对待的感觉。",
    long:
      "**你给人的第一印象**：温柔、有期待、对细节很敏感。\n\n" +
      "**你擅长的事**：把普通日子过出质感，让关系保持温度。\n\n" +
      "**你容易踩的坑**：把对方的小失误解读成“不爱了”。\n\n" +
      "**建议**：把需求说成请求而不是判决，比如“我希望你…”而不是“你从来不…”。",
    tips: "友情提示：浪漫不等于不理性。",
    profile: { romance: 90, feel: 75, social: 55, spend: 60, chaos: 55, order: 35, logic: 35, spite: 25, self: 55 },
  },
  {
    key: "GRINDER",
    name: "卷王",
    note: "（不卷会焦虑）",
    blurb: "你对“更好”上瘾。你能把目标拆成任务清单，然后把自己也拆了。",
    oneLiner: "你很强，但你不必一直证明自己。",
    long:
      "**你给人的第一印象**：自律、能扛、靠谱得离谱。\n\n" +
      "**你擅长的事**：长期推进、持续复利、把目标做成结果。\n\n" +
      "**你容易踩的坑**：把休息当成罪，把自己当成机器。\n\n" +
      "**建议**：给自己设置“完成线”而不是“完美线”，把胜利条件写出来，你会轻松很多。",
    tips: "友情提示：休息不是退步，是续航。",
    profile: { grind: 92, focus: 75, order: 70, logic: 65, lazy: 15, spend: 30, chaos: 30, social: 45, self: 55 },
  },
  {
    key: "CHILLER",
    name: "摆烂艺术家",
    note: "（效率很高：拒绝内耗）",
    blurb: "你不是不努力，你是擅长把力气用在值得的地方。能不做就不做，做就做到位。",
    oneLiner: "你不怕努力，你怕无效努力。",
    long:
      "**你给人的第一印象**：松弛、聪明、看起来像在躺但其实在算。\n\n" +
      "**你擅长的事**：用最小代价拿到足够结果，减少内耗。\n\n" +
      "**你容易踩的坑**：把“省事”变成“逃避”，导致关键节点失分。\n\n" +
      "**建议**：把重要的事做成‘自动化/流程化’，你会越活越轻。",
    tips: "友情提示：摆烂不是放弃，是止损。",
    profile: { lazy: 88, chaos: 70, self: 60, grind: 20, focus: 45, order: 30, spend: 45, social: 45, spite: 35 },
  },
  {
    key: "STEADY",
    name: "保守派",
    note: "（稳字当头）",
    blurb: "你相信可控性。你不怕慢，你怕翻车。",
    oneLiner: "你追求的不是保守，是确定。",
    long:
      "**你给人的第一印象**：稳重、谨慎、让人放心。\n\n" +
      "**你擅长的事**：规避风险、兜底、把不确定变成可控。\n\n" +
      "**你容易踩的坑**：过度评估导致迟迟不开始。\n\n" +
      "**建议**：把大风险拆成小风险，先做一小步验证，你会更敢走。",
    tips: "友情提示：偶尔小试错，也能扩大安全区。",
    profile: { risk: 15, order: 75, logic: 60, chaos: 25, self: 60, spend: 35, social: 45, romance: 40, moral: 55 },
  },
  {
    key: "CHAOTIC",
    name: "混沌中立",
    note: "（随缘但不随便）",
    blurb: "你不爱争对错，你爱把事情做完。你能在不确定里保持行动。",
    oneLiner: "你不靠计划赢，你靠适应力赢。",
    long:
      "**你给人的第一印象**：松弛、灵活、好像什么都能接住。\n\n" +
      "**你擅长的事**：临场发挥、快速调整、在变化中推进。\n\n" +
      "**你容易踩的坑**：太随缘导致别人不清楚你到底想要什么。\n\n" +
      "**建议**：把“底线”和“目标”说清楚，剩下随便你怎么浪都行。",
    tips: "友情提示：边界感是超能力。",
    profile: { chaos: 88, risk: 65, self: 55, order: 25, ctrl: 35, spend: 55, social: 55, feel: 45, grind: 35 },
  },
  {
    key: "LUCID",
    name: "清醒人",
    note: "（自洽优先）",
    blurb: "你会先把自己弄明白，再决定要不要参与别人的剧本。",
    oneLiner: "你不冷，你只是把情绪放在该放的位置。",
    long:
      "**你给人的第一印象**：克制、清晰、不太好骗。\n\n" +
      "**你擅长的事**：自我管理、理性选择、保持边界。\n\n" +
      "**你容易踩的坑**：过于清醒导致错过一些‘不理性但很快乐’的体验。\n\n" +
      "**建议**：允许自己偶尔没那么合理，人生会更有弹性。",
    tips: "友情提示：清醒不等于冷漠。",
    profile: { self: 90, logic: 70, moral: 55, spite: 20, chaos: 55, order: 45, feel: 45, focus: 60, social: 40 },
  },
  {
    key: "CONNECTOR",
    name: "社交润滑剂",
    note: "（气氛修复师）",
    blurb: "你擅长让陌生变自然，让尴尬变笑点。只要你愿意，场子就不会死。",
    oneLiner: "你不是爱社交，你是爱把人连起来。",
    long:
      "**你给人的第一印象**：好相处、会接话、像自带暖场插件。\n\n" +
      "**你擅长的事**：破冰、调节冲突、把不同的人拉进同一段对话。\n\n" +
      "**你容易踩的坑**：把所有人的情绪都当成你的 KPI。\n\n" +
      "**建议**：允许自己不当主持人，你不是永动机。",
    tips: "友情提示：你不用对所有人负责。",
    profile: { social: 90, feel: 70, chaos: 60, romance: 55, logic: 45, ctrl: 40, self: 55, spite: 25, order: 35 },
  },
  {
    key: "STRATEGIST",
    name: "策略家",
    note: "（先想十步）",
    blurb: "你做事习惯先建模：目标、路径、资源、风险，一样不少。",
    oneLiner: "你不是慢，你是在避免重复踩坑。",
    long:
      "**你给人的第一印象**：冷静、周全、像在脑内写方案。\n\n" +
      "**你擅长的事**：拆解问题、做预案、把复杂变成可执行。\n\n" +
      "**你容易踩的坑**：想得太完整才动手，错过窗口期。\n\n" +
      "**建议**：让计划服务行动：先做 10%，再把剩下 90%优化。",
    tips: "友情提示：计划不是拖延的护身符。",
    profile: { logic: 85, order: 75, self: 65, risk: 35, chaos: 35, ctrl: 55, focus: 70, grind: 55, social: 35 },
  },
  {
    key: "EMPATH",
    name: "共情体质",
    note: "（情绪雷达）",
    blurb: "你能从细节里读出情绪，从停顿里听出委屈。",
    oneLiner: "你很会懂人，但也很容易累。",
    long:
      "**你给人的第一印象**：温柔、细腻、很会照顾人感受。\n\n" +
      "**你擅长的事**：倾听、安抚、把人从情绪里捞出来。\n\n" +
      "**你容易踩的坑**：把别人的痛苦背在自己身上。\n\n" +
      "**建议**：共情不等于代偿；先护住自己，再谈拯救世界。",
    tips: "友情提示：你可以关机。",
    profile: { feel: 92, romance: 65, social: 60, moral: 55, spite: 20, logic: 35, self: 55, focus: 45, chaos: 55 },
  },
  {
    key: "BOUNDARY",
    name: "边界守卫",
    note: "（拒绝内耗）",
    blurb: "你不是冷漠，你只是不想把人生让渡给别人的情绪与期待。",
    oneLiner: "你最贵的东西是时间和注意力。",
    long:
      "**你给人的第一印象**：克制、有分寸、说话不多但很准。\n\n" +
      "**你擅长的事**：识别不合理请求、守住底线、减少消耗。\n\n" +
      "**你容易踩的坑**：太早抽离，导致别人误会你“不在乎”。\n\n" +
      "**建议**：在拒绝前加一句解释，会显得更温柔也更有效。",
    tips: "友情提示：边界感不是攻击性。",
    profile: { self: 85, spite: 35, moral: 55, social: 35, feel: 40, chaos: 55, order: 50, logic: 60, ctrl: 45 },
  },
  {
    key: "OPTIMIZER",
    name: "省力大师",
    note: "（一键化人生）",
    blurb: "你不是懒，你是对低效过敏。能自动化的绝不手搓。",
    oneLiner: "你把“麻烦”当成可优化对象。",
    long:
      "**你给人的第一印象**：聪明、会偷懒（但结果总是对的）。\n\n" +
      "**你擅长的事**：找捷径、做流程、把重复变成按钮。\n\n" +
      "**你容易踩的坑**：把所有事都当成优化题，忽略情绪成本。\n\n" +
      "**建议**：不是每件事都要最优解，有时候“够用”就是最优。",
    tips: "友情提示：把力气花在值得的地方。",
    profile: { lazy: 92, logic: 65, order: 55, focus: 55, grind: 35, chaos: 55, spend: 45, self: 60, social: 40 },
  },
  {
    key: "ADVENTURER",
    name: "探索者",
    note: "（先试再说）",
    blurb: "你对新鲜和未知有天然好奇：不试一下，总觉得亏。",
    oneLiner: "你的人生不是直线，是地图。",
    long:
      "**你给人的第一印象**：胆子大、点子多、行动快。\n\n" +
      "**你擅长的事**：开新局、快速学习、在试错里找答案。\n\n" +
      "**你容易踩的坑**：兴趣太多，收尾太少。\n\n" +
      "**建议**：给每个尝试设置“退出条件”，你会更自由。",
    tips: "友情提示：别把冲动当勇气。",
    profile: { risk: 90, chaos: 75, social: 55, spend: 60, order: 25, focus: 40, grind: 45, self: 55, ctrl: 35 },
  },
  {
    key: "MEDIATOR",
    name: "和事佬",
    note: "（冲突降噪）",
    blurb: "你不爱吵架，但你爱把事情谈明白。你擅长让双方都有台阶下。",
    oneLiner: "你不是怕冲突，你是嫌冲突浪费。",
    long:
      "**你给人的第一印象**：温和、理性、很会找共同点。\n\n" +
      "**你擅长的事**：协调、复盘、把对立变合作。\n\n" +
      "**你容易踩的坑**：把“和气”放在“真实”前面，憋出内伤。\n\n" +
      "**建议**：先承认分歧，再谈方案，你会更有力量。",
    tips: "友情提示：你也有情绪。",
    profile: { feel: 70, logic: 65, moral: 55, spite: 20, social: 55, chaos: 55, order: 45, self: 60, ctrl: 35 },
  },
];


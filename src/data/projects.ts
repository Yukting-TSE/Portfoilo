import { publicUrl } from "../lib/publicUrl";

export type Project = {
  id: string;
  title: string;
  challenge: string;
  approach: string;
  time: string;
  role: string;
  method: string;
  impact: string;
  images: [string, string];
  href?: string;
};

export type ProjectCategory = {
  id: string;
  label: string;
  projects: Project[];
};

/** Stable ASCII filenames under /public/images/projects */
const img = (filename: string): [string, string] => {
  const path = publicUrl(`images/projects/${filename}`);
  return [path, path];
};

export function projectPath(id: string) {
  return `/work/${id}`;
}

export function findProject(id: string) {
  for (const category of categories) {
    const project = category.projects.find((p) => p.id === id);
    if (project) return { project, category };
  }
  return null;
}

export const categories: ProjectCategory[] = [
  {
    id: "hci",
    label: "人机交互",
    projects: [
      {
        id: "fitpal",
        title:
          "FitPal: Reshape Daily Exercise Misconceptions Among Elders through AI Chatbot and Community-based Services",
        challenge:
          "老年群体在日常运动中常存在错误认知与信息鸿沟，缺乏可持续、可信赖的指导与社区支持，健康行为难以长期维系。",
        approach:
          "结合 AI 聊天机器人与社区化服务，重塑老年人对日常运动的理解，提供可对话、可协作的健康支持体验。",
        time: "CSCW Poster 2024",
        role: "第一作者 · Yuting Xie 等",
        method: "AI Chatbot · 社区服务设计 · CSCW 研究",
        impact:
          "第一作者发表于 CSCW Companion '24（DOI: 10.1145/3678884.3681880）。",
        images: img("fitpal.jpg"),
      },
      {
        id: "ai-agent-research",
        title:
          "AI Agent Assist User Research: Collaborative Role Analysis to Inspire Designer Creativity",
        challenge:
          "用户研究中的角色分析与洞察提炼耗时，设计师创造力的激发高度依赖经验与协作质量，流程难以规模化。",
        approach:
          "引入 AI Agent 协助用户研究，通过协作式角色分析支持设计师发现机会点并激发创意。",
        time: "HCII 2025 Full Paper",
        role: "共一作者 · Yuting Xie, Sijia Yang & Ningzi Chen",
        method: "AI Agent · 用户研究 · 协作式角色分析",
        impact:
          "共一作者发表于 HCII 2025 Full Paper（DOI: 10.1007/978-3-031-93415-5_14）。",
        images: img("ai-agent.png"),
      },
      {
        id: "chart-learning",
        title:
          "Designing Interactive Chart Learning Tools with Generative AI for Financial Education in Real-Time Investment",
        challenge:
          "数字金融让服务更便捷，但许多潜在投资者缺乏金融素养。图表本可成为教育工具，却常因低信噪比、透明度不足与适应性弱，难以在真实投资过程中支持知识获取与决策；数字投资平台的易用性与用户理解力之间仍有显著差距。",
        approach:
          "设计面向实时投教的交互式图表学习工具：以生成式 AI 即时解读金融图表，结合交互式学习界面与多模型知识图谱，把投资学习嵌回决策现场，让用户从被动接收者变为主动建构者。",
        time: "研究项目 · UIST Adjunct '25",
        role: "共同设计 / 交互设计研究 · 谢玉婷；李美莹；凌珑；盘家喻",
        method: "生成式 AI · 交互式图表学习 · 多模态知识图谱 · 金融教育",
        impact:
          "以大数据分析系统技术在金融投教中的交互创新为研究基础，成果发表于 UIST Adjunct '25（DOI: 10.1145/3746058.3758384）。",
        images: img("chart-learning.jpg"),
      },
      {
        id: "icmd",
        title: "icmd^ 智能配件的游戏交互创新",
        challenge:
          "智能配件产品交互形式单一——例如 Apple Pencil 长期困于屏幕书写。尽管 Pencil、Watch、AirPods 等已具备陀螺仪与加速度计，空间计算能力很少被转化为游戏化、具身化的交互体验，人与日常智能物件之间的联系仍待重构。",
        approach:
          "利用苹果智能配件内置传感器，结合 SDK 与蓝牙信号，将其转化为轻量级游戏控制器，与 iPhone / iPad 联动；以直观动作降低学习成本，拓展配件在射击、解谜等场景中的空间交互可能。",
        time: "研究项目",
        role: "共同设计 · 谢玉婷；陈宁子",
        method: "物导向设计 · 游戏交互原型 · 传感器与空间计算",
        impact:
          "提出智能配件游戏化交互路径，重塑人与日常智能物件之间的具身联系，提升设备使用率与沉浸体验。",
        images: img("icmd.png"),
      },
      {
        id: "pagoda",
        title: "中国现存古塔建筑样式分析",
        challenge:
          "古佛塔是重要文化遗产，却面临风雨侵蚀与城市更新的双重威胁；类型、材料、年代等信息分散，缺乏系统的数字化呈现与可读路径。",
        approach:
          "整理 1400+ 条古塔信息，按形制、材料与时间分类，以信息可视化与交互设计呈现中国现存古塔建筑样式。",
        time: "课程 / 研究设计",
        role: "共同设计 · 谢玉婷；张璇",
        method: "信息可视化 · 文化遗产数字化 · 交互叙事",
        impact: "形成可检索、可阅读的古塔样式分析与可视化成果。",
        images: img("pagoda.png"),
      },
    ],
  },
  {
    id: "media",
    label: "媒体设计",
    projects: [
      {
        id: "human-zip",
        title: "Human.zip: 数字文化中的自我压缩",
        challenge:
          "数字社交催生「自我压缩」——个体以表情、短文、图像等简化形式表达自我，丰富情感与身份认同逐渐被符号化数据包取代；我们是谁，愈发像算法协商的产物。",
        approach:
          "提出 Human.zip 概念，完成研究论文与跨媒体实验剧场 AutoSkin：以小说、沉浸式展览与表演，探讨数据与社会期待如何规训个体，并回应挣脱「人格外壳」的渴望。",
        time: "ESADSE 媒体设计硕士毕业项目",
        role: "独立创作 / 研究与跨媒体叙事",
        method: "研究论文 · 跨媒体剧场 · 沉浸式展览",
        impact:
          "以论文《Human.zip: Ego Compression in Digital Culture》与 AutoSkin 展览回应数字身份议题。",
        images: img("human-zip.jpg"),
      },
      {
        id: "forest-theatre",
        title: "森林剧场-Forest Theatre",
        challenge:
          "香港高密度都市中，自然与社会空间二元对立，被忽视的自然生态与社区共生关系亟需被重新看见。",
        approach:
          "收集植物生物电并转化为音乐，结合沉浸式舞蹈与跨媒体装置，邀请观众以冥想状态与自然共鸣，呼吁保护与改善自然生态。",
        time: "跨媒体实验剧场",
        role: "共同设计 · 谢玉婷；曾璵霖",
        method: "生物电 · 音乐生成 · 跨媒体舞蹈",
        impact: "以跨界演出与装置推动社区参与，为可持续都市自然关系提供新视角。",
        images: img("forest-theatre.jpg"),
      },
      {
        id: "oppo-tennis",
        title: "“OPPOx 双网”世界网球锦标赛的 IP 延申形象再设计",
        challenge:
          "赛事 IP 需要可延展的形象系统，将运动员梦想与品牌叙事转化为可传播的视觉角色与故事。",
        approach:
          "以「爱探险的小欧 / 梦之星球 / 梦想花朵」为叙事主线，完成 IP 延伸形象与视觉故事设计。",
        time: "品牌 / IP 设计",
        role: "视觉与 IP 延申设计",
        method: "角色设计 · 叙事视觉 · 品牌延申",
        impact: "建立可延展的赛事 IP 形象与故事化视觉语言。",
        images: img("oppo-tennis.jpg"),
      },
      {
        id: "oppo-theme",
        title: "童趣-OPPO手机主题及手表设计",
        challenge:
          "智能手机是日常最常用的工具，却也最容易陷入惯性；如何重新唤起童年般的玩乐与自由描绘感？",
        approach:
          "以童年玩具为主题，在手机与手表端呈现插画式自由绘制的动效与定制体验，让界面重新变得可玩。",
        time: "2020",
        role: "主题与动效设计",
        method: "插画主题 · 动效 · 可穿戴界面",
        impact:
          "获 OPPO 校园 Reno-vators 全球青年创作计划——2020 品牌应用奖。",
        images: img("oppo-theme.gif"),
      },
      {
        id: "science-poster",
        title: "《聚集诱导发光》《基于高温硫锚定合成方法学的动态海报设计》",
        challenge:
          "如何将 Nature / Science 级科研成果转译为可感知的视觉设计，沟通科学与公众。",
        approach:
          "参与「科学之美」视觉设计实验工作坊，以动态海报解读中科大相关论文成果，做艺术与科学的跨界转译。",
        time: "2022 · 中国科学技术大学展出",
        role: "海报设计 · 谢玉婷、许昕、杜映彤",
        method: "科学可视化 · 动态海报 · 跨学科工作坊",
        impact: "作品于中国科学技术大学展出，成为艺术与科学跨界创作成果。",
        images: img("science-poster.jpg"),
      },
    ],
  },
  {
    id: "install",
    label: "装置艺术",
    projects: [
      {
        id: "choir-bot",
        title: "Choir Bot-声光互动装置",
        challenge:
          "当语言失效、信仰向技术转移时，未尽之言如何通过超越理性的媒介被传达与安放？忏悔不再只是求宽恕，而是人对自我的救赎。",
        approach:
          "构建赛博忏悔室：观者向麦克风倾诉，装置将音频特征转为音乐，并以激光矩阵响应节奏，灯光直射云端指示「传输」的路径与完成。",
        time: "展出于浙江龙游瀫石光·艺术生态走廊",
        role: "共同设计 · 谢玉婷；许昕",
        method: "音频分析 · 音乐生成 · 激光矩阵",
        impact: "以声光仪式呈现科技宗教语境下的情感吐露与自我救赎。",
        images: img("choir-bot.jpg"),
      },
      {
        id: "emotion-resonance",
        title: "情感谐振-湿媒体生物交互装置",
        challenge:
          "人类中心主义下的「植物盲」使植物主体性被忽视；植物与人同样具有丰富感知，却长期被视为背景而非可对话的生命主体。",
        approach:
          "以植物视角出发：将植物微电流转为音乐，并将观者脑电波转译为自然之声，以共同演奏建立跨物种沟通，同时模拟生物演变的可视化可能。",
        time: "生物艺术装置",
        role: "Interaction Designer · 谢玉婷",
        method: "湿媒体 · 脑电波交互 · 音乐生成",
        impact: "承认并尊重植物的感知与话语权，创造跨物种情感谐振体验。",
        images: img("emotion-resonance.jpg"),
      },
      {
        id: "silent-trace",
        title: "Silent trace-跨媒体戏剧表演",
        challenge:
          "个体行动轨迹被持续记录与景观化；当「被监控」成为日常，痕迹能否转化为可反思的身体书写，而非单向控制数据？",
        approach:
          "与戏剧《Hey Erica》合作，将人流与热成像痕迹转译为具有时间厚度的视觉结构，于南京保利大剧院呈现。",
        time: "南京保利大剧院·金色音乐厅",
        role: "共同设计 · 谢玉婷；冯圆；抓嘛 / 不散不肆剧社",
        method: "跨媒体戏剧 · 轨迹可视化 · 监控批判",
        impact: "把监控数据重新理解为可感知的身体书写，强化对可见性与自我意识的反思。",
        images: img("silent-trace.jpg"),
      },
      {
        id: "arcadia",
        title: "桃源幻境 ARCADIA 艺术展",
        challenge:
          "大型沉浸式联展需要跨地点、跨媒介的交互技术支持，让观众真正「进入」叙事空间，连接数字未来与中国传统文化。",
        approach:
          "负责交互技术支持与开发，参与三地分篇章展出的机械装置、沉浸空间与互动体验（如阮咸五音激光等）。",
        time: "南艺 520 毕业展演嘉年华",
        role: "Media interaction-designer · 谢玉婷",
        method: "交互技术开发 · 沉浸式装置 · 激光/影像互动",
        impact: "支撑桃源幻境联展的互动体验落地，引导观众由好奇走向思考。",
        images: img("arcadia.png"),
      },
      {
        id: "hotel-table",
        title: "南京正晴和酒店的多媒体互动餐桌设计",
        challenge:
          "高端餐饮空间需要从氛围装饰走向文化叙事，让用餐成为低负担的历史与文化体验，而非博物馆式观看。",
        approach:
          "以多媒体互动餐桌嵌入「中华五千年文明」叙事，将宏大历史转译为餐桌上的时间体验。",
        time: "酒店空间委托设计",
        role: "多媒体交互设计",
        method: "空间叙事 · 互动桌面 · 文化体验设计",
        impact: "使进餐过程成为可感知的东方文化时间轴体验。",
        images: img("hotel-table.jpg"),
      },
      {
        id: "yangzhou-projection",
        title: "扬州小秦淮户外投影戏剧",
        challenge:
          "历史水岸面临「景观化而非生活化」：空间被保留，叙事功能与文化参与却被削弱。",
        approach:
          "以户外戏剧投影将扬州传统文化与数字影像结合，以非侵入方式激活夜间公共空间与场所记忆。",
        time: "城市公共空间项目",
        role: "投影戏剧 / 跨媒介设计",
        method: "户外投影 · 戏剧叙事 · 城市更新介入",
        impact: "让小秦淮从被观看的历史景观转为可参与的文化场景。",
        images: img("yangzhou-projection.jpg"),
      },
    ],
  },
];

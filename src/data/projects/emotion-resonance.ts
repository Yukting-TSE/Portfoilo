import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/emotion-resonance/${filename}`);

export const emotionResonanceDetail: ProjectDetail = {
  cover: {
    src: publicUrl("images/projects/emotion-resonance/cover.mp4"),
    poster: publicUrl("images/projects/emotion-resonance.jpg"),
    alt: "情感谐振-湿媒体生物交互装置",
    video: true,
    soundToggle: true,
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Co-designer", value: "谢玉婷" },
    { label: "Keyword", value: "跨物种交互；生物电传感；生成式视听" },
    { label: "Time", value: "2022" },
    { label: "Tutor", value: "童芳" },
  ],
  lead: [
    "在人类中心主义与量化技术的语境下，植物常被视作静止、被动的背景，其感知与主体性长期被「植物盲」所遮蔽。《情感谐振》试图从植物的视角出发，承认并尊重非人生命的表达可能：装置采集植物生物电，将其转译为实时生成的音乐，使植物成为具有主动表达能力的「演奏者」；观者脑电则转译为自然之声，与植物音乐共同构成跨物种合奏。实时数据进一步驱动 TouchDesigner 中的生物形态演化视觉，追问在智能时代，人与植物能否走出单向观看，形成彼此呼应、甚至协同进化的关系。",
    "由同济大学设计创意学院带领，参与米兰设计周、荷兰设计周。",
  ],
  sections: [
    {
      type: "part",
      number: "01",
      title: "Research Background",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "人类中心主义语境下的「植物盲」",
          paragraphs: [
            "在人类中心主义的影响下，人与自然的关系逐渐演变为一种单向度的控制与索取关系。技术的发展进一步强化了这种结构：自然被转译为可被量化、预测与优化的系统，而生命的多样性与主体性则被压缩为可计算的参数。植物作为生态系统中最基础、却又最沉默的生命形态，尤为容易被忽视。",
            "「植物盲」正是在此语境下被提出的概念，用以描述人类在认知与感知层面对植物的系统性忽略。相关研究指出，相较于动物，人类更难意识到植物的存在价值、生命活动与生态功能，并倾向于将其视为静止、被动、缺乏行为与意识的生命形式。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-02.png"),
              caption: "Ego · Eco — anthropocentric hierarchy and ecological interconnectivity",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Signal Translation",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "从植物盲到对等存在",
          paragraphs: [
            "以植物为中心梳理人与非人生命的关系，是《情感谐振》的概念起点。在传统人类中心视角下，植物常被降格为静止的观察对象；「植物盲」则进一步使这种忽略成为常态。与之相对，深层生态学与植物神经研究指向另一种可能：感知、通信、反馈、情感与智能并非人类独有，生存欲望同样驱动着植物内部的调节与表达。",
            "由此，人类与植物的关系被重新理解为生态中的「对等存在」——二者并非观看与被观看的单向结构，而是可以彼此感应、彼此回应的生命同伴。设计思路也从这一关系图谱出发：通过音乐化与可视化，把植物难以被直接感知的内部活动转译为可共享的感官经验，为跨物种的对话与合奏搭建平台。",
          ],
        },
        {
          type: "prose",
          title: "植物与脑电的信号转译",
          paragraphs: [
            "植物科学与生态哲学的研究正在不断挑战传统认知。植物神经生物学提出，植物并非简单的「自动化生命体」，而是通过电信号、激素传递与感知反馈形成高度复杂的内部调节系统，使其能够感知环境变化并作出适应性决策。",
            "装置以植物体表与根系所产生的微弱生物电信号作为主要输入源。这些信号通过电极采集后输入至 Arduino 控制板，经由算法对其进行滤波、归一化与参数映射处理，最终转换为 MIDI 信号。MIDI 信号被输入至 Ableton Live 中的合成器与音色模块，音高、节奏密度、音色变化等音乐参数实时受植物生物电变化影响，将植物视为具有主动表达能力的「演奏者」。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-03.png"),
              caption: "Plant analysis diagram · musicalization & visualization workflow",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "03",
      title: "Co-performance & Visualization",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "人类脑电与植物声音的交互",
          paragraphs: [
            "为了进一步打破单向「观看植物」的人类主导视角，项目引入观者的脑电波作为第二输入维度。观者佩戴脑电采集设备（如 Muse 2），实时获取其专注度、放松度等脑电特征参数，并通过 OSC 协议传输至计算机端。",
            "脑电数据并不直接控制植物音乐，而是被转译为「自然之声」的生成参数，如环境音层次、音色空间感与节奏浮动。由此形成由植物生物电—人类脑电—声音环境共同构成的交互系统，使声音在多重生命信号之间动态生成，讨论人类与植物在智能时代中是否能够形成协同进化的可能性。",
          ],
        },
        {
          type: "prose",
          title: "从实时数据到生物演变模拟",
          paragraphs: [
            "除声音层面的转译外，项目还将植物与人类产生的实时数据输入至 TouchDesigner 中，用于生成生物形态演化的视觉模拟。视觉并非对真实植物形态的写实再现，而是基于参数变化构建一种「进化隐喻」式的动态图形结构，用以探讨生命在技术介入下的潜在演变路径。",
            "当植物的生命活动被持续记录、计算与放大，其「进化」是否仍仅限于自然选择，还是会因技术共生而呈现新的可能性——这一追问构成了作品在可视化层面的核心议题。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-04.png"),
              caption: "System implementation — bioelectric capture, Ableton synthesis, Muse2 OSC, TouchDesigner visuals & installation build",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "04",
      title: "Project Details",
    },
    {
      type: "columns",
      align: "start",
      rowAlign: "end",
      left: [
        {
          type: "figure",
          figures: [{ src: img("fig-06.jpg"), alt: "Installation detail" }],
        },
        {
          type: "figure",
          figures: [{ src: img("fig-05.jpg"), alt: "Installation detail" }],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [{ src: img("fig-08.jpg"), alt: "Installation detail" }],
        },
        {
          type: "figure",
          figures: [{ src: img("fig-07.jpg"), alt: "Installation detail" }],
        },
      ],
    },
    {
      type: "part",
      number: "05",
      title: "Exhibition",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "米兰设计周 2024",
          paragraphs: [
            "由同济大学设计创意学院带领，于 2024 米兰设计周 SaloneSatellite 卫星沙龙展出。",
          ],
        },
        {
          type: "prose",
          title: "荷兰设计周 2024",
          paragraphs: [
            "由同济大学设计创意学院带领，于 2024 荷兰设计周（埃因霍温）FMTTM 数字展览装置中展出。",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "收录于《100个D&I学生获奖作品》。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("exhibition.png"),
              alt: "Exhibition documentation",
            },
          ],
        },
      ],
    },
  ],
};

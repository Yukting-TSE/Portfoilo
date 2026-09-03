import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/silent-trace/${filename}`);

export const silentTraceDetail: ProjectDetail = {
  cover: {
    src: publicUrl("images/projects/silent-trace.jpg"),
    alt: "Silent trace-跨媒体戏剧表演",
  },
  eyebrow: "Case Study",
  meta: [
    {
      label: "Co-designer",
      value: "谢玉婷；冯圆；抓嘛（南京）文化艺术创作有限公司、不散不肆剧社",
    },
    { label: "Keyword", value: "跨媒体戏剧表演；监控；算法" },
    { label: "Time", value: "2020" },
  ],
  lead: [
    "在当代高度数据化的社会环境中，个体的行动轨迹正持续被记录、分析并转化为可视化信息。这一现象可追溯至福柯在《规训与惩罚》中提出的「全景监狱（Panopticon）」理论，即通过无处不在但不可见的监控机制，使个体在内化权力结构的过程中实现自我规训。当代城市中的定位系统、摄像头与行为追踪算法，正构成一种去中心化但高度精确的「数字全景监狱」。",
    "本项目并不试图否定或阻断这一技术趋势，而是将问题意识转向：当行动不可避免地被记录时，这些「痕迹」是否可以被重新理解为一种可被感知、被反思的身体书写形式，而非单向度的监控数据。该项目作为与戏剧作品《Hey Erica》的合作展演，于南京保利大剧院·金色音乐厅呈现。",
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
          title: "数字全景监狱与行动轨迹",
          paragraphs: [
            "在当代城市空间中，个体的日常出行与身体行动正持续被各类技术系统记录、分析并转化为数据图像。进入数字时代后，全景监狱机制进一步扩展至定位系统、热成像、人流监测与可视化算法，使身体行动本身成为可被计算与再现的对象。",
            "在这一背景下，行动轨迹不再是瞬时、不可见的过程，而是被固化为清晰、可追溯的视觉信息。本项目并不试图否定或抵抗监控技术的存在，而是提出另一种问题意识：当「被记录」已成为日常状态，个体是否仍有可能通过对痕迹呈现方式的转译，重新理解自己在现实世界与数字世界中留下的行动印记？",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-01.png"),
              caption: "Fig.1  Digital panopticon — traced movement",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Visual Strategy",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "从监控数据到感知经验",
          paragraphs: [
            "既有研究中，关于监控技术的讨论多集中于社会控制、隐私伦理与权力结构层面，而新媒体艺术与可视化研究则开始关注数据如何转化为感知经验与审美对象。Manovich 指出，可视化并非中立呈现，而是一种重新组织现实的文化形式，其表现方式将直接影响观者对数据意义的理解。",
            "Mark Hansen 在对数字艺术中「身体经验」的研究中提出，技术图像并非替代身体，而是通过感知层面的延展，重构身体与环境之间的关系。行为轨迹可被视为一种「数字痕迹」，它既源于身体行动，又脱离了具体个体身份，成为介于数据与经验之间的中间态。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-02.png"),
              caption: "Fig.2  Data visualization as cultural form",
            },
          ],
        },
      ],
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "热成像与痕迹晕染",
          paragraphs: [
            "本项目选择以人流检测与热成像技术作为视觉媒介，但并不强调识别与统计功能，而是通过晕染、叠加与扩散的方式，使行动从「点状数据」逐渐演变为「面状痕迹」。这种处理方式可被视为对监控可视化逻辑的一种艺术性偏移，将原本用于管理的技术系统转化为对行动本身的感知与反思工具。",
            "个体行动被从即时反馈中解放出来，转而呈现为一种具有时间厚度与空间记忆的视觉结构，使观者能够直观感受到「行动如何被累积、被放大、被景观化」的过程。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-03.jpg"),
              caption: "Fig.3  Heat imaging — point to surface traces",
            },
            {
              src: img("fig-04.png"),
              caption: "Fig.4  Trace diffusion & overlay",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "03",
      title: "Theatre Collaboration",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "与《Hey Erica》的跨媒介展演",
          paragraphs: [
            "本项目与戏剧作品《Hey Erica》合作展演，于南京保利大剧院·金色音乐厅呈现。在这一语境中，装置不再是独立的展示对象，而是嵌入戏剧空间中的感知层结构。数字媒介在当代表演中往往承担「扩展舞台」的角色，使观众的身体、行动与感知成为作品生成的一部分。",
            "观众的移动路径与聚集状态通过热成像系统实时转化为屏幕中的行动痕迹，这些痕迹以发散式方式从点扩展为面，与戏剧叙事中的情绪变化和心理张力形成呼应。戏剧关注个体在系统、关系与自我认知中的困境，而装置则以可视化方式呈现「被观看的行动本身」，二者共同构建出一个关于「可见性」「暴露」与「自我意识」的复合空间。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-05.jpg"),
              caption: "Fig.5  Hey Erica — Nanjing Poly Theatre performance",
            },
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "观众作为痕迹生成者",
      paragraphs: [
        "通过这一跨媒介结合，观众不再只是被动的观看者，而是在进入剧场的同时，成为痕迹生成机制的一部分，其行动直接参与到作品的视觉结构之中，从而强化了作品对监控社会与个体处境的反思维度。",
      ],
    },
  ],
};

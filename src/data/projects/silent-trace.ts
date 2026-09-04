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
    { label: "Co-designer", value: "谢玉婷" },
    {
      label: "Keyword",
      value: "跨媒介剧场；行为轨迹可视化",
    },
    { label: "Time", value: "2020" },
    {
      label: "Collaborating Lab",
      value: "冯圆；抓嘛（南京）文化艺术创作有限公司、不散不肆剧社",
    },
  ],
  lead: [
    "本项目与戏剧《Hey Erica》合作，于南京保利大剧院·金色音乐厅呈现。以人流检测与热成像将个体行动轨迹从监控数据转译为可感知的视觉痕迹，探讨在「被记录」成为日常的语境下，身体行动能否重新成为可被反思的书写形式，而非单向度的控制信息；在本项目中，本人负责新媒体交互开发与展览装置。",
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
              caption: "Digital panopticon — traced movement",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Creative Process",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "问题",
          paragraphs: [
            "现场需要一套实时视觉系统：把观众与演员在剧场中的移动，即时转译为屏幕上的行动痕迹。难点不在于「检测到人」，而在于监控式检测只能输出框与坐标，无法直接得到可叠加、可晕染、随时间累积的轨迹面——这是本项目首先要解决的技术问题。",
          ],
        },
        {
          type: "prose",
          title: "方案与实现",
          paragraphs: [
            "在 TouchDesigner 中从零搭建 `optical_flow_particles_compute` 网络：以 Camera / Movie File In 接入画面，经 Optical Flow TOP 逐帧计算稠密光流场，再将运动矢量写入粒子计算模块，驱动粒子在对应像素位置发射、沿位移方向运动，并通过 Feedback 与透明度衰减让多帧痕迹叠加留存。开发阶段用预录影像离线迭代，重点调试发射阈值（过滤静止噪点）、粒子寿命、速度继承比例与扩散半径，解决早期「粒子不跟手、轨迹断续、静止区域乱闪」等问题。",
            "最终得到一套可稳定运行在 30fps 的跟随式粒子渲染：运动主体经过之处持续留下由点及面的光影痕迹，且不依赖人脸识别或 ID 追踪；同一套网络可直接切换至剧场摄像头输入，为《Hey Erica》现场实时输出服务。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("cover.mp4"),
              video: true,
              soundToggle: true,
              caption: "粒子渲染效果测试记录",
            },
          ],
        },
        {
          type: "figure",
          figures: [
            {
              src: img("fig-02.png"),
              caption: "TouchDesigner 节点网络 — 光流追踪与粒子痕迹合成",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "03",
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
        {
          type: "prose",
          title: "热成像与痕迹晕染",
          paragraphs: [
            "本项目选择以人流检测与热成像技术作为视觉媒介，但并不强调识别与统计功能，而是通过晕染、叠加与扩散的方式，使行动从「点状数据」逐渐演变为「面状痕迹」。这种处理方式可被视为对监控可视化逻辑的一种艺术性偏移，将原本用于管理的技术系统转化为对行动本身的感知与反思工具。",
            "个体行动被从即时反馈中解放出来，转而呈现为一种具有时间厚度与空间记忆的视觉结构，使观者能够直观感受到「行动如何被累积、被放大、被景观化」的过程。",
          ],
        },
        {
          type: "prose",
          title: "与《Hey Erica》的跨媒介展演",
          paragraphs: [
            "本项目与戏剧作品《Hey Erica》合作展演，于南京保利大剧院·金色音乐厅呈现。在这一语境中，装置不再是独立的展示对象，而是嵌入戏剧空间中的感知层结构。数字媒介在当代表演中往往承担「扩展舞台」的角色，使观众的身体、行动与感知成为作品生成的一部分。",
            "观众的移动路径与聚集状态通过热成像系统实时转化为屏幕中的行动痕迹，这些痕迹以发散式方式从点扩展为面，与戏剧叙事中的情绪变化和心理张力形成呼应。戏剧关注个体在系统、关系与自我认知中的困境，而装置则以可视化方式呈现「被观看的行动本身」，二者共同构建出一个关于「可见性」「暴露」与「自我意识」的复合空间。",
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
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-03.jpg"),
              caption: "Heat imaging — point to surface traces",
            },
          ],
        },
      ],
    },
  ],
};

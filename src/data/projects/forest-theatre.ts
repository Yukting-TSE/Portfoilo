import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/forest-theatre/${filename}`);

export const forestTheatreDetail: ProjectDetail = {
  cover: {
    src: img("cover.mp4"),
    poster: publicUrl("images/projects/forest-theatre.jpg"),
    alt: "森林剧场-Forest Theatre",
    video: true,
    soundToggle: true,
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Co-designer", value: "谢玉婷；曾璵霖" },
    {
      label: "Keyword",
      value: "跨媒体实验剧场 · 自然 · 生物电 · 音乐生成",
    },
    { label: "Time", value: "跨媒体实验剧场" },
  ],
  lead: [
    "自然空间与社会空间的二元对立，折射出香港在人口稠密的都市空间中与自然共存所面临的问题与挑战，而被忽视的自然生态与社区共生关系亟需更多关注。演出灵感源于森林冥想：植物如同人类般拥有丰富的感知能力；装置收集天然植物的生物电能并转化为音乐，借由声波传递植物的情感意识，观众则以冥想状态参与沉浸式舞蹈表演，与自然空间产生共鸣。",
  ],
  sections: [
    {
      type: "part",
      number: "01",
      title: "第一阶段：研究与创意",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "场域调研与问题设定",
          paragraphs: [
            "团队深入调研香港不同区域的自然环境与本土文化，收集相关数据、信息及故事，把高密度都市中「被忽视的自然」重新放回创作议程。研究同时回应项目目标：以自然与社会空间的关系为切入点，推动跨界合作与社会创新，呼吁保护与改善自然生态。",
            "调研过程关注植物微电流、声景与身体感知如何被记录与转译，为后续装置与舞蹈提供可操作的概念原型——让植物获得与人类同等的成长权利与平等话语权，不再只是背景，而是可对话的生命主体。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-phase-1-biosignal.jpg"),
              caption:
                "Fig.1  Bioelectric sensing — linking plant, body, and sound",
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
          title: "创意构思",
          paragraphs: [
            "在场域与生物电观察之上，团队整理灵感线索：森林冥想的身心状态、声波作为情感通道、以及观众如何以低干预姿态进入自然空间。这些材料被收敛为跨媒体实验剧场的叙事骨架，指导下一阶段的动作、装置与现场编排。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-phase-3-presence.jpg"),
              caption: "Fig.2  Field presence — re-seeing neglected nature",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "第二阶段：创作与制作",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "装置与舞蹈编排",
          paragraphs: [
            "基于研究成果，团队设计并制作跨媒体舞蹈作品的各项元素：舞蹈动作、生物电—音乐生成链路，以及可在自然环境中部署的互动装置，形成完整的艺术表达。新媒体互动装置与舞蹈共融，以外化的音乐呈现植物的情感意识。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-phase-2-concept.jpg"),
              caption:
                "Fig.3  Concept — interactive installation and dance through music",
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
          title: "视觉与叙事定调",
          paragraphs: [
            "同步完成关键视觉与叙事定调，使装置、表演与传播影像共享同一套自然—身体—声波的意象语言，为现场演出与后续互动留下可延展的视觉识别。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-key-visual.jpg"),
              caption: "Fig.4  Forest Theatre — key visual",
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
          title: "演出与呈现",
          paragraphs: [
            "选取前期调研的自然环境，结合跨媒体舞蹈与自然表演进行现场创作。观者被邀请以冥想状态进入空间，与植物声波共同构成一场可感知的「森林剧场」。",
            "未来阶段还将在香港不同自然环境与社会空间展开系列演出，并配套讲座、工作坊与展览，收集公众反馈；同时寻求与本地机构合作，引入专业知识与资源支持。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-phase-future-performance.jpg"),
              caption: "Fig.5  Site performance — dance with the living forest",
            },
          ],
        },
      ],
    },
  ],
};

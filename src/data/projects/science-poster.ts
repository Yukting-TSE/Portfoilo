import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/science-poster/${filename}`);

export const sciencePosterDetail: ProjectDetail = {
  cover: {
    src: img("cover.mp4"),
    poster: img("cover-poster.jpg"),
    alt: "基于高温硫锚定合成方法学的动态海报设计",
    video: true,
    fit: "natural",
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Co-designer", value: "谢玉婷；许昕；杜映彤" },
    {
      label: "Keyword",
      value: "科学可视化 · 动态海报 · 跨学科工作坊",
    },
    { label: "Time", value: "2022" },
    {
      label: "Tutor",
      value: "童芳（南艺）；陈皓（南艺）；马子颂（中科大）",
    },
  ],
  lead: [
    "由南京艺术学院师生与中国科学技术大学艺术与科学研究中心教师共同创作的「科学之美」视觉设计实验工作坊海报设计作品在中国科学技术大学展出。海报创作以中科大作为第一单位 2021 年发表在世界顶级学术期刊上的 10 篇论文为设计对象，运用视觉设计方式对其进行科学解读与艺术表现，是南京艺术学院以「艺术与科学」学科跨界为背景的阶段性创作成果。",
  ],
  sections: [
    {
      type: "part",
      number: "01",
      title: "Design",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "期刊封面及论文原文（部分）",
          paragraphs: [
            "2021 年 10 月，中国科学技术大学梁海伟教授与林岳博士、北京航空航天大学水江澜教授等合作，发表 Science 论文：",
            "Sulfur-anchoring synthesis of platinum intermetallic nanoparticle catalysts for fuel cells. Science 374, 459–464 (2021)",
            "论文面向氢燃料电池中的铂基催化剂：有序金属间化合物纳米颗粒活性高，但高温退火常导致颗粒烧结变大、比表面积下降。研究团队在硫掺杂碳载体上利用铂—硫强相互作用抑制烧结，在高达约 1000°C 仍可得到平均粒径小于 5 nm 的有序颗粒，并构建含 46 种铂基组合的材料库，用于筛选高活性、低铂载量的氧还原催化剂。",
          ],
        },
        {
          type: "prose",
          title: "设计策略",
          paragraphs: [
            "科学海报需要把「方法—结构—意义」一次讲清，而不是复述论文摘要。我们抓住论文里最可感知的一对矛盾：高温是形成有序结构的条件，却也会让金属颗粒长大失效；硫锚定正是解开矛盾的关键。",
            "因此视觉策略定为「把锚定关系做成可看的结构」：用六边形网格暗示硫掺杂碳载体，用标有 S 的锚点与发光连线表现 Pt–S 束缚，用 Pt / Co 等金属球簇表现有序金属间化合物纳米颗粒。标题采用分块黑体，保留论文关键词的可检索性，同时让画面在展场立式阵列中仍保持远距离识别度。",
          ],
        },
        {
          type: "prose",
          title: "视觉转译",
          paragraphs: [
            "· 硫锚定：橙色 S 原子贴附于蜂窝状载体，并以高亮连线「拴住」中心金属簇，对应载体对铂的抗烧结作用。",
            "· 有序纳米结构：蓝色金属球按晶格感排布，强调金属间化合物的原子级有序，而非无定形团聚。",
            "· 燃料电池语境：暗色科技底与冷暖对比，把催化场景从实验室图表转译为可传播的视觉叙事，服务科普展陈与公众阅读。",
            "动态版本进一步用运动强化「锚定—稳定—成簇」的时间过程，使方法学本身成为动画叙事的主线。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-paper.jpg"),
              caption: "期刊封面及论文原文（部分）",
            },
            {
              src: img("fig-paper2.png"),
              caption:
                "引自论文 Fig. 1. Synthesis and structural characterization of Pt-based i-NPs on S-C. (A) Schematic illustration showing the kinetic energy barrier for atom ordering in the disorder-to-order transition. (B) Schematic illustration showing the dilemma of simultaneously accelerated sintering kinetics and atom ordering kinetics with temperature. (C) Schematic illustration of the high-temperature sulfur-anchoring synthetic approach. (D and E) XRD patterns of PtCo and Pt₃Co i-NPs, respectively. The standard peaks for Pt and ordered and disordered PtCo/Pt₃Co are also shown. Asterisks mark the characteristic superlattice peaks of ordered intermetallic structures. (F and G) HAADF-STEM images of PtCo and Pt₃Co i-NPs, respectively. The inserted histograms are the statistics of particle size distribution of corresponding i-NPs. d, diameter.",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Exhibition",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "展出与现场",
          paragraphs: [
            "展场以立式海报阵列呈现多篇论文的视觉解读，观者可在空间中走动对照科学图示与艺术转译。",
            "· 2021 中国科大重大原创性科技成果艺术海报展：中国科学技术大学（USTC1958），2022.4.22–5.22",
            "· 「缠绕：国家自然科学奖一等奖项目视觉艺术展」：第十八届中国（深圳）文博会，2022.12",
            "· 「纠缠：国家自然科学奖一等奖成果视觉艺术展」：中国科大博物馆（2023.5）；中国科大高新区图书馆；2023 全国科普日主场活动（北京首钢园）；江苏省青少年科创教育成果博览会",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: publicUrl("images/projects/science-poster-exhibition.jpg"),
              caption: "展览海报与现场（中国科大海报展 / 「纠缠」巡展）",
            },
          ],
        },
      ],
    },
  ],
};

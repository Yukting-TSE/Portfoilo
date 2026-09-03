import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/arcadia/${filename}`);

export const arcadiaDetail: ProjectDetail = {
  cover: {
    src: publicUrl("images/projects/arcadia.png"),
    alt: "桃源幻境 ARCADIA 艺术展",
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Co-designer", value: "谢玉婷" },
    { label: "Keyword", value: "交互技术开发 · 沉浸式装置 · 激光影像互动" },
    { label: "Time", value: "2024" },
  ],
  lead: [
    "「桃源·幻境 ARCADIA」是一场结合机械装置、沉浸式空间、交互体验的新观念沉浸式艺术联展，作为南京艺术学院 520 毕业展演嘉年华的重要组成部分，创造性地在夫子庙 MO 音琵琶街、马群招商花园城、景枫 KINGMO 三地分三个篇章同时展出，运用新媒体的表现形式，探索数字时代的未来与中国传统文化之间的联系。",
    "通过营造出一个未来主义的古典幻境，引领观众经历一个由好奇到思考的探寻过程。在该项目中，本人负责交互技术支持与开发。",
  ],
  sections: [
    {
      type: "part",
      number: "01",
      title: "Exhibition Overview",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "物物 WUWU · 桃源幻境 ARCADIA",
          paragraphs: [
            "物物 WUWU | 桃源幻境 ARCADIA 新观念沉浸式艺术联展于 5 月 20 日至 6 月 20 日呈现，为南京艺术学院设计学院 2021 毕业季的重要组成部分。",
            "联展以机械装置、沉浸式空间与交互体验为核心媒介，在夫子庙 MO 音琵琶街、马群招商花园城、景枫 KINGMO 三地分三个篇章同步展开，通过新媒体形式连接数字时代的未来想象与中国传统文化脉络。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-01.jpg"),
              caption: "Fig.1  ARCADIA — three-chapter immersive exhibition",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Interactive Works",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "阮咸 · 五音激光互动",
          paragraphs: [
            "阮咸，竹林七贤之一，同时也是历史上唯一用人名命名的乐器。阮咸（乐器）使用可视化的互动影像呈现，「阴」「阳」融合恰到好处。轻触五根激光束，可发出「宫、商、角、徵、羽」五种不同的声调。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-02.png"),
              caption: "Fig.2  Ruan Xian — five-tone laser interaction",
            },
            {
              src: img("fig-03.png"),
              caption: "Fig.3  Yin-yang visual fusion",
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
          title: "洛神 · 幻境空间的制造者",
          paragraphs: [
            "曹植梦中的洛神，或许就是今天的「宇航员」，也是幻境空间的制造者。他身上的显示屏仿佛透视出他内在的「骨骼」，似乎要展示出这一切的来龙去脉。请走近它，他会给你别样的回应。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-04.png"),
              caption: "Fig.4  Luo Shen — screen-body interface",
            },
            {
              src: img("fig-05.png"),
              caption: "Fig.5  Exhibition process documentation",
            },
          ],
        },
      ],
    },
  ],
};

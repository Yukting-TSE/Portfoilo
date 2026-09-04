import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/hotel-table/${filename}`);

export const hotelTableDetail: ProjectDetail = {
  cover: {
    src: img("fig-08.jpg"),
    alt: "南京正晴和酒店的多媒体互动餐桌设计",
    fit: "natural",
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Role", value: "新媒体内容视频制作" },
    { label: "Keyword", value: "空间叙事 · 互动桌面 · 文化体验设计" },
    { label: "Time", value: "酒店空间委托设计" },
    {
      label: "Collaborating Partners",
      value: "南京米点文化有限公司；南京正晴和酒店",
    },
  ],
  lead: [
    "随着沉浸式体验经济在高端餐饮与酒店空间中的广泛应用，多媒体技术逐渐从「氛围装饰」转向「文化叙事媒介」。南京正晴和酒店作为具有明确东方文化定位的高端酒店品牌，其餐饮空间不仅承担用餐功能，更被视为展示中国文化精神与历史纵深的重要场域。",
    "在此背景下，项目以「中华五千年文明」为核心内容，尝试通过多媒体互动餐桌的形式，将宏大的历史叙事嵌入日常用餐行为之中，实现文化体验与消费场景的融合。在本项目中，本人负责新媒体内容视频制作。",
  ],
  sections: [
    {
      type: "part",
      number: "01",
      title: "Context",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "从氛围装饰到文化叙事",
          paragraphs: [
            "高端餐饮与酒店空间中，多媒体技术正经历从环境氛围营造到内容叙事的角色转变。正晴和酒店的餐饮空间需要承载的不只是用餐行为，更是东方文化精神与历史纵深的可感知体验。",
            "项目将历史叙事从「博物馆式观看」转译为「餐桌上的时间体验」，使观众在进餐过程中以低认知负担的方式感知不同朝代的文化气质与精神意象，符合近年来文化展示从「信息传递」向「情境体验」转型的趋势。",
          ],
        },
        {
          type: "prose",
          title: "文化意象参考",
          paragraphs: [
            "视觉内容参考中国传统绘画经典，如《捣练图》，经数字化处理后融入桌面叙事系统，与酒店整体东方美学定位形成一致的空间体验。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-08.jpg"),
              caption: "捣练图 — classical motif integration",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Design Approach",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "中华五千年文明的时间轴",
          paragraphs: [
            "南京作为六朝古都，本身即是中国历史时间轴上的关键节点。项目将历史叙事从「博物馆式观看」转译为「餐桌上的时间体验」，使观众在进餐过程中以低认知负担的方式感知不同朝代的文化气质与精神意象。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-01.png"),
              caption: "Multimedia interactive dining table",
            },
            {
              src: img("fig-02.png"),
              caption: "Historical timeline on table surface",
            },
            {
              src: img("fig-03.png"),
              caption: "Dynasty narrative interface",
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
          title: "互动餐桌视觉内容",
          paragraphs: [
            "项目以「中华五千年文明」为核心内容，通过多媒体互动餐桌将宏大历史叙事嵌入日常用餐行为之中，实现文化体验与消费场景的融合。这种设计思路符合近年来文化展示从「信息传递」向「情境体验」转型的趋势。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-04.png"),
              caption: "Interactive table interface",
            },
            {
              src: img("fig-05.png"),
              caption: "Content layout & interaction zones",
            },
            {
              src: img("fig-06.png"),
              caption: "Spatial integration mockup",
            },
          ],
        },
      ],
    },
  ],
};

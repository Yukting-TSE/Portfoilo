import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/oppo-theme/${filename}`);

export const oppoThemeDetail: ProjectDetail = {
  cover: {
    src: img("cover.mp4"),
    poster: img("fig-phone-theme.jpg"),
    alt: "童趣-OPPO手机主题及手表设计",
    video: true,
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Role", value: "主题与动效设计" },
    {
      label: "Keyword",
      value: "插画主题 · 动效 · 可穿戴界面",
    },
    { label: "Time", value: "2020" },
    {
      label: "Award",
      value: "OPPO 校园 Reno-vators 全球青年创作计划——2020 品牌应用奖",
    },
  ],
  lead: [
    "以童年最爱的玩具为母题，像插画一样在手机上自由描绘；动效呈现「在手机上绘画」的感觉，并延申至手表定制。获 OPPO 校园「Reno-vators」全球青年创作计划——2020 品牌应用奖。",
    {
      text: "智能手机可能是我们平日里最常用的工具。通过追忆童年美好时光来突显手机的趣味性，有助于打破日常生活的惯性——让界面重新变得可画、可玩。",
      muted: true,
    },
    {
      text: "——Christl Baur, Co-producer and curator of ARS ELECTRONICA（克里斯托·鲍尔，奥地利林茨电子艺术节联合制作人兼策展人）",
      muted: true,
    },
  ],
  sections: [
    {
      type: "part",
      number: "01",
      title: "Extensions",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "Icon System",
          paragraphs: [],
        },
        {
          type: "figure",
          figures: [
            {
              src: img("fig-icon-set.jpg"),
              caption: "童年玩具图标系统",
              aspect: "3 / 2",
              fit: "cover",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "以童年玩具与日常物件为母题，用手绘蜡笔质感构建图标系统：游戏机、相机、收音机、马戏帐篷等符号，把「童趣」落到可点击的界面语言上。",
          ],
        },
      ],
      right: [
        {
          type: "prose",
          title: "Wearable",
          paragraphs: [],
        },
        {
          type: "figure",
          figures: [
            {
              src: img("fig-watch.jpg"),
              caption: "手表表盘与表带定制",
              aspect: "3 / 2",
              fit: "cover",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "同一套童趣语言延申至手表表盘与表带定制，保持插画式自由描绘的感觉，让可穿戴界面同样可玩、可识别。",
          ],
        },
      ],
    },
  ],
};

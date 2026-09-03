import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/oppo-tennis/${filename}`);

export const oppoTennisDetail: ProjectDetail = {
  cover: {
    src: img("fig-key-visual.jpg"),
    alt: "OPPOx 双网（温网 · 法网）世界网球锦标赛的 IP 延申形象再设计",
    fit: "natural",
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Role", value: "视觉与 IP 延申设计" },
    {
      label: "Keyword",
      value: "角色设计 · 叙事视觉 · 品牌延申",
    },
    { label: "Time", value: "品牌 / IP 设计" },
  ],
  lead: [
    "本项目是面向 OPPO × 双网（温网 · 法网）品牌合作语境的 IP 延申形象再设计：为两大赛事与品牌叙事补足一套可延展的角色与故事视觉，把运动员的逐梦精神转译为可传播的形象语言，并以「梦想花朵」为主线完成关键角色造型与叙事视觉，形成可用于活动现场与传播触点的故事化 IP 系统。",
  ],
  sections: [
    {
      type: "part",
      number: "01",
      title: "Character",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "梦想的星河",
          paragraphs: [
            "在赛场上，每个追逐梦想的运动员都有着独特的光芒。梦想的汇聚在此凝聚星河，闪烁着的光芒化身为各式各样的网球——那透明而有光泽的身躯容纳了他们的梦想与未来。爱探险的小欧从遥远的梦之星球出发，在宇宙各地寻找梦想的花朵；种子在心中种下，在群英汇聚的赛场中盛开。",
          ],
        },
        {
          type: "prose",
          title: "爱探险的小欧",
          paragraphs: [
            "小欧自遥远的梦之星球启程，穿行宇宙寻找「梦想花朵」——种子落在心中，在群英汇聚的赛场中盛开。角色被设定为温柔而坚定的探险者：圆润头身比、极简面部与安静神情，降低攻击感，便于在品牌与年轻受众之间建立亲近感。",
            "造型上以半透明、有光泽的躯体呼应「运动员光芒化身为网球」的意象；胸口的发光核心像被守护的梦想内核，周围绽放的金属质感花叶则是旅途中收集到的「梦想花朵」。粉调耳饰与冷色环境光形成反差，让形象在暗场 KV、活动屏幕与周边延申中都保持高识别度。",
            "性格关键词：好奇、执着、轻量可亲。它不直接「扮演」选手，而是以旁观者兼同行者的身份，把赛场上的逐梦叙事翻译成可连续延展的角色故事。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-character.jpg"),
              caption: "小欧在寻找梦想花朵的旅途中",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Brand Context",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "角色设计的用途",
          paragraphs: [
            "在 OPPO × 温网与法网的合作语境里，赛事本身已有强势视觉，但品牌仍需要一个可带走、可复述、可跨媒介延申的情感载体。小欧承担的就是这一层：把「Inspiration Ahead / 追逐梦想」从口号落成可识别的角色与世界观，服务活动现场、社媒传播、展陈与周边共创。",
            "具体用途包括：作为 KV 与海报中的叙事锚点，统一「光芒—网球—花朵」的视觉隐喻；在发布会、观赛空间与互动装置旁提供亲切的品牌代言形象；向衍生品、AR / 数字内容与社区共创活动输出一致造型，降低后续延申的沟通成本。",
            "对品牌而言，这套 IP 延申让双网合作不止于赞助露出，而能沉淀为可持续讲的故事资产——观众记住的不只是一场赛事，还有愿意陪他们找「梦想花朵」的小欧。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-brand-event.jpg"),
              caption: "品牌现场 — OPPO × 温网 · 法网",
            },
          ],
        },
      ],
    },
  ],
};

import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/human-zip/${filename}`);

export const humanZipDetail: ProjectDetail = {
  cover: {
    src: publicUrl("images/projects/human-zip.jpg"),
    alt: "Human.zip: 数字文化中的自我压缩",
    fit: "natural",
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Role", value: "独立创作 · 研究与跨媒体叙事" },
    {
      label: "Keyword",
      value: "自我压缩 · AutoSkin · 沉浸式展览 · 跨媒体叙事",
    },
    { label: "Time", value: "ESADSE 媒体设计硕士毕业项目" },
    { label: "School", value: "法国圣埃蒂安高等艺术与设计学院" },
  ],
  lead: [
    "数字社交为个体提供了符号化的自我展现空间，也催生了「自我压缩」：人以、短文与图像不断简化表达，丰富情感逐渐被便于传播的数据包取代。",
    "本项目提出 Human.zip 概念，完成研究论文《Human.zip: Ego Compression in Digital Culture》，并以跨媒体实验剧场 AutoSkin——小说与沉浸式展览——探讨数据与社会期待如何规训个体，以及挣脱「人格外壳」的渴望。",
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
          title: "自我压缩",
          paragraphs: [
            "在机器学习系统中，AI 并非独立智能主体，而是基于人类历史数据压缩与建模的产物——集体塑造的「他者」，也是社会价值观与偏见的镜像。由此出发，Human.zip 讨论数字符号如何成为自我建构的核心要素，以及这一趋势如何重塑虚拟空间中的存在方式。",
            "灵感延伸出虚构系统 AutoSkin：它能根据用户的社交环境定制最合适的「人格外壳」，实现最大程度的适应、认同与和谐。项目并非预言未来，而是一面映照现实的镜子：在看似自由选择的社会里，「我是谁」是主动决定，还是算法协商的产物？",
          ],
        },
        {
          type: "prose",
          weight: "normal",
          paragraphs: [
            "「Nous ne vous demandons pas d’être heureux, nous vous demandons seulement de ressembler à une personne heureuse.」——《幸福社会契约法》第三条",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-hero-concept.png"),
              caption: "AutoSkin — 面相图谱与幸福契约引文",
            },
            {
              src: img("fig-group-19.png"),
              caption: "关键视觉：压缩后的人格面具",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Narrative",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "小说与互文",
          paragraphs: [
            "叙事结构借鉴《画皮》：「皮肤」象征社会对欲望与真实自我的压抑；「皮下之妖」既是怪物，也是被压抑的欲望与认同的黑洞——呼应弗洛伊德「本我 / 超我」张力。同时参照《美丽新世界》中技术作为情感管理与身份规范工具的隐性控制。",
            "展览受戈夫曼《日常生活中的表演》启发：每个人都在社交互动中扮演角色。参观路线因此被设计成戏剧场景，让观众成为故事主角，体验被社会「定义」的细节与困境。",
          ],
        },
        {
          type: "prose",
          title: "《M-274 号市民日志》节选",
          paragraphs: [
            "第 113 日：AutoSkin 启动后，虹膜微润、嘴角上扬——「一个连我自己都辨认不出的我」。",
            "第 121 日：表情合规率 98.7%。「我们只需上传一个数据包，系统会帮我们处理『人类』的部分。」",
            "第 131 日：测试版扫描虹膜、面部张力、语调与心跳，屏幕浮现 Hash——那是我，还是压缩后的我？出口，或是陷阱？",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-diagram-b.png"),
              caption: "Citizen Journal M-274 — English excerpt",
            },
            {
              src: img("fig-photo-02.jpg"),
              caption: "现场印刷物与 Oscar Wilde 面具引文",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "03",
      title: "Immersive Exhibition",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "场景一 · 信息建构的世界",
          paragraphs: [
            "再现社交网络、报纸、城市广告与新闻推送的获取方式，让参观者进入与 AI 共同构建的虚构世界。媒体并非中立：它们引导叙事、放大部分情绪、压制其他情绪。成果以虚假新闻、帖子、话题标签与虚构广告呈现，呼应「景观社会」——信息结构如何塑造主观意识。",
          ],
        },
        {
          type: "prose",
          title: "场景二 · AutoSkin 广告与顺从",
          paragraphs: [
            "为虚构产品 AutoSkin 制作电视广告：夸张美学、饱和色彩与过度积极的基调，制造「可信的荒谬」。Kinect 将参观者身体转化为鼠标图标，移动越快鼠标越多——呼应规范性社会影响：面对多数时，个体为避免孤立而趋于顺从。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-photo-06.jpg"),
              caption: "展厅双屏：幸福新闻与 AutoSkin 广告",
            },
            {
              src: img("fig-photo-04.jpg"),
              caption: "Bonheur Unifié Global — 虚构新闻海报",
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
          title: "场景三 · 面具互动",
          paragraphs: [
            "面具象征日常社会角色——保护与束缚之间的平衡。受京剧脸谱对称流畅图案启发，抽象面具缓缓漂浮于观众周围；左手改颜色、右手改图案，制造「有反应却难以完全掌控」的心理张力。",
            "色彩结合京剧象征与 30 名访谈者感受：红（被注视的兴奋）、紫（内心紧张）、绿（过度敏感）、白（退缩与自我压抑）。",
          ],
        },
        {
          type: "goals",
          compact: true,
          items: [
            {
              title: "红",
              body: "被注视时的兴奋或能量。",
            },
            {
              title: "紫",
              body: "内心紧张，一种心理保护。",
            },
            {
              title: "绿",
              body: "过度敏感与社交不安全感。",
            },
            {
              title: "白",
              body: "退缩、分离或自我压抑。",
            },
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-autoskin.png"),
              caption: "从京剧脸谱到数字面具",
            },
            {
              src: img("fig-photo-08.jpg"),
              caption: "现场互动：手势驱动的漂浮面具",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "04",
      title: "Installation",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "空间与装置",
          paragraphs: [
            "展览分为两个区域：第一区域呈现信息建构的虚构世界；第二区域将参观者置于可自主选择或被迫接受自身角色的体系中。平面图标注 Kinect 感应区、投影锥与动线，支撑身体—屏幕—群体模仿的闭环体验。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-group-15.png"),
              caption: "展场平面与 AutoSkin 视觉预告",
            },
          ],
        },
      ],
    },
    {
      type: "figure",
      columns: 3,
      figures: [
        {
          src: img("fig-photo-01.jpg"),
          caption: "展陈细节",
          body: "印刷物、屏幕与暗场共同构成「社交舞台」。",
        },
        {
          src: img("fig-photo-03.jpg"),
          caption: "媒体界面",
          body: "碎片化信息流引导参观者进入虚构世界。",
        },
        {
          src: img("fig-photo-07.jpg"),
          caption: "现场氛围",
          body: "投影与反射强化沉浸与疏离并存的体验。",
        },
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "Human.zip / AutoSkin 试图追问：当表情、情绪与身份都可以被数据包处理，我们是否仍保有未被压缩的体温与心跳——以及打开那扇 Hash 之门的勇气。",
      ],
    },
  ],
};

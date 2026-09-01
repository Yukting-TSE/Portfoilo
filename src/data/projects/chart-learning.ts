import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/chart-learning/${filename}`);

export const chartLearningDetail: ProjectDetail = {
  cover: {
    src: publicUrl("images/projects/chart-learning.jpg"),
    alt: "Designing Interactive Chart Learning Tools with Generative AI",
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Co-designer", value: "谢玉婷；李美莹；凌珑；盘家喻" },
    {
      label: "Keyword",
      value: "生成式 AI · 交互式图表学习 · 多模态知识图谱 · 金融教育",
    },
    { label: "Time", value: "2024-2025" },
    { label: "Tutor", value: "王琦；李晓梅" },
  ],
  lead: [
    "数字投资平台如今已普及金融服务，但平台易用性与用户理解力之间仍存在显著差距。我们设计了一种面向实时投教的交互式图表学习工具：以生成式 AI 即时解读金融图表，结合交互式学习界面与多模型知识图谱，把投资学习嵌回决策现场，让用户从被动接收者变为主动建构者。",
    "该项目以《Designing Interactive Chart Learning Tools with Generative AI for Financial Education in Real-Time Investment》为名，共一作者发表于UIST，收录等级EI。",
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
          title: "信息爆炸与投教鸿沟",
          paragraphs: [
            "随着数字金融的快速发展，在线金融服务变得更加便捷，但许多潜在投资者缺乏有效管理财务的金融素养。金融图表可以作为强大的金融教育工具，帮助理解金融概念；然而当前研究尚不足以在投资过程中支持用户获取投资知识。",
            "全球数据量从 2010 年的 2 ZB 增长至 2020 年的 64.2 ZB。个人投资者获取信息的主要渠道是财经媒体（55%）与投资平台（50%），但在社交社区中仍频繁出现「这个线怎么看？」一类困惑——数据触手可及，图表理解却仍是门槛。",
            "我们的问卷调查显示，许多新手投资者难以掌握投资工具中蕴含的复杂金融知识——图表虽然常被用作教育资源，但理解起来却十分困难。为此，我们开展调查，研究投资者在投资过程中如何使用图表并从中学习，并开发交互式金融教育工具，使用户能够在实际决策情境中获取投资知识。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-research-context.png"),
              caption:
                "Fig.1  Data growth, investor channels, and chart-reading friction",
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
          title: "访谈设计",
          paragraphs: [
            "围绕低信噪比、透明度差、适应性弱三大矛盾，我们访谈 B 端金融在企专家与 C 端金融系学生 / 普通市民，通过结构化访谈与焦点小组界定目标用户。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-interview.jpg"),
              caption: "Fig.2  Interview outline, subjects, and format",
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
          title: "传统流程的瓶颈",
          paragraphs: [
            "现有金融数据可视化流程依赖人工收集、经验式分类与手工映射，缺乏自动化与主动交互的投教尝试。我们据此提出 AI 介入的新流程：从多源数据到编码、处理、解码，最终落在 C 端的金融图表学习。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-ai-process.jpg"),
              caption:
                "Fig.3  Traditional process vs. AI-intervened pipeline (B-side → C-side chart learning)",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Problem & Opportunity",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "B 端痛点",
          paragraphs: [
            "在 Data Source → Encode → Process → Decode 各阶段，B 端面临数据获取受限、手工对应耗时、缺少图表数据库、标注难以链接图表等问题。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-pain-b.jpg"),
              caption: "Fig.4  B-side pain points across the visualization pipeline",
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
          title: "C 端痛点",
          paragraphs: [
            "C 端用户在主页、热门板块、理解描述、投资行为与热点资讯等触点上，常因信息过载、来源可信度存疑、专业名词难懂、推断过程不透明而付出高昂理解成本。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-pain-c.jpg"),
              caption:
                "Fig.5  C-side pain points mapped to Data Interpretation touchpoints",
            },
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "痛点转化策略",
      paragraphs: [
        "从痛点提炼需求，收敛为降噪、深入、触达三项功能策略，并映射到知识星系等应用场景，连接 B 端数据处理与 C 端学习体验。",
      ],
    },
    {
      type: "figure",
      fullWidth: true,
      figures: [
        {
          src: img("fig-pain-to-function.jpg"),
          caption: "Fig.6  Painpoint → Need → Function → Scenario",
        },
      ],
    },
    {
      type: "figure",
      fullWidth: true,
      figures: [
        {
          src: img("fig-strategy.jpg"),
          caption: "Fig.7  Data → Information → Knowledge；B/C 端用户分层",
        },
      ],
    },
    {
      type: "part",
      number: "03",
      title: "System Design",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "工具链路",
          paragraphs: [
            "系统整合 GPT-4、FinChat、FinGPT、Midjourney、Uizard 等工具：从文本提示提取有效信息，多轮清洗转为 JSON，再生成静态 / 可交互图表与图文排版，并由后端 API 驱动界面展示。",
            "流程上以 AIGC Encode / Decode 串联全页 PDF 与多格式输入：先拆解信息并归一化为 JSON，经 Encode Test 与 Json Display 校验后，再 Decode 综合重构为长图等多形态输出，完成从 Information 到 Multiple Outputs 的工具链路。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-architecture.jpg"),
              caption:
                "Fig.8  Multimodal input → feature extraction → JSON DB → component mapping → front-end",
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
          title: "原型链路演示",
          paragraphs: [
            "将非结构化财报文本、图表与表格经 Chart2Text 等多轮提示，归一化为 JSON 与摘要，再按树状结构逻辑、信息降噪与组件编排生成移动端基金解读页，验证从原始输入到结构化界面的完整工具链路。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-prototype-flow.jpg"),
              caption:
                "Fig.9  Prototype flow — raw inputs → AI prompts → structured mobile UI",
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
          title: "工具与框架编排",
          paragraphs: [
            "AIGC 层负责提示输入、信息抽取与 JSON 清洗，并输出静态图表、文本与插图；可视化层以 Plotly / Echarts 生成可交互图表；框架层由 React 提供前端界面、Flask 调用工具 API 搭建后台，最终汇入图文排版与界面展示。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-tool-pipeline.jpg"),
              caption: "Fig.10  Tool pipeline from prompting to interface display",
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
          title: "技术栈",
          paragraphs: [
            "输入端使用 PyPDF2 / Tesseract 解析文档；Pandas 清洗后经 BERT 分类，再由 GPT-4 / FinChat 分析摘要；输出侧以 Plotly、ECharts 生成可交互图表，Midjourney 辅助插图，Uizard 支撑界面编排。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-tech-stack.jpg"),
              caption: "Fig.11  Technical stack — ingest, classify, generate, display",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "04",
      title: "Publication",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          paragraphs: [
            "UIST 版本进一步聚焦实时投资场景：截取交易页图表 → 生成式 AI 提取术语与策略信号 → Vega-Lite 交互图表学习 → Neo4j 知识图谱沉淀。",
            "UIST Adjunct '25: Adjunct Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology. Article No.: 88, Pages 1–3.",
            "Authors: Meiying Li, Yuting Xie, Jiayu Pan, Qi Wang. DOI: 10.1145/3746058.3758384",
            "https://dl.acm.org/doi/10.1145/3746058.3758384",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-uist-poster.jpg"),
              caption: "Fig.12  UIST Adjunct '25 poster",
            },
          ],
        },
      ],
    },
  ],
};

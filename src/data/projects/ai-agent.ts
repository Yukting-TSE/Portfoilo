import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/ai-agent/${filename}`);

export const aiAgentDetail: ProjectDetail = {
  cover: {
    src: publicUrl("images/projects/ai-agent.png"),
    alt: "AI Agent Assist User Research — Co-Researcher",
    fit: "natural",
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Co-designer", value: "谢玉婷；杨思佳；陈宁子" },
    {
      label: "Keyword",
      value: "AI Agent · 用户研究 · 人机协作 · 共创访谈",
    },
    { label: "Time", value: "2024-2025" },
  ],
  lead: [
    "HCD 强调把用户声音置于设计核心，但传统用户研究仍面临成本高、效率低与主观性强等问题。现有 AI 工具多停留在研究前后的数据处理，访谈过程中缺少实时协作。我们提出 Co-Researcher：以 AI Agent 作为共研伙伴，支持实时转写、动态追问与情境化分析，推动人机共创访谈。",
    "该项目以《AI Agent Assist User Research: Collaborative Role Analysis to Inspire Designer Creativity》为名，共一作者发表于 HCII 2025 Full Paper（DOI: 10.1007/978-3-031-93415-5_14）。",
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
          title: "研究现状",
          paragraphs: [
            "以人为中心的设计（Human-Centered Design，HCD）要求设计者整合定性与定量研究，持续收集用户反馈，以确保方案对齐真实需求；但访谈、观察与问卷等方法在动态设计环境中仍高度依赖人力，主观判断也容易造成结果不一致。",
            "以 GPT-4.0 为代表的大语言模型（Large Language Model，LLM）通过自然语言处理（Natural Language Processing，NLP）与情感分析提升了反馈处理效率，却主要服务研究早期与后期，对访谈过程本身的支持有限。既有「人主导、AI 辅助」的模式偏线性，低估了 AI 在共创中的自主协作潜力。",
            "此外，HCD 强调设计师、用户与多方利益相关者共同参与共创，但现有 AI 工具往往并非为用户研究场景定制，体验不佳，也容易加剧对设计师主观判断的依赖。迄今尚无研究系统探讨 AI 在 HCD 用户研究中的实时介入。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-hcd-problems.png"),
              caption: "现有 HCD 用户调研中的典型问题",
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
          title: "研究问题（Research Questions，RQ）",
          paragraphs: [
            "基于上述空白，本研究提出以下研究问题（Research Questions，RQ）：",
            "RQ1：如何将人工智能整合到以人为中心的设计（HCD）用户研究流程中？",
            "RQ2：人工智能如何增强设计师的创造力并优化研究工作流？",
            "RQ3：人与人工智能之间的理想协作模型是什么？",
          ],
        },
        {
          type: "prose",
          title: "质性访谈",
          paragraphs: [
            "采用半结构化访谈，面向 12 名不同经验层次的用户研究者：从本科生到资深从业者，覆盖移动系统、服务设计、游戏与 UX/UI 等领域。",
            "经小红书公开招募、从约 30 名具备 2–3 年 HCD 研究经验的申请者中筛选；其中 5 名为在校学生、7 名为专业用户研究者，并按项目经验与领域相关性分为五组，以保证视角多元。每次访谈约 1–2 小时，围绕典型研究流程、关键信息类型、跨角色协作、既有 AI 使用经验、核心挑战与理想 AI 工具期望展开。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-interviewees.jpg"),
              caption: "Fig.1  Interviewee Classification Matrix",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Findings",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "Design Requirement（DR，设计需求）",
          paragraphs: [
            "Design Requirement（DR，设计需求）来自对 12 位用户研究者痛点的归纳，描述「当前流程缺什么、系统必须解决什么」。研究把挑战收敛为四类需求：需求澄清与沟通效率、招募与数据质量、分析与洞察效率、研究成果向设计转化。",
            "这些 DR 直接约束后续原型能力边界：AI 不能只做表层摘要，而要覆盖跨团队对齐、数据可信度、质性材料整理，以及洞察到设计决策的转译。",
          ],
        },
      ],
      right: [
        {
          type: "table",
          table: {
            caption: "Table 1. Design Requirement（DR）",
            headers: ["DR", "要点", "说明"],
            rows: [
              [
                "DR1",
                "需求澄清与沟通效率",
                "澄清模糊研究问题；降低设计 / 产品 / 研究之间的信息不对称",
              ],
              [
                "DR2",
                "招募与数据质量",
                "应对小众样本招募成本；降低偏差回答与低质问卷带来的风险",
              ],
              [
                "DR3",
                "分析与洞察效率",
                "减轻转写、标注与亲和图等人工负担；补足量化工具在复杂场景的灵活度",
              ],
              [
                "DR4",
                "成果转化与落地",
                "弥合洞察与设计之间的错位；提升历史材料结构化与报告可复用性",
              ],
            ],
          },
        },
      ],
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "Design Expectation（DE，设计期望）",
          paragraphs: [
            "Design Expectation（DE，设计期望）描述研究者对理想 AI Agent 的能力期待：它不只是「需求清单」，更是「希望 AI 如何参与协作」。访谈将期望归纳为流程自动化、智能决策支持、跨角色协作、隐私可控与领域专精。",
            "共性共识是：AI 应增强而非取代研究者——在可解释、可追溯与可控输出的前提下，全面提升用户研究效率与深度。",
          ],
        },
      ],
      right: [
        {
          type: "table",
          table: {
            caption: "Table 2. Design Expectation（DE）",
            headers: ["DE", "要点", "说明"],
            rows: [
              [
                "DE1",
                "流程自动化",
                "自动转写与数据清洗；按模板生成结构化报告并支持快速调整",
              ],
              [
                "DE2",
                "智能决策支持",
                "访谈中实时追问建议；用虚拟用户预演验证研究假设",
              ],
              [
                "DE3",
                "跨角色协作",
                "多角色交互模拟激发创意；串联历史研究与行业知识库",
              ],
              [
                "DE4",
                "隐私可控",
                "支持本地部署；限制生成自主性并保证结论可追溯",
              ],
              [
                "DE5",
                "领域专精",
                "面向医疗、游戏等垂直行业定制 AI 能力",
              ],
            ],
          },
        },
      ],
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "现有 AI 辅助流程的断层",
          paragraphs: [
            "在整理 DR 与 DE 的同时，我们识别出当前 AI 辅助用户研究的典型结构：准备、执行与复盘三阶段。准备期 AI 可协助生成计划与优化招募；执行期却出现显著协作空缺，研究者独自提问、主持与记录；复盘期 AI 再回到整理、摘要与优化。",
            "换言之，AI 多以单向工具存在，缺乏跨职能共创与冲突消解能力，也难以及时参与访谈现场；生成结论常偏表层统计，情境适配不足；语音、行为与表情等多模态信息也难以被整合。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-collaboration.jpg"),
              caption:
                "Fig.2  Passive Assistance（AI As Tool）vs. Active Assistance（AI As Co-Researcher）",
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
          title: "从 DR / DE 到原型功能",
          paragraphs: [
            "我们将 Design Requirement（DR）与 Design Expectation（DE）进一步收敛为三项设计目标：保证需求对齐与信息可追溯、挖掘深层需求并优化访谈深度、减少人工干预并提升数据可靠性。",
            "据此映射出原型功能 F1–F3：实时生成结构化逐字稿、AI 主动追问与实时分析、自动标注与关键内容抽取。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-dr-de.jpg"),
              caption:
                "Fig.3  Design requirements / expectations → Goals → Prototype functions",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "03",
      title: "Design Result",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "Co-Researcher 交互原型",
          paragraphs: [
            "被动模式下，AI 仅在人发出指令时分析、生成与优化；主动模式下，AI Agent 作为共研者进入全过程：准备期共建问题库，访谈中实时追问，复盘时生成洞察。",
            "访谈现场界面整合高精度语音转写、AI 主动追问与实时标注抽取；复盘视图则补全内容组织、音文同步与洞察生成，帮助设计师贯通访谈全程。",
          ],
        },
        {
          type: "goals",
          compact: true,
          items: [
            {
              title: "F1 实时语音转写",
              body: "高精度语音识别生成结构化逐字稿，降低漏记与误差，保证可追溯。",
            },
            {
              title: "F2 主动追问辅助",
              body: "智能对话组件实时分析回答，自动生成跟进问题，挖掘潜在需求。",
            },
            {
              title: "F3 实时标注抽取",
              body: "边访谈边标注关键内容，减少团队间信息落差与重复沟通。",
            },
            {
              title: "F3 自动内容组织",
              body: "AI 按提纲与问题结构化访谈内容，形成可检索、易复盘的记录。",
            },
            {
              title: "F4 音文同步定位",
              body: "点击逐字稿任意段落，即可跳转到对应录像时间点，精确回溯原文语境。",
            },
            {
              title: "F5 AI 洞察分析",
              body: "在对话模块中分析研究发现，生成关键问题、issue 与 reflection，辅助输出智能摘要。",
            },
          ],
        },
        {
          type: "prose",
          title: "访谈复盘与洞察生成",
          paragraphs: [
            "F3–F5 对应复盘视图：逐字稿按大纲自动归位，点击即可回看原声，并在对话中沉淀 issue 与 reflection，把现场记录转译为可行动洞察，缩短从访谈到设计决策的路径。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-prototype-ui.png"),
              caption:
                "Fig.4  User Interaction Prototype — live interview with F1–F3",
            },
            {
              src: img("fig-prototype-ui2.png"),
              caption: "Fig.4b  Post-interview analysis — F3–F5",
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
          title: "用户流程",
          paragraphs: [
            "准备：梳理研究需求与提纲，经与 AI 交互优化问题顺序与措辞，写入结构化题库。",
            "访谈：实时转写并生成结构化记录；AI 主动提出追问，必要时补充背景信息。",
            "分析：自动整理内容并生成可分析报告，帮助快速抽取有价值的洞察。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-user-flow.jpg"),
              caption:
                "Fig.5  User Flow — Agent / Researcher / Interviewee collaboration",
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
            "系统采用 Input → Encoding → Processing → Output 模块化架构：前端 React 与后端 Flask 通过 API 协作，并结合 WebRTC 采集多模态输入；OpenAI Whisper 负责语音转写，Pandas 做结构化整理，BERT 完成文本向量化与分类；GPT-4.0 负责语义解析、摘要与追问生成，并可联动可视化与图像素材；最终以交互界面输出结构化结果。\n\n\n结果表明，Co-Researcher 能减少重复劳动、加深洞察深度，把 AI 从「工具」推进为「共研伙伴」，在自动化、创造力与研究严谨性之间取得平衡。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-pipeline.jpg"),
              caption:
                "Fig.6  Technical stack — Input / Encode / Process / Output",
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
            "Xie, Y., Yang, S., Chen, N. (2025). AI Agent Assist User Research: Collaborative Role Analysis to Inspire Designer Creativity. In: Artificial Intelligence in HCI. HCII 2025. LNCS vol. 15820. Springer.",
            "DOI: 10.1007/978-3-031-93415-5_14",
            "https://doi.org/10.1007/978-3-031-93415-5_14",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-publication.jpg"),
              caption:
                "Springer Nature Link — HCII 2025 Full Paper (LNCS vol. 15820)",
              fit: "natural",
            },
          ],
        },
      ],
    },
  ],
};

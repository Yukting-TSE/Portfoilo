import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/fitpal/${filename}`);

export const fitpalDetail: ProjectDetail = {
  cover: {
    src: img("A1.jpg"),
    alt: "FitPal — AI Chatbot & community services for elders’ exercise",
    fit: "natural",
  },
  eyebrow: "Case Study",
  meta: [
    {
      label: "Co-designer",
      value: "谢玉婷；李美莹；曾思烨；莫佳淇",
    },
    {
      label: "Keyword",
      value: "AI Chatbot · 老年人运动 · 社区服务 · 运动误区",
    },
    { label: "Time", value: "2024" },
    { label: "Tutor", value: "刘冠宏；刁玉婷" },
  ],
  lead: [
    "日常运动对维系老年人生活质量至关重要，但在缺乏科学指导时，老年群体容易采取过量或不恰当的锻炼方式，反而损害健康。既有研究提到社区可成为获取专业运动信息的途径，却少有系统化的社区设计方案去重塑这些误区。我们提出 FitPal：以 AI Chatbot 提供个性化运动指导，并结合社区激励与医疗服务，纠正误区、鼓励长期坚持。",
    "该项目以《FitPal: Reshape Daily Exercise Misconceptions Among Elders through AI Chatbot and Community-based Services》为名，第一作者发表于 CSCW Companion ’24（DOI: 10.1145/3678884.3681880）。",
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
          title: "老龄化与运动误区",
          paragraphs: [
            "老年群体疾病发生率、失能率与医疗利用率偏高，健康问题正成为中国社会的重要议题。日常运动被证明可降低全因死亡风险、减少慢性病风险并维持肌量，许多长者也把锻炼视为保健康的主要途径。",
            "然而，由于对正确方法存在误解，老年人常按自我理解锻炼：缺少专业指导、不愿或忘记遵循医嘱、过度依赖社交媒体健康信息、主观信念根深蒂固，以及专业运动知识学习成本高等，都可能让锻炼偏离科学，甚至伤害身体。",
            "社区活动能提升运动热情、提供正向反馈并缓解孤独，AI Chatbot 也在陪伴、监督与健康知识传递上展现优势；但如何把社区资源与 AI 结合，系统重塑不科学的运动认知，仍缺少清晰的设计范式。",
          ],
        },
        {
          type: "prose",
          title: "研究问题（RQ）",
          paragraphs: [
            "RQ1：老年人对日常运动存在哪些误区？",
            "RQ2：以社区为基础、并整合 AI Chatbot 的设计范式，能为重塑这些误区提供哪些机会？",
          ],
        },
        {
          type: "prose",
          title: "方法",
          paragraphs: [
            "研究结合文献综述、参与式观察与深度访谈。我们在上海社区的居住区、公园、照料中心与养老院观察老年人日常锻炼类型、方式、设施使用，以及群体活动中的社交互动，并以照片与影像记录。",
            "随后在锻炼场所发起闲聊，筛选 60–90 岁、规律锻炼的长者；共 6 人接受约 20 分钟半结构化访谈（男女性各 3 人），主题覆盖日常锻炼习惯、健康状况、动机、对社区锻炼的看法，以及对智能健康设备的接受度。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-exercise-misconceptions.jpg"),
              caption: "现有老龄化运动误区",
            },
          ],
        },
        {
          type: "table",
          table: {
            caption: "Table 1. Demographics of Participants（n=6）",
            headers: ["编号", "性别", "年龄", "主要运动"],
            rows: [
              ["P1", "女", "73", "舞蹈"],
              ["P2", "男", "68", "步行"],
              ["P3", "女", "75", "太极"],
              ["P4", "男", "71", "力量训练"],
              ["P5", "男", "80", "步行"],
              ["P6", "女", "80", "步行"],
            ],
          },
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
          title: "运动误区",
          paragraphs: [
            "偏好驱动的运动选择：老年人常按喜好只坚持单一运动，较少考虑身体状况与整体负荷。如「年纪大了别的干不了，就每天走走」（P6）、「我爱跳舞，跳了就没心事」（P1）。这可能导致局部过度使用与损伤，偏离「以运动养身」的初衷。",
            "忽视科学运动处方：多数受访者有关节炎、肩周炎、腰痛等常见问题（P2–P4），却常按自我理解制定计划，甚至认为「多练就能治病不用手术」（P3）、「引体能缓解腰痛」（P4），或表示「医生也没怎么说」（P5）。缺乏科学支撑的自拟方案可能加重病情。",
            "忽视频率与方法：「在家坐不住，有时半夜还在走」（P2）；「力量姿势不对把韧带练伤了」（P4）。高估体能导致过量或错误动作，提示需要更贴合个体的节奏与技术指导。",
          ],
        },
      ],
      right: [
        {
          type: "goals",
          compact: true,
          items: [
            {
              title: "误区 01 · 单一偏好",
              body: "只练爱做的那一项，忽视多样性与适宜性。",
            },
            {
              title: "误区 02 · 轻视医嘱",
              body: "有慢病仍按自我理解开「处方」。",
            },
            {
              title: "误区 03 · 频率方法失控",
              body: "过量、错时或错误姿势带来隐性损伤。",
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
          title: "重塑机会",
          paragraphs: [
            "社区参与能显著促进锻炼：设施近、氛围好，使长者更愿出门。「家住附近、设施多，常来练」（P4）；「跳舞氛围好，也容易交到朋友」（P1）。彼此邀请、互教互学，加上志愿者推广更科学的方式，构成可依托的社区动能。",
            "智能健康设备接受度较高：多数长者熟悉智能手机与微信基础功能，也对步数等健康数据感兴趣；谈及智能手表时，多数并不排斥。这为用可穿戴准确评估状态、培养科学习惯提供了入口。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-opportunities.jpg"),
              caption: "重塑老年人运动误区的机会",
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
          title: "设计目标",
          paragraphs: [
            "围绕「让科学运动可被接受、可被执行、可被坚持」，我们设定三项目标：",
          ],
        },
        {
          type: "goals",
          compact: true,
          items: [
            {
              title: "G1 可接受的科学知识",
              body: "用长者易懂的方式传递科学运动知识，纠正既有误区。",
            },
            {
              title: "G2 处方驱动的行为引导",
              body: "医疗机构参与评估并开具个性化处方，系统引导并持续监测。",
            },
            {
              title: "G3 长期动力与主动性",
              body: "以激励与反馈维持热情，支持长期科学锻炼。",
            },
          ],
        },
      ],
      right: [
        {
          type: "prose",
          title: "FitPal 交互原型",
          paragraphs: [
            "FitPal 是可对话的语音 Chatbot：在锻炼中答疑、纠偏，并在事后反馈锻炼的科学性。系统以 GPT-4 与 prompt engineering 查询运动处方库，结合 RAG 索引日常活动与处方数据，用易懂方式输出建议与多样化运动方案。",
            "可定制语音库回应长者的社交陪伴需求。手环经陀螺仪、心率、加速度、GPS 等采集时长、心率、步数与速度，经 BLE 传到手机端；服务端比对处方库量化「科学性」并形成排行，支撑社区激励。",
            "社区端以海报与活动推广科学运动，联合医疗机构评估体质并开具处方；社工协助佩戴手表、添加 FitPal；按排行发放政府提供的食品、器材与日用品，并受理 Chatbot 使用中的反馈，形成可持续的社区养老服务循环。",
          ],
        },
      ],
    },
    {
      type: "figure",
      fullWidth: true,
      figures: [
        {
          src: img("fig-system.jpg"),
          caption:
            "Fig.1  Interaction diagram — User / Server / Community",
        },
      ],
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "System design",
          paragraphs: [
            "User Side：长者佩戴健身手环采集运动数据；FitPal（Fit + Pal，运动伙伴）经微信以对话 / 语音传递科学知识、处方、反馈与鼓励。",
            "Community Side：社区协同医疗机构完成评估与处方；政府提供物资激励；志愿者发放奖励并做推广监测。",
            "Server Side：汇聚健康数据、专业处方与个体基线，接收手环日数据并更新库，向 FitPal 提供对话材料，同时把锻炼数据回传社区用于健康管理。",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "研究表明，老年人在运动类型选择、频率方法规划与医嘱遵循上存在系统性误区，可能抬高健康风险。FitPal 将 AI 运动伙伴与社区支持结合，面向认知重塑与科学锻炼落地，有望提升健康水平并减轻社区养老服务压力。质性访谈样本为 6 人，结论外推有限；未来需扩大样本与多样性。AI 仍可能产生不当输出，后续将持续优化模型与 prompt，以更好适配老年用户。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-prototype.jpg"),
              caption:
                "Fig.2  FitPal prototype — prompt management & chatbot guidance",
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
            "Xie, Y., Li, M., Zeng, S., Mo, J., Diao, Y., & Liu, G. (2024). FitPal: Reshape Daily Exercise Misconceptions Among Elders through AI Chatbot and Community-based Services. In Companion of the 2024 Computer-Supported Cooperative Work and Social Computing (CSCW Companion ’24). ACM.",
            "DOI: 10.1145/3678884.3681880",
            "https://doi.org/10.1145/3678884.3681880",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-publication.jpg"),
              caption: "ACM Digital Library — CSCW Companion ’24",
              fit: "natural",
            },
          ],
        },
      ],
    },
  ],
};

import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/pagoda/${filename}`);

export const pagodaDetail: ProjectDetail = {
  cover: {
    src: publicUrl("images/projects/pagoda.png"),
    alt: "中国现存古塔建筑样式分析",
    fit: "natural",
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Co-designer", value: "谢玉婷；张璇" },
    {
      label: "Keyword",
      value: "信息可视化交互 · 文化遗产数字化",
    },
    { label: "Time", value: "2021" },
    { label: "Tutor", value: "江治邦；陈皓" },
  ],
  lead: [
    "古佛塔是中国佛教建筑的重要类型，也是研究古代建筑技术、造型艺术与地域文化的珍贵实物。我们整理 1400+ 条现存古塔信息，按形制、材料与时间分类，以信息可视化与交互设计加以呈现。",
    "成果曾展出于第十四届全国美术作品展览·信息交互设计，获第九届中国可视化与可视分析大会金奖；入选 Information is Beautiful Awards 短名单，获中国设计智造大奖佳作奖，并展出于 2021 中国设计智造大奖佳作展。",
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
          title: "研究缺口",
          paragraphs: [
            "从近代到现代，古塔研究从宽泛笼统逐渐走向细化：既有介绍各地著名古塔的科普文章，也有 80 年代至今建筑遗产热潮中对古塔文化的探讨。前者常只罗列名塔并辅以知识性介绍，学术价值有限；后者将古塔置于历史、宗教与文化中考察发展演变，学术价值较高。",
            "以地理维度研究古佛塔的成果仍相对较少，多按行政地区展开；而历史建筑历经风雨侵蚀与战乱，再叠加城市更新与新农村建设，具有地域文化价值的古佛塔极易遭到破坏——古佛塔研究更应受到重视。",
          ],
        },
        {
          type: "prose",
          weight: "normal",
          paragraphs: [
            "「这些历史建筑大都经历了风雨侵蚀或战乱纷扰……一些具有地域文化价值的古佛塔建筑极易遭到破坏。因此古佛塔建筑的研究更应受到重视。」——《江南明清古佛塔特色研究》金兰希",
          ],
        },
        {
          type: "prose",
          title: "信息采集",
          paragraphs: [
            "主要收集建筑材料、年代、位置等信息，为后续信息设计提供基础。在中国现存古代佛塔中，共整理 61 页、1400 多条记录（图表仅展示部分）。",
          ],
        },
        {
          type: "goals",
          compact: true,
          items: [
            {
              title: "A · 类型",
              body: "楼阁式、密檐式、亭阁式、覆钵式、金刚宝座式、过街式、组合式、经幢式等，另有圆筒、钟形、球形等少见形制。",
            },
            {
              title: "B · 时间",
              body: "磨合期（西汉后期—唐初）→ 高峰期（唐经两宋至辽金）→ 发展期（元经明至清）。",
            },
            {
              title: "C · 建材",
              body: "木、砖、石、金属、花岗石、土等；两汉南北朝以木塔为主，唐宋以后以砖石塔为主。",
            },
            {
              title: "D · 形状",
              body: "方、圆、六角、八角、十二角等，并可按层数划分。",
            },
            {
              title: "E · 用途",
              body: "宗教塔与风水塔；亦用于登高、瞭望、导航与装点山河。",
            },
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-research-01.jpg"),
              caption: "中国各地现存古塔简表（部分）",
            },
            {
              src: img("fig-research-02.jpg"),
              caption: "中国各地现存古塔简表（续）",
            },
            {
              src: img("fig-research-03.jpg"),
              caption: "中国各地现存古塔简表（续）",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "02",
      title: "Information Design",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "编码逻辑",
          paragraphs: [
            "初稿按材料、高度与类型筛选现存古塔数据。设计过程中发现：柱状图居中后与古塔形象重合，这一重合对扩展叙事有价值；同时将各类型图标进一步细化。最终绘制古塔所在地，以圆圈大小编码各地区数量。",
            "信息编码约定：以线的颜色对应材质，以线的厚度对应高度，以线的长度对应塔的数量。",
          ],
        },
        {
          type: "prose",
          title: "材质色板",
          paragraphs: [
            "配色取材于土、木、砖、石等真实肌理，使图表在可读的同时保留古塔材料的触觉联想；未知材质以中性灰表示。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-05.png"),
              caption: "材质取样与色彩编码",
            },
            {
              src: img("fig-04.png"),
              caption: "图例：材质 / 高度 / 塔类 / 单位",
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
          title: "信息总览",
          paragraphs: [
            "总览图把分类体系、形制示意、类型图标与地理分布并置：左侧树状结构展开材质、高度与种类维度；中部以剖面线条抽象古塔轮廓；右侧以图标图例对应常见形制，并以圆圈大小标示各地现存数量，帮助读者建立「有哪些塔、长什么样、分布在哪」的整体认知。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-02.png"),
              caption:
                "总览：分类树 · 形制示意 · 类型图标 · 地理分布",
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
          title: "信息可视化海报",
          paragraphs: [
            "海报按朝代纵向展开 1400+ 条记录：线色对应材质、线粗对应高度、末端图标对应形制，整体叠合成塔影轮廓。右侧标注各朝代时段与现存数量，底部图例串联编码规则，使读者可在一张图里同时阅读时间、材料、尺度与类型。",
            "设计上刻意让数据密度在唐、宋、明、清等高峰期更紧凑，低谷期更疏朗，形成「有起伏的塔影」——既是统计结果，也是可读的视觉叙事。初稿中柱状图与古塔剪影重合的发现，被保留并强化为海报的核心隐喻。",
            "面向展览与印刷场景，海报兼顾近观细节与远观轮廓：走近可读单塔属性，退后可感知朝代兴衰与材质演变，成为连接学术数据与公共美育的入口。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-poster.jpg"),
              caption: "中国现存古塔 — 按朝代展开的信息可视化海报",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "03",
      title: "Digital Museum",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          title: "数字化语境",
          paragraphs: [
            "国内外正普遍以数字技术推动实体博物馆发展，如故宫「端门数字馆」、敦煌相关 AR 展览、罗马 PALAZZO MADAMA 的全程增强现实，以及欧洲数字图书馆 Europeana Collections 等。展览场所可落在博物馆、古塔文化保护区与画廊等；目标用户是希望在旅行中增长知识的观光者——数据与图表结合清晰易读，但线上生活占主导、疫情等因素也可能影响线下体验。",
            "虽然现存古塔数量依然庞大，但在自然与人为双重影响下，它们正随时间推进遭受或多或少的破坏。数字时代里，数字化成为拓展性手段：通过整理、收集与记录保存文化遗产信息，突破传统保护难以达到的展示与保真要求，更安全、长久地保存珍贵遗产。",
          ],
        },
      ],
      right: [
        {
          type: "goals",
          compact: true,
          items: [
            {
              title: "痛点",
              body: "自然与人为因素使古塔遭到不同程度破坏。",
            },
            {
              title: "方案",
              body: "数字化保存更安全、更持久，并拓展展示与保真效果。",
            },
            {
              title: "愿景",
              body: "推广古塔魅力的普及教育，为传统文化美育提供新可能。",
            },
          ],
        },
      ],
    },
    {
      type: "part",
      number: "04",
      title: "Information Interaction",
    },
    {
      type: "figure",
      columns: 3,
      figures: [
        {
          src: img("fig-anim-1.gif"),
          caption: "① 数据筛选",
          body: "点击左下角三个类别进行信息筛选，视图刷新为对应古塔集合，便于按材质、高度或种类浏览。",
          gif: true,
        },
        {
          src: img("fig-anim-2.gif"),
          caption: "② 年代细节",
          body: "向左滑动后，图表转换为柱状图，数值差异更直观，便于比较各朝代现存古塔数量。",
          gif: true,
        },
        {
          src: img("fig-anim-3.gif"),
          caption: "③ AR 展示",
          body: "打开详情页可 360° 查看古塔模型；手机扫描后可在真实环境中观看 AR 模型。",
          gif: true,
        },
      ],
    },
  ],
};

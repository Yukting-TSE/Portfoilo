import { publicUrl } from "../../lib/publicUrl";
import type { ProjectDetail } from "../projectDetail";

const img = (filename: string) =>
  publicUrl(`images/projects/yangzhou-projection/${filename}`);

export const yangzhouProjectionDetail: ProjectDetail = {
  cover: {
    src: publicUrl("images/projects/yangzhou-projection.jpg"),
    alt: "扬州小秦淮户外投影戏剧",
  },
  eyebrow: "Case Study",
  meta: [
    { label: "Role", value: "投影新媒体视频制作" },
    { label: "Keyword", value: "户外投影 · 戏剧叙事 · 城市更新介入" },
    { label: "Time", value: "2021" },
  ],
  lead: [
    "扬州小秦淮位于古城核心水岸，是城市水系与市井生活交织的历史场所。面对空间「景观化而非生活化」的更新困境，项目以户外戏剧投影将传统文化与数字影像结合，在非侵入的方式下激活夜间公共空间，使小秦淮从被观看的历史景观转为可参与的文化场景；在本项目中，本人负责小秦淮岸边的投影新媒体视频制作。",
  ],
  sections: [
    {
      type: "part",
      number: "01",
      title: "Site & Intervention",
    },
    {
      type: "columns",
      align: "start",
      left: [
        {
          type: "prose",
          paragraphs: [
            "小秦淮位于扬州古城历史核心，是城市水系与市民生活高度交织的空间。其文化意义不仅体现在物理遗存上，更体现在长期形成的市井叙事、文人书写与民俗活动之中。",
            "然而，在当代城市更新进程中，历史水岸空间逐渐面临「景观化而非生活化」的风险——空间被保留，叙事功能与文化参与度却被削弱。项目正是在此背景下提出，试图重新激活场所的文化参与性。",
            "通过夜间投影与戏剧性叙事的引入，项目不仅延长了公共空间的使用时间，也以非侵入式的方式激活历史场所记忆，使数字媒介成为连接城市历史与当代观众之间的「临时接口」。",
            "户外戏剧投影将扬州传统文化内容与当代数字影像技术结合，使小秦淮从「被观看的历史景观」转变为「可参与的文化场景」——观众在真实水岸环境中遭遇戏剧叙事，历史空间与数字影像形成临时的共时体验。",
          ],
        },
      ],
      right: [
        {
          type: "figure",
          figures: [
            {
              src: img("fig-01.jpg"),
              caption: "小秦淮历史水岸户外投影现场",
            },
          ],
        },
      ],
    },
  ],
};

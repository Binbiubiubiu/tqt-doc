import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/tqt-doc/",
  lang: "zh-CN",
  title: "TQT",
  description: "Taro & 千牛PC & 淘宝小程序",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    algolia: {
      appId: "QNDUNPRL0J",
      apiKey: "1c8369d6a607d6d31ee2e666613a7300",
      indexName: "tqt",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/guide/what-is-tqt", activeMatch: "/guide/" },
      // { text: "组件", link: "/components" },
      // { text: "API", link: "/api" },
    ],

    sidebar: [
      {
        text: "介绍",
        collapsed: false,
        items: [
          {
            text: "什么是TQT",
            link: "/guide/what-is-tqt",
          },
          {
            text: "快速上手",
            items: [
              { text: "移动端", link: "/guide/quick-start/tb" },
              { text: "PC 千牛", link: "/guide/quick-start/qn" },
            ],
          },
        ],
      },
      {
        text: "常见问题",
        link: "/guide/Q&A",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Binbiubiubiu",
    },
    editLink: {
      pattern: "https://github.com/Binbiubiubiu/tqt-doc/edit/main/docs/:path",
      text: "在GitHub编辑此页面",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/Binbiubiubiu/tqt" }],
  },
  ignoreDeadLinks: true,
});

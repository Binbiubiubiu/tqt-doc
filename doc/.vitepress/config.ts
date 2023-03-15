import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/tqt-doc/",
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
      { text: "指南", link: "/introduce" },
      // { text: "配置", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "介绍",
        link: "/introduce",
      },
      {
        text: "淘宝移动端",
        items: [{ text: "快速上手", link: "/tb/quick-start" }],
      },
      {
        text: "千牛PC端",
        items: [{ text: "快速上手", link: "/qn/quick-start" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Binbiubiubiu/tqtjs" }],
  },
  ignoreDeadLinks: true,
});

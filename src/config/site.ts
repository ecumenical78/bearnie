// Site configuration for SEO and JSON-LD schemas
export const siteConfig = {
  name: "V2RayN 中文指南",
  description:
    "v2rayn.ygjc.cc 为您提供最新版 V2RayN Windows 客户端下载、详细的图文安装教程、服务器节点配置指南及常见连接报错的解决方案。无论您是新手上手还是进阶路由分流，都能在这里找到最全面的 V2RayN 使用技巧。",
  url: "https://v2rayn.ygjc.cc",
  ogImage: "https://v2rayn.ygjc.cc/images/openGraph/facebook.png",
  twitterImage: "https://v2rayn.ygjc.cc/images/openGraph/twitter.png",
  author: {
    name: "V2RayN 中文指南",
    url: "https://v2rayn.ygjc.cc",
    twitter: "@ygjc_cc",
  },
  links: {
    twitter: "https://x.com/ygjc_cc",
    github: "https://github.com/ecumenical78/bearnie",
  },
  // Organization info for JSON-LD
  organization: {
    name: "V2RayN 中文指南",
    logo: "https://v2rayn.ygjc.cc/favicon.svg",
    sameAs: [
      "https://x.com/ygjc_cc",
      "https://github.com/ecumenical78/bearnie",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

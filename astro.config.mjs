import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";
import { shikiLightTheme, shikiDarkTheme } from "./src/config/shiki-themes";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] }],
    ],
    shikiConfig: {
      themes: {
        light: shikiLightTheme,
        dark: shikiDarkTheme,
      },
      defaultColor: false,
    },
  },
  site: "https://bearnie.dev",
  integrations: [sitemap(), mdx()],
});

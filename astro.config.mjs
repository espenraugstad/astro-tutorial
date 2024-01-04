import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://playful-tapioca-f4ebd1.netlify.app/",
  integrations: [preact()],
  markdown: {
    remarkPlugins: [
      "remark-math",
    ],
    rehypePlugins: [
      ["rehype-katex",{}]
    ]
  }
});
import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: {
    posts: 'src/routes/posts/_post.svelte'
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;

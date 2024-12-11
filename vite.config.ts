import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import monkey from 'vite-plugin-monkey';
import tailwindcss from '@tailwindcss/vite';

const {version,name,author,description,repository} = require('./package')

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.NAME":`"${name}"`,
    "process.env.VERSION":`"${version}"`,
  },
  build:{
    minify:"terser",
  },
  plugins: [
    svelte(),
    tailwindcss(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        website:author.url,
        author:author.name,
        source: repository.url,
        supportURL: `${repository.url}/issues`,
        name:name,
        namespace: 'npm/vite-plugin-monkey',
        match: ["*://*.instagram.com/*","*://*.tiktok.com/*","*://*.x.com/*","*://*.bsky.app/*"],
        version: version,
        description:description,
        grant:["GM_xmlhttpRequest"],
        connect:"raw.githubusercontent.com",
        "run-at":"document-start",
        downloadURL:"https://raw.githubusercontent.com/gauchedinternet/autoblock/main/script.js",
        updateURL:"https://raw.githubusercontent.com/gauchedinternet/autoblock/main/script.js"
      },
    }),
  ],
});





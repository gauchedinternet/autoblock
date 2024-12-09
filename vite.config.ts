import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    minify:"terser",
  },
  plugins: [
    svelte(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        author:"gauchedinternet",
        name:"social-autoblocker",
        namespace: 'npm/vite-plugin-monkey',
        match: ["*://*.instagram.com/*","*://*.tiktok.com/*","*://*.x.com/*","*://*.bsky.app/*"],
        version: '0.20',
        description:"Collect usernames to block and download them as a .txt file.",
        grant:"none",
        "run-at":"document-start",
        downloadURL:"https://raw.githubusercontent.com/gauchedinternet/autoblock/main/script.js",
        updateURL:"https://raw.githubusercontent.com/gauchedinternet/autoblock/main/script.js"
      },
    }),
  ],
});





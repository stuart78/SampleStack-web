// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://samplestack.app",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
  },
  integrations: [
    react(),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});

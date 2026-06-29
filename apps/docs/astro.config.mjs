// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://andreortiz82.github.io",
  base: "/nvgto-styleguide/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

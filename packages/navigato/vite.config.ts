import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";
import dts from "vite-plugin-dts";

/** Ship the source theme (tokens + Tailwind) as dist/theme.css so the tarball matches files: ["dist"]. */
function copyThemeCss(): Plugin {
  return {
    name: "copy-theme-css",
    writeBundle() {
      copyFileSync(
        resolve(__dirname, "src/styles/global.css"),
        resolve(__dirname, "dist/theme.css"),
      );
    },
  };
}

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    tailwindcss(),
    dts({
      include: ["src"],
      rollupTypes: true,
    }),
    copyThemeCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Navigato",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: "navigato.css",
      },
    },
    cssCodeSplit: false,
  },
});

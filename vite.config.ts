import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site: /yukting-portfolio/
const base =
  process.env.GITHUB_PAGES === "true" ? "/yukting-portfolio/" : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: true,
    watch: {
      ignored: [
        "**/*.jpg",
        "**/*.jpeg",
        "**/*.png",
        "**/*.gif",
        "**/*.webp",
        "**/*.mp4",
        "**/*.mov",
      ],
    },
  },
  preview: {
    host: true,
    port: 4173,
  },
});

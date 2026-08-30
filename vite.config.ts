import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: true,
    watch: {
      // Don't watch large media binaries (avoids Windows EBUSY),
      // but keep the folder visible to the static file server.
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

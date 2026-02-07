import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  // 🔹 NO rollupOptions, NO manualChunks
  build: {
    chunkSizeWarningLimit: 2000,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      includePublic: true,
      logStats: true,
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      tiff: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 80, speed: 5 },
    }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

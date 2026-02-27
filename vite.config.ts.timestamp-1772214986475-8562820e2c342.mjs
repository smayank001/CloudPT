// vite.config.ts
import { defineConfig } from "file:///D:/CloudPT/node_modules/vite/dist/node/index.js";
import react from "file:///D:/CloudPT/node_modules/@vitejs/plugin-react/dist/index.js";
import path from "path";
import { componentTagger } from "file:///D:/CloudPT/node_modules/lovable-tagger/dist/index.js";
import { ViteImageOptimizer } from "file:///D:/CloudPT/node_modules/vite-plugin-image-optimizer/dist/index.js";
var __vite_injected_original_dirname = "D:\\CloudPT";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  // 🔹 NO rollupOptions, NO manualChunks
  build: {
    chunkSizeWarningLimit: 2e3
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
      avif: { quality: 80, speed: 5 }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDbG91ZFBUXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDbG91ZFBUXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9DbG91ZFBUL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gXCJ2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwODAsXG4gIH0sXG5cbiAgLy8gXHVEODNEXHVERDM5IE5PIHJvbGx1cE9wdGlvbnMsIE5PIG1hbnVhbENodW5rc1xuICBidWlsZDoge1xuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCxcbiAgfSxcblxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCksXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcbiAgICAgIHRlc3Q6IC9cXC4oanBlP2d8cG5nfGdpZnx0aWZmfHdlYnB8YXZpZikkL2ksXG4gICAgICBpbmNsdWRlUHVibGljOiB0cnVlLFxuICAgICAgbG9nU3RhdHM6IHRydWUsXG4gICAgICBwbmc6IHsgcXVhbGl0eTogODAgfSxcbiAgICAgIGpwZWc6IHsgcXVhbGl0eTogODAgfSxcbiAgICAgIGpwZzogeyBxdWFsaXR5OiA4MCB9LFxuICAgICAgdGlmZjogeyBxdWFsaXR5OiA4MCB9LFxuICAgICAgd2VicDogeyBxdWFsaXR5OiA4MCB9LFxuICAgICAgYXZpZjogeyBxdWFsaXR5OiA4MCwgc3BlZWQ6IDUgfSxcbiAgICB9KSxcbiAgXS5maWx0ZXIoQm9vbGVhbiksXG5cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvTixTQUFTLG9CQUFvQjtBQUNqUCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsMEJBQTBCO0FBSm5DLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQTtBQUFBLEVBR0EsT0FBTztBQUFBLElBQ0wsdUJBQXVCO0FBQUEsRUFDekI7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVMsaUJBQWlCLGdCQUFnQjtBQUFBLElBQzFDLG1CQUFtQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQSxNQUNWLEtBQUssRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUNuQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDcEIsS0FBSyxFQUFFLFNBQVMsR0FBRztBQUFBLE1BQ25CLE1BQU0sRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUNwQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDcEIsTUFBTSxFQUFFLFNBQVMsSUFBSSxPQUFPLEVBQUU7QUFBQSxJQUNoQyxDQUFDO0FBQUEsRUFDSCxFQUFFLE9BQU8sT0FBTztBQUFBLEVBRWhCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=

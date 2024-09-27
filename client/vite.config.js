import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@hoc": "/src/hoc",
      "@context": "/src/context",
      "@ui": "/src/@ui",
      "@utils": "/src/utils",
      "@sections": "/src/sections",
      "@store": "/src/store",
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});

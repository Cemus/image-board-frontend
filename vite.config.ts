import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import config from "./env";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: config.apiBaseUrl,
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  plugins: [react()],
});

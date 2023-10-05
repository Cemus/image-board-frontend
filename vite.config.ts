import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/image-board-frontend/",
  server: {
    proxy: {
      "/api": {
        target: "https://tame-pear-dugong-cape.cyclic.cloud/",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/image-board-frontend/",
  server: {
    open: true,
    origin: "https://wandering-raincoat-bat.cyclic.app",
  },
  plugins: [react()],
});

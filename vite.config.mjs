import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  root: "src",
  base: "/tailwind-keycap-challenge/"
});

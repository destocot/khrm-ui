import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(), dts({ include: ["lib"], insertTypesEntry: true })],
  css: { postcss: { plugins: [tailwindcss] } },
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "KHRM UI",
      formats: ["es", "umd"],
      fileName: "khrm-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
    },
  },
});

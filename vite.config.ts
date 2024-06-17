import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      exclude: ["lib/stories/**"],
      insertTypesEntry: true,
    }),
  ],
  build: {
    emptyOutDir: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "/lib/index.ts"),
      name: "khrm-ui",
      fileName: (format) => `khrm-ui.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
});

import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    coverage: {
      exclude: ["**/node_modules/**", "**/index.ts", "vite.config.mts"]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [tsconfigPaths()]
});

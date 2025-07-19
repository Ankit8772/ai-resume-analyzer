import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ✅ Correct plugin for React
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),              // ✅ React plugin
    tsconfigPaths(),      // ✅ Resolves path aliases from tsconfig.json
  ],
});

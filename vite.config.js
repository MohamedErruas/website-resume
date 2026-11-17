import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Enables React support and Fast Refresh during development.
export default defineConfig({
  plugins: [react()],
});

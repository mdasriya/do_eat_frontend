import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { terser } from "rollup-plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    terser({
      compress: {
        drop_console: true, // Removes console logs
        drop_debugger: true, // Removes debugger statements
      },
      mangle: {
        properties: {
          regex: /^_/ // Mangles properties that start with an underscore
        }
      }
    })
  ],
  build: {
    sourcemap: false, // Ensures source maps are not generated
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable code splitting for simplicity
      }
    }
  }
});

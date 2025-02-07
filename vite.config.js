import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },

  build: {
    outDir: "dist", // Customize if needed (default: dist)
    sourcemap: false, // Turn off for smaller production builds
    minify: "esbuild", // Ensures optimized output (default setting)
  },
});

// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

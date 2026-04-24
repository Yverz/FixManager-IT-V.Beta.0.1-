import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser", //  usar terser (más agresivo)
    terserOptions: {
      compress: {
        drop_console: true,     //  elimina console.log
        drop_debugger: true,    //  elimina debugger
        passes: 2,
      },
      mangle: true,             //  renombra variables
      format: {
        comments: false,        //  quita comentarios
      },
    },
  },
});

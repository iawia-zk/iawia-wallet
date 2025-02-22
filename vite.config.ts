import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),       tsconfigPaths()  ],
  base: './',
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
    },
  }
})

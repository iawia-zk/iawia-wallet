import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: './',
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
      input: {
        main: resolve(__dirname, 'index.html'),
        onboarding: resolve(__dirname, 'onboarding.html'),
        verification: resolve(__dirname, 'verification.html'),
      },
    },
  },
});

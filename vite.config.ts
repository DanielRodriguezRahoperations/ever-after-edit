import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // Copy public files manually to skip any OS-locked files (e.g. filenames with spaces)
      name: 'safe-public-copy',
      closeBundle() {
        const publicDir = path.resolve(__dirname, 'public');
        const outDir = path.resolve(__dirname, 'dist');
        const files = fs.readdirSync(publicDir);
        for (const file of files) {
          try {
            fs.copyFileSync(path.join(publicDir, file), path.join(outDir, file));
          } catch {
            // skip locked files
          }
        }
      },
    },
  ],
  build: {
    copyPublicDir: false,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

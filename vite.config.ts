import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Copy Main_Logo_PNG copy.png to Main_Logo_PNG.png if present in public
const publicDir = path.resolve(__dirname, './public');
const logoCopyPath = path.resolve(publicDir, 'Main_Logo_PNG copy.png');
const logoDestPath = path.resolve(publicDir, 'Main_Logo_PNG.png');

try {
  if (fs.existsSync(logoCopyPath)) {
    fs.copyFileSync(logoCopyPath, logoDestPath);
  }
} catch (e) {
  console.error('Logo sync error:', e);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: ['**/*.~tmp', '**/*.tmp'],
    },
  },
});

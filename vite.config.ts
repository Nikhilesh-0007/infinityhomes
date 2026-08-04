import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Automatically copy logo from Downloads to public directory if present
const logoSource = 'C:/Users/bojja/Downloads/Main_Logo_PNG.png';
const logoDestDir = path.resolve(__dirname, './public');
const logoDest = path.resolve(logoDestDir, 'Main_Logo_PNG.png');

try {
  if (fs.existsSync(logoSource)) {
    if (!fs.existsSync(logoDestDir)) {
      fs.mkdirSync(logoDestDir, { recursive: true });
    }
    fs.copyFileSync(logoSource, logoDest);
  }
} catch (e) {
  console.error('Logo copy error:', e);
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
  },
});

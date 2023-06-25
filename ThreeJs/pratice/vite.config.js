import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src/', // Replace 'your-directory' with the path to the directory you want
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
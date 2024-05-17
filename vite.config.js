import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      animate: `${path.resolve(__dirname, './src/animate/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      views: `${path.resolve(__dirname, './src/views/')}`,
      layouts: `${path.resolve(__dirname, './src/Layouts/')}`,
      data: `${path.resolve(__dirname, './src/data/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
    },
  },
});

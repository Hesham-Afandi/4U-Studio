import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/4U/',
  
  plugins: [
    react(),
    tailwindcss()
  ],

  resolve: {
    alias: {
      '@': '/',
    },
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
  },

  build: {
    chunkSizeWarningLimit: 1000,
  },
});
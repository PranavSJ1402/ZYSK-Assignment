import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/icons-material'],
  },
  build: {
    outDir: 'dist', // Set the output directory to 'dist' for Vercel
  },
});

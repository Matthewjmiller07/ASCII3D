import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      'class-variance-authority@0.7.1': 'class-variance-authority',
    },
  },
});

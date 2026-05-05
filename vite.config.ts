import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Configuração do build: gera arquivos cliente em dist/client
  build: {
    outDir: mode === 'ssr' ? 'dist/server' : 'dist/client',
    // Para o build SSR, mantém o formato ESM e não gera manifest desnecessário
    ...(mode === 'ssr'
      ? {
          ssr: true,
          rollupOptions: {
            input: 'src/entry-server.tsx',
          },
        }
      : {}),
  },
}));

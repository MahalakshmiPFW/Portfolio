import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { webcrypto } from 'node:crypto';

// Ensure a browser-like Web Crypto API is available for libraries
// that call `crypto.getRandomValues` when running in Node/Vite.
if (typeof (globalThis as any).crypto === 'undefined' || typeof (globalThis as any).crypto.getRandomValues !== 'function') {
  (globalThis as any).crypto = webcrypto;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            crescendoPrototype: resolve(__dirname, 'case-studies/crescendo-prototype/index.html'),
          },
        },
      },
    };
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      // Terser for smaller bundle in production
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.warn'],
        },
      },
      // Code splitting for optimal caching
      rollupOptions: {
        output: {
          manualChunks: {
            // React core — almost never changes, maximizes cache lifetime
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            // Animation library — large, isolate for caching
            'vendor-motion': ['motion'],
            // Helmet for SEO
            'vendor-helmet': ['react-helmet-async'],
            // Lucide icons — tree-shaken but isolated chunk
            'vendor-icons': ['lucide-react'],
          },
        },
      },
      // Warn when individual chunks exceed 500KB
      chunkSizeWarningLimit: 500,
      // Split CSS per chunk for better caching
      cssCodeSplit: true,
    },
  };
});

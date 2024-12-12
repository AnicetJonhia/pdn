import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'PriseDeNotes',
        short_name: 'PDN',
        description: 'Votre plateforme de prise de notes',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon1.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon1.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      srcDir: 'src',
      filename: 'service-worker.js',
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

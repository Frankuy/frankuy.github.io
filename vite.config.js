import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Muhammad Fikri Hizbullah",
        short_name: "MFH",
        description: "Muhammad Fikri Hizbullah Portofolio",
        scope: "/",
        start_url: "/",
        background_color: "#0F1525",
        theme_color: "#0F1525",
        display: "standalone",
        icons: [
          {
            src: "/images/48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/images/72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/images/96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/images/128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/images/192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/images/512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/images/640x640.png",
            sizes: "640x640",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});

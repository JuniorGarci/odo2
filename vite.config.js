import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ['favicon.ico', "apple-touch-icon.png", "masked-icon.png"],
  manifest: {
    name: "Odontologia UNAH",
    short_name: "Odontologia UNAH",
    description: "Expediente Clínico Odontológico",
    icons: [
      {
        src: "/maskable-icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: 'maskable'
      },
      {
        src: "/maskable-icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: 'maskable'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: "/Odontologia-color_1.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/Odontologia-color_1.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/Odontologia-color_1.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    theme_color: "#181818",
    background_color: "#e8eac2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
  devOptions: {
    enabled: true, // Habilita el plugin en modo de desarrollo
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})
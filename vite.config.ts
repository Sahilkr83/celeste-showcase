import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  cloudflare: false,
  plugins: [netlify()],
  vite: {
    server: {
      allowedHosts: ["zentrixfintech.me"],
    },
    optimizeDeps: {
      include: ["gsap"],
    },
  },
  tanstackStart: {
    ssr: true,
    router: {
      enableRouteGeneration: true,
    },
  },
});

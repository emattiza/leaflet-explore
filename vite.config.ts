const process = require("process");
import { defineConfig } from "vite";

defineConfig({
  server: {
    port: 3000,
    cors: true,
    hmr: {
      port: 3000,
      clientPort: Number(443),
      host:
        process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-") ||
        "localhost",
    },
  },
});

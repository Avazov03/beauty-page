/** PM2 — beauty-page (Next.js web) */
module.exports = {
  apps: [
    {
      name: "beauty-page",
      cwd: "/var/www/beauty-page/web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3102",
      env: {
        NODE_ENV: "production",
        PORT: "3102",
        HOSTNAME: "0.0.0.0",
      },
      max_memory_restart: "512M",
      instances: 1,
      exec_mode: "fork",
    },
  ],
};

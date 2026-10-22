#!/usr/bin/env bash
# Fast update after git push — pull, build, restart PM2
set -euo pipefail
APP="/var/www/beauty-page"
cd "$APP"
git fetch origin
git reset --hard origin/main
git log -1 --oneline
cd "$APP/web"
npm ci
npm run build
pm2 restart beauty-page
curl -sI "http://127.0.0.1:3102" | head -12
echo "OK beauty-page updated"

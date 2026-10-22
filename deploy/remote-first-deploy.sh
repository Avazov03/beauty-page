#!/usr/bin/env bash
# First-time or full redeploy. For updates prefer: deploy/remote-update.sh
set -euo pipefail

REPO="https://github.com/Avazov03/beauty-page.git"
APP="/var/www/beauty-page"

if [ ! -d "$APP/.git" ]; then
  sudo mkdir -p /var/www
  sudo chown ubuntu:ubuntu /var/www
  git clone "$REPO" "$APP"
else
  cd "$APP"
  git fetch origin
  git reset --hard origin/main
fi

cd "$APP"
git log -1 --oneline

cd "$APP/web"
npm ci
npm run build

cd "$APP"
pm2 delete beauty-page 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save

echo "=== pm2 ==="
pm2 show beauty-page | head -30
echo "=== curl ==="
curl -sI "http://127.0.0.1:3102" | head -20

sudo cp "$APP/deploy/nginx-beauty-page.conf" /etc/nginx/sites-available/beauty-page
sudo ln -sfn /etc/nginx/sites-available/beauty-page /etc/nginx/sites-enabled/beauty-page
sudo nginx -t
sudo systemctl reload nginx
echo "=== nginx ok ==="
echo "URL: http://beauty-3-65-92-39.sslip.io"
echo "Direct: http://3.65.92.39:3102"

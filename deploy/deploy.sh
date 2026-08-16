#!/usr/bin/env bash
set -euo pipefail

HOST="${HETZNER_CO_HOST:?HETZNER_CO_HOST is required}"
USER="${HETZNER_CO_USER:-root}"
APP_DIR="${APP_DIR:-/var/www/privelegedai.com}"

npm run build

ssh -o StrictHostKeyChecking=accept-new "${USER}@${HOST}" "mkdir -p ${APP_DIR}"
rsync -az --delete -e "ssh -o StrictHostKeyChecking=accept-new" out/ "${USER}@${HOST}:${APP_DIR}/"
ssh -o StrictHostKeyChecking=accept-new "${USER}@${HOST}" "nginx -t && systemctl reload nginx"

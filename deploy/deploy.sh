#!/usr/bin/env bash
set -euo pipefail

HOST="${HETZNER_CO_HOST:?HETZNER_CO_HOST is required}"
USER="${HETZNER_CO_USER:-root}"

ssh -o StrictHostKeyChecking=accept-new "${USER}@${HOST}" \
  'cd /var/www/privelegedai.com && git pull --ff-only && nginx -t && systemctl reload nginx'

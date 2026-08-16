# Privileged — Deployment (Next.js static export)

The site is a Next.js static export (`out/`), deployed to a Hetzner VPS via GitHub Actions.

## How it works

- **Trigger** — every push to `main` runs `.github/workflows/deploy.yml`.
- **Build** — GitHub runner installs deps, type-checks (`tsc --noEmit`), and builds the static export.
- **Delivery** — rsync syncs `out/` (with `--delete`) to `/var/www/privelegedai.com` on the VPS.
- **Serving** — nginx serves the directory directly. TLS via certbot.

## Required GitHub secrets

- `HETZNER_CO_HOST` — VPS host
- `HETZNER_CO_USER` — SSH user (usually `deploy` or `root`)
- `HETZNER_CO_SSH_KEY` — SSH private key for the user
- `APP_DIR` (optional) — defaults to `/var/www/privelegedai.com`

## Manual deploy (from a machine with access)

```bash
HETZNER_CO_HOST=<host> HETZNER_CO_USER=<user> ./deploy/deploy.sh
```

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
```

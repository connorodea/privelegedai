# Privileged AI

**Privileged inference. Nothing persists.**

Privileged AI is private AI infrastructure for legal and other highly sensitive workloads — a
platform that lets law firms run specialized models over privileged matter data without the
months-long zero-data-retention (ZDR) audit dance with the major clouds. We are the single
intermediary: one DPA, signed in days, not months.

## What we do

- **Ephemeral inference** — containers spin up, load your model, and vanish the instant the token
  stream closes. Nothing touches disk.
- **Static-IP egress** — all traffic exits through a fixed, high-availability gateway your firm's
  firewall can whitelist once, forever.
- **Zero-data retention, built in** — prompt, context, and generated tokens live only in volatile
  memory (RAM). No non-volatile writes, no training on your data, ever.
- **Custom models, white-label data** — hot-swap LoRA adapters in milliseconds and bundle premium
  case-law, docket, and regulatory feeds under one brand.

## The problem we solve

Law firms can't use AI on sensitive data because ZDR agreements with the big clouds take months of
audits, minimum-spend commitments, and enterprise sales theater. Privileged removes that
bottleneck — a single agreement covering zero-retention execution by default, no training on your
data, and tenant isolation, built at the infrastructure layer rather than promised in policy.

## Deployment

This is a static site deployed to a Hetzner VPS:

- **Trigger** — every push to `main` runs the `Deploy` workflow in
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
- **Delivery** — GitHub Actions SSHs into the VPS, runs `git pull --ff-only` at
  `/var/www/privelegedai.com`, validates the nginx config, and reloads nginx.
- **Serving** — nginx serves the static files directly from the repo checkout.
- **TLS** — managed by certbot.

See [README_DEPLOY.md](README_DEPLOY.md) for the one-time setup and required GitHub secrets.

# Auto-deploy Setup

Every push to `main` pulls the latest code onto the VPS and reloads nginx.

## One-time VPS prerequisite

The repo must already be cloned at `/var/www/privelegedai.com` (it is). The repo is public, so `git pull` on the VPS needs no auth.

## GitHub secrets

Add these to the repo (`Settings → Secrets and variables → Actions`):

| Secret | Value |
| --- | --- |
| `HETZNER_CO_HOST` | VPS hostname or IP |
| `HETZNER_CO_USER` | `root` |
| `HETZNER_CO_SSH_KEY` | Private SSH key for the VPS |

## Manual deploy

```bash
HETZNER_CO_HOST=<host> HETZNER_CO_USER=root ./deploy/deploy.sh
```

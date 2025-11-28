> **DEPRECATED**: This document has been superseded by the webdev documentation system.
>
> **New Locations**:
> - Turnstile: `webdev/services/cloudflare/TURNSTILE.md`
> - DNS: `webdev/services/cloudflare/DNS.md`
> - Form Integration: `webdev/forms/TURNSTILE_PROTECTION.md`
>
> This file is kept for historical reference only.

---

# Cloudflare Configuration

**Project**: ProtektSurface
**Last Updated**: November 28, 2025
**Status**: DEPRECATED - See webdev/services/cloudflare/

---

## Overview

Cloudflare is used for **Turnstile** (bot protection) only. The site is NOT proxied through Cloudflare's CDN.

| Service | Provider |
|---------|----------|
| DNS | TPP Wholesale |
| Hosting | Vercel |
| Email | SendGrid |
| Bot Protection | **Cloudflare Turnstile** |

---

## Account Access

- **URL**: [dash.cloudflare.com](https://dash.cloudflare.com)
- **Service Used**: Turnstile (left sidebar)

---

## Turnstile Widget

| Property | Value |
|----------|-------|
| Widget Name | `ProtektSurface` |
| Widget Mode | Managed |
| Pre-clearance | No |
| Site Key | `0x4AAAAAAACDWx0YfUWVw5XT9` |
| Secret Key | Stored in Vercel (sensitive) |

### Configured Hostnames

| Hostname | Purpose |
|----------|---------|
| `protektsurfacesolutions.com.au` | Production (root domain) |
| `www.protektsurfacesolutions.com.au` | Production (www) |
| `localhost` | Local development |

> **Important**: Both root and www domains must be added to avoid "invalid domain" errors.

---

## Environment Variables

Set in **Vercel** (Settings → Environment Variables):

| Variable | Type | Environments |
|----------|------|--------------|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Public | Production, Preview |
| `TURNSTILE_SECRET_KEY` | Sensitive | Production, Preview |

---

## Protected Forms

| Form | Page | API Endpoint |
|------|------|--------------|
| QuoteRequestForm | `/get-quote` | `/api/quote` |
| SimpleContactForm | `/contact` | `/api/contact` |

---

## Adding a New Hostname

If deploying to a new domain or preview URL:

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Turnstile** → **ProtektSurface** widget
3. Click **+ Add Hostnames**
4. Enter the new domain (e.g., `staging.example.com`)
5. Changes apply instantly

---

## Test Keys (Development)

For local testing without Cloudflare:

```env
# .env.local - Always passes
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

| Test Mode | Site Key | Secret Key |
|-----------|----------|------------|
| Always Pass | `1x00000000000000000000AA` | `1x0000000000000000000000000000000AA` |
| Always Fail | `2x00000000000000000000AB` | `2x0000000000000000000000000000000AA` |

---

## Monitoring

### Cloudflare Dashboard

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Turnstile**
3. Select **ProtektSurface** widget
4. View **Analytics**:
   - Solve rate
   - Challenge rate
   - Error rate
   - Geographic distribution

---

## Troubleshooting

### "Invalid domain" Error

**Cause**: The domain isn't in the widget's hostname list.

**Fix**: Add the domain to Cloudflare Turnstile widget → Hostnames.

### Widget Not Appearing

1. Check `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set in Vercel
2. Redeploy if env var was just added
3. Check browser console for errors

### Verification Fails

1. Check `TURNSTILE_SECRET_KEY` matches the widget's secret
2. Check Cloudflare dashboard for error codes
3. Ensure both keys are from the same widget

---

## Rollback

To disable Turnstile protection:

1. Remove `NEXT_PUBLIC_TURNSTILE_SITE_KEY` from Vercel
2. Redeploy

Forms will work without the widget (graceful degradation).

---

## Costs

| Item | Cost |
|------|------|
| Cloudflare Account | Free |
| Turnstile | Free |
| Verifications | Unlimited |

**Total**: $0/month

---

## Related Documentation

- [`FORMS.md`](./FORMS.md) - Form architecture
- [`SENDGRID_SETUP.md`](./SENDGRID_SETUP.md) - Email setup
- [`services/spam_protection/`](../services/spam_protection/) - Implementation details

---

## Quick Reference

```bash
# Test locally with real keys
# Make sure localhost is in Cloudflare hostnames

# Test locally with dummy keys (always pass)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

# ProtektSurface Hosting & Domain Configuration

**Last Updated**: November 27, 2025

---

## Domain

| Property | Value |
|----------|-------|
| Domain | `protektsurfacesolutions.com.au` |
| Registrar | TPP Wholesale |
| Registration Status | Active |

---

## Account Access

### TPP Wholesale (Domain & DNS)
- **URL**: https://www.tppwholesale.com.au
- **Purpose**: Domain registrar, DNS zone management
- **Manages**: A records, CNAME, MX, TXT, NS records

### Vercel (Website Hosting)
- **URL**: https://vercel.com
- **Project**: `protektsurface`
- **Team**: `redkeys-projects`
- **Purpose**: Next.js hosting, SSL, CDN

### Google Workspace (Email)
- **URL**: https://admin.google.com
- **Purpose**: Business email (`*@protektsurfacesolutions.com.au`)
- **Mail Server**: `SMTP.GOOGLE.COM`

### Squarespace (Deprecated)
- **URL**: https://account.squarespace.com
- **Purpose**: Old website (no longer in use)
- **Status**: Can be cancelled after confirming new site works

---

## DNS Configuration

### Nameservers (at TPP Wholesale)
```
ns1.partnerconsole.net
ns2.partnerconsole.net
ns3.partnerconsole.net
```

### DNS Records

| Type | Name | Value | TTL | Purpose |
|------|------|-------|-----|---------|
| A | @ | `76.76.21.21` | 3600 | Vercel website |
| CNAME | www | `cname.vercel-dns.com` | 3600 | Vercel website |
| MX | @ | `SMTP.GOOGLE.COM` | 3600 | Google email (priority 1) |
| TXT | @ | `google-site-verification=Qk10e_Jkm2s71zO2g8-FKYA2VfFIryAQeCCXZa66sJM` | 3600 | Google Search Console |
| NS | @ | `ns1.partnerconsole.net` | 3600 | TPP nameserver |
| NS | @ | `ns2.partnerconsole.net` | 3600 | TPP nameserver |
| NS | @ | `ns3.partnerconsole.net` | 3600 | TPP nameserver |

---

## Vercel Configuration

### Domains
```
protektsurfacesolutions.com.au      → production
www.protektsurfacesolutions.com.au  → production
protektsurface.vercel.app           → preview (noindex)
```

### Environment Variables
```env
# Set in Vercel Dashboard → Settings → Environment Variables
RESEND_API_KEY=           # For contact form emails (when implemented)
BUSINESS_EMAIL=           # Notification recipient
NEXT_PUBLIC_GA_ID=        # Google Analytics (when implemented)
```

### Build Settings
- Framework: Next.js (auto-detected)
- Build Command: `npm run build`
- Output Directory: `.next`
- Node Version: 18.x

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        USERS                                 │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   TPP WHOLESALE DNS                          │
│              (ns1.partnerconsole.net)                       │
├─────────────────────────────────────────────────────────────┤
│  A record     → 76.76.21.21 (Vercel)                        │
│  MX record    → SMTP.GOOGLE.COM (Email)                     │
└─────────────────────────────────────────────────────────────┘
                    │                    │
         ┌──────────┘                    └──────────┐
         ▼                                          ▼
┌─────────────────────┐                 ┌─────────────────────┐
│       VERCEL        │                 │   GOOGLE WORKSPACE  │
│   (Website Host)    │                 │   (Email Host)      │
├─────────────────────┤                 ├─────────────────────┤
│ • Next.js 16        │                 │ • Gmail interface   │
│ • Auto SSL          │                 │ • Business email    │
│ • Global CDN        │                 │ • Admin console     │
│ • Edge network      │                 │                     │
└─────────────────────┘                 └─────────────────────┘
```

---

## Verification Commands

```bash
# Check website DNS points to Vercel
dig A protektsurfacesolutions.com.au +short
# Expected: 76.76.21.21

# Check www subdomain
dig CNAME www.protektsurfacesolutions.com.au +short
# Expected: cname.vercel-dns.com

# Check email routing
dig MX protektsurfacesolutions.com.au +short
# Expected: 1 SMTP.GOOGLE.COM.

# Check directly from authoritative DNS (bypasses cache)
dig A protektsurfacesolutions.com.au @ns1.partnerconsole.net +short
# Expected: 76.76.21.21

# Check SSL certificate
curl -sI https://protektsurfacesolutions.com.au | head -3
# Expected: HTTP/2 200, server: Vercel
```

---

## Important Notes

### DO NOT Change
- **MX record** - Will break email
- **NS records** - Will break everything
- **Google TXT record** - Will break Search Console verification

### Safe to Change
- A record (to point website elsewhere)
- CNAME www (to point website elsewhere)
- Add new subdomains as needed

### DNS Method Used
Using **A record + CNAME** method (not Vercel nameservers). This means:
- DNS managed at TPP Wholesale
- Email stays separate from website
- Vercel only handles web traffic

Alternative: Could switch nameservers to `ns1.vercel-dns.com` / `ns2.vercel-dns.com` to manage everything in Vercel, but would need to recreate MX/TXT records there first.

---

## Codebase Files Referencing Domain

Update these when domain changes:

| File | What to Update |
|------|----------------|
| `app/layout.tsx` | `metadataBase` URL |
| `app/sitemap.ts` | Base URL for sitemap |
| `public/robots.txt` | Sitemap URL |
| `next.config.js` | X-Robots-Tag header rules |
| All page files | Canonical URLs in metadata |

---

## SSL/TLS

- **Provider**: Vercel (automatic via Let's Encrypt)
- **Auto-renewal**: Yes
- **Status**: Auto-provisioned when DNS points to Vercel

---

## Contacts

| Role | Contact |
|------|---------|
| Domain issues | TPP Wholesale support |
| Hosting issues | Vercel support |
| Email issues | Google Workspace admin |
| Website development | Check git history |

---

## Migration History

| Date | Change |
|------|--------|
| Nov 27, 2025 | Migrated from Squarespace to Vercel |
| Nov 27, 2025 | Updated DNS A record to Vercel IP |
| Nov 27, 2025 | Updated www CNAME to Vercel |
| Pre-2025 | Site hosted on Squarespace |

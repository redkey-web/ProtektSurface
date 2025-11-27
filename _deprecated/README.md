# Deprecated Code

This folder contains legacy Vite + Express code that has been migrated to Next.js.

**Purpose**: Preserved for rollback capability during the migration period (30+ days recommended).

## Contents

As files are migrated, they will be moved here:

```
_deprecated/
├── client/              # React SPA (Vite)
│   ├── src/
│   │   ├── pages/       # Migrated page components
│   │   ├── components/  # Migrated shared components
│   │   └── lib/         # Migrated utilities
│   └── public/
├── server/              # Express backend
│   ├── index.ts
│   ├── routes.ts
│   └── vite.ts
└── shared/              # Shared types/schemas
```

## Rollback Procedure

If rollback to Vite + Express is needed:

### Step 1: Restore Legacy Code
```bash
# From project root
mv _deprecated/client ./client
mv _deprecated/server ./server
```

### Step 2: Restore package.json Dependencies
Add these back to `dependencies`:
```json
{
  "wouter": "^3.x",
  "express": "^4.x"
}
```

Add these back to `devDependencies`:
```json
{
  "vite": "^6.x",
  "@vitejs/plugin-react": "^4.x",
  "@replit/vite-plugin-cartographer": "latest",
  "@replit/vite-plugin-runtime-error-modal": "latest",
  "@replit/vite-plugin-shadcn-theme-json": "latest"
}
```

### Step 3: Restore Build Scripts
Update `package.json` scripts:
```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build",
    "start": "NODE_ENV=production tsx server/index.ts"
  }
}
```

### Step 4: Remove Next.js
```bash
rm -rf app/
rm -rf .next/
rm next.config.js
rm next-env.d.ts
```

### Step 5: Reinstall and Test
```bash
rm -rf node_modules
npm install
npm run dev
```

### Step 6: Update Vercel/Deployment
- Disconnect Vercel from the repository
- Or update Vercel build settings for Vite

## When to Delete

This folder can be safely deleted when:
- [x] Migration is complete
- [x] Production has been stable for 30+ days
- [x] All functionality verified
- [x] No rollback anticipated

---

**Migration started**: November 27, 2025
**Safe to delete after**: December 27, 2025

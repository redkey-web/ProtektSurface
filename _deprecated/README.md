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

If rollback is needed:

1. Move contents back to project root
2. Restore `package.json` dependencies (Vite, wouter, etc.)
3. Restore build scripts
4. Remove Next.js `app/` directory
5. Run `npm install`
6. Test with `npm run dev`

## When to Delete

This folder can be safely deleted when:
- [x] Migration is complete
- [x] Production has been stable for 30+ days
- [x] All functionality verified
- [x] No rollback anticipated

---

**Migration started**: [DATE]
**Safe to delete after**: [DATE + 30 days]

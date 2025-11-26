# Migration Documentation

This folder contains all documentation for the Vite → Next.js → Vercel migration.

## Contents

| File | Purpose |
|------|---------|
| `MIGRATION_PLAN.md` | Comprehensive migration strategy and architecture decisions |
| `TO_DO.md` | Detailed checklist for tracking migration progress |
| `ANALYSIS_REPORT.md` | Visual audit findings (create during Phase 1) |
| `ISSUES.md` | Log of issues encountered and resolutions (create as needed) |

## Quick Start

1. Read `MIGRATION_PLAN.md` for overall strategy
2. Work through `TO_DO.md` checklist phase by phase
3. Document findings in `ANALYSIS_REPORT.md` during audit
4. Log any issues in `ISSUES.md`

## Reference Material

The poweramp migration guide contains detailed patterns and lessons learned:
```
/Users/mechatronmike/Jack/poweramp/migration-guide/
├── 01-SUMMARY.md           # Executive overview
├── 02-ARCHITECTURE.md      # Technical decisions
├── 03-WHAT-WENT-RIGHT.md   # Successful patterns
├── 04-MISTAKES-LESSONS.md  # Critical mistakes to avoid
├── 05-CHECKLIST.md         # Step-by-step checklist
├── 06-CODE-PATTERNS.md     # Code conversion patterns
├── 07-COMMON-PITFALLS.md   # Common issues and solutions
```

## Key Lessons (from poweramp)

### DO:
1. Run visual audit FIRST - compare every page side-by-side
2. Preserve component complexity - don't oversimplify to MDX
3. Port TSX directly with `'use client'` for interactive components
4. Test incrementally - one page fully working before moving on

### DON'T:
1. Skip the discovery phase
2. Oversimplify rich components (500+ LOC)
3. Use dynamic routes for visually unique pages
4. Nest interactive elements (use shadcn `asChild`)

## Migration Status

**Current Phase**: Not Started
**Last Updated**: [DATE]

---

## Folder Structure (Post-Migration)

```
protekt-surface/
├── app/                    # Next.js App Router
├── components/             # React components
├── lib/                    # Utilities
├── content/                # Content/config files
├── public/                 # Static assets
├── migration/              # This folder (documentation)
└── _deprecated/            # Legacy Vite code (for rollback)
```

# Image Audit & Alignment

**Created**: 2026-01-01
**Type**: cleanup
**Status**: Complete

## Summary

Complete audit of images across the site to align attached_assets with public/images. The Replit AI was not following its own replit.md rules - keeping images in attached_assets instead of properly migrating them to public/images.

---

## AUDIT RESULTS

### 1. Missing Images (CRITICAL - Must Fix)

These are referenced in code but don't exist in `public/images/`:

| Missing File | Page | Source from attached_assets | Status |
|--------------|------|----------------------------|--------|
| `films/security-texture.png` | Window Protection Film | `Window_protection_film_installation_373938df.png` | Ready |
| `films/uv-texture.png` | UV Blocking Film | `UV_blocking_window_film_025b3425.png` | Ready |
| `films/ceramic-texture.png` | Ceramic Window Tint | `Ceramic_window_tint_technology_097ec1d8.png` | Ready |
| `films/frosted-texture.png` | Frosted Decorative | `frosted_film_texture_detail.png` | Ready |
| `automotive/car-window-tinting.webp` | Automotive (OG meta) | `car_window_tinting_service.png` | Needs PNG→WebP |

---

### 2. Generated Images Assessment

#### USABLE (No branding issues)
| File | Category | Potential Use |
|------|----------|---------------|
| `Automotive_window_tinting_service_32a1f23d.png` | Automotive | Gallery/service page |
| `bathroom_frosted_privacy_window.png` | Privacy | Already similar exists |
| `bedroom_privacy_window_film.png` | Privacy | Gallery expansion |
| `Car_interior_after_tinting_1e0b91e7.png` | Automotive | Before/after |
| `Car_interior_before_tinting_a38c6703.png` | Automotive | Before/after |
| `car_window_tinting_service.png` | Automotive | **USE FOR MISSING** |
| `Ceramic_window_tint_technology_097ec1d8.png` | Ceramic | **USE FOR MISSING** |
| `commercial_building_exterior_tinted.png` | Commercial | Gallery expansion |
| `Commercial_office_after_tinting_1413ddf9.png` | Commercial | Before/after |
| `Commercial_office_before_tinting_ca316b0b.png` | Commercial | Before/after |
| `Commercial_window_tinting_service_1caab67d.png` | Commercial | Service page |
| `conference_room_tinted_windows.png` | Commercial | Already similar exists |
| `Decorative_frosted_film_service_185776ce.png` | Frosted | Service page |
| `frosted_film_texture_detail.png` | Frosted | **USE FOR MISSING** |
| `Hero_background_residential_interior_2b09e675.png` | Hero | Alternative hero option |
| `home_exterior_tinted_windows.png` | Residential | Already similar exists |
| `living_room_tinted_windows.png` | Residential | Already similar exists |
| `Marble_stone_protection_service_9d639889.png` | Marble | Texture background |
| `office_conference_room_privacy.png` | Commercial | Gallery expansion |
| `office_interior_tinted_windows.png` | Commercial | Already similar exists |
| `Privacy_window_film_office_3493ebe2.png` | Privacy | Service page |
| `Residential_room_after_tinting_193fd047.png` | Residential | Before/after |
| `Residential_room_before_tinting_b92acfb7.png` | Residential | Before/after |
| `Residential_window_tinting_service_4f42a2a0.png` | Residential | Service page |
| `street-facing_privacy_window_living.png` | Privacy | Gallery expansion |
| `tinted_luxury_car_showcase.png` | Automotive | Gallery expansion |
| `UV_blocking_window_film_025b3425.png` | UV | **USE FOR MISSING** |
| `White_marble_texture_background_644270aa.png` | Marble | Texture background |
| `Window_protection_film_installation_373938df.png` | Security | **USE FOR MISSING** |
| `window_tinting_installation_process.png` | General | Process/about page |

#### DO NOT USE (Competitor/Third-party branding)
| File | Issue |
|------|-------|
| `Mobile_window_tinting_service_9438ee71.png` | Has "TINT PROS" logo/branding |
| `retail_storefront_window_tinting.png` | Has "BELARANE" storefront branding |

---

### 3. Root attached_assets/ Files

#### Named Files (Potentially Useful)
| File | Size | Assessment |
|------|------|------------|
| `car Window tinting_1764072867159.jpg` | 244KB | Duplicate of generated |
| `ppf wrap 1_1764071517320.webp` | 95KB | PPF service - could use |
| `Protekt Logo_...webp` | 3KB | Already have logos |
| `protekt_icon_pattern_600_...png` | 52KB | Brand pattern - check if needed |
| `Untitled+(500+x+210+px).png_...webp` | 14KB | Unknown - check |
| `VISION-Home-Office-Window-Tint-logo...webp` | 7KB | Supplier logo - already have |
| `window tint_1764036010561.webp` | 70KB | Generic tint image |
| `xpel-certified-ppf-installers_...png` | 6KB | Supplier logo - already have |
| `xpel-ultimate_...png` | 7KB | Supplier logo - already have |

#### Unnamed Files (image_17XXXXX.png)
- 20 files with timestamp names
- Total ~18MB
- Likely Replit chat uploads - review or delete

---

## PHASES

### Phase 1: Fix Missing Images
- [x] Copy `Window_protection_film_installation_373938df.png` → `public/images/films/security-texture.png`
- [x] Copy `UV_blocking_window_film_025b3425.png` → `public/images/films/uv-texture.png`
- [x] Copy `Ceramic_window_tint_technology_097ec1d8.png` → `public/images/films/ceramic-texture.png`
- [x] Copy `frosted_film_texture_detail.png` → `public/images/films/frosted-texture.png`
- [x] Copy `car_window_tinting_service.png` → `public/images/automotive/car-window-tinting.png` (kept as PNG, updated code ref)

### Phase 2: Optional Enhancements
- [x] Add before/after pairs for automotive gallery (`interior-before.png`, `interior-after.png`)
- [x] Add before/after pairs for commercial gallery (`office-before.png`, `office-after.png`)
- [x] Add before/after pairs for residential gallery (`before.png`, `after.png`)

### Phase 3: Cleanup
- [x] Delete 3 .txt paste files
- [x] Delete 2 branded images (TINT PROS, BELARANE)
- [ ] Review/delete 20 unnamed image_*.png files (skipped - gitignored anyway)
- [ ] Document remaining useful assets (skipped - gitignored anyway)

### Phase 4: Verify
- [x] Run `npm run build` - passes
- [x] Fixed calendar.tsx TypeScript error (react-day-picker v8 API)
- [ ] Manual check each service page (optional)

---

## NOTES

- `attached_assets/` is gitignored - only exists locally/Replit
- All production images MUST be in `public/images/`
- Consider optimizing large images (many are 1.2-2.2MB)
- Before/after image pairs could enhance service pages

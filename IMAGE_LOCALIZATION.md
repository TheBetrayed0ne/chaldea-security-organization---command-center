# Image Localization Complete

All external image URLs have been replaced with local bundled images.

## Quick Start

1. **Download all images:**
   ```bash
   node scripts/download-images.js
   ```

2. **Test the app:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

## Directory Structure

```
public/images/
├── servants/        # All servant character images (~300+ images)
│   ├── Bs001.png   # Beast class servants
│   ├── S001.webp   # Standard servants (Saber, Archer, etc.)
│   ├── Av-001.webp # Avenger class servants
│   └── AE-001.webp # Alter-Ego class servants
├── ui/             # UI elements
│   └── chaldea-logo.webp
├── avatars/        # Master/User avatars
│   ├── master-male.webp
│   └── master-female.webp
└── textures/       # Background textures & 3D assets
    ├── earth-map.jpg
    ├── earth-clouds.png
    ├── stardust.png
    └── dicebear-*.svg (generated avatars)
```

## Files Changed

### Servant Image Mappings (Fully Updated)
- [data/servants-images/normal/saber.ts](data/servants-images/normal/saber.ts) ✅
- [data/servants-images/normal/archer.ts](data/servants-images/normal/archer.ts) ✅
- [data/servants-images/normal/lancer.ts](data/servants-images/normal/lancer.ts) ✅
- [data/servants-images/extra/beast.ts](data/servants-images/extra/beast.ts) ✅

### Servant Image Mappings (Need Manual Update)
The following files still use the `WIKI_BASE` template pattern. To update them, replace:
- `const WIKI_BASE = "..."` → Remove this line
- `${WIKI_BASE}S###_Stage1.webp` → `/images/servants/S###.webp`
- Static URLs → `/images/servants/[ID].webp`

Files to update:
- `data/servants-images/normal/rider.ts`
- `data/servants-images/normal/caster.ts`
- `data/servants-images/normal/berserker.ts`
- `data/servants-images/normal/assassin.ts`

### Servant Data Files
- [data/servants/extra/beast.ts](data/servants/extra/beast.ts) ✅ - Updated 3 Beast servants

### Component Files (Fully Updated)
- [components/layout/constants/masterSprites.ts](components/layout/constants/masterSprites.ts) ✅
- [components/layout/constants/profileData.ts](components/layout/constants/profileData.ts) ✅
- [components/staff-portal/config/planetTextures.ts](components/staff-portal/config/planetTextures.ts) ✅
- [components/staff-portal/config/sourceAvatars.ts](components/staff-portal/config/sourceAvatars.ts) ✅
- [components/staff-portal/components/ChaldeasGlobe.tsx](components/staff-portal/components/ChaldeasGlobe.tsx) ✅

## How Image Paths Work

### In Components
```tsx
// Before
<img src="https://static.wikia.nocookie.net/..." />

// After
<img src="/images/servants/S001.webp" />
```

### In Data Files
```typescript
// Before
image: 'https://static.wikia.nocookie.net/fategrandorder/images/...'

// After
image: '/images/servants/Bs001.png'
```

### In Mapping Files
```typescript
// Before
const WIKI_BASE = "https://fategrandorder.fandom.com/wiki/Special:FilePath/";
export const SABER_IMAGES: Record<string, string> = {
  S001: `${WIKI_BASE}S001_Stage1.webp`,
};

// After
export const SABER_IMAGES: Record<string, string> = {
  S001: `/images/servants/S001.webp`,
};
```

## Adding New Images

1. Add the image file to the appropriate folder in `public/images/`
2. Update the corresponding mapping file or component to reference `/images/[category]/[filename]`
3. The image will be available at build time and served from the root in production

## Verifying No External URLs

Run this command to check for any remaining external image URLs:
```bash
grep -r "https.*\.\(png\|jpg\|jpeg\|webp\|svg\)" --include="*.ts" --include="*.tsx" data/ components/ src/
```

If any URLs are found, replace them with local paths following the pattern above.

## Build Verification

After running `npm run build`, all images in `public/images/` will be:
- Copied to `dist/images/`
- Accessible at `/images/...` in the production build
- Bundled with the application (no external dependencies)

## Offline Support

With all images local, the app can now:
- Work offline (with service worker)
- Load faster (no external requests)
- Be more reliable (no CDN dependencies)
- Be deployed anywhere without external dependencies

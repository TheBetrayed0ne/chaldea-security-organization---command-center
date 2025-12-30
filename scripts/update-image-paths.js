import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';

// Files to update with their specific replacement patterns
const fileUpdates = [
  // Servant-images mapping files - replace WIKI_BASE pattern and static URLs
  {
    pattern: 'data/servants-images/normal/*.ts',
    replacements: [
      {
        search: /const WIKI_BASE = "https:\/\/fategrandorder\.fandom\.com\/wiki\/Special:FilePath\/";?\n*/g,
        replace: ''
      },
      {
        search: /\$\{WIKI_BASE\}(S\d+[^}]*?)_Stage1\.webp/g,
        replace: (match, id) => `/images/servants/${id}.webp`
      },
      {
        search: /https:\/\/static\.wikia\.nocookie\.net\/fategrandorder\/images\/[^\/]+\/[^\/]+\/([^\/\s'"]+)\/revision\/latest\?cb=\d+/g,
        replace: (match, filename) => `/images/servants/${filename.replace('_Stage1.webp', '.webp').replace(/^(S\d+).*/, '$1.webp')}`
      },
      {
        search: /https:\/\/static\.wikia\.nocookie\.net\/fategrandorder\/images\/[^\/]+\/[^\/]+\/([^\/\s'"]+)/g,
        replace: (match, filename) => `/images/servants/${filename.replace('_Stage1.webp', '.webp').replace(/^(S\d+).*/, '$1.webp')}`
      }
    ]
  },

  // Component files - App.tsx
  {
    pattern: 'src/App.tsx',
    replacements: [
      {
        search: /https:\/\/ih1\.redbubble\.net\/image\.\d+\.\d+\/[^"']+/g,
        replace: '/images/ui/chaldea-logo.webp'
      }
    ]
  },

  // Layout.tsx
  {
    pattern: 'components/layout/Layout.tsx',
    replacements: [
      {
        search: /https:\/\/ih1\.redbubble\.net\/image\.\d+\.\d+\/[^"']+/g,
        replace: '/images/ui/chaldea-logo.webp'
      }
    ]
  },

  // Master sprites
  {
    pattern: 'components/layout/constants/masterSprites.ts',
    replacements: [
      {
        search: /https:\/\/static\.wikia\.nocookie\.net\/fategrandorder\/images\/[^\/]+\/[^\/]+\/FujimaruRitsuka_Portrait_Male\.webp[^'"]*/g,
        replace: '/images/avatars/master-male.webp'
      },
      {
        search: /https:\/\/static\.wikia\.nocookie\.net\/fategrandorder\/images\/[^\/]+\/[^\/]+\/FujimaruRitsuka_Portrait_Female\.webp[^'"]*/g,
        replace: '/images/avatars/master-female.webp'
      }
    ]
  },

  // Profile data
  {
    pattern: 'components/layout/constants/profileData.ts',
    replacements: [
      {
        search: /https:\/\/static\.wikia\.nocookie\.net\/fategrandorder\/images\/[^\/]+\/[^\/]+\/FujimaruRitsuka_Portrait_Female\.webp[^'"]*/g,
        replace: '/images/avatars/master-female.webp'
      }
    ]
  },

  // Planet textures
  {
    pattern: 'components/staff-portal/config/planetTextures.ts',
    replacements: [
      {
        search: /https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^\/]+\/[^\/]+\/Equirectangular_projection_SW\.jpg/g,
        replace: '/images/textures/earth-map.jpg'
      },
      {
        search: /https:\/\/raw\.githubusercontent\.com\/mrdoob\/three\.js\/master\/examples\/textures\/planets\/earth_clouds_1024\.png/g,
        replace: '/images/textures/earth-clouds.png'
      }
    ]
  },

  // ChaldeasGlobe background
  {
    pattern: 'components/staff-portal/components/ChaldeasGlobe.tsx',
    replacements: [
      {
        search: /https:\/\/www\.transparenttextures\.com\/patterns\/stardust\.png/g,
        replace: '/images/textures/stardust.png'
      }
    ]
  },

  // Source avatars
  {
    pattern: 'components/staff-portal/config/sourceAvatars.ts',
    replacements: [
      {
        search: /https:\/\/api\.dicebear\.com\/7\.x\/identicon\/svg\?seed=security_chaldea&backgroundColor=0f172a/g,
        replace: '/images/textures/dicebear-security.svg'
      },
      {
        search: /https:\/\/api\.dicebear\.com\/7\.x\/identicon\/svg\?seed=wrench_tools&backgroundColor=0f172a/g,
        replace: '/images/textures/dicebear-maintenance.svg'
      },
      {
        search: /https:\/\/api\.dicebear\.com\/7\.x\/identicon\/svg\?seed=fork_knife&backgroundColor=0f172a/g,
        replace: '/images/textures/dicebear-culinary.svg'
      },
      {
        search: /https:\/\/api\.dicebear\.com\/7\.x\/identicon\/svg\?seed=storage_box&backgroundColor=0f172a/g,
        replace: '/images/textures/dicebear-supply.svg'
      },
      {
        search: /https:\/\/static\.wikia\.nocookie\.net\/fategrandorder\/images\/e\/e0\/S127_Stage1\.webp\/revision\/latest\?cb=\d+/g,
        replace: '/images/servants/S127.webp'
      },
      {
        search: /https:\/\/static\.wikia\.nocookie\.net\/fategrandorder\/images\/[^\/]+\/[^\/]+\/S031_Stage1\.webp/g,
        replace: '/images/servants/S031.webp'
      },
      {
        search: /https:\/\/static\.wikia\.nocookie\.net\/fategrandorder\/images\/[^\/]+\/[^\/]+\/S037_Stage1\.webp/g,
        replace: '/images/servants/S037.webp'
      }
    ]
  }
];

async function updateFile(filePath, replacements) {
  try {
    let content = await readFile(filePath, 'utf-8');
    let modified = false;

    for (const { search, replace } of replacements) {
      const newContent = content.replace(search, replace);
      if (newContent !== content) {
        modified = true;
        content = newContent;
      }
    }

    if (modified) {
      await writeFile(filePath, content, 'utf-8');
      console.log(`✅ Updated: ${filePath}`);
      return true;
    } else {
      console.log(`⏭️  Skipped (no changes): ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  let totalUpdated = 0;
  let totalSkipped = 0;

  for (const { pattern, replacements } of fileUpdates) {
    console.log(`\n📁 Processing pattern: ${pattern}`);
    const files = await glob(pattern, { cwd: process.cwd(), absolute: true });

    for (const file of files) {
      const updated = await updateFile(file, replacements);
      if (updated) totalUpdated++;
      else totalSkipped++;
    }
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Files updated: ${totalUpdated}`);
  console.log(`⏭️  Files skipped: ${totalSkipped}`);
  console.log(`${'='.repeat(50)}\n`);
}

main().catch(console.error);

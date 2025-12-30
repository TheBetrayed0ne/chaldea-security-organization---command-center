import { createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Wiki base URL for servant images
const WIKI_BASE = "https://fategrandorder.fandom.com/wiki/Special:FilePath/";

// Helper to generate servant image entry
const genServant = (id, filename = null) => ({
  url: `${WIKI_BASE}${filename || id}_Stage1.webp`,
  name: `${id}.webp`
});

// Helper for static wikia links
const staticUrl = (path, id) => ({
  url: path,
  name: `${id}.webp`
});

// Image URL inventory from all data files
const imageUrls = {
  // UI Images
  ui: [
    { url: 'https://ih1.redbubble.net/image.1540769570.5309/flat,750x,075,f-pad,750x1000,f8f8f8.u2.webp', name: 'chaldea-logo.webp' },
  ],

  // Textures
  textures: [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg', name: 'earth-map.jpg' },
    { url: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png', name: 'earth-clouds.png' },
    { url: 'https://www.transparenttextures.com/patterns/stardust.png', name: 'stardust.png' },
    // Dicebear avatars for source avatars
    { url: 'https://api.dicebear.com/7.x/identicon/svg?seed=security_chaldea&backgroundColor=0f172a', name: 'dicebear-security.svg' },
    { url: 'https://api.dicebear.com/7.x/identicon/svg?seed=wrench_tools&backgroundColor=0f172a', name: 'dicebear-maintenance.svg' },
    { url: 'https://api.dicebear.com/7.x/identicon/svg?seed=fork_knife&backgroundColor=0f172a', name: 'dicebear-culinary.svg' },
    { url: 'https://api.dicebear.com/7.x/identicon/svg?seed=storage_box&backgroundColor=0f172a', name: 'dicebear-supply.svg' },
  ],

  // Avatars (Master sprites)
  avatars: [
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/f/ff/FujimaruRitsuka_Portrait_Male.webp/revision/latest?cb=20231219055153', 'master-male'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/4/49/FujimaruRitsuka_Portrait_Female.webp/revision/latest?cb=20231219055143', 'master-female'),
  ],

  // Servant Images
  servants: [
    // Beast Class
    { url: 'https://static.wikia.nocookie.net/typemoon/images/4/4d/BeastSpaceEreshkigalStage1.png', name: 'Bs001.png' },
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/3/3a/S377_Stage1.webp', 'Bs002'),
    { url: 'https://static.wikia.nocookie.net/fategrandorder/images/7/76/S444_Stage3.webp', name: 'Bs003.webp' },

    // Saber Class - Complete list from saber.ts
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/0/0b/Sabercardborder1.webp/revision/latest?cb=20221104083319', 'S001'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/2/23/S002_Stage1.webp', 'S002'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/0/03/S003_Stage1.webp', 'S003'),
    genServant('S004'), genServant('S005'), genServant('S006'), genServant('S007'), genServant('S008'),
    genServant('S068'), genServant('S076'), genServant('S090'), genServant('S101'), genServant('S121'),
    genServant('S123'), genServant('S126'), genServant('S153'), genServant('S155'), genServant('S165'),
    genServant('S173'), genServant('S183'), genServant('S194'), genServant('S213'), genServant('S221'),
    genServant('S233'), genServant('S263'), genServant('S274'), genServant('S289'), genServant('S296'),
    genServant('S310'), genServant('S297'),

    // Archer Class - Complete list from archer.ts
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/d/d9/S011_Stage1.webp/revision/latest?cb=20220910075638', 'S011'),
    genServant('S012'), genServant('S013'), genServant('S014'), genServant('S015'), genServant('S058'),
    genServant('S060'), genServant('S067'), genServant('S069'), genServant('S075'), genServant('S078'),
    genServant('S084'), genServant('S098'), genServant('S118'), genServant('S122'), genServant('S128'),
    genServant('S129'), genServant('S139'), genServant('S140'), genServant('S141'), genServant('S145'),
    genServant('S157'), genServant('S159'), genServant('S182'), genServant('S202'), genServant('S208'),
    genServant('S210'), genServant('S216'), genServant('S238'), genServant('S239'), genServant('S240'),
    genServant('S248'), genServant('S249'), genServant('S268'), genServant('S269'), genServant('S277'),
    genServant('S285'), genServant('S294'), genServant('S315'), genServant('S322'), genServant('S327'),
    genServant('S335'), genServant('S347'), genServant('S350'), genServant('S353'), genServant('S361'),
    genServant('S363'), genServant('S382'), genServant('S392'),

    // Lancer Class - Complete list from lancer.ts
    genServant('S017'), genServant('S018'), genServant('S019'), genServant('S020'), genServant('S021'),
    genServant('S022'), genServant('S063'), genServant('S070'), genServant('S071'), genServant('S091'),
    genServant('S102'), genServant('S119'), genServant('S120'), genServant('S133'), genServant('S148'),
    genServant('S152'), genServant('S174'), genServant('S180'), genServant('S190'), genServant('S196'),
    genServant('S212'), genServant('S225'), genServant('S231'), genServant('S252'), genServant('S255'),
    genServant('S265'), genServant('S279'), genServant('S284'), genServant('S293'), genServant('S300'),
    genServant('S311'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/0/0b/S313_Stage1.webp/revision/latest?cb=20220925055129', 'S312'),
    genServant('S328'), genServant('S341'), genServant('S348'), genServant('S367'), genServant('S380'),

    // Rider Class - Complete list from rider.ts
    genServant('S023'), genServant('S024'), genServant('S025'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/f/fc/S026_Stage1.webp/revision/latest?cb=20220910084119', 'S026'),
    genServant('S027'), genServant('S028'), genServant('S029'), genServant('S030'), genServant('S065'),
    genServant('S066'), genServant('S073'), genServant('S093'), genServant('S097'), genServant('S108'),
    genServant('S115'), genServant('S129-R', 'S129'), genServant('S144'), genServant('S168'), genServant('S176'),
    genServant('S177'), genServant('S205'), genServant('S206'), genServant('S214'), genServant('S230'),
    genServant('S241'), genServant('S254'), genServant('S261'), genServant('S262'), genServant('S276'),
    genServant('S278'), genServant('S283'), genServant('S290'), genServant('S298'), genServant('S314'),
    genServant('S320'), genServant('S325'), genServant('S333'), genServant('S334'), genServant('S346'),
    genServant('S351'), genServant('S361-R', 'S361'), genServant('S385'), genServant('S390'), genServant('S402'),
    genServant('S406'),

    // Caster Class - Complete list from caster.ts
    genServant('S031'), genServant('S032'), genServant('S033'), genServant('S034'), genServant('S035'),
    genServant('S036'), genServant('S037'), genServant('S038'), genServant('S061'), genServant('S062'),
    genServant('S064'), genServant('S074'), genServant('S077'), genServant('S081'), genServant('S083'),
    genServant('S092'), genServant('S103'), genServant('S104'), genServant('S109'), genServant('S113'),
    genServant('S117'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/e/e0/S127_Stage1.webp/revision/latest?cb=20220911072058', 'S127'),
    genServant('S128-C', 'S128'), genServant('S138'), genServant('S142'), genServant('S150'), genServant('S170'),
    genServant('S175'), genServant('S188'), genServant('S189'), genServant('S200'), genServant('S203'),
    genServant('S207'), genServant('S215'), genServant('S226'), genServant('S235'), genServant('S237'),
    genServant('S244'), genServant('S253'), genServant('S284-C', 'S284'), genServant('S307'), genServant('S319'),
    genServant('S326'), genServant('S329'), genServant('S344'), genServant('S349'), genServant('S359'),
    genServant('S375'), genServant('S401'), genServant('S415'), genServant('S431'),

    // Berserker Class - Complete list from berserker.ts
    genServant('S047'), genServant('S048'), genServant('S049'), genServant('S050'), genServant('S051'),
    genServant('S052'), genServant('S053'), genServant('S054'), genServant('S055'), genServant('S056'),
    genServant('S057'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/9/93/S058_Stage1.webp/revision/latest?cb=20220910122644', 'S059'),
    genServant('S082'), genServant('S105'), genServant('S110'), genServant('S114'), genServant('S116'),
    genServant('S160'), genServant('S161'), genServant('S162'), genServant('S172'), genServant('S179'),
    genServant('S181'), genServant('S201'), genServant('S219'), genServant('S228'), genServant('S247'),
    genServant('S251'), genServant('S256'), genServant('S258'), genServant('S281'), genServant('S288'),
    genServant('S306'), genServant('S311-B', 'S311'), genServant('S322-B', 'S322'), genServant('S345'),
    genServant('S357'), genServant('S365'), genServant('S379'), genServant('S383'), genServant('S395'),
    genServant('S417'), genServant('S419'), genServant('S432'),

    // Avenger Class
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/c/c6/S066_Stage1.webp', 'Av-001'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/0/00/S107_Stage1.webp', 'Av-002'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/c/cc/S152_Stage1.webp', 'Av-003'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/e/e9/S189_Stage1.webp', 'Av-004'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/c/c8/S202_Stage1.webp', 'Av-005'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/6/6f/S223_Stage1.webp', 'Av-006'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/f/f8/S227_Stage1.webp', 'Av-007'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/9/96/S240_Stage1.webp', 'Av-008'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/8/87/S278_Stage1.webp', 'Av-009'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/b/b6/S316_Stage1.webp', 'Av-010'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/0/0f/S337_Stage1.webp', 'Av-011'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/0/0a/S394_Stage1.webp', 'Av-012'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/8/82/S414_Stage1.webp', 'Av-013'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/0/06/S426_Stage1.webp', 'Av-014'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/6/63/S439_Stage1.webp', 'Av-015'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/7/78/S460_Stage1.webp', 'Av-016'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/b/b3/Avenger_Tezcatlipoca_Stage_1.webp', 'Av-017'),

    // Alter-Ego Class
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/4/4d/S155_Stage1.webp', 'AE-001'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/8/84/S156_Stage1.webp', 'AE-002'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/e/ef/S188_Stage1.webp', 'AE-003'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/8/82/S191_Stage1.webp', 'AE-004'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/1/14/S196_Stage1.webp', 'AE-005'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/1/14/S197_Stage1.webp', 'AE-006'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/e/eb/S220_Stage1.webp', 'AE-007'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/f/f3/S228_Stage1.webp', 'AE-008'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/6/61/S234_Stage1.webp', 'AE-009'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/7/75/S238_Stage1.webp', 'AE-010'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/5/56/S262_Stage1.webp', 'AE-011'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/d/d2/S275_Stage1.webp', 'AE-012'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/a/aa/S298_Stage1.webp', 'AE-013'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/6/69/S318_Stage1.webp', 'AE-014'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/9/94/S403_Stage1.webp', 'AE-015'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/d/da/S461_Stage1.webp', 'AE-016'),
    staticUrl('https://static.wikia.nocookie.net/fategrandorder/images/1/1e/S462_Stage1.webp', 'AE-017'),

    // Special avatars - Staff portal (S233 from weserv proxy & S037 from personnel)
    { url: 'https://images.weserv.nl/?url=https://static.wikia.nocookie.net/fategrandorder/images/6/65/S233_Status_1.png', name: 'S233.png' },
  ],
};

// Helper function to download a file
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, outputPath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        reject(err);
      });
    });

    request.on('error', (err) => {
      reject(err);
    });
  });
}

// Main download function
async function downloadAllImages() {
  const publicDir = join(__dirname, '..', 'public');

  let totalDownloaded = 0;
  let totalFailed = 0;

  for (const [category, images] of Object.entries(imageUrls)) {
    const categoryDir = join(publicDir, 'images', category);
    await mkdir(categoryDir, { recursive: true });

    console.log(`\n📁 Downloading ${category} images...`);

    for (const { url, name } of images) {
      const outputPath = join(categoryDir, name);

      try {
        console.log(`  ⬇️  ${name}...`);
        await downloadFile(url, outputPath);
        console.log(`  ✅ ${name}`);
        totalDownloaded++;
      } catch (error) {
        console.error(`  ❌ Failed to download ${name}: ${error.message}`);
        totalFailed++;
      }
    }
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Downloaded: ${totalDownloaded}`);
  console.log(`❌ Failed: ${totalFailed}`);
  console.log(`📊 Total: ${totalDownloaded + totalFailed}`);
  console.log(`${'='.repeat(50)}\n`);
}

// Run the script
downloadAllImages().catch(console.error);

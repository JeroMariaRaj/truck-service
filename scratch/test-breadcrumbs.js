const fs = require('fs');

console.log('=== VERIFYING BREADCRUMB REMOVAL & ABOUT PAGE IMAGES ===');

// 1. Check all HTML files for breadcrumbs
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let breadcrumbFound = false;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('breadcrumb-industrial') || content.includes('<ol class="breadcrumb">') || content.includes('<ul class="breadcrumb">')) {
    console.error(`FAIL: Breadcrumb found in ${f}`);
    breadcrumbFound = true;
  }
});

// 2. Check JS files
const jsFiles = ['assets/js/blog.js', 'assets/js/projects.js', 'assets/js/services.js'];
jsFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('breadcrumb-industrial')) {
    console.error(`FAIL: Breadcrumb found in ${f}`);
    breadcrumbFound = true;
  }
});

if (breadcrumbFound) {
  process.exit(1);
} else {
  console.log('[PASS] Full website breadcrumbs successfully removed across all HTML and JS templates!');
}

// 3. Check About Page Images
const aboutContent = fs.readFileSync('about.html', 'utf8');
const aboutImages = [
  'assets/images/hero/hero-about.jpg',
  'assets/images/about/why-we-refuse.jpg',
  'assets/images/about/shop-founded.jpg',
  'assets/images/about/fuel-injection-clean-lab.jpg',
  'assets/images/about/superflow-dyno-cell.jpg',
  'assets/images/about/12-bay-commercial-expansion.jpg',
  'assets/images/about/our-core-workmanship-standards.jpg',
  'assets/images/team/cole-vance.jpg',
  'assets/images/team/garrett-miller.jpg',
  'assets/images/team/darren-hayes.jpg',
  'assets/images/team/marcus-reid.jpg',
  'assets/images/about/superflow-3000-chassis-dyno.jpg',
  'assets/images/about/clean-room-injection-lab.jpg',
  'assets/images/about/oem-telemetry-and-lifts.jpg',
  'assets/images/projects/project-cat-c15-peterbilt.jpg'
];

let allAboutImgsPresent = true;
aboutImages.forEach(img => {
  if (!aboutContent.includes(img)) {
    console.error(`FAIL: Missing expected image in about.html: ${img}`);
    allAboutImgsPresent = false;
  }
  if (!fs.existsSync(img)) {
    console.error(`FAIL: Image file does not exist on disk: ${img}`);
    allAboutImgsPresent = false;
  }
});

if (!allAboutImgsPresent) {
  process.exit(1);
} else {
  console.log(`[PASS] All ${aboutImages.length} related images verified in about.html and confirmed existing on disk!`);
}

console.log('=== ALL BREADCRUMB & ABOUT PAGE CHECKS PASSED ===');

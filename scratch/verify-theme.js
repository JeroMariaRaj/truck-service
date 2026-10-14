const fs = require('fs');
const path = require('path');

const cssContent = fs.readFileSync(path.join(__dirname, '..', 'assets', 'css', 'style.css'), 'utf8');

console.log('=== THEME & CONTRAST VERIFICATION ===');

const criticalChecks = [
  { name: '.text-primary override', pattern: /\.text-primary[^{]*\{[^}]*color:\s*var\(--text-primary\)/ },
  { name: '.text-secondary override', pattern: /\.text-secondary[^{]*\{[^}]*color:\s*var\(--text-secondary\)/ },
  { name: '.text-muted override', pattern: /\.text-muted[^{]*\{[^}]*color:\s*var\(--text-muted\)/ },
  { name: '.bg-surface override', pattern: /\.bg-surface\s*\{[^}]*background-color:\s*var\(--bg-surface\)/ },
  { name: '.bg-subtle override', pattern: /\.bg-subtle/ },
  { name: '.detail-hero light mode', pattern: /\[data-theme="light"\]\s+\.detail-hero\s*\{[^}]*background-color:\s*#ECE8E0/ },
  { name: '.hero-section-1 light contrast', pattern: /\.hero-section-1\s*h1[^}]*color:\s*#FFFFFF/ },
  { name: '.hero-section-2 light contrast', pattern: /\.hero-section-2\s*h1[^}]*color:\s*#FFFFFF/ },
  { name: '.site-footer contrast', pattern: /\.site-footer\s*\{[^}]*background-color:\s*#121417\s*!important/ },
  { name: 'Light mode navbar toggler icon', pattern: /\[data-theme="light"\]\s+\.navbar-toggler-icon\s*\{[^}]*filter:\s*invert\(1\)/ },
  { name: 'Light mode nav links', pattern: /\[data-theme="light"\]\s+\.navbar-nav\s+\.nav-link\s*\{[^}]*color:\s*#121417/ },
  { name: 'Secondary button active state', pattern: /\.btn-industrial-secondary\.active/ },
  { name: 'Dropdown item hover theme accent', pattern: /\.dropdown-item:hover[^{]*\{[^}]*background-color:\s*(var\(--accent-color\)|rgba\([^)]+\))/ },
  { name: 'Nav chevron animation and styling', pattern: /\.nav-chevron\s*\{[^}]*transition:\s*transform/ }
];

let failed = 0;
criticalChecks.forEach(c => {
  if (c.pattern.test(cssContent)) {
    console.log(`[PASS] ${c.name}`);
  } else {
    console.error(`[FAIL] ${c.name}`);
    failed++;
  }
});

// Check HTML files
const htmlFiles = fs.readdirSync(path.join(__dirname, '..')).filter(f => f.endsWith('.html'));
let navProjectsCount = 0;
let topbarCount = 0;
let missingChevronCount = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  const navMatch = content.match(/<nav[\s\S]*?<\/nav>/i);
  
  if (navMatch && /href="projects\.html"[^>]*>Projects<\/a>/i.test(navMatch[0])) {
    console.error(`[FAIL] projects.html still present in <nav> of ${file}`);
    navProjectsCount++;
  }

  if (content.includes('class="topbar"')) {
    console.error(`[FAIL] class="topbar" still present in ${file}`);
    topbarCount++;
  }

  if (navMatch && navMatch[0].includes('dropdown-toggle') && !navMatch[0].includes('nav-chevron')) {
    console.error(`[FAIL] Home dropdown chevron missing in ${file}`);
    missingChevronCount++;
  }
});

if (navProjectsCount === 0) {
  console.log('[PASS] Navbar in all HTML files has "Projects" removed!');
} else {
  failed += navProjectsCount;
}

if (topbarCount === 0) {
  console.log('[PASS] Topbar completely removed from all HTML files!');
} else {
  failed += topbarCount;
}

if (missingChevronCount === 0) {
  console.log('[PASS] Home dropdown chevron icon present across all HTML files!');
} else {
  failed += missingChevronCount;
}

if (failed === 0) {
  console.log('\nAll theme visibility, topbar removal & navbar checks PASSED successfully!');
  process.exit(0);
} else {
  console.error(`\n${failed} checks FAILED!`);
  process.exit(1);
}

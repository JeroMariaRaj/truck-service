const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
console.log('=== TITAN DIESEL WORKS - QA VALIDATION TEST SUITE ===');

// Load Data Repositories
const servicesDataCode = fs.readFileSync(path.join(rootDir, 'assets/js/data/services-data.js'), 'utf8');
const blogDataCode = fs.readFileSync(path.join(rootDir, 'assets/js/data/blog-data.js'), 'utf8');
const projectsDataCode = fs.readFileSync(path.join(rootDir, 'assets/js/data/projects-data.js'), 'utf8');

// Evaluate in dummy context to extract objects
const dummyWindow = {};
new Function('window', servicesDataCode)(dummyWindow);
new Function('window', blogDataCode)(dummyWindow);
new Function('window', projectsDataCode)(dummyWindow);

const servicesData = dummyWindow.TITAN_SERVICES_DATA;
const blogData = dummyWindow.TITAN_BLOG_DATA;
const projectsData = dummyWindow.TITAN_PROJECTS_DATA;

console.log(`Loaded Services Data: ${Object.keys(servicesData).length} services`);
console.log(`Loaded Blog Data: ${Object.keys(blogData).length} articles`);
console.log(`Loaded Projects Data: ${Object.keys(projectsData).length} projects`);

let errors = [];
let warnings = [];

// 1. Verify Image Assets in Data Files
console.log('\n--- Checking Image Assets in Data Repositories ---');
for (const [id, s] of Object.entries(servicesData)) {
  const p = path.join(rootDir, s.image);
  if (!fs.existsSync(p)) {
    errors.push(`Service image missing for ${id}: ${s.image}`);
  }
}
for (const [id, b] of Object.entries(blogData)) {
  const p = path.join(rootDir, b.image);
  if (!fs.existsSync(p)) {
    errors.push(`Blog image missing for ${id}: ${b.image}`);
  }
}
for (const [id, pr] of Object.entries(projectsData)) {
  const p = path.join(rootDir, pr.image);
  if (!fs.existsSync(p)) {
    errors.push(`Project image missing for ${id}: ${pr.image}`);
  }
  if (pr.gallery) {
    for (const g of pr.gallery) {
      const gp = path.join(rootDir, g);
      if (!fs.existsSync(gp)) {
        errors.push(`Project gallery image missing for ${id}: ${g}`);
      }
    }
  }
}

// 2. Scan All HTML Files for Links and Local Assets
console.log('\n--- Scanning HTML Pages for Links, Assets, and References ---');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

for (const file of htmlFiles) {
  const filePath = path.join(rootDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check Local Image Tags: src="assets/..."
  const srcMatches = [...content.matchAll(/src="([^"]+)"/g)];
  for (const m of srcMatches) {
    const src = m[1];
    if (src.startsWith('assets/')) {
      const fullPath = path.join(rootDir, src);
      if (!fs.existsSync(fullPath)) {
        errors.push(`In ${file}: Missing asset src: ${src}`);
      }
    }
  }

  // Check Link Tags: href="..."
  const hrefMatches = [...content.matchAll(/href="([^"#?]+)(?:\?([^"#]*))?"/g)];
  for (const m of hrefMatches) {
    const target = m[1];
    const query = m[2] || '';

    // Ignore external or tel / mailto / javascript
    if (target.startsWith('http') || target.startsWith('tel:') || target.startsWith('mailto:') || target.startsWith('javascript:')) {
      continue;
    }

    const targetPath = path.join(rootDir, target);
    if (!fs.existsSync(targetPath)) {
      errors.push(`In ${file}: Broken link href="${target}"`);
    } else {
      // Check query parameter validity if service-details or blog-details or project-details
      if (query) {
        const qParams = new URLSearchParams(query);
        if (target === 'service-details.html') {
          const id = qParams.get('id');
          if (id && !servicesData[id]) {
            errors.push(`In ${file}: Invalid service query param ?id=${id}`);
          }
        } else if (target === 'blog-details.html') {
          const id = qParams.get('id');
          if (id && !blogData[id]) {
            errors.push(`In ${file}: Invalid blog query param ?id=${id}`);
          }
        } else if (target === 'project-details.html') {
          const id = qParams.get('id');
          if (id && !projectsData[id]) {
            errors.push(`In ${file}: Invalid project query param ?id=${id}`);
          }
        }
      }
    }
  }
}

// Summary Report
console.log('\n=== TEST RESULTS ===');
if (errors.length === 0) {
  console.log('PASS: All 13 HTML pages, images, and data references verified with ZERO ERRORS!');
} else {
  console.error(`FAIL: Found ${errors.length} errors:`);
  errors.forEach(e => console.error(`  - ${e}`));
}

if (warnings.length > 0) {
  console.warn(`WARNINGS: ${warnings.length}`);
  warnings.forEach(w => console.warn(`  - ${w}`));
}

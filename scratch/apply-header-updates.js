const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let modifiedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // 1. Remove Topbar and any preceding comment
  content = content.replace(/(\s*<!--[^\n]*Topbar[^\n]*-->)?\s*<div class="topbar">[\s\S]*?<\/div>\s*<\/div>\s*/i, '\n');

  // 2. Add chevron icon to Home dropdown-toggle if missing
  // Active state pattern: <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\s*Home\s*<\/a>
  content = content.replace(
    /(<a class="nav-link dropdown-toggle active"[^>]*>)\s*Home\s*(<\/a>)/i,
    '$1\n                Home <i class="bi bi-chevron-down nav-chevron ms-1"></i>\n              $2'
  );

  // Non-active state pattern: <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home<\/a>
  content = content.replace(
    /(<a class="nav-link dropdown-toggle"[^>]*>)\s*Home\s*(<\/a>)/i,
    '$1Home <i class="bi bi-chevron-down nav-chevron ms-1"></i>$2'
  );

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated: ${f}`);
    modifiedCount++;
  } else {
    console.log(`No changes needed: ${f}`);
  }
});

console.log(`Total files updated: ${modifiedCount}`);

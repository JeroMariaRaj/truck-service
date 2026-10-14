const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Remove stray </div> between <body> and <!-- Header or <header
  content = content.replace(/(<body[^>]*>)(\s*<\/div>)+/gi, '$1');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Cleaned stray div in: ${f}`);
  }
});

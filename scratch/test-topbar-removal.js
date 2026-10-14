const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<a class="nav-link dropdown-toggle[^"]*"[^>]*>([\s\S]*?)<\/a>/i);
  if (match) {
    console.log(`${f}: ${match[0].replace(/\s+/g, ' ')}`);
  }
});

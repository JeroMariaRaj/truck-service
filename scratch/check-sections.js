const fs = require('fs');

const files = ['index.html', 'home-2.html', 'contact.html', 'about.html', 'services.html', 'pricing.html', 'blog.html', 'projects.html'];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const count = (content.match(/<section[\s>]/gi) || []).length;
  console.log(`${f}: ${count} sections`);
});

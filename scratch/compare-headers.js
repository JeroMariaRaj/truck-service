const fs = require('fs');

const files = ['about.html', 'pricing.html', 'blog.html', 'contact.html', 'services.html', 'service-details.html'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n=== FILE: ${f} ===`);
  
  // Extract <header ...>...</header>
  const headerMatch = content.match(/<header[\s\S]*?<\/header>/i);
  if (headerMatch) {
    console.log('Header length:', headerMatch[0].length);
  } else {
    console.log('No <header> tag found');
  }

  // Extract <section class="detail-hero" ...>...</section>
  const heroMatch = content.match(/<section class="detail-hero"[\s\S]*?<\/section>/i);
  if (heroMatch) {
    console.log('detail-hero length:', heroMatch[0].length);
    // Find h1
    const h1Match = heroMatch[0].match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) {
      console.log('H1:', h1Match[0].trim());
    }
    // Find img inside detail-hero
    const imgMatch = heroMatch[0].match(/<img[^>]*>/gi);
    if (imgMatch) {
      console.log('Images in hero:', imgMatch);
    }
    // Find col classes
    const cols = heroMatch[0].match(/class="[^"]*col-[^"]*"/gi);
    console.log('Cols:', cols);
  } else {
    console.log('No <section class="detail-hero"> found in static HTML');
  }
});

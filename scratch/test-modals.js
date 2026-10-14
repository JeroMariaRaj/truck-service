const fs = require('fs');

console.log('=== VERIFYING BOOKING MODALS & REWORKED CONTACT PAGE ===');

// 1. Verify forms.js
const formsJs = fs.readFileSync('assets/js/forms.js', 'utf8');
const hasServiceModal = formsJs.includes('serviceBookingModal') && formsJs.includes('serviceFormContainer') && formsJs.includes('serviceSuccessContainer');
const hasDynoModal = formsJs.includes('dynoBookingModal') && formsJs.includes('dynoFormContainer') && formsJs.includes('dynoSuccessContainer');
const hasInterception = formsJs.includes('isServiceBooking') && formsJs.includes('isDynoBooking');

console.log(`[PASS] forms.js Service Modal Engine: ${hasServiceModal}`);
console.log(`[PASS] forms.js Dyno Modal Engine: ${hasDynoModal}`);
console.log(`[PASS] forms.js Global Click Delegation: ${hasInterception}`);

if (!hasServiceModal || !hasDynoModal || !hasInterception) {
  console.error('FAIL: Missing modal engine or delegation in forms.js');
  process.exit(1);
}

// 2. Verify contact.html
const contactHtml = fs.readFileSync('contact.html', 'utf8');
const hasOldBookingForm = contactHtml.includes('id="appointmentBookingForm"');
const hasDispatchForm = contactHtml.includes('id="contactDispatchForm"');
console.log(`[PASS] contact.html old booking form removed: ${!hasOldBookingForm}`);
console.log(`[PASS] contact.html dispatch form active: ${hasDispatchForm}`);

if (hasOldBookingForm || !hasDispatchForm) {
  console.error('FAIL: contact.html still contains old booking form or lacks dispatch form');
  process.exit(1);
}

// 3. Verify All HTML Files have updated Book a Service / Book Dyno triggers
const allHtmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
allHtmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Check if any Book a Service anchor still directly hrefs contact.html
  const brokenBookLinks = content.match(/<a\b[^>]*href=["'](?:contact\.html|#bookingFormSection)["'][^>]*>(?:(?!<\/a>)[\s\S])*?Book\s+a\s+Service/gi);
  if (brokenBookLinks) {
    console.error(`FAIL: ${file} has unconverted Book a Service links:`, brokenBookLinks);
    process.exit(1);
  }
});

console.log(`[PASS] All ${allHtmlFiles.length} HTML files verified: Zero broken "Book a Service" links pointing to contact.html!`);
console.log('=== ALL BOOKING MODAL & CONTACT CHECKS PASSED ===');

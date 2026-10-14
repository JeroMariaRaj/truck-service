const fs = require('fs');
const path = require('path');
const https = require('https');

const imageMap = [
  // Heroes
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    dest: 'assets/images/hero/hero-home-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1400&q=80',
    dest: 'assets/images/hero/hero-about.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1400&q=80',
    dest: 'assets/images/hero/hero-services.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80',
    dest: 'assets/images/hero/hero-projects.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1400&q=80',
    dest: 'assets/images/hero/hero-blog.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
    dest: 'assets/images/hero/hero-pricing.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1400&q=80',
    dest: 'assets/images/hero/hero-contact.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1400&q=80',
    dest: 'assets/images/hero/maintenance.jpg'
  },

  // Services
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/diesel-engine-diagnostics.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/heavy-duty-engine-rebuild.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/turbocharger-performance-upgrade.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/diesel-fuel-injection-service.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/transmission-drivetrain-repair.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/diesel-emissions-dpf-diagnostics.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/diesel-cooling-radiator-repair.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/diesel-preventive-maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/diesel-performance-upgrades.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/services/commercial-fleet-maintenance.jpg'
  },

  // Projects
  {
    url: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/projects/project-powerstroke-longblock.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/projects/project-cummins-compound-turbo.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/projects/project-duramax-allison.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/projects/project-freightliner-fleet.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1586191582056-a602c349880f?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/projects/project-cat-c15-peterbilt.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/projects/project-ram-heavy-tow.jpg'
  },

  // Blog
  {
    url: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/blog/diesel-injector-failure-guide.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/blog/turbocharger-replacement-inspection.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/blog/diesel-engine-overheating-causes.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/blog/work-truck-preventive-maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/blog/diesel-diagnostic-trouble-codes.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/blog/commercial-fleet-uptime-planning.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/blog/diesel-transmission-failure-signs.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/blog/diesel-performance-upgrades-guide.jpg'
  },

  // Team
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/team/team-master-tech.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/team/team-performance-tuner.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/team/team-diagnostics-lead.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    dest: 'assets/images/team/team-fleet-director.jpg'
  },

  // About
  {
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/about/about-workshop-interior.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/about/about-dyno-cell.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
    dest: 'assets/images/about/about-precision-lab.jpg'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const fullDest = path.join(__dirname, '..', item.dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });

    function get(url) {
      https.get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          console.error(`Failed ${item.dest}: HTTP ${res.statusCode}`);
          resolve();
          return;
        }
        const fileStream = fs.createWriteStream(fullDest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${item.dest}`);
          resolve();
        });
      }).on('error', (err) => {
        console.error(`Error downloading ${item.dest}: ${err.message}`);
        resolve();
      });
    }

    get(item.url);
  });
}

async function run() {
  console.log(`Starting download of ${imageMap.length} assets...`);
  for (const item of imageMap) {
    await download(item);
  }
  console.log('All image assets processed successfully.');
}

run();

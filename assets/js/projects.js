/* ==========================================================================
   TITAN DIESEL - PROJECTS & CASE STUDIES CONTROLLER
   Category Filtering, Real-World Dyno Specs, Dynamic Details & 404 Fallback
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. PROJECTS PORTFOLIO LISTING (projects.html)
  // --------------------------------------------------------------------------
  const projectsGrid = document.getElementById('projectsGrid');
  const projectCategoryTabs = document.querySelectorAll('.project-filter-pill');
  const projectsCountBadge = document.getElementById('projectsCountBadge');

  if (projectsGrid && window.TITAN_PROJECTS_DATA) {
    let currentCategory = 'all';

    function renderProjects() {
      const allProjects = Object.values(window.TITAN_PROJECTS_DATA);
      const filtered = allProjects.filter(proj => {
        return currentCategory === 'all' || proj.category === currentCategory;
      });

      if (projectsCountBadge) {
        projectsCountBadge.textContent = `${filtered.length} Case Studies Available`;
      }

      projectsGrid.innerHTML = filtered.map(proj => `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="industrial-card">
            <div class="card-img-wrapper">
              <span class="card-badge"><i class="bi bi-speedometer2 me-1"></i> ${proj.categoryLabel}</span>
              <img src="${proj.image}" alt="${proj.title}" loading="lazy" width="450" height="280">
            </div>
            <div class="industrial-card-body">
              <div class="text-accent small font-heading text-uppercase mb-1">
                <i class="bi bi-truck me-1"></i> ${proj.vehicle.split('(')[0]}
              </div>
              <h4 class="h5 mb-2">${proj.title}</h4>
              <p class="small text-secondary mb-3">${proj.challenge.substring(0, 130)}...</p>
              <div class="d-flex flex-wrap gap-2 mt-auto">
                <span class="spec-pill"><i class="bi bi-lightning-charge me-1"></i> ${proj.dynoSpecs.power}</span>
                <span class="spec-pill"><i class="bi bi-gear-wide-connected me-1"></i> ${proj.dynoSpecs.torque}</span>
              </div>
            </div>
            <div class="industrial-card-footer">
              <a href="project-details.html?id=${proj.id}" class="text-accent fw-bold text-uppercase font-heading" style="font-size: 0.85rem;">
                View Case Study <i class="bi bi-arrow-right ms-1"></i>
              </a>
              <span class="text-muted" style="font-size: 0.75rem;">Verified Dyno</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    projectCategoryTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        projectCategoryTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.getAttribute('data-filter') || 'all';
        renderProjects();
      });
    });

    renderProjects();
  }

  // --------------------------------------------------------------------------
  // 2. DYNAMIC PROJECT DETAILS PAGE (project-details.html?id=...)
  // --------------------------------------------------------------------------
  const projectDetailContainer = document.getElementById('projectDetailContainer');
  if (projectDetailContainer && window.TITAN_PROJECTS_DATA) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const project = window.TITAN_PROJECTS_DATA[projectId];

    if (!project) {
      // 404 NOT FOUND STATE FOR INVALID PROJECT ID
      document.title = "Build Case Study Not Found | Titan Diesel Works";
      projectDetailContainer.innerHTML = `
        <div class="container py-5 text-center my-5">
          <div class="p-5 rounded border border-secondary bg-surface d-inline-block" style="max-width: 600px;">
            <div class="display-3 text-accent font-heading mb-3"><i class="bi bi-tools"></i></div>
            <h2 class="font-heading mb-2">Build Case Study Not Found</h2>
            <p class="text-secondary mb-4">The diesel repair or performance build record ("${projectId || 'unknown'}") was not found in our archive.</p>
            <div class="d-flex justify-content-center gap-3">
              <a href="projects.html" class="btn btn-industrial-primary">
                <i class="bi bi-grid-3x3-gap me-2"></i> All Projects & Builds
              </a>
              <a href="index.html" class="btn btn-industrial-secondary">
                <i class="bi bi-house-door-fill me-2"></i> Return Home
              </a>
            </div>
          </div>
        </div>
      `;
      return;
    }

    // Set page title
    document.title = `${project.title} | Titan Diesel Works Case Study`;

    // Render Project Details Template (strictly 7 sections maximum)
    projectDetailContainer.innerHTML = `
      <!-- Section 1: Project Hero, Vehicle Identification & Dyno Specs Header -->
      <section class="detail-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <span class="section-tagline"><i class="bi bi-trophy-fill"></i> ${project.categoryLabel}</span>
              <h1 class="h2 font-heading text-uppercase mb-2">${project.title}</h1>
              <p class="lead text-accent mb-3"><i class="bi bi-truck me-2"></i> ${project.vehicle}</p>
              <div class="d-flex flex-wrap gap-3">
                <a href="#buildBreakdownSection" class="btn btn-industrial-primary">
                  <i class="bi bi-tools me-2"></i> Explore Teardown & Upgrades
                </a>
                <a href="contact.html?service=performance-upgrades" class="btn btn-industrial-secondary">
                  <i class="bi bi-chat-left-dots me-2"></i> Discuss Similar Build
                </a>
              </div>
            </div>
            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="rounded overflow-hidden border border-secondary shadow-lg">
                <img src="${project.image}" alt="${project.title}" class="img-fluid w-100" style="max-height: 260px; object-fit: cover;">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Customer Requirements & Mechanical Challenge -->
      <section class="section-py" id="buildBreakdownSection">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-6">
              <div class="p-4 rounded border border-secondary bg-surface h-100">
                <span class="section-tagline"><i class="bi bi-person-lines-fill"></i> Client Operational Goals</span>
                <h3 class="font-heading mb-3">Customer Challenge & Requirements</h3>
                <div class="industrial-divider"></div>
                <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.8;">${project.clientRequirement}</p>
                <div class="form-notice">
                  <i class="bi bi-info-circle me-1"></i> Demonstration case study based on real-world heavy duty diesel repair and performance specifications.
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="p-4 rounded border border-secondary bg-surface h-100">
                <span class="section-tagline"><i class="bi bi-shield-exclamation"></i> Engineering Hurdle</span>
                <h3 class="font-heading mb-3">Mechanical & Thermal Challenge</h3>
                <div class="industrial-divider"></div>
                <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.8;">${project.challenge}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Diagnostic Findings & Inspection Protocol -->
      <section class="section-py bg-subtle-theme">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tagline"><i class="bi bi-search"></i> Teardown Analysis</span>
            <h2 class="section-title">Diagnostic Findings & Failure Evidence</h2>
            <p class="section-description mx-auto">Physical inspection observations prior to machining and rebuilding.</p>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="p-4 rounded border border-secondary bg-surface">
                <div class="d-flex align-items-start gap-3">
                  <div class="capability-icon text-accent fs-3">
                    <i class="bi bi-activity"></i>
                  </div>
                  <div>
                    <h4 class="font-heading mb-2">Inspection & Telemetry Log</h4>
                    <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.8;">${project.diagnosticFindings}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Work Performed, Precision Machining & Assembly -->
      <section class="section-py">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <span class="section-tagline"><i class="bi bi-cpu-fill"></i> Execution Protocol</span>
              <h2 class="font-heading mb-3">Precision Machining & Assembly Steps</h2>
              <div class="industrial-divider"></div>
              <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.85;">${project.workPerformed}</p>
            </div>

            <div class="col-lg-6">
              <div class="dyno-spec-card">
                <div class="d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary pb-2">
                  <h5 class="font-heading mb-0 text-accent"><i class="bi bi-speedometer2 me-2"></i> Verified Dyno Telemetry</h5>
                  <span class="badge bg-secondary border border-secondary text-accent">SuperFlow Dyno</span>
                </div>
                <div class="row g-3">
                  <div class="col-6">
                    <div class="p-3 rounded bg-subtle border border-secondary text-center">
                      <div class="small text-muted font-heading">PEAK POWER</div>
                      <div class="h3 font-heading text-accent mb-0">${project.dynoSpecs.power}</div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 rounded bg-subtle border border-secondary text-center">
                      <div class="small text-muted font-heading">PEAK TORQUE</div>
                      <div class="h3 font-heading text-accent mb-0">${project.dynoSpecs.torque}</div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 rounded bg-subtle border border-secondary text-center">
                      <div class="small text-muted font-heading">BOOST PRESSURE</div>
                      <div class="h4 font-heading text-primary mb-0">${project.dynoSpecs.boost}</div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 rounded bg-subtle border border-secondary text-center">
                      <div class="small text-muted font-heading">THERMAL METRIC</div>
                      <div class="small font-mono text-secondary mb-0 mt-1">${project.dynoSpecs.thermal}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Installed Parts & Components Breakdown -->
      <section class="section-py bg-subtle-theme">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tagline"><i class="bi bi-box-seam"></i> Heavy Hardware</span>
            <h2 class="section-title">Installed Components & Upgraded Parts</h2>
            <p class="section-description mx-auto">High-tensile fasteners, forged assemblies, and premium fluid components.</p>
          </div>

          <div class="row g-3 justify-content-center">
            ${project.componentsInstalled.map((comp, idx) => `
              <div class="col-lg-6">
                <div class="p-3 rounded border border-secondary bg-surface d-flex align-items-center gap-3">
                  <span class="badge bg-secondary border border-secondary text-accent font-mono p-2">#0${idx+1}</span>
                  <span class="text-primary-theme fw-medium">${comp}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Section 6: Verified Results & Project Outcome Summary -->
      <section class="section-py">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 mb-4 mb-lg-0">
              <span class="section-tagline"><i class="bi bi-check2-circle"></i> Proven Field Reliability</span>
              <h2 class="font-heading mb-3">Field Verification & Final Outcome</h2>
              <div class="industrial-divider"></div>
              <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.85;">${project.outcome}</p>
              <div class="d-flex align-items-center gap-3 mt-4">
                <a href="projects.html" class="btn btn-industrial-secondary">
                  <i class="bi bi-arrow-left me-2"></i> All Case Studies
                </a>
                <a href="contact.html?service=engine-rebuild" class="btn btn-industrial-primary">
                  <i class="bi bi-calendar-check me-2"></i> Consult Our Master Builder
                </a>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="p-4 rounded border border-secondary bg-surface text-center">
                <i class="bi bi-award-fill fs-1 text-accent mb-2 d-block"></i>
                <h4 class="font-heading mb-2">Titan Build Standard Guarantee</h4>
                <p class="small text-secondary mb-3">Every engine rebuild and custom performance build is dyno-tested, oil-sampled, and backed by our comprehensive heavy powertrain limited warranty.</p>
                <div class="badge bg-secondary border border-secondary text-accent p-2 px-3 font-heading text-uppercase">
                  Zero Shortcut Workmanship
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 7: Discussion & Estimate Booking CTA -->
      <section class="section-py bg-secondary-theme border-top border-secondary text-center">
        <div class="container">
          <div class="py-4" style="max-width: 750px; margin: 0 auto;">
            <span class="section-tagline"><i class="bi bi-speedometer2"></i> Your Truck Deserves Better</span>
            <h2 class="display-6 font-heading mb-3">Ready to Discuss Your Diesel Powertrain Build?</h2>
            <p class="text-secondary mb-4">Whether you need an in-frame commercial fleet overhaul or an 800+ HP towing setup, our engineers are ready to build a reliable solution.</p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <a href="contact.html" class="btn btn-industrial-primary btn-industrial-lg">
                <i class="bi bi-calendar-check me-2"></i> Request Build Consultation
              </a>
              <a href="tel:5551234567" class="btn btn-industrial-secondary btn-industrial-lg">
                <i class="bi bi-telephone me-2"></i> Call Performance Shop: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});

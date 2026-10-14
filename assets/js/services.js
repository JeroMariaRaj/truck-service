/* ==========================================================================
   TITAN DIESEL - SERVICES PAGE & SERVICE DETAILS RENDERER
   Search, Category Filtering, Dynamic Query Param Loading & 404 Fallback
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. SERVICES DIRECTORY LISTING (services.html)
  // --------------------------------------------------------------------------
  const servicesGrid = document.getElementById('servicesDirectoryGrid');
  const serviceSearchInput = document.getElementById('serviceSearchInput');
  const serviceCategoryTabs = document.querySelectorAll('.service-filter-pill');
  const serviceCountBadge = document.getElementById('serviceCountBadge');

  if (servicesGrid && window.TITAN_SERVICES_DATA) {
    let currentCategory = 'all';
    let searchQuery = '';

    function renderServices() {
      const allServices = Object.values(window.TITAN_SERVICES_DATA);
      const filtered = allServices.filter(svc => {
        const matchesCategory = currentCategory === 'all' || svc.category === currentCategory;
        const matchesSearch = searchQuery === '' || 
          svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          svc.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
          svc.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      if (serviceCountBadge) {
        serviceCountBadge.textContent = `${filtered.length} Services Available`;
      }

      if (filtered.length === 0) {
        servicesGrid.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="p-4 rounded border border-secondary bg-surface d-inline-block" style="max-width: 500px;">
              <i class="bi bi-search fs-1 text-accent mb-3 d-block"></i>
              <h4 class="font-heading">No Matching Diesel Services Found</h4>
              <p class="text-secondary small mb-3">We couldn't find any services matching "${searchQuery}". Check your spelling or browse our complete service categories.</p>
              <button class="btn btn-industrial-primary btn-industrial-sm" id="resetServicesFilterBtn">
                <i class="bi bi-arrow-counterclockwise me-1"></i> Reset Filters
              </button>
            </div>
          </div>
        `;
        const resetBtn = document.getElementById('resetServicesFilterBtn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            currentCategory = 'all';
            searchQuery = '';
            if (serviceSearchInput) serviceSearchInput.value = '';
            serviceCategoryTabs.forEach(tab => {
              tab.classList.toggle('active', tab.getAttribute('data-filter') === 'all');
            });
            renderServices();
          });
        }
        return;
      }

      servicesGrid.innerHTML = filtered.map(svc => `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="industrial-card">
            <div class="card-img-wrapper">
              <span class="card-badge"><i class="bi bi-wrench-adjustable me-1"></i> ${svc.categoryLabel}</span>
              <img src="${svc.image}" alt="${svc.title}" loading="lazy" width="400" height="250">
            </div>
            <div class="industrial-card-body">
              <h4 class="h5 mb-2">${svc.title}</h4>
              <p class="small text-secondary mb-3">${svc.overview.substring(0, 140)}...</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span class="spec-pill"><i class="bi bi-clock me-1"></i> ${svc.estDuration}</span>
                <span class="spec-pill text-accent"><i class="bi bi-tag me-1"></i> Est. ${svc.estCost.split(' ')[0]}</span>
              </div>
            </div>
            <div class="industrial-card-footer">
              <a href="service-details.html?id=${svc.id}" class="text-accent fw-bold text-uppercase font-heading" style="font-size: 0.85rem; letter-spacing: 0.05em;">
                View Technical Scope <i class="bi bi-arrow-right ms-1"></i>
              </a>
              <span class="text-muted" style="font-size: 0.75rem;">OEM Spec</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Filter by tab
    serviceCategoryTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        serviceCategoryTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.getAttribute('data-filter') || 'all';
        renderServices();
      });
    });

    // Real-time search
    if (serviceSearchInput) {
      serviceSearchInput.addEventListener('input', function () {
        searchQuery = this.value.trim();
        renderServices();
      });
    }

    // Initial render
    renderServices();
  }

  // --------------------------------------------------------------------------
  // 2. DYNAMIC SERVICE DETAILS PAGE (service-details.html?id=...)
  // --------------------------------------------------------------------------
  const serviceDetailContainer = document.getElementById('serviceDetailContainer');
  if (serviceDetailContainer && window.TITAN_SERVICES_DATA) {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    const service = window.TITAN_SERVICES_DATA[serviceId];

    if (!service) {
      // 404 NOT FOUND STATE FOR INVALID SERVICE ID
      document.title = "Service Not Found | Titan Diesel Works";
      serviceDetailContainer.innerHTML = `
        <div class="container py-5 text-center my-5">
          <div class="p-5 rounded border border-secondary bg-surface d-inline-block" style="max-width: 600px;">
            <div class="display-3 text-accent font-heading mb-3"><i class="bi bi-shield-exclamation"></i></div>
            <h2 class="font-heading mb-2">Service Specification Not Found</h2>
            <p class="text-secondary mb-4">The diesel repair or performance service identifier ("${serviceId || 'unknown'}") was not found in our current workshop catalog. Please review our active service directory.</p>
            <div class="d-flex justify-content-center gap-3">
              <a href="services.html" class="btn btn-industrial-primary">
                <i class="bi bi-grid-fill me-2"></i> Browse All Services
              </a>
              <a href="contact.html" class="btn btn-industrial-secondary">
                <i class="bi bi-telephone-fill me-2"></i> Contact Advisor
              </a>
            </div>
          </div>
        </div>
      `;
      return;
    }

    // Populate metadata & Page Title
    document.title = `${service.title} | Titan Diesel Works`;

    // Render Service Details Content
    serviceDetailContainer.innerHTML = `
      <!-- Section 1: Hero Overview -->
      <section class="detail-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <span class="section-tagline"><i class="bi bi-wrench-adjustable"></i> ${service.categoryLabel}</span>
              <h1 class="display-4 font-heading text-uppercase mb-3">${service.title}</h1>
              <p class="lead text-secondary mb-4" style="font-size: 1.15rem; max-width: 650px;">${service.tagline}</p>
              <div class="d-flex flex-wrap gap-3">
                <button type="button" class="btn btn-industrial-primary btn-book-service" data-bs-toggle="modal" data-bs-target="#serviceBookingModal">
                  <i class="bi bi-calendar-check-fill me-2"></i> Book This Service
                </button>
                <a href="#symptomsSection" class="btn btn-industrial-secondary">
                  <i class="bi bi-list-check me-2"></i> Diagnostic Symptoms
                </a>
              </div>
            </div>
            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="rounded overflow-hidden border border-secondary shadow-lg">
                <img src="${service.image}" alt="${service.title}" class="img-fluid w-100" style="max-height: 280px; object-fit: cover;">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Technical Overview & Symptoms Checklist -->
      <section class="section-py" id="symptomsSection">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="mb-5">
                <h3 class="font-heading mb-3"><i class="bi bi-info-circle text-accent me-2"></i> Service Scope & Technical Overview</h3>
                <div class="industrial-divider"></div>
                <p class="text-secondary" style="font-size: 1.05rem; line-height: 1.8;">${service.overview}</p>
              </div>

              <div class="mb-5">
                <h3 class="font-heading mb-3"><i class="bi bi-exclamation-triangle text-accent me-2"></i> Common Symptoms Indicating Immediate Service</h3>
                <div class="industrial-divider"></div>
                <p class="text-secondary mb-4">If your heavy-duty truck exhibits any of the following warning signs, continuing to operate under heavy load risks compounding mechanical component failure:</p>
                <div class="row g-3">
                  ${service.symptoms.map(s => `
                    <div class="col-md-6">
                      <div class="p-3 rounded border border-secondary bg-surface h-100 d-flex align-items-start gap-2">
                        <i class="bi bi-check2-circle text-accent fs-5 mt-1"></i>
                        <span class="text-secondary small fw-medium">${s}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Sticky Sidebar: Technical Specifications & Transparent Pricing -->
            <div class="col-lg-4">
              <div class="detail-sidebar-box sticky-top" style="top: 100px;">
                <h4 class="font-heading mb-3 border-bottom pb-2">Technical Specification</h4>
                <div class="spec-list-item">
                  <span class="spec-label"><i class="bi bi-clock me-1"></i> Est. Turnaround</span>
                  <span class="spec-value">${service.estDuration}</span>
                </div>
                <div class="spec-list-item">
                  <span class="spec-label"><i class="bi bi-tag me-1"></i> Cost Guidance</span>
                  <span class="spec-value text-accent">${service.estCost}</span>
                </div>
                <div class="spec-list-item">
                  <span class="spec-label"><i class="bi bi-shield-check me-1"></i> Warranty</span>
                  <span class="spec-value">2-Yr / 24k-Mile</span>
                </div>
                <div class="spec-list-item">
                  <span class="spec-label"><i class="bi bi-truck me-1"></i> Fleet Ready</span>
                  <span class="spec-value text-success">Priority Slots</span>
                </div>

                <div class="form-notice mb-4">
                  <i class="bi bi-info-circle me-1"></i> <strong>Note:</strong> Pricing is illustrative demo guidance. Final quote depends on vehicle year, engine displacement, and initial physical inspection.
                </div>

                <a href="contact.html?service=${service.id}" class="btn btn-industrial-primary w-100 mb-2">
                  <i class="bi bi-calendar-event me-2"></i> Request Appointment
                </a>
                <a href="tel:5551234567" class="btn btn-industrial-secondary w-100">
                  <i class="bi bi-telephone me-2"></i> Call Service Bay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Diagnostic Approach & Step-by-Step Technical Repair Process -->
      <section class="section-py bg-subtle-theme">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tagline"><i class="bi bi-gear-fill"></i> Engineering Protocol</span>
            <h2 class="section-title">Diagnostic Teardown & Repair Steps</h2>
            <p class="section-description mx-auto">Every vehicle undergoes standardized OEM testing before tools touch the engine block.</p>
          </div>

          <div class="row g-4">
            <div class="col-lg-6">
              <div class="p-4 rounded border border-secondary bg-surface h-100">
                <h4 class="font-heading text-accent mb-3"><i class="bi bi-cpu me-2"></i> Phase 1: Precision Diagnostic Protocol</h4>
                <ul class="list-unstyled mb-0">
                  ${service.diagnosticSteps.map((d, idx) => `
                    <li class="d-flex align-items-start gap-3 mb-3">
                      <span class="badge bg-secondary border border-secondary text-accent font-mono p-2">0${idx+1}</span>
                      <span class="text-secondary">${d}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="p-4 rounded border border-secondary bg-surface h-100">
                <h4 class="font-heading text-accent mb-3"><i class="bi bi-tools me-2"></i> Phase 2: Mechanical Execution & Reassembly</h4>
                <ul class="list-unstyled mb-0">
                  ${service.repairSteps.map((r, idx) => `
                    <li class="d-flex align-items-start gap-3 mb-3">
                      <span class="badge bg-secondary border border-secondary text-accent font-mono p-2">0${idx+1}</span>
                      <span class="text-secondary">${r}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: What's Included & Workshop Standards -->
      <section class="section-py">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <span class="section-tagline"><i class="bi bi-check-all"></i> Transparency First</span>
              <h2 class="font-heading mb-3">What's Included in This Service</h2>
              <div class="industrial-divider"></div>
              <p class="text-secondary mb-4">When you authorize work at Titan Diesel Works, we ensure zero hidden fees, zero surprise line items, and complete documentation for your maintenance logs.</p>
              <div class="p-3 rounded border border-secondary bg-surface">
                ${service.inclusions.map(inc => `
                  <div class="d-flex align-items-center gap-3 py-2 border-bottom border-light">
                    <i class="bi bi-shield-fill-check text-accent fs-5"></i>
                    <span class="text-primary-theme fw-medium">${inc}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="col-lg-6">
              <div class="p-4 rounded border border-secondary bg-surface">
                <h4 class="font-heading mb-3"><i class="bi bi-calculator text-accent me-2"></i> Pricing Guidance & Policy</h4>
                <p class="text-secondary">${service.pricingGuidance}</p>
                <div class="d-flex align-items-center gap-3 p-3 rounded bg-subtle border border-secondary mt-3">
                  <i class="bi bi-award fs-1 text-accent"></i>
                  <div>
                    <h6 class="font-heading mb-1">Titan 100% Workmanship Warranty</h6>
                    <p class="small text-secondary mb-0">Covering mechanical parts and labor for 24 months or 24,000 miles across commercial and personal diesel trucks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Technical Frequently Asked Questions -->
      <section class="section-py bg-subtle-theme">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tagline"><i class="bi bi-question-circle"></i> Got Questions?</span>
            <h2 class="section-title">Frequently Asked Questions</h2>
            <p class="section-description mx-auto">Expert answers directly from our ASE-certified diesel master technicians.</p>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="accordion accordion-industrial" id="serviceFaqAccordion">
                ${service.faqs.map((faq, idx) => `
                  <div class="accordion-item">
                    <h3 class="accordion-header" id="faqHeading${idx}">
                      <button class="accordion-button ${idx !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${idx}" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="faqCollapse${idx}">
                        ${faq.q}
                      </button>
                    </h3>
                    <div id="faqCollapse${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" aria-labelledby="faqHeading${idx}" data-bs-parent="#serviceFaqAccordion">
                      <div class="accordion-body">
                        ${faq.a}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 6: Related Diesel Services -->
      <section class="section-py">
        <div class="container">
          <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span class="section-tagline"><i class="bi bi-collection"></i> Complementary Care</span>
              <h2 class="font-heading mb-0">Related Powertrain Services</h2>
            </div>
            <a href="services.html" class="btn btn-industrial-secondary btn-industrial-sm">
              All Services <i class="bi bi-arrow-right ms-1"></i>
            </a>
          </div>

          <div class="row g-4">
            ${service.relatedIds.map(relId => {
              const rel = window.TITAN_SERVICES_DATA[relId];
              if (!rel) return '';
              return `
                <div class="col-lg-4 col-md-6">
                  <div class="industrial-card">
                    <div class="card-img-wrapper">
                      <span class="card-badge">${rel.categoryLabel}</span>
                      <img src="${rel.image}" alt="${rel.title}" loading="lazy" width="400" height="250">
                    </div>
                    <div class="industrial-card-body">
                      <h4 class="h5 mb-2">${rel.title}</h4>
                      <p class="small text-secondary mb-3">${rel.overview.substring(0, 110)}...</p>
                      <span class="spec-pill"><i class="bi bi-clock me-1"></i> ${rel.estDuration}</span>
                    </div>
                    <div class="industrial-card-footer">
                      <a href="service-details.html?id=${rel.id}" class="text-accent fw-bold text-uppercase font-heading" style="font-size: 0.85rem;">
                        View Service <i class="bi bi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- Section 7: Final Consultation & Booking CTA -->
      <section class="section-py bg-secondary-theme border-top border-secondary text-center">
        <div class="container">
          <div class="py-4" style="max-width: 750px; margin: 0 auto;">
            <span class="section-tagline"><i class="bi bi-speedometer2"></i> Get Your Truck Back to Work</span>
            <h2 class="display-6 font-heading mb-3">Schedule Your ${service.title} Today</h2>
            <p class="text-secondary mb-4">Don't let a minor diagnostic warning develop into a major mechanical failure. Contact our heavy diesel specialists to lock in your diagnostic slot.</p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <a href="contact.html?service=${service.id}" class="btn btn-industrial-primary btn-industrial-lg">
                <i class="bi bi-calendar-check me-2"></i> Book Service Appointment
              </a>
              <a href="tel:5551234567" class="btn btn-industrial-secondary btn-industrial-lg">
                <i class="bi bi-telephone-fill me-2"></i> Direct Bay: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
});

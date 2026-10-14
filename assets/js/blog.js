/* ==========================================================================
   TITAN DIESEL - BLOG DIRECTORY & BLOG DETAILS RENDERER
   Search, Category Filtering, Pagination / Load More, Dynamic Detail Loading
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Helper functions for author avatars and bios
  function getAuthorPhoto(authorName) {
    if (!authorName) return 'assets/images/team/team-diagnostics-lead.jpg';
    if (authorName.includes('Cole')) return 'assets/images/team/team-diagnostics-lead.jpg';
    if (authorName.includes('Garrett')) return 'assets/images/team/team-performance-tuner.jpg';
    if (authorName.includes('Marcus')) return 'assets/images/team/team-master-tech.jpg';
    return 'assets/images/team/team-diagnostics-lead.jpg';
  }

  function getAuthorBio(authorName) {
    if (authorName && authorName.includes('Garrett')) {
      return 'Garrett specializes in high-output forced induction, compound turbo configuration, and SuperFlow chassis dynamometer calibration at Titan Diesel Works.';
    }
    if (authorName && authorName.includes('Marcus')) {
      return 'Marcus Reid oversees heavy powertrain rebuilding, Allison transmission overhauls, and commercial Class 4–8 fleet preventive maintenance schedules.';
    }
    return 'Cole Vance leads the master diagnostic division at Titan Diesel Works, specializing in common rail telemetry, relative compression, and fuel system failure analysis.';
  }

  // --------------------------------------------------------------------------
  // 1. BLOG DIRECTORY LISTING (blog.html)
  // --------------------------------------------------------------------------
  const blogArticlesGrid = document.getElementById('blogArticlesGrid');
  const blogSearchInput = document.getElementById('blogSearchInput');
  const blogCategoryTabs = document.querySelectorAll('.blog-filter-pill');
  const blogLoadMoreBtn = document.getElementById('blogLoadMoreBtn');
  const blogArticlesCount = document.getElementById('blogArticlesCount');

  if (blogArticlesGrid && window.TITAN_BLOG_DATA) {
    let currentCategory = 'all';
    let searchQuery = '';
    const POSTS_PER_PAGE = 4;
    let visibleCount = POSTS_PER_PAGE;

    function renderBlogList() {
      const allPosts = Object.values(window.TITAN_BLOG_DATA);
      const filtered = allPosts.filter(post => {
        const matchesCategory = currentCategory === 'all' || post.category === currentCategory;
        const matchesSearch = searchQuery === '' ||
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      });

      if (blogArticlesCount) {
        blogArticlesCount.textContent = `Showing ${Math.min(visibleCount, filtered.length)} of ${filtered.length} Articles`;
      }

      if (filtered.length === 0) {
        blogArticlesGrid.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="p-4 rounded border border-secondary bg-surface d-inline-block" style="max-width: 500px;">
              <i class="bi bi-journal-x fs-1 text-accent mb-3 d-block"></i>
              <h4 class="font-heading">No Diesel Articles Found</h4>
              <p class="text-secondary small mb-3">No technical articles matched your search query "${searchQuery}".</p>
              <button class="btn btn-industrial-primary btn-industrial-sm" id="resetBlogFilterBtn">
                <i class="bi bi-arrow-counterclockwise me-1"></i> Clear Search
              </button>
            </div>
          </div>
        `;
        const resetBtn = document.getElementById('resetBlogFilterBtn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            currentCategory = 'all';
            searchQuery = '';
            if (blogSearchInput) blogSearchInput.value = '';
            blogCategoryTabs.forEach(tab => {
              tab.classList.toggle('active', tab.getAttribute('data-filter') === 'all');
            });
            visibleCount = POSTS_PER_PAGE;
            renderBlogList();
          });
        }
        if (blogLoadMoreBtn) blogLoadMoreBtn.style.display = 'none';
        return;
      }

      // Slice for pagination
      const visiblePosts = filtered.slice(0, visibleCount);

      blogArticlesGrid.innerHTML = visiblePosts.map(post => `
        <div class="col-lg-6 mb-4">
          <div class="industrial-card">
            <div class="card-img-wrapper">
              <span class="card-badge"><i class="bi bi-tag-fill me-1"></i> ${post.categoryLabel}</span>
              <img src="${post.image}" alt="${post.title}" loading="lazy" width="500" height="300">
            </div>
            <div class="industrial-card-body">
              <div class="d-flex align-items-center gap-3 text-muted small mb-2">
                <span><i class="bi bi-calendar3 me-1"></i> ${post.date}</span>
                <span>•</span>
                <span><i class="bi bi-clock me-1"></i> ${post.readTime}</span>
              </div>
              <h3 class="h4 mb-2">
                <a href="blog-details.html?id=${post.id}" class="text-primary-theme text-decoration-none">
                  ${post.title}
                </a>
              </h3>
              <p class="small text-secondary mb-3">${post.excerpt}</p>
              <div class="d-flex flex-wrap gap-1 mt-auto">
                ${post.tags.slice(0, 3).map(t => `<span class="spec-pill">#${t}</span>`).join('')}
              </div>
            </div>
            <div class="industrial-card-footer">
              <div class="d-flex align-items-center gap-2">
                <img src="${post.authorPhoto || getAuthorPhoto(post.author)}" alt="${post.author}" class="rounded-circle border border-secondary flex-shrink-0" width="24" height="24" style="object-fit: cover;">
                <span class="small text-secondary">${post.author}</span>
              </div>
              <a href="blog-details.html?id=${post.id}" class="text-accent fw-bold text-uppercase font-heading" style="font-size: 0.85rem;">
                Read Guide <i class="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      `).join('');

      // Manage Load More button visibility
      if (blogLoadMoreBtn) {
        if (visibleCount >= filtered.length) {
          blogLoadMoreBtn.style.display = 'none';
        } else {
          blogLoadMoreBtn.style.display = 'inline-flex';
        }
      }
    }

    // Category Tabs click
    blogCategoryTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        blogCategoryTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.getAttribute('data-filter') || 'all';
        visibleCount = POSTS_PER_PAGE;
        renderBlogList();
      });
    });

    // Real-time Search input
    if (blogSearchInput) {
      blogSearchInput.addEventListener('input', function () {
        searchQuery = this.value.trim();
        visibleCount = POSTS_PER_PAGE;
        renderBlogList();
      });
    }

    // Load More click
    if (blogLoadMoreBtn) {
      blogLoadMoreBtn.addEventListener('click', function () {
        visibleCount += POSTS_PER_PAGE;
        renderBlogList();
      });
    }

    // Initial render
    renderBlogList();
  }

  // --------------------------------------------------------------------------
  // 2. DYNAMIC BLOG DETAILS PAGE (blog-details.html?id=...)
  // --------------------------------------------------------------------------
  const blogDetailContainer = document.getElementById('blogDetailContainer');
  if (blogDetailContainer && window.TITAN_BLOG_DATA) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const post = window.TITAN_BLOG_DATA[postId];

    if (!post) {
      // 404 NOT FOUND STATE FOR INVALID BLOG POST
      document.title = "Article Not Found | Titan Diesel Works";
      blogDetailContainer.innerHTML = `
        <div class="container py-5 text-center my-5">
          <div class="p-5 rounded border border-secondary bg-surface d-inline-block" style="max-width: 600px;">
            <div class="display-3 text-accent font-heading mb-3"><i class="bi bi-file-earmark-x"></i></div>
            <h2 class="font-heading mb-2">Technical Article Not Found</h2>
            <p class="text-secondary mb-4">The diesel maintenance or performance guide ("${postId || 'unknown'}") could not be located in our technical knowledge base.</p>
            <div class="d-flex justify-content-center gap-3">
              <a href="blog.html" class="btn btn-industrial-primary">
                <i class="bi bi-journal-text me-2"></i> Return to Tech Articles
              </a>
              <a href="index.html" class="btn btn-industrial-secondary">
                <i class="bi bi-house-door-fill me-2"></i> Workshop Home
              </a>
            </div>
          </div>
        </div>
      `;
      return;
    }

    // Set page title
    document.title = `${post.title} | Titan Diesel Tech Digest`;

    // Render Article Template (strictly 7 sections maximum)
    blogDetailContainer.innerHTML = `
      <!-- Section 1: Article Header & Hero Banner -->
      <section class="detail-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <span class="section-tagline"><i class="bi bi-book"></i> ${post.categoryLabel}</span>
              <h1 class="h2 font-heading text-uppercase mb-3">${post.title}</h1>
              <div class="d-flex flex-wrap align-items-center gap-4 text-muted small mb-3">
                <span class="d-inline-flex align-items-center gap-2">
                  <img src="${post.authorPhoto || getAuthorPhoto(post.author)}" alt="${post.author}" class="rounded-circle border border-accent flex-shrink-0" width="30" height="30" style="object-fit: cover;">
                  <span><strong class="text-primary-theme">${post.author}</strong> <span class="text-secondary">(${post.authorRole})</span></span>
                </span>
                <span><i class="bi bi-calendar3 text-accent me-1"></i> ${post.date}</span>
                <span><i class="bi bi-clock-history text-accent me-1"></i> ${post.readTime}</span>
              </div>
            </div>
            <div class="col-lg-4 mt-3 mt-lg-0">
              <div class="rounded overflow-hidden border border-secondary shadow">
                <img src="${post.image}" alt="${post.title}" class="img-fluid w-100" style="max-height: 240px; object-fit: cover;">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Article Main Content Body -->
      <section class="section-py">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <article class="pe-lg-4 mb-5" style="font-size: 1.05rem; line-height: 1.85;">
                ${post.content}
              </article>
            </div>

            <!-- Sidebar: Specs, Quick Checklist & Workshop Consultation -->
            <div class="col-lg-4">
              <div class="detail-sidebar-box sticky-top" style="top: 100px;">
                <h4 class="font-heading mb-3 border-bottom pb-2">Technical Fast Facts</h4>
                ${post.specs.map(spec => `
                  <div class="spec-list-item">
                    <span class="spec-label">${spec.label}</span>
                    <span class="spec-value text-accent">${spec.value}</span>
                  </div>
                `).join('')}

                <div class="p-3 rounded bg-subtle border border-secondary mt-4 mb-4">
                  <h6 class="font-heading mb-2"><i class="bi bi-telephone-inbound text-accent me-2"></i> Suspecting This Issue?</h6>
                  <p class="small text-secondary mb-3">Bring your vehicle to our diagnostic bay for a verified scan and relative cylinder analysis.</p>
                  <a href="contact.html" class="btn btn-industrial-primary btn-industrial-sm w-100">
                    <i class="bi bi-calendar-event me-1"></i> Book Diagnostic Bay
                  </a>
                </div>

                <h5 class="font-heading mb-2">Article Topics</h5>
                <div class="d-flex flex-wrap gap-1">
                  ${post.tags.map(t => `<span class="spec-pill">#${t}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Technical Specifications & Failure Analysis Matrix -->
      <section class="section-py bg-subtle-theme">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tagline"><i class="bi bi-clipboard2-data"></i> Engineering Data</span>
            <h2 class="section-title">Critical Tolerances & Inspection Metrics</h2>
            <p class="section-description mx-auto">Reference parameters utilized in our laboratory testing procedures.</p>
          </div>

          <div class="row g-4 justify-content-center">
            ${post.specs.map(sp => `
              <div class="col-md-3 col-6">
                <div class="inspection-metric-card p-4 rounded border border-secondary bg-surface text-center h-100">
                  <div class="inspection-metric-label small text-muted font-heading text-uppercase mb-2">${sp.label}</div>
                  <div class="inspection-metric-value h4 font-heading text-accent mb-0">${sp.value}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Section 4: Practical Takeaways & Preventive Maintenance Checklist -->
      <section class="section-py">
        <div class="container">
          <div class="section-header mb-4">
            <span class="section-tagline"><i class="bi bi-check2-square"></i> Actionable Checklist</span>
            <h2 class="section-title">Owner's Preventive Action Plan</h2>
            <div class="industrial-divider"></div>
            <p class="section-description">Incorporate these preventive checks into your routine pre-trip inspections to protect your diesel powertrain from premature failure.</p>
          </div>

          <div class="row g-4 align-items-stretch">
            <div class="col-lg-7 d-flex">
              <div class="p-4 rounded border border-secondary bg-surface w-100 d-flex flex-column justify-content-between shadow-sm">
                <div>
                  <span class="font-heading small text-uppercase text-muted d-block mb-3">
                    <i class="bi bi-list-check text-accent me-1"></i> Recommended Maintenance Steps
                  </span>
                  <div class="d-flex flex-column gap-2">
                    ${post.checklist.map((item, idx) => `
                      <div class="d-flex align-items-center gap-3 py-2 px-3 rounded bg-subtle border border-secondary">
                        <span class="badge bg-secondary border border-secondary text-accent font-mono p-1 px-2">0${idx+1}</span>
                        <span class="text-primary-theme small fw-medium">${item}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5 d-flex">
              <div class="p-4 rounded border border-secondary bg-surface w-100 d-flex flex-column justify-content-between shadow-sm">
                <div>
                  <span class="font-heading small text-uppercase text-muted d-block mb-3">
                    <i class="bi bi-person-check text-accent me-1"></i> Technical Author
                  </span>
                  <div class="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-secondary">
                    <img src="${post.authorPhoto || getAuthorPhoto(post.author)}" alt="${post.author}" class="rounded-circle border border-2 border-accent flex-shrink-0" width="70" height="70" style="object-fit: cover; object-position: center;">
                    <div>
                      <h4 class="font-heading mb-1 text-primary-theme">${post.author}</h4>
                      <span class="small text-accent font-heading text-uppercase d-block">${post.authorRole}</span>
                    </div>
                  </div>
                  <p class="text-secondary small mb-3" style="line-height: 1.75;">
                    ${getAuthorBio(post.author)}
                  </p>
                </div>
                <div class="p-3 rounded bg-subtle border border-secondary mt-3">
                  <span class="small text-muted font-mono d-block" style="font-size: 0.82rem;">
                    <i class="bi bi-shield-check text-accent me-1"></i> Published by Titan Diesel Works Technical Journal for educational demonstration purposes.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Author Bio & Article Tags -->
      <section class="section-py bg-subtle-theme border-top border-secondary">
        <div class="container">
          <div class="article-meta-share p-4 rounded border border-secondary bg-surface d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div class="article-category">
              <span class="font-heading text-uppercase text-muted small d-block mb-1">Categorized Under:</span>
              <span class="badge bg-secondary border border-secondary text-accent px-3 py-2 font-heading text-uppercase">${post.categoryLabel}</span>
            </div>
            <div class="article-share-group d-flex align-items-center gap-2">
              <span class="article-share-label font-heading text-uppercase text-muted small me-2">Share Article:</span>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" class="btn-icon-square" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" class="btn-icon-square" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><i class="bi bi-facebook"></i></a>
              <button type="button" class="btn-icon-square copy-article-link" aria-label="Copy article link"><i class="bi bi-link-45deg"></i></button>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 6: Related Technical Articles -->
      <section class="section-py">
        <div class="container">
          <div class="related-articles-heading d-flex justify-content-between align-items-end mb-4">
            <div>
              <span class="section-tagline"><i class="bi bi-journal-bookmark"></i> Continue Reading</span>
              <h2 class="related-articles-title font-heading mb-0">Related Technical Articles</h2>
            </div>
            <a href="blog.html" class="btn btn-industrial-secondary btn-industrial-sm">
              All Articles <i class="bi bi-arrow-right ms-1"></i>
            </a>
          </div>

          <div class="row g-4">
            ${post.relatedIds.map(relId => {
              const rel = window.TITAN_BLOG_DATA[relId];
              if (!rel) return '';
              return `
                <div class="col-lg-4 col-md-6">
                  <div class="industrial-card">
                    <div class="card-img-wrapper">
                      <span class="card-badge">${rel.categoryLabel}</span>
                      <img src="${rel.image}" alt="${rel.title}" loading="lazy" width="400" height="240">
                    </div>
                    <div class="industrial-card-body">
                      <div class="small text-muted mb-2">${rel.date} • ${rel.readTime}</div>
                      <h4 class="h5 mb-2">${rel.title}</h4>
                      <p class="small text-secondary mb-3">${rel.excerpt.substring(0, 100)}...</p>
                    </div>
                    <div class="industrial-card-footer">
                      <a href="blog-details.html?id=${rel.id}" class="text-accent fw-bold text-uppercase font-heading" style="font-size: 0.85rem;">
                        Read Full Guide <i class="bi bi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- Section 7: Consultation & Diagnostic Bay CTA -->
      <section class="section-py bg-secondary-theme border-top border-secondary text-center">
        <div class="container">
          <div class="py-4" style="max-width: 750px; margin: 0 auto;">
            <span class="section-tagline"><i class="bi bi-speedometer"></i> Real-World Diesel Expertise</span>
            <h2 class="display-6 font-heading mb-3">Need Hands-On Diagnosis For Your Truck?</h2>
            <p class="text-secondary mb-4">Don't rely on guesswork when thousands in mechanical repairs are on the line. Schedule a computerized health scan with our certified diesel technicians.</p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <a href="contact.html" class="btn btn-industrial-primary btn-industrial-lg">
                <i class="bi bi-calendar-check me-2"></i> Book Diagnostic Appointment
              </a>
              <a href="tel:5551234567" class="btn btn-industrial-secondary btn-industrial-lg">
                <i class="bi bi-telephone me-2"></i> Call Master Tech: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    const copyArticleLinkButton = blogDetailContainer.querySelector('.copy-article-link');
    if (copyArticleLinkButton) {
      copyArticleLinkButton.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          copyArticleLinkButton.setAttribute('aria-label', 'Article link copied');
        } catch {
          const temporaryInput = document.createElement('textarea');
          temporaryInput.value = window.location.href;
          temporaryInput.setAttribute('readonly', '');
          temporaryInput.style.position = 'fixed';
          temporaryInput.style.opacity = '0';
          document.body.appendChild(temporaryInput);
          temporaryInput.select();
          document.execCommand('copy');
          temporaryInput.remove();
          copyArticleLinkButton.setAttribute('aria-label', 'Article link copied');
        }
      });
    }
  }
});

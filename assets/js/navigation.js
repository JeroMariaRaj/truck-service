/* ==========================================================================
   TITAN DIESEL - NAVIGATION CONTROLLER
   Active Link Detection, Mobile Menu Handling, Sticky Header Behavior
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Highlight current active page in navigation
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.site-header .nav-link, .dropdown-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPath = href.split('/').pop();
    // Match current page or index.html for root
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
      // If inside dropdown, also activate parent dropdown toggle
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    } else {
      // Avoid false active state
      if (linkPath !== currentPath) {
        link.classList.remove('active');
      }
    }
  });

  // 2. Collapse mobile nav when clicking a standard anchor link
  const navCollapse = document.getElementById('navbarTitanNav');
  if (navCollapse) {
    let mobileBooking = navCollapse.querySelector('.mobile-nav-booking');
    if (!mobileBooking) {
      mobileBooking = document.createElement('div');
      mobileBooking.className = 'mobile-nav-booking d-lg-none';
      navCollapse.appendChild(mobileBooking);
    }

    // Pages with the service modal already provide their own booking button.
    if (!mobileBooking.querySelector('.btn-book-service')) {
      const serviceLink = document.createElement('a');
      serviceLink.href = 'contact.html';
      serviceLink.className = 'btn btn-industrial-primary mobile-service-link';
      serviceLink.innerHTML = '<i class="bi bi-calendar-check me-2" aria-hidden="true"></i> Book a Service';
      mobileBooking.appendChild(serviceLink);
    }

    const mobileLinks = navCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    mobileLinks.forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }

  // 3. Smart Sticky Header: Hides on scroll-down, reveals on scroll-up
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;
    const SCROLL_THRESHOLD = 8; // Avoid jitter from micro-scrolls

    function updateHeaderOnScroll() {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      const delta = currentScrollY - lastScrollY;

      // Keep header visible if mobile navbar collapse is currently open
      if (navCollapse && navCollapse.classList.contains('show')) {
        siteHeader.classList.remove('header-hidden');
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      if (currentScrollY <= 60) {
        // At the top of the page - return to natural position
        siteHeader.classList.remove('header-scrolled');
        siteHeader.classList.remove('header-hidden');
        siteHeader.classList.remove('header-visible');
      } else {
        siteHeader.classList.add('header-scrolled');

        if (delta > SCROLL_THRESHOLD && currentScrollY > 140) {
          // Scrolling DOWN: hide header
          siteHeader.classList.add('header-hidden');
          siteHeader.classList.remove('header-visible');
        } else if (delta < -SCROLL_THRESHOLD) {
          // Scrolling UP: reveal sticky header
          siteHeader.classList.remove('header-hidden');
          siteHeader.classList.add('header-visible');
        }
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderOnScroll);
        ticking = true;
      }
    }, { passive: true });
  }
});

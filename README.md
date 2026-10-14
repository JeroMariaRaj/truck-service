# TITAN DIESEL WORKS — HEAVY-DUTY REPAIR & PERFORMANCE SHOP TEMPLATE

A modern, commercial frontend-only multipage HTML5 website template engineered specifically for **Heavy-Duty Diesel Repair Garages, Truck Performance Workshops, and Commercial Fleet Specialists**.

Designed with an industrial aesthetic—rugged, mechanical, reliable, and technical. Featuring real-world automotive diesel content, complete client-side validation, full dark/light theme switching, and comprehensive LTR/RTL layout support.

---

## 1. Project Overview & Brand Identity

- **Brand Name:** Titan Diesel Works
- **Tagline:** *Built for Heavy Work. Tuned for More.*
- **Vehicle Platforms Covered:** Powerstroke (Ford F-250/350/450/550), Cummins (Ram 2500/3500/4500/5500, Freightliner), Duramax (Chevy Silverado 2500/3500 HD), Caterpillar (C15, C13), Detroit Diesel (DD13, DD15), Class 3–8 Commercial Fleets.
- **Color Palette:**
  - Charcoal Black: `#171A1D`
  - Deep Graphite: `#22272C`
  - Steel Gray: `#737D86`
  - Warm Off-White: `#F4F2ED`
  - Performance Amber: `#F5A623` (Primary Accent)
  - Industrial Red: `#B9382F` (Urgent Alerts / Dispatches)
- **Typography:**
  - Headings: `Oswald`, sans-serif (Display, Uppercase, Condensed)
  - Body Text: `Inter`, sans-serif (Crisp technical readability)
  - Data / Telemetry: `JetBrains Mono` (Monospace parameters)

---

## 2. Page Inventory (All 13 Required Pages)

Every page strictly adheres to the **maximum seven major content sections limit** (excluding shared header and footer), with complete content, working navigation, and zero dead links:

| Page File | Page Title & Purpose | Major Section Count |
| :--- | :--- | :---: |
| [`index.html`](index.html) | **Home Page 1 — General Diesel Services Landing:** Hero with trust indicators, 4 capability pillars, 6 featured services, split workshop expertise, 3 demo repair builds, 4-step workflow + reviews, final conversion banner. | **7 Sections** |
| [`home-2.html`](home-2.html) | **Home Page 2 — Diesel Performance & Fleet Specialist:** Technical editorial composition, live dyno meters, high-output compound turbos & CP3 fueling, commercial fleet uptime programs, dyno-verified case studies, ISO clean-lab standards, dyno consultation CTA. | **7 Sections** |
| [`about.html`](about.html) | **About Us Page:** Hero, workshop repair philosophy ("Why We Refuse to Guess"), 2014–2024 milestone timeline, workmanship standards & ARP hardware, 4 lead technician profiles, specialized tooling & dyno cell showcase, tour consultation CTA. | **7 Sections** |
| [`services.html`](services.html) | **Services Catalog:** Hero, workshop equipment overview, interactive filterable directory (10 services with live search and category tabs), repair vs. performance synergy, commercial fleet PM program, service FAQs, booking CTA. | **7 Sections** |
| [`service-details.html`](service-details.html) | **Service Details (Dynamic Template):** Reusable template populated via `?id=...` supporting 10 distinct diesel services with unique symptoms, diagnostic teardowns, repair steps, specs sidebar, pricing guidance, FAQs, related services, and branded 404 fallback. | **7 Sections** |
| [`pricing.html`](pricing.html) | **Pricing Guide Page:** Transparent pricing hero with disclaimers, 3 diagnostic tiers, mechanical repair & PM price matrix table, turbo & performance tiers, 3-tier commercial fleet packages (Bronze, Silver, Gold), pricing factors & FAQs, quote CTA. | **7 Sections** |
| [`blog.html`](blog.html) | **Diesel Tech Journal:** Editorial hero, featured lead article, real-time search & category filtering, 8 unique technical articles with pagination / load-more, workshop newsletter signup, technical consultation CTA. | **7 Sections** |
| [`blog-details.html`](blog-details.html) | **Blog Details (Dynamic Template):** Reusable template populated via `?id=...` supporting 8 in-depth educational articles with checklists, engineering failure metrics, author bio, article tags, related posts, and 404 fallback. | **7 Sections** |
| [`projects.html`](projects.html) | **Projects / Case Studies Page:** Portfolio hero, category filter strip, featured 848 WHP Ram build spotlight, 6 distinct case studies, 5-stage build protocol, verified dyno and thermal outcomes, build consultation CTA. | **7 Sections** |
| [`project-details.html`](project-details.html) | **Project Details (Dynamic Template):** Reusable template populated via `?id=...` supporting 6 real-world truck case studies with vehicle specs, challenge, inspection findings, machining steps, parts breakdown, dyno results, and 404 fallback. | **7 Sections** |
| [`contact.html`](contact.html) | **Contact Us & Service Booking:** Contact hero, 4 direct dispatch channels, interactive appointment booking form with client-side validation, industrial map placeholder, highway & lowboy directions, booking FAQs, emergency breakdown banner. | **7 Sections** |
| [`404.html`](404.html) | **Branded 404 Error Page:** "Diagnostic Trouble Code: P0404 - Engine Route Not Found" industrial breakdown theme, return home button, and direct service catalog links. | Utility |
| [`coming-soon.html`](coming-soon.html) | **Maintenance / Coming Soon Page:** "Dyno Cell & Bay 4 Overhaul" notice, live accessible JavaScript countdown timer, notification email form, and emergency dispatch links. | Utility |

---

## 3. Specialized Diesel Services (10 Distinct Services)

All 10 services feature full, unique technical data in [`assets/js/data/services-data.js`](assets/js/data/services-data.js):

1. `engine-diagnostics`: Diesel Engine Diagnostics & CAN Bus Analysis
2. `engine-rebuild`: Heavy-Duty Engine Repair & Precision Long-Block Rebuilding
3. `turbocharger-upgrades`: Turbocharger Repair, VGT Reconditioning & Compound Upgrades
4. `fuel-injection`: High-Pressure Common Rail & Mechanical Fuel Injection Systems
5. `transmission-drivetrain`: Heavy-Duty Transmission Rebuilds & Allison Drivetrain Service
6. `emissions-dpf`: DPF, DEF, DOC & SCR Emissions System Diagnostics & Cleaning
7. `cooling-system`: Heavy-Duty Cooling System, Radiator & EGR Cooler Overhaul
8. `preventive-maintenance`: Commercial Fleet & Light-Duty Preventive Maintenance (PM)
9. `performance-upgrades`: Diesel Performance Tuning, High-Flow Air & Dual Fuel Systems
10. `fleet-maintenance`: Commercial Fleet Preventive Programs & Annual DOT Compliance

---

## 4. Technical Blog Articles (8 In-Depth Guides)

All 8 articles feature unique educational content, checklists, and failure metrics in [`assets/js/data/blog-data.js`](assets/js/data/blog-data.js):

1. `diesel-injector-warning-signs`: Early Signs of Diesel Injector Failure: Don't Melt a Piston
2. `when-to-replace-turbocharger`: When Should You Replace a Diesel Turbocharger? VGT vs Fixed Vane
3. `diesel-engine-overheating-causes`: Diesel Engine Overheating: 6 Root Causes Heavy Truck Owners Miss
4. `work-truck-preventive-maintenance`: Essential Preventive Maintenance Schedules for Commercial Work Trucks
5. `understanding-diesel-diagnostic-codes`: Deciphering Diesel DTCs: From SPN/FMI Codes to CAN Bus Communication
6. `fleet-maintenance-uptime-planning`: Fleet Maintenance Planning: Maximizing Commercial Uptime & Lowering CPM
7. `diesel-transmission-warning-signs`: Warning Signs of Heavy-Duty Diesel Transmission & Torque Converter Slip
8. `diesel-performance-upgrades-guide`: Diesel Performance Upgrades: Supporting Mods to Install Before Turning Up Fuel

---

## 5. Project Builds & Case Studies (6 Distinct Case Studies)

All 6 case studies feature unique vehicle platforms, diagnostic teardown findings, and verified dyno metrics in [`assets/js/data/projects-data.js`](assets/js/data/projects-data.js):

1. `powerstroke-longblock-rebuild`: 2021 Ford F-350 6.7L Powerstroke Precision Long-Block Overhaul (525 WHP / 1,140 LB-FT)
2. `cummins-compound-turbo-build`: 2019 Ram 3500 6.7L Cummins 850 HP Compound Turbo & Fuel System (848 WHP / 1,620 LB-FT)
3. `duramax-allison-transmission-build`: 2022 Chevy Silverado 3500HD Allison 10-Speed Billet Rebuild (Rated 1,800 LB-FT)
4. `freightliner-fleet-maintenance-overhaul`: Commercial Freightliner M2-106 Fleet Uptime & DPF Overhaul (12 Units, 98.4% flow restored)
5. `cat-c15-heavy-haul-inframe`: Peterbilt 389 Cat C15 6NZ In-Frame Heavy Haul Engine Rebuild (625 HP / 2,050 LB-FT)
6. `ram-2500-heavy-tow-performance`: 2023 Ram 2500 Cummins Extreme Towing Thermals & Suspension Upgrade (18,000-lb towing stability)

---

## 6. Image Asset Mapping (Strict 1:1 Mapping)

All images are stored locally under `assets/images/` and optimized for performance:

| Category | Local Filename | Description |
| :--- | :--- | :--- |
| **Hero** | `assets/images/hero/hero-home-1.jpg` | Heavy-duty truck on lift in clean diesel workshop with diagnostic tools |
| **Hero** | `assets/images/hero/hero-home-2.jpg` | High-output performance truck on chassis dynamometer with telemetry |
| **Hero** | `assets/images/hero/hero-about.jpg` | State-of-the-art 12-bay commercial diesel facility |
| **Hero** | `assets/images/hero/hero-services.jpg` | Technician inspecting diesel engine bay with diagnostic scanner |
| **Hero** | `assets/images/hero/hero-projects.jpg` | Custom heavy-duty truck build in spotless workshop |
| **Hero** | `assets/images/hero/hero-blog.jpg` | Diesel mechanic inspecting valvetrain components on workbench |
| **Hero** | `assets/images/hero/hero-pricing.jpg` | Service advisor and customer reviewing digital inspection on tablet |
| **Hero** | `assets/images/hero/hero-contact.jpg` | Modern facility exterior with fleet vehicles staged outside |
| **Hero** | `assets/images/hero/maintenance.jpg` | Workshop bay machinery and engine hoist during overhaul |
| **Services** | `assets/images/services/diesel-engine-diagnostics.jpg` | Scanner analyzing common rail engine electronics |
| **Services** | `assets/images/services/heavy-duty-engine-rebuild.jpg` | Heavy-duty engine block rebuild with forged pistons |
| **Services** | `assets/images/services/turbocharger-performance-upgrade.jpg` | High-flow turbocharger compressor wheel assembly |
| **Services** | `assets/images/services/diesel-fuel-injection-service.jpg` | High-pressure common rail fuel injector calibration |
| **Services** | `assets/images/services/transmission-drivetrain-repair.jpg` | Heavy-duty transmission gearsets and clutch drums |
| **Services** | `assets/images/services/diesel-emissions-dpf-diagnostics.jpg` | Exhaust DPF aftertreatment canister diagnostics |
| **Services** | `assets/images/services/diesel-cooling-radiator-repair.jpg` | High-capacity all-aluminum radiator and cooling pack |
| **Services** | `assets/images/services/diesel-preventive-maintenance.jpg` | Commercial work truck lube and 50-point inspection |
| **Services** | `assets/images/services/diesel-performance-upgrades.jpg` | High-output air intake and dyno tuning hardware |
| **Services** | `assets/images/services/commercial-fleet-maintenance.jpg` | Lineup of commercial utility trucks in fleet bay |
| **Projects** | `assets/images/projects/project-powerstroke-longblock.jpg` | Ford F-350 6.7L long-block rebuild project |
| **Projects** | `assets/images/projects/project-cummins-compound-turbo.jpg` | Ram 3500 848 WHP compound turbo build project |
| **Projects** | `assets/images/projects/project-duramax-allison.jpg` | Silverado 3500HD Allison transmission project |
| **Projects** | `assets/images/projects/project-freightliner-fleet.jpg` | Commercial Freightliner 12-truck fleet overhaul |
| **Projects** | `assets/images/projects/project-cat-c15-peterbilt.jpg` | Peterbilt 389 Cat C15 in-frame rebuild project |
| **Projects** | `assets/images/projects/project-ram-heavy-tow.jpg` | Ram 2500 heavy tow rig suspension upgrade project |
| **Blog** | `assets/images/blog/diesel-injector-failure-guide.jpg` | Fuel injector nozzle wear and carbon analysis |
| **Blog** | `assets/images/blog/turbocharger-replacement-inspection.jpg` | VGT unison ring and compressor wheel inspection |
| **Blog** | `assets/images/blog/diesel-engine-overheating-causes.jpg` | Cooling fan clutch and radiator thermal inspection |
| **Blog** | `assets/images/blog/work-truck-preventive-maintenance.jpg` | 50-point digital inspection of commercial work truck |
| **Blog** | `assets/images/blog/diesel-diagnostic-trouble-codes.jpg` | Electronic scanner displaying J1939 fault codes |
| **Blog** | `assets/images/blog/commercial-fleet-uptime-planning.jpg` | Fleet management scheduling and truck bays |
| **Blog** | `assets/images/blog/diesel-transmission-failure-signs.jpg` | Automatic transmission torque converter examination |
| **Blog** | `assets/images/blog/diesel-performance-upgrades-guide.jpg` | Dynamometer telemetry and ECU tuning software |
| **Team** | `assets/images/team/team-master-tech.jpg` | Cole Vance - Lead Master Diesel Technician |
| **Team** | `assets/images/team/team-performance-tuner.jpg` | Garrett Miller - Forced Induction & Dyno Lead |
| **Team** | `assets/images/team/team-diagnostics-lead.jpg` | Darren Hayes - CAN Bus & Emissions Specialist |
| **Team** | `assets/images/team/team-fleet-director.jpg` | Marcus Reid - Commercial Fleet Operations Director |
| **About** | `assets/images/about/about-workshop-interior.jpg` | Panoramic view of 12-bay repair garage |
| **About** | `assets/images/about/about-dyno-cell.jpg` | SuperFlow chassis dynamometer cell |
| **About** | `assets/images/about/about-precision-lab.jpg` | Fuel injection clean-room calibration facility |

---

## 7. Interactive Features & Customization Guide

### Dark Mode & Light Mode System ([`assets/js/theme.js`](assets/js/theme.js))
- Defaults to Dark Mode (industrial workshop aesthetic).
- Respects system preferences via `window.matchMedia('(prefers-color-scheme: light)')`.
- Saves user preference to `localStorage.getItem('titan_theme')`.
- Zero theme flash on initial load.

### Full LTR / RTL Support ([`assets/js/rtl.js`](assets/js/rtl.js) & [`assets/css/rtl.css`](assets/css/rtl.css))
- One-click direction toggle button in header.
- Toggles `dir="rtl"` and `lang="ar"` on `<html>`.
- Saves state to `localStorage.getItem('titan_direction')`.
- Inverts directional chevrons, icons, badge positioning, dropdown menus, and sidebar alignments.

### Form Validation & Anti-Duplicate Protection ([`assets/js/forms.js`](assets/js/forms.js))
- Validates full name, email format, phone format, vehicle year (1980–current year + 1), required service, appointment date (must not be in the past), and privacy consent.
- Disables submit buttons during simulated transmission with a spinner to prevent accidental double-submits.
- Injects a styled industrial toast alert confirming simulated booking.

---

## 8. Local Setup & Testing

This is a pure frontend template requiring no build steps, Node packages, or backend server:

1. **Direct Browser Open:** Simply double-click [`index.html`](index.html) to view in any modern browser.
2. **Local HTTP Server (Optional):**
   ```bash
   # Using Python 3
   python -m http.server 8080

   # Or using Node npx
   npx serve .
   ```
3. **Automated QA Validation Suite:**
   Run the included verification script:
   ```bash
   node scratch/test-site.js
   ```

---

## 9. Known Frontend-Only Limitations

- **Simulated Form Submission:** Forms feature comprehensive client-side validation and interactive toast alerts. However, because this is a frontend-only template, form submissions are demonstrations and do not send real emails or write to a database. For production deployment, connect form `action` endpoints to a backend API, Formspree, EmailJS, or workshop CRM.
- **Dynamic URL Parameters:** The dynamic detail templates (`service-details.html?id=...`, `blog-details.html?id=...`, `project-details.html?id=...`) rely on client-side JavaScript to read URL query parameters and populate content from the data repositories. If opened via static file protocols in very old legacy browsers without JavaScript enabled, standard noscript styling applies.

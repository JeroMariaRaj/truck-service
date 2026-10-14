/* ==========================================================================
   TITAN DIESEL - CLIENT-SIDE FORM VALIDATION & INTERACTION
   Accessible Validation, Anti-Duplicate Submission, Centered Modals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Helper: Display floating industrial toast
  function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container-custom');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container-custom';
      document.body.appendChild(container);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast show toast-industrial p-3 mb-2';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    const icon = type === 'success' ? 'bi-check-circle-fill text-accent' : 'bi-exclamation-triangle-fill text-danger';
    const title = type === 'success' ? 'Workshop Dispatch System' : 'Validation Alert';

    toastEl.innerHTML = `
      <div class="d-flex align-items-start gap-2">
        <i class="bi ${icon} fs-5 mt-1"></i>
        <div class="flex-grow-1">
          <strong class="d-block mb-1 text-uppercase font-heading" style="font-size: 0.9rem;">${title}</strong>
          <div style="font-size: 0.85rem; line-height: 1.4;">${message}</div>
        </div>
        <button type="button" class="btn-close btn-close-white ms-auto" aria-label="Close" style="font-size: 0.75rem;"></button>
      </div>
    `;

    container.appendChild(toastEl);

    const closeBtn = toastEl.querySelector('.btn-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        toastEl.remove();
      });
    }

    setTimeout(() => {
      if (toastEl.parentNode) {
        toastEl.classList.remove('show');
        setTimeout(() => toastEl.remove(), 300);
      }
    }, 6000);
  }

  // Generic Field Validator Helper
  function validateField(field, condition, message) {
    if (!field) return true;
    const parent = field.parentElement;
    const feedback = parent.querySelector('.form-feedback-error');
    if (!condition) {
      field.classList.add('is-invalid');
      field.setAttribute('aria-invalid', 'true');
      if (feedback) feedback.textContent = message;
      return false;
    } else {
      field.classList.remove('is-invalid');
      field.removeAttribute('aria-invalid');
      if (feedback) feedback.textContent = '';
      return true;
    }
  }

  // ==========================================================================
  // 1. BOOK A SERVICE POPUP MODAL (CENTERED POPUP WITH VALIDATION & RECEIPT)
  // ==========================================================================
  function ensureServiceModalHTML() {
    if (document.getElementById('serviceBookingModal')) return;

    const modalHTML = `
    <div class="modal fade" id="serviceBookingModal" tabindex="-1" aria-labelledby="serviceBookingModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content shadow-lg border-secondary">
          <div class="modal-header booking-modal-header bg-subtle border-secondary px-4 py-3">
            <div class="booking-modal-heading d-flex align-items-center gap-2">
              <img class="brand-mark" src="assets/images/branding/titan-diesel-mark.svg" alt="Titan Diesel logo" width="32" height="32">
              <div class="booking-modal-copy">
                <h5 class="modal-title font-heading mb-0" id="serviceBookingModalLabel">Book a Diesel Service Appointment</h5>
                <span class="small font-mono text-muted" style="font-size: 0.78rem;">Heavy-Duty Diagnostics, Engine Repair, Turbo &amp; PM Bay Scheduling</span>
              </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 p-md-5">
            <!-- Service Form Container -->
            <div id="serviceFormContainer">
              <div class="booking-modal-status p-3 rounded bg-subtle border border-secondary mb-4">
                <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <span class="badge bg-secondary border border-secondary text-accent font-mono">
                    <i class="bi bi-wrench-adjustable me-1"></i> Active Bay Dispatch
                  </span>
                  <span class="booking-modal-credential small font-mono text-secondary">
                    <i class="bi bi-shield-check me-1"></i> ASE Certified Master Techs &bull; 2-Yr Warranty
                  </span>
                </div>
              </div>

              <form id="serviceBookingModalForm" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="serviceFullName">Full Name *</label>
                    <input type="text" id="serviceFullName" name="service_name" class="form-control" placeholder="e.g. Brad Thornton" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="serviceEmail">Email Address *</label>
                    <input type="email" id="serviceEmail" name="service_email" class="form-control" placeholder="e.g. brad@thorntonhaul.demo" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="servicePhone">Phone Number *</label>
                    <input type="tel" id="servicePhone" name="service_phone" class="form-control" placeholder="e.g. (555) 234-5678" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="serviceVehicle">Vehicle Year, Make &amp; Engine *</label>
                    <input type="text" id="serviceVehicle" name="service_vehicle" class="form-control" placeholder="e.g. 2021 Ford F-350 6.7L diesel" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-12">
                    <label class="form-label font-heading text-uppercase small" for="serviceSelect">Service Category *</label>
                    <select id="serviceSelect" name="service_type" class="form-select" required>
                      <option value="">-- Choose Service --</option>
                      <option value="Diesel Engine Diagnostics & CAN Bus Analysis">Diesel Diagnostics / CAN Bus</option>
                      <option value="Heavy-Duty Engine Repair & Precision Rebuilding">Heavy-Duty Engine Repair</option>
                      <option value="Turbocharger Repair, Actuator & Compound Upgrades">Turbo / Compound Upgrades</option>
                      <option value="High-Pressure Common Rail Injectors & Fuel Pumps">Common Rail Fuel System</option>
                      <option value="Heavy-Duty Transmission & Allison Drivetrain">Heavy-Duty Transmission</option>
                      <option value="DPF, DOC, DEF & Emissions Kiln Thermal Baking">DPF / DEF Service</option>
                      <option value="Cooling System, Radiator & EGR Cooler Overhaul">Cooling, Radiator &amp; EGR Repair</option>
                      <option value="Preventive Maintenance (PM) & 50-Point DOT Inspection">PM / DOT Inspection</option>
                      <option value="Diesel Performance Upgrades & Dyno Tuning">Performance / Dyno Tuning</option>
                      <option value="Commercial Fleet Scheduled PM & Annual Inspection">Fleet Maintenance / PM</option>
                      <option value="Emergency Breakdown / Active Derate Roadside Triage">Emergency Roadside Repair</option>
                    </select>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="serviceDate">Preferred Appointment Date *</label>
                    <input type="date" id="serviceDate" name="service_date" class="form-control" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="serviceTime">Preferred Time Slot *</label>
                    <select id="serviceTime" name="service_time" class="form-select" required>
                      <option value="Morning: 7:00 AM - 11:00 AM">Morning (7:00 AM – 11:00 AM)</option>
                      <option value="Midday: 11:00 AM - 3:00 PM">Midday (11:00 AM – 3:00 PM)</option>
                      <option value="Late Afternoon: 3:00 PM - 6:00 PM">Late Afternoon (3:00 PM – 6:00 PM)</option>
                      <option value="Night Key-Drop (After Hours)">Night Key-Drop (After Hours 24/7)</option>
                    </select>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-12">
                    <label class="form-label font-heading text-uppercase small" for="serviceSymptoms">Brief Symptom Description / Work Requested</label>
                    <textarea id="serviceSymptoms" name="service_symptoms" class="form-control" rows="3" placeholder="Describe fault symptoms (e.g. white smoke under cold start, DTC code P0087 under towing, rattling turbocharger, PM schedule)..."></textarea>
                  </div>

                  <div class="col-12">
                    <div class="form-check p-3 rounded bg-subtle border border-secondary">
                      <input class="form-check-input ms-0 me-2" type="checkbox" id="serviceConsentCheck" name="service_consent" required>
                      <label class="form-check-label small text-secondary" for="serviceConsentCheck">
                        I authorize Titan Diesel Works to contact me via phone, SMS, or email regarding this repair reservation. I acknowledge this frontend template features live client-side validation for demonstration purposes.
                      </label>
                      <div class="form-feedback-error mt-1"></div>
                    </div>
                  </div>

                  <div class="col-12 mt-4 text-center">
                    <button type="submit" class="btn btn-industrial-primary btn-industrial-lg w-100" id="serviceModalSubmitBtn">
                      <i class="bi bi-calendar-check-fill me-2"></i> Submit Service Reservation
                    </button>
                    <span class="text-muted small font-mono d-block mt-2" style="font-size: 0.75rem;">
                      <i class="bi bi-shield-lock text-accent me-1"></i> Instant bay reservation queue &bull; Advisor confirmation within 60 mins
                    </span>
                  </div>
                </div>
              </form>
            </div>

            <!-- Centered Service Confirmation Receipt -->
            <div id="serviceSuccessContainer" class="d-none text-center py-3">
              <div class="mb-3">
                <i class="bi bi-check-circle-fill text-accent" style="font-size: 4rem;"></i>
              </div>
              <span class="badge bg-secondary border border-secondary text-accent font-mono px-3 py-1 mb-2">
                WORKSHOP BAY #2 RESERVED
              </span>
              <h3 class="font-heading mb-2">Service Appointment Confirmed!</h3>
              <p class="text-secondary small mx-auto mb-4" style="max-width: 500px;">
                Your diesel service request has been logged in the Titan workshop dispatch queue. A service advisor will contact you to confirm bay readiness.
              </p>

              <div class="p-4 rounded bg-subtle border border-secondary text-start mx-auto mb-4" style="max-width: 580px;">
                <div class="d-flex justify-content-between align-items-center border-bottom border-secondary pb-2 mb-3">
                  <span class="font-heading text-uppercase text-muted small">Reservation Code:</span>
                  <strong class="font-mono text-accent fs-5" id="serviceReceiptRefCode">#TDW-SRV-7241</strong>
                </div>
                <div class="row g-2 small">
                  <div class="col-sm-6">
                    <span class="text-muted d-block">Client:</span>
                    <strong class="text-primary-theme" id="serviceReceiptName">Brad Thornton</strong>
                  </div>
                  <div class="col-sm-6">
                    <span class="text-muted d-block">Vehicle:</span>
                    <strong class="text-primary-theme" id="serviceReceiptVehicle">2021 Ford F-350 6.7L</strong>
                  </div>
                  <div class="col-12 pt-2 border-top border-secondary">
                    <span class="text-muted d-block">Service Category:</span>
                    <strong class="text-accent" id="serviceReceiptCategory">Diesel Engine Diagnostics &amp; Computer CAN Bus Analysis</strong>
                  </div>
                  <div class="col-sm-6 pt-2 border-top border-secondary">
                    <span class="text-muted d-block">Reserved Slot:</span>
                    <strong class="text-primary-theme" id="serviceReceiptSlot">Oct 24, 2026 at Morning (7:00 AM)</strong>
                  </div>
                  <div class="col-sm-6 pt-2 border-top border-secondary">
                    <span class="text-muted d-block">Bay Assignment:</span>
                    <strong class="text-primary-theme">Bay 2 (Heavy Rotary Column Lift)</strong>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-wrap justify-content-center gap-3">
                <button type="button" class="btn btn-industrial-primary" data-bs-dismiss="modal">
                  <i class="bi bi-check2-circle me-1"></i> Done &amp; Close
                </button>
                <button type="button" class="btn btn-industrial-secondary" id="serviceResetBtn">
                  <i class="bi bi-arrow-clockwise me-1"></i> Book Another Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  let serviceModalInitialized = false;

  function setupServiceModalLogic() {
    ensureServiceModalHTML();
    if (serviceModalInitialized) return;

    const serviceForm = document.getElementById('serviceBookingModalForm');
    const modalEl = document.getElementById('serviceBookingModal');
    if (!serviceForm || !modalEl) return;
    serviceModalInitialized = true;

    const dateInput = serviceForm.querySelector('#serviceDate');
    if (dateInput) {
      dateInput.min = new Date().toISOString().split('T')[0];
    }

    const formContainer = document.getElementById('serviceFormContainer');
    const successContainer = document.getElementById('serviceSuccessContainer');

    function resetServiceModalToForm() {
      if (formContainer) formContainer.classList.remove('d-none');
      if (successContainer) successContainer.classList.add('d-none');
      serviceForm.reset();
      serviceForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      serviceForm.querySelectorAll('.form-feedback-error').forEach(el => el.textContent = '');
    }

    // Auto reset modal on close so reopening always shows a clean, fresh form
    modalEl.addEventListener('hidden.bs.modal', resetServiceModalToForm);

    serviceForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      const nameInput = serviceForm.querySelector('[name="service_name"]');
      const emailInput = serviceForm.querySelector('[name="service_email"]');
      const phoneInput = serviceForm.querySelector('[name="service_phone"]');
      const vehicleInput = serviceForm.querySelector('[name="service_vehicle"]');
      const serviceSelect = serviceForm.querySelector('[name="service_type"]');
      const dateSelect = serviceForm.querySelector('[name="service_date"]');
      const timeSelect = serviceForm.querySelector('[name="service_time"]');
      const consentCheck = serviceForm.querySelector('[name="service_consent"]');
      const submitBtn = document.getElementById('serviceModalSubmitBtn');

      if (nameInput && !validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name.')) {
        isValid = false;
      }
      if (emailInput && !validateField(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()), 'Please enter a valid email address.')) {
        isValid = false;
      }
      if (phoneInput && !validateField(phoneInput, /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneInput.value.trim()), 'Please enter a valid phone number.')) {
        isValid = false;
      }
      if (vehicleInput && !validateField(vehicleInput, vehicleInput.value.trim().length >= 3, 'Please specify vehicle year, make & engine.')) {
        isValid = false;
      }
      if (serviceSelect && !validateField(serviceSelect, serviceSelect.value !== '', 'Please select a diesel service category.')) {
        isValid = false;
      }
      if (dateSelect && dateSelect.value) {
        const sel = new Date(dateSelect.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (!validateField(dateSelect, sel >= today, 'Appointment date cannot be in the past.')) {
          isValid = false;
        }
      } else if (dateSelect) {
        if (!validateField(dateSelect, false, 'Please choose a preferred appointment date.')) {
          isValid = false;
        }
      }
      if (timeSelect && !validateField(timeSelect, timeSelect.value !== '', 'Please select a time slot.')) {
        isValid = false;
      }
      if (consentCheck && !validateField(consentCheck, consentCheck.checked, 'You must agree to the reservation terms.')) {
        isValid = false;
      }

      if (!isValid) {
        showToast('Please correct the highlighted fields in the Service Reservation form.', 'error');
        const firstInvalid = serviceForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Valid: Transition to Centered Confirmation Receipt
      if (submitBtn) {
        submitBtn.disabled = true;
        const origBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Reserving Service Bay...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origBtnText;

          const refCode = '#TDW-SRV-' + Math.floor(1000 + Math.random() * 9000);

          const receiptRef = document.getElementById('serviceReceiptRefCode');
          const receiptName = document.getElementById('serviceReceiptName');
          const receiptVehicle = document.getElementById('serviceReceiptVehicle');
          const receiptCategory = document.getElementById('serviceReceiptCategory');
          const receiptSlot = document.getElementById('serviceReceiptSlot');

          const clientName = nameInput ? nameInput.value.trim() : 'Valued Customer';
          const clientVehicle = vehicleInput ? vehicleInput.value.trim() : 'Commercial Diesel';
          const clientCategory = serviceSelect ? serviceSelect.value : 'Diesel Service';
          const clientDate = dateSelect && dateSelect.value ? dateSelect.value : '';
          const clientTime = timeSelect && timeSelect.value ? timeSelect.value.split(':')[0] : '';

          if (receiptRef) receiptRef.textContent = refCode;
          if (receiptName) receiptName.textContent = clientName;
          if (receiptVehicle) receiptVehicle.textContent = clientVehicle;
          if (receiptCategory) receiptCategory.textContent = clientCategory;
          if (receiptSlot) receiptSlot.textContent = `${clientDate} • ${clientTime}`;

          // Automatic Form Reset
          serviceForm.reset();
          serviceForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
          serviceForm.querySelectorAll('.form-feedback-error').forEach(el => el.textContent = '');

          // Switch view to the single centered success popup
          if (formContainer) formContainer.classList.add('d-none');
          if (successContainer) successContainer.classList.remove('d-none');
        }, 850);
      }
    });

    // Reset button inside success view
    const resetBtn = document.getElementById('serviceResetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetServiceModalToForm);
    }
  }

  // ==========================================================================
  // 2. BOOK DYNO SESSION POPUP MODAL (CENTERED POPUP WITH VALIDATION & RECEIPT)
  // ==========================================================================
  function ensureDynoModalHTML() {
    if (document.getElementById('dynoBookingModal')) return;

    const modalHTML = `
    <div class="modal fade" id="dynoBookingModal" tabindex="-1" aria-labelledby="dynoBookingModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content shadow-lg border-secondary">
          <div class="modal-header booking-modal-header bg-subtle border-secondary px-4 py-3">
            <div class="booking-modal-heading d-flex align-items-center gap-2">
              <img class="brand-mark" src="assets/images/branding/titan-diesel-mark.svg" alt="Titan Diesel logo" width="32" height="32">
              <div class="booking-modal-copy">
                <h5 class="modal-title font-heading mb-0" id="dynoBookingModalLabel">Book SuperFlow Dyno Session</h5>
                <span class="small font-mono text-muted" style="font-size: 0.78rem;">Chassis Dynamometer Cell #1 &bull; Up to 2,500 LB-FT</span>
              </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 p-md-5">
            <!-- Dyno Form Container -->
            <div id="dynoFormContainer">
              <div class="booking-modal-status p-3 rounded bg-subtle border border-secondary mb-4">
                <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <span class="badge bg-secondary border border-secondary text-accent font-mono">
                    <i class="bi bi-activity me-1"></i> Live Cell Status: Active
                  </span>
                  <span class="booking-modal-credential small font-mono text-secondary">
                    <i class="bi bi-fan me-1"></i> 75,000 CFM Airflow &bull; Real-Time EGT Telemetry
                  </span>
                </div>
              </div>

              <form id="dynoBookingForm" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="dynoFullName">Full Name *</label>
                    <input type="text" id="dynoFullName" name="dyno_name" class="form-control" placeholder="e.g. Cole Vance" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="dynoEmail">Email Address *</label>
                    <input type="email" id="dynoEmail" name="dyno_email" class="form-control" placeholder="e.g. cole@vancehauling.demo" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="dynoPhone">Phone Number *</label>
                    <input type="tel" id="dynoPhone" name="dyno_phone" class="form-control" placeholder="e.g. (555) 345-6789" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="dynoVehicle">Vehicle Year, Model &amp; Engine *</label>
                    <input type="text" id="dynoVehicle" name="dyno_vehicle" class="form-control" placeholder="e.g. 2022 Ram 3500, 6.7L" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label font-heading text-uppercase small" for="dynoPackage">Dyno Session Package *</label>
                    <select id="dynoPackage" name="dyno_package" class="form-select" required>
                      <option value="">-- Choose Dyno Package --</option>
                      <option value="Baseline Power Verification (3 Pulls) - $195">3-Pull Baseline ($195)</option>
                      <option value="SOTF Custom Tow & Street ECM Calibration - $650">Tow / Street Tune ($650)</option>
                      <option value="Compound Turbo & Fuel Injection Dial-In - $1,150">Turbo Dial-In ($1,150)</option>
                      <option value="Heavy Tow Loaded Heat-Cycle Verification - $480">Heavy Tow Heat-Cycle ($480)</option>
                      <option value="Competition / Sled Pull Max-Effort Tuning - $1,400">Competition Tune ($1,400)</option>
                    </select>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-3">
                    <label class="form-label font-heading text-uppercase small" for="dynoDate">Preferred Date *</label>
                    <input type="date" id="dynoDate" name="dyno_date" class="form-control" required>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-md-3">
                    <label class="form-label font-heading text-uppercase small" for="dynoTime">Time Slot *</label>
                    <select id="dynoTime" name="dyno_time" class="form-select" required>
                      <option value="Morning (8:00 AM)">Morning (8:00 AM)</option>
                      <option value="Midday (11:30 AM)">Midday (11:30 AM)</option>
                      <option value="Afternoon (2:30 PM)">Afternoon (2:30 PM)</option>
                      <option value="Evening Slot (5:30 PM)">Evening Slot (5:30 PM)</option>
                    </select>
                    <div class="form-feedback-error"></div>
                  </div>

                  <div class="col-12">
                    <label class="form-label font-heading text-uppercase small" for="dynoMods">Drivetrain &amp; Modifications (Optional)</label>
                    <input type="text" id="dynoMods" name="dyno_mods" class="form-control" placeholder="e.g. Built Allison transmission, S366 turbo, 60% injectors, stock converter...">
                  </div>

                  <div class="col-12">
                    <div class="form-check p-3 rounded bg-subtle border border-secondary">
                      <input class="form-check-input ms-0 me-2" type="checkbox" id="dynoConsentCheck" name="dyno_consent" required>
                      <label class="form-check-label small text-secondary" for="dynoConsentCheck">
                        <strong>Pre-Tie-Down Safety Agreement:</strong> I confirm vehicle fluid levels are topped off, tires have adequate tread rated for roller speeds, and drivetrain has no critical oil leaks.
                      </label>
                      <div class="form-feedback-error mt-1"></div>
                    </div>
                  </div>

                  <div class="col-12 mt-4 text-center">
                    <button type="submit" class="btn btn-industrial-primary btn-industrial-lg w-100" id="dynoSubmitBtn">
                      <i class="bi bi-speedometer2 me-2"></i> Confirm Dyno Session Reservation
                    </button>
                    <span class="text-muted small font-mono d-block mt-2" style="font-size: 0.75rem;">
                      <i class="bi bi-shield-check text-accent me-1"></i> Guaranteed bay lock &bull; Live telemetry graphs included
                    </span>
                  </div>
                </div>
              </form>
            </div>

            <!-- Centered Dyno Confirmation Receipt -->
            <div id="dynoSuccessContainer" class="d-none text-center py-3">
              <div class="mb-3">
                <i class="bi bi-check-circle-fill text-accent" style="font-size: 4rem;"></i>
              </div>
              <span class="badge bg-secondary border border-secondary text-accent font-mono px-3 py-1 mb-2">
                CHASSIS CELL #1 RESERVED
              </span>
              <h3 class="font-heading mb-2">Dyno Session Confirmed!</h3>
              <p class="text-secondary small mx-auto mb-4" style="max-width: 500px;">
                Your session has been logged in the Titan SuperFlow dispatch console. Our calibration engineer will review your modifications before tie-down.
              </p>

              <div class="p-4 rounded bg-subtle border border-secondary text-start mx-auto mb-4" style="max-width: 580px;">
                <div class="d-flex justify-content-between align-items-center border-bottom border-secondary pb-2 mb-3">
                  <span class="font-heading text-uppercase text-muted small">Reservation Code:</span>
                  <strong class="font-mono text-accent fs-5" id="receiptRefCode">#TDW-DYNO-8492</strong>
                </div>
                <div class="row g-2 small">
                  <div class="col-sm-6">
                    <span class="text-muted d-block">Client:</span>
                    <strong class="text-primary-theme" id="receiptName">Brad Thornton</strong>
                  </div>
                  <div class="col-sm-6">
                    <span class="text-muted d-block">Vehicle:</span>
                    <strong class="text-primary-theme" id="receiptVehicle">2021 Ram 3500 6.7L</strong>
                  </div>
                  <div class="col-12 pt-2 border-top border-secondary">
                    <span class="text-muted d-block">Package:</span>
                    <strong class="text-accent" id="receiptPackage">SOTF Custom Tow &amp; Street ECM Calibration ($650)</strong>
                  </div>
                  <div class="col-sm-6 pt-2 border-top border-secondary">
                    <span class="text-muted d-block">Reserved Slot:</span>
                    <strong class="text-primary-theme" id="receiptSlot">Oct 24, 2026 at Morning (8:00 AM)</strong>
                  </div>
                  <div class="col-sm-6 pt-2 border-top border-secondary">
                    <span class="text-muted d-block">Location:</span>
                    <strong class="text-primary-theme">Dyno Cell 1 (Bay 4)</strong>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-wrap justify-content-center gap-3">
                <button type="button" class="btn btn-industrial-primary" data-bs-dismiss="modal">
                  <i class="bi bi-check2-circle me-1"></i> Done &amp; Close
                </button>
                <button type="button" class="btn btn-industrial-secondary" id="dynoResetBtn">
                  <i class="bi bi-arrow-clockwise me-1"></i> Book Another Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  let dynoModalInitialized = false;

  function setupDynoModalLogic() {
    ensureDynoModalHTML();
    if (dynoModalInitialized) return;

    const dynoForm = document.getElementById('dynoBookingForm');
    const modalEl = document.getElementById('dynoBookingModal');
    if (!dynoForm || !modalEl) return;
    dynoModalInitialized = true;

    const dateInput = dynoForm.querySelector('#dynoDate');
    if (dateInput) {
      dateInput.min = new Date().toISOString().split('T')[0];
    }

    const formContainer = document.getElementById('dynoFormContainer');
    const successContainer = document.getElementById('dynoSuccessContainer');

    function resetDynoModalToForm() {
      if (formContainer) formContainer.classList.remove('d-none');
      if (successContainer) successContainer.classList.add('d-none');
      dynoForm.reset();
      dynoForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      dynoForm.querySelectorAll('.form-feedback-error').forEach(el => el.textContent = '');
    }

    // Auto reset modal on close so reopening always shows a clean, fresh form
    modalEl.addEventListener('hidden.bs.modal', resetDynoModalToForm);

    dynoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      const nameInput = dynoForm.querySelector('[name="dyno_name"]');
      const emailInput = dynoForm.querySelector('[name="dyno_email"]');
      const phoneInput = dynoForm.querySelector('[name="dyno_phone"]');
      const vehicleInput = dynoForm.querySelector('[name="dyno_vehicle"]');
      const packageSelect = dynoForm.querySelector('[name="dyno_package"]');
      const dateSelect = dynoForm.querySelector('[name="dyno_date"]');
      const timeSelect = dynoForm.querySelector('[name="dyno_time"]');
      const consentCheck = dynoForm.querySelector('[name="dyno_consent"]');
      const submitBtn = document.getElementById('dynoSubmitBtn');

      if (nameInput && !validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name.')) {
        isValid = false;
      }
      if (emailInput && !validateField(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()), 'Please enter a valid email address.')) {
        isValid = false;
      }
      if (phoneInput && !validateField(phoneInput, /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneInput.value.trim()), 'Please enter a valid phone number.')) {
        isValid = false;
      }
      if (vehicleInput && !validateField(vehicleInput, vehicleInput.value.trim().length >= 3, 'Please specify vehicle year, make & engine.')) {
        isValid = false;
      }
      if (packageSelect && !validateField(packageSelect, packageSelect.value !== '', 'Please select a dyno session package.')) {
        isValid = false;
      }
      if (dateSelect && dateSelect.value) {
        const sel = new Date(dateSelect.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (!validateField(dateSelect, sel >= today, 'Reservation date cannot be in the past.')) {
          isValid = false;
        }
      } else if (dateSelect) {
        if (!validateField(dateSelect, false, 'Please choose a preferred reservation date.')) {
          isValid = false;
        }
      }
      if (timeSelect && !validateField(timeSelect, timeSelect.value !== '', 'Please select a time slot.')) {
        isValid = false;
      }
      if (consentCheck && !validateField(consentCheck, consentCheck.checked, 'You must confirm the pre-tie-down safety agreement.')) {
        isValid = false;
      }

      if (!isValid) {
        showToast('Please correct the highlighted fields in the Dyno Booking form.', 'error');
        const firstInvalid = dynoForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        const origBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Calibrating Dyno Cell Schedule...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origBtnText;

          const refCode = '#TDW-DYNO-' + Math.floor(1000 + Math.random() * 9000);

          const receiptRef = document.getElementById('receiptRefCode');
          const receiptName = document.getElementById('receiptName');
          const receiptVehicle = document.getElementById('receiptVehicle');
          const receiptPkg = document.getElementById('receiptPackage');
          const receiptSlot = document.getElementById('receiptSlot');

          const clientName = nameInput ? nameInput.value.trim() : 'Valued Client';
          const clientVehicle = vehicleInput ? vehicleInput.value.trim() : 'Performance Diesel';
          const clientPkg = packageSelect ? packageSelect.value : 'Dyno Session';
          const clientDate = dateSelect && dateSelect.value ? dateSelect.value : '';
          const clientTime = timeSelect && timeSelect.value ? timeSelect.value : '';

          if (receiptRef) receiptRef.textContent = refCode;
          if (receiptName) receiptName.textContent = clientName;
          if (receiptVehicle) receiptVehicle.textContent = clientVehicle;
          if (receiptPkg) receiptPkg.textContent = clientPkg;
          if (receiptSlot) receiptSlot.textContent = `${clientDate} • ${clientTime}`;

          // Automatic Form Reset
          dynoForm.reset();
          dynoForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
          dynoForm.querySelectorAll('.form-feedback-error').forEach(el => el.textContent = '');

          // Switch view to single centered success popup
          if (formContainer) formContainer.classList.add('d-none');
          if (successContainer) successContainer.classList.remove('d-none');
        }, 850);
      }
    });

    const resetBtn = document.getElementById('dynoResetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetDynoModalToForm);
    }
  }

  // ==========================================================================
  // 3. GLOBAL CLICK INTERCEPTION (OPEN MODALS INSTEAD OF CONTACT PAGE)
  // ==========================================================================
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('button, a');
    if (!trigger) return;

    const text = (trigger.textContent || '').trim().toLowerCase();
    const href = trigger.getAttribute('href') || '';
    const targetModal = trigger.getAttribute('data-bs-target') || '';

    // Check for Service Booking trigger
    const isServiceBooking = 
      targetModal === '#serviceBookingModal' ||
      trigger.classList.contains('btn-book-service') ||
      text.includes('book a service') ||
      text.includes('book service') ||
      text.includes('book diagnostic bay') ||
      text.includes('request service') ||
      text.includes('schedule shop tour or service') ||
      text.includes('book standard scan') ||
      text.includes('book comprehensive scan') ||
      text.includes('request estimate & appointment');

    if (isServiceBooking) {
      e.preventDefault();
      ensureServiceModalHTML();
      setupServiceModalLogic();
      const modalEl = document.getElementById('serviceBookingModal');
      if (modalEl && window.bootstrap && window.bootstrap.Modal) {
        const formContainer = document.getElementById('serviceFormContainer');
        const successContainer = document.getElementById('serviceSuccessContainer');
        if (formContainer && successContainer && !successContainer.classList.contains('d-none')) {
          formContainer.classList.remove('d-none');
          successContainer.classList.add('d-none');
        }
        const modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalEl);
        modalInstance.show();
      }
      return;
    }

    // Check for Dyno Booking trigger
    const isDynoBooking =
      targetModal === '#dynoBookingModal' ||
      trigger.classList.contains('btn-book-dyno') ||
      text.includes('book dyno') ||
      text.includes('dyno session');

    if (isDynoBooking) {
      e.preventDefault();
      ensureDynoModalHTML();
      setupDynoModalLogic();
      const modalEl = document.getElementById('dynoBookingModal');
      if (modalEl && window.bootstrap && window.bootstrap.Modal) {
        const formContainer = document.getElementById('dynoFormContainer');
        const successContainer = document.getElementById('dynoSuccessContainer');
        if (formContainer && successContainer && !successContainer.classList.contains('d-none')) {
          formContainer.classList.remove('d-none');
          successContainer.classList.add('d-none');
        }
        const modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalEl);
        modalInstance.show();
      }
      return;
    }
  });

  // Setup modals immediately on load
  setupServiceModalLogic();
  setupDynoModalLogic();

  // ==========================================================================
  // 4. CONTACT PAGE DISPATCH & ESTIMATE INQUIRY FORM
  // ==========================================================================
  // Modal generator for Contact Form submission popup
  function ensureContactSuccessModalHTML() {
    if (document.getElementById('contactSuccessModal')) return;
    const modalHTML = `
    <div class="modal fade" id="contactSuccessModal" tabindex="-1" aria-labelledby="contactSuccessModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content shadow-lg border-secondary text-center p-4 p-md-5">
          <div class="modal-body p-0">
            <div class="mb-3">
              <i class="bi bi-check-circle-fill text-accent" style="font-size: 3.8rem;"></i>
            </div>
            <span class="badge bg-secondary border border-secondary text-accent font-mono px-3 py-1 mb-2">
              DISPATCH QUEUE LOGGED
            </span>
            <h3 class="font-heading mb-2">Message Dispatched!</h3>
            <p class="text-secondary small mx-auto mb-4" style="max-width: 440px;">
              Thank you, <strong class="text-primary-theme" id="contactSuccessName">Customer</strong>. Your technical inquiry has been routed directly to our Bay 4 service dispatch desk. A certified advisor will review your vehicle symptoms and reply within 60 minutes.
            </p>
            <div class="p-3 rounded bg-subtle border border-secondary d-inline-block font-mono small mb-4">
              <span class="text-muted">Inquiry Reference:</span> <strong class="text-accent" id="contactSuccessRef">#TDW-MSG-8492</strong>
            </div>
            <div>
              <button type="button" class="btn btn-industrial-primary" data-bs-dismiss="modal">
                <i class="bi bi-check2-circle me-1"></i> Done &amp; Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  // Modal generator for Newsletter Subscription popup
  function ensureSubscriptionSuccessModalHTML() {
    if (document.getElementById('subscriptionSuccessModal')) return;
    const modalHTML = `
    <div class="modal fade" id="subscriptionSuccessModal" tabindex="-1" aria-labelledby="subscriptionSuccessModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content shadow-lg border-secondary text-center p-4 p-md-5">
          <div class="modal-body p-0">
            <div class="mb-3">
              <i class="bi bi-envelope-check-fill text-accent" style="font-size: 3.8rem;"></i>
            </div>
            <span class="badge bg-secondary border border-secondary text-accent font-mono px-3 py-1 mb-2">
              TECH DIGEST SUBSCRIBED
            </span>
            <h3 class="font-heading mb-2">Subscription Confirmed!</h3>
            <p class="text-secondary small mx-auto mb-4" style="max-width: 440px;">
              Thank you for subscribing with <strong class="text-primary-theme" id="subscriptionSuccessEmail">user@domain.com</strong>. You'll receive monthly engineering failure analysis case studies, diagnostic DTC guides, and maintenance checklists directly in your inbox.
            </p>
            <div class="p-3 rounded bg-subtle border border-secondary d-inline-block font-mono small mb-4">
              <i class="bi bi-shield-check text-accent me-1"></i> Zero spam &bull; 1-click unsubscribe anytime
            </div>
            <div>
              <button type="button" class="btn btn-industrial-primary" data-bs-dismiss="modal">
                <i class="bi bi-check2-circle me-1"></i> Done &amp; Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const contactForm = document.getElementById('contactDispatchForm');
  if (contactForm) {
    // Pre-fill contact form subject if ?service= query param is present
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
      const subjectSelect = contactForm.querySelector('[name="contact_subject"]');
      if (subjectSelect) {
        if (serviceParam === 'fleet-maintenance') {
          subjectSelect.value = 'Commercial Fleet Maintenance Account';
        } else if (serviceParam.includes('dyno') || serviceParam.includes('performance')) {
          subjectSelect.value = 'High-Output Compound Turbo / Dyno Build';
        } else if (serviceParam.includes('rebuild') || serviceParam.includes('engine')) {
          subjectSelect.value = 'Engine Long-Block Rebuilding Service';
        } else if (serviceParam.includes('transmission')) {
          subjectSelect.value = 'Transmission & Allison Drivetrain Service';
        } else if (serviceParam.includes('diagnostic')) {
          subjectSelect.value = 'Diagnostic Trouble Code / Fault Symptoms';
        }
      }
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      const nameInput = contactForm.querySelector('[name="contact_name"]');
      const emailInput = contactForm.querySelector('[name="contact_email"]');
      const phoneInput = contactForm.querySelector('[name="contact_phone"]');
      const subjectSelect = contactForm.querySelector('[name="contact_subject"]');
      const messageInput = contactForm.querySelector('[name="contact_message"]');
      const consentCheck = contactForm.querySelector('[name="contact_consent"]');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (nameInput && !validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name.')) {
        isValid = false;
      }
      if (emailInput && !validateField(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()), 'Please enter a valid email address.')) {
        isValid = false;
      }
      if (phoneInput && !validateField(phoneInput, /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneInput.value.trim()), 'Please enter a valid phone number.')) {
        isValid = false;
      }
      if (subjectSelect && !validateField(subjectSelect, subjectSelect.value !== '', 'Please select an inquiry category.')) {
        isValid = false;
      }
      if (messageInput && !validateField(messageInput, messageInput.value.trim().length >= 10, 'Please provide message details (at least 10 characters).')) {
        isValid = false;
      }
      if (consentCheck && !validateField(consentCheck, consentCheck.checked, 'Please agree to contact authorization terms.')) {
        isValid = false;
      }

      if (!isValid) {
        showToast('Please correct the highlighted fields in the contact form.', 'error');
        const firstInvalid = contactForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        const origText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Dispatching to Advisors...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;

          const refNum = '#TDW-MSG-' + Math.floor(1000 + Math.random() * 9000);
          const clientName = nameInput ? nameInput.value.trim() : 'Valued Customer';

          // Reset the form cleanly
          contactForm.reset();
          contactForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
          contactForm.querySelectorAll('.form-feedback-error').forEach(el => el.textContent = '');

          // Ensure modal exists and show it
          ensureContactSuccessModalHTML();
          const modalEl = document.getElementById('contactSuccessModal');
          const nameEl = document.getElementById('contactSuccessName');
          const refEl = document.getElementById('contactSuccessRef');
          if (nameEl) nameEl.textContent = clientName;
          if (refEl) refEl.textContent = refNum;

          if (modalEl && window.bootstrap && window.bootstrap.Modal) {
            const modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalEl);
            modalInstance.show();
          }
        }, 850);
      }
    });
  }

  // ==========================================================================
  // 5. NEWSLETTER / TECH DIGEST SUBSCRIPTION FORMS (VALIDATION & POPUP)
  // ==========================================================================
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput) return;

      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let feedback = form.querySelector('.form-feedback-error');
      if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'form-feedback-error mt-1 text-start';
        emailInput.parentElement.appendChild(feedback);
      }

      if (!emailVal) {
        emailInput.classList.add('is-invalid');
        feedback.textContent = 'Please enter your business email address.';
        feedback.style.display = 'block';
        emailInput.focus();
        return;
      }

      if (!emailRegex.test(emailVal)) {
        emailInput.classList.add('is-invalid');
        feedback.textContent = 'Please provide a valid email address (e.g. name@domain.com).';
        feedback.style.display = 'block';
        emailInput.focus();
        return;
      }

      // Valid: clear validation state
      emailInput.classList.remove('is-invalid');
      feedback.textContent = '';
      feedback.style.display = 'none';

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        const origBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span> Subscribing...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origBtnText;

          // Auto reset the form input
          form.reset();

          // Ensure popup modal exists and show it
          ensureSubscriptionSuccessModalHTML();
          const modalEl = document.getElementById('subscriptionSuccessModal');
          const emailDisplay = document.getElementById('subscriptionSuccessEmail');
          if (emailDisplay) emailDisplay.textContent = emailVal;

          if (modalEl && window.bootstrap && window.bootstrap.Modal) {
            const modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalEl);
            modalInstance.show();
          }
        }, 750);
      }
    });

    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput) {
      emailInput.addEventListener('input', function () {
        if (this.classList.contains('is-invalid')) {
          this.classList.remove('is-invalid');
          const feedback = form.querySelector('.form-feedback-error');
          if (feedback) {
            feedback.textContent = '';
            feedback.style.display = 'none';
          }
        }
      });
    }
  });
});

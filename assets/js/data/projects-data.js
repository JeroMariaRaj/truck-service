/* ==========================================================================
   TITAN DIESEL - PROJECTS & CASE STUDIES DATA REPOSITORY
   Realistic Diesel Powertrain Rebuilds & High-Output Performance Builds
   ========================================================================== */

const TITAN_PROJECTS_DATA = {
  "powerstroke-longblock-rebuild": {
    id: "powerstroke-longblock-rebuild",
    title: "2021 Ford F-350 6.7L Powerstroke Precision Long-Block Overhaul",
    category: "engine-rebuild",
    categoryLabel: "Engine Rebuild",
    vehicle: "2021 Ford F-350 Super Duty Dually (6.7L Powerstroke V8 Diesel)",
    clientRequirement: "Hot-shot transport operator running 35,000 lbs GCWR nationwide experienced severe cylinder #8 misfire and heavy crankcase blow-by after 285,000 hard miles. Required a bulletproof, commercial-grade long block built for continuous highway towing.",
    challenge: "Borescope inspection revealed catastrophic injector tip failure on cylinder #8 that torched a 12mm crater directly through the Mahle aluminum piston crown, scoring the compacted graphite iron (CGI) cylinder bore. Furthermore, high cylinder pressures had stretched the factory torque-to-yield head bolts, causing coolant seepage.",
    diagnosticFindings: "Zero compression on cylinder #8 (0 PSI vs 390 PSI baseline on cylinders 1-7). Spectrometric oil sample showed 145 PPM aluminum and 88 PPM iron. Coolant block test verified combustion gas intrusion into the primary cooling circuit.",
    workPerformed: "Full cab-off powertrain extraction. Block was bored +0.020 over and torque-plate diamond honed. Installed forged Mahle ceramic-coated pistons, Carrillo connecting rods, and a dynamically balanced crankshaft. Rebuilt both 32-valve reverse-flow cylinder heads with hardened valve seats and ARP Custom Age 625+ head studs. Upgraded to an OEM dual-fueler lift system and brand-new Bosch remanufactured common rail injectors.",
    componentsInstalled: [
      "Forged Mahle 0.020\" Overbore Pistons with Thermal Barrier Ceramic Crown Coating",
      "ARP Custom Age 625+ High-Tensile Cylinder Head Stud Kit",
      "Victor Reinz Multi-Layer Steel (MLS) High-Boost Cylinder Head Gaskets",
      "Brand-New Bosch Common Rail Fuel Injectors with IQA Code Calibration",
      "Heavy-Duty Cast Aluminum Primary Oil Cooler and Water Pump Assembly"
    ],
    dynoSpecs: {
      power: "525 WHP",
      torque: "1,140 LB-FT",
      boost: "34 PSI Peak",
      thermal: "Max 1,180°F EGT at Full Load"
    },
    image: "assets/images/projects/project-powerstroke-longblock.jpg",
    gallery: [
      "assets/images/projects/project-powerstroke-longblock.jpg",
      "assets/images/services/heavy-duty-engine-rebuild.jpg",
      "assets/images/services/diesel-engine-diagnostics.jpg"
    ],
    outcome: "After controlled engine dyno break-in and road calibration, the F-350 logged over 1,100 lb-ft of clean, usable low-end torque. Exhaust gas temperatures dropped 180°F under max trailer weight. Delivered on schedule with zero blow-by and our 2-Year / 24,000-Mile Heavy Powertrain Warranty."
  },

  "cummins-compound-turbo-build": {
    id: "cummins-compound-turbo-build",
    title: "2019 Ram 3500 6.7L Cummins 850 HP Compound Turbo & Fuel System",
    category: "performance",
    categoryLabel: "Performance & Boost",
    vehicle: "2019 Ram 3500 Laramie Megacab (6.7L High-Output Cummins Turbo Diesel)",
    clientRequirement: "Owner wanted an uncompromising dual-purpose truck: capable of towing a 22,000-lb gooseneck horse trailer through high-altitude Colorado passes on weekdays, while putting down 800+ wheel horsepower at weekend truck-pull and dyno events.",
    challenge: "The factory single Holset HE351VE variable-geometry turbo produced excessive backpressure (over 65 PSI drive pressure at 4,000 RPM) and dangerously high EGTs exceeding 1,450°F when attempting to push beyond 550 HP on stock fueling.",
    diagnosticFindings: "Pre-upgrade dyno baseline recorded 410 WHP and 880 LB-FT of torque. The factory CP4.2 high-pressure pump showed early signs of metal friction dust in the metering valve, requiring immediate replacement before catastrophic fuel rail contamination.",
    workPerformed: "Installed a custom engineered compound turbocharger system utilizing a high-spool BorgWarner S362 SX-E over a large atmospheric BorgWarner S475. Converted the fuel system from CP4 to a bulletproof Bosch CP3 with a Fleece stroker CP3 pump and 60% over Dynomite Diesel injectors. Installed FASS Titanium 165 GPH lift pump with dual fuel sumps. Tuned on our chassis dyno with custom EFI Live switch-on-the-fly multi-position maps.",
    componentsInstalled: [
      "Titan Custom Compound Turbo Kit: BorgWarner S362 SX-E / BorgWarner S475 Billet",
      "Steed Speed T4 CNC Billet Steel Exhaust Manifold",
      "Fleece Performance CP4 to CP3 Conversion Kit with 10mm High-Flow CP3",
      "Dynomite Diesel Products +60% Common Rail Injector Nozzles",
      "FASS Titanium Signature Series 165 GPH Fuel Air Separation System",
      "Mishimoto Heavy-Duty Bar-and-Plate Charge Air Cooler"
    ],
    dynoSpecs: {
      power: "848 WHP",
      torque: "1,620 LB-FT",
      boost: "68 PSI Compound",
      thermal: "Max 1,220°F EGT at 850 HP Pull"
    },
    image: "assets/images/projects/project-cummins-compound-turbo.jpg",
    gallery: [
      "assets/images/projects/project-cummins-compound-turbo.jpg",
      "assets/images/services/turbocharger-performance-upgrade.jpg",
      "assets/images/services/diesel-performance-upgrades.jpg"
    ],
    outcome: "The compound system spools off idle instantly for heavy hauling (Position 1: 520 HP Heavy Tow), while dialing up to 848 wheel horsepower on Position 5. Towing EGTs stay under 1,150°F even on steep 7% highway grades."
  },

  "duramax-allison-transmission-build": {
    id: "duramax-allison-transmission-build",
    title: "2022 Chevy Silverado 3500HD Allison 10-Speed Billet Rebuild",
    category: "transmission",
    categoryLabel: "Drivetrain",
    vehicle: "2022 Chevrolet Silverado 3500HD High Country (6.6L Duramax L5P Diesel)",
    clientRequirement: "Heavy commercial construction contractor towing heavy earthmoving equipment experienced severe transmission shift slipping between 4th and 6th gear, followed by TCM limp mode lock in 3rd gear.",
    challenge: "Disassembly of the Allison 10-speed transmission revealed friction plate glazing and overheated clutch steels in the C3 and C4 multi-disc clutch packs. Heavy trailer tongue loads and high line temperatures had burned the factory transmission fluid.",
    diagnosticFindings: "TCM code P0734 (Gear 4 Incorrect Ratio) and P0741 (Torque Converter Clutch Circuit Performance/Stuck Off). Line pressure telemetry showed hydraulic pressure bleeding from 185 PSI down to 125 PSI during lockup transitions.",
    workPerformed: "Full transmission removal and chemical hot-tank teardown. Installed a billet torque converter with triple-disc ceramic-metallic friction surfaces, Raybestos GPZ high-energy clutch packs, precision-machined billet apply pistons, and an upgraded high-capacity hydraulic valve body. Added an auxiliary front-mounted stacked-plate transmission cooler and high-capacity finned aluminum pan.",
    componentsInstalled: [
      "Titan Billet Triple-Disc Low-Stall Heavy-Duty Torque Converter",
      "Raybestos GPZ Extreme Commercial Clutch Module & Steel Pack",
      "Billet Steel Heavy-Duty Input Shaft & Intermediate Shaft",
      "TransGo High-Pressure Valve Body Upgrade Kit",
      "Derale Hyper-Cool Remote Fluid Cooler with Electric Thermostatic Fan",
      "Mag-Hytec Extra-Deep Cast Aluminum Transmission Pan"
    ],
    dynoSpecs: {
      power: "Rated for 950+ HP",
      torque: "Rated for 1,800 LB-FT",
      boost: "N/A (Drivetrain)",
      thermal: "Transmission fluid stays under 178°F"
    },
    image: "assets/images/projects/project-duramax-allison.jpg",
    gallery: [
      "assets/images/projects/project-duramax-allison.jpg",
      "assets/images/services/transmission-drivetrain-repair.jpg",
      "assets/images/services/commercial-fleet-maintenance.jpg"
    ],
    outcome: "Shift transitions are crisp, instantaneous, and positive under maximum gross trailer weight. Transmission operating temperatures now run 40°F cooler under loaded summer hauling conditions."
  },

  "freightliner-fleet-maintenance-overhaul": {
    id: "freightliner-fleet-maintenance-overhaul",
    title: "Commercial Freightliner M2-106 Fleet Uptime & DPF Overhaul (12 Units)",
    category: "fleet",
    categoryLabel: "Commercial Fleet",
    vehicle: "Fleet of 12 Freightliner M2-106 Medium-Duty Trucks (Cummins B6.7 / Allison 2500 RDS)",
    clientRequirement: "Regional logistics distributor was losing $12,000 per week to repeated DPF soot warnings, DEF dosing derates, and roadside breakdowns across their 12-truck local delivery fleet.",
    challenge: "Stop-and-go urban route driving prevented the diesel exhaust system from reaching the 650°F temperatures required for passive regeneration. DPF differential pressure sensors were clogged, and DEF injectors were heavily encrusted with crystallized urea.",
    diagnosticFindings: "All 12 trucks exhibited DPF backpressure readings 300% above OEM maximum clean thresholds. Four vehicles were within 25 miles of the 5 MPH speed derate countdown. NOx conversion efficiency averaged only 62%.",
    workPerformed: "Enacted our Rapid Fleet Turnaround protocol: 2 trucks serviced per night to eliminate route disruption. Removed all 12 DPF filters for pneumatic pulse de-ashing and 12-hour 1,100°F thermal kiln baking. De-crystallized DEF dosing systems, replaced differential pressure sensor tubes, and flashed Cummins ECM updates with optimized active regeneration timing. Performed complete annual Federal DOT safety inspections.",
    componentsInstalled: [
      "12 Restored & Flow-Bench Certified OEM DPF Canisters with Clean Flow Certs",
      "New OEM Stainless Steel Pressure Differential Sensor Tubes & Hoses",
      "High-Purity API Certified Diesel Exhaust Fluid System Top-Off & Filters",
      "Full Synthetic Heavy-Duty Shell Rotella T6 Engine Oil & Fleetguard Filters",
      "Official FMCSA Annual Federal Inspection Decals & Documentation"
    ],
    dynoSpecs: {
      power: "Factory 260 HP Spec",
      torque: "660 LB-FT",
      boost: "Restored OEM 28 PSI",
      thermal: "DPF Flow Efficiency Restored to 98.4%"
    },
    image: "assets/images/projects/project-freightliner-fleet.jpg",
    gallery: [
      "assets/images/projects/project-freightliner-fleet.jpg",
      "assets/images/services/commercial-fleet-maintenance.jpg",
      "assets/images/services/diesel-emissions-dpf-diagnostics.jpg"
    ],
    outcome: "Zero emissions derate events recorded across all 12 vehicles in the subsequent 6 months of delivery operations. Fleet fuel consumption decreased by 7.8% due to properly breathing exhaust systems and reduced forced regeneration cycles."
  },

  "cat-c15-heavy-haul-inframe": {
    id: "cat-c15-heavy-haul-inframe",
    title: "Peterbilt 389 Cat C15 6NZ In-Frame Heavy Haul Engine Rebuild",
    category: "engine-rebuild",
    categoryLabel: "Heavy Haul Rebuild",
    vehicle: "Peterbilt 389 Extended Hood (Caterpillar C15 6NZ 15.2L Inline-6 Diesel)",
    clientRequirement: "Owner-operator pulling oversize 120,000-lb lowboy heavy equipment noticed copper metal flakes in the oil filter and high crankcase oil consumption (1 gallon per 1,200 miles) at 940,000 original engine miles.",
    challenge: "The Cat C15 6NZ is a legendary heavy haul engine, but nearly a million miles of heavy load had worn cylinder liner crosshatch smooth, causing severe oil blow-by. Upper rod bearing bronze backing was beginning to flake, threatening crankshaft journal scoring.",
    diagnosticFindings: "Spectrometric oil analysis showed copper at 85 PPM (extreme bearing wear). Relative compression test revealed a 24% loss on cylinders #3 and #5. Crankcase blow-by measured 1,800 cubic inches per minute (OEM limit: 1,200 in³/min).",
    workPerformed: "Conducted precision in-frame rebuild with the block remaining in the chassis. Dropped the heavy cast oil pan, pulled all 6 cylinder packs, and cleaned water jackets. Cut upper counterbores to perfect depth using a precision portable boring bar. Installed genuine Caterpillar heavy-duty steel cylinder liners, one-piece forged steel pistons, new wrist pins, rod bearings, and main bearings. Rebuilt cylinder head with new Cat valves, springs, and rotators. Re-shimmed overhead valvetrain.",
    componentsInstalled: [
      "Genuine Caterpillar C15 Platinum Overhaul Cylinder Pack Kit",
      "Forged Steel Monotherm One-Piece Heavy-Duty Pistons & Rings",
      "Cat Hardened Cylinder Liners with Custom Counterbore Shims",
      "Tri-Metal Heavy-Duty Rod and Main Bearings with Micro-Groove Lubrication",
      "Remanufactured Cat Twin-Turbo Cylinder Head with Inconel Exhaust Valves",
      "New High-Flow Heavy-Duty Oil Pump and Oil Cooler Core"
    ],
    dynoSpecs: {
      power: "625 HP (Brake)",
      torque: "2,050 LB-FT at 1,200 RPM",
      boost: "38 PSI Steady",
      thermal: "Crankcase Blow-by reduced to 420 in³/min"
    },
    image: "assets/images/projects/project-cat-c15-peterbilt.jpg",
    gallery: [
      "assets/images/projects/project-cat-c15-peterbilt.jpg",
      "assets/images/services/heavy-duty-engine-rebuild.jpg",
      "assets/images/services/diesel-preventive-maintenance.jpg"
    ],
    outcome: "Oil consumption dropped from 1 gallon per 1,200 miles to zero noticeable consumption between 15,000-mile service intervals. Blow-by reduced by 76%. The truck resumed heavy haul duties with another million-mile lifespan ahead."
  },

  "ram-2500-heavy-tow-performance": {
    id: "ram-2500-heavy-tow-performance",
    title: "2023 Ram 2500 Cummins Extreme Towing Thermals & Suspension Upgrade",
    category: "performance",
    categoryLabel: "Towing & Suspension",
    vehicle: "2023 Ram 2500 Crew Cab 4x4 (6.7L Cummins Turbo Diesel)",
    clientRequirement: "Equipped for commercial livestock transport across desert climates (110°F+ ambient). Experienced severe rear-end squat, brake fade on 8% highway descents, and cooling fan roar under heavy 18,000 lb gooseneck trailers.",
    challenge: "Factory rear coil spring suspension lacked progressive spring rate under 3,800-lb pin weight, unloading the front steering axle and causing dangerous high-speed highway wander. The factory radiator and transmission cooler struggled during 115°F desert hill climbs.",
    diagnosticFindings: "Rear suspension sag measured 4.25 inches with gooseneck attached, creating positive front camber and loss of steering stability. Transmission temperatures peaked at 228°F and coolant peaked at 222°F during 10-mile grade climbs.",
    workPerformed: "Installed Firestone Heavy-Duty 5,000-lb air helper springs with an on-board dual-path wireless air compressor system to level the truck at any payload. Upgraded front and rear brake rotors to cryogenic-treated slotted rotors with severe-duty ceramic pads. Installed a Mishimoto all-aluminum high-capacity radiator and high-flow thermal transmission bypass valve to maximize fluid cooling flow.",
    componentsInstalled: [
      "Firestone Ride-Rite 5,000 lb Heavy-Duty Air Helper Spring System",
      "Air Lift WirelessOne On-Board Air Compressor with Digital Remote Control",
      "Power Stop Z36 Extreme Truck & Tow Carbon-Fiber Ceramic Brake Kits",
      "Cryogenic-Treated Slotted Brake Rotors (Front & Rear Axles)",
      "Mishimoto Performance Heavy-Duty Aluminum Radiator",
      "RevMax High-Flow Billet Transmission Thermostatic Bypass Valve"
    ],
    dynoSpecs: {
      power: "420 WHP Tow Map",
      torque: "980 LB-FT",
      boost: "32 PSI Tow Profile",
      thermal: "Max Trans Temp: 182°F in 110°F Heat"
    },
    image: "assets/images/projects/project-ram-heavy-tow.jpg",
    gallery: [
      "assets/images/projects/project-ram-heavy-tow.jpg",
      "assets/images/services/diesel-cooling-radiator-repair.jpg",
      "assets/images/services/diesel-performance-upgrades.jpg"
    ],
    outcome: "Rear squat completely eliminated, restoring factory front axle steering geometry and eliminating wind buffeting wander. Braking stopping distances under 18,000-lb load shortened by 38 feet with zero brake fade."
  },

  "tacoma-diesel-overland": {
    id: "tacoma-diesel-overland",
    title: "Toyota Tacoma 2.8L Turbo Diesel Overland & Expedition Conversion",
    category: "performance",
    categoryLabel: "Overland Conversion",
    vehicle: "2021 Toyota Tacoma TRD Off-Road (Custom 2.8L Common-Rail Turbo Diesel)",
    clientRequirement: "Expedition outfitter needed extreme low-RPM crawling torque and extended 750-mile fuel range for backcountry overland routes across Utah and Colorado high passes without sacrificing highway cruising efficiency.",
    challenge: "The factory V6 gasoline engine lacked low-end towing torque and consumed excessive fuel under 7,500 lbs of expedition gear, rooftop tent, and steel armor. Engine bay space constraints required custom-fabricated intercooler piping and motor mounts.",
    diagnosticFindings: "Pre-swap gasoline dyno showed peak torque only above 4,600 RPM. High-altitude highway towing caused constant transmission gear hunting between 4th and 6th gear with oil temperatures reaching 242°F.",
    workPerformed: "Extracted factory gasoline powertrain. Fabricated precision CNC laser-cut motor mounts and integrated a 2.8L common-rail turbo diesel powerplant with standalone Bosch Motorsport ECM. Installed high-efficiency bar-and-plate front-mount intercooler, custom 3-inch mandrel-bent stainless exhaust, dual-battery auxiliary system, and an integrated 45-gallon extended range fuel cell. Calibrated dyno tow-and-crawl profiles.",
    componentsInstalled: [
      "Custom 2.8L Common-Rail Direct-Injection 4-Cylinder Turbo Diesel",
      "Garrett Variable-Geometry Turbocharger with Billet Compressor Wheel",
      "Titan Custom Front-Mount Bar-and-Plate Aluminum Intercooler",
      "FASS 100 GPH Diesel Fuel Lift System & Filtration Kit",
      "Titan Heavy-Duty High-Capacity Aluminum Radiator with Dual Electric Fans",
      "Long-Range America 45-Gallon Heavy-Duty Auxiliary Poly Fuel Cell"
    ],
    dynoSpecs: {
      power: "285 WHP",
      torque: "540 LB-FT @ 1,800 RPM",
      boost: "28 PSI Peak",
      thermal: "Max 1,080°F EGT under Sustained Grade Pull"
    },
    image: "assets/images/projects/project-powerstroke-longblock.jpg",
    gallery: [
      "assets/images/projects/project-powerstroke-longblock.jpg",
      "assets/images/services/diesel-performance-upgrades.jpg",
      "assets/images/services/heavy-duty-engine-rebuild.jpg"
    ],
    outcome: "Expedition range increased from 320 miles to over 780 miles per tank. Low-end torque increased by 110%, allowing smooth rock crawling at idle speeds. Highway fuel economy improved to 27 MPG under full expedition load."
  },

  "scania-r500-heavy-haul": {
    id: "scania-r500-heavy-haul",
    title: "Commercial Scania R500 13.0L Heavy Haul Interstate Powertrain Rebuild",
    category: "fleet",
    categoryLabel: "Commercial Fleet",
    vehicle: "Scania R-Series 500 V8 / 13.0L Heavy Interstate Hauler",
    clientRequirement: "Long-haul interstate transport fleet operating continuous 1,200-mile runs experienced elevated blow-by, cylinder balance faults, and sudden turbo boost drop on long highway mountain grades.",
    challenge: "Excessive carbon build-up in variable-vane nozzle ring and degraded common-rail fuel return seals were causing fuel dilution in engine oil and derates under max 80,000-lb GCWR load.",
    diagnosticFindings: "Cylinder #4 and #6 balance rates exceeded +4.8 mm³/stroke. High-pressure common rail pressure dropped 220 bar under full acceleration. Oil analysis indicated 4.2% diesel fuel dilution.",
    workPerformed: "Full in-chassis commercial overhaul. Replaced all high-pressure common rail fuel injectors with factory flow-matched Bosch units. Installed remanufactured twin-scroll turbocharger with upgraded Inconel turbine wheel. Ultrasonic cleaned SCR dosing module, flushed intercooler core, and performed dynamometer continuous-load break-in calibration.",
    componentsInstalled: [
      "Factory Flow-Matched Bosch Common Rail High-Pressure Injectors",
      "Holset Remanufactured Twin-Scroll Turbocharger with Ceramic Coatings",
      "OEM Scania High-Efficiency Engine Oil Cooler & Water Pump Assembly",
      "Ultrasonic Cleaned & Flown DPF Filter with New Differential Pressure Tubes",
      "Fleetguard Severe-Duty Air and Fuel Separation Filters"
    ],
    dynoSpecs: {
      power: "500 HP",
      torque: "1,880 LB-FT (2,550 NM) @ 1,000–1,350 RPM",
      boost: "36 PSI Continuous",
      thermal: "Cylinder Delta Temperatures Normalized within 18°F"
    },
    image: "assets/images/projects/project-cummins-compound-turbo.jpg",
    gallery: [
      "assets/images/projects/project-cummins-compound-turbo.jpg",
      "assets/images/services/commercial-fleet-maintenance.jpg",
      "assets/images/services/diesel-fuel-injection-service.jpg"
    ],
    outcome: "Fuel economy improved by 6.4%, saving over $950/month in diesel fuel per truck. Power delivery is smooth and linear across the entire RPM band with zero highway derates recorded over 85,000 subsequent miles."
  },

  "freight-mountain-overhaul": {
    id: "freight-mountain-overhaul",
    title: "Mountain Route Logistics Freight Truck Severe-Duty DPF & Turbo Overhaul",
    category: "fleet",
    categoryLabel: "Fleet Logistics",
    vehicle: "Commercial Logistics Freight Delivery Truck (Cummins ISB 6.7L Powertrain)",
    clientRequirement: "Regional distribution truck running daily high-altitude mountain delivery routes experienced chronic DPF soot clogging and loss of hill-climbing power under full 26,000 lb GVWR load.",
    challenge: "High altitude (9,000+ ft) combined with steep 7-8% mountain grades caused excessive exhaust gas temperatures, resulting in repeated DEF dosing crystallization and soot plugging in the particulate filter.",
    diagnosticFindings: "DPF differential backpressure was 4.2x above factory allowable limit. Turbocharger VGT actuator position error active. NOx sensors were fouled with heavy soot glaze.",
    workPerformed: "Pneumatic pulse cleaned and 1,100°F kiln baked the DPF canister, restoring 99.4% original factory flow. Replaced VGT turbo actuator and re-indexed unison ring. Installed upgraded multi-ply silicone boost couplers and flashed Cummins high-altitude mountain mapping.",
    componentsInstalled: [
      "Kiln-Baked & Flow-Certified OEM Diesel Particulate Filter (DPF)",
      "New Cummins Electronic VGT Turbocharger Actuator Kit",
      "Heavy-Duty Multi-Ply Aramid Reinforced Silicone Turbo Hoses",
      "Brand-New Continental OEM NOx Sensors (Upstream and Downstream)",
      "High-Flow Stainless Steel DEF Dosing Injector Assembly"
    ],
    dynoSpecs: {
      power: "360 HP Mountain Profile",
      torque: "1,150 LB-FT",
      boost: "34 PSI Altitude-Compensated",
      thermal: "DPF Flow Efficiency Restored to 99.4%"
    },
    image: "assets/images/projects/project-freightliner-fleet.jpg",
    gallery: [
      "assets/images/projects/project-freightliner-fleet.jpg",
      "assets/images/services/commercial-fleet-maintenance.jpg",
      "assets/images/services/diesel-cooling-radiator-repair.jpg"
    ],
    outcome: "Zero forced regens or check engine warnings in subsequent 6 months of daily mountain service. Hill climbing speed on steep 7% grades increased by 14 MPH under full load."
  }
};

window.TITAN_PROJECTS_DATA = TITAN_PROJECTS_DATA;

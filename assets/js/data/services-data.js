/* ==========================================================================
   TITAN DIESEL - SERVICES DATA REPOSITORY
   Authentic Heavy-Duty & Diesel Performance Technical Content
   ========================================================================== */

const TITAN_SERVICES_DATA = {
  "engine-diagnostics": {
    id: "engine-diagnostics",
    title: "Diesel Engine Diagnostics & CAN Bus Telemetry",
    tagline: "Pinpoint Electronic, Hydraulic & Mechanical Engine Faults",
    category: "diagnostics",
    categoryLabel: "Diagnostics & Electronics",
    image: "assets/images/services/diesel-engine-diagnostics.jpg",
    estDuration: "1.5 – 3 Hours",
    estCost: "$185 – $320 (Illustrative Estimate)",
    overview: "Modern heavy-duty diesel engines rely on complex controller area networks (CAN Bus), high-pressure common rail telemetry, and dozens of pulse-width modulated sensors. When an engine derates, stumbles, or throws a MIL lamp, guessing wastes time and thousands in misdiagnosed parts. At Titan Diesel Works, our certified diagnostic specialists leverage OEM-level scan tools (Cummins INSITE, Ford FDRS, GM GDS2, CAT ET, Detroit Diagnostic Link) and laboratory-grade digital oscilloscopes to pinpoint root-cause sensor drift, harness continuity loss, rail pressure dips, and mechanical cylinder compression imbalances.",
    symptoms: [
      "Check engine light or flashing wrench lamp illuminated",
      "Engine derates or enters 'limp home' reduced power mode",
      "Intermittent stalling, extended cranking, or hard cold-start condition",
      "Unexplained black, white, or blue exhaust smoke under load",
      "Hesitation during throttle tip-in or unstable idle surging",
      "CAN Bus communication network faults and spurious sensor codes"
    ],
    diagnosticSteps: [
      "Full ECM/TCM/BCM global fault code scan and live data stream freeze-frame capture",
      "Fuel rail pressure baseline and high-pressure leak-down telemetry logging",
      "Electronic relative cylinder compression test via starter current draw analysis",
      "High-speed dual-channel digital oscilloscope testing of crank/cam sensor synchronicity",
      "Intake boost leak smoke-testing and exhaust backpressure sensor verification"
    ],
    repairSteps: [
      "Physical harness integrity and pin tension inspection at ECM harness disconnects",
      "Component bench testing and resistance calibration per OEM specifications",
      "Software calibration reflash to latest factory engine management revisions",
      "Clear stored codes and perform dynamic dyno-loaded drive cycle verification"
    ],
    inclusions: [
      "Full digital multi-page OEM fault log with live telemetry export",
      "High-pressure rail health report with cylinder-by-cylinder contribution balance",
      "Electrical charging and ground circuit voltage drop test",
      "Technician consultation with transparent parts & labor repair quote"
    ],
    pricingGuidance: "Diagnostic labor starts at a standard flat rate. If specialized teardown or pin-by-pin harness tracing is required, additional diagnostic authorization will be requested beforehand. Diagnostic fees are partially credited toward authorized repairs above $1,200.",
    faqs: [
      {
        q: "Why can't I just use a standard parts-store OBD-II code reader?",
        a: "Basic generic OBD-II scanners only read generic powertrain codes (P0xxx) and cannot access proprietary diesel PID telemetry, cylinder contribution balances, VGT vane position sensors, or secondary bus modules like DEF dosing controllers."
      },
      {
        q: "What does it mean when my diesel truck goes into 'Engine Derate'?",
        a: "Derate is a protective failsafe mode triggered by the ECM when critical parameters—such as exhaust gas temperature, oil pressure, coolant temperature, or emissions SCR failure—exceed safety thresholds to prevent catastrophic engine seizure."
      },
      {
        q: "Do you reflash factory ECM calibrations?",
        a: "Yes. We maintain genuine OEM subscriptions for Ford, GM, Ram/Cummins, Caterpillar, and Detroit Diesel to flash verified factory calibration updates and TSB software fixes."
      }
    ],
    relatedIds: ["fuel-injection", "turbocharger-upgrades", "emissions-dpf"]
  },

  "engine-rebuild": {
    id: "engine-rebuild",
    title: "Heavy-Duty Engine Repair & Precision Rebuilding",
    tagline: "In-Frame & Out-of-Frame Long Block Restoration",
    category: "repair",
    categoryLabel: "Engine Mechanical",
    image: "assets/images/services/heavy-duty-engine-rebuild.jpg",
    estDuration: "5 – 10 Business Days",
    estCost: "$7,500 – $16,000+ (Illustrative Estimate)",
    overview: "When a commercial work truck or high-torque diesel pickup suffers cylinder wash, cracked pistons, dropped valve seats, or spun rod bearings, an ordinary patch job won't survive the workload. Titan Diesel Works executes precision in-frame and out-of-frame rebuilds engineered to exceed factory tolerances. We blueprint cylinder blocks, precision-hone liners, install forged rotating assemblies, deck cylinder heads with multi-layer steel (MLS) head gaskets, and fasten high-tensile ARP head studs to guarantee bulletproof cylinder sealing under extreme boost.",
    symptoms: [
      "Severe internal engine knocking, rod chatter, or wrist-pin tap",
      "Crankcase overpressurization causing excessive oil blow-by through breather",
      "Coolant in engine oil (milky oil emulsification) or oil film in radiator degas bottle",
      "Zero compression on one or more cylinders following overheating or valve drop",
      "Rapid oil consumption accompanied by thick continuous blue exhaust plume",
      "Catastrophic oil pump failure or metal shavings identified in oil filter pleats"
    ],
    diagnosticSteps: [
      "Manual mechanical wet & dry cylinder compression and cylinder leakage testing",
      "Spectrometric oil laboratory analysis to quantify bearing bronze, iron, and lead wear",
      "Corescope borescope inspection of cylinder wall crosshatch and piston crowns",
      "Crankshaft end-play thrust bearing measurement and dial-indicator runout check"
    ],
    repairSteps: [
      "Engine extraction, teardown, ultrasonic hot-tank cleaning, and magnaflux crack testing",
      "Block line-boring, torque-plate diamond honing, and precision deck resurfacing",
      "Balanced forged crankshaft installation with coated competition rod and main bearings",
      "Cylinder head rebuild: hardened valve guides, titanium retainers, and fire-ringed or MLS gaskets",
      "Assembly with ARP 2000 or Custom Age 625+ studs torqued in calibrated multi-stage sequences",
      "Pre-lubrication oil pressurization and computer-controlled dyno break-in protocol"
    ],
    inclusions: [
      "Brand-new OEM or forged Mahle pistons, rings, wrist pins, and heavy-duty pins",
      "New high-volume oil pump, oil cooler core, and water pump assembly",
      "Complete Victor Reinz / Mahle lower and upper engine gasket overhaul kit",
      "2-Year / 24,000-Mile Nationwide Heavy-Duty Powertrain Limited Warranty"
    ],
    pricingGuidance: "Prices vary substantially based on engine architecture (e.g., Ford 6.7L Powerstroke vs Cummins 6.7L ISB vs Cat C15) and whether customer chooses in-frame freshening or a fully blueprinted forged out-of-frame competition build.",
    faqs: [
      {
        q: "What is the difference between an in-frame and an out-of-frame rebuild?",
        a: "An in-frame rebuild is performed with the engine block remaining in the truck chassis (common on commercial rigs with wet cylinder liners like Detroit DD15 or Cummins ISX), replacing pistons, liners, and bearings. Out-of-frame requires pulling the entire motor to machine the bare block, line-bore crankshaft journals, and replace cam bearings."
      },
      {
        q: "Do you install ARP head studs during engine rebuilds?",
        a: "Standard practice for all Titan builds. We strongly recommend ARP studs on Powerstroke, Duramax, and Cummins engines to prevent head gasket separation under elevated cylinder pressures."
      },
      {
        q: "What is your engine break-in recommendation?",
        a: "Every complete engine undergoes cold motoring, hot-fill leak checking, and initial break-in on our engine stand/dyno with high-zinc break-in oil. We require a 500-mile initial fluid dump and inspection."
      }
    ],
    relatedIds: ["cooling-system", "turbocharger-upgrades", "fuel-injection"]
  },

  "turbocharger-upgrades": {
    id: "turbocharger-upgrades",
    title: "Turbocharger Repair, Reconditioning & Compound Systems",
    tagline: "VGT Actuator Calibration, Billet Wheels & High-Flow Boost",
    category: "performance",
    categoryLabel: "Boost & Induction",
    image: "assets/images/services/turbocharger-performance-upgrade.jpg",
    estDuration: "1 – 2 Business Days",
    estCost: "$1,450 – $3,900 (Illustrative Estimate)",
    overview: "Your diesel truck's turbocharger operates at temperatures up to 1,350°F and shaft speeds exceeding 120,000 RPM. Common failures include sticking variable-geometry (VGT) unison rings, carbon-choked nozzle vanes, burnt journal bearings from hot shutdowns, and electronic actuator motor burnout. Titan Diesel Works specializes in factory Garrett, BorgWarner, and Holset VGT rebuilds, electronic actuator calibration, drop-in billet compressor wheel upgrades, and custom engineered twin/compound turbocharger setups for towing and competition.",
    symptoms: [
      "High-pitched whistling, dentist-drill whine, or compressor wheel scraping noise",
      "Sluggish low-end boost response and excessive exhaust gas temperatures (EGTs)",
      "VGT sticking codes (e.g. Ford P132B, Cummins P00AF, GM P259F)",
      "Engine oil leaking directly into the intercooler boot pipes or exhaust downpipe",
      "Underboost or overboost limp modes under heavy hill-climb loads",
      "Excessive axial or radial shaft play observed at the compressor inlet"
    ],
    diagnosticSteps: [
      "Physical dial-indicator measurement of turbine shaft radial play and axial end-float",
      "VGT electronic smart actuator cycle sweep and position feedback sensor calibration",
      "Smoke testing hot and cold charge-air pipes for pressurized air leaks",
      "Exhaust manifold pre-turbine pyrometer and backpressure sensor differential test"
    ],
    repairSteps: [
      "Turbo disassembly, media blast cleaning of turbine housing and carbon-fouled unison ring",
      "Precision VSR high-speed dynamic cartridge balancing up to 130,000 RPM",
      "Installation of 360-degree bronze thrust bearings and staggered-gap exhaust oil seals",
      "Optional upgrade to 6+6 or 11-blade CNC billet extended-tip compressor wheel",
      "Factory electronic actuator mating and zero-point calibration using OEM scan tools"
    ],
    inclusions: [
      "Balanced center rotating assembly (CHRA) with premium oil seals",
      "New stainless steel braided oil feed and drain tube assemblies with new O-rings",
      "Exhaust up-pipe and downpipe multi-layer steel gaskets",
      "12-Month / 12,000-Mile Performance Warranty on reconditioned units"
    ],
    pricingGuidance: "VGT actuator replacements range around $950 - $1,600 installed. Full drop-in billet performance turbos or compound kits are priced based on vehicle year, turbo platform, and supporting plumbing.",
    faqs: [
      {
        q: "Can I just replace the VGT actuator without changing the whole turbo?",
        a: "If the turbo shaft has zero play and the unison ring slides freely without binding, an actuator-only replacement is viable and cost-effective. However, if carbon buildup has seized the internal nozzle vanes, a new actuator will quickly burn out again."
      },
      {
        q: "What benefit does a CNC billet compressor wheel provide?",
        a: "Billet wheels are lighter and thinner than cast wheels, allowing larger blade surface area. This results in faster spool-up, reduced turbo lag, up to 150°F lower EGTs, and increased high-RPM airflow."
      },
      {
        q: "What is a compound turbo system?",
        a: "A compound system uses two turbos working in sequence: a high-pressure (smaller) turbo spools instantly off idle, while feeding into a large atmospheric low-pressure turbo that generates massive cool airflow for heavy hauling."
      }
    ],
    relatedIds: ["engine-diagnostics", "performance-upgrades", "cooling-system"]
  },

  "fuel-injection": {
    id: "fuel-injection",
    title: "High-Pressure Common Rail & Mechanical Fuel Systems",
    tagline: "Bosch, Denso, Delphi & HEUI Precision Calibration",
    category: "repair",
    categoryLabel: "Fuel Injection Systems",
    image: "assets/images/services/diesel-fuel-injection-service.jpg",
    estDuration: "1 – 3 Business Days",
    estCost: "$1,800 – $4,800 (Illustrative Estimate)",
    overview: "Modern common rail diesel systems generate pressures up to 30,000+ PSI to atomize fuel into microscopic droplets up to five times per combustion stroke. Contaminated fuel, water emulsification, or abrasive wear quickly destroys injector needle clearances (measured in microns) or shears CP4 high-pressure pump cams. Titan Diesel Works operates a dedicated clean-room fuel system service lab equipped with high-pressure test benches to rebuild, test, and balance common rail injectors, CP3/CP4 pumps, and HEUI injection systems.",
    symptoms: [
      "Fuel injector rattle, severe tick, or erratic cylinder firing at idle",
      "Crankcase oil level mysteriously rising with strong diesel fuel smell",
      "Hard hot-start condition caused by excessive injector return-line backleakage",
      "P0087 low fuel rail pressure codes under acceleration or heavy towing",
      "Metal glitter or magnetic brass shavings discovered in fuel filter housing",
      "Cylinder balance rates exceeding +/- 4.0 mm³ on diagnostic telemetry"
    ],
    diagnosticSteps: [
      "Live cylinder fuel contribution balance rate recording at operating temperature",
      "Automated injector return-flow bottle quantity test to identify leaking control valves",
      "High-pressure CP3/CP4 pump volume test under loaded rail demand",
      "Borescope fuel tank and lift pump suction strainer inspection for microbial contamination"
    ],
    repairSteps: [
      "Ultrasonic fuel rail and fuel line decontamination",
      "Installation of balanced, flow-matched Bosch, Delphi, or Motorcraft injectors",
      "Replacement of high-pressure injection lines and torque-to-yield hold-down bolts",
      "CP4-to-CP3 conversion kit installation or CP4 bypass disaster prevention kit integration",
      "IMA/IQA injector classification code programming into engine control module"
    ],
    inclusions: [
      "Flow-matched injector set with brand-new copper crush washers & O-rings",
      "Complete primary & secondary OEM fuel filter element change",
      "Fuel rail pressure regulator (FCA/MPROP) testing and calibration",
      "2-Year Workmanship & Component Warranty on genuine Bosch components"
    ],
    pricingGuidance: "Injector sets and high-pressure pumps vary by engine generation. Common rail 6-cylinder Cummins vs V8 Powerstroke/Duramax require different labor times. Written estimate provided after return-flow testing.",
    faqs: [
      {
        q: "Why is an injector with excessive return leakage dangerous?",
        a: "Excessive return leakage prevents the rail from reaching starting pressure (around 4,500 PSI), causing extended cranking. Worse, a stuck-open nozzle can act like an oxy-acetylene torch, melting a hole straight through the aluminum piston in seconds."
      },
      {
        q: "What is a CP4 disaster prevention kit?",
        a: "The Bosch CP4 pump is prone to internal cam roller failure that sends metal debris into all 8 injectors and both fuel rails. A bypass kit redirects pump lubrication return fuel back to the tank through a filter, saving the $8,000+ injector system if the pump fails."
      },
      {
        q: "Do you reprogram injector calibration codes?",
        a: "Yes. Every modern common rail injector has an alphanumeric IQA/IMA calibration code etched onto the body. We program these individual offsets into the ECM to ensure identical cylinder-to-cylinder fueling."
      }
    ],
    relatedIds: ["engine-diagnostics", "engine-rebuild", "performance-upgrades"]
  },

  "transmission-drivetrain": {
    id: "transmission-drivetrain",
    title: "Heavy-Duty Transmission & Allison Drivetrain Rebuilds",
    tagline: "Billet Torque Converters, Clutch Packs & Differential Service",
    category: "repair",
    categoryLabel: "Drivetrain & Transmission",
    image: "assets/images/services/transmission-drivetrain-repair.jpg",
    estDuration: "3 – 5 Business Days",
    estCost: "$3,400 – $7,200+ (Illustrative Estimate)",
    overview: "Transferring up to 1,000+ lb-ft of diesel torque to the pavement places immense stress on automatic transmissions (Allison 1000/10L1000, Ford 6R140/10R140 TorqShift, Ram 68RFE/Aisin AS69RC). Excessive heat, heavy trailer tongue loads, and torque converter clutch slippage quickly burn friction clutches and crack stock input shafts. Titan Diesel Works builds heavy-duty workhorse transmissions featuring billet triple-disc torque converters, upgraded valve bodies, GPZ friction clutch packs, and high-pressure pump modifications.",
    symptoms: [
      "Transmission shudder or vibration during torque converter lockup in high gears",
      "Delayed, harsh, or clunking gear engagement from Park to Drive/Reverse",
      "Transmission fluid burnt black with pungent acrid friction material odor",
      "Slipping or engine rev flare between 2nd-to-3rd or 4th-to-5th gear shifts",
      "TCM fault codes P0700, P0730 (incorrect gear ratio), or P0741 (TCC slip)",
      "Transmission fluid temperature exceeding 225°F under normal towing conditions"
    ],
    diagnosticSteps: [
      "TCM diagnostic data stream review: clutch slip time monitoring & adaptive learn values",
      "Mechanical hydraulic line pressure testing across all gear selector positions",
      "Fluid pan drop and magnet inspection for brass clutch backing, steel shavings, or roller fragments",
      "Driveline angle, U-joint play, and carrier bearing runout vibration inspection"
    ],
    repairSteps: [
      "Complete transmission removal, chemical parts wash, and case inspection",
      "Installation of custom-machined heavy-duty apply pistons and Raybestos GPZ clutch modules",
      "Upgraded valve body with recalibrated separator plates, accumulator springs, and solenoids",
      "Precision installation of billet multi-disc torque converter matched to engine stall speed",
      "Transmission cooler flush and installation of auxiliary high-capacity stacked-plate cooler",
      "TCM adaptive shift relearn calibration under progressive throttle loads"
    ],
    inclusions: [
      "Billet multi-disc low-stall heavy-duty torque converter",
      "Full synthetic Allison TransSynd or Mercon LV/SP fluid fill",
      "Deep finned aluminum transmission oil pan with magnetic drain plug",
      "3-Year / 36,000-Mile Heavy Haul Powertrain Warranty"
    ],
    pricingGuidance: "Standard OEM replacement rebuilds start on the lower end; competition high-horsepower billet shaft builds for pulling or heavy hot-shot towing are quoted based on specific torque requirements.",
    faqs: [
      {
        q: "Why do Ram 68RFE transmissions fail so often when tuned?",
        a: "The factory 68RFE uses a single-sided friction overdrive clutch pack and limited line pressure (160 PSI). Under increased torque, the overdrive clutch slips and overheats. Our upgraded builds increase hydraulic pressure to 225+ PSI and double the clutch friction surface."
      },
      {
        q: "What makes a triple-disc torque converter superior?",
        a: "A factory torque converter has a single clutch disc that can slip under 500+ lb-ft of torque. A triple-disc converter features three friction surfaces clamping against a rigid billet steel cover, eliminating slip and lowering transmission fluid temperatures."
      },
      {
        q: "How often should heavy-duty diesel transmission fluid be changed?",
        a: "For trucks towing frequently or commercial hot-shot service, we recommend a fluid and filter service every 25,000 to 30,000 miles, rather than the relaxed 60,000-mile passenger schedule."
      }
    ],
    relatedIds: ["preventive-maintenance", "performance-upgrades", "engine-rebuild"]
  },

  "emissions-dpf": {
    id: "emissions-dpf",
    title: "DPF, DEF, DOC & SCR Emissions System Diagnostics",
    tagline: "Thermal Regeneration, Ultrasonic DPF Baking & SCR Testing",
    category: "diagnostics",
    categoryLabel: "Emissions & Aftertreatment",
    image: "assets/images/services/diesel-emissions-dpf-diagnostics.jpg",
    estDuration: "1 – 2 Business Days",
    estCost: "$650 – $2,400 (Illustrative Estimate)",
    overview: "EPA-mandated diesel aftertreatment systems—comprising the Diesel Oxidation Catalyst (DOC), Diesel Particulate Filter (DPF), Selective Catalytic Reduction (SCR), and Diesel Exhaust Fluid (DEF) dosing systems—are the number one source of work truck downtime. Unburned soot, crystallized DEF injectors, faulty NOx sensors, or failed differential pressure tubes trigger limp modes and impending 50-mile engine shutdowns. Titan Diesel Works utilizes computerized diagnostic forcing routines, pneumatic pulse cleaning, and high-temperature DPF thermal baking ovens to restore flow without costly whole-canister replacements.",
    symptoms: [
      "Dashboard message: 'Exhaust Filter Full - Service Required' or impending speed derate",
      "'DEF System Fault - 50 Miles to 5 MPH Max Speed' warning message",
      "Frequent or incomplete active DPF regeneration cycles wasting excessive fuel",
      "NOx sensor rationality codes (P229F, P2200) or DEF heater circuit failure (P20BA)",
      "Exhaust soot visible on tailpipe tips (indicates cracked internal ceramic substrate)",
      "High DPF differential pressure sensor voltage at 2,000 RPM idle"
    ],
    diagnosticSteps: [
      "Dual NOx sensor upstream vs downstream catalytic conversion efficiency graphing",
      "DPF differential pressure transducer voltage vs actual air-flow restriction bench test",
      "DEF dosing injector spray pattern, quantity test, and refractometer urea purity testing",
      "EGR valve positioning and cooler gas temperature delta differential verification"
    ],
    repairSteps: [
      "Removal of DPF canister and ultrasonic pneumatic air-knife pulse cleaning",
      "Controlled 12-hour thermal kiln bake at 1,100°F to oxidize compacted soot into ash",
      "Pre-bake and post-bake flow restriction flowbench pin test with certified flow report",
      "DEF dosing injector de-crystallization and pump line pressure repair",
      "Forced service stationary regeneration and ECM soot load threshold reset"
    ],
    inclusions: [
      "Certified before/after flowbench pressure differential test report",
      "New OEM graphite exhaust flange gaskets and stainless band clamps",
      "Full tank DEF quality refractometer test & system top-off",
      "12-Month Emission Flow & Workmanship Warranty on cleaned canisters"
    ],
    pricingGuidance: "Pneumatic and thermal kiln DPF baking service is a fraction of the cost of a $3,500+ new OEM canister. If the internal ceramic substrate is melted or cracked, replacement options will be outlined.",
    faqs: [
      {
        q: "What causes a DPF to clog prematurely?",
        a: "A DPF is only an incinerator; it rarely fails on its own. Leaking boost boots, failing turbo oil seals, dripping fuel injectors, or a stuck-open EGR valve send excessive soot into the filter faster than active regeneration can burn it."
      },
      {
        q: "Can a cracked DPF substrate be cleaned?",
        a: "No. If black soot is wiping off inside the tailpipe, the microscopic ceramic honeycomb walls have cracked, allowing raw particulate past. A cracked filter cannot be baked and must be replaced."
      },
      {
        q: "What is DEF crystallized contamination?",
        a: "Diesel Exhaust Fluid is 67.5% deionized water and 32.5% urea. When exposed to air or heat, water evaporates, leaving chalky white crystals that clog doser nozzles and freeze dosing valves."
      }
    ],
    relatedIds: ["engine-diagnostics", "cooling-system", "preventive-maintenance"]
  },

  "cooling-system": {
    id: "cooling-system",
    title: "Heavy-Duty Cooling System, Radiator & EGR Cooler Overhaul",
    tagline: "All-Aluminum Radiators, Water Pumps & Thermal Management",
    category: "repair",
    categoryLabel: "Thermal & Cooling",
    image: "assets/images/services/diesel-cooling-radiator-repair.jpg",
    estDuration: "1 – 2 Business Days",
    estCost: "$750 – $2,200 (Illustrative Estimate)",
    overview: "Diesel engines produce massive heat loads: cooling systems must dissipate heat not just from the engine block, but also transmission fluid, compressed charge-air, and scorching EGR gases. Plastic radiator end-tanks crack under vibration, silicone coolant hoses degrade from electrochemical attack, and clogged oil cooler cores cause EGR coolers to rupture, dumping coolant directly into the intake tract. Titan Diesel Works delivers complete cooling overhauls with high-efficiency all-aluminum TIG-welded radiators, bulletproof heavy-duty EGR coolers, and high-flow water pumps.",
    symptoms: [
      "White sweet-smelling steam billowing from the exhaust under load",
      "Coolant puking or boiling out of the radiator degas bottle pressure cap",
      "Engine oil temperature running more than 15°F hotter than engine coolant on highway",
      "Viscous engine cooling fan clutch roaring constantly or failing to engage when hot",
      "Sweet-smelling coolant puddles beneath the front axle or water pump weep hole",
      "Heater core blowing cold air intermittently due to combustion gas air-pocketing"
    ],
    diagnosticSteps: [
      "Degas bottle chemical combustion gas block test (liquid turns yellow if exhaust present)",
      "High-pressure cooling system decay test at 20 PSI to pinpoint hidden leaks",
      "Live highway telemetry log comparing Engine Oil Temp (EOT) vs Engine Coolant Temp (ECT)",
      "Digital infrared thermal imaging camera scan of radiator core for internal flow blockages"
    ],
    repairSteps: [
      "Chemical reverse-flushing of engine block using heavy-duty iron/silicate cleaner",
      "Replacement of factory plastic-tank radiator with heavy-duty aluminum brazed core",
      "Installation of heavy-duty stainless helical tube EGR cooler and new oil cooler pack",
      "New dual thermostats, metal-impeller water pump, and silicone radiator hoses",
      "Vacuum-fill refill with organic acid technology (OAT) extended-life diesel coolant"
    ],
    inclusions: [
      "Heavy-duty heavy-gauge all-aluminum radiator assembly",
      "Brand-new OEM thermostats, housing seals, and silicone clamp kit",
      "Full system vacuum evacuation and premium 50/50 OAT coolant fill",
      "2-Year / 24,000-Mile Cooling System Assurance Warranty"
    ],
    pricingGuidance: "Simple thermostat and water pump services are fast and cost-effective. Oil cooler and EGR cooler replacements on V8 platforms (like 6.0L/6.4L/6.7L) require intake teardown and are quoted comprehensively.",
    faqs: [
      {
        q: "What does an EOT / ECT temperature delta mean?",
        a: "On engines like the Ford 6.0L/6.4L and 6.7L, coolant flows through the oil cooler before reaching the EGR cooler. If the difference between Engine Oil Temp and Engine Coolant Temp exceeds 15°F at highway speed, the oil cooler is clogged and will soon starve the EGR cooler of coolant, causing it to crack."
      },
      {
        q: "Why do you recommend all-aluminum radiators?",
        a: "Factory diesel radiators feature plastic end-tanks crimped to an aluminum core with rubber gaskets. The high thermal expansion cycles of diesel engines inevitably cause these crimps to seep and crack. All-welded aluminum tanks eliminate crimped joints entirely."
      },
      {
        q: "Can I use standard green automotive coolant in my diesel truck?",
        a: "Never. Heavy-duty diesels suffer from cylinder liner cavitation—microscopic vapor bubbles that pit through cylinder walls into the combustion chamber. Diesel coolants require specialized nitrite or OAT additives to prevent cavitation erosion."
      }
    ],
    relatedIds: ["engine-rebuild", "preventive-maintenance", "emissions-dpf"]
  },

  "preventive-maintenance": {
    id: "preventive-maintenance",
    title: "Preventive Maintenance & 50-Point Digital Inspections",
    tagline: "Commercial Work Truck Reliability & Fluid Analysis",
    category: "maintenance",
    categoryLabel: "Preventive Care",
    image: "assets/images/services/diesel-preventive-maintenance.jpg",
    estDuration: "1.5 – 3 Hours",
    estCost: "$280 – $650 (Illustrative Estimate)",
    overview: "In the diesel world, maintenance is not just an oil change—it is the difference between reaching 500,000 miles and suffering a catastrophic $15,000 engine failure. Heavy loads, high sulfur, soot loading, and extended idling shear engine oils and clog fuel water separators. Titan Diesel Works delivers rigorous 50-point digital multi-point inspections with every PM service. We use premium CJ-4/CK-4 synthetic heavy-duty oils, OEM filtration, laboratory oil sampling kits, and grease every steering knuckle, slip yoke, and suspension joint.",
    symptoms: [
      "Vehicle approaching factory service interval (5,000 - 10,000 miles)",
      "Water-in-fuel indicator lamp glowing on instrument cluster",
      "Fuel pressure sluggishness or fuel filter differential restriction",
      "Squeaking ball joints, tie rod ends, or binding driveshaft slip yokes",
      "Brake pedal soft feel, brake pad wear beyond 70%, or rotor heat glazing",
      "Battery terminal corrosion or weak starter crank on cold mornings"
    ],
    diagnosticSteps: [
      "Collection of hot engine oil sample for laboratory spectrographic analysis",
      "Electronic brake fluid copper and moisture content meter testing",
      "Battery conductance, alternator ripple, and starter amp-draw digital analysis",
      "Tire tread depth gauge scan, wear pattern analysis, and tire pressure balance"
    ],
    repairSteps: [
      "Engine oil drain and refill with premium Shell Rotella T6 or Schaeffer's full synthetic",
      "Replacement of primary and secondary fuel filter elements with water drain bleed",
      "Heavy-duty chassis grease point lubrication (up to 12 grease zerks on HD trucks)",
      "Differential front and rear gear oil inspection with magnetic plug cleaning",
      "Transfer case fluid inspection and top-off per specification"
    ],
    inclusions: [
      "Full digital photo inspection report texted directly to your phone",
      "Premium heavy-duty oil filter and dual OEM fuel filter set",
      "Chassis lube and all fluid top-offs (DEF, coolant, washer, brake)",
      "Free 30-day fluid level check voucher"
    ],
    pricingGuidance: "PM pricing depends on oil sump capacity (e.g. 13 quarts for Cummins 6.7L, 15 quarts for Powerstroke 6.7L, up to 40+ quarts for Class 8 commercial rigs) and choice of semi-synthetic or full synthetic oil.",
    faqs: [
      {
        q: "Why do diesel trucks have two fuel filters?",
        a: "The primary filter (usually mounted on the chassis near the fuel tank) is a 10-micron water separator that traps heavy road grit and removes moisture. The secondary filter (in the engine bay) is a 2 to 4-micron filter that stops micro-particles before they reach sensitive common rail injectors."
      },
      {
        q: "How does oil laboratory analysis help protect my truck?",
        a: "By measuring parts-per-million of wear metals like copper, lead, and aluminum, oil sampling warns us of rod bearing wear or piston scuffing months before any physical knocking sound develops."
      },
      {
        q: "How often should fuel filters be changed?",
        a: "Every second oil change or 15,000 miles maximum. With low-quality fuel or cold-weather waxing, changing them before every winter is cheap insurance for your injection system."
      }
    ],
    relatedIds: ["engine-diagnostics", "fuel-injection", "transmission-drivetrain"]
  },

  "performance-upgrades": {
    id: "performance-upgrades",
    title: "Diesel Performance Upgrades & High-Output Solutions",
    tagline: "Dyno Tuning, Intercoolers, Fuel Delivery & Heavy Towing Power",
    category: "performance",
    categoryLabel: "Performance Upgrades",
    image: "assets/images/services/diesel-performance-upgrades.jpg",
    estDuration: "2 – 5 Business Days",
    estCost: "$1,800 – $9,500+ (Illustrative Estimate)",
    overview: "Unlocking reliable power from a diesel pickup requires engineering balance: more fuel demand requires more dense air, lower exhaust gas temperatures, and stronger drivetrain support. At Titan Diesel Works, we don't install generic off-the-shelf smoke tunes that melt pistons. Our performance packages are dyno-engineered for real-world heavy towing, street performance, and off-road work. We integrate high-efficiency intercoolers, high-flow cold air induction, FASS/Airdog lift pumps, dual CP3 kits, and calibrated custom ECM/TCM switch-on-the-fly profiles verified on our in-house chassis dynamometer.",
    symptoms: [
      "Truck struggling to pull heavy equipment trailers up highway mountain grades",
      "High EGTs reaching 1,250°F+ while pulling moderate grades",
      "Desire for increased responsive low-end torque for work or towing",
      "Need for custom switch-on-the-fly (SOTF) tow, street, and economy maps",
      "Factory fuel lift pump unable to maintain 10 PSI under full throttle acceleration",
      "Desire for crisp, firm transmission shift points that eliminate gear hunting"
    ],
    diagnosticSteps: [
      "Baseline chassis dyno pull to measure factory horsepower, torque, and boost curve",
      "Pre-upgrade mechanical health verification: blow-by check, boost leak smoke test",
      "Fuel supply pressure logging under wide-open throttle load",
      "Transmission clutch slip adaptive verification before torque increase"
    ],
    repairSteps: [
      "Installation of high-flow cold air intake with serviceable oiled or dry filter media",
      "FASS or AirDog titanium electric lift pump with air/water separation installation",
      "Charge-air cooler (intercooler) upgrade with heavy-duty mandrel-bent aluminum piping",
      "Installation of calibrated multi-position switch and custom dyno engine calibration",
      "TCM custom tuning to raise line pressure and lock torque converter earlier for towing",
      "Final dyno verification and customer telemetry graph generation"
    ],
    inclusions: [
      "Before-and-after chassis dynamometer horsepower & torque printout",
      "Pre-programmed switch-on-the-fly multi-position control switch",
      "Heavy-duty thermal silicone boots with spring-loaded T-bolt clamps",
      "12-Month Performance Workmanship Guarantee"
    ],
    pricingGuidance: "Stage 1 tow packages start affordably; full Stage 2 and Stage 3 setups (compound turbos, built transmissions, and high-pressure fuel pumps) are custom quoted based on customer horsepower goals.",
    faqs: [
      {
        q: "Will performance tuning increase my exhaust gas temperatures (EGTs)?",
        a: "Improper tuning will. However, our engineered calibrations focus on clean, complete atomization combined with supporting airflow upgrades (intercoolers and turbos) that actually lower cruising and towing EGTs compared to factory lean configurations."
      },
      {
        q: "What is the purpose of an aftermarket diesel lift pump?",
        a: "Factory injection pumps (like CP3/CP4) have to suck fuel all the way from the tank under vacuum, which can cause aeration and cavitation. A FASS or AirDog lift pump pushes pure, de-aerated fuel at a steady 10-15 PSI, extending injector pump life."
      },
      {
        q: "Can I safely tow heavy loads with a tuned diesel?",
        a: "Yes! Our custom 'Heavy Tow' calibration profiles are explicitly designed for 15,000+ lb trailers. They optimize timing for cool cylinder temperatures and adjust transmission lockup to prevent heat buildup."
      }
    ],
    relatedIds: ["turbocharger-upgrades", "transmission-drivetrain", "fuel-injection"]
  }
};

window.TITAN_SERVICES_DATA = TITAN_SERVICES_DATA;

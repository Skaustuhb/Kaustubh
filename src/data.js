// Central content store — Executive & Enterprise Portfolio Data

export const profile = {
  name: "Kaustubh Sharma",
  role: "ERPNext Developer & Architect",
  subrole: "Frappe Framework · Custom Doctypes · Multi-Site Sync · React Portals",
  namingSeries: "KS-DEV-2026-001",
  location: "Jaipur, India",
  email: "Skaustubh0117@gmail.com",
  phone: "+91 94130 64342",
  linkedin: "https://www.linkedin.com/in/kaustubh-sharma-079470207",
  github: "https://github.com/Skaustuhb",
  summary:
    "Full-cycle ERPNext Developer and Solutions Architect specializing in core Frappe framework engineering, cross-site document synchronization engines, workflow fail-safes, and high-performance React frontends. Proven track record in designing scalable Doctypes, multi-tenant data pipelines, and enterprise self-service portals from schema definition to production deployment.",
  status: "Available for Architecture & Enterprise ERP Solutions",
  stats: [
    { label: "ERPNext Projects Shipped", value: "12+" },
    { label: "Sync Pipeline Uptime", value: "99.9%" },
    { label: "Cost Calculation Speedup", value: "65%" },
  ],
};

export const skills = [
  {
    group: "Core Framework",
    icon: "Cpu",
    fields: [
      { name: "ERPNext Engine", level: "Expert" },
      { name: "Frappe Framework", level: "Expert" },
      { name: "Python Backend", level: "Senior" },
      { name: "Jinja Templating", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Senior" },
    ],
  },
  {
    group: "Frontend Architecture",
    icon: "Layout",
    fields: [
      { name: "React 19 / Vite", level: "Senior" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Frappe Web UI Routing", level: "Expert" },
      { name: "Figma UI/UX", level: "Intermediate" },
    ],
  },
  {
    group: "Data & Integration",
    icon: "Database",
    fields: [
      { name: "Multi-Site Sync Engine", level: "Architect" },
      { name: "Frappe REST & Webhooks", level: "Expert" },
      { name: "Doctype Schema Design", level: "Expert" },
      { name: "MariaDB / Raw SQL", level: "Senior" },
      { name: "Data Deduplication", level: "Advanced" },
    ],
  },
  {
    group: "Enterprise Practice",
    icon: "ShieldCheck",
    fields: [
      { name: "Workflow Validation Guards", level: "Expert" },
      { name: "Custom Script Reporting", level: "Senior" },
      { name: "Manufacturing BOM Costing", level: "Advanced" },
      { name: "Client Architecture Advisory", level: "Lead" },
      { name: "System Migration & Rollout", level: "Senior" },
    ],
  },
];

export const experience = [
  {
    company: "Finbyz Tech Pvt Ltd",
    role: "ERPNext Developer & Solutions Architect",
    place: "Ahmedabad, IN",
    period: "09/2025 — Current",
    status: "active",
    highlights: [
      "Architected and deployed a multi-site document synchronization engine mirroring purchase and sales records across isolated Frappe instances with 99.9% data integrity, automated retry queues, and atomic rollbacks.",
      "Engineered React-based multi-step customer registration portals integrated directly into Frappe's website routing, reducing customer onboarding processing time by over 50%.",
      "Designed client-side and server-side workflow validation guards across Purchase Order and Purchase Invoice lifecycles, eliminating rate mismatch anomalies and over-billing risks.",
      "Partnered directly with enterprise executives to capture operational requirements and translate them into custom ERPNext Doctype schemas and module configurations.",
    ],
  },
  {
    company: "Pinkcity Jewel House Pvt. Ltd.",
    role: "ERP Developer",
    place: "Jaipur, IN",
    period: "06/2024 — 09/2025",
    status: "synced",
    highlights: [
      "Led end-to-end ERPNext implementations across HR, Finance, Payroll, CRM, Sales, and Support modules for enterprise jewelry manufacturing and distribution.",
      "Customized manufacturing work-order Doctypes and labor time-tracking routines to provide shop-floor leadership with real-time throughput metrics.",
      "Optimized database queries and built custom Script Reports to track order fulfillment across Partially Shipped, In-Transit, and Delivered statuses.",
    ],
  },
  {
    company: "Arya InfoMatrix",
    role: "Front End Developer",
    place: "Jaipur, IN",
    period: "07/2023 — 09/2023",
    status: "synced",
    highlights: [
      "Developed high-performance UI components using modern HTML5, CSS3, and JavaScript.",
      "Collaborated with backend engineers to consume RESTful APIs and ensure seamless UI state management.",
    ],
  },
  {
    company: "Dotsquares",
    role: "Trainee — Python Development",
    place: "Jaipur, IN",
    period: "07/2022 — 09/2022",
    status: "synced",
    highlights: [
      "Constructed Python data analysis web tools utilizing NumPy, Pandas, and Matplotlib to visualize complex data trends.",
      "Built clean foundational Python modules adhering to strict object-oriented design patterns.",
    ],
  },
];

export const projects = [
  {
    name: "Costing & Estimation Engine",
    doctype: "Custom Doctype",
    category: "Custom Doctypes",
    description:
      "Enterprise-grade pricing and costing Doctype engine for order-level valuation, real-time material/labor rollups, and margin enforcement across sales cycles.",
    fullDescription:
      "Engineered an automated order-level cost calculation module in ERPNext that processes multi-level Bill of Materials (BOM), real-time raw material fluctuations, dynamic labor rate allocation, and indirect overhead margins. Eliminated human estimation error and reduced quoting turnaround time by 65%.",
    tags: ["ERPNext", "Python", "Doctype", "BOM Calculation", "Financial Modeling"],
    metrics: ["65% Quoting Speedup", "Real-Time BOM Rollup", "Zero Margin Error"],
    keyFeatures: [
      "Multi-tier material cost accumulation engine",
      "Dynamic workstation & labor hourly rate breakdown",
      "Automated margin compliance check before Quotation submission",
      "Historical price variance tracking and audit trail",
    ],
  },
  {
    name: "Multi-Site Document Sync Engine",
    doctype: "Integration Engine",
    category: "Integrations & Sync",
    description:
      "High-reliability cross-site sync protocol mirroring purchase and sales lifecycles between distinct Frappe instances with dedup and transactional rollback safety.",
    fullDescription:
      "Designed and executed a robust bi-directional document sync layer connecting remote Frappe/ERPNext sites. Mirrors Quotations, Sales Orders, Purchase Invoices, and Delivery Notes in near real-time with business-identity deduplication, transactional retry queues, and atomic rollback safeguards upon sync failure.",
    tags: ["Frappe REST API", "Multi-Site", "Python", "Fail-Safe Queues", "Webhook Delivery"],
    metrics: ["99.9% Sync Integrity", "Bi-Directional Pipeline", "Atomic Rollback"],
    keyFeatures: [
      "Business-identity deduplication algorithm for partner doctypes",
      "Automated retry mechanisms with exponential backoff",
      "Audit logging dashboard with manual re-sync controls",
      "Cross-site document hash verification on write operations",
    ],
  },
  {
    name: "Workstation Time-Tracking System",
    doctype: "Custom Doctype",
    category: "Custom Doctypes",
    description:
      "Granular job-floor tracking Doctype mapping worker check-ins, job allocation, and operation duration down to individual workstation tasks.",
    fullDescription:
      "Architected a shop-floor job tracking solution in ERPNext capturing real-time worker in/out times against precise manufacturing job orders. Provides operations leadership with instant visibility into throughput bottlenecks, workstation efficiency, and actual labor hours per piece.",
    tags: ["ERPNext", "Python", "Time Tracking", "Shop-Floor Control"],
    metrics: ["Granular Task Metrics", "Live Throughput Insights", "100% Floor Transparency"],
    keyFeatures: [
      "Real-time task timer with pause/resume state management",
      "Automated job order status progression based on operation completions",
      "Variance analysis comparing estimated vs actual workstation hours",
      "Barcode/QR integration for rapid worker check-in",
    ],
  },
  {
    name: "Enterprise Registration Portals",
    doctype: "React App",
    category: "React & Portals",
    description:
      "Custom multi-step onboarding & registration wizard built with React and seamless Frappe web route integration, mapping directly to ERPNext customer schemas.",
    fullDescription:
      "Developed high-converting, multi-step customer registration applications embedded directly into Frappe's website routing framework. Combines interactive field validation, file uploads, and unified backend helpers to create Customer, Address, and Contact records atomically.",
    tags: ["React", "Frappe REST API", "Vite", "Jinja Routing", "Form Validation"],
    metrics: ["50% Reduced Onboarding Time", "Atomic Customer Creation", "Zero-Latency Validation"],
    keyFeatures: [
      "Multi-step wizard UI with state preservation and progress tracking",
      "Unified backend Frappe API endpoint for atomic multi-record creation",
      "Dynamic document & ID verification upload pipeline",
      "Integrated Jinja server-side route guards",
    ],
  },
  {
    name: "Executive Attendance & WIP Suite",
    doctype: "Script Report",
    category: "Reporting & Analytics",
    description:
      "SQL-optimized reporting suite providing live visibility into workforce attendance, check-in compliance, and open order WIP statuses across warehouse fulfillment stages.",
    fullDescription:
      "Built comprehensive ERPNext Script Reports utilizing raw SQL query optimization to process thousands of daily attendance records and open order line items. Delivers real-time executive dashboards across work-in-progress (WIP), partial shipments, and pending customer fulfillments.",
    tags: ["ERPNext Reports", "Complex SQL", "Python", "Executive Dashboards"],
    metrics: ["Sub-Second Queries", "Real-Time WIP Views", "Automated Daily Summaries"],
    keyFeatures: [
      "Optimized indexing and SQL queries for large dataset execution",
      "Multi-pivot view for open orders across Partially Shipped & In-Transit states",
      "Automated daily attendance variance alert system",
      "Export-ready formatting for executive review",
    ],
  },
  {
    name: "Self-Service Customer & Vendor Portal",
    doctype: "React App",
    category: "React & Portals",
    description:
      "Modern React & Vite customer dashboard integrated into ERPNext, allowing clients to review active quotes, track shipment status, and inspect financial ledgers.",
    fullDescription:
      "Constructed a responsive customer portal application that leverages Frappe's web session authentication. Grants client stakeholders immediate access to live order statuses, downloadable tax invoices, statement of accounts, and service ticket management.",
    tags: ["React", "Tailwind CSS", "Vite", "Frappe Session API"],
    metrics: ["24/7 Self-Service", "Reduced Support Load 40%", "Instant Statement Access"],
    keyFeatures: [
      "Secure session-based customer authentication layer",
      "Live order tracking timeline with milestone breakdown",
      "Direct PDF ledger generation and invoice downloads",
      "Interactive support ticket submission with attachment support",
    ],
  },
  {
    name: "Workflow Guards & Dialog Suite",
    doctype: "Frappe Customization",
    category: "Custom Doctypes",
    description:
      "Server-side and client-side workflow validation suite preventing price discrepancies, duplicate order approvals, and enriched item pickers across Purchase & Sales flows.",
    fullDescription:
      "Implemented comprehensive business rule guards across ERPNext Purchase Order and Purchase Invoice document lifecycles. Features rate-mismatch anomaly detection, item picker modal enhancements, and automated approval matrix enforcement based on financial thresholds.",
    tags: ["Client Scripts", "Server Scripts", "Frappe Hooks", "Workflow Engine"],
    metrics: ["100% Rate Compliance", "Prevented Over-Billing", "Custom UX Dialogs"],
    keyFeatures: [
      "Client-side rate mismatch alert modals prior to submission",
      "Custom JS item picker with live warehouse stock availability",
      "Threshold-based multi-tier document approval routing",
      "Automated change log annotation on critical field updates",
    ],
  },
];

export const education = [
  {
    degree: "B-Tech, Computer Science & Engineering",
    school: "Poornima Institute of Engineering and Technology, Jaipur",
    period: "04/2024",
    detail: "Core specialization in Software Engineering, Database Systems, and Distributed Computing.",
  },
  {
    degree: "Senior Secondary (PCM)",
    school: "Shiv Jyoti Convent, Kota",
    period: "03/2020",
    detail: "Focus on Mathematics, Physics, and Computer Science.",
  },
  {
    degree: "Secondary School (CBSE)",
    school: "St Paul's Sr Sec, Kota",
    period: "03/2018",
    detail: "Academic Excellence & Foundation in Computer Applications.",
  },
];

export const certifications = [
  { name: "Full-Stack Developer (MERN Stack)", issuer: "Industry Certification" },
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft" },
  { name: "ERPNext & Frappe Framework Specialist", issuer: "Hands-on Enterprise Delivery" },
];

export const focusAreas = [
  {
    title: "ERPNext Architecture & Doctypes",
    detail: "Engineered doctypes, server scripts, and Frappe hook extensions aligned perfectly with operational workflows.",
    icon: "Layers",
  },
  {
    title: "Cross-System Synchronization",
    detail: "Reliable, multi-tenant document sync engines that keep distributed databases locked in real-time sync.",
    icon: "RefreshCw",
  },
  {
    title: "Full-Stack Enterprise Portals",
    detail: "End-to-end execution from database schema and Python API design to polished React user interfaces.",
    icon: "Globe",
  },
];

// Central content store — edit this file to update the site's copy.

export const profile = {
  name: "Kaustubh Sharma",
  role: "ERPNext Developer",
  subrole: "Frappe Framework · Custom Doctypes · Full-Stack",
  namingSeries: "KS-DEV-2026-001",
  location: "Jaipur, India",
  email: "Skaustubh0117@gmail.com",
  phone: "+91 94130 64342",
  linkedin:  "https://www.linkedin.com/in/kaustubh-sharma-079470207",
  summary:
    "I build and extend ERPNext — custom doctypes, cross-site document sync, workflow guards, and the React front ends that sit on top of them. Comfortable owning a feature from schema to shipped screen.",
};

export const skills = [
  {
    group: "Core Stack",
    fields: ["ERPNext", "Frappe Framework", "Python", "Jinja", "JavaScript"],
  },
  {
    group: "Frontend",
    fields: ["React", "Vite", "Tailwind CSS", "Figma"],
  },
  {
    group: "Data & Integration",
    fields: ["API Development", "Database Management", "Doctype Design", "Multi-Site Sync"],
  },
  {
    group: "Practice",
    fields: ["Workflow Automation", "Custom Reporting", "Client Requirement Gathering"],
  },
];

// status: "active" | "synced"
export const experience = [
  {
    company: "Finbyz Tech Pvt Ltd",
    role: "ERPNext Developer",
    place: "Ahmedabad, IN",
    period: "09/2025 — Current",
    status: "active",
    points: [
      "Partner directly with clients on end-to-end ERPNext implementations, from requirement gathering to go-live.",
      "Lead system configuration and module rollout to streamline operations and enable data-driven decisions.",
      "Design and maintain a document sync layer that mirrors records across sites for the full purchase and sales cycle — quotations through invoices — with dedup and rollback safeguards.",
      "Build React-based multi-step registration portals wired into ERPNext through Frappe's website routing.",
      "Add workflow guards and dialog customizations (e.g. rate-mismatch checks, enriched item pickers) across Purchase Order and Purchase Invoice flows.",
    ],
  },
  {
    company: "Pinkcity Jewel House Pvt. Ltd.",
    role: "ERP Developer",
    place: "Jaipur, IN",
    period: "06/2024 — 09/2025",
    status: "synced",
    points: [
      "Led end-to-end ERPNext implementations, translating business requirements into system configurations.",
      "Deployed and optimized modules for org-wide adoption across HR, Finance, Payroll, CRM, Sales, and Service.",
      "Collaborated across teams to streamline processes and deliver scalable, long-term solutions.",
    ],
  },
  {
    company: "Arya InfoMatrix",
    role: "Front End Developer",
    place: "Jaipur, IN",
    period: "07/2023 — 09/2023",
    status: "synced",
    points: [
      "Built and maintained the visual layer of web applications end users interact with directly.",
      "Worked with HTML, CSS, and JavaScript to create layouts, styles, and interactive elements.",
    ],
  },
  {
    company: "Dotsquares",
    role: "Trainee — Python",
    place: "Jaipur, IN",
    period: "07/2022 — 09/2022",
    status: "synced",
    points: [
      "Gained hands-on experience in software development using Python.",
      "Built a data analysis and visualization web app using NumPy, Pandas, and Matplotlib.",
    ],
  },
];

export const projects = [
  {
    name: "Costing Software",
    doctype: "Custom Doctype",
    description:
      "A custom ERPNext doctype for calculating order-level pricing, tracking real material, labor, and overhead costs in real time.",
    tags: ["ERPNext", "Python", "Doctype"],
  },
  {
    name: "Daily Transaction",
    doctype: "Custom Doctype",
    description:
      "Tracks workers' daily in/out time against a specific job, down to how long a particular task takes to complete.",
    tags: ["ERPNext", "Time Tracking"],
  },
  {
    name: "Custom Reports",
    doctype: "Script Report",
    description:
      "Reporting suite for daily employee check-in and attendance, plus live tracking of open orders across partially shipped, shipped, and WIP states.",
    tags: ["Reporting", "SQL"],
  },
  {
    name: "Multi-Site Document Sync",
    doctype: "Integration Engine",
    description:
      "Mirrors documents from an external Frappe site into a local ERPNext instance across the full purchase and sales cycle, with business-identity dedup and rollback-safe writes.",
    tags: ["Frappe", "Integrations", "Python"],
  },
  {
    name: "Registration Portals",
    doctype: "React App",
    description:
      "Multi-step registration wizards for two programs, sharing backend helpers for customer, address, and contact creation, wired into ERPNext.",
    tags: ["React", "Frappe API"],
  },
  {
    name: "Customer Portal",
    doctype: "React App",
    description:
      "A React, Vite, and Tailwind customer portal served through Frappe's website routing and Jinja templating, integrated directly with ERPNext data.",
    tags: ["React", "Vite", "Tailwind"],
  },
];

export const education = [
  {
    degree: "B-Tech, Computer Science",
    school: "Poornima Institute of Engineering and Technology, Jaipur",
    period: "04/2024",
  },
  {
    degree: "Senior Secondary, PCM",
    school: "Shiv Jyoti Convent",
    period: "03/2020",
  },
  {
    degree: "Secondary School, CBSE",
    school: "St Paul's Sr Sec, Kota",
    period: "03/2018",
  },
];

export const certifications = [
  "Full-Stack Developer (MERN)",
  "Microsoft Azure Fundamentals",
];

export const focusAreas = [
  {
    title: "ERPNext Customization",
    detail: "Custom doctypes, client scripts, and server-side logic tailored to how a business actually works.",
  },
  {
    title: "Cross-System Sync",
    detail: "Keeping documents consistent across sites and systems without losing data on the way.",
  },
  {
    title: "Full-Stack Delivery",
    detail: "Comfortable owning a feature from schema design to the React screen a user clicks through.",
  },
];

import ReactImage from "../../assets/images/icons/react.svg";
import NextImage from "../../assets/images/icons/next.svg";
import TailwindImage from "../../assets/images/icons/tailwind.svg";
import StropeAI from "../../assets/images/backgrounds/strope.jpg";
import Customer from "../../assets/images/backgrounds/customer.jpg";
import SarkariMateHome from "../../assets/images/backgrounds/sarkarimate-home.png";
import SarkariMateResults from "../../assets/images/backgrounds/sarkarimate-results.png";
import Simplee from "../../assets/images/backgrounds/simplee.jpg";
import Seller from "../../assets/images/backgrounds/seller.jpg";
import { projectTheme } from "./projectTheme";

const { purple } = projectTheme;

const rawProjects = [
  {
    id: "ragazza-fashion",
    order: 1,
    name: "Ragazza Fashion",
    company: "Martisan S.A. de C.V.",
    tagline: "Multi-brand e-commerce platform",
    featured: true,
    year: "2024 - 2026",
    role: "Frontend Engineer",
    industry: "Fashion E-commerce",
    description:
      "Built and maintained a large-scale multi-brand e-commerce platform serving customers across multiple regions. Developed storefront experiences, checkout flows, customer accounts, order management, and admin tools.",
    techStack: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Multi-brand architecture",
      "SEO optimized storefront",
      "Multi-currency support",
      "Multi-language support",
      "Responsive design",
      "Performance optimization",
    ],
    integrations: ["Openpay", "Authorize.Net", "MercadoPago", "PayPal"],
    impact: [
      "1000+ customers served",
      "Improved Core Web Vitals",
      "Faster page load times",
      "Improved mobile experience",
    ],
    screens: ["Storefront", "Product Detail", "Checkout", "Customer Account", "Admin Dashboard"],
  },
  {
    id: "pos-system",
    order: 2,
    name: "POS System",
    company: "Martisan S.A. de C.V.",
    tagline: "Tablet-first boutique sales platform",
    featured: true,
    year: "2024 - 2026",
    role: "Frontend Engineer",
    industry: "Retail & Fashion",
    description:
      "Developed a complete point-of-sale ecosystem for bridal and fashion boutiques including customer registration, quotations, appointments, payments, inventory management, fittings, and delivery workflows.",
    techStack: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    highlights: [
      "Appointment management",
      "Quotation workflow",
      "Sales order creation",
      "Payment collection",
      "Inventory management",
      "Delivery tracking",
    ],
    impact: [
      "Improved store operations",
      "Reduced manual processes",
      "Streamlined customer journey",
      "Enhanced staff productivity",
    ],
    screens: ["Agenda", "Client Registration", "Quotation", "Sales Order", "Collect Payment", "Inventory"],
  },
  {
    id: "sharkdom",
    order: 3,
    name: "Sharkdom",
    company: "Nickelfox Technologies",
    tagline: "Partner ecosystem SaaS platform",
    featured: true,
    year: "2023",
    role: "Frontend Developer",
    industry: "SaaS",
    description:
      "Contributed to a partner ecosystem platform by building landing pages, optimizing performance, improving code quality, and developing reusable frontend components.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Landing page development",
      "Reusable component system",
      "Performance optimization",
      "Responsive UI",
    ],
    impact: ["Reduced page load time", "Improved user experience", "Enhanced code maintainability"],
    screens: ["Landing Page", "Dashboard", "Analytics"],
  },
  {
    id: "gomble",
    order: 4,
    name: "Gomble",
    company: "Nickelfox Technologies",
    tagline: "Customized B2B commerce platform",
    featured: true,
    year: "2021 - 2023",
    role: "Frontend Developer",
    industry: "Commerce",
    description:
      "Developed a B2B commerce platform enabling collaboration between suppliers, manufacturers, and designers with analytics, appointment scheduling, and real-time communication.",
    techStack: ["React", "JavaScript", "MUI", "Styled Components", "Twilio"],
    highlights: ["Admin dashboards", "Reporting system", "Appointment scheduling", "Real-time chat"],
    impact: ["Improved business collaboration", "Centralized operations", "Enhanced communication"],
    screens: ["Dashboard", "Analytics", "Appointments", "Chat Module"],
  },
  {
    id: "simplee",
    order: 5,
    name: "Simplee",
    company: "Nickelfox Technologies",
    tagline: "Fintech & investor management platform",
    featured: true,
    year: "2023",
    role: "Frontend Developer",
    industry: "Fintech",
    description:
      "Built a financial platform providing investors centralized access to financial data, ACH transfers, wire transfers, and transaction management workflows.",
    techStack: ["Next.js", "React", "Firebase", "Styled Components", "Synctera"],
    highlights: ["Investor dashboard", "ACH transfers", "Wire transfers", "Financial reporting"],
    impact: ["Improved transaction management", "Secure financial workflows", "Better investor experience"],
    screens: ["Investor Dashboard", "Transaction Center", "Transfer Management"],
  },
  {
    id: "strope-ai",
    order: 6,
    name: "Strope AI",
    company: "Nickelfox Technologies",
    tagline: "AI-powered project estimation platform",
    featured: true,
    year: "2023 - Present",
    role: "Frontend Engineer",
    industry: "AI SaaS",
    description:
      "Built an AI-powered platform that automates project cost estimation, timeline prediction, and requirement gathering through intelligent workflows.",
    techStack: ["Next.js", "React", "TypeScript", "MUI", "OpenAI"],
    highlights: [
      "AI-powered estimation",
      "Requirement collection",
      "Dynamic dashboards",
      "Timeline prediction",
    ],
    impact: ["Faster project planning", "Automated estimation process", "Improved decision making"],
    screens: ["Project Wizard", "AI Estimation", "Cost Calculator", "Dashboard"],
  },
  {
    id: "sarkarimate",
    order: 7,
    name: "SarkariMate",
    company: "SarkariMate",
    tagline: "Government jobs and exam information platform",
    featured: true,
    year: "2026 - Present",
    role: "Project Owner",
    industry: "GovTech & Education",
    description:
      "Founded and built SarkariMate, a student-first platform that brings government job notifications, admit cards, results, answer keys, syllabus updates, schemes, and exam resources into one clean experience. The product is designed for fast discovery, mobile-friendly access, and trustworthy updates for exam aspirants.",
    techStack: ["Next.js", "React", "Tailwind CSS", "SEO", "Responsive UI"],
    highlights: [
      "Latest job notification hub",
      "Admit card, result, answer key, and syllabus sections",
      "Exam categories and popular search flows",
      "Hindi and accessibility-friendly controls",
      "Email alerts and app download journeys",
      "Mobile-first responsive experience",
    ],
    impact: ["Used by 1000+ students", "Centralized government exam information", "Improved access to time-sensitive updates"],
    screens: ["Home Dashboard", "Results", "Latest Jobs", "Admit Cards", "Exam Categories"],
    screenImages: [SarkariMateHome, SarkariMateResults, SarkariMateHome],
  },
];

const visualMap = {
  "ragazza-fashion": {
    icon: "R",
    color: "#FF6A3D",
    image: Customer,
    link: "https://dev.customer.nfx-seller.foxlabs.in/",
  },
  "pos-system": {
    icon: "POS",
    color: "#34B65B",
    image: Seller,
    link: "https://github.com/umeshyadav97",
  },
  sharkdom: {
    icon: "TS",
    color: "#2F80ED",
    image: Simplee,
    link: "https://github.com/umeshyadav97",
  },
  gomble: {
    icon: "G",
    color: "#FF6A3D",
    image: Seller,
    link: "https://github.com/umeshyadav97",
  },
  simplee: {
    icon: "S",
    color: purple,
    image: Simplee,
    link: "https://dev.investor.simplee.foxlabs.in/auth/login",
  },
  "strope-ai": {
    icon: "S",
    color: purple,
    image: StropeAI,
    link: "https://strope.ai",
  },
  sarkarimate: {
    icon: "SM",
    color: "#0057FF",
    image: SarkariMateHome,
    link: "https://sarkarimate.com/",
  },
};

export const fallbackImages = [Customer, Simplee, Seller, StropeAI, SarkariMateHome, SarkariMateResults];

export const projects = rawProjects
  .map((project) => {
    const visual = visualMap[project.id] || {};

    return {
      ...project,
      techStack: project.techStack || [],
      highlights: project.highlights || [],
      integrations: project.integrations || [],
      impact: project.impact || [],
      screens: project.screens || [],
      screenImages: project.screenImages || [],
      icon: visual.icon || project.name.slice(0, 2).toUpperCase(),
      color: visual.color || purple,
      image: visual.image || Customer,
      link: visual.link || "https://github.com/umeshyadav97",
    };
  })
  .sort((a, b) => a.order - b.order);

export const techIconMap = {
  React: { icon: ReactImage },
  "Next.js": { icon: NextImage },
  "Tailwind CSS": { icon: TailwindImage },
  TypeScript: { text: "TS", color: "#3178C6" },
  Redux: { text: "R", color: "#764ABC" },
  "REST APIs": { text: "API", color: purple },
  JavaScript: { text: "JS", color: "#F7DF1E", textColor: "#080B16" },
  MUI: { text: "MUI", color: "#007FFF" },
  "Styled Components": { text: "SC", color: "#DB7093" },
  Twilio: { text: "T", color: "#F22F46" },
  Firebase: { text: "F", color: "#FFCA28", textColor: "#080B16" },
  Synctera: { text: "S", color: "#0B6BFF" },
  OpenAI: { text: "AI", color: "#10A37F" },
};

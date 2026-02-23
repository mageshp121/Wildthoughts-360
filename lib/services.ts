export interface ServiceDomain {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  details: string[];
}

export const serviceDomains: ServiceDomain[] = [
  {
    id: "strategy",
    icon: "🏗",
    title: "Strategy & Business Architecture",
    shortDescription:
      "Vision, mission, business modeling, and scaling roadmaps designed for long-term growth.",
    details: [
      "Corporate vision & mission alignment",
      "Business model design & validation",
      "Market entry strategy & competitor analysis",
      "Scaling roadmaps with milestone tracking",
      "Board-level strategic planning",
    ],
  },
  {
    id: "hr",
    icon: "👥",
    title: "Human Resources & OD",
    shortDescription:
      "HR audits, org design, performance systems, and our proprietary Happiness Index.",
    details: [
      "HR policy & compliance audits",
      "Organizational design & restructuring",
      "KRA / KPI / KRI performance frameworks",
      "Talent acquisition & retention systems",
      "Happiness Index implementation",
    ],
  },
  {
    id: "sales",
    icon: "📈",
    title: "Sales, Marketing & Brand",
    shortDescription:
      "Sales systems, brand positioning, market entry strategy, and franchise development.",
    details: [
      "Sales process design & optimization",
      "Brand identity & positioning strategy",
      "Digital marketing & lead generation",
      "Franchise model development",
      "Distribution channel strategy",
    ],
  },
  {
    id: "finance",
    icon: "💰",
    title: "Finance & Business Control",
    shortDescription:
      "Budgeting, cash flow management, cost optimization, and financial restructuring.",
    details: [
      "Financial health audits",
      "Budget planning & variance analysis",
      "Cash flow forecasting & management",
      "Cost optimization programs",
      "Business restructuring advisory",
    ],
  },
  {
    id: "operations",
    icon: "⚙️",
    title: "Operations & Administration",
    shortDescription:
      "SOPs, process optimization, and operational audits that build efficiency at scale.",
    details: [
      "SOP documentation & implementation",
      "Process mapping & optimization",
      "Operational audits & gap analysis",
      "Supply chain & vendor management",
      "Compliance & administrative systems",
    ],
  },
  {
    id: "ventures",
    icon: "🚀",
    title: "Entrepreneurship & New Ventures",
    shortDescription:
      "Startup mentoring, feasibility studies, pitch prep, and franchise model building.",
    details: [
      "Business feasibility & viability studies",
      "Startup mentoring & advisory",
      "Investor pitch deck preparation",
      "Franchise model design & launch",
      "Business plan development",
    ],
  },
];

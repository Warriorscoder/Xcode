export type AgendaItem = {
  time: string;
  title: string;
  format: string;
  focus: string;
};

export type AgendaDay = {
  day: string;
  date: string;
  summary: string;
  items: AgendaItem[];
};

export type Card = {
  title: string;
  description: string;
  icon?: string;
};

export const agenda: AgendaDay[] = [
  {
    day: "Day One",
    date: "23 May 2023 • Dubai",
    summary: "Vision-setting keynotes, digital foundations, data-first real estate.",
    items: [
      {
        time: "09:00",
        title: "Opening Keynote: Proptech as the Growth Multiplier",
        format: "Keynote",
        focus: "Strategy • Market outlook",
      },
      {
        time: "10:30",
        title: "AI, Cloud, and Automation to Streamline Operations",
        format: "Panel",
        focus: "AI • Cloud ops • Workflow",
      },
      {
        time: "12:00",
        title: "Virtual & Immersive Experiences for Investors and Tenants",
        format: "Case Study",
        focus: "VR/AR • CX • Sales",
      },
      {
        time: "14:00",
        title: "Data-Driven Asset Performance & Predictive Analytics",
        format: "Workshop",
        focus: "Analytics • Performance",
      },
      {
        time: "16:00",
        title: "C-Level Leaders Roundtable",
        format: "Roundtable",
        focus: "Leadership • Investment",
      },
    ],
  },
  {
    day: "Day Two",
    date: "24 May 2023 • Dubai",
    summary: "Trust, transparency, and technology that scales across portfolios.",
    items: [
      {
        time: "09:00",
        title: "Blockchain Transactions & Smart Contracts",
        format: "Keynote",
        focus: "Blockchain • Trust",
      },
      {
        time: "10:30",
        title: "IoT-Enabled Facility Management",
        format: "Panel",
        focus: "IoT • Efficiency • Sustainability",
      },
      {
        time: "12:00",
        title: "Crowdfunding & Alternative Financing Models",
        format: "Fireside Chat",
        focus: "Fintech • Capital",
      },
      {
        time: "14:00",
        title: "Cybersecurity & Data Ethics in Proptech",
        format: "Workshop",
        focus: "Security • Governance",
      },
      {
        time: "16:00",
        title: "Awards & Networking Evening",
        format: "Awards",
        focus: "Recognition • Deal flow",
      },
    ],
  },
];

export const topics: Card[] = [
  {
    title: "Big Data & Predictive Analytics",
    description:
      "Leverage property, market, and performance data for faster, de-risked decisions.",
    icon: "📊",
  },
  {
    title: "AI & Cloud Efficiency",
    description:
      "Automate admin, accelerate approvals, and streamline operations end-to-end.",
    icon: "🤖",
  },
  {
    title: "Immersive CX",
    description: "Virtual viewings, digital twins, and VR tours that convert faster.",
    icon: "🧭",
  },
  {
    title: "Blockchain Trust",
    description: "Smart contracts for transparent transactions and faster closings.",
    icon: "⛓️",
  },
  {
    title: "Smart Maintenance",
    description: "IoT sensors that predict failures and cut operating costs.",
    icon: "🛠️",
  },
  {
    title: "Customer-First Platforms",
    description: "Chatbots, apps, and portals that keep tenants informed and engaged.",
    icon: "💬",
  },
  {
    title: "New Capital Models",
    description: "Crowdfunding and tokenization opening new pathways to invest.",
    icon: "💹",
  },
  {
    title: "Cybersecurity & Trust",
    description: "Defend data integrity across cloud, IoT, and digital transactions.",
    icon: "🛡️",
  },
];

export const personas: Card[] = [
  { title: "CEOs & Managing Directors", description: "Growth, margin, and portfolio resilience." },
  { title: "CTOs / CIOs / Heads of Innovation", description: "Architecture, build vs buy, interoperability." },
  { title: "Property & Facility Leaders", description: "Operational efficiency, uptime, and tenant delight." },
  { title: "Sales & Marketing Heads", description: "Digital journeys that convert and retain." },
  { title: "Investments & VCs", description: "Deal flow, risk insights, and emerging proptech bets." },
  { title: "Government & Regulators", description: "Compliance, transparency, and citizen experience." },
];

export const industries = [
  "Property Developers",
  "Property Management Firms",
  "Real-Estate Consultants",
  "Community Management",
  "Brokerage Houses",
  "Investors & VCs",
  "Telecom & Utilities",
  "Hospitality & Retail",
];

export const whyAttend = [
  "Learn from global leaders with real-world case studies.",
  "Network with pre-qualified decision makers across the value chain.",
  "Strike partnerships that accelerate digital transformation.",
  "Benchmark tools that boost asset performance and customer experience.",
  "Build ecosystem collaboration to solve emerging challenges together.",
];

export const sponsorship = [
  "Demonstrate thought leadership with keynotes or moderated panels.",
  "Generate high-intent leads from senior, pre-qualified buyers.",
  "Position your brand in front of owners and technology leaders.",
  "Showcase live demos in an expo built for decision velocity.",
];

export const resources = [
  { title: "Download Prospectus", href: "#contact" },
  { title: "Register Interest", href: "#cta" },
  { title: "Sponsor / Exhibit", href: "#sponsors" },
];

export const faqs = [
  {
    q: "Who should attend?",
    a: "C-level leaders, technology heads, property and facility teams, investors, and regulators shaping real estate and proptech.",
  },
  {
    q: "Is the agenda final?",
    a: "Sessions follow the published focus areas; speakers and timing can be fine-tuned with participating partners.",
  },
  {
    q: "Can I sponsor or exhibit?",
    a: "Yes. Choose a package aligned to thought leadership, demo space, or lead-generation outcomes.",
  },
  {
    q: "Do you offer group registrations?",
    a: "Group and team passes are available. Contact us to tailor the right mix for your objectives.",
  },
];

export const stats = [
  { label: "Pre-qualified C-levels", value: "250+" },
  { label: "Speakers & Panelists", value: "35+" },
  { label: "Countries & Markets", value: "15+" },
];


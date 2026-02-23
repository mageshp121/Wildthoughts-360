// TODO: Replace all placeholder data with real client testimonials

export interface VideoTestimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  shortQuote: string;
  thumbnailUrl: string;
  videoUrl: string; // TODO: Replace with real YouTube embed URLs
}

export interface TextTestimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  quote: string;
  rating: number;
}

// TODO: Replace with real video testimonials
export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "v1",
    clientName: "Rajesh Menon",
    role: "Managing Director",
    company: "Menon Retail Group",
    location: "Thrissur, Kerala",
    industry: "Retail",
    shortQuote:
      "Wild Thoughts restructured our entire retail chain. Revenue up 40% in 8 months.",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // TODO: Replace
  },
  {
    id: "v2",
    clientName: "Dr. Priya Nair",
    role: "CEO",
    company: "Nair Diagnostics Pvt. Ltd.",
    location: "Kozhikode, Kerala",
    industry: "Healthcare",
    shortQuote:
      "Their HR framework reduced our attrition from 38% to under 10% in one year.",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // TODO: Replace
  },
  {
    id: "v3",
    clientName: "Arun Krishnan",
    role: "Founder",
    company: "BrightPath Education",
    location: "Palakkad, Kerala",
    industry: "Education",
    shortQuote:
      "From chaos to clarity — they built our entire operational backbone from scratch.",
    thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // TODO: Replace
  },
];

// TODO: Replace with real client testimonials
export const textTestimonials: TextTestimonial[] = [
  {
    id: "t1",
    clientName: "Suresh Varma",
    role: "Director",
    company: "Varma Manufacturing Co.",
    location: "Malappuram, Kerala",
    industry: "Manufacturing",
    quote:
      "Before Wild Thoughts, our operations were entirely person-dependent. Within 6 months, we had SOPs for every process, a functioning performance system, and a team that actually understood their KPIs. The transformation was real and lasting.",
    rating: 5,
  },
  {
    id: "t2",
    clientName: "Fathima Al-Rashid",
    role: "Founder & CEO",
    company: "Al-Rashid Hospitality Group",
    location: "Perinthalmanna, Kerala",
    industry: "Hospitality",
    quote:
      "We were expanding our restaurant chain and had no idea how to franchise it properly. Wild Thoughts didn't just advise — they built the entire franchise model with us. We launched 3 new outlets in 12 months without losing quality.",
    rating: 5,
  },
  {
    id: "t3",
    clientName: "Anoop George",
    role: "Managing Partner",
    company: "George & Associates",
    location: "Kochi, Kerala",
    industry: "Professional Services",
    quote:
      "The Happiness Index was something I was skeptical about initially. But after implementing it across our firm, we saw a 60% drop in voluntary exits and a measurable improvement in team output. The data doesn't lie.",
    rating: 5,
  },
  {
    id: "t4",
    clientName: "Meera Chandran",
    role: "Co-Founder",
    company: "EduSpark Technologies",
    location: "Thrissur, Kerala",
    industry: "Startups",
    quote:
      "Wild Thoughts helped us go from a great idea to a funded startup in under a year. Their feasibility study was rigorous, their pitch prep was excellent, and their network opened doors we didn't know existed.",
    rating: 5,
  },
  {
    id: "t5",
    clientName: "Ibrahim Hassan",
    role: "Operations Head",
    company: "Hassan Distribution Network",
    location: "Kozhikode, Kerala",
    industry: "Distribution",
    quote:
      "Our finance function was basically a spreadsheet and hope. Wild Thoughts brought in a real business control system — budgeting, cash flow visibility, and cost optimization. We saved 18% on operating costs in the first year.",
    rating: 5,
  },
  {
    id: "t6",
    clientName: "Lakshmi Pillai",
    role: "Principal",
    company: "Lakshmi Learning Centre",
    location: "Palakkad, Kerala",
    industry: "Education",
    quote:
      "They redesigned our org structure, introduced KRA-based performance reviews, and helped us recruit the right leadership team. Our institution is now running as a proper business, not just a passion project.",
    rating: 5,
  },
];

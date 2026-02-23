export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "Is this call really free?",
    answer:
      "Yes - completely. No credit card required, no commitment, no obligation. We offer this call because we believe you deserve clarity on your business challenges before you invest in any consulting engagement. If there's a fit, we'll discuss it. If not, you leave with real insights you can act on.",
  },
  {
    id: "f2",
    question: "What size businesses do you work with?",
    answer:
      "We work with a wide range - from early-stage startups and solo founders to established enterprises with 200+ employees. Our frameworks scale to fit your stage. Whether you're validating a business idea or restructuring a mature organization, our approach adapts to your reality.",
  },
  {
    id: "f3",
    question: "Where are you based? Do you work remotely?",
    answer:
      "We're headquartered in Perinthalmanna, Kerala, India. We work with clients across Kerala, nationally across India, and internationally. Sessions can be conducted in-person (Perinthalmanna) or via video call - your choice. We've successfully delivered engagements fully remotely.",
  },
  {
    id: "f4",
    question: "How long does a typical engagement last?",
    answer:
      "It depends on the scope and the domain. A focused HR audit might take 4–6 weeks. A full business transformation program can span 6–18 months. We'll define a clear scope, timeline, and milestones on the call - so you always know exactly what you're committing to.",
  },
  {
    id: "f5",
    question: "Do you just give advice, or do you actually implement?",
    answer:
      "We implement. Wild Thoughts doesn't drop a report on your desk and disappear. We work alongside your team to build systems, train people, and ensure changes are actually embedded in how your business runs. Our motto: no shelf-ware.",
  },
];

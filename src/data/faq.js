// FAQ page content, grouped by the sidebar sections in the design.
export const faqGroups = [
  {
    id: "pricing",
    title: "Pricing and payment",
    items: [
      [
        "How much does a website cost?",
        "Every website is quoted on its scope: the pages, features and content it needs. Book a free consultation or message us on WhatsApp and you will have a quote within one working day.",
      ],
      [
        "How do payments work?",
        "We take a 50% deposit to start and the remaining 50% before launch. Larger projects can be split into milestones, agreed in your proposal.",
      ],
      ["Do you charge for the first call?", "No. The first 30-minute consultation is free."],
    ],
  },
  {
    id: "working",
    title: "Working with us",
    items: [
      [
        "How long does a project take?",
        "It depends on scope. Your proposal includes a timeline, and we share progress throughout so nothing is a surprise.",
      ],
      [
        "Can you work with businesses outside Abuja?",
        "Yes. Most of the work happens online, so where you are is rarely an issue.",
      ],
      [
        "Can you update my existing website instead of rebuilding it?",
        "Yes. We fix and update WordPress, Webflow, Framer and Vercel sites, from layout and mobile issues to content updates.",
      ],
    ],
  },
  {
    id: "after",
    title: "After launch",
    items: [
      [
        "Do I own the website and designs?",
        "Yes. Once the project is paid in full, the designs, code and files are yours. We may show the work in our portfolio unless you ask us not to.",
      ],
      [
        "Do you offer support after launch?",
        "Yes. We stay on for updates and fixes, and many clients keep us on for social media and content.",
      ],
    ],
  },
];

const find = (q) => faqGroups.flatMap((g) => g.items).find(([question]) => question === q);

// The Services page teaser reuses three questions from the FAQ.
export const servicesTeaser = [
  find("How do payments work?"),
  [
    "Do I own the website and designs when we finish?",
    find("Do I own the website and designs?")[1],
  ],
  find("Can you work with businesses outside Abuja?"),
];

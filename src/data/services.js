// Content for the four services, taken from the Redesign 2026 Figma file.
// `home*` fields feed the home page cards, `list*` fields feed the Services page,
// everything else feeds the service detail page.

export const services = [
  {
    slug: "websites",
    short: "Sites, landing pages, web apps",
    name: "Websites & web apps",
    icon: "desktop",
    homeIcon: "desktop",
    homeDesc:
      "Business websites, landing pages and web apps, designed and built by the same team.",
    homeIncludes: [
      "Custom design and development",
      "Landing pages for campaigns",
      "Fast, mobile-first builds",
      "Fixes and updates for existing sites",
    ],
    listDesc:
      "Business websites, landing pages and web apps. One team designs and builds, so nothing gets lost between the mockup and the live site.",
    listIncludes: [
      "Custom website design and development",
      "Landing pages for products and campaigns",
      "Mobile-first, fast-loading builds",
      "WordPress, Framer, Webflow or custom code",
      "Fixes and updates for existing sites",
    ],
    listPrice: "Custom quote",
    listImage: { key: "webShot", label: "Website project screenshot" },
    seenIn: "Seen in: AS5 Group, Sabali Limited",
    heroDesc:
      "Business websites, landing pages and web apps. One team designs and builds, so what you approve is what goes live.",
    heroImage: { key: "webHero", label: "Website project, desktop and mobile screens" },
    included: [
      ["Discovery and sitemap", "We plan pages around what your customers need to find."],
      ["Custom design", "Designed in Figma, in your brand, before any code."],
      ["Development", "WordPress, Framer, Webflow or custom code, whichever fits."],
      ["Mobile-first", "Built for phones first, where most of your visitors are."],
      ["Forms and WhatsApp", "Enquiries go straight to your inbox or WhatsApp."],
      ["Launch and handover", "Domain, hosting setup, and a walkthrough of your site."],
    ],
    packages: [
      {
        name: "Website Design & Development",
        featured: true,
        items: [
          "Custom business website",
          "Design and development",
          "Mobile responsive",
          "Fast, modern and scalable",
        ],
      },
      {
        name: "Landing Page Design",
        items: [
          "1 custom landing page",
          "Conversion-focused layout",
          "Mobile responsive",
          "For products and campaigns",
        ],
      },
      {
        name: "Website Fixes & Updates",
        items: [
          "Layout and mobile fixes",
          "Content updates",
          "Bug fixes and cleanup",
          "WordPress, Webflow, Framer, Vercel",
        ],
      },
    ],
    related: ["as5-group", "sabali-limited"],
    faq: [
      [
        "How long does a website take?",
        "Most business websites go live within a few weeks of the design being approved. Your proposal sets the exact timeline before work starts.",
      ],
      [
        "Can you redesign my existing site instead of starting over?",
        "Yes. We can refresh the design, fix what is broken, or rebuild it properly, whichever makes more sense for your goals and budget.",
      ],
      [
        "Who hosts the website after launch?",
        "We set up hosting on your own account, so the site is yours. If you prefer, we can manage hosting and updates for you.",
      ],
    ],
  },
  {
    slug: "brand-design",
    short: "Identity, UI/UX, decks",
    name: "Brand & design",
    icon: "pencil",
    homeIcon: "pencil",
    homeDesc: "Identity, interfaces and documents that make a business look established.",
    homeIncludes: [
      "Brand identity starter pack",
      "UI/UX for apps and dashboards",
      "Pitch decks and proposals",
      "Social media flyers",
    ],
    listDesc:
      "Identity, interfaces and documents that make a business look as established as it is.",
    listIncludes: [
      "Brand identity starter pack",
      "UI/UX design for apps and dashboards",
      "Pitch decks and proposals",
      "Social media flyers and templates",
    ],
    listPrice: "Identity, UI/UX, decks",
    listImage: { key: "brandBoard", label: "Brand board or UI screens" },
    seenIn: "Seen in: Goju brand, Jonzee World",
    heroDesc:
      "Identity, interfaces and documents that make your business look as established as it is.",
    heroImage: { key: "brandHero", label: "Brand board or app UI screens" },
    included: [
      ["Logo direction", "A considered mark, not a template."],
      ["Colour and type", "A palette and type system you can use everywhere."],
      ["Brand guide", "Simple rules so anyone can apply the brand."],
      ["UI/UX design", "App, dashboard and SaaS interfaces in Figma."],
      ["Pitch decks", "Decks for investors, sponsors and clients."],
      ["Social templates", "Flyers and posts that stay on brand."],
    ],
    packages: [
      {
        name: "Brand Identity Starter Pack",
        featured: true,
        items: [
          "Logo concept",
          "Colour palette and typography",
          "Basic brand guide",
          "Social profile setup",
        ],
      },
      {
        name: "UI/UX Design",
        items: [
          "Web and mobile app interfaces",
          "Wireframes to high-fidelity screens",
          "Dashboards and SaaS products",
          "User-focused flows",
        ],
      },
      {
        name: "Pitch Deck & Proposal Design",
        items: [
          "Investor-ready pitch decks",
          "Business and sponsorship proposals",
          "Clean, persuasive layouts",
          "Client presentation decks",
        ],
      },
    ],
    related: ["as5-group", "a-message-for-her"],
    faq: [
      [
        "How many logo concepts do I get?",
        "The starter pack includes one considered logo concept with revisions. More concepts can be added to your quote.",
      ],
      [
        "Will I get the source files?",
        "Yes. You get the final files in every format you need, plus the source files once the project is paid in full.",
      ],
      [
        "Can you work with my existing logo?",
        "Yes. We can refine it, or build a full brand system around it.",
      ],
    ],
  },
  {
    slug: "social-media",
    short: "Channels, posts, podcasts",
    name: "Social media & content",
    icon: "mic",
    homeIcon: "chat",
    homeDesc:
      "We run your channels and produce the content, including full podcast production.",
    homeIncludes: [
      "Instagram and TikTok management",
      "Podcast recording and editing",
      "Publishing to YouTube and Spotify",
      "Branded post and flyer design",
    ],
    listDesc:
      "We run your channels and make the content, from Instagram posts to full podcast production.",
    listIncludes: [
      "Instagram and TikTok management",
      "Podcast recording, editing and publishing",
      "YouTube and Spotify channel management",
      "Branded post and flyer design",
    ],
    listPrice: "Channels, posts, podcasts",
    listImage: { key: "podcastGrid", label: "Podcast or Instagram grid" },
    seenIn: "Seen in: A Message For Her, AS5 Group",
    heroDesc:
      "We run your channels and make the content, from Instagram posts to full podcast production.",
    heroImage: { key: "socialHero", label: "Podcast recording or Instagram grid" },
    included: [
      ["Channel management", "We plan, post and keep your accounts active."],
      ["Post design", "Branded posts and flyers, designed in Figma."],
      ["Podcast recording", "Recording sessions handled end to end."],
      ["Editing", "Episodes edited for audio, video and clips."],
      ["Publishing", "YouTube, Spotify, TikTok and Instagram, on schedule."],
      ["Short-form clips", "Moments cut for Reels, TikTok and Shorts."],
    ],
    packages: [
      {
        name: "Social Media Design Pack",
        featured: true,
        items: [
          "3 branded social media flyers",
          "Clean, scroll-stopping designs",
          "Product launches and events",
          "Fast turnaround",
        ],
      },
      {
        name: "Social Media Management",
        items: [
          "Monthly content plan",
          "Post design and captions",
          "Posting on your channels",
          "Monthly check-in",
        ],
      },
      {
        name: "Podcast Production",
        items: [
          "Recording and editing",
          "Publishing to all platforms",
          "Short-form clips",
          "Channel management",
        ],
      },
    ],
    related: ["a-message-for-her", "as5-group"],
    faq: [
      [
        "Which platforms do you manage?",
        "Instagram, TikTok, YouTube and Spotify today. Ask us about others.",
      ],
      [
        "Do you need access to my accounts?",
        "Yes, as a collaborator or manager wherever the platform allows it, so you always keep ownership of your accounts.",
      ],
      [
        "Can you record podcasts outside Abuja?",
        "Yes. We can plan remote recording sessions, or edit and publish episodes you record yourself.",
      ],
    ],
  },
  {
    slug: "ai-automation",
    short: "Agents, workflows, leads",
    name: "AI & automation",
    icon: "wand",
    homeIcon: "wand",
    homeDesc:
      "AI agents and automations that take repetitive work off your team. We run our own.",
    homeIncludes: [
      "AI agents for customer chats",
      "Workflow automation",
      "Lead generation systems",
      "Connected to the tools you use",
    ],
    listDesc:
      "AI agents and automations that take repetitive work off your team. We built and run our own lead generation system, so we know what works in practice.",
    listIncludes: [
      "AI agents for customer conversations",
      "Workflow automation between your tools",
      "Lead generation systems",
      "Multilingual support",
    ],
    listPrice: "Custom quote",
    listImage: { key: "automationFlow", label: "Illustration / automation flow" },
    seenIn: "Seen in: our internal lead system",
    heroDesc:
      "AI agents and automations that take repetitive work off your team. We built and run our own lead generation system, so we build from experience.",
    heroImage: { key: "automationFlow", label: "Illustration / automation flow" },
    included: [
      ["Intent and workflow design", "We map the conversations and tasks worth automating."],
      ["Custom AI personality", "An agent that sounds like your business."],
      ["Multilingual support", "Answer customers in the languages they use."],
      ["Platform integration", "Connected to WhatsApp, your website or your tools."],
      ["Lead generation", "Systems that find and qualify prospects."],
      ["Deployment and tuning", "We launch it, watch it, and improve it."],
    ],
    packages: [
      {
        name: "AI Customer Agent",
        featured: true,
        items: [
          "Answers common questions",
          "Captures leads",
          "Hands over to a human",
          "Your tone of voice",
        ],
      },
      {
        name: "Workflow Automation",
        items: [
          "Connects your tools",
          "Removes manual data entry",
          "Notifications and reports",
          "Documented for your team",
        ],
      },
      {
        name: "Lead Generation System",
        items: [
          "Built on what runs our own pipeline",
          "Finds and qualifies prospects",
          "Organised follow-up",
          "Regular reporting",
        ],
      },
    ],
    proof: {
      label: "Built in-house first",
      title: "We run this on ourselves.",
      body: "Our own lead generation system finds and organises prospects for Goju every week. When we build one for you, it starts from what already works for us.",
    },
    faq: [
      [
        "Is my business too small for AI?",
        "No. Small teams often gain the most, because one good automation can save hours every week.",
      ],
      [
        "Which tools can you connect to?",
        "WhatsApp, your website, email, Google Workspace and most tools that offer an API.",
      ],
      [
        "What happens if the agent gets something wrong?",
        "Agents hand difficult conversations to a person on your team, and we review and tune them after launch.",
      ],
    ],
  },
];

export const servicePackages = [
  ["Website Design & Development", "Custom business website, designed and built"],
  ["UI/UX Design", "Web and mobile app interfaces in Figma"],
  ["Landing Page Design", "One focused page for a product or campaign"],
  ["Brand Identity Starter Pack", "Logo concept, colours, type and a basic guide"],
  ["Pitch Deck & Proposal Design", "Decks for investors, sponsors and clients"],
  ["Social Media Design Pack", "3 branded flyers for launches and events"],
  ["Website Fixes & Updates", "Layout, mobile, content and bug fixes"],
];

export const getService = (slug) => services.find((s) => s.slug === slug);

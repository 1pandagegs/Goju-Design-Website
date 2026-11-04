// Client case studies, taken from the Redesign 2026 Figma file.
// Image `key`s map to files in src/assets/images (see src/data/images.js).

export const caseStudies = [
  {
    slug: "a-message-for-her",
    name: "A Message For Her",
    status: "Ongoing",
    chips: ["Podcast production", "Social media"],
    filters: ["social"],
    cardDesc:
      "Full production for a podcast about womanhood, faith and becoming: recording, editing, four social channels and the website.",
    cardImage: { key: "amfhCard", label: "A Message For Her, episode or channel visual" },
    category: "Podcast and media",
    intro:
      "A podcast for women navigating growth, identity, faith and becoming. We produce every episode and run every channel it lives on.",
    meta: [
      ["Client", "A Message For Her"],
      ["Industry", "Podcast and media"],
      ["Services", "Production, social media, website"],
      ["Status", "Ongoing, new episodes every other Sunday"],
      ["Links", "youtube.com/@a_message_for_her"],
    ],
    heroImage: { key: "amfhYoutube", label: "A Message For Her, channel art or recording session" },
    brief:
      "A new podcast needed to show up every other Sunday, look and sound consistent across four platforms, and grow an audience, without the host having to handle production herself.",
    did: [
      ["Production", "We record, edit and master each episode, then cut short clips from the strongest moments."],
      ["Channels", "We publish and manage YouTube, Spotify, TikTok and Instagram on a fortnightly schedule."],
      ["Website", "We designed and built a soft, story-led site with episodes, clips and a collaboration enquiry form. Launching soon."],
    ],
    gallery: [
      { key: "amfhChannel", label: "YouTube channel page" },
      { key: "amfhClips", label: "Short-form clip frames" },
      { key: "amfhHome", label: "Website homepage" },
      { key: "amfhEpisodesPage", label: "Website episodes page" },
    ],
    results: [
      ["33", "YouTube subscribers"],
      ["5", "Episodes produced and published"],
      ["4", "Platforms managed: YouTube, Spotify, TikTok, Instagram"],
    ],
    quote:
      "“I was super impressed with how the whole podcast was coordinated and delivered, from production to content management and distribution.”",
    quoteBy: "Gina, Host, A Message For Her",
    next: "as5-group",
  },
  {
    slug: "as5-group",
    name: "AS5 Group",
    status: "Ongoing",
    chips: ["Website", "Social media"],
    filters: ["websites", "social"],
    cardDesc:
      "Website and Instagram for an Abuja real estate developer, built around their projects and how they deliver them.",
    cardImage: { key: "as5Card", label: "as5group.com, project page screenshot" },
    category: "Real estate · Abuja",
    intro:
      "AS5 Group plans, develops and builds residential, lifestyle and institutional projects in Abuja. We built their website and run their Instagram.",
    meta: [
      ["Client", "AS5 Group"],
      ["Industry", "Real estate development and construction"],
      ["Location", "Mabushi, Abuja"],
      ["Services", "Website, Instagram management"],
      ["Links", "as5group.com · @as5_group"],
    ],
    heroImage: { key: "as5Hero", label: "as5group.com homepage, Three of Us estate render" },
    brief:
      "AS5 needed a site that proves delivery instead of just promising it: real projects, clear status, and an easy way for serious enquiries to reach the team.",
    did: [
      ["Project-led website", "A portfolio where every project carries its status (In progress, Completed, Awarded) and its own page, including Three of Us, Soho Boulevard and their Federal Ministry contracts."],
      ["WhatsApp-first contact", "Consultation and enquiry routes on every page go straight to WhatsApp, phone or email."],
      ["Instagram", "We design and post branded content for @as5_group, so the feed matches the website."],
    ],
    gallery: [
      { key: "as5Project", label: "Project page: Three of Us" },
      { key: "as5Portfolio", label: "Portfolio grid with status labels" },
      { key: "as5Services", label: "AS5 services page" },
      { key: "as5Instagram", label: "AS5 Instagram grid (@as5_group)" },
    ],
    results: [
      ["4.2×", "Instagram audience growth since we took over"],
      ["147", "Instagram followers, up from 35"],
      ["4", "Projects documented with their own pages"],
    ],
    quote: "“I love the website. It feels contemporary and premium, and it tells our story perfectly.”",
    quoteBy: "Engr Abuba Sahabi, CEO, AS5 Group",
    next: "sabali-limited",
  },
  {
    slug: "sabali-limited",
    name: "Sabali Limited",
    status: "Live",
    chips: ["Website", "Rebuild"],
    filters: ["websites"],
    cardDesc:
      "Rebuilt an export company site from a no-code tool into hand-written code the client fully owns.",
    cardImage: { key: "sabCard", label: "sabalilimited.com, commodities page screenshot" },
    category: "Export and commodities",
    intro:
      "Sabali is a Nigerian export trading company supplying ginger, turmeric, hibiscus, sesame and more to international buyers. We rebuilt their website from the ground up.",
    meta: [
      ["Client", "Sabali Limited"],
      ["Industry", "Export trading and commodity supply"],
      ["Location", "Nigeria"],
      ["Services", "Website rebuild, deployment, forms"],
      ["Links", "sabalilimited.com"],
    ],
    heroImage: { key: "sabHome", label: "sabalilimited.com homepage" },
    brief:
      "Sabali’s site lived on Base44, a no-code platform. It worked, but the company did not own its code and was tied to the platform. They needed the same site, rebuilt properly and fully theirs.",
    did: [
      ["Hand-coded rebuild", "Rebuilt in clean HTML, CSS and JavaScript on a multi-page Vite setup, keeping the design the client already approved."],
      ["Their domain, their hosting", "Deployed on Vercel with the client’s own domain and clean page URLs."],
      ["Working forms", "Contact, partner and newsletter forms now go straight to the client’s inbox."],
    ],
    gallery: [
      { key: "sabCommodities", label: "Commodities page" },
      { key: "sabPartner", label: "Partner With Us page" },
      { key: "sabMobile", label: "Mobile view" },
      { key: "sabBefore", label: "Before: Base44 version" },
    ],
    results: [
      ["100", "Lighthouse accessibility score"],
      ["100", "Lighthouse best-practices score"],
      ["100%", "Code owned by the client, no platform lock-in"],
    ],
    quote:
      "“The website is perfect. It represents Sabali exactly, and the move to hard code did not miss a single detail.”",
    quoteBy: "Abdullahi Junaid, CEO, Sabali Limited",
    next: "a-message-for-her",
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);

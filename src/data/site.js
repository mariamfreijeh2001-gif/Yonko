// Global site content: brand, navigation, and the simple text sections.
// Edit copy here — components read from these objects.

export const brand = { name: "YONKO", accent: "CAPITAL" };

export const nav = [
  { label: "Home", href: "#hero" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Contact Us", href: "#contact" },
  { label: "Our Partners", href: "#partners" },
];

export const hero = {
  title: "Trust. Trigger. Transform.",
  // Two parts: on desktop they break into exactly 2 lines; on mobile the break
  // is hidden so the text flows and wraps naturally.
  subtitle: [
    "Yonko Capital is a discreet Emirati partner and trusted advisor to family offices",
    "and private investors, delivering end-to-end solutions across complex situations.",
  ],
};

export const trustedPartner = {
  heading: "Trusted Partner",
  body: "We work alongside family offices and private investors as a trusted partner, bringing clarity, discretion, and hands-on support to the decisions that matter most.",
};

export const howWeWork = {
  heading: "How We Work",
  image: "media-hww",
  paragraphs: [
    "Every engagement starts with a clear focus. We take the time to understand our clients’ goals, challenges, and market realities before shaping a tailored path forward.",
    "We work selectively with a small number of clients to stay focused and ensure senior-level involvement throughout.",
  ],
};

export const contact = {
  heading: "Let's Talk",
  image: "media-talk",
  paragraphs: [
    "We take on a limited number of mandates at a time to ensure full focus and commitment.",
    "To start a conversation, reach out directly:",
  ],
  address: "The V Building, 4th floor, Dubai, United Arab Emirates",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=25.061522124811372,55.241057111470994",
  email: "info@yonkocapital.com",
  linkedin: "https://www.linkedin.com/company/yonkocapital/",
};

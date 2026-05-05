const config = {
  // ─── Identity ────────────────────────────────────────────────────────────────
  name: "IBD Community Network",
  shortName: "IBD Community",
  tagline: "Your IBD Community Network",
  description:
    "Get access to expert resources, connect with specialists, and stay informed about the latest in IBD care.",
  mission:
    "To empower individuals living with IBD through education, expert connections, and community support.",
  foundingStory:
    "IBD Community Network was founded with a simple yet powerful mission: to create a comprehensive resource for individuals affected by inflammatory bowel disease. We recognized the need for a platform that connects patients with qualified specialists, provides evidence-based educational content, and fosters a supportive community.",

  // ─── Contact ─────────────────────────────────────────────────────────────────
  contactPhone: "1-800-IBD-HELP",
  contactEmail: "hello@ibdcommunity.org",

  // ─── Branding defaults (overridable from dashboard) ──────────────────────────
  brand: {
    primaryColor: "#2563eb",
    accentColor: "#7c3aed",
    fontFamily: "Inter",
  },

  // ─── Terminology: what this community calls its members and experts ───────────
  // e.g. "Specialists" / "Providers" / "Coaches" / "Mentors"
  labels: {
    expert: "Expert",
    expertPlural: "Experts",
    // e.g. "name, specialty, or location" — shown in search placeholders
    expertSearchHint: "name, specialty, or location",
    // e.g. "Specialty" / "Discipline" / "Focus Area"
    expertFilterLabel: "Specialty",
  },

  // ─── Features: toggle pages/sections on or off ───────────────────────────────
  features: {
    // Show the US map on the Experts page (only useful for US-based communities)
    expertsMap: true,
    events: true,
    // Show "Request Appointment" on expert detail pages
    appointmentRequests: true,
  },

  // ─── SEO / meta ──────────────────────────────────────────────────────────────
  seo: {
    titleTemplate: "%s | IBD Community Network",
    defaultTitle: "IBD Community Network",
    twitterHandle: "@IBDCommunity",
  },
} as const;

export default config;

export default {
  nav: {
    about: "About",
    experience: "Experience",
    work: "Work",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    subtitle: "Salesforce Developer · Belo Horizonte, BR",
    headline: "I build Salesforce systems that talk to other systems —",
    headlineAccent: "securely",
    description:
      "Apex, LWC, integrations, and the architecture decisions that hold them together.",
    cta: "View work",
    ctaSecondary: "Get in touch",
  },
  about: {
    title: "About",
    bio: [
      "I've worked with Salesforce for five years. Apex, LWC, Flows, REST integrations, plus the permission models and OWD configuration that make any of it safe to deploy. Right now I'm at Loovi, redesigning permission architecture and writing the Apex REST endpoints that handle our SAP traffic. In 2024 I took eight months off Salesforce to join EY's IT audit team. SOX compliance, controls testing, basically reviewing software from the other side of the table. Useful experience. I came back to development knowing more than I left with.",
      "I also build things outside work. BitterSuite is a globe-based radio aggregator written in Next.js and Supabase, somewhere between Radio Garden and old Mac OS aesthetics. There's a few Notion widgets running on Vercel, and a Discord bot that pulls answers from a Markdown file using the Claude API. These are personal projects, not products. They run, and they solve problems I actually have.",
    ],
    availableForLabel: "Available for",
    availableForValue: "Remote Salesforce work · Contract projects",
    languagesLabel: "Languages",
    languagesValue: "Portuguese (native) · English (B2)",
    locationLabel: "Currently in",
    locationValue: "Belo Horizonte, BR",
  },
  experience: {
    title: "Experience",
    earlierTitle: "Earlier Salesforce experience",
    positions: "positions",
    currentRoles: [
      {
        company: "Loovi",
        role: "Salesforce Developer",
        period: "Oct 2025 — Now",
        bullets: [
          "Redesigned the case object's permission architecture: moved from profile sprawl to a least-privilege model with private OWD, a thin base profile, and modular permission sets. Configured ownership-based sharing rules to grant the read/write access that private orgs make tricky.",
          "Built custom Apex REST endpoints (@HttpPost) to ingest data from an external portal. Handles complex JSON deserialization and creates cases plus satellite records in one transaction, keeping relational integrity and atomicity.",
          "Designed Record-Triggered Flows for SLA management, integrated with Apex actions for the heavier business logic. Built LWCs embedded in Screen Flows (progress indicators) to guide multi-step user flows.",
        ],
        tags: ["Apex", "LWC", "Apex REST", "Flow", "Permissions", "IAM"],
      },
      {
        company: "Etho IT Solutions",
        role: "Salesforce Developer",
        period: "Mar 2025 — Aug 2025",
        bullets: [
          "Sustained client Salesforce orgs through recurring bug analysis and error correction, keeping business operations stable.",
          "Built and maintained new Apex and LWC features as part of the org's continuous improvement cycle.",
          "Contributed to technical and functional improvement initiatives across development cycles, plus internal user support.",
        ],
        tags: ["Apex", "LWC", "Sustaining"],
      },
      {
        company: "EY",
        role: "Technology Risk Trainee",
        period: "Jul 2024 — Feb 2025",
        bullets: [
          "Audited IT controls in large corporate clients under SOX requirements, focused on technology risk and compliance.",
          "Identified gaps in internal controls and helped build mitigation plans, strengthening information security governance.",
          "Drafted strategic reports for risk leadership and internal audit teams, with findings used in their decision-making.",
        ],
        tags: ["SOX", "IT Audit", "Compliance", "Governance"],
      },
    ],
    earlierRoles: [
      { company: "Poupex", role: "Salesforce Developer", period: "May — Jul 2024", line: "Customer registration automations and integrations in Salesforce. Focused on reducing manual errors and accelerating client onboarding." },
      { company: "Finlândia Seguros", role: "Salesforce Developer", period: "Dec 2023 — Jan 2024", line: "Sales pipeline customizations, performance dashboards, and lead-cycle automations for an insurance brokerage." },
      { company: "CI&T", role: "Salesforce Developer", period: "Feb — Aug 2023", line: "International digital transformation projects in agile teams: process automation, system integrations, Clean Code and DevOps practices." },
      { company: "OSF Digital", role: "Salesforce Developer", period: "Sep 2022 — Jan 2023", line: "Custom Salesforce Core solutions and external integrations on agile international projects." },
      { company: "IBM", role: "Salesforce Developer", period: "Sep 2021 — Aug 2022", line: "OmniStudio (Vlocity): OmniScripts, DataRaptors, Integration Procedures, FlexCards, plus LWCs and Apex classes/triggers extending the platform." },
      { company: "Everymind", role: "Salesforce Developer", period: "Feb — Oct 2021", line: "Salesforce platform sustaining: bug fixes, support, and ongoing maintenance work." },
      { company: "JFOX IT Partners", role: "Salesforce Intern", period: "Feb 2020 — Feb 2021", line: "Salesforce internship. First hands-on with Community Cloud (now Experience Cloud) and LWC, plus general platform fundamentals." },
    ],
  },
  work: {
    title: "Selected Work",
    readCase: "Read case study",
    cases: [
      {
        number: "01",
        slug: "contract-retention-api",
        title: "Contract Retention API",
        summary: "Apex REST endpoint for SAP-driven contract freezing with conditional pricing. Wrapped DML and notifications in an error-isolated transaction.",
        tags: ["Apex REST", "SAP Integration", "Async"],
      },
      {
        number: "02",
        slug: "third-party-collections-deadlock",
        title: "Collections Portal: Async Refactor (in progress)",
        summary: "LWC in a third-party collections portal hit governor limits on load and had a JavaScript syntax error. Fixed with async fetching and a one-line code correction.",
        tags: ["LWC", "Experience Cloud", "Governor Limits"],
      },
      {
        number: "03",
        slug: "invoice-export-refactor",
        title: "Collections Portal: Data Audit (in progress)",
        summary: "Audit triggered by a field bug. Found SOQL queries inside loops and a sharing model that hid most of the data agents needed. Fixed both.",
        tags: ["Apex", "LWC", "Governor Limits", "Sharing"],
      },
    ],
  },
  projects: {
    title: "Personal Projects",
    featured: {
      eyebrow: "Featured Project",
      title: "BitterSuite",
      description:
        "A global radio explorer built around a 3D WebGL globe. Click anywhere on Earth, tune into a local station, and hear what's playing. The navigation takes cues from Radio Garden; the visual language comes from Poolsuite — retro computer aesthetics, monospaced type, draggable modal windows.",
      capabilities: [
        "3D globe navigation with Fly-To camera animations based on text input or GPS coordinates",
        "Geospatial clustering within a 55km radius to keep WebGL rendering manageable in dense markets",
        "Audio engine hardened against CORS errors and Chrome's AbortError on rapid stream switching",
        "Random intercept: jumps to a working station anywhere in the world",
      ],
      tags: ["Next.js", "TypeScript", "Supabase", "Auth.js", "Zustand", "react-globe.gl", "Tailwind"],
      liveUrl: "https://bitter-project.vercel.app/",
      liveLabel: "Live",
      note: "Repository is private — commercial project in development. iOS, iPadOS, macOS, and Android in roadmap.",
    },
    others: [
      {
        title: "claude-docs-bot",
        description: "Discord Q&A bot powered by Claude. Takes any Markdown file as its knowledge base and answers questions from that source only. Currently running with Salesforce REST API documentation.",
        tags: ["Python", "discord.py", "Anthropic API"],
        repoUrl: "https://github.com/EstevaoSantos97/claude-docs-bot",
        codeLabel: "Code",
      },
      {
        title: "Notion Progress Bar",
        description: "Progress bar widget for Notion pages. Pure HTML and JavaScript, served from Vercel and embedded via iframe. Built for personal project tracking.",
        tags: ["HTML", "JS", "Vercel"],
        repoUrl: "https://github.com/EstevaoSantos97/Barra-de-progresso-notion",
        codeLabel: "Code",
      },
    ],
  },
  skills: {
    title: "Skills",
    categories: [
      { category: "Salesforce Platform", items: ["Apex", "LWC", "Aura", "Flow Builder", "Experience Cloud", "OmniStudio (Vlocity)", "Permission architecture", "Sharing & OWD"] },
      { category: "Integrations", items: ["Apex REST", "Named Credentials", "SAP integration", "OAuth2"] },
      { category: "Tooling", items: ["Salesforce CLI", "Git", "Bitbucket", "Cursor", "Postman", "Change Sets"] },
      { category: "Web", items: ["TypeScript", "React", "Next.js", "Tailwind", "Supabase", "Vercel", "Python"] },
      { category: "Languages", items: ["Portuguese (native)", "English (B2)"] },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Open to remote Salesforce work and contract projects.",
  },
  footer: {
    builtWith: "Built with Astro",
  },
  caseStudy: {
    backLink: "Back to Selected Work",
  },
} as const;

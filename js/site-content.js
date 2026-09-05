/* Page copy and structured content. Client settings belong in config/config.js. */
(function () {
  "use strict";
  var runtime = window.SITE_CONFIG || {};
  var handlerEndpoint = runtime.form && runtime.form.handlerPath;
  var content = {
  navigation: [
    { label: "Who We Help", url: "/index.html#fit" },
    { label: "Case Studies", url: "/case-studies.html" },
    { label: "Our Process", url: "/index.html#process" },
    { label: "About", url: "/about.html" }
  ],

  cta: {
    primary: { label: "Get a Free Audit!", shortLabel: "Get Free Audit", url: "/index.html#contact" },
    booking: { shortLabel: "Book a Call", url: "/index.html#contact" },
    secondary: { label: "See Case Studies", url: "/case-studies.html" },
    cases: { label: "Request an Account Review", url: "/index.html#contact" }
  },

  common: {
    resultLabel: "Recent account result",
    auditIncludes: ["Campaign structure review", "Tracking gap check", "Prioritized action plan"],
    finalCtaTitle: "Find out where your Google Ads account is leaving growth on the table.",
    finalCtaText: "Get a business-focused review of campaigns, tracking and the decisions that can improve performance."
  },

  pages: {
    home: {
      hero: {
        eyebrow: "{{brand.tagline}}",
        title: "Google Ads built around business outcomes.",
        titleAccent: "outcomes.",
        text: "We connect advertising, analytics and business data to generate more qualified leads, sales and measurable growth.",
        trustLine: "Built for growth teams that value clarity over vanity metrics.",
        chartTitle: "Performance Overview",
        periodLabel: "Last 30 days",
        totalLabel: "Total Revenue",
        totalValue: "$128,430",
        signalsLabel: "Connected performance ecosystem",
        metrics: [
          { icon: "circle-dollar", value: "$128,430", label: "Revenue", trend: "↑ 18.6%" },
          { icon: "chart", value: "5.42x", label: "ROAS", trend: "↑ 0.8x" },
          { icon: "gauge", value: "$29.19", label: "Cost per lead", trend: "↓ 14.2%" },
          { icon: "users", value: "316", label: "Qualified leads", trend: "↑ 27.4%" }
        ],
        funnel: [
          { icon: "mouse-pointer", title: "Google Ads", text: "Spend", value: "$23,700" },
          { icon: "activity", title: "Landing Page", text: "Sessions", value: "12,904" },
          { icon: "users", title: "Leads", text: "New leads", value: "812" },
          { icon: "badge-check", title: "Qualified", text: "Qualified leads", value: "316" },
          { icon: "circle-dollar", title: "Sales", text: "New customers", value: "74" }
        ],
        signals: [
          { logo: "/assets/icons/services/google-search.svg", title: "Search", text: "High intent" },
          { logo: "/assets/icons/services/google-ads.svg", title: "Performance Max", text: "Cross-channel" },
          { logo: "/assets/icons/services/google-shopping.svg", title: "Shopping", text: "Product demand" },
          { logo: "/assets/icons/services/youtube.svg", title: "YouTube", text: "Video reach" },
          { logo: "/assets/icons/services/google-display-video-360.svg", title: "Display", text: "Remarketing" },
          { logo: "/assets/icons/services/google-tag-manager.svg", title: "Tag Manager", text: "Measurement" },
          { logo: "/assets/icons/services/google-analytics.svg", title: "Analytics", text: "Behaviour" },
          { logo: "/assets/icons/services/looker-studio.svg", title: "Looker Studio", text: "Reporting" }
        ]
      },
      outcomes: {
        eyebrow: "02 — Business outcomes.",
        title: "We don’t optimize for clicks. We optimize for business outcomes.",
        titleAccent: "business outcomes.",
        items: [
          {
            title: "Qualified Leads", value: "+27.4%", text: "More high-quality leads from your ideal customers.", visualLabel: "Lead funnel",
            chartValues: [100, 79, 57, 36],
            stats: [
              { label: "Impressions", value: "486K" }, { label: "Clicks", value: "14.2K" },
              { label: "Leads", value: "812" }, { label: "Qualified", value: "316" }
            ]
          },
          {
            title: "Revenue", value: "$128,430", text: "Revenue attributed to Google Ads during the measured period.", visualLabel: "Revenue over time", legend: "Revenue",
            chartValues: [32, 43, 46, 58, 52, 71, 66, 92, 79, 112, 87, 82, 105, 91, 121, 136],
            xLabels: ["Aug 5", "Aug 12", "Aug 26", "Sep 3"], yLabels: ["$150K", "$100K", "$50K", "$0"]
          },
          {
            title: "CPA / CPL", value: "−14.2%", text: "Lower acquisition cost after targeting and conversion-signal improvements.", visualLabel: "CPA trend", legend: "CPA",
            chartValues: [79, 70, 72, 61, 58, 47, 43, 42, 34, 38, 29, 31, 22, 24, 15, 12],
            xLabels: ["Aug 5", "Aug 12", "Aug 26", "Sep 3"], yLabels: ["$80", "$60", "$40", "$20"]
          },
          {
            title: "Data Quality", value: "96%", text: "Validated conversion coverage for more reliable decisions.", visualLabel: "Data quality score", centerLabel: "Validated", chartValues: [96],
            checks: ["Conversion Tracking", "UTM Consistency", "Audience Signals"]
          }
        ]
      },
      services: {
        eyebrow: "Our services",
        title: "Five capabilities. One connected growth engine.",
        text: "From paid media to automation, every capability is connected to performance—so growth compounds, not just campaigns.",
        ctaLabel: "Explore our services",
        ctaUrl: "/services.html",
        orbit: { centerLabel: "Revenue Growth", roasValue: "5.42x", roasLabel: "ROAS", revenueValue: "+18.6%", revenueLabel: "Revenue", cpaValue: "−14.2%", cpaLabel: "CPL" },
        items: [
          { title: "Google Ads Management", text: "Full-funnel campaigns that drive measurable growth.", status: "Active", chips: ["Search", "Shopping", "PMax"], metricLabel: "Revenue", metricValue: "$128,430", trend: "↑ 18.6%", period: "Last 30 days", chartValues: [22, 29, 28, 39, 43, 41, 53, 49, 61, 58, 69, 64] },
          { title: "Lead Generation", text: "Turn interest into qualified pipeline.", steps: ["Ad Click", "Landing Page", "Lead Form", "Qualified Lead"], metricLabel: "Leads (30 days)", metricValue: "812", trend: "↑ 11.5%" },
          { title: "E-commerce Growth", text: "Optimize product feed and increase revenue.", metricLabelA: "Feed health", metricValueA: "96%", trendA: "Healthy", metricLabelB: "ROAS (30 days)", metricValueB: "5.42x", trendB: "↑ 0.8x", period: "Last 30 days", chartValues: [34, 31, 39, 37, 46, 51, 48, 58, 63] },
          { title: "Tracking & Analytics", text: "Accurate data foundation for smarter decisions.", steps: ["Ads", "Analytics", "GTM", "CRM", "Revenue"] },
          { title: "Marketing Automation", text: "Automate reporting and alerts so you never miss what matters.", steps: ["Report", "Alert", "Actioned"] }
        ]
      },
      measurement: {
        eyebrow: "Measurement advantage",
        title: "Connect campaign activity to the outcomes your business values.",
        text: "A clearer feedback loop helps teams optimize beyond clicks and form fills.",
        visualLabel: "Closed-loop measurement",
        status: "Closed loop connected",
        dataFlowLabel: "Data flow",
        signalFlowLabel: "Optimization signal",
        nodes: [
          { icon: "mouse-pointer", title: "Ad click" },
          { icon: "activity", title: "Conversion" },
          { icon: "database", title: "CRM outcome" },
          { icon: "badge-check", title: "Qualified lead" },
          { icon: "circle-dollar", title: "Revenue" }
        ],
        benefits: [
          { icon: "target", title: "Conversion tracking", text: "Measure the actions that indicate genuine intent." },
          { icon: "badge-check", title: "Lead-quality feedback", text: "Distinguish a form fill from a qualified opportunity." },
          { icon: "circle-dollar", title: "Revenue attribution", text: "Give campaign decisions clearer commercial context." }
        ],
        resultLabel: "Optimization signal",
        resultText: "Verified lead quality and revenue inform the next campaign decision."
      },
      fit: {
        eyebrow: "Who we work best with",
        title: "Built for teams that need paid media connected to commercial reality.",
        text: "The approach adapts to different buying journeys without losing measurement discipline.",
        summary: "4 business models · 1 outcome system",
        ctaLabel: "Find your growth model",
        ctaUrl: "/services.html",
        items: [
          { image: "/assets/images/fit/lead-generation.webp", title: "Lead Generation", text: "For teams that care about qualified demand, not raw form volume.", outcomeIcon: "target", outcome: "Qualified demand" },
          { image: "/assets/images/fit/ecommerce.webp", title: "E-commerce", text: "For stores balancing revenue growth, efficiency and feed quality.", outcomeIcon: "arrow-up-right", outcome: "Profitable growth" },
          { image: "/assets/images/fit/b2b-saas.webp", title: "B2B / SaaS", text: "For longer sales cycles that need CRM and pipeline feedback.", outcomeIcon: "workflow", outcome: "Pipeline value" },
          { image: "/assets/images/fit/local-business.webp", title: "Local Business", text: "For businesses that need calls and enquiries tied to real outcomes.", outcomeIcon: "phone", outcome: "Booked enquiries" }
        ],
        connected: {
          label: "Connected outcome",
          title: "Commercial reality",
          image: "/assets/images/fit/commercial-reality.webp",
          steps: [
            { label: "Campaign signal" },
            { label: "Verified action" },
            { label: "Revenue context" }
          ],
          status: "Measurement loop ready"
        }
      },
      faq: {
        eyebrow: "Frequently asked questions",
        title: "Useful details before we talk.",
        text: "A few practical answers about fit, access and the account audit.",
        summary: "5 practical answers",
        visual: {
          eyebrow: "Quick clarity",
          title: "Start with the essentials.",
          image: "/assets/images/faq/question-mark.webp",
          topics: [
            { image: "/assets/images/faq/fit-mini.webp", label: "Fit" },
            { image: "/assets/images/faq/access-mini.webp", label: "Access" },
            { image: "/assets/images/faq/budget-mini.webp", label: "Budget" }
          ],
          status: "Free audit questions answered"
        },
        items: [
          { image: "/assets/images/faq/audit.webp", question: "What does the free audit cover?", answer: "We review account structure, measurement gaps and the clearest opportunities to investigate." },
          { image: "/assets/images/faq/business-fit.webp", question: "What types of businesses are the best fit?", answer: "The approach is designed for lead generation, e-commerce, B2B and local businesses that can connect advertising to meaningful outcomes." },
          { image: "/assets/images/faq/account-access.webp", question: "Do you need account access?", answer: "Read-only access is often the most useful option, but the appropriate review approach can be agreed first." },
          { image: "/assets/images/faq/budget.webp", question: "Is there a minimum advertising budget?", answer: "Fit depends on campaign complexity, economics and the decisions the account needs—not a generic threshold." },
          { image: "/assets/images/faq/after-audit.webp", question: "What happens after the audit?", answer: "You receive prioritized findings and a clear next-step conversation. There is no obligation to continue." }
        ],
        cta: "Still deciding? Start with the free audit"
      },
      finalCta: {
        eyebrow: "Free account audit",
        points: [
          { label: "Account structure review" },
          { label: "Tracking-gap review" },
          { label: "Prioritized action plan" }
        ]
      },
      system: {
        nodes: [
          { index: "01", title: "Google Ads", text: "Create qualified demand" },
          { index: "02", title: "Landing Page", text: "Turn intent into action" },
          { index: "03", title: "Lead", text: "Capture the right context" },
          { index: "04", title: "CRM", text: "Connect sales outcomes" },
          { index: "05", title: "Qualified", text: "Verify commercial fit" },
          { index: "06", title: "Sale", text: "Measure real value" }
        ]
      },
      cases: {
        eyebrow: "Case studies",
        title: "Performance stories, structured around the decisions that changed.",
        text: "Results are anonymized to protect client confidentiality. Performance varies by market, budget and starting point.",
        ctaLabel: "Explore case studies",
        ctaUrl: "/case-studies.html",
        secondaryCtaLabel: "See how the decision was made",
        secondaryCtaUrl: "/case-studies.html",
        storyLabel: "Featured performance story",
        challengeLabel: "Challenge",
        decisionLabel: "Decision",
        decision: "Restructure campaigns around category-level profit signals.",
        chartTitle: "Revenue & efficiency trend",
        chartPeriod: "Six-month engagement",
        decisionMarker: "Decision implemented",
        impactLabel: "Measured impact",
        featured: {
          sector: "DTC retail · 6-month engagement",
          title: "Scaling a product portfolio with clearer profit signals",
          challenge: "Acquisition cost was inconsistent across categories and the account lacked reliable profit context.",
          metrics: [
            { icon: "chart", value: "+34%", label: "Tracked revenue", status: "6-month change" },
            { icon: "target", value: "5.2x", label: "Blended ROAS", status: "End-of-period" },
            { icon: "arrow-up", value: "−18%", label: "Cost per order", status: "6-month change" },
            { icon: "activity", value: "+16%", label: "Conversion rate", status: "6-month change" }
          ]
        }
      },
      process: {
        eyebrow: "Our process",
        title: "A proven process. Transparent every step.",
        text: "A structured path from diagnosis to controlled, measurable growth.",
        summary: "5 stages \u00b7 one measurable system",
        pathImage: "/assets/images/process/process-path.webp",
        pathImageTablet: "/assets/images/process/process-path-tablet.webp",
        items: [
          { image: "/assets/images/process/audit.webp", title: "Audit", text: "Understand the account, economics, tracking and constraints.", action: "Diagnose" },
          { image: "/assets/images/process/strategy.webp", title: "Strategy", text: "Prioritize the changes with the clearest business rationale.", action: "Prioritize" },
          { image: "/assets/images/process/setup-launch.webp", title: "Setup & Launch", text: "Implement campaigns, data flows and measurement carefully.", action: "Activate" },
          { image: "/assets/images/process/optimize.webp", title: "Optimize", text: "Test, learn and improve against verified outcome signals.", action: "Improve" },
          { image: "/assets/images/process/scale.webp", title: "Scale", text: "Increase investment where economics and evidence support it.", action: "Grow" }
        ],
        caption: "Every stage produces a clearer decision for the next one."
      }
    },

    services: {
      hero: {
        title: "Performance marketing services."
      },
      overview: {
        eyebrow: "Three service groups",
        title: "Focused expertise, connected around commercial outcomes.",
        text: "Choose the area creating the biggest constraint. Each group can stand alone or connect with the others as one measurement-led growth system."
      },
      groups: {
        paidMedia: {
          label: "Demand & commerce",
          title: "Paid Media",
          text: "Google Ads and e-commerce campaign management built around qualified demand, revenue and efficient investment.",
          scope: "Search · Performance Max · Shopping · Demand Gen · Apps",
          linkLabel: "Explore Paid Media",
          url: "/paid-media.html"
        },
        leadMeasurement: {
          label: "Pipeline & evidence",
          title: "Lead Generation & Measurement",
          text: "Campaign journeys, conversion tracking and CRM feedback connected to lead quality and commercial progression.",
          scope: "Lead strategy · Tracking · Analytics · CRM · Attribution",
          linkLabel: "Explore Lead Generation & Measurement",
          url: "/lead-generation-measurement.html"
        },
        automationReporting: {
          label: "Clarity & control",
          title: "Automation & Reporting",
          text: "Decision-ready reporting, monitoring and practical workflows that reduce manual work without replacing judgment.",
          scope: "Reporting · Alerts · Pacing · CRM workflows · Feed monitoring",
          linkLabel: "Explore Automation & Reporting",
          url: "/automation-reporting.html"
        }
      },
      integration: {
        eyebrow: "One operating system",
        title: "Each capability makes the next decision clearer.",
        text: "Media creates demand. Measurement verifies what happened. Business data reveals value. Automation keeps the loop moving.",
        items: [
          { title: "Create demand", text: "Reach people with relevant intent across the right Google Ads inventory." },
          { title: "Verify value", text: "Connect conversions, qualified stages and revenue to the campaigns that influenced them." },
          { title: "Improve decisions", text: "Use the full signal—not isolated platform metrics—to decide what changes next." }
        ]
      }
    },

    cases: {
      hero: {
        eyebrow: "Case studies",
        title: "Results, not vanity metrics.",
        titleAccent: "metrics.",
        text: "Explore how strategy, measurement and business context can turn Google Ads into a more predictable growth engine."
      },
      methodologyNotice: "Client names and identifying details are withheld. Results compare the stated engagement period with the preceding equivalent period; individual outcomes vary.",
      filters: ["All", "Lead Generation", "E-commerce", "B2B", "Apps"],
      items: [
        { id: "commerce", category: "E-commerce", featured: true, sector: "DTC retail · 6 months", title: "Product portfolio growth with profit-aware signals", challenge: "Inconsistent acquisition cost and limited visibility across product categories.", strategy: "Restructured campaigns, improved feed inputs and connected revenue quality to bidding.", metric1: "+34%", metric1Label: "Tracked revenue", metric1Context: "Period over period", metric2: "5.2x", metric2Label: "Blended ROAS", metric2Context: "End-of-period", metric3: "2,184", metric3Label: "Purchases", metric3Context: "Six months", metric4: "−18%", metric4Label: "Cost per order", metric4Context: "Period over period", chart: "56,61,59,68,72,70,79,85,83,92,99,104" },
        { id: "saas", category: "Lead Generation", featured: false, sector: "B2B SaaS · 5 months", title: "Qualified SaaS pipeline over raw form volume", challenge: "Campaigns optimized every submission equally, despite large differences in fit.", strategy: "Imported qualified stages and shifted budget toward higher-intent segments.", metric1: "+41%", metric1Label: "Sales-qualified leads", metric1Context: "Period over period", metric2: "−19%", metric2Label: "Cost per qualified lead", metric2Context: "Period over period", metric3: "28%", metric3Label: "Lead-to-SQL rate", metric3Context: "End-of-period", metric4: "1.6x", metric4Label: "Influenced pipeline", metric4Context: "Period over period", chart: "22,26,25,31,35,39,38,44,49,52,57,62" },
        { id: "b2b", category: "B2B", featured: false, sector: "Professional services · 6 months", title: "Opportunity-focused acquisition for a complex sale", challenge: "Media reports ended at lead count and gave no view of opportunity quality.", strategy: "Connected CRM progression and cost per qualified opportunity to reporting.", metric1: "+29%", metric1Label: "Qualified opportunities", metric1Context: "Period over period", metric2: "−17%", metric2Label: "Cost per opportunity", metric2Context: "Period over period", metric3: "+24%", metric3Label: "Influenced pipeline", metric3Context: "Period over period", metric4: "23%", metric4Label: "Lead-to-opportunity rate", metric4Context: "End-of-period", chart: "18,21,25,24,29,33,31,37,40,43,47,51" },
        { id: "apps", category: "Apps", featured: false, sector: "Consumer app · 4 months", title: "App growth optimized beyond the install", challenge: "Install volume rose while the value of acquired users stayed unclear.", strategy: "Introduced in-app value events and separated acquisition by user quality.", metric1: "18,420", metric1Label: "Paid installs", metric1Context: "Four months", metric2: "−14%", metric2Label: "Cost per install", metric2Context: "Period over period", metric3: "+31%", metric3Label: "Key in-app actions", metric3Context: "Period over period", metric4: "+17%", metric4Label: "30-day active users", metric4Context: "Period over period", chart: "12,16,15,19,22,24,23,28,31,35,39,44" },
        { id: "local", category: "Lead Generation", featured: false, sector: "Multi-location services · 4 months", title: "Higher-intent local enquiries with cleaner call data", challenge: "Calls and forms were counted without distinguishing meaningful enquiries.", strategy: "Improved call tracking, query coverage and offline qualification feedback.", metric1: "+28%", metric1Label: "Qualified enquiries", metric1Context: "Period over period", metric2: "−16%", metric2Label: "Cost per qualified enquiry", metric2Context: "Period over period", metric3: "+22%", metric3Label: "Booked calls", metric3Context: "Period over period", metric4: "21%", metric4Label: "Landing-page CVR", metric4Context: "End-of-period", chart: "20,23,28,26,31,36,34,40,43,47,51,55" }
      ]
    },

    about: {
      hero: { eyebrow: "About {{brand.name}}", title: "Performance marketing with business context.", titleAccent: "business context.", text: "We connect Google Ads performance to real business outcomes—so every decision has a clearer reason." },
      decisionNodes: [
        { icon: "target", title: "Business goals", text: "Revenue · Profit · Lead quality" },
        { icon: "database", title: "Reliable data", text: "Clean tracking and integrations" },
        { icon: "chart", title: "Performance ads", text: "Strategy built to scale" },
        { icon: "refresh", title: "Better decisions", text: "Test, learn and compound" }
      ],
      principles: {
        eyebrow: "Our principles", title: "The standards behind every decision.",
        items: [
          { icon: "database", title: "Data before assumptions", text: "We build trust in the data, fix gaps and validate before scaling." },
          { icon: "chart", title: "Revenue before vanity metrics", text: "We optimize for commercial progress—not impressive-looking activity." },
          { icon: "users", title: "Lead quality before raw volume", text: "Demand matters when sales teams can meaningfully progress it." },
          { icon: "file-chart", title: "Transparent reporting", text: "Clear views, open communication and aligned expectations." }
        ]
      },
      framework: {
        eyebrow: "Decision framework", title: "A learning loop, not a list of tactics.", text: "Feedback makes every new test better informed.",
        items: [
          { index: "01", title: "Signal", text: "Identify opportunity" },
          { index: "02", title: "Analysis", text: "Find root causes" },
          { index: "03", title: "Decision", text: "Prioritize impact" },
          { index: "04", title: "Test", text: "Run and iterate" },
          { index: "05", title: "Feedback", text: "Measure and refine" }
        ]
      },
      ecosystem: { eyebrow: "Our ecosystem", title: "Connected tools for better decisions.", text: "A practical measurement stack keeps campaign, customer and revenue signals working together.", items: [
        { icon: "search", title: "Google Ads" },
        { icon: "activity", title: "Analytics" },
        { icon: "mouse-pointer", title: "Google Tag Manager" },
        { icon: "database", title: "CRM" },
        { icon: "shopping-cart", title: "Merchant Center" },
        { icon: "file-chart", title: "Reporting" },
        { icon: "workflow", title: "Automation" }
      ] },
      evidence: { eyebrow: "How we work", title: "A clear operating standard for every account.", text: "Ownership, assumptions and next actions stay visible from the first review through ongoing optimization.", items: [
        { value: "Clear", label: "Ownership and next actions" },
        { value: "Visible", label: "Tracking gaps and assumptions" },
        { value: "Regular", label: "Decision-focused reporting" },
        { value: "Tested", label: "Changes before broader scale" },
        { value: "Linked", label: "Media signals to business outcomes" }
      ] }
    },

    privacy: {
      eyebrow: "Legal", title: "Privacy Policy", updatedLabel: "Last updated", updated: "September 5, 2026",
      noticeTitle: "Your privacy matters.", noticeText: "We collect only the information needed to respond to requests, operate the website and protect its security.",
      sections: [
        { id: "introduction", title: "1. Introduction", paragraphs: ["{{brand.legalName}} (\"we\", \"us\" or \"our\") is responsible for the personal information processed through this website. This policy explains what we collect, why we use it, how long we retain it and the choices available to you."], bullets: [] },
        { id: "collection", title: "2. Information We Collect", paragraphs: ["We may collect information you provide directly when you contact us or request an account review."], bullets: ["Name and business email", "Website and information about your business", "Advertising goals and service interests", "Any other information you choose to provide"] },
        { id: "use", title: "3. How We Use Information", paragraphs: ["We process enquiry information to take steps at your request, respond to your message and assess whether our services are relevant. We also process limited technical information where necessary for website security, reliability and compliance with legal obligations."], bullets: ["Respond to enquiries and provide requested information", "Assess service fit and prepare recommendations", "Prevent spam, misuse and security incidents", "Maintain records required for legal or operational purposes"] },
        { id: "sharing", title: "4. Information Sharing", paragraphs: ["We do not sell personal information. Information may be shared with service providers where necessary to operate the website or respond to a request, subject to appropriate safeguards."], bullets: [] },
        { id: "security", title: "5. Data Security", paragraphs: ["We use reasonable technical and organisational measures designed to protect personal information against unauthorised access, loss, alteration or disclosure. No internet transmission or storage method can be guaranteed completely secure."], bullets: [] },
        { id: "rights", title: "6. Your Rights & Choices", paragraphs: ["Depending on where you live, you may have rights to access, correct, delete, restrict or object to processing of your personal information, and to request portability or withdraw consent where processing relies on consent. You may also have the right to complain to your local data-protection authority. Use the contact form to make a request."], bullets: [], links: [{ label: "Submit a privacy request", url: "/index.html#contact" }] },
        { id: "cookies", title: "7. Cookies & Tracking", paragraphs: ["At the date of this policy, the website uses only a strictly necessary server-session cookie when the enquiry form is submitted. Analytics and advertising measurement may be introduced as part of the production marketing setup. Before optional tags are activated, appropriate consent controls must be implemented where required and the Cookie Policy must be updated with the technologies actually configured."], bullets: [], links: [{ label: "Read the Cookie Policy", url: "/cookie-policy.html" }] },
        { id: "retention", title: "8. Data Retention", paragraphs: ["Enquiry records are normally retained for up to 24 months after the last meaningful interaction, unless a longer period is required by law, needed to establish or defend legal claims, or agreed in a client contract. Security logs are normally retained for up to 90 days. We delete or anonymise information when it is no longer needed."], bullets: [] },
        { id: "children", title: "9. Children’s Privacy", paragraphs: ["This business website and our services are intended for adults acting in a professional capacity. We do not knowingly collect personal information from children through the enquiry form."], bullets: [] },
        { id: "changes", title: "10. Changes to This Policy", paragraphs: ["The policy may be updated as practices or legal requirements change. The current revision date appears at the top of this page."], bullets: [] },
        { id: "contact", title: "11. Contact Us", paragraphs: ["For privacy questions or requests, use the website contact form and state that your message concerns privacy."], bullets: [], links: [{ label: "Open the contact form", url: "/index.html#contact" }] }
      ]
    },

    cookies: {
      eyebrow: "Legal",
      title: "Cookie Policy",
      updatedLabel: "Last updated",
      updated: "September 5, 2026",
      noticeTitle: "Essential cookies support the form and remember your privacy choice.",
      noticeText: "Analytics and advertising measurement may be introduced during deployment, with appropriate consent controls where required.",
      sections: [
        { id: "about", title: "1. About this policy", paragraphs: ["This policy explains the cookies and related network requests used by the current version of the {{brand.legalName}} website. It should be read together with our Privacy Policy."], bullets: [] },
        { id: "current-cookie", title: "2. Cookies currently used", paragraphs: ["The website stores your privacy choice so the consent banner does not reappear on every visit. When you submit the enquiry form, the server also starts a short-lived session used for abuse prevention and rate limiting."], bullets: [], table: { caption: "Current cookie inventory", headers: ["Cookie", "Provider", "Category", "Purpose", "Duration"], rows: [["cookie_consent", "{{brand.name}} (first party)", "Strictly necessary", "Remembers whether optional analytics and advertising technologies were accepted or rejected.", "Up to 180 days"], ["PHPSESSID", "{{brand.name}} (first party)", "Strictly necessary", "Maintains the server session used to protect the enquiry form against repeated automated submissions.", "Browser session"]] } },
        { id: "no-tracking", title: "3. Analytics and advertising", paragraphs: ["At the date shown above, no Google Analytics, Google Ads conversion tag, advertising pixel or remarketing tag is installed on this website. The current cookie inventory therefore contains no analytics or advertising cookies.", "Google Analytics 4, Google Ads conversion measurement or similar tools may be added during deployment. Before activation, the production setup must implement an appropriate consent mechanism where required, configure the tags to respect the visitor’s choices, and update this policy with the actual providers, purposes, cookie names and retention periods. Google Analytics commonly uses first-party cookies such as _ga and _ga_<container-id>, but the final inventory depends on the tags and settings actually deployed."], bullets: [], links: [{ label: "Google Analytics cookie usage", url: "https://support.google.com/analytics/answer/11397207" }, { label: "Google Consent Mode overview", url: "https://developers.google.com/tag-platform/security/concepts/consent-mode" }] },
        { id: "fonts", title: "4. Google Fonts", paragraphs: ["The website loads the Manrope typeface from the Google Fonts API. This requires the browser to request a stylesheet and font files from Google. Google may receive routine connection information such as the IP address and browser user-agent when serving those resources. This request is not used by us for website analytics or advertising."], bullets: [], links: [{ label: "Google Privacy Policy", url: "https://policies.google.com/privacy" }] },
        { id: "manage", title: "5. Managing your choices", paragraphs: ["Use Cookie settings in the website footer to accept or reject optional categories at any time. You can also inspect, block or delete cookies through your browser settings. Blocking essential cookies may prevent the form’s security controls or saved privacy choice from working correctly, but it does not prevent access to ordinary website content."], bullets: [] },
        { id: "changes", title: "6. Changes to this policy", paragraphs: ["We update this policy when the website’s cookies, embedded services or measurement setup changes. The revision date at the top identifies the current version."], bullets: [] },
        { id: "contact", title: "7. Contact us", paragraphs: ["For questions about cookies or privacy, use the website contact form and state that your message concerns privacy."], bullets: [], links: [{ label: "Open the contact form", url: "/index.html#contact" }] }
      ]
    },

    terms: {
      eyebrow: "Legal", title: "Terms of Service", updatedLabel: "Last updated", updated: "September 3, 2026",
      noticeTitle: "A clear working agreement matters.", noticeText: "These terms govern use of this website. Client services are governed by a separate signed agreement.",
      sections: [
        { id: "acceptance", title: "1. Acceptance of Terms", paragraphs: ["By accessing or using this website, you agree to these terms. If you do not agree, do not use the website."], bullets: [] },
        { id: "services", title: "2. Website and Services", paragraphs: ["Website information is provided for general business purposes. Specific services, deliverables and commercial terms are governed by a separate written agreement."], bullets: [] },
        { id: "responsibilities", title: "3. User Responsibilities", paragraphs: ["You agree to provide accurate information, use the website lawfully and avoid interfering with its security or operation."], bullets: ["Do not submit unlawful or harmful content", "Do not attempt unauthorized access", "Do not misuse forms or automated systems"] },
        { id: "intellectual-property", title: "4. Intellectual Property", paragraphs: ["Unless otherwise stated, the website design, copy, branding and original materials are owned by or licensed to {{brand.legalName}} and are protected by applicable intellectual-property laws. You may view the website for ordinary business use but may not reproduce or commercially exploit its content without permission."], bullets: [] },
        { id: "disclaimers", title: "5. No Performance Guarantee", paragraphs: ["Advertising performance depends on market conditions, competition, budgets, product economics, websites, sales processes and other factors outside our control. Past or reported results do not guarantee future performance. Website content is general information and is not financial, legal or tax advice."], bullets: [] },
        { id: "liability", title: "6. Limitation of Liability", paragraphs: ["To the maximum extent permitted by applicable law, {{brand.legalName}} is not liable for indirect, incidental, special or consequential loss arising from use of, or inability to use, this website. Nothing in these terms excludes liability that cannot lawfully be excluded or limited."], bullets: [] },
        { id: "third-party", title: "7. Third-Party Services", paragraphs: ["Links or integrations with third-party services do not imply endorsement. Third-party services are governed by their own terms and policies."], bullets: [] },
        { id: "termination", title: "8. Suspension and Termination", paragraphs: ["Access may be restricted where necessary to protect the website, comply with law or address misuse."], bullets: [] },
        { id: "law", title: "9. Governing Law", paragraphs: ["These website terms are governed by the laws applicable where {{brand.legalName}} is established, without limiting mandatory rights you may have under the laws of your place of residence. Courts with jurisdiction under applicable law may hear disputes relating to these terms."], bullets: [] },
        { id: "changes", title: "10. Changes to These Terms", paragraphs: ["Terms may be updated from time to time. The current revision date appears at the top of this page."], bullets: [] },
        { id: "contact", title: "11. Contact", paragraphs: ["For questions about these terms, use the website contact form."], bullets: [], links: [{ label: "Open the contact form", url: "/index.html#contact" }] }
      ]
    }
  },

  form: {
    audit: {
      endpoint: handlerEndpoint || "/php/send-form.php",
      title: "Request your free audit",
      intro: "Share your website and primary goal. We’ll reply with the next step.",
      submitLabel: "Request free audit",
      sendingLabel: "Sending…",
      successMessage: "Thank you! We have successfully received your request. Our team will review your information and get back to you shortly.",
      failureMessage: "We could not send your request. Please wait a moment and try again.",
      validationMessage: "Please check the highlighted fields.",
      labels: { name: "Name", email: "Business Email", website: "Website", needHelp: "What do you need help with?", message: "Main Goal / Message", consent: "I agree to be contacted about this request." },
      placeholders: { name: "Your full name", email: "you@company.com", website: "https://yourwebsite.com", needHelp: "Select a service", message: "Tell us briefly what you want to improve…" },
      needs: ["Paid Media", "Lead Generation & Measurement", "Automation & Reporting", "Not sure yet"]
    }
  },

  legal: {
    privacyUrl: "/privacy.html", privacyLabel: "Privacy Policy",
    cookiesUrl: "/cookie-policy.html", cookiesLabel: "Cookie Policy",
    termsUrl: "/terms.html", termsLabel: "Terms of Service"
  },

  footer: {
    description: "Performance advertising, analytics and automation connected to measurable business outcomes.",
    servicesTitle: "Services", companyTitle: "Company", contactTitle: "Get in touch",
    contactText: "Tell us what you want to improve and we’ll reply through the secure enquiry process.",
    services: [
      { label: "Paid Media", url: "/paid-media.html" },
      { label: "Lead Generation & Measurement", url: "/lead-generation-measurement.html" },
      { label: "Automation & Reporting", url: "/automation-reporting.html" }
    ],
    company: [
      { label: "About", url: "/about.html" },
      { label: "Case Studies", url: "/case-studies.html" },
      { label: "How We Work", url: "/index.html#process" },
      { label: "Free Audit", url: "/index.html#contact" }
    ],
    copyright: "All rights reserved."
  },

  seo: {
    pages: {
      home: { title: "{{brand.tagline}} | {{brand.name}}", description: "Google Ads management, tracking and automation focused on qualified leads, sales and revenue." },
      services: { title: "Performance Marketing Services | {{brand.name}}", description: "Paid media, lead generation, measurement, automation and reporting connected to commercial outcomes." },
      paidMedia: { title: "Paid Media Services | {{brand.name}}", description: "Google Ads and e-commerce campaign management connected to qualified demand, revenue and efficient investment." },
      leadMeasurement: { title: "Lead Generation & Measurement | {{brand.name}}", description: "Lead generation, conversion tracking and CRM feedback connected to qualified demand and commercial progression." },
      automationReporting: { title: "Automation & Reporting | {{brand.name}}", description: "Decision-ready reporting, monitoring and practical automation for paid media, CRM and product data workflows." },
      cases: { title: "Case Studies | {{brand.name}}", description: "Anonymized performance marketing results focused on revenue, qualified demand and acquisition efficiency." },
      about: { title: "About | {{brand.name}}", description: "A performance marketing approach built around data, business context and transparent decisions." },
      privacy: { title: "Privacy Policy | {{brand.name}}", description: "How {{brand.name}} collects, uses and protects personal information submitted through this website." },
      cookies: { title: "Cookie Policy | {{brand.name}}", description: "Current cookie use and the conditions for future analytics and advertising measurement on the {{brand.name}} website." },
      terms: { title: "Terms of Service | {{brand.name}}", description: "Terms governing use of the {{brand.name}} website." }
    }
  }
  };

  window.SITE_CONFIG = Object.assign(runtime, content);
})();

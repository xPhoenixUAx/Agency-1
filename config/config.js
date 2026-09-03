/*
 * CLIENT REBRANDING FILE
 * Change values only. Do not rename keys.
 */
window.SITE_CONFIG = {
  brand: {
    name: "ScaleSignal",
    legalName: "ScaleSignal Performance LLC",
    tagline: "Google Ads Performance Agency",
    logo: "/assets/brand/logo.svg",
    logoDark: "/assets/brand/logo-dark.svg",
    favicon: "/assets/brand/favicon.svg"
  },

  colors: {
    brand: "#5B38F5",
    brandSecondary: "#7C5CFF",
    brandDark: "#4724D4",
    success: "#16B975",
    warning: "#F1A33A",
    danger: "#DF616A"
  },

  contact: {
    email: "hello@example.com",
    address: "Your business address",
    phone: "",
    showPhone: false
  },

  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/"
  },

  navigation: [
    { label: "Services", url: "/services.html" },
    { label: "Solutions", url: "/index.html#outcomes" },
    { label: "Case Studies", url: "/case-studies.html" },
    { label: "About", url: "/about.html" },
    { label: "Resources", url: "/index.html#capabilities" }
  ],

  cta: {
    primary: { label: "Get a Free Audit!", shortLabel: "Get Free Audit", url: "/index.html#contact" },
    booking: { label: "Book a Call", shortLabel: "Book a Call", url: "/index.html#contact" },
    secondary: { label: "See Case Studies", url: "/case-studies.html" },
    cases: { label: "Request an Account Review", url: "/index.html#contact" }
  },

  common: {
    placeholderLabel: "Placeholder data",
    chartPeriod: "Illustrative 6-month trend",
    learnMore: "Explore service",
    caseLink: "View case study",
    auditIncludes: ["Campaign structure review", "Tracking gap check", "Prioritized action plan"],
    finalCtaTitle: "Find out where your Google Ads account is leaving growth on the table.",
    finalCtaText: "Get a business-focused review of campaigns, tracking and the decisions that can improve performance."
  },

  pages: {
    home: {
      hero: {
        eyebrow: "Google Ads Performance Agency",
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
          { icon: "circle-dollar", value: "$128,430", label: "Revenue", trend: "↑ 38.2%" },
          { icon: "chart", value: "5.42x", label: "ROAS", trend: "↑ 24.7%" },
          { icon: "gauge", value: "$16.21", label: "CPA", trend: "↓ 24.1%" },
          { icon: "users", value: "2,147", label: "Conversions", trend: "↑ 18.3%" }
        ],
        funnel: [
          { icon: "mouse-pointer", title: "Google Ads", text: "Spend", value: "$5,432" },
          { icon: "activity", title: "Landing Page", text: "Sessions", value: "12,904" },
          { icon: "users", title: "Leads", text: "New Leads", value: "2,147" },
          { icon: "badge-check", title: "Qualified", text: "Qualified Leads", value: "1,102" },
          { icon: "circle-dollar", title: "Sales", text: "Conversions", value: "312" }
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
            title: "Qualified Leads", value: "+38.2%", text: "More high-quality leads from your ideal customers.", visualLabel: "Lead funnel",
            chartValues: [100, 79, 57, 36],
            stats: [
              { label: "Impressions", value: "512K" }, { label: "Clicks", value: "12.4K" },
              { label: "Leads", value: "2.48K" }, { label: "Qualified", value: "1.02K" }
            ]
          },
          {
            title: "Revenue", value: "+$128,430", text: "More revenue generated from Google Ads.", visualLabel: "Revenue over time", legend: "Revenue",
            chartValues: [32, 43, 46, 58, 52, 71, 66, 92, 79, 112, 87, 82, 105, 91, 121, 136],
            xLabels: ["Apr 29", "May 13", "May 27", "Jun 3"], yLabels: ["$150K", "$100K", "$50K", "$0"]
          },
          {
            title: "CPA / CPL", value: "-24.7%", text: "Lower cost per acquisition with better targeting.", visualLabel: "CPA trend", legend: "CPA",
            chartValues: [79, 70, 72, 61, 58, 47, 43, 42, 34, 38, 29, 31, 22, 24, 15, 12],
            xLabels: ["Apr 29", "May 13", "May 27", "Jun 3"], yLabels: ["$80", "$60", "$40", "$20"]
          },
          {
            title: "Data Quality", value: "98%", text: "Clean, accurate data powering smarter decisions.", visualLabel: "Data quality score", centerLabel: "Complete", chartValues: [98],
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
        orbit: { centerLabel: "Revenue Growth", roasValue: "5.42x", roasLabel: "ROAS", revenueValue: "+38%", revenueLabel: "Revenue", cpaValue: "−24%", cpaLabel: "CPA" },
        items: [
          { title: "Google Ads Management", text: "Full-funnel campaigns that drive measurable growth.", status: "Active", chips: ["Search", "Shopping", "PMax"], metricLabel: "Revenue", metricValue: "$128,430", trend: "↑ 38.2%", period: "Last 30 days", chartValues: [22, 29, 28, 39, 43, 41, 53, 49, 61, 58, 69, 64] },
          { title: "Lead Generation", text: "Turn interest into qualified pipeline.", steps: ["Ad Click", "Landing Page", "Lead Form", "Qualified Lead"], metricLabel: "Leads (30 days)", metricValue: "2,147", trend: "↑ 18.3%" },
          { title: "E-commerce Growth", text: "Optimize product feed and increase revenue.", metricLabelA: "Feed health", metricValueA: "98%", trendA: "Healthy", metricLabelB: "ROAS (30 days)", metricValueB: "5.42x", trendB: "↑ 24.7%", period: "Last 30 days", chartValues: [34, 31, 39, 37, 46, 51, 48, 58, 63] },
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
          { image: "/assets/images/fit/lead-generation.png", title: "Lead Generation", text: "For teams that care about qualified demand, not raw form volume.", outcomeIcon: "target", outcome: "Qualified demand" },
          { image: "/assets/images/fit/ecommerce.png", title: "E-commerce", text: "For stores balancing revenue growth, efficiency and feed quality.", outcomeIcon: "arrow-up-right", outcome: "Profitable growth" },
          { image: "/assets/images/fit/b2b-saas.png", title: "B2B / SaaS", text: "For longer sales cycles that need CRM and pipeline feedback.", outcomeIcon: "workflow", outcome: "Pipeline value" },
          { image: "/assets/images/fit/local-business.png", title: "Local Business", text: "For businesses that need calls and enquiries tied to real outcomes.", outcomeIcon: "phone", outcome: "Booked enquiries" }
        ],
        connected: {
          label: "Connected outcome",
          title: "Commercial reality",
          image: "/assets/images/fit/commercial-reality.png",
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
          image: "/assets/images/faq/question-mark.png",
          topics: [
            { image: "/assets/images/faq/fit-mini.png", label: "Fit" },
            { image: "/assets/images/faq/access-mini.png", label: "Access" },
            { image: "/assets/images/faq/budget-mini.png", label: "Budget" }
          ],
          status: "Free audit questions answered"
        },
        items: [
          { image: "/assets/images/faq/audit.png", question: "What does the free audit cover?", answer: "We review account structure, measurement gaps and the clearest opportunities to investigate." },
          { image: "/assets/images/faq/business-fit.png", question: "What types of businesses are the best fit?", answer: "The approach is designed for lead generation, e-commerce, B2B and local businesses that can connect advertising to meaningful outcomes." },
          { image: "/assets/images/faq/account-access.png", question: "Do you need account access?", answer: "Read-only access is often the most useful option, but the appropriate review approach can be agreed first." },
          { image: "/assets/images/faq/budget.png", question: "Is there a minimum advertising budget?", answer: "Fit depends on campaign complexity, economics and the decisions the account needs—not a generic threshold." },
          { image: "/assets/images/faq/after-audit.png", question: "What happens after the audit?", answer: "You receive prioritized findings and a clear next-step conversation. There is no obligation to continue." }
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
        eyebrow: "The performance system",
        title: "Every step connected to the next decision.",
        text: "Campaign signals move through a measurable journey, then verified business outcomes feed the next round of optimization.",
        nodes: [
          { index: "01", title: "Google Ads", text: "Create qualified demand" },
          { index: "02", title: "Landing Page", text: "Turn intent into action" },
          { index: "03", title: "Lead", text: "Capture the right context" },
          { index: "04", title: "CRM", text: "Connect sales outcomes" },
          { index: "05", title: "Qualified", text: "Verify commercial fit" },
          { index: "06", title: "Sale", text: "Measure real value" }
        ],
        feedbackTitle: "Closed-loop feedback",
        feedbackText: "Revenue and lead-quality data flow back into campaign decisions, so optimization improves what the business actually values."
      },
      cases: {
        eyebrow: "Case studies",
        title: "Performance stories, structured around the decisions that changed.",
        text: "The figures below are clearly marked layout examples and must be replaced with approved client results before launch.",
        ctaLabel: "Explore case studies",
        ctaUrl: "/case-studies.html",
        secondaryCtaLabel: "See how the decision was made",
        secondaryCtaUrl: "/case-studies.html",
        storyLabel: "Featured performance story",
        challengeLabel: "Challenge",
        decisionLabel: "Decision",
        decision: "Restructure campaigns around category-level profit signals.",
        chartTitle: "Revenue & efficiency trend",
        chartPeriod: "Illustrative 6-month trend",
        decisionMarker: "Decision implemented",
        impactLabel: "Illustrative impact",
        featured: {
          sector: "E-commerce · Placeholder data",
          title: "Scaling a product portfolio with clearer profit signals",
          challenge: "Acquisition cost was inconsistent across categories and the account lacked reliable profit context.",
          strategy: "Restructured campaigns, improved feed signals and connected revenue quality to budget decisions.",
          metrics: [
            { icon: "chart", value: "+62%", label: "Revenue example", status: "Illustrative" },
            { icon: "target", value: "5.4x", label: "ROAS example", status: "Illustrative" },
            { icon: "arrow-up", value: "−19%", label: "CPA example", status: "Illustrative" },
            { icon: "activity", value: "+27%", label: "CVR example", status: "Illustrative" }
          ]
        },
        previews: [
          { chart: "24,31,28,39,36,48,45,57,54,66,62,79", sector: "B2B · Placeholder data", title: "Prioritizing qualified pipeline over raw lead volume", value: "+47%", label: "Qualified leads example" },
          { chart: "78,73,75,66,69,58,61,53,56,47,49,41", sector: "Lead Gen · Placeholder data", title: "Connecting offline outcomes to acquisition decisions", value: "−23%", label: "CPL example" }
        ]
      },
      capabilities: {
        eyebrow: "Google Ads capabilities",
        title: "The right channel mix for the job.",
        text: "Each capability is selected and managed around intent, economics and the role it plays in the wider customer journey.",
        items: [
          { title: "Search", outcome: "Capture high-intent demand", text: "Intent-led campaigns with structured queries, clear landing-page alignment and disciplined bidding." },
          { title: "Performance Max", outcome: "Expand with reliable signals", text: "Asset groups, audience signals and feed inputs managed against meaningful conversion value." },
          { title: "Shopping", outcome: "Turn feed quality into growth", text: "Product data, segmentation and bidding aligned to revenue, margin and inventory priorities." },
          { title: "Demand Gen / Video / Display", outcome: "Build and recapture demand", text: "Visual reach and remarketing programs with clear audience and incrementality thinking." },
          { title: "App Campaigns", outcome: "Acquire valuable users", text: "Install and in-app event strategies optimized beyond the first conversion." }
        ]
      },
      tracking: {
        eyebrow: "Tracking & analytics",
        title: "Data drives performance. Tracking makes it repeatable.",
        text: "We connect ad interactions to CRM outcomes and revenue, giving campaigns better signals and teams a clearer decision trail.",
        nodes: [
          { icon: "mouse-pointer", title: "Ad click" },
          { icon: "activity", title: "Conversion" },
          { icon: "database", title: "CRM outcome" },
          { icon: "circle-dollar", title: "Revenue" },
          { icon: "refresh", title: "Campaign feedback" }
        ],
        proofTitle: "What changes",
        proofText: "Optimization can distinguish a form fill from a qualified opportunity—and a qualified opportunity from revenue."
      },
      automation: {
        eyebrow: "Marketing automation",
        title: "Save time. Increase performance.",
        text: "Practical automations surface important changes and keep performance information moving.",
        dashboardTitle: "Decision center",
        dashboardText: "One clear view of spend, outcomes, risks and next actions.",
        items: [
          { icon: "file-chart", title: "Clearer reporting", text: "Bring essential commercial metrics into one readable view." },
          { icon: "activity", title: "Performance monitoring", text: "See meaningful movement without constant manual checking." },
          { icon: "bell", title: "Budget alerts", text: "Flag unusual pacing before it becomes a monthly surprise." },
          { icon: "refresh", title: "CRM feedback", text: "Return qualified-lead and sales signals to campaign teams." },
          { icon: "route", title: "Lead tracking", text: "Keep the journey visible beyond the initial form fill." },
          { icon: "shopping-cart", title: "Feed automation", text: "Maintain cleaner, more current product information." },
          { icon: "sparkles", title: "AI-assisted analysis", text: "Summarize patterns for review, with human decision control." },
          { icon: "scan-search", title: "Anomaly detection", text: "Surface unusual changes that deserve attention." }
        ]
      },
      process: {
        eyebrow: "Our process",
        title: "A proven process. Transparent every step.",
        text: "A structured path from diagnosis to controlled, measurable growth.",
        summary: "5 stages \u00b7 one measurable system",
        pathImage: "/assets/images/process/process-path.png",
        pathImageTablet: "/assets/images/process/process-path-tablet.png",
        items: [
          { image: "/assets/images/process/audit.png", title: "Audit", text: "Understand the account, economics, tracking and constraints.", action: "Diagnose" },
          { image: "/assets/images/process/strategy.png", title: "Strategy", text: "Prioritize the changes with the clearest business rationale.", action: "Prioritize" },
          { image: "/assets/images/process/setup-launch.png", title: "Setup & Launch", text: "Implement campaigns, data flows and measurement carefully.", action: "Activate" },
          { image: "/assets/images/process/optimize.png", title: "Optimize", text: "Test, learn and improve against verified outcome signals.", action: "Improve" },
          { image: "/assets/images/process/scale.png", title: "Scale", text: "Increase investment where economics and evidence support it.", action: "Grow" }
        ],
        caption: "Every stage produces a clearer decision for the next one."
      }
    },

    services: {
      hero: {
        eyebrow: "Services",
        title: "Performance marketing built around measurable growth.",
        titleAccent: "measurable growth.",
        text: "Strategy, media, tracking and automation connected to real business outcomes.",
        chartTitle: "Campaign performance overview"
      },
      ads: {
        eyebrow: "Google Ads management",
        title: "Full-funnel control across every relevant Google Ads channel.",
        text: "Channel-specific execution stays connected to one commercial strategy.",
        items: [
          { icon: "search", title: "Search Ads", role: "Capture demand", outcome: "High-intent queries become qualified actions.", visual: "Keyword intent" },
          { icon: "sparkles", title: "Performance Max", role: "Expand efficiently", outcome: "Cross-network reach is guided by better value signals.", visual: "Signal coverage" },
          { icon: "shopping-cart", title: "Shopping Ads", role: "Sell products", outcome: "Feed structure and bidding support profitable demand.", visual: "Feed health" },
          { icon: "play", title: "Demand Gen", role: "Build demand", outcome: "Visual inventory creates and recaptures interest.", visual: "Audience mix" },
          { icon: "smartphone", title: "App Campaigns", role: "Grow app value", outcome: "Installs connect to meaningful in-app outcomes.", visual: "Event quality" }
        ]
      },
      leads: {
        eyebrow: "Lead generation",
        title: "A connected journey from search intent to sale.",
        text: "The system improves when lead quality and sales outcomes are visible to the campaign team.",
        controls: [
          { icon: "badge-check", title: "Lead quality", text: "Prioritize the prospects sales teams value." },
          { icon: "database", title: "Offline conversions", text: "Return verified progress from CRM to campaigns." },
          { icon: "refresh", title: "Sales feedback", text: "Use revenue context to guide the next decision." }
        ]
      },
      ecommerce: {
        eyebrow: "E-commerce growth",
        title: "Feed, media and revenue signals working as one.",
        text: "Product data and campaign structure are connected to value—not only order count.",
        feedTitle: "Merchant Center health",
        feedStatus: ["Pricing signals synchronized", "Priority products segmented", "Inventory status monitored"],
        metrics: [
          { value: "$256,780", label: "Revenue example" },
          { value: "6.18x", label: "ROAS example" },
          { value: "4,289", label: "Purchases example" },
          { value: "$59.87", label: "Order value example" }
        ]
      },
      tracking: {
        eyebrow: "Tracking & analytics",
        title: "Make the full outcome visible.",
        text: "Capture interactions, connect customer and revenue data, then use it to improve decisions.",
        groups: [
          { icon: "mouse-pointer", title: "Capture", text: "Conversion Tracking · Analytics · GTM · Call Tracking" },
          { icon: "link", title: "Connect", text: "Offline Conversions · CRM Integration · Revenue Tracking" },
          { icon: "chart", title: "Improve", text: "Attribution · Lead Quality · Campaign Feedback" }
        ]
      },
      automation: {
        eyebrow: "Automation",
        title: "More decision support. Less manual checking.",
        text: "Focused automation keeps teams informed without replacing business judgment.",
        items: [
          { icon: "file-chart", title: "Clearer reporting", text: "Decision-ready views of the metrics that matter." },
          { icon: "scan-search", title: "Early anomaly warnings", text: "Timely flags when performance moves unexpectedly." },
          { icon: "gauge", title: "Faster budget decisions", text: "Pacing and outcome context in one place." },
          { icon: "refresh", title: "CRM feedback", text: "Verified downstream results returned to media teams." },
          { icon: "shopping-cart", title: "Cleaner feeds", text: "Less manual maintenance and better product consistency." },
          { icon: "workflow", title: "Less manual checking", text: "Routine monitoring handled quietly in the background." }
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
      placeholderNotice: "Demonstration data only. These case-study figures exist to show layout and do not represent real client outcomes.",
      filters: ["All", "Lead Generation", "E-commerce", "B2B", "Apps"],
      items: [
        { id: "commerce", category: "E-commerce", featured: true, sector: "E-commerce · Placeholder data", title: "Product portfolio growth with profit-aware signals", challenge: "Inconsistent acquisition cost and limited visibility across product categories.", strategy: "Restructured campaigns, improved feed inputs and connected revenue quality to bidding.", metric1: "+62%", metric1Label: "Revenue example", metric2: "5.42x", metric2Label: "ROAS example", metric3: "2,147", metric3Label: "Purchases example", metric4: "−24%", metric4Label: "CPA example", chart: "56,68,61,78,92,86,104,118,109,132,145,139" },
        { id: "saas", category: "Lead Generation", featured: false, sector: "Lead Generation · Placeholder data", title: "Qualified SaaS pipeline over raw form volume", challenge: "Campaigns optimized every submission equally, despite large differences in fit.", strategy: "Imported qualified stages and shifted budget toward higher-intent segments.", metric1: "+47%", metric1Label: "Qualified leads example", metric2: "−23%", metric2Label: "CPL example", metric3: "31%", metric3Label: "CVR example", metric4: "1.8x", metric4Label: "Pipeline example", chart: "22,29,25,38,41,47,43,55,61,58,67,76" },
        { id: "b2b", category: "B2B", featured: false, sector: "B2B · Placeholder data", title: "Opportunity-focused acquisition for a complex sale", challenge: "Media reports ended at lead count and gave no view of opportunity quality.", strategy: "Connected CRM progression and cost per qualified opportunity to reporting.", metric1: "+34%", metric1Label: "Opportunities example", metric2: "−18%", metric2Label: "Cost / opportunity", metric3: "+29%", metric3Label: "Pipeline example", metric4: "22%", metric4Label: "Lead quality example", chart: "18,24,31,28,39,35,48,44,52,61,58,70" },
        { id: "apps", category: "Apps", featured: false, sector: "Apps · Placeholder data", title: "App growth optimized beyond the install", challenge: "Install volume rose while the value of acquired users stayed unclear.", strategy: "Introduced in-app value events and separated acquisition by user quality.", metric1: "12,984", metric1Label: "Installs example", metric2: "−16%", metric2Label: "CPI example", metric3: "+38%", metric3Label: "In-app actions", metric4: "+21%", metric4Label: "Active users example", chart: "12,19,17,26,24,35,31,45,42,53,61,74" },
        { id: "local", category: "Lead Generation", featured: false, sector: "Local Business · Placeholder data", title: "Higher-intent local enquiries with cleaner call data", challenge: "Calls and forms were counted without distinguishing meaningful enquiries.", strategy: "Improved call tracking, query coverage and offline qualification feedback.", metric1: "+32%", metric1Label: "Qualified leads", metric2: "−17%", metric2Label: "Cost / lead", metric3: "+28%", metric3Label: "Calls example", metric4: "24%", metric4Label: "CVR example", chart: "20,25,37,42,34,49,57,51,62,59,70,81" }
      ]
    },

    about: {
      hero: { eyebrow: "About ScaleSignal", title: "Performance marketing with business context.", titleAccent: "business context.", text: "We connect Google Ads performance to real business outcomes—so every decision has a clearer reason." },
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
      ecosystem: { eyebrow: "Our ecosystem", title: "Connected tools for better decisions.", text: "The final integration set should match the tools the agency genuinely supports.", items: [
        { icon: "search", title: "Google Ads" },
        { icon: "activity", title: "Analytics" },
        { icon: "mouse-pointer", title: "Google Tag Manager" },
        { icon: "database", title: "CRM" },
        { icon: "shopping-cart", title: "Merchant Center" },
        { icon: "file-chart", title: "Reporting" },
        { icon: "workflow", title: "Automation" }
      ] },
      evidence: { eyebrow: "How we work", title: "Operational evidence instead of inflated claims.", text: "Until verified company statistics are available, these statements describe working standards rather than invented scale.", items: [
        { value: "Clear", label: "Ownership and next actions" },
        { value: "Visible", label: "Tracking gaps and assumptions" },
        { value: "Regular", label: "Decision-focused reporting" },
        { value: "Tested", label: "Changes before broader scale" },
        { value: "Linked", label: "Media signals to business outcomes" }
      ] }
    },

    audit: {
      hero: { eyebrow: "Free account audit", title: "Get a clearer view of your Google Ads performance.", titleAccent: "performance.", text: "Request a business-focused review of your account, tracking and growth opportunities." },
      benefits: [
        { icon: "scan-search", title: "Personalized account review", text: "A structured look at campaigns, settings and business context." },
        { icon: "activity", title: "Clear performance gaps", text: "Identify where measurement or campaign choices limit decisions." },
        { icon: "file-chart", title: "Prioritized recommendations", text: "Next actions organized around expected business impact." }
      ],
      proofTitle: "What the review can clarify",
      proofMetrics: [
        { value: "01", label: "Campaign structure" },
        { value: "02", label: "Conversion signals" },
        { value: "03", label: "Commercial context" },
        { value: "04", label: "Priority actions" }
      ],
      next: { eyebrow: "What happens next", title: "A straightforward path from review to action.", items: [
        { index: "01", title: "We review the account", text: "Campaign structure, signals and available business context are assessed." },
        { index: "02", title: "You receive findings", text: "Important gaps and opportunities are organized by priority." },
        { index: "03", title: "We discuss next actions", text: "If useful, we can walk through the findings and sensible next steps." }
      ] },
      faq: { eyebrow: "Frequently asked questions", title: "Useful details before you request a review.", items: [
        { question: "What does the audit include?", answer: "A review of campaign structure, measurement signals and the clearest opportunities or risks visible from the information available." },
        { question: "Is the audit really free?", answer: "Yes. The initial account review is free and does not require an ongoing engagement." },
        { question: "How long does it take?", answer: "Timing depends on account access and complexity. We confirm expectations after reviewing your request rather than promising a fixed turnaround here." },
        { question: "Will you need access to my account?", answer: "A meaningful audit usually benefits from read-only account access. We will explain exactly what is needed before any access is requested." }
      ] }
    },

    privacy: {
      eyebrow: "Legal", title: "Privacy Policy", updatedLabel: "Last updated", updated: "September 2, 2026",
      noticeTitle: "Your privacy matters.", noticeText: "This draft must be reviewed and approved by qualified legal counsel before production use.",
      sections: [
        { id: "introduction", title: "1. Introduction", paragraphs: ["ScaleSignal respects your privacy and is committed to handling personal information responsibly. This draft explains the general structure of information practices for this website."], bullets: [] },
        { id: "collection", title: "2. Information We Collect", paragraphs: ["We may collect information you provide directly when you contact us or request an account review."], bullets: ["Name, business email and company name", "Website and information about your business", "Advertising goals and service interests", "Any other information you choose to provide"] },
        { id: "use", title: "3. How We Use Information", paragraphs: ["Information is used only for legitimate business purposes connected to your request and operation of this website."], bullets: ["Respond to enquiries and provide requested information", "Assess service fit and prepare recommendations", "Maintain website security and reliability", "Comply with applicable legal obligations"] },
        { id: "sharing", title: "4. Information Sharing", paragraphs: ["We do not sell personal information. Information may be shared with service providers where necessary to operate the website or respond to a request, subject to appropriate safeguards."], bullets: [] },
        { id: "security", title: "5. Data Security", paragraphs: ["Reasonable technical and organizational measures should be maintained to protect personal information. No internet transmission or storage method can be guaranteed completely secure."], bullets: [] },
        { id: "rights", title: "6. Your Rights & Choices", paragraphs: ["Depending on your location, you may have rights to access, correct, delete or restrict certain uses of personal information. Contact us to make a request."], bullets: [] },
        { id: "cookies", title: "7. Cookies & Tracking", paragraphs: ["The final policy should describe the analytics, advertising and essential technologies actually used on the deployed website, including consent choices where required."], bullets: [] },
        { id: "retention", title: "8. Data Retention", paragraphs: ["Personal information should be retained only as long as necessary for the purposes described in the approved production policy and applicable legal requirements."], bullets: [] },
        { id: "children", title: "9. Children’s Privacy", paragraphs: ["This business website is not directed to children. The final age threshold and handling process must reflect applicable law."], bullets: [] },
        { id: "changes", title: "10. Changes to This Policy", paragraphs: ["The policy may be updated as practices or legal requirements change. The current revision date appears at the top of this page."], bullets: [] },
        { id: "contact", title: "11. Contact Us", paragraphs: ["For privacy questions or requests, contact us using the email and business address listed below."], bullets: [] }
      ]
    },

    terms: {
      eyebrow: "Legal", title: "Terms of Service", updatedLabel: "Last updated", updated: "September 2, 2026",
      noticeTitle: "A clear working agreement matters.", noticeText: "This draft is a structural placeholder and requires legal review before production use.",
      sections: [
        { id: "acceptance", title: "1. Acceptance of Terms", paragraphs: ["By using this website, you agree to the final approved terms published by the business. If you do not agree, do not use the website."], bullets: [] },
        { id: "services", title: "2. Website and Services", paragraphs: ["Website information is provided for general business purposes. Specific services, deliverables and commercial terms are governed by a separate written agreement."], bullets: [] },
        { id: "responsibilities", title: "3. User Responsibilities", paragraphs: ["You agree to provide accurate information, use the website lawfully and avoid interfering with its security or operation."], bullets: ["Do not submit unlawful or harmful content", "Do not attempt unauthorized access", "Do not misuse forms or automated systems"] },
        { id: "intellectual-property", title: "4. Intellectual Property", paragraphs: ["Website content, branding and original materials remain the property of their respective owners unless otherwise stated."], bullets: [] },
        { id: "disclaimers", title: "5. No Performance Guarantee", paragraphs: ["Advertising performance depends on many factors. Examples and placeholder data on this demo site are not guarantees, forecasts or representations of actual client results."], bullets: [] },
        { id: "liability", title: "6. Limitation of Liability", paragraphs: ["The final limitation language must be prepared for the company’s jurisdiction, services and risk profile by qualified legal counsel."], bullets: [] },
        { id: "third-party", title: "7. Third-Party Services", paragraphs: ["Links or integrations with third-party services do not imply endorsement. Third-party services are governed by their own terms and policies."], bullets: [] },
        { id: "termination", title: "8. Suspension and Termination", paragraphs: ["Access may be restricted where necessary to protect the website, comply with law or address misuse."], bullets: [] },
        { id: "law", title: "9. Governing Law", paragraphs: ["The production version must identify the governing law and dispute process appropriate to the company’s legal entity and jurisdiction."], bullets: [] },
        { id: "changes", title: "10. Changes to These Terms", paragraphs: ["Terms may be updated from time to time. The current revision date appears at the top of this page."], bullets: [] },
        { id: "contact", title: "11. Contact", paragraphs: ["Questions about these terms can be sent to the contact email shown below."], bullets: [] }
      ]
    }
  },

  form: {
    audit: {
      title: "Request your free audit",
      intro: "Share your website and primary goal. We’ll reply with the next step.",
      submitLabel: "Request free audit",
      sendingLabel: "Sending…",
      successMessage: "Thank you! We have successfully received your request. Our team will review your information and get back to you shortly.",
      failureMessage: "We could not send your request. Please try again or contact us by email.",
      validationMessage: "Please check the highlighted fields.",
      labels: { name: "Name", email: "Business Email", website: "Website", needHelp: "What do you need help with?", message: "Main Goal / Message", consent: "I agree to be contacted about this request." },
      placeholders: { name: "Your full name", email: "you@company.com", website: "https://yourwebsite.com", needHelp: "Select a service", message: "Tell us briefly what you want to improve…" },
      needs: ["Google Ads Management", "Performance Max", "Shopping", "Lead Generation", "Tracking & Analytics", "Marketing Automation", "Account Audit", "Other"]
    }
  },

  legal: {
    privacyUrl: "/privacy.html", privacyLabel: "Privacy Policy", privacyUpdated: "September 2, 2026",
    termsUrl: "/terms.html", termsLabel: "Terms of Service", termsUpdated: "September 2, 2026"
  },

  footer: {
    description: "Performance advertising, analytics and automation connected to measurable business outcomes.",
    servicesTitle: "Services", companyTitle: "Company", contactTitle: "Get in touch",
    services: [
      { label: "Google Ads Management", url: "/services.html#google-ads" },
      { label: "Lead Generation", url: "/services.html#lead-generation" },
      { label: "E-commerce Growth", url: "/services.html#ecommerce" },
      { label: "Tracking & Analytics", url: "/services.html#tracking" }
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
      home: { title: "Google Ads Performance Agency | ScaleSignal", description: "Google Ads management, tracking and automation focused on qualified leads, sales and revenue." },
      services: { title: "Google Ads Services | ScaleSignal", description: "Google Ads management, lead generation, e-commerce, tracking and marketing automation." },
      cases: { title: "Case Studies | ScaleSignal", description: "Placeholder performance marketing case studies demonstrating measurable business-outcome layouts." },
      about: { title: "About | ScaleSignal", description: "A performance marketing approach built around data, business context and transparent decisions." },
      audit: { title: "Free Google Ads Audit | ScaleSignal", description: "Request a business-focused review of your Google Ads account and tracking setup." },
      privacy: { title: "Privacy Policy | ScaleSignal", description: "Privacy policy draft for ScaleSignal." },
      terms: { title: "Terms of Service | ScaleSignal", description: "Terms of service draft for ScaleSignal." }
    }
  }
};

import { CaseStudy, CommunityItem, EducationItem, ExperienceItem, ProcessStep, ToolkitGroup, CertificationItem } from './types';

export const EXPLORING = ['React Native', 'Web Design', 'Docker'];

export const PROCESS_STEPS: ProcessStep[] = [
  { icon: '🔍', label: 'Scope', desc: 'Frame the real problem.' },
  { icon: '⚖️', label: 'Decide', desc: 'Weigh tradeoffs, pick a direction.' },
  { icon: '🛠️', label: 'Build', desc: 'Write the code.' },
  { icon: '🧪', label: 'Test', desc: 'Break it, then fix it.' },
  { icon: '🚀', label: 'Ship', desc: 'Get it in front of people.' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Burberry Trench Navigation Redesign',
    year: '2026',
    tags: ['Self-Directed PRD', 'UX Audit', 'Concept Redesign', 'React / TypeScript', 'Vercel Deployment'],
    problem: 'Burberry\'s trench coat — its most iconic product — is reachable through two inconsistent nav paths on the live site: one shows no style options at all, the other reveals 6 distinct styles by name only, with no visual way to compare them and no connection to the brand\'s heritage story.',
    approach: 'Ran this as a real PM exercise against the live burberry.com: audited the site\'s actual navigation structure and compared it across four other luxury houses (Chanel, Fendi, Balmain, Balenciaga) to confirm the pattern was systemic, not one-off. Wrote a problem statement, two contrasting personas, and goals tied to measurable targets. Used Claude Design to explore wireframes from that spec, then built the interactive prototype.',
    outcome: 'A complete concept PRD — background, problem statement, personas, success metrics, current-state audit, scope, requirements, IA, and roadmap — scoping a unified navigation path and visual style-comparison view to replace the split, name-only browsing experience.',
    externalLinks: [
      { label: 'View Detailed PRD', url: 'https://burberry-redesign.vercel.app/prd.html', icon: '📋' },
      { label: 'View Comparative Analysis', url: 'https://burberry-redesign.vercel.app/comparative-analysis.html', icon: '📊' },
      { label: 'View Wireframes', url: 'https://burberry-redesign.vercel.app/wireframes.html', icon: '✏️' },
      { label: 'View Prototype', url: 'https://burberry-redesign.vercel.app/', icon: '🖥️' },
    ],
  },
  {
    title: 'Crescendo Coffee Redesign',
    year: '2026',
    tags: ['Self-Directed PRD', 'UX Audit', 'Concept Redesign', 'React / TypeScript', 'Vercel Deployment'],
    problem: 'Crescendo Coffee & Café — a locally loved shop in downtown Fort Wayne — has a website that undersells a genuinely great product: an unfilterable 2,000+ word menu page and an "Order Online" link that dumps visitors into an off-brand third-party checkout at the exact moment they\'re deciding to spend money.',
    approach: 'Ran this as a real PM exercise against a live business, not a hypothetical: audited the current site, defined two contrasting personas (a daily regular vs. a price-sensitive first-timer), wrote goals tied to measurable targets, and MoSCoW-prioritized requirements into a 3-phase roadmap. Used Claude Design to explore wireframes from that spec, then hand-built the interactive ordering prototype in React and TypeScript.',
    outcome: 'A complete concept PRD — background, problem statement, personas, success metrics, current-state audit, scope, requirements, IA, risks, and roadmap — scoping an in-brand ordering flow to replace the jarring hand-off to a generic checkout page.',
    externalLinks: [
      { label: 'View Detailed PRD', url: 'https://crescendo-coffee-redesign.vercel.app/prd.html', icon: '📋' },
      { label: 'View Wireframes', url: 'https://crescendo-coffee-redesign.vercel.app/wireframes.html', icon: '✏️' },
      { label: 'View Prototype', url: 'https://crescendo-coffee-redesign.vercel.app/', icon: '🖥️' },
    ],
  },
  {
    title: 'GIS Data-Sharing Policy',
    year: '2026',
    tags: ['Ambiguous 0→1 Problem', 'Stakeholder Research', 'Policy Proposed'],
    problem: 'City Utilities Engineering had years of GIS infrastructure data with no consistent rule for what could be shared publicly — legal risk, technical constraints, and public-records requests were all pulling in different directions with no owner reconciling them.',
    approach: 'Researched and gathered requirements from legal and engineering stakeholders to surface the real constraints on each side, then synthesized a mess of case-by-case judgment calls into a simple three-tier classification model — the kind of framework a non-technical reviewer could apply consistently.',
    outcome: 'The three-tier model is under review as the proposed policy for public data-sharing decisions — the clearest example I have of turning ambiguity into a decision a team could run with.',
    prd: {
      status: 'Pending adoption',
      overview: 'A classification framework for deciding which GIS infrastructure datasets City Utilities Engineering can share publicly, replacing inconsistent case-by-case judgment calls.',
      goal: 'Give staff a repeatable, defensible way to answer "can we share this dataset?" without escalating every request to legal individually.',
      users: 'City Utilities Engineering staff fielding public-records requests, and the legal team reviewing disclosure risk.',
      requirements: [
        'A tiering model (e.g. public / restricted / internal-only) that maps to real legal and security constraints',
        'Criteria simple enough for a non-technical reviewer to apply consistently',
        'Sign-off from both legal and engineering stakeholders before rollout',
      ],
      metrics: [
        'Policy formally adopted and used for actual public-records decisions (currently under review)',
        'Reduced number of ad hoc escalations to legal per request',
      ],
      outOfScope: 'Rebuilding the GIS system itself or automating tier assignment — this was a decision framework for humans to apply, not a software system.',
    },
  },
  {
    title: 'Gesture2Globe',
    year: '2025',
    tags: ['Deep Learning', 'Computer Vision', 'Full-Stack Build'],
    problem: 'Gesture-based communication can feel inaccessible in real-world settings, especially when users need a system that turns live motion into understandable, translated output rather than just recognizing isolated poses.',
    approach: 'Built a full-stack pipeline as part of an Applications of Deep Learning course project: used MediaPipe for keypoint extraction, a TGCN model optimized with ONNX Runtime for inference, and a Flask backend to handle video processing, sentence formation, translation, and text-to-speech. I also built a React/Vite frontend for webcam capture, video uploads, and live prediction display.',
    outcome: 'Delivered an end-to-end system that converts live or recorded gestures into structured text, translated output, and speech, with a modular architecture that separates capture, inference, language processing, and UI responsibilities.',
  },
  {
    title: 'MastodonHub',
    year: '2025',
    tags: ['Team Leadership', 'Process Design', 'React / Django'],
    problem: 'A student team needed a way to keep frontend and backend work scoped and unblocked without a dedicated PM — work was landing in Jira with inconsistent detail, and reviews were a bottleneck.',
    approach: 'Took the lead role on a rotating basis: triaged and scoped tickets in Jira/Bitbucket, reviewed teammates’ merge requests for edge cases, and kept documentation current so anyone could pick up a ticket cold.',
    outcome: 'Helped the team hit a 45% frontend and 90%+ backend test coverage milestone by keeping sprint scope realistic and unblocking reviews faster — process choices as much as code.',
    prd: {
      status: 'Process shipped',
      overview: 'A Mastodon-style federated social platform built by a student team without a dedicated PM, where ticket quality and review turnaround were blocking velocity.',
      goal: 'Ship a stable, well-tested federated social app while establishing a lightweight process the team could sustain without a full-time PM.',
      users: 'The 3-person student engineering team (as internal "customers" of the process); end users of the eventual federated app.',
      requirements: [
        'Every ticket scoped with acceptance criteria before entering a sprint',
        'Merge requests reviewed within 48 hours with edge cases documented',
        'Living documentation so any teammate could pick up any ticket cold',
      ],
      metrics: [
        'Frontend test coverage ≥ 45%',
        'Backend test coverage ≥ 90%',
        'Reduced average time-in-review per merge request',
      ],
      outOfScope: 'The app’s feature build-out itself — this was a process fix for planning and review, not new product functionality.',
    },
  },
  {
    title: 'SyllabusSync',
    year: '2025',
    tags: ['0→1 Product', 'User Research', 'AI Integration', 'TypeScript','React / Next.js / Vercel'],
    problem: 'Every semester, students manually re-type deadlines from PDF syllabi into calendars — a small but recurring friction point I kept hitting myself and hearing about from classmates.',
    approach: 'Scoped an MVP around the single highest-value flow (syllabus → calendar), chose the Gemini API to handle unstructured PDF parsing instead of building brittle custom parsing, and shipped a working version fast rather than over-building.',
    outcome: 'Shipped a live, public product on Vercel end-to-end — my first time owning a product decision (not just a ticket) from idea to production.',
    prd: {
      status: 'Live in production',
      overview: 'A tool that takes a syllabus PDF and turns its deadlines into calendar events automatically, removing a recurring manual chore for students.',
      goal: 'Cut the time between "I have a syllabus" and "my calendar is accurate" from ~20 minutes of manual entry to under a minute.',
      users: 'College students at the start of each semester, juggling 4-6 syllabi with inconsistent formatting.',
      requirements: [
        'Upload a syllabus PDF and extract assignment/exam dates automatically',
        'Handle unstructured, inconsistent syllabus formats without custom rules per course',
        'Export or sync extracted dates to a calendar in one step',
      ],
      metrics: [
        'Successfully parses dates from a syllabus on first try without manual correction',
        'End-to-end time from upload to calendar-ready under 60 seconds',
      ],
      outOfScope: 'Two-way calendar sync, recurring-course templates, and mobile app — v1 was a single-pass web tool to validate the core flow. Daylight Saving Time handling for extracted dates is a known work-in-progress.',
    },
  },
  {
    title: 'CampusMart',
    year: '2024',
    tags: ['End-to-end Build', 'Data Modeling', 'User Flows', 'MERN Stack', 'Vercel Deployment'],
    problem: 'WhatsApp groups for buying/selling used items on campus get cluttered and forgotten fast — posts bury each other, there’s no way to browse what’s actually still available, and no safety net for meeting a stranger to hand over cash for a mattress.',
    approach: 'Designed the data model first (what a "listing" actually needs to support browsing and search), then built the API and UI around that model rather than the other way around — keeping the browse and list flows the two things it had to get right.',
    outcome: 'A working e-commerce flow, end to end, that made the core browse → list → contact loop actually usable and safer than a scrolling chat thread.',
    prd: {
      status: 'Built end-to-end',
      overview: 'A campus-only marketplace app so students buying and selling used/fairly-new items have a real browsable listing instead of a scrolling, forgettable WhatsApp thread.',
      goal: 'Give students a cheaper, safer way to buy and sell within their own campus community, with listings that stay findable instead of getting buried in chat.',
      users: 'Students on campus looking to buy items cheaply or sell things they no longer need, without leaving the trust of a campus-only audience.',
      requirements: [
        'Post a listing with photo, price, and condition in under a minute',
        'Browse and search active listings instead of scrolling chat history',
        'Mark a listing as sold so it stops showing up as available',
        'Contact a seller directly without exposing personal contact info by default',
      ],
      metrics: [
        'Listings found and contacted through search/browse vs. lost in chat scroll',
        'Time from posting a listing to first buyer contact',
      ],
      outOfScope: 'Payments/escrow and off-campus shipping — v1 assumed in-person, cash exchange within campus, same as the WhatsApp groups it replaced.',
    },
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    logo: '/assets/images/COFW.png',
    dates: 'Jun 2026 – Present',
    role: 'Computer Science Intern',
    org: 'City of Fort Wayne, City Utilities Engineering',
    bullets: [
      'Developing and improving a spatial GIS chatbot through prompt design, feature implementation, code refinement, and end‑to‑end testing prior to integration.',
      'Gathered requirements from legal and engineering stakeholders to identify GIS data-sharing constraints, then synthesized findings into a three-tier classification system that replaced manual, case-by-case decisions with a clear, repeatable framework.',
      'Improved a Python/Tkinter data-entry tool by redesigning workflows based on direct feedback from field engineering staff.',
      'Tracked deliverables and cross-team progress via a SharePoint tracker across a 19-member group.',
    ],
  },
  {
    logo: '/assets/images/FOLN Logo.png',
    dates: 'Jun 2025 – Aug 2025',
    role: 'Full-Stack Software Engineering Intern',
    org: 'ForOurLastNames (FinTech Startup)',
    bullets: [
      'Shipped 9 client-facing features for a financial services product, estimating scope and delivering across sprints with strong first-pass acceptance.',
      'Resolved 4 critical UI/UX and responsive-layout issues, improving usability for end users managing their finances.',
      'Partnered with QA and a cross-functional Agile team on planning, code review, and release reliability.',
    ],
    recommendations: [
      { label: 'View LinkedIn Recommendations', url: '/assets/images/FOLN-Recommendations.png' },
    ],
  },
  {
    logo: '/assets/images/SE Logo1.png',
    dates: 'Jun 2024 – Jul 2024',
    role: 'Process Automation Intern',
    org: 'Schneider Electric',
    bullets: [
      'Built an internal automation prototype to replace spreadsheet-heavy procurement workflows, improving data consistency through structured input flows.',
    ],
    recommendations: [
      { label: 'View Recommendation Letter', url: '/SE - Recommendation Letter - Mahalakshmi.pdf' },
    ],
  },
  {
    logo: '/assets/images/BetaIT.jpeg',
    dates: 'Jul 2023 – Sep 2023',
    role: 'Research Intern',
    org: 'Beta Information Technology',
    bullets: [
      'Assisted the Director of Corporate Development in researching Odoo (ERP software) as a candidate for the company\'s 2nd digital transformation initiative, evaluating features and capabilities, cost/pricing, integration feasibility with existing systems, and implementation risk.',
      'Compiled findings into a formal report and presentation, which was taken into consideration in the company\'s evaluation process.',
    ],
    recommendations: [
      { label: 'View Recommendation Letter', url: '/BetaIT_Recommendation_Letter.pdf' },
    ],
  },
];

export const COMMUNITY: CommunityItem[] = [
  {
    logo: '/assets/images/RTC-logo.png',
    logoBg: 'white',
    icon: '🌟',
    org: 'Rewriting the Code',
    role: 'Early-Career Member ✨',
    dates: '2026 – Present',
    blurb: 'Plugged into a global network of women in tech — trading career advice, leveling up through professional-development programming, and cheering on the next cohort of builders.',
    hue: 330,
    tilt: '-1deg',
  },
  {
    logo: '/assets/images/PurdueLogo.svg',
    icon: '☎',
    org: 'Purdue Box Office',
    role: 'Box Office & Front-of-House',
    dates: 'During grad school',
    blurb: 'Months of direct customer-facing work — booking event tickets, fielding calls, resolving complaints in real time, and ushering events. Staying calm, listening past the complaint to the actual need, and finding a fix on the spot.',
    hue: 255,
    tilt: '1deg',
  },
  {
    logo: '/assets/images/AUS Logo.png',
    logoBg: 'white',
    icon: '🐍',
    org: 'Python Bootcamp',
    role: 'Co-Owner, Curriculum & Delivery',
    dates: 'During undergrad',
    blurb: 'Co-owned curriculum design and delivery end-to-end for a 2-day program, leading non-technical business and finance students and faculty through data analysis and automation fundamentals using Python.',
    hue: 210,
    tilt: '-0.6deg',
  },
];

export const TOOLKIT: ToolkitGroup[] = [
  {
    title: 'Product & Process',
    icon: '🗂️',
    hue: 255,
    items: ['Jira', 'Trello', 'Bitbucket', 'Confluence','Backlog scoping', 'Sprint planning'],
  },
  {
    title: 'Research & Comms',
    icon: '💬',
    hue: 190,
    items: ['Stakeholder research', 'Requirements gathering', 'Client-facing comms', 'UX-focused thinking'],
  },
  {
    title: 'Technical Fluency',
    icon: '⚡',
    hue: 300,
    items: ['HTML/CSS', 'React', 'Next.js', 'Responsive Design', 'JavaScript/TypeScript', 'Vercel', 'Node.js', 'Express.js', 'REST APIs', 'Python', 'SQL', 'Jest', 'Cypress'],
  },
  {
    title: 'AI Tools',
    icon: '✨',
    hue: 30,
    items: ['Gemini API', 'Cursor', 'Claude Code', 'ChatGPT'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    logo: '/assets/images/PurdueLogo.svg',
    name: 'Purdue University Fort Wayne',
    degreeLabel: 'M.S. Computer Science — GPA',
    gpa: '4.0/4.0',
    location: 'Fort Wayne, IN',
    dates: 'Aug 2024 – May 2026',
    hue: 255,
    tilt: '-1.2deg',
  },
  {
    logo: '/assets/images/AUS Logo.png',
    logoBg: 'white',
    name: 'American University of Sharjah',
    degreeLabel: 'B.S. Computer Engineering',
    gpa: '',
    location: 'Sharjah, UAE',
    dates: 'Aug 2020 – Dec 2023',
    hue: 30,
    tilt: '1.2deg',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google (Credly)',
    url: 'https://www.credly.com/badges/928a96c7-09b7-467c-a8f3-1ea169550db2/linked_in_profile',
    date: '2024',
    logo: '/assets/images/google-cyber-badge.svg',
  },
];

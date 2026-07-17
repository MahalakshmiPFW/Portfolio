import { CaseStudy, EducationItem, ExperienceItem, ProcessStep, ToolkitGroup } from './types';

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
    title: 'Crescendo Coffee Redesign',
    year: '2026',
    tags: ['Self-Directed PRD', 'UX Audit', 'Concept Redesign'],
    problem: 'Crescendo Coffee & Café — a locally loved shop in downtown Fort Wayne — has a website that undersells a genuinely great product: an unfilterable 2,000+ word menu page and an "Order Online" link that dumps visitors into an off-brand third-party checkout at the exact moment they\'re deciding to spend money.',
    approach: 'Ran this as a real PM exercise against a live business, not a hypothetical: audited the current site, defined two contrasting personas (a daily regular vs. a price-sensitive first-timer), wrote goals tied to measurable targets, and MoSCoW-prioritized requirements into a 3-phase roadmap. Used Claude Design to explore wireframes from that spec, then hand-built the interactive ordering prototype in React and TypeScript.',
    outcome: 'A complete concept PRD — background, problem statement, personas, success metrics, current-state audit, scope, requirements, IA, risks, and roadmap — scoping an in-brand ordering flow to replace the jarring hand-off to a generic checkout page.',
    externalLinks: [
      { label: 'View Detailed PRD', url: '/case-studies/crescendo/prd.html', icon: '📋' },
      { label: 'View Wireframes', url: '/case-studies/crescendo/wireframes.html', icon: '✏️' },
      { label: 'View Prototype', url: '/case-studies/crescendo-prototype/', icon: '🖥️' },
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
    tags: ['0→1 Product', 'User Research', 'AI Integration'],
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
    tags: ['End-to-end Build', 'Data Modeling', 'User Flows'],
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
      'Led research and requirements gathering from legal and engineering stakeholders on GIS data policy, distilling their constraints into a three-tier classification model proposed for public data-sharing decisions.',
      'Gathered requirements directly from field engineering staff to redesign a Python/Tkinter data-entry tool around their actual workflow.',
      'Tracked deliverables and cross-team progress via a SharePoint tracker across a 19-member intern group.',
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
  },
  {
    logo: '/assets/images/SE Logo1.png',
    dates: 'Jun 2024 – Jul 2024',
    role: 'Process Automation Intern',
    org: 'Schneider Electric',
    bullets: [
      'Built an internal automation prototype to replace spreadsheet-heavy procurement workflows, improving data consistency through structured input flows.',
    ],
  },
];

export const TOOLKIT: ToolkitGroup[] = [
  {
    title: 'Product & Process',
    icon: '🗂️',
    hue: 255,
    items: ['Jira', 'Trello', 'Bitbucket', 'Backlog scoping', 'Sprint planning'],
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
    items: ['HTML/CSS', 'React', 'Next.js', 'Responsive Design', 'JavaScript/TS', 'Vercel', 'Node.js', 'Express.js', 'REST APIs', 'Python', 'SQL', 'Jest', 'Cypress'],
  },
  {
    title: 'AI-Assisted Work',
    icon: '✨',
    hue: 30,
    items: ['Gemini API', 'Cursor', 'Copilot', 'ChatGPT'],
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

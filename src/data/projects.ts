export type Project = {
  title: string;
  slug: string;
  status: 'Completed' | 'In progress' | 'Concept';
  eyebrow: string;
  summary: string;
  detail: string;
  outcome?: string;
  tags: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  demoLabel?: string;
  featuredOrder?: number;
  caseStudy?: string;
  evidence?: {
    image: string;
    imageAlt: string;
    problem: string;
    role: string;
    decision: string;
    validation: string;
    limitations: string;
    nextStep: string;
  };
};

export const projects: Project[] = [
  {
    title: 'Cougar Crossing',
    slug: 'cougar-crossing',
    status: 'Completed',
    eyebrow: 'Developer · Browser game',
    summary: 'A BYU-themed browser game that puts you on the field with keyboard and on-screen controls.',
    detail: 'I built and published the game. The interface includes solo play, host and join controls, yard tracking, and game settings.',
    outcome: 'Published a playable browser game with a rendered field, player controls, and a live game interface.',
    tags: ['JavaScript', 'Canvas', 'Socket.IO', 'Game development'],
    featured: true,
    featuredOrder: 0,
    demo: 'https://cougar-crossing.onrender.com',
    demoLabel: 'Play the game',
    evidence: {
      image: '/images/projects/cougar-crossing.webp',
      imageAlt: 'Cougar Crossing game showing the football field, BYU end zone, and play controls.',
      problem: 'Build an interactive browser game around a familiar setting: BYU game day.',
      role: 'I built and deployed Cougar Crossing.',
      decision: 'The game uses a rendered field with both keyboard and on-screen movement controls. Solo, host, and join controls offer different ways to enter the game.',
      validation: 'On October 27, 2026, the public game interface loaded with the field, player, Play control, and yard tracking visible. The client uses Canvas and Socket.IO. Multiplayer synchronization and every game mode have not been independently verified.',
      limitations: 'This is a personal game project. No adoption, retention, or performance metrics are claimed. Multiplayer synchronization and game behavior across devices still need further testing.',
      nextStep: 'Test a solo run on a phone and desktop, then test joining a room from two devices. Record input responsiveness, connection failures, and whether players understand the objective.',
    },
  },
  {
    title: 'Personal Portfolio Website',
    slug: 'personal-portfolio-website',
    status: 'Completed',
    eyebrow: 'Developer · Personal portfolio',
    summary: 'A responsive portfolio website for my experience, projects, resume, and current work.',
    detail:
      'I designed, built, and deployed this Astro site with GitHub Actions, GitHub Pages, a custom domain, and a contact form.',
    tags: ['Astro', 'GitHub Actions', 'GitHub Pages', 'Responsive design'],
    featured: true,
    featuredOrder: 3,
    outcome: 'Deployed a responsive website with project detail pages, a downloadable resume, HTTPS redirects, and a working contact form.',
    evidence: {
      image: '/images/projects/portfolio.webp',
      imageAlt: 'Lot Holmstead’s portfolio homepage with his introduction, contact information, and project navigation.',
      problem: 'Recruiters need one place to find my experience, public work, current resume, and contact information.',
      role: 'I designed, built, and deployed the website, connected the custom domain and contact form, and maintain the content.',
      decision: 'I chose a static Astro site with GitHub Pages deployment so the portfolio can be hosted without a separate application server. Project evidence and a short introduction take priority over decorative sections.',
      validation: 'The production build and type checks pass. Desktop and mobile layouts, navigation, resume links, and HTTPS redirects have been checked. The contact form was tested with a real submission during setup.',
      limitations: 'These are functional checks, not evidence that the site improves recruiting outcomes. Contact delivery was tested during setup; it is not continuously monitored.',
      nextStep: 'Ask a reviewer to find a project, my graduation date, and my resume. Record completion, time, and navigation problems before making another design change.',
    },
    github: 'https://github.com/Lotstarr/Lotstarr',
    demo: 'https://lotholmstead.com',
  },
  {
    title: 'IS Career Launchpad',
    slug: 'is-career-launchpad',
    status: 'Completed',
    eyebrow: 'Product & web development',
    summary: 'A website that helps students explore careers in Information Systems.',
    detail:
      'I owned the career research, decision tree, page design, and coding. The site connects career recommendations with relevant skills, tools, salary information, and interview preparation.',
    outcome: 'Published a career-discovery decision tree, eight career paths, and interview-practice resources in a working team website.',
    tags: ['Product discovery', 'JavaScript', 'HTML', 'CSS'],
    featured: true,
    featuredOrder: 2,
    evidence: {
      image: '/images/projects/career-launchpad.webp',
      imageAlt: 'IS Career Launchpad public website showing career discovery and interview practice.',
      problem: 'Students exploring Information Systems need a starting point for comparing careers and preparing for interviews.',
      role: 'I owned the full website build: career research, decision-tree logic, page design, and coding. The project was submitted through our team repository.',
      decision: 'The published experience connects a guided career decision tree with career information and interview practice, keeping exploration and preparation in the same flow.',
      validation: 'On October 27, 2026, a browser walkthrough answered all five career-discovery questions, reached a starter recommendation, opened interview practice, and revealed a sample answer. The site also presents eight starter career paths. Student outcome testing has not been completed.',
      limitations: 'Career recommendations are a starting point, not validated career-placement advice. No measured improvement in career confidence, interview performance, or placement is claimed.',
      nextStep: 'Have students complete discovery and find a relevant practice question. Record completion, time, errors, and whether the recommendation makes sense to them.',
    },
    github: 'https://github.com/Lotstarr/Team-308-IS-Core-Case',
    demo: 'https://lotstarr.github.io/Team-308-IS-Core-Case/',
  },
  {
    title: 'Starrboard',
    slug: 'starrboard',
    status: 'Completed',
    eyebrow: 'Developer · Academic command center',
    summary: 'A modular command center for school deadlines, reading plans, and tasks, with a public fictional demo.',
    detail:
      'I developed a private application and a separate Next.js, React, and TypeScript demo. The demo runs on fictional records; it has no live Canvas, Google, GitHub, or database connection.',
    outcome: 'Published a credential-free fictional demo with working local interactions. Adoption and productivity gains have not been measured.',
    tags: ['Next.js', 'React', 'TypeScript', 'Browser-local state'],
    featured: true,
    featuredOrder: 1,
    demoLabel: 'Fictional demo',
    caseStudy: 'https://github.com/Lotstarr/starrboard-demo/blob/main/portfolio/CASE_STUDY.md',
    evidence: {
      image: '/images/projects/starrboard.webp',
      imageAlt: 'Starrboard public fictional dashboard with modular widgets and a daily overview.',
      problem: 'School deadlines, reading plans, and tasks live across separate systems, making it harder to see what needs attention today.',
      role: 'I developed the private command center and published a separate fictional demo to show the interface without exposing personal records or account access.',
      decision: 'Keep imported facts separate from personal planning, make source freshness visible, and provide a daily overview alongside focused workspaces. The public demo uses fictional browser-local data so reviewers can explore without credentials.',
      validation: 'On October 27, 2026, a browser check loaded the demo without credentials, opened Today from the overview, and opened the task-capture dialog. This check did not validate every interaction or any live integration. The linked case study documents the architecture and a fuller demonstration plan.',
      limitations: 'The demo has no live integrations. Refresh, planning approval, and automation dialogs are simulations. Record changes reset on reload. The planner is rule-based, not generative AI; external assistant integration is not implemented. No broad adoption or productivity improvement has been measured.',
      nextStep: 'Run a small task test: ask students to identify a deadline, capture a task, and find it in Today. Record completion, time, and errors, then change one part of the flow and repeat.',
    },
    github: 'https://github.com/Lotstarr/starrboard-demo',
    demo: 'https://starrboard-demo.vercel.app',
  },
  {
    title: 'Custom Athlete Websites',
    slug: 'athlete-recruiting-platform',
    status: 'In progress',
    eyebrow: 'Founder · In development',
    summary: 'Recruiting websites for high-school athletes, bringing stats, highlight film, schedules, and coach contact information into one profile.',
    detail:
      'As the founder, I’m developing a way for athletes and their families to organize recruiting information and share it with college coaches.',
    tags: ['Product design', 'Web development', 'Information architecture', 'Problem solving'],
    featured: true,
    demo: 'https://tyholmstead.com',
    demoLabel: 'Live athlete website',
    outcome: 'A live athlete recruiting website is available at tyholmstead.com. The broader recruiting platform remains in development.',
    evidence: {
      image: '/images/projects/notawalkon.webp',
      imageAlt: 'Ty Holmstead’s live recruiting website with a baseball portrait, film links, and coach-view navigation.',
      problem: 'Athletes and families need a clear way to present their recruiting story, stats, film, schedules, and contact information to coaches.',
      role: 'I’m the founder and developer, building custom recruiting websites for high-school athletes.',
      decision: 'Bring the recruiting story together in one shareable athlete website, with direct access to film, numbers, coach view, and contact rather than making coaches search across separate sources.',
      validation: 'On October 27, 2026, tyholmstead.com loaded publicly with an athlete introduction, film room, stats, schedule information, coach-view control, and recruiting contact form. The contact form was not submitted during this portfolio review.',
      limitations: 'A live athlete website is evidence of shipped work, not evidence of recruiting outcomes or a fully launched SaaS platform. No measured athlete adoption, coach response rate, or recruiting improvement is claimed.',
      nextStep: 'Ask coaches to find film, key stats, and contact information. Record completion, time, and questions, then use those observations to choose the next product change.',
    },
  },
  {
    title: 'Software Startup Simulation',
    slug: 'software-startup-simulation',
    status: 'In progress',
    eyebrow: 'Product research & development',
    summary: 'An interactive classroom simulation that teaches students to manage a software startup through feedback-driven decisions and pivots.',
    detail:
      'Students begin with a shared MVP scenario and make product, technical, marketing, and resource-allocation decisions across multiple rounds. The first phase includes researching existing simulations, using AI to storyboard the scenario and decision points, and building a lightweight MVP for a rapid-fire class competition.',
    tags: ['Validated learning', 'Product strategy', 'AI storyboarding', 'Simulation design'],
    featured: true,
  },
  {
    title: 'Wedding Financial Planner',
    slug: 'wedding-financial-planner',
    status: 'Completed',
    eyebrow: 'Python application',
    summary: 'A six-feature budgeting tool for planning expenses and comparing actual spending against a budget.',
    detail:
      'Built with Python using functions, loops, lists, and dictionaries to calculate a wedding budget and track categorized expenses.',
    outcome: 'Delivered six budgeting features in one Python application for comparing planned and actual spending by category.',
    tags: ['Python', 'Financial planning', 'Data modeling'],
    featured: false,
  },
  {
    title: 'Resume Website & Snowboard Ride Coach',
    slug: 'snowboard-ride-coach',
    status: 'Completed',
    eyebrow: 'My first web project',
    summary: 'My first complete website: a personal resume site with an interactive Snowboard Ride Coach.',
    detail:
      'I built the four-page site with HTML, CSS, Bootstrap, and JavaScript. Along with my resume, it includes a ride-planning tool and an embedded Tableau snowboarding visualization.',
    outcome: 'Published a four-page resume website with two interactive coach modes: conditions-based riding plans and trick practice.',
    featured: true,
    featuredOrder: 4,
    evidence: {
      image: '/images/projects/snowboard-ride-coach.webp',
      imageAlt: 'Snowboard Ride Coach showing conditions and trick coaching controls.',
      problem: 'My first web project needed to present my resume and demonstrate JavaScript interaction through a topic I know: snowboarding.',
      role: 'I built the four-page resume website, added the Snowboard Ride Coach, and embedded a Tableau snowboarding visualization.',
      decision: 'Use two focused modes—conditions and trick goals—rather than one long form. Each mode takes a small set of inputs and returns a rule-based plan.',
      validation: 'On October 27, 2026, a browser check generated a conditions plan with 4 inches of snow and a temperature of 25°F, reset the conditions inputs, generated a beginner trick plan, and reset that mode. Both plan-generation flows worked; this was not a test of coaching effectiveness.',
      limitations: 'The plans are rule-based suggestions, not live resort or avalanche information. They have not been validated as coaching or safety advice, and no rider improvement has been measured.',
      nextStep: 'Ask a rider to create a plan in each mode and explain it back. Record completion and confusing inputs before changing the interface.',
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tableau'],
    github: 'https://github.com/Lotstarr/IS201-Final',
    demo: 'https://lotstarr.github.io/IS201-Final/app.html',
  },
];

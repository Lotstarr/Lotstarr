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
};

export const projects: Project[] = [
  {
    title: 'IS Career Launchpad',
    slug: 'is-career-launchpad',
    status: 'Completed',
    eyebrow: 'Product & web development',
    summary: 'A website that helps students explore careers in Information Systems.',
    detail:
      'The site uses a decision tree to recommend career paths and share relevant skills, tools, salary information, and interview preparation.',
    outcome: 'Completed the career-path experience and supporting Information Systems resources.',
    tags: ['Product discovery', 'JavaScript', 'HTML', 'CSS'],
    featured: true,
    github: 'https://github.com/Lotstarr/Team-308-IS-Core-Case',
    demo: 'https://lotstarr.github.io/Team-308-IS-Core-Case/',
  },
  {
    title: 'Starrboard',
    slug: 'starrboard',
    status: 'Completed',
    eyebrow: 'Developer · AI academic platform',
    summary: 'An AI-powered academic command center that brings assignments, calendars, notes, textbooks, and course platforms into one intelligent dashboard.',
    detail:
      'As the developer, I focused on AI, automation, full-stack development, product design, and API integrations. Starrboard helps students prioritize work, manage deadlines, understand their workload, and plan when and what to study.',
    outcome: 'Completed and published a working demo with a public GitHub repository.',
    tags: ['AI', 'Automation', 'Full-stack development', 'Product design', 'API integrations'],
    featured: true,
    github: 'https://github.com/Lotstarr/starrboard-demo',
    demo: 'https://starrboard-demo.vercel.app',
  },
  {
    title: 'Athlete Recruiting Platform',
    slug: 'athlete-recruiting-platform',
    status: 'In progress',
    eyebrow: 'Developer',
    summary: 'A SaaS platform that helps high school athletes create professional, shareable recruiting profiles.',
    detail:
      'Profiles bring athletic stats, academics, highlight videos, contact information, and event calendars into one place. The platform is designed to help athletes and their families organize recruiting information, present it to college coaches, and manage outreach.',
    tags: ['SaaS', 'Web development', 'Athlete profiles', 'College recruiting'],
    featured: true,
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
    featured: true,
  },
  {
    title: 'Resume Website & Snowboard Ride Coach',
    slug: 'snowboard-ride-coach',
    status: 'Completed',
    eyebrow: 'My first web project',
    summary: 'My first complete website: a personal resume site with an interactive Snowboard Ride Coach.',
    detail:
      'I built the four-page site with HTML, CSS, Bootstrap, and JavaScript. Along with my resume, it includes a ride-planning tool and an embedded Tableau snowboarding visualization.',
    outcome: 'Published my first complete website and added an interactive JavaScript feature that creates a riding plan from snow conditions or trick goals.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tableau'],
    github: 'https://github.com/Lotstarr/IS201-Final',
    demo: 'https://lotstarr.github.io/IS201-Final/app.html',
  },
];

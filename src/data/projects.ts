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
    status: 'In progress',
    eyebrow: 'Product & web development',
    summary: 'A guided career-path experience for students exploring Information Systems.',
    detail:
      'A decision-tree experience that recommends career paths and connects students with skills, tools, salary context, and interview preparation.',
    tags: ['Product discovery', 'JavaScript', 'HTML', 'CSS'],
    featured: true,
  },
  {
    title: 'Starrboard',
    slug: 'starrboard',
    status: 'Concept',
    eyebrow: 'AI & academic systems',
    summary: 'A centralized academic command center for assignments, notes, calendars, and study priorities.',
    detail:
      'A long-term product concept designed to connect fragmented student systems and turn them into clear priorities, study materials, and recommended work blocks.',
    tags: ['AI', 'Automation', 'Product strategy', 'Systems design'],
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
    title: 'Snowboard Ride Coach',
    slug: 'snowboard-ride-coach',
    status: 'Completed',
    eyebrow: 'Web development',
    summary: 'An interactive web app that turns weather conditions or trick goals into a tailored riding plan.',
    detail:
      'Built as part of a four-page responsive website with JavaScript interactions and an embedded Tableau snowboarding visualization.',
    outcome: 'Published four responsive pages, including one live interactive coach and one embedded Tableau view.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tableau'],
    github: 'https://github.com/Lotstarr/IS201-Final',
    demo: 'https://lotstarr.github.io/IS201-Final/app.html',
  },
];

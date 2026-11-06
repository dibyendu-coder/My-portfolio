import { CertificationItem, ExperienceItem, ProjectItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Dibyendu Chatterjee',
  nickname: 'DC',
  title: 'AI Engineer & Builder',
  tagline: '1x MLH Winner • Oracle & Gemini Certified • Agentic AI Workflows',
  bio: 'I build high-leverage developer tools and agentic AI systems that turn chaotic workflows into calm, executable clarity. When the clock is ticking, my superpower is shipping battle-tested software fast using agentic coding and open-weight models.',
  location: 'Greater Kolkata Area, India',
  email: 'chatterjeedibyendu166@gmail.com',
  avatar: '/me.jpg',
  avatarFallback: '/me.svg',
  resumeAvailable: true,
  socials: {
    github: 'https://github.com/dibyendu-coder',
    linkedin: 'https://www.linkedin.com/in/dibyendu-chatterjee-5a218b330/',
    x: 'https://x.com/Dibyend41532078',
    youtube: 'https://youtube.com/@dibyenduchatterjee4877',
  },
  stats: [
    { label: 'MLH Hackathon Winner', value: '1x', subtext: 'Global Major League Hacking' },
    { label: 'Professional Certifications', value: '6+', subtext: 'Oracle, Google, Microsoft, McKinsey' },
    { label: 'Ambassador Roles', value: '2', subtext: 'Google & eDC IIT Delhi' },
    { label: 'Cloud & AI Deployments', value: '100%', subtext: 'AWS Amplify & Edge Ready' },
  ],
  taglineBadges: [
    '1x MLH Hackathon Winner',
    'Oracle Certified Generative AI Professional',
    'Gemini Certified University Student',
    'Arcade Legend Tier Holder',
    'Campus Ambassador, eDC at IIT Delhi',
    'Google Student Ambassador',
    'McKinsey Forward Alumni',
  ],
  interests: ['Hackathons', 'Developer Tools', 'AI Workflows', 'Agentic Coding', 'Cloud Architecture'],
};

export const EDUCATION = {
  degree: 'B.Tech in Computer Science and Engineering',
  institution: 'JIS College of Engineering',
  graduationYear: '2024',
  location: 'West Bengal, India',
  focus: 'Computer Science, Data Structures, Algorithms, Software Engineering, AI',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'gsa',
    role: 'Google Student Ambassador',
    organization: 'Google',
    period: 'May 2026 - Present',
    location: 'India',
    badge: 'Leadership',
    highlight: true,
    description: [
      'Serving as an on-campus community liaison driving Google developer technologies, AI workshops, and hands-on developer ecosystems.',
      'Mentoring student builders on Gemini APIs, cloud fundamentals, and modern developer workflows.',
    ],
  },
  {
    id: 'edc-iitd',
    role: 'Campus Ambassador',
    organization: 'eDC at IIT Delhi (Entrepreneurship Development Cell)',
    period: 'Campus Ambassador',
    location: 'IIT Delhi / Remote',
    badge: 'Ecosystem',
    description: [
      'Represented eDC IIT Delhi within collegiate developer networks, orchestrating startup pitch opportunities and hackathon participation.',
      'Fostered cross-college entrepreneurship hubs, connecting early-stage student builders with premier tech summits.',
    ],
  },
  {
    id: 'mckinsey-forward',
    role: 'McKinsey Forward Program Alumni',
    organization: 'McKinsey & Company',
    period: 'Sep 2025 - Dec 2025',
    location: 'Global Virtual',
    badge: 'Alumni',
    description: [
      'Completed intensive curriculum in structured problem-solving, high-impact business communication, and digital collaboration.',
      'Engaged in peer project sprints and real-world case simulations; actively participating in the global McKinsey Forward alumni network.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'oracle-genai',
    title: 'Oracle Certified Generative AI Professional',
    issuer: 'Oracle',
    badgeColor: 'from-amber-500 to-red-600',
    iconName: 'Cpu',
    skillsCovered: ['Large Language Models', 'Prompt Engineering', 'OCI GenAI Service', 'Fine-tuning', 'Vector Search'],
  },
  {
    id: 'gemini-certified',
    title: 'Gemini Certified University Student',
    issuer: 'Google',
    badgeColor: 'from-blue-500 to-cyan-400',
    iconName: 'Sparkles',
    skillsCovered: ['Multimodal AI', 'Gemini Pro/Flash API', 'Structured Outputs', 'Context Windows'],
  },
  {
    id: 'ms-linkedin-genai',
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    badgeColor: 'from-sky-500 to-indigo-500',
    iconName: 'Award',
    skillsCovered: ['Generative AI Landscape', 'Copilot Ecosystem', 'Ethical AI', 'Workplace Productivity'],
  },
  {
    id: 'mckinsey-forward-cert',
    title: 'McKinsey Forward Program Completion',
    issuer: 'McKinsey & Company',
    badgeColor: 'from-emerald-500 to-teal-400',
    iconName: 'TrendingUp',
    skillsCovered: ['Structured Problem Solving', 'Digital Collaboration', 'Agile Mindsets', 'Leadership'],
  },
  {
    id: 'deloitte-simulation',
    title: 'Technology Job Simulation',
    issuer: 'Deloitte Australia (Forage)',
    badgeColor: 'from-green-500 to-emerald-600',
    iconName: 'ShieldCheck',
    skillsCovered: ['Technology Strategy', 'Data Analysis', 'Systems Architecture', 'Cybersecurity Awareness'],
  },
  {
    id: 'top-ai-questions',
    title: 'Your Top AI Questions Answered: AI Literacy for Everyone',
    issuer: 'LinkedIn Learning',
    badgeColor: 'from-purple-500 to-pink-500',
    iconName: 'HelpCircle',
    skillsCovered: ['AI Fundamentals', 'Generative Models', 'Tech Literacy', 'Tool Adoption'],
  },
  {
    id: 'what-is-genai',
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning & Industry Experts',
    badgeColor: 'from-cyan-500 to-blue-600',
    iconName: 'BookOpen',
    skillsCovered: ['Generative Neural Networks', 'Diffusion Models', 'Transformer Architectures'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI & Agentic Systems',
    description: 'Autonomous agents, LLM pipelines, prompt systems, and generative architectures.',
    skills: [
      { name: 'Generative AI', level: 'Advanced', superpower: true },
      { name: 'Agentic Coding', level: 'Superpower', superpower: true },
      { name: 'Prompt Engineering', level: 'Advanced' },
      { name: 'Model Context Protocol (MCP)', level: 'Practitioner' },
      { name: 'Gemini & Claude API', level: 'Advanced' },
    ],
  },
  {
    category: 'Languages',
    description: 'Core programming languages for systems, scripting, and full-stack engineering.',
    skills: [
      { name: 'TypeScript', level: 'Primary', superpower: true },
      { name: 'JavaScript (ESNext)', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'C', level: 'Intermediate' },
      { name: 'SQL', level: 'Advanced' },
    ],
  },
  {
    category: 'Web & Frontend',
    description: 'Modern, high-performance web applications with responsive glass aesthetics.',
    skills: [
      { name: 'React', level: 'Primary' },
      { name: 'TailwindCSS', level: 'Advanced', superpower: true },
      { name: 'HTML5 & Semantic Web', level: 'Advanced' },
      { name: 'CSS3 / Animations', level: 'Advanced' },
      { name: 'Vite', level: 'Advanced' },
    ],
  },
  {
    category: 'Data & Backend',
    description: 'Databases, serverless APIs, containerization, and data visualization.',
    skills: [
      { name: 'Supabase', level: 'Proficient' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Power BI', level: 'Intermediate' },
      { name: 'PostgreSQL / SQL', level: 'Proficient' },
      { name: 'REST & GraphQL', level: 'Intermediate' },
    ],
  },
  {
    category: 'Design & Tools',
    description: 'Visual system design, rapid prototyping, and developer tooling.',
    skills: [
      { name: 'Figma', level: 'Advanced' },
      { name: 'Canva', level: 'Advanced' },
      { name: 'Git & GitHub Actions', level: 'Advanced' },
      { name: 'AWS Amplify / CloudFront', level: 'Practitioner' },
      { name: 'Linux / Bash / PowerShell', level: 'Proficient' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'mlh-winner-project',
    title: '[TODO: MLH Hackathon Winning Project Name]',
    tagline: 'Global MLH Hackathon Winner — Rapid Prototype to Champion Submission',
    description:
      '[TODO: Replace with official hackathon winning project pitch: what problem it solved, the technical architecture, and the judging track it won in MLH.] Built under strict hackathon time limits using AI assistance, high-velocity frontend engineering, and seamless cloud deployment.',
    tags: ['MLH Winner', 'Generative AI', 'TypeScript', 'Hackathon Champion', 'Cloud Deploy'],
    githubUrl: 'https://github.com/dibyendu-coder',
    liveUrl: '#',
    featured: true,
    isMlhWinner: true,
    isTodoPlaceholder: true,
    todoNote: 'Enter the exact MLH project name, Devpost/repo URL, and winning track details.',
  },
  {
    id: 'zerohour',
    title: 'ZeroHour',
    tagline: 'AI Emergency Command Center for Urgent Workloads',
    description:
      'Triages high-pressure deadline bottlenecks, auto-generates step-by-step survival plans, and eliminates last-minute panic through structured algorithmic task decompensation.',
    tags: ['TypeScript', 'Generative AI', 'Emergency Triage', 'Agentic UX'],
    githubUrl: 'https://github.com/dibyendu-coder/ZeroHour',
    featured: true,
  },
  {
    id: 'neuralquery',
    title: 'NeuralQuery',
    tagline: 'Natural Language to Relational SQL Intelligence Engine',
    description:
      'Translates conversational intent directly into optimized, syntax-validated SQL queries with schema introspection and automated query explainability.',
    tags: ['JavaScript', 'Natural Language Processing', 'SQL', 'DevTools'],
    githubUrl: 'https://github.com/dibyendu-coder/NeuralQuery',
    featured: true,
  },
  {
    id: 'envguard',
    title: 'envguard',
    tagline: 'Zero-Dependency CLI for Environment Variable Hygiene',
    description:
      'Developer-first TypeScript CLI that lints, validates, and syncs .env configuration schemas across local environments and CI/CD pipelines before deployment breakages occur.',
    tags: ['TypeScript', 'CLI', 'Developer Experience', 'Node.js', 'Security'],
    githubUrl: 'https://github.com/dibyendu-coder',
  },
  {
    id: 'agentshield',
    title: 'agentshield',
    tagline: 'Safety Guardrail & Sandbox Layer for AI Coding Agents',
    description:
      'A runtime containment and permission validation layer intercepting autonomous coding agents before high-risk disk, network, or environment operations execute.',
    tags: ['AI Security', 'Agentic Workflows', 'TypeScript', 'Sandbox Engine'],
    githubUrl: 'https://github.com/dibyendu-coder',
  },
  {
    id: 'fieldnotes',
    title: 'Fieldnotes',
    tagline: 'Offline Open-Weight AI Naturalist Quest Application',
    description:
      'A field-ready companion enabling explorers to identify flora and fauna fully offline using quantized open-weight on-device AI inference and gamified discovery logs.',
    tags: ['Open-Weight AI', 'Offline-First', 'Edge Inference', 'Mobile-Ready'],
    githubUrl: 'https://github.com/dibyendu-coder',
  },
  {
    id: 'client-website-1',
    title: '[TODO: Client Website 1]',
    tagline: 'Production Commercial Web Application',
    description:
      '[TODO: Replace with client project name, brief description of business value, tech stack used, and live production link.]',
    tags: ['Commercial', 'React', 'TailwindCSS', 'Production'],
    liveUrl: '#',
    isTodoPlaceholder: true,
    todoNote: 'Add name, client summary, and production URL.',
  },
  {
    id: 'client-website-2',
    title: '[TODO: Client Website 2]',
    tagline: 'High-Converting Digital Experience',
    description:
      '[TODO: Replace with client project 2 name, responsive design accomplishments, performance metrics, and live URL.]',
    tags: ['Client Project', 'Performance', 'Full Stack', 'Cloud'],
    liveUrl: '#',
    isTodoPlaceholder: true,
    todoNote: 'Add second client project details or replace with client case study.',
  },
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: 'help', desc: 'Display all available DC-OS commands' },
  { cmd: 'about', desc: 'Display biography, location, and education' },
  { cmd: 'skills', desc: 'List technical skills and superpowers' },
  { cmd: 'projects', desc: 'Print catalog of shipped projects' },
  { cmd: 'open <project>', desc: 'Open project link (e.g. open zerohour)' },
  { cmd: 'certs', desc: 'List verified credentials and certifications' },
  { cmd: 'badges', desc: 'Display achievement badges and honors' },
  { cmd: 'experience', desc: 'Show leadership and career history' },
  { cmd: 'contact', desc: 'Show direct contact channels and socials' },
  { cmd: 'theme <neon|pastel|dark>', desc: 'Live re-skin the entire portfolio interface' },
  { cmd: 'superpower', desc: 'Reveal DC’s secret technical superpower' },
  { cmd: 'clear', desc: 'Wipe the terminal screen' },
  { cmd: 'secret', desc: 'Trigger retro arcade easter egg celebration' },
];

export const TODO_CHECKLIST = [
  {
    id: 'mlh-project',
    title: 'MLH Hackathon Winning Project',
    action: 'Provide project name, short pitch, Devpost/repo link, and winning track in src/data/content.ts.',
    status: 'Pending user details',
  },
  {
    id: 'client-work',
    title: 'Client Websites (1-2 Projects)',
    action: 'Provide client names, brief summary, and live URLs in src/data/content.ts.',
    status: 'Pending user details',
  },
  {
    id: 'photo',
    title: 'Profile Photo',
    action: 'Drop your photo into public/me.jpg (the site already defaults gracefully to public/me.svg).',
    status: 'Ready for swap',
  },
];

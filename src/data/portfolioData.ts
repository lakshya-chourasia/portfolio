import {
  Project,
  Service,
  Article,
  Testimonial,
  Award,
  CareerItem,
  FAQItem,
  EducationItem,
  CertificationItem,
  SkillCategory,
} from '../types';
import { GitCommit } from '../utils/versionControl';

export const HERO_DATA = {
  name: 'LAKSHYA',
  fullName: 'Lakshya Chourasia',
  year: '©2026',
  brandMark: 'LAKSHYA®',
  title: 'B.Tech CSE Student (Class of 2027) | SDE & Full-Stack Intern',
  tagline:
    'I DESIGN & DEVELOP HIGH-PERFORMANCE WEB APPLICATIONS AND SCALABLE INTELLIGENT SYSTEMS THAT ARE SMART, ROBUST, AND IMPACTFUL.',
  bio: "Hi, I'm Lakshya Chourasia, a Computer Science & Engineering undergraduate, competitive programmer, and full-stack software engineer building high-performance web systems and AI pipelines.",
  contactPhone: '+91-6262169454',
  contactEmail: 'lakshyachourasiaaa@gmail.com',
  directPhone: '+91-6262169454',
  directEmail: 'lakshyachourasiaaa@gmail.com',
  location: 'Bhopal, Madhya Pradesh, India (Open for Remote & On-site)',
  address: 'Bhopal, Madhya Pradesh, India',
  status: 'Open for Summer / Fall 2026 SDE & Full-Stack Internships',
  linkedIn: 'https://linkedin.com/in/laakshyaa',
  github: 'https://github.com/lakshya-chourasia',
  officeHours: '10AM - 18PM IST',
  officeDays: 'Monday - Saturday',
};

export const TICKER_ITEMS = [
  'FULL-STACK DEVELOPMENT',
  'GLOBAL RANK 543 TCS CODEVITA',
  'NEXT.JS 15 & FASTAPI',
  '1,200+ ALGORITHMIC PROBLEMS SOLVED',
  'AZURE CLOUD CERTIFIED',
];

export const TICKER_STRING =
  'FULL-STACK DEVELOPMENT ✱ GLOBAL RANK 543 TCS CODEVITA ✱ NEXT.JS 15 & FASTAPI ✱ 1,200+ ALGORITHMIC PROBLEMS SOLVED ✱ AZURE CLOUD CERTIFIED';

export const TRUSTED_BRANDS = [
  'Next.js 15',
  'FastAPI',
  'TypeScript',
  'Docker',
  'Supabase',
  'Microsoft Azure',
];

export const IMPACT_STATS = [
  {
    value: '543',
    label: 'GLOBAL CODEVITA RANK',
    description: 'Round-2 TCS CodeVita Season 13 among 100,000+ competitors worldwide.',
  },
  {
    value: '1,200+',
    label: 'ALGORITHMS SOLVED',
    description: 'Mastered DP, Graphs, and Trees on LeetCode, GFG, and CodeChef.',
  },
];

export const BENTO_METRICS = {
  rank: {
    number: '543',
    title: 'Global Rank 543',
    subtitle: 'TCS CodeVita Season 13 (Round-2) among 100,000+ competitors worldwide',
  },
  problems: {
    number: '1,200+',
    title: '1,200+ Problems Solved',
    subtitle: 'LeetCode, GeeksforGeeks, CodeChef (DP, Graphs, Trees)',
  },
  cgpa: {
    number: '8.0 / 10',
    title: '8.0 CGPA',
    subtitle: 'Technocrats Institute of Technology - Excellence, Bhopal',
  },
  systems: {
    title: 'Fast & Clean Systems',
    subtitle: 'Zero-latency asynchronous pipelines, ephemeral memory processing in RAM',
  },
};

export const EDUCATION: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Technocrats Institute of Technology - Excellence, Bhopal, MP',
    period: '2023 – 2027',
    score: 'CGPA: 8.0 / 10',
    location: 'Bhopal, Madhya Pradesh',
  },
  {
    id: 'class12',
    degree: 'Higher Secondary (Class XII) — Science PCM',
    institution: 'Model Higher Secondary School, Bhopal, MP',
    period: '2022 – 2023',
    score: 'Score: 84%',
    location: 'Bhopal, Madhya Pradesh',
  },
  {
    id: 'class10',
    degree: 'Secondary School (Class X)',
    institution: 'Saint Andrews English High School, Bhopal, MP',
    period: '2020 – 2021',
    score: 'Score: 81%',
    location: 'Bhopal, Madhya Pradesh',
  },
];

export const HONORS_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'codevita',
    title: 'TCS CodeVita Season 13: Global Rank 543',
    issuer: 'Tata Consultancy Services',
    year: '2024',
    badge: 'Rank 543 / 100,000+',
    description: 'Ranked 543 globally in Round-2 of the world’s largest competitive coding contest.',
    iconType: 'code',
  },
  {
    id: 'azure',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: '2024',
    badge: 'AZ-900 Certified',
    description: 'Cloud concepts, security, governance, and architecture across Microsoft Azure.',
    iconType: 'cloud',
  },
  {
    id: 'nptel',
    title: 'NPTEL IIT Kharagpur: Programming in Java',
    issuer: 'IIT Kharagpur / Ministry of Education',
    year: '2024',
    badge: 'Elite + Silver (84%)',
    description: 'Awarded Elite + Silver certificate with 84% final examination score.',
    iconType: 'award',
  },
  {
    id: 'sap',
    title: 'SAP Certified: Back-End Developer — ABAP Cloud',
    issuer: 'SAP SE',
    year: '2024',
    badge: 'Enterprise Backend',
    description: 'Modern enterprise application architecture and cloud-native backend development.',
    iconType: 'cpu',
  },
  {
    id: 'upgrad',
    title: 'upGrad: Generative AI Foundations',
    issuer: 'upGrad',
    year: '2024',
    badge: 'GenAI Foundations',
    description: 'Prompt engineering, LLM evaluation metrics, and semantic vector workflows.',
    iconType: 'zap',
  },
  {
    id: 'hackathons',
    title: 'Hackathon Leadership & 100% On-Time Delivery',
    issuer: 'National Hackathons',
    year: '2023 – 2025',
    badge: '10+ Hackathons Led',
    description: 'Directed engineering squads of 4–5 across 10+ hackathons with 100% on-time deployment.',
    iconType: 'award',
  },
];

export const SKILLS_ARSENAL: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
  },
  {
    category: 'Web & Frameworks',
    skills: ['React.js', 'Next.js 15', 'FastAPI', 'Node.js', 'Express.js', 'Tailwind CSS', 'RESTful APIs'],
  },
  {
    category: 'Databases & Cloud',
    skills: ['MongoDB', 'Supabase (PostgreSQL)', 'MySQL', 'Microsoft Azure', 'Docker'],
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux / Bash'],
  },
  {
    category: 'Core CS Fundamentals',
    skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'DBMS', 'Operating Systems', 'System Design'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'swiftpdf',
    number: '001',
    title: 'SwiftPDF Intelligence Suite',
    category: '/Next.js 15 · FastAPI',
    image: '/images/project_zentix.webp',
    tag: 'Enterprise Document Intelligence',
    description:
      'High-performance document intelligence platform offering 37+ PDF manipulation tools with zero persistent disk storage and sub-200ms render latencies.',
    year: '2025',
    featured: true,
    techStack: [
      'Next.js 15',
      'FastAPI',
      'TypeScript',
      'Python',
      'PyMuPDF',
      'Docker',
      'AES Encryption',
    ],
    architectureHighlights: [
      'Enterprise document intelligence platform offering 37+ PDF manipulation tools.',
      'Zero persistent disk storage — all operations execute ephemerally in RAM.',
      'Asynchronous FastAPI backend cut server memory overhead by 40%.',
      'Client-side Next.js 15 Cyber-Cockpit UI achieving sub-200ms render latencies.',
    ],
  },
  {
    id: 'auraerp',
    number: '002',
    title: 'AuraERP — Cloud College Management Platform',
    category: '/Full-Stack MERN + Supabase',
    image: '/images/project_lumio.webp',
    tag: 'Campus Cloud Infrastructure',
    description:
      'Modular full-stack ERP managing student records, attendance, fee ledgers, and academic workflows with hybrid Supabase relational schemas and MongoDB.',
    year: '2024',
    featured: true,
    techStack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Supabase (PostgreSQL)',
      'JWT Auth',
    ],
    architectureHighlights: [
      'Modular full-stack ERP managing student records, attendance, fee ledgers, and academic workflows.',
      'Role-based access control (RBAC) with secure multi-tier JWT authentication.',
      'Hybrid database architecture combining Supabase relational schemas with MongoDB collections, keeping cross-entity query latency under 300ms.',
    ],
  },
  {
    id: 'cutoutai',
    number: '003',
    title: 'CutOut AI — Semantic Segmentation',
    category: '/Computer Vision · AI',
    image: '/images/project_arkio.webp',
    tag: 'Vision Transformer Pipeline',
    description:
      'Vision transformer semantic segmentation pipeline processing 4K assets in under 800ms with fine boundary refinement and alpha-matting.',
    year: '2024',
    featured: true,
    techStack: [
      'Python',
      'Hugging Face Transformers',
      'OpenCV',
      'React.js',
      'Vite',
    ],
    architectureHighlights: [
      'Vision transformer segmentation pipeline processing 4K assets in under 800ms.',
      'Boundary refinement and alpha-matting algorithms to isolate fine hair strands and semi-transparent objects.',
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'fullstack',
    number: '001',
    title: 'FULL-STACK WEB DEVELOPMENT',
    description: 'ARCHITECTING SCALABLE, HIGH-PERFORMANCE WEB APPLICATIONS WITH NEXT.JS 15, REACT, AND FASTAPI.',
    image: '/images/service_uiux.webp',
    tags: [
      'Next.js 15 Architecture',
      'FastAPI Backend Systems',
      'Type-Safe REST APIs',
      'Microservices & Docker',
      'Zero-Latency Pipelines',
    ],
  },
  {
    id: 'cloud',
    number: '002',
    title: 'CLOUD & DATABASE SYSTEMS',
    description: 'DESIGNING HYBRID RELATIONAL AND DOCUMENT STORAGE ARCHITECTURES WITH AZURE, SUPABASE, AND MONGODB.',
    image: '/images/service_app.webp',
    tags: [
      'Microsoft Azure (AZ-900)',
      'Supabase PostgreSQL',
      'MongoDB Aggregations',
      'Ephemeral RAM Caching',
      'Database Optimization',
    ],
  },
  {
    id: 'ai',
    number: '003',
    title: 'AI & INTELLIGENT PIPELINES',
    description: 'INTEGRATING VISION TRANSFORMERS, SEMANTIC SEGMENTATION, AND LLM WORKFLOWS INTO RESPONSIVE FRONTENDS.',
    image: '/images/service_product.webp',
    tags: [
      'Vision Transformers',
      'OpenCV Image Processing',
      'Hugging Face Models',
      'Prompt Engineering',
      'PyMuPDF Document Intelligence',
    ],
  },
];

export const DESIGN_PROCESS = [
  {
    step: '01',
    title: 'PROBLEM ANALYSIS & DSA',
    description: 'Deconstructing algorithmic complexity, memory constraints, and high-level architectural trade-offs.',
  },
  {
    step: '02',
    title: 'SYSTEM ARCHITECTURE',
    description: 'Designing modular services, ephemeral RAM processing, database schemas, and clean RESTful API contracts.',
  },
  {
    step: '03',
    title: 'ENGINEERING & RIGOR',
    description: 'Writing strictly typed, linted, and tested code across Next.js 15, FastAPI, and robust backend services.',
  },
  {
    step: '04',
    title: 'CONTAINERIZATION & DEPLOY',
    description: 'Benchmarking performance under load, containerizing with Docker, and provisioning cloud infrastructure.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'TCS CodeVita Jury',
    role: 'Global Coding Competition',
    rating: 5,
    content:
      'Lakshya demonstrated exceptional algorithmic mastery and rapid problem-solving speed, securing Global Rank 543 out of 100,000+ competitors in Round-2.',
  },
  {
    id: '2',
    name: 'Hackathon Evaluator',
    role: 'National Tech Hackathon',
    rating: 5,
    content:
      'Lakshya led his squad to deliver SwiftPDF with exceptional speed. The RAM-based ephemeral processing design proved both memory-efficient and blazing fast.',
  },
  {
    id: '3',
    name: 'Department Faculty',
    role: 'TIT Excellence Bhopal',
    rating: 5,
    content:
      'Consistent academic excellence with an 8.0 CGPA paired with real-world full-stack execution across ERP and AI projects. One of the top engineering minds in the 2027 batch.',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'ephemeral-ram-processing',
    title: 'Zero-Disk Architecture: Processing 37+ PDF Operations Purely in RAM',
    category: 'SYSTEMS',
    date: 'Jan 15, 2025',
    author: 'Lakshya Chourasia',
    image: '/images/blog_teal_chair.webp',
    readTime: '5 min read',
    excerpt: 'How we eliminated disk I/O bottlenecks and cut FastAPI server memory overhead by 40%.',
    content: `When building high-throughput document intelligence tools like SwiftPDF, the primary performance bottleneck is almost never CPU computation—it is disk I/O. Writing incoming multi-megabyte PDF binaries to temporary folders and reading them back incurs massive OS context-switching penalties.

By migrating our entire pipeline to Python BytesIO buffers and PyMuPDF stream descriptors, every document operation—from AES encryption and page splitting to text extraction—executes strictly within ephemeral memory. The memory buffer is purged immediately upon completion, leaving zero forensic trace and achieving sub-200ms end-to-end latency.`,
  },
  {
    id: 'hybrid-database-erp',
    title: 'Bridging Relational Integrity & Document Flexibility in AuraERP',
    category: 'ARCHITECTURE',
    date: 'Dec 10, 2024',
    author: 'Lakshya Chourasia',
    image: '/images/blog_pumpkin_chair.webp',
    readTime: '6 min read',
    excerpt: 'Combining Supabase PostgreSQL with MongoDB to maintain ACID compliance without sacrificing schema agility.',
    content: `Enterprise college management systems present a unique data modeling challenge: financial fee ledgers demand strict ACID guarantees and foreign key constraints, while dynamic course syllabi and extracurricular records evolve continuously.

In AuraERP, we implemented a hybrid data topology. Financial ledgers and student matriculation records reside in Supabase PostgreSQL under strict RBAC triggers, while MongoDB stores flexible activity logs and submission payloads. Cross-entity query latency remains under 300ms.`,
  },
  {
    id: 'codevita-prep-dsa',
    title: 'From 0 to Global Rank 543: A Pragmatic Guide to 1,200+ Algorithmic Problems',
    category: 'COMPETITIVE PROGRAMMING',
    date: 'Nov 02, 2024',
    author: 'Lakshya Chourasia',
    image: '/images/blog_wood_chair.webp',
    readTime: '7 min read',
    excerpt: 'Patterns, mental models, and dynamic programming tricks that helped conquer TCS CodeVita Season 13.',
    content: `Solving over 1,200 problems across LeetCode, CodeChef, and GeeksforGeeks taught me that competitive programming is not about memorizing solutions—it is about pattern recognition.

Mastering multi-dimensional Dynamic Programming, Dijkstra and Bellman-Ford graph traversals, and Segment Trees allowed me to approach Round-2 of CodeVita Season 13 with confidence, solving critical challenges within the opening 90 minutes.`,
  },
];

export const AWARDS: Award[] = [
  {
    id: 'award-1',
    title: 'TCS CODEVITA SEASON 13: GLOBAL RANK 543',
    achievement: 'Global Rank 543 / 100k+',
    year: '2024',
    iconType: 'code',
  },
  {
    id: 'award-2',
    title: 'MICROSOFT CERTIFIED AZURE FUNDAMENTALS (AZ-900)',
    achievement: 'Cloud Architecture & Services',
    year: '2024',
    iconType: 'lightning',
  },
  {
    id: 'award-3',
    title: 'NPTEL IIT KHARAGPUR: PROGRAMMING IN JAVA (84%)',
    achievement: 'Elite + Silver Badge',
    year: '2024',
    iconType: 'flower',
  },
  {
    id: 'award-4',
    title: 'SAP CERTIFIED BACK-END DEVELOPER — ABAP CLOUD',
    achievement: 'Enterprise Cloud Systems',
    year: '2024',
    iconType: 'petals',
  },
];

export const CAREER_JOURNEY: CareerItem[] = [
  {
    id: 'swiftpdf-lead',
    company: 'SWIFTPDF INTELLIGENCE',
    period: '[2024 – PRESENT]',
    image: '/images/career_framerdevs.webp',
    role: 'Lead Full-Stack Architect',
    description:
      'Engineered an enterprise document intelligence suite with 37+ tools, Next.js 15 frontend, and an asynchronous FastAPI backend operating purely in RAM.',
  },
  {
    id: 'auraerp-dev',
    company: 'AURAERP PLATFORM',
    period: '[2023 – 2024]',
    image: '/images/career_reddevs.webp',
    role: 'Full-Stack SDE Intern',
    description:
      'Architected hybrid Supabase PostgreSQL and MongoDB database layer, multi-tier JWT RBAC authentication, and academic workflow automation.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    number: '1.',
    question: 'WHAT ROLES ARE YOU CURRENTLY LOOKING FOR?',
    answer:
      'I am actively seeking Software Development Engineer (SDE) and Full-Stack Developer Internship roles for Summer / Fall 2026. I am available for both remote opportunities and on-site roles worldwide.',
  },
  {
    id: 'faq-2',
    number: '2.',
    question: 'WHAT IS YOUR PRIMARY TECH STACK & SYSTEM ARCHITECTURE EXPERIENCE?',
    answer:
      'My core strength is full-stack web and systems development using Next.js 15, React, TypeScript, Python (FastAPI), Java, Docker, and hybrid cloud databases (MongoDB, Supabase PostgreSQL, Azure). I specialize in zero-latency pipelines and ephemeral processing.',
  },
  {
    id: 'faq-3',
    number: '3.',
    question: 'HOW STRONG IS YOUR ALGORITHMIC & PROBLEM-SOLVING BACKGROUND?',
    answer:
      'I hold Global Rank 543 in TCS CodeVita Season 13 (Round-2) among over 100,000 global competitors. I have solved 1,200+ algorithmic problems across LeetCode, CodeChef, and GeeksforGeeks, focusing deeply on Dynamic Programming, Graphs, and Trees.',
  },
  {
    id: 'faq-4',
    number: '4.',
    question: 'WHAT FORMAL CERTIFICATIONS DO YOU HOLD?',
    answer:
      'I am Microsoft Certified in Azure Fundamentals (AZ-900), SAP Certified in Back-End Developer ABAP Cloud, NPTEL IIT Kharagpur Elite + Silver certified in Java (84%), and upGrad certified in Generative AI Foundations.',
  },
  {
    id: 'faq-5',
    number: '5.',
    question: 'CAN YOU LEAD TEAMS IN FAST-PACED HACKATHONS AND SPRINTS?',
    answer:
      'Yes! I have successfully directed squads of 4–5 engineers across 10+ national hackathons with a 100% on-time deployment record, ensuring tight project delivery under 24–48 hour deadlines.',
  },
  {
    id: 'faq-6',
    number: '6.',
    question: 'HOW CAN RECRUITERS OR COLLABORATORS GET IN TOUCH?',
    answer:
      'You can reach me directly via email at lakshyachourasiaaa@gmail.com, call +91-6262169454, or connect on LinkedIn (linkedin.com/in/laakshyaa) and explore my code on GitHub (github.com/lakshya-chourasia).',
  },
];

export const GIT_COMMITS_HISTORY: GitCommit[] = [
  {
    hash: '4522593f21820b1e19485aa39281a9381c192841',
    shortHash: '4522593',
    type: 'feat',
    scope: 'hero',
    message: 'replace front page image with joyful cat sticker',
    fullMessage: 'feat(hero): replace front page image with joyful cat sticker',
    author: 'Lakshya Chourasia',
    email: 'lakshyachourasiaaa@gmail.com',
    date: '2026-11-13 15:06:00',
    tag: 'v1.3.2',
    filesChanged: 5,
    insertions: 25,
  },
  {
    hash: '9bf6941a9e8756312a0f8b1392841ec28f01b123',
    shortHash: '9bf6941',
    type: 'feat',
    scope: 'portfolio',
    message: 'personalize portfolio for Lakshya Chourasia with Bento grid and version switcher',
    fullMessage: 'feat(portfolio): personalize portfolio for Lakshya Chourasia with Bento grid and version switcher',
    author: 'Lakshya Chourasia',
    email: 'lakshyachourasiaaa@gmail.com',
    date: '2026-11-13 14:59:00',
    tag: 'v1.3.0',
    filesChanged: 24,
    insertions: 1914,
  },
  {
    hash: '7e2c570a92b84f33190abf51e069352e8d47b19a',
    shortHash: '7e2c570',
    type: 'feat',
    scope: 'beethoven',
    message: 'add Web Audio API Beethoven Symphony No 5 synthesizer and interactive cat dancing',
    fullMessage: 'feat(beethoven): add Web Audio API Beethoven Symphony No 5 synthesizer and interactive cat dancing',
    author: 'Lakshya Chourasia',
    email: 'lakshyachourasiaaa@gmail.com',
    date: '2026-11-13 14:38:00',
    tag: 'v1.2.0',
    filesChanged: 2,
    insertions: 340,
  },
  {
    hash: 'b708443901bce47189fa0821948ba28cd7181023',
    shortHash: 'b708443',
    type: 'feat',
    scope: 'identity',
    message: 'configure Lakshya Chourasia brand identity, SEO metadata, and portfolio types',
    fullMessage: 'feat(identity): configure Lakshya Chourasia brand identity, SEO metadata, and portfolio types',
    author: 'Lakshya Chourasia',
    email: 'lakshyachourasiaaa@gmail.com',
    date: '2026-11-13 14:32:00',
    tag: 'v1.1.1',
    filesChanged: 4,
    insertions: 520,
  },
  {
    hash: 'c700264b912389a01234567890abcdef12345678',
    shortHash: 'c700264',
    type: 'feat',
    scope: 'core',
    message: 'add pure logic modules for version control and portfolio with unit tests',
    fullMessage: 'feat(core): add pure logic modules for version control and portfolio with unit tests',
    author: 'Lakshya Chourasia',
    email: 'lakshyachourasiaaa@gmail.com',
    date: '2026-11-13 14:16:36',
    tag: 'v1.1.0',
    filesChanged: 5,
    insertions: 415,
  },
  {
    hash: '12e09b43ec310ea5ee39c60a0cc46a4fc9d4f422',
    shortHash: '12e09b4',
    type: 'feat',
    scope: 'setup',
    message: 'initialize project and configure ESLint standard linter',
    fullMessage: 'feat(setup): initialize project and configure ESLint standard linter',
    author: 'Lakshya Chourasia',
    email: 'lakshyachourasiaaa@gmail.com',
    date: '2026-11-13 14:14:44',
    tag: 'v1.0.0',
    filesChanged: 12,
    insertions: 4717,
  },
];

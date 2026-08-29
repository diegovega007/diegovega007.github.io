import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Diego Vega Reyes — Backend Software Engineer | Python, REST APIs, Applied AI',
    description:
      'Backend Software Engineer with 5+ years of experience in Python (Flask, Django, FastAPI), PostgreSQL, REST APIs, distributed async processing with Celery and Redis, mission-critical integrations and applied AI with LLMs.',
  },

  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Stack',
    work: 'Cases',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    sections: 'Site sections',
    menu: 'Open menu',
    close: 'Close menu',
  },

  actions: {
    downloadCv: 'Download CV',
    viewWork: 'View work',
    contactMe: 'Get in touch',
    toggleTheme: 'Toggle theme',
    toggleLang: 'Switch language',
    backToTop: 'Back to top',
    copy: 'Copy',
    copied: 'Copied!',
  },

  hero: {
    available: 'Open to remote and hybrid roles',
    role: 'Backend Software Engineer',
    tagline: ['Python', 'REST APIs', 'Integrations', 'Applied AI'],
    intro:
      'I design and scale Python backend services on PostgreSQL: documented REST APIs, distributed async processing, and mission-critical third-party integrations that keep production operations running.',
    scrollHint: 'Scroll to explore',
    yearsBadge: '5+ years shipping backend to production',
    photoAlt: 'Portrait of Diego Vega Reyes',
  },

  metrics: {
    heading: 'Key numbers',
    items: [
      {
        value: '5',
        suffix: '+',
        label: 'Years of experience',
        caption: 'Designing and scaling backend services in production.',
      },
      {
        value: '70',
        suffix: '%',
        prefix: '~',
        label: 'Faster queries',
        caption: 'On GPS route lookups, via PostgreSQL indexing and Redis caching.',
      },
      {
        value: '10',
        suffix: '+',
        label: 'Critical integrations',
        caption: 'Twilio, WhatsApp Business, Meta, Stripe, Google Maps, Traccar, Firebase.',
      },
      {
        value: '3',
        label: 'LLM providers',
        caption: 'OpenAI GPT-4, Google Gemini and Anthropic Claude shipped to product.',
      },
    ],
  },

  about: {
    kicker: 'About',
    heading: 'Solid backend, product-minded judgement',
    paragraphs: [
      "I'm a Computer Engineer from Instituto Politécnico Nacional with over 5 years of experience designing and scaling backend services in Python (Flask, Django, FastAPI) on PostgreSQL.",
      'I specialise in REST APIs, distributed async processing with Celery and Redis, database performance tuning, and integrating mission-critical third-party services. I also ship LLM-powered features for conversational assistants and automation.',
      'I work as a full stack engineer when a project calls for it, delivering the client layer in Vue 3, React or React Native, from architecture through deployment.',
    ],
    highlights: [
      {
        title: 'Technical ownership',
        body: 'Own the backend of an enterprise fleet management and geolocation platform, consumed by both web and mobile apps.',
      },
      {
        title: 'Measurable performance',
        body: 'I optimise with evidence: indexing, query plans and caching. Cut GPS route query time by up to ~70%.',
      },
      {
        title: 'Mission-critical integrations',
        body: 'Messaging, payments, geolocation and maps: Twilio, WhatsApp Business API, Meta Business API, Stripe, Google Maps and Traccar.',
      },
      {
        title: 'AI applied to product',
        body: 'Conversational assistants on GPT-4, Gemini and Claude, using prompt engineering and function calling to automate support.',
      },
    ],
  },

  experience: {
    kicker: 'Career',
    heading: 'Professional experience',
    currentLabel: 'Current',
    stackLabel: 'Tech stack',
  },

  jobs: [
    {
      id: 'sigsa',
      role: 'Backend Developer',
      company: 'SIGSA',
      period: 'May 2021 – Present',
      location: 'Puebla, Mexico',
      scope:
        'Technical ownership of the backend for an enterprise fleet management and geolocation platform.',
      bullets: [
        'Designed and implemented the Flask + PostgreSQL backend architecture for production enterprise applications, consumed by web and mobile clients.',
        'Cut GPS route query time by up to ~70% with PostgreSQL indexing and a Redis caching layer, reducing sustained database load.',
        'Built the async pipeline for notifications, reports and process automation with Celery + Redis.',
        'Developed and documented REST APIs with Swagger/OpenAPI, removing manual support for frontend and mobile teams during integrations.',
        'Integrated Twilio (messaging) and Traccar (geolocation), enabling real-time fleet tracking and automatic end-customer alerts.',
        'Automated the generation of enterprise reports that were previously produced by hand.',
      ],
      stack: [
        'Python',
        'Flask',
        'PostgreSQL',
        'Redis',
        'Celery',
        'Swagger/OpenAPI',
        'Twilio',
        'Traccar',
        'Docker',
      ],
      current: true,
    },
    {
      id: 'freelance',
      role: 'Full Stack Developer',
      company: 'Freelance / Independent contractor',
      period: 'June 2024 – October 2025',
      location: 'Puebla, Mexico (remote)',
      scope:
        'End-to-end delivery of web and mobile applications for multiple clients, from requirements gathering through deployment. Contract projects run alongside SIGSA, outside working hours.',
      bullets: [
        'Shipped full stack applications to production with Django, Vue 3 and React Native, from architecture to deployment.',
        'Implemented conversational assistants with OpenAI GPT-4, Google Gemini and Anthropic Claude for support and automation without human intervention.',
        'Built messaging platforms on WhatsApp Business API and Meta Business API, centralising customer support in a single inbox.',
        'Designed serverless architectures with Firebase (Auth, Firestore, Cloud Functions, Storage), removing server administration entirely.',
        'Established the end-to-end Cypress test suite over critical flows, preventing regressions on every deployment.',
        'Automated data extraction with Apify, Selenium and BeautifulSoup, replacing manual data entry.',
      ],
      stack: [
        'Django',
        'Vue 3',
        'React Native',
        'OpenAI GPT-4',
        'Gemini',
        'Claude',
        'WhatsApp Business API',
        'Firebase',
        'Cypress',
      ],
      current: false,
    },
  ],

  skills: {
    kicker: 'Tech stack',
    heading: 'Tools I work with',
    hint: 'Pick a category to explore it',
    categories: [
      {
        id: 'languages',
        label: 'Languages',
        blurb: 'Day-to-day foundation, with Python as the specialty.',
        items: ['Python (advanced)', 'SQL', 'JavaScript (ES6+)'],
      },
      {
        id: 'backend',
        label: 'Backend & APIs',
        blurb: 'Services and API contracts built to last.',
        items: [
          'Flask',
          'Django',
          'Django REST Framework',
          'FastAPI',
          'REST APIs',
          'Swagger/OpenAPI',
          'Celery',
          'Microservice architecture',
          'Clean Code',
          'SOLID',
        ],
      },
      {
        id: 'databases',
        label: 'Databases',
        blurb: 'Modelling, queries and measurable performance.',
        items: [
          'PostgreSQL',
          'MySQL',
          'Redis',
          'Firestore',
          'Firebase Realtime Database',
          'Query optimisation',
          'Indexing',
        ],
      },
      {
        id: 'frontend',
        label: 'Frontend',
        blurb: 'Client layer when the project is end-to-end.',
        items: ['Vue.js 3', 'React', 'React Native', 'HTML5', 'CSS3'],
      },
      {
        id: 'ai',
        label: 'Applied AI',
        blurb: 'LLMs integrated into product, not demos.',
        items: [
          'OpenAI GPT-4',
          'Google Gemini',
          'Anthropic Claude',
          'Prompt engineering',
          'Chatbots',
          'Function calling',
        ],
      },
      {
        id: 'cloud',
        label: 'Cloud & Integrations',
        blurb: 'Mission-critical third-party services.',
        items: [
          'Google Cloud Platform',
          'Firebase (Auth, Firestore, Functions, Storage)',
          'Twilio',
          'WhatsApp Business API',
          'Meta Business API',
          'Stripe',
          'Google Maps API',
          'Traccar',
        ],
      },
      {
        id: 'devops',
        label: 'Testing & DevOps',
        blurb: 'Repeatable releases and protected flows.',
        items: [
          'Git',
          'GitHub',
          'GitLab',
          'Docker',
          'Linux/Unix',
          'Nginx',
          'Cypress',
          'Selenium',
          'Apify',
          'BeautifulSoup',
        ],
      },
      {
        id: 'data',
        label: 'Data',
        blurb: 'Processing and analysis for reporting.',
        items: ['Pandas', 'NumPy'],
      },
      {
        id: 'ways',
        label: 'Ways of working',
        blurb: 'How I operate in a team.',
        items: ['Scrum', 'Agile', 'Code review', 'Version control with Git Flow'],
      },
    ],
  },

  work: {
    kicker: 'Impact cases',
    heading: 'What I have built in production',
    note: 'Case studies drawn from real production work, described without confidential client information.',
    challengeLabel: 'Challenge',
    approachLabel: 'Approach',
    impactLabel: 'Impact',
    expand: 'View details',
    collapse: 'Hide details',
  },

  cases: [
    {
      id: 'fleet',
      domain: 'Enterprise platform',
      title: 'Fleet management & geolocation',
      context: 'SIGSA · Production · Web and mobile',
      challenge:
        'Historical GPS route queries were slow and put heavy pressure on the database, degrading the experience across the whole platform.',
      approach:
        'I designed the Flask + PostgreSQL backend architecture, applied targeted indexing to the expensive queries and added a Redis caching layer. Integrated Traccar for geolocation and Twilio for alerts.',
      impact: [
        'Up to ~70% reduction in GPS route query time.',
        'Lower sustained load on the database.',
        'Real-time fleet tracking and automatic end-customer alerts.',
      ],
      stack: ['Flask', 'PostgreSQL', 'Redis', 'Traccar', 'Twilio', 'Docker', 'Nginx'],
    },
    {
      id: 'async',
      domain: 'Infrastructure',
      title: 'Async notification & reporting pipeline',
      context: 'SIGSA · Distributed processing',
      challenge:
        'Heavy work — notifications and enterprise reports — was either done by hand or blocked the request cycle, capping how far it could scale.',
      approach:
        'I built an async pipeline with Celery + Redis to decouple processing from the request cycle and automate recurring report generation.',
      impact: [
        'Enterprise reports that were manual are now generated automatically.',
        'Notifications and processes moved out of the request cycle.',
        'A foundation for scaling scheduled work without touching the API.',
      ],
      stack: ['Celery', 'Redis', 'Python', 'PostgreSQL'],
    },
    {
      id: 'llm',
      domain: 'Applied AI',
      title: 'LLM-powered conversational assistants',
      context: 'Freelance · Multiple clients',
      challenge:
        'Customer support depended entirely on human intervention for repetitive, high-volume tasks.',
      approach:
        'I implemented conversational assistants on OpenAI GPT-4, Google Gemini and Anthropic Claude, using prompt engineering and function calling to connect the model to real system operations.',
      impact: [
        'Support and automation with no human intervention across the covered flows.',
        'One assistant design evaluated against three LLM providers.',
        'Automation wired directly into product data and actions.',
      ],
      stack: ['OpenAI GPT-4', 'Google Gemini', 'Anthropic Claude', 'Function calling', 'Python'],
    },
    {
      id: 'omnichannel',
      domain: 'Messaging',
      title: 'Omnichannel messaging platform',
      context: 'Freelance · WhatsApp Business API',
      challenge:
        'Customer communication was scattered across channels with no single place to follow up.',
      approach:
        'I built messaging platforms on WhatsApp Business API and Meta Business API, centralising conversations into a single support inbox.',
      impact: [
        'Customer support centralised in one inbox.',
        'Conversations from multiple channels unified.',
        'A base ready for automation with conversational assistants.',
      ],
      stack: ['WhatsApp Business API', 'Meta Business API', 'Django', 'PostgreSQL'],
    },
    {
      id: 'serverless',
      domain: 'Architecture',
      title: 'Serverless applications with Firebase',
      context: 'Freelance · Web and mobile',
      challenge:
        'Projects that needed to reach production fast, with no budget or team to administer servers.',
      approach:
        'I designed serverless architectures with Firebase (Auth, Firestore, Cloud Functions, Storage) and delivered the clients in Vue 3 and React Native.',
      impact: [
        'Server administration removed entirely.',
        'Full stack applications shipped to production, architecture through deployment.',
        'Auth, real-time data and file storage on a single platform.',
      ],
      stack: ['Firebase Auth', 'Firestore', 'Cloud Functions', 'Storage', 'Vue 3', 'React Native'],
    },
    {
      id: 'quality',
      domain: 'Quality & automation',
      title: 'Data automation & end-to-end testing',
      context: 'Freelance · Critical flows',
      challenge:
        'Manual data entry, and deployments with no safety net over the flows the business runs on.',
      approach:
        'I automated data extraction with Apify, Selenium and BeautifulSoup, and established an end-to-end Cypress test suite over the critical flows.',
      impact: [
        'Manual data entry replaced by automated extraction.',
        'Regressions prevented on every deployment.',
        'Critical flows covered by repeatable tests.',
      ],
      stack: ['Cypress', 'Selenium', 'Apify', 'BeautifulSoup', 'Pandas'],
    },
  ],

  projects: {
    kicker: 'Own projects',
    heading: 'Code you can review',
    note: 'Personal and contract projects, with public repositories where applicable.',
    featuredBadge: 'Featured',
    privateRepo: 'Private repository (client project)',
    linkLabels: {
      frontend: 'View frontend',
      backend: 'View backend',
      repo: 'View repository',
    },
    items: [
      {
        id: 'ona-nails',
        title: 'Ona Nails — booking & admin',
        description:
          'Website for a nail salon: presents the business and lets clients book appointments. Includes an admin module to manage bookings, services and day-to-day operations. React client; API and business logic in Python (FastAPI).',
        highlights: [
          'Landing page with business information and services.',
          'Appointment booking flow designed around the client experience.',
          'Admin panel: bookings, services and internal operations.',
        ],
      },
      {
        id: 'personal-researcher',
        title: 'Personal Researcher',
        description:
          'Personal project for going deeper on AI agents: a frontend and backend ecosystem that orchestrates LLM-assisted research.',
      },
      {
        id: 'task-management',
        title: 'Task Management',
        description: 'Full stack task manager, with separately deployable frontend and backend.',
      },
      {
        id: 'security-permission',
        title: 'Permissions & security',
        description:
          'Reusable utilities for permission handling and access control in Flask services.',
      },
      {
        id: 'kong-docker',
        title: 'Kong on Docker',
        description:
          'Orchestration reference for the Kong API gateway in a containerised, reproducible environment.',
      },
      {
        id: 'test-sockets',
        title: 'Socket communication',
        description: 'Experiments in real-time bidirectional communication over sockets on Flask.',
      },
      {
        id: 'zip-download',
        title: 'ZIP-packaged downloads',
        description:
          'Utility to generate and serve ZIP-packaged downloads from a Flask service.',
      },
    ],
  },

  education: {
    kicker: 'Education',
    heading: 'Education & languages',
    degree: 'B.Eng. in Computer Engineering',
    school: 'Instituto Politécnico Nacional, ESIME Culhuacán',
    place: 'Mexico City',
    period: 'August 2016 – July 2020',
    licenseLabel: 'Professional licence',
    license: '13811203',
    secondaryDegree: 'Technical Professional Education',
    secondarySchool: 'CBTIs 134',
    secondaryPlace: 'Puebla, Mexico',
    secondaryPeriod: 'Sep 2013 – Jun 2016',
    extrasHeading: 'Additional training',
    extras: [
      'ROC&C 2020 Congress, 29th International Meeting — IEEE Mexico Section, November 2020.',
      'Presented the project "Mood Gesture Recogniser for a Classroom" — Proyectos Tecnológicos 2019, ESIME Culhuacán, November 2019.',
      'English course, level A2 — Centro de Idiomas Volkswagen Zavaleta, Puebla.',
    ],
    softHeading: 'Interpersonal skills',
    soft: [
      'Teamwork',
      'Effective communication',
      'Accountability',
      'Technical leadership',
      'Continuous learning',
    ],
    languagesHeading: 'Languages',
    languages: [
      {
        name: 'Spanish',
        level: 'Native',
        note: 'Mother tongue.',
        progress: 100,
      },
      {
        name: 'English',
        level: 'Intermediate (B1)',
        note: 'Reading technical documentation and written professional communication.',
        progress: 60,
      },
    ],
  },

  contact: {
    kicker: 'Contact',
    heading: "Let's talk about your next project",
    blurb:
      "I'm open to backend and full stack opportunities, remote or hybrid. Send me a message and I'll get back to you.",
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    locationValue: 'Puebla, Pue., Mexico',
    availabilityLabel: 'Work setup',
    availabilityValue: 'Remote and hybrid',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      subject: 'Subject',
      subjectPlaceholder: 'Backend opportunity at...',
      message: 'Message',
      messagePlaceholder: 'Tell me briefly about the role or the project...',
      submit: 'Send message',
      hint: 'Submitting opens your email client with the message already drafted.',
      required: 'This field is required',
      invalidEmail: 'Enter a valid email address',
      opening: 'Opening your email client...',
    },
  },

  footer: {
    tagline: 'Backend Software Engineer · Python · REST APIs · Applied AI',
    builtWith: 'Built with React, Tailwind CSS and Motion.',
    rights: 'All rights reserved.',
  },
}

import type { Dictionary } from './types'

export const es: Dictionary = {
  meta: {
    title: 'Diego Vega Reyes — Ingeniero de Software Backend | Python, APIs REST, IA Aplicada',
    description:
      'Ingeniero de Software Backend con más de 5 años de experiencia en Python (Flask, Django, FastAPI), PostgreSQL, APIs REST, procesamiento asíncrono con Celery y Redis, integraciones de misión crítica e IA aplicada con LLMs.',
  },

  nav: {
    about: 'Perfil',
    experience: 'Experiencia',
    skills: 'Stack',
    work: 'Proyectos',
    education: 'Formación',
    contact: 'Contacto',
    sections: 'Secciones del sitio',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
  },

  actions: {
    downloadCv: 'Descargar CV',
    viewWork: 'Ver proyectos',
    contactMe: 'Contactar',
    toggleTheme: 'Cambiar tema',
    toggleLang: 'Cambiar idioma',
    backToTop: 'Volver arriba',
    copy: 'Copiar',
    copied: '¡Copiado!',
  },

  hero: {
    available: 'Disponible para remoto e híbrido',
    role: 'Ingeniero de Software Backend',
    tagline: ['Python', 'APIs REST', 'Integraciones', 'IA Aplicada'],
    intro:
      'Diseño y escalo servicios backend en Python sobre PostgreSQL: APIs REST documentadas, procesamiento asíncrono distribuido e integraciones de terceros de misión crítica que sostienen operaciones en producción.',
    scrollHint: 'Desplázate para explorar',
    yearsBadge: '5+ años construyendo backend en producción',
  },

  metrics: {
    heading: 'Indicadores',
    items: [
      {
        value: '5',
        suffix: '+',
        label: 'Años de experiencia',
        caption: 'Diseñando y escalando servicios backend en producción.',
      },
      {
        value: '70',
        suffix: '%',
        prefix: '~',
        label: 'Menos tiempo de consulta',
        caption: 'En recorridos GPS, con indexación en PostgreSQL y caché en Redis.',
      },
      {
        value: '10',
        suffix: '+',
        label: 'Integraciones críticas',
        caption: 'Twilio, WhatsApp Business, Meta, Stripe, Google Maps, Traccar, Firebase.',
      },
      {
        value: '3',
        label: 'Proveedores de LLM',
        caption: 'OpenAI GPT-4, Google Gemini y Anthropic Claude llevados a producto.',
      },
    ],
  },

  about: {
    kicker: 'Perfil',
    heading: 'Backend sólido, con criterio de producto',
    paragraphs: [
      'Soy Ingeniero en Computación por el Instituto Politécnico Nacional con más de 5 años de experiencia diseñando y escalando servicios backend en Python (Flask, Django, FastAPI) sobre PostgreSQL.',
      'Me especializo en APIs REST, procesamiento asíncrono distribuido con Celery y Redis, optimización de rendimiento de bases de datos e integración de servicios de terceros de misión crítica. Además implemento funcionalidades con LLMs para asistentes conversacionales y automatización.',
      'Trabajo con perfil full stack: cuando el proyecto lo pide, entrego también la capa cliente en Vue 3, React o React Native, de la arquitectura al despliegue.',
    ],
    highlights: [
      {
        title: 'Ownership técnico',
        body: 'Responsable del backend de una plataforma empresarial de gestión y geolocalización de flotas, consumida por aplicaciones web y móviles.',
      },
      {
        title: 'Rendimiento medible',
        body: 'Optimizo con datos: indexación, planes de consulta y caché. Reduje hasta ~70% el tiempo de consulta de recorridos GPS.',
      },
      {
        title: 'Integraciones de misión crítica',
        body: 'Mensajería, pagos, geolocalización y mapas: Twilio, WhatsApp Business API, Meta Business API, Stripe, Google Maps y Traccar.',
      },
      {
        title: 'IA aplicada al producto',
        body: 'Asistentes conversacionales con GPT-4, Gemini y Claude, con ingeniería de prompts y function calling para automatizar la atención.',
      },
    ],
  },

  experience: {
    kicker: 'Trayectoria',
    heading: 'Experiencia profesional',
    currentLabel: 'Actual',
    stackLabel: 'Tecnologías',
  },

  jobs: [
    {
      id: 'sigsa',
      role: 'Desarrollador Backend',
      company: 'SIGSA',
      period: 'Mayo 2021 – Presente',
      location: 'Puebla, México',
      scope:
        'Ownership técnico del backend de la plataforma empresarial de gestión y geolocalización de flotas.',
      bullets: [
        'Diseñé e implementé la arquitectura backend en Flask + PostgreSQL para aplicaciones empresariales en producción, consumida por aplicaciones web y móviles.',
        'Reduje hasta ~70% el tiempo de consulta de recorridos GPS con índices en PostgreSQL e implementé caché en Redis, disminuyendo la carga sobre la base de datos.',
        'Construí el pipeline asíncrono de notificaciones, reportes y automatización de procesos con Celery + Redis.',
        'Desarrollé y documenté APIs REST con Swagger/OpenAPI, eliminando el soporte manual a los equipos frontend y móvil durante las integraciones.',
        'Integré Twilio (mensajería) y Traccar (geolocalización), habilitando el rastreo de flota en tiempo real y las alertas automáticas al cliente final.',
        'Automaticé la generación de reportes empresariales antes elaborados a mano.',
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
      role: 'Desarrollador Full Stack',
      company: 'Freelance / Contratista independiente',
      period: 'Junio 2024 – Octubre 2025',
      location: 'Puebla, México (remoto)',
      scope:
        'Entrega end-to-end de aplicaciones web y móviles para múltiples clientes, desde el levantamiento de requerimientos hasta el despliegue. Proyectos por contrato ejecutados en paralelo a SIGSA, fuera del horario laboral.',
      bullets: [
        'Entregué aplicaciones full stack a producción con Django, Vue 3 y React Native, de la arquitectura al despliegue.',
        'Implementé asistentes conversacionales con OpenAI GPT-4, Google Gemini y Anthropic Claude para atención y automatización sin intervención humana.',
        'Construí plataformas de mensajería sobre WhatsApp Business API y Meta Business API, centralizando la atención al cliente en una sola bandeja.',
        'Diseñé arquitecturas serverless con Firebase (Auth, Firestore, Cloud Functions, Storage), eliminando la administración de servidores.',
        'Establecí la suite de pruebas end-to-end con Cypress sobre los flujos críticos, previniendo regresiones en cada despliegue.',
        'Automaticé la extracción de datos con Apify, Selenium y BeautifulSoup, sustituyendo capturas manuales.',
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
    kicker: 'Stack técnico',
    heading: 'Herramientas con las que trabajo',
    hint: 'Selecciona una categoría para explorarla',
    categories: [
      {
        id: 'languages',
        label: 'Lenguajes',
        blurb: 'Base del día a día, con Python como especialidad.',
        items: ['Python (avanzado)', 'SQL', 'JavaScript (ES6+)'],
      },
      {
        id: 'backend',
        label: 'Backend & APIs',
        blurb: 'Servicios y contratos de API pensados para durar.',
        items: [
          'Flask',
          'Django',
          'Django REST Framework',
          'FastAPI',
          'APIs REST',
          'Swagger/OpenAPI',
          'Celery',
          'Arquitectura de microservicios',
          'Clean Code',
          'SOLID',
        ],
      },
      {
        id: 'databases',
        label: 'Bases de datos',
        blurb: 'Modelado, consultas y rendimiento medible.',
        items: [
          'PostgreSQL',
          'MySQL',
          'Redis',
          'Firestore',
          'Firebase Realtime Database',
          'Optimización de consultas',
          'Indexación',
        ],
      },
      {
        id: 'frontend',
        label: 'Frontend',
        blurb: 'Capa cliente cuando el proyecto es end-to-end.',
        items: ['Vue.js 3', 'React', 'React Native', 'HTML5', 'CSS3'],
      },
      {
        id: 'ai',
        label: 'IA aplicada',
        blurb: 'LLMs integrados en producto, no en demos.',
        items: [
          'OpenAI GPT-4',
          'Google Gemini',
          'Anthropic Claude',
          'Ingeniería de prompts',
          'Chatbots',
          'Function calling',
        ],
      },
      {
        id: 'cloud',
        label: 'Cloud & Integraciones',
        blurb: 'Servicios de terceros de misión crítica.',
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
        blurb: 'Entregas repetibles y flujos protegidos.',
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
        label: 'Datos',
        blurb: 'Procesamiento y análisis para reportes.',
        items: ['Pandas', 'NumPy'],
      },
      {
        id: 'ways',
        label: 'Metodologías',
        blurb: 'Cómo trabajo en equipo.',
        items: ['Scrum', 'Agile', 'Code review', 'Control de versiones con Git Flow'],
      },
    ],
  },

  work: {
    kicker: 'Proyectos',
    heading: 'Lo que he construido',
    note: 'Casos derivados de trabajo real en producción, descritos sin información confidencial de clientes.',
    challengeLabel: 'Reto',
    approachLabel: 'Solución',
    impactLabel: 'Impacto',
    expand: 'Ver detalle',
    collapse: 'Ocultar detalle',
  },

  cases: [
    {
      id: 'fleet',
      domain: 'Plataforma empresarial',
      title: 'Gestión y geolocalización de flotas',
      context: 'SIGSA · Producción · Web y móvil',
      challenge:
        'Las consultas de recorridos GPS históricos eran lentas y presionaban la base de datos, degradando la experiencia de toda la plataforma.',
      approach:
        'Diseñé la arquitectura backend en Flask + PostgreSQL, apliqué indexación dirigida sobre las consultas costosas y añadí una capa de caché en Redis. Integré Traccar para geolocalización y Twilio para alertas.',
      impact: [
        'Hasta ~70% menos tiempo de consulta de recorridos GPS.',
        'Menor carga sostenida sobre la base de datos.',
        'Rastreo de flota en tiempo real y alertas automáticas al cliente final.',
      ],
      stack: ['Flask', 'PostgreSQL', 'Redis', 'Traccar', 'Twilio', 'Docker', 'Nginx'],
    },
    {
      id: 'async',
      domain: 'Infraestructura',
      title: 'Pipeline asíncrono de notificaciones y reportes',
      context: 'SIGSA · Procesamiento distribuido',
      challenge:
        'El trabajo pesado (notificaciones y reportes empresariales) se elaboraba a mano o bloqueaba el ciclo de request, limitando la escala.',
      approach:
        'Construí un pipeline asíncrono con Celery + Redis para desacoplar el procesamiento del ciclo de request y automatizar la generación periódica de reportes.',
      impact: [
        'Reportes empresariales antes manuales, ahora automatizados.',
        'Notificaciones y procesos ejecutados fuera del ciclo de request.',
        'Base para escalar tareas programadas sin tocar la API.',
      ],
      stack: ['Celery', 'Redis', 'Python', 'PostgreSQL'],
    },
    {
      id: 'llm',
      domain: 'IA aplicada',
      title: 'Asistentes conversacionales con LLMs',
      context: 'Freelance · Múltiples clientes',
      challenge:
        'La atención al cliente dependía por completo de intervención humana en tareas repetitivas y de alto volumen.',
      approach:
        'Implementé asistentes conversacionales sobre OpenAI GPT-4, Google Gemini y Anthropic Claude, con ingeniería de prompts y function calling para conectar el modelo a operaciones reales del sistema.',
      impact: [
        'Atención y automatización sin intervención humana en los flujos cubiertos.',
        'Un mismo diseño de asistente evaluado sobre tres proveedores de LLM.',
        'Automatización conectada a datos y acciones del producto.',
      ],
      stack: ['OpenAI GPT-4', 'Google Gemini', 'Anthropic Claude', 'Function calling', 'Python'],
    },
    {
      id: 'omnichannel',
      domain: 'Mensajería',
      title: 'Plataforma de mensajería omnicanal',
      context: 'Freelance · WhatsApp Business API',
      challenge:
        'La comunicación con clientes estaba dispersa entre canales, sin un lugar único para dar seguimiento.',
      approach:
        'Construí plataformas de mensajería sobre WhatsApp Business API y Meta Business API, centralizando las conversaciones en una sola bandeja de atención.',
      impact: [
        'Atención al cliente centralizada en una sola bandeja.',
        'Conversaciones de múltiples canales unificadas.',
        'Base lista para automatización con asistentes conversacionales.',
      ],
      stack: ['WhatsApp Business API', 'Meta Business API', 'Django', 'PostgreSQL'],
    },
    {
      id: 'serverless',
      domain: 'Arquitectura',
      title: 'Aplicaciones serverless con Firebase',
      context: 'Freelance · Web y móvil',
      challenge:
        'Proyectos que necesitaban salir rápido a producción sin presupuesto ni equipo para administrar servidores.',
      approach:
        'Diseñé arquitecturas serverless con Firebase (Auth, Firestore, Cloud Functions, Storage) y entregué los clientes en Vue 3 y React Native.',
      impact: [
        'Se eliminó por completo la administración de servidores.',
        'Aplicaciones full stack entregadas a producción de la arquitectura al despliegue.',
        'Autenticación, datos en tiempo real y archivos sobre una sola plataforma.',
      ],
      stack: ['Firebase Auth', 'Firestore', 'Cloud Functions', 'Storage', 'Vue 3', 'React Native'],
    },
    {
      id: 'quality',
      domain: 'Calidad & automatización',
      title: 'Automatización de datos y pruebas end-to-end',
      context: 'Freelance · Flujos críticos',
      challenge:
        'Capturas de datos manuales y despliegues sin red de seguridad sobre los flujos que sostienen el negocio.',
      approach:
        'Automaticé la extracción de datos con Apify, Selenium y BeautifulSoup, y establecí una suite de pruebas end-to-end con Cypress sobre los flujos críticos.',
      impact: [
        'Capturas manuales sustituidas por extracción automatizada.',
        'Regresiones prevenidas en cada despliegue.',
        'Flujos críticos cubiertos por pruebas repetibles.',
      ],
      stack: ['Cypress', 'Selenium', 'Apify', 'BeautifulSoup', 'Pandas'],
    },
  ],

  education: {
    kicker: 'Formación',
    heading: 'Educación e idiomas',
    degree: 'Ingeniería en Computación',
    school: 'Instituto Politécnico Nacional, ESIME Culhuacán',
    place: 'Ciudad de México',
    period: 'Agosto 2016 – Julio 2020',
    licenseLabel: 'Cédula Profesional',
    license: '13811203',
    languagesHeading: 'Idiomas',
    languages: [
      {
        name: 'Español',
        level: 'Nativo',
        note: 'Idioma materno.',
        progress: 100,
      },
      {
        name: 'Inglés',
        level: 'Intermedio (B1)',
        note: 'Lectura de documentación técnica y comunicación profesional escrita.',
        progress: 60,
      },
    ],
  },

  contact: {
    kicker: 'Contacto',
    heading: 'Hablemos de tu próximo proyecto',
    blurb:
      'Estoy abierto a oportunidades backend y full stack, remotas o híbridas. Escríbeme y te respondo con gusto.',
    emailLabel: 'Correo',
    phoneLabel: 'Teléfono',
    locationLabel: 'Ubicación',
    locationValue: 'Puebla, Pue., México',
    availabilityLabel: 'Modalidad',
    availabilityValue: 'Remoto e híbrido',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo',
      emailPlaceholder: 'tu@empresa.com',
      subject: 'Asunto',
      subjectPlaceholder: 'Oportunidad backend en...',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame brevemente sobre el rol o el proyecto...',
      submit: 'Enviar mensaje',
      hint: 'Al enviar se abre tu cliente de correo con el mensaje ya redactado.',
      required: 'Este campo es obligatorio',
      invalidEmail: 'Escribe un correo válido',
      opening: 'Abriendo tu cliente de correo...',
    },
  },

  footer: {
    tagline: 'Ingeniero de Software Backend · Python · APIs REST · IA Aplicada',
    builtWith: 'Construido con React, Tailwind CSS y Motion.',
    rights: 'Todos los derechos reservados.',
  },
}

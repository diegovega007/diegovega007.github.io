export type Lang = 'es' | 'en'

export interface Metric {
  value: string
  prefix?: string
  suffix?: string
  label: string
  caption: string
}

export interface Highlight {
  title: string
  body: string
}

export interface Job {
  id: string
  role: string
  company: string
  period: string
  location: string
  scope: string
  bullets: string[]
  stack: string[]
  current: boolean
}

export interface SkillCategory {
  id: string
  label: string
  blurb: string
  items: string[]
}

export interface CaseStudy {
  id: string
  domain: string
  title: string
  context: string
  challenge: string
  approach: string
  impact: string[]
  stack: string[]
}

export type RepoLinkKind = 'frontend' | 'backend' | 'repo'

/** Localised copy for a repository. Stack, images and URLs live in `repos.ts`. */
export interface RepoProject {
  id: string
  title: string
  description: string
  highlights?: string[]
}

export interface LanguageSkill {
  name: string
  level: string
  note: string
  progress: number
}

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    experience: string
    skills: string
    work: string
    projects: string
    education: string
    contact: string
    sections: string
    menu: string
    close: string
  }
  actions: {
    downloadCv: string
    viewWork: string
    contactMe: string
    toggleTheme: string
    toggleLang: string
    backToTop: string
    copy: string
    copied: string
  }
  hero: {
    available: string
    role: string
    tagline: string[]
    intro: string
    scrollHint: string
    yearsBadge: string
    photoAlt: string
  }
  metrics: {
    heading: string
    items: Metric[]
  }
  about: {
    kicker: string
    heading: string
    paragraphs: string[]
    highlights: Highlight[]
  }
  experience: {
    kicker: string
    heading: string
    currentLabel: string
    stackLabel: string
  }
  jobs: Job[]
  skills: {
    kicker: string
    heading: string
    hint: string
    categories: SkillCategory[]
  }
  work: {
    kicker: string
    heading: string
    note: string
    challengeLabel: string
    approachLabel: string
    impactLabel: string
    expand: string
    collapse: string
  }
  cases: CaseStudy[]
  projects: {
    kicker: string
    heading: string
    note: string
    featuredBadge: string
    privateRepo: string
    linkLabels: Record<RepoLinkKind, string>
    items: RepoProject[]
  }
  education: {
    kicker: string
    heading: string
    degree: string
    school: string
    place: string
    period: string
    licenseLabel: string
    license: string
    secondaryDegree: string
    secondarySchool: string
    secondaryPlace: string
    secondaryPeriod: string
    extrasHeading: string
    extras: string[]
    softHeading: string
    soft: string[]
    languagesHeading: string
    languages: LanguageSkill[]
  }
  contact: {
    kicker: string
    heading: string
    blurb: string
    emailLabel: string
    phoneLabel: string
    locationLabel: string
    locationValue: string
    availabilityLabel: string
    availabilityValue: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      subject: string
      subjectPlaceholder: string
      message: string
      messagePlaceholder: string
      submit: string
      hint: string
      required: string
      invalidEmail: string
      opening: string
    }
  }
  footer: {
    tagline: string
    builtWith: string
    rights: string
  }
}

import type { RepoLinkKind } from './types'

export interface RepoMeta {
  stack: string[]
  links: Array<{ kind: RepoLinkKind; url: string }>
  featured?: boolean
  images?: string[]
}

/**
 * Language-neutral repository metadata, keyed by the ids used in the localised
 * `projects.items` lists. Keeping URLs here means a link can never drift between
 * the Spanish and English copy.
 */
export const REPOS: Record<string, RepoMeta> = {
  'ona-nails': {
    featured: true,
    stack: ['React', 'Python', 'FastAPI'],
    images: ['/media/ona-nails-1.jpg', '/media/ona-nails-2.jpg'],
    links: [],
  },
  'personal-researcher': {
    featured: true,
    stack: ['Vue 3', 'Python', 'FastAPI'],
    images: ['/media/researcher.jpg'],
    links: [
      { kind: 'frontend', url: 'https://github.com/diegovega007/personal-researcher-frontend' },
      { kind: 'backend', url: 'https://github.com/diegovega007/personal-researcher-backend' },
    ],
  },
  'task-management': {
    stack: ['Vue 3', 'Python', 'Django'],
    links: [
      { kind: 'frontend', url: 'https://github.com/diegovega007/task_management_front' },
      { kind: 'backend', url: 'https://github.com/diegovega007/task_management_back' },
    ],
  },
  'security-permission': {
    stack: ['Python', 'Flask'],
    links: [{ kind: 'repo', url: 'https://github.com/diegovega007/security_permission' }],
  },
  'kong-docker': {
    stack: ['Kong', 'Docker', 'Makefile'],
    links: [{ kind: 'repo', url: 'https://github.com/diegovega007/kong-docker' }],
  },
  'test-sockets': {
    stack: ['Python', 'Flask', 'WebSockets'],
    links: [{ kind: 'repo', url: 'https://github.com/diegovega007/test_sockets' }],
  },
  'zip-download': {
    stack: ['Python', 'Flask'],
    links: [{ kind: 'repo', url: 'https://github.com/diegovega007/zip_download' }],
  },
}

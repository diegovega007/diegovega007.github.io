export const SECTION_IDS = [
  'about',
  'experience',
  'skills',
  'work',
  'projects',
  'education',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

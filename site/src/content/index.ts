import { en } from './en'
import { es } from './es'
import type { Dictionary, Lang } from './types'

export const dictionaries: Record<Lang, Dictionary> = { es, en }

export const LANGS: Lang[] = ['es', 'en']

export { CONTACT } from './contact'
export type { Dictionary, Lang } from './types'

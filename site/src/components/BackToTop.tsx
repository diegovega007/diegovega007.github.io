import { AnimatePresence, motion } from 'motion/react'
import { useI18n } from '../lib/i18n'
import { useScrolled } from '../lib/hooks'
import { ArrowUpIcon } from './icons'
import { EASE_OUT_EXPO } from './primitives'

export function BackToTop() {
  const { t } = useI18n()
  const visible = useScrolled(700)

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          aria-label={t.actions.backToTop}
          title={t.actions.backToTop}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
          className="fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-line bg-surface/90 text-fg-muted shadow-xl backdrop-blur-md transition-colors hover:border-brand-500/60 hover:text-fg sm:right-8 sm:bottom-8"
        >
          <ArrowUpIcon className="size-5" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

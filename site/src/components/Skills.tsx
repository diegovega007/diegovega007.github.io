import { AnimatePresence, motion, stagger } from 'motion/react'
import type { Variants } from 'motion/react'
import { useState } from 'react'
import { cn } from '../lib/cn'
import { useI18n } from '../lib/i18n'
import { Container, EASE_OUT_EXPO, Reveal, Section, SectionHeading } from './primitives'

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT_EXPO, delayChildren: stagger(0.03) },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
}

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT_EXPO } },
}

export function Skills() {
  const { t } = useI18n()
  const [activeId, setActiveId] = useState(t.skills.categories[0].id)

  const active =
    t.skills.categories.find((category) => category.id === activeId) ?? t.skills.categories[0]

  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          kicker={t.skills.kicker}
          heading={t.skills.heading}
          description={t.skills.hint}
        />

        <Reveal className="mt-10" amount={0.1}>
          <div
            role="tablist"
            aria-label={t.skills.heading}
            className="mask-fade-edges -mx-1 flex gap-2 overflow-x-auto px-1 pb-3 sm:mask-none sm:flex-wrap sm:overflow-visible"
          >
            {t.skills.categories.map((category) => {
              const isActive = category.id === active.id
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(category.id)}
                  className={cn(
                    'relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors',
                    isActive ? 'text-white' : 'text-fg-muted hover:text-fg',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 shadow-lg shadow-brand-500/25"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full border border-line bg-surface/60" />
                  )}
                  {category.label}
                </button>
              )
            })}
          </div>

          <div className="mt-6 min-h-[13rem] rounded-2xl border border-line bg-surface/60 p-6 sm:min-h-[11rem] sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                role="tabpanel"
              >
                <p className="font-display text-lg font-semibold tracking-tight">{active.blurb}</p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {active.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={pillVariants}
                      className="rounded-xl border border-line bg-surface-2/80 px-3.5 py-2 font-mono text-[13px] font-medium tracking-tight transition-colors hover:border-brand-500/60 hover:text-brand-600 dark:hover:text-brand-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

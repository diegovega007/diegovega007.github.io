import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from 'motion/react'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import type { CaseStudy, Dictionary } from '../content/types'
import { cn } from '../lib/cn'
import { useI18n } from '../lib/i18n'
import { ChevronDownIcon } from './icons'
import {
  Chip,
  Container,
  EASE_OUT_EXPO,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from './primitives'

function CaseCard({
  study,
  labels,
  index,
}: {
  study: CaseStudy
  labels: Dictionary['work']
  index: number
}) {
  const [open, setOpen] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Cursor-tracking spotlight, drawn above the card background but under the text.
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, color-mix(in oklab, var(--color-brand-500) 14%, transparent), transparent 70%)`

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - bounds.left)
    mouseY.set(event.clientY - bounds.top)
  }

  const panelId = `case-panel-${study.id}`

  return (
    <StaggerItem className="h-full">
      <motion.div
        onMouseMove={onMouseMove}
        className={cn(
          'group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface/70 transition-colors duration-300',
          open ? 'border-brand-500/60' : 'border-line hover:border-brand-500/40',
        )}
      >
        <motion.span
          aria-hidden
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="relative flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] tracking-[0.18em] text-brand-600 uppercase dark:text-brand-300">
              {study.domain}
            </span>
            <span className="font-mono text-xs text-fg-subtle/70">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-balance">
            {study.title}
          </h3>

          <p className="mt-2 font-mono text-xs text-fg-subtle">{study.context}</p>

          <p className="mt-4 text-sm text-pretty text-fg-muted">{study.challenge}</p>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                key="panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                className="overflow-hidden"
              >
                <div className="mt-5 space-y-5 border-t border-line pt-5">
                  <div>
                    <h4 className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">
                      {labels.approachLabel}
                    </h4>
                    <p className="mt-2 text-sm text-pretty text-fg-muted">{study.approach}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">
                      {labels.impactLabel}
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {study.impact.map((line) => (
                        <li key={line} className="flex gap-2.5 text-sm text-fg-muted">
                          <span
                            aria-hidden
                            className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand-500"
                          />
                          <span className="text-pretty">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-5 flex flex-wrap gap-2">
            {study.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
          >
            {open ? labels.collapse : labels.expand}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDownIcon className="size-4" />
            </motion.span>
          </button>
        </div>
      </motion.div>
    </StaggerItem>
  )
}

export function Work() {
  const { t } = useI18n()

  return (
    <Section id="work" className="bg-surface-2/30">
      <Container>
        <SectionHeading
          kicker={t.work.kicker}
          heading={t.work.heading}
          description={t.work.note}
        />

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
          {t.cases.map((study, index) => (
            <CaseCard key={study.id} study={study} labels={t.work} index={index} />
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}

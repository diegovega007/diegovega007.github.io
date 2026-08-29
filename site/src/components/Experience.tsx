import { motion, useScroll, useSpring } from 'motion/react'
import { useRef } from 'react'
import type { Job } from '../content/types'
import { useI18n } from '../lib/i18n'
import { CheckIcon, MapPinIcon } from './icons'
import {
  Chip,
  Container,
  EASE_OUT_EXPO,
  Reveal,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from './primitives'

function JobEntry({
  job,
  currentLabel,
  stackLabel,
}: {
  job: Job
  currentLabel: string
  stackLabel: string
}) {
  return (
    <li className="relative pb-14 pl-10 last:pb-0 sm:pl-14">
      <motion.span
        aria-hidden
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="absolute left-0 top-1.5 grid size-7 -translate-x-[13px] place-items-center rounded-full border-2 border-brand-500 bg-canvas sm:-translate-x-[13px]"
      >
        <span className="size-2 rounded-full bg-brand-500" />
        {job.current && (
          <span className="absolute size-3 rounded-full bg-brand-500/60 animate-pulse-ring" />
        )}
      </motion.span>

      <Reveal amount={0.15}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-xs tracking-wide text-brand-600 dark:text-brand-300">
            {job.period}
          </span>
          {job.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {currentLabel}
            </span>
          )}
        </div>

        <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight sm:text-2xl">
          {job.role}
          <span className="text-fg-subtle"> — </span>
          <span className="text-gradient">{job.company}</span>
        </h3>

        <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-fg-subtle">
          <MapPinIcon className="size-3.5" />
          {job.location}
        </p>

        <p className="mt-4 max-w-2xl text-base text-pretty text-fg-muted">{job.scope}</p>
      </Reveal>

      <Stagger as="ul" className="mt-6 space-y-3" amount={0.1}>
        {job.bullets.map((bullet, index) => (
          <StaggerItem as="li" key={index} className="flex gap-3">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500/12 text-brand-600 dark:text-brand-300">
              <CheckIcon className="size-3" strokeWidth={2.5} />
            </span>
            <span className="max-w-2xl text-sm text-pretty text-fg-muted sm:text-[15px]">
              {bullet}
            </span>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-6" amount={0.2}>
        <p className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">
          {stackLabel}
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {job.stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </Reveal>
    </li>
  )
}

export function Experience() {
  const { t } = useI18n()
  const timelineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 60%'],
  })

  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })

  return (
    <Section id="experience" className="bg-surface-2/30">
      <Container>
        <SectionHeading kicker={t.experience.kicker} heading={t.experience.heading} />

        <div ref={timelineRef} className="relative mt-14">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-0 w-px bg-line sm:left-0"
          >
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full w-px bg-gradient-to-b from-brand-500 to-violet-accent"
            />
          </div>

          <ul>
            {t.jobs.map((job) => (
              <JobEntry
                key={job.id}
                job={job}
                currentLabel={t.experience.currentLabel}
                stackLabel={t.experience.stackLabel}
              />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

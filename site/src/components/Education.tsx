import { motion } from 'motion/react'
import { useI18n } from '../lib/i18n'
import { GlobeIcon, GraduationIcon } from './icons'
import { Container, EASE_OUT_EXPO, Reveal, Section, SectionHeading } from './primitives'

export function Education() {
  const { t } = useI18n()
  const { education } = t

  return (
    <Section id="education">
      <Container>
        <SectionHeading kicker={education.kicker} heading={education.heading} />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/70 p-7">
              <span
                aria-hidden
                className="absolute -top-16 -right-16 size-48 rounded-full bg-brand-500/10 blur-3xl"
              />
              <span className="relative grid size-11 place-items-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                <GraduationIcon className="size-6" />
              </span>

              <h3 className="relative mt-5 font-display text-xl font-bold tracking-tight text-balance">
                {education.degree}
              </h3>
              <p className="relative mt-2 font-medium text-fg-muted">{education.school}</p>

              <dl className="relative mt-6 space-y-2.5 font-mono text-sm text-fg-subtle">
                <div className="flex justify-between gap-4 border-b border-line pb-2.5">
                  <dt>{education.place}</dt>
                  <dd className="text-right text-fg-muted">{education.period}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>{education.licenseLabel}</dt>
                  <dd className="text-right text-brand-600 dark:text-brand-300">
                    {education.license}
                  </dd>
                </div>
              </dl>
            </article>
          </Reveal>

          <Reveal className="h-full" delay={0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface/70 p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-violet-accent/12 text-violet-accent">
                <GlobeIcon className="size-6" />
              </span>

              <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                {education.languagesHeading}
              </h3>

              <ul className="mt-6 space-y-6">
                {education.languages.map((language, index) => (
                  <li key={language.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-semibold">{language.name}</span>
                      <span className="font-mono text-xs text-brand-600 dark:text-brand-300">
                        {language.level}
                      </span>
                    </div>

                    <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-surface-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.progress}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{
                          duration: 1.1,
                          delay: 0.15 + index * 0.15,
                          ease: EASE_OUT_EXPO,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-violet-accent"
                      />
                    </div>

                    <p className="mt-2 text-sm text-fg-muted">{language.note}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

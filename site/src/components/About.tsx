import { useI18n } from '../lib/i18n'
import { BoltIcon, PlugIcon, ServerIcon, SparkIcon } from './icons'
import { Container, Reveal, Section, SectionHeading, Stagger, StaggerItem } from './primitives'

const HIGHLIGHT_ICONS = [ServerIcon, BoltIcon, PlugIcon, SparkIcon]

export function About() {
  const { t } = useI18n()

  return (
    <Section id="about">
      <Container>
        <SectionHeading kicker={t.about.kicker} heading={t.about.heading} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-5">
            {t.about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <p className="text-base text-pretty text-fg-muted sm:text-lg sm:leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {t.about.highlights.map((highlight, index) => {
              const Icon = HIGHLIGHT_ICONS[index] ?? ServerIcon
              return (
                <StaggerItem
                  key={highlight.title}
                  className="group relative rounded-2xl border border-line bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500/20 dark:text-brand-300">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-pretty text-fg-muted">{highlight.body}</p>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </Container>
    </Section>
  )
}

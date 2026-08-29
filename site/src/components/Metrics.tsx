import { useInView } from 'motion/react'
import { useRef } from 'react'
import type { Metric } from '../content/types'
import { useCountUp } from '../lib/hooks'
import { useI18n } from '../lib/i18n'
import { Container, Stagger, StaggerItem } from './primitives'

function MetricCard({ metric, active }: { metric: Metric; active: boolean }) {
  const target = Number(metric.value)
  const count = useCountUp(target, active)

  return (
    <StaggerItem className="group relative overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 transition-colors hover:border-brand-500/50">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-baseline font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {metric.prefix && <span className="text-2xl text-fg-subtle">{metric.prefix}</span>}
        <span className="text-gradient tabular-nums">{count}</span>
        {metric.suffix && <span className="text-gradient text-2xl sm:text-3xl">{metric.suffix}</span>}
      </div>
      <h3 className="mt-3 text-sm font-semibold tracking-tight">{metric.label}</h3>
      <p className="mt-1.5 text-sm text-fg-muted">{metric.caption}</p>
    </StaggerItem>
  )
}

export function Metrics() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="py-16 sm:py-20" ref={ref}>
      <Container>
        <h2 className="sr-only">{t.metrics.heading}</h2>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.metrics.items.map((metric) => (
            <MetricCard key={metric.label} metric={metric} active={inView} />
          ))}
        </Stagger>
      </Container>
    </div>
  )
}

import { motion, stagger } from 'motion/react'
import type { Variants } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.075) } },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  amount = 0.2,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  )
}

/** Parent that releases its `StaggerItem` children one after another. */
export function Stagger({
  children,
  className,
  amount = 0.15,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  amount?: number
  as?: 'div' | 'ul'
}) {
  const Component = as === 'ul' ? motion.ul : motion.div
  return (
    <Component
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </Component>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li'
}) {
  const Component = as === 'li' ? motion.li : motion.div
  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  )
}

export function Section({
  id,
  children,
  className,
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('relative scroll-mt-24 py-20 sm:py-28 lg:py-32', className)}>
      {children}
    </section>
  )
}

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>{children}</div>
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-brand-600 uppercase dark:text-brand-300">
      <span className="h-px w-8 bg-brand-500/60" aria-hidden />
      {children}
    </span>
  )
}

export function SectionHeading({
  kicker,
  heading,
  description,
  align = 'left',
}: {
  kicker: string
  heading: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-base text-pretty text-fg-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}

export function Chip({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line bg-surface-2/70 px-2.5 py-1 font-mono text-[11px] font-medium tracking-tight text-fg-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}

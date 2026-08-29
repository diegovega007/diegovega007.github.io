import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { CONTACT } from '../content'
import { useI18n } from '../lib/i18n'
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from './icons'
import { Container, EASE_OUT_EXPO } from './primitives'

const CODE_LINES: Array<Array<{ text: string; tone?: 'key' | 'str' | 'num' | 'fn' | 'cmt' }>> = [
  [{ text: 'class', tone: 'fn' }, { text: ' BackendEngineer:' }],
  [{ text: '    name', tone: 'key' }, { text: ' = ' }, { text: '"Diego Vega Reyes"', tone: 'str' }],
  [{ text: '    years', tone: 'key' }, { text: ' = ' }, { text: '5', tone: 'num' }],
  [
    { text: '    core', tone: 'key' },
    { text: ' = [' },
    { text: '"python"', tone: 'str' },
    { text: ', ' },
    { text: '"postgres"', tone: 'str' },
    { text: ']' },
  ],
  [
    { text: '    async_stack', tone: 'key' },
    { text: ' = [' },
    { text: '"celery"', tone: 'str' },
    { text: ', ' },
    { text: '"redis"', tone: 'str' },
    { text: ']' },
  ],
  [{ text: '' }],
  [
    { text: '    def', tone: 'fn' },
    { text: ' ship(self) -> ' },
    { text: 'Impact', tone: 'fn' },
    { text: ':' },
  ],
  [{ text: '        # GPS route queries, tuned', tone: 'cmt' }],
  [
    { text: '        return', tone: 'fn' },
    { text: ' Impact(latency=' },
    { text: '-70', tone: 'num' },
    { text: '%)' },
  ],
]

const TONE_CLASS: Record<string, string> = {
  key: 'text-sky-400',
  str: 'text-emerald-400',
  num: 'text-amber-400',
  fn: 'text-violet-400',
  cmt: 'text-slate-500 italic',
}

function CodeCard() {
  const { scrollY } = useScroll()
  const lift = useTransform(scrollY, [0, 600], [0, -40])

  return (
    <motion.div
      style={{ y: lift }}
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: EASE_OUT_EXPO }}
      className="relative"
    >
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-violet-accent/20 blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-line bg-[oklch(0.19_0.015_252)] shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-slate-400">profile.py</span>
        </div>

        <div className="overflow-x-auto p-4 sm:p-5">
          <pre className="font-mono text-[12.5px] leading-relaxed sm:text-[13.5px]">
            <code>
              {CODE_LINES.map((line, lineIndex) => (
                <motion.span
                  key={lineIndex}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.7 + lineIndex * 0.11,
                    duration: 0.35,
                    ease: EASE_OUT_EXPO,
                  }}
                  className="flex"
                >
                  <span className="mr-4 inline-block w-4 shrink-0 text-right text-slate-600 select-none">
                    {lineIndex + 1}
                  </span>
                  <span className="whitespace-pre text-slate-300">
                    {line.map((token, tokenIndex) => (
                      <span
                        key={tokenIndex}
                        className={token.tone ? TONE_CLASS[token.tone] : undefined}
                      >
                        {token.text}
                      </span>
                    ))}
                    {lineIndex === CODE_LINES.length - 1 && (
                      <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-brand-400 animate-blink" />
                    )}
                  </span>
                </motion.span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  )
}

function RotatingSpecialty({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length)
    }, 2400)
    return () => window.clearInterval(id)
  }, [words.length])

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          className="text-gradient font-semibold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  const { t } = useI18n()
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      <motion.div aria-hidden style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0 opacity-40 dark:opacity-25" />
        <div className="absolute -top-32 -left-24 size-[32rem] rounded-full bg-brand-500/20 blur-[110px] animate-float dark:bg-brand-500/25" />
        <div
          className="absolute -right-24 top-1/3 size-[28rem] rounded-full bg-violet-accent/15 blur-[120px] animate-float dark:bg-violet-accent/20"
          style={{ animationDelay: '2.5s' }}
        />
      </motion.div>

      <Container>
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-500/30 bg-brand-500/10 py-1.5 pr-4 pl-2.5 text-sm font-medium text-brand-700 dark:text-brand-200"
            >
              <span className="relative grid size-2.5 place-items-center">
                <span className="absolute size-2.5 rounded-full bg-emerald-500/70 animate-pulse-ring" />
                <span className="size-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.available}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="mt-6 font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.15rem]"
            >
              Diego Vega
              <span className="block text-fg-subtle">Reyes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="mt-5 font-display text-xl font-semibold sm:text-2xl"
            >
              {t.hero.role}
              <span className="mx-2 text-line-strong">·</span>
              <RotatingSpecialty words={t.hero.tagline} />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="mt-5 max-w-xl text-base text-pretty text-fg-muted sm:text-lg"
            >
              {t.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.32, ease: EASE_OUT_EXPO }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.03] active:scale-95"
              >
                {t.actions.viewWork}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={CONTACT.cvPath}
                download={CONTACT.cvFileName}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-5 py-3 text-sm font-semibold transition-colors hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-300"
              >
                <DownloadIcon className="size-4" />
                {t.actions.downloadCv}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-fg-muted underline decoration-line-strong decoration-2 underline-offset-4 transition-colors hover:text-fg hover:decoration-brand-500"
              >
                {t.actions.contactMe}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-fg-muted"
            >
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="size-4 text-brand-500" />
                {t.contact.locationValue}
              </span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-fg"
              >
                <MailIcon className="size-4 text-brand-500" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-fg"
              >
                <GithubIcon className="size-4 text-brand-500" />
                {CONTACT.githubLabel}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 transition-colors hover:text-fg"
              >
                <LinkedinIcon className="size-4 text-brand-500" />
                {CONTACT.linkedinLabel}
              </a>
            </motion.div>
          </div>

          <CodeCard />
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        aria-label={t.hero.scrollHint}
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-2 text-xs font-medium tracking-wide text-fg-subtle transition-colors hover:text-fg sm:flex"
      >
        {t.hero.scrollHint}
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDownIcon className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}

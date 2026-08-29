import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { CONTACT } from '../content'
import { cn } from '../lib/cn'
import { useActiveSection, useBodyScrollLock, useScrolled } from '../lib/hooks'
import { useI18n } from '../lib/i18n'
import { SECTION_IDS } from '../lib/sections'
import { useTheme } from '../lib/theme'
import {
  CloseIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from './icons'
import { EASE_OUT_EXPO } from './primitives'

const SECTIONS = [...SECTION_IDS]

function Monogram() {
  return (
    <a
      href="#top"
      className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap"
      aria-label="Diego Vega Reyes"
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-violet-accent font-display text-sm font-bold text-white shadow-lg shadow-brand-500/20">
        DV
        <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
      </span>
      <span className="hidden font-display text-sm font-semibold tracking-tight sm:block lg:hidden xl:block">
        Diego Vega
        <span className="ml-1 text-fg-subtle">Reyes</span>
      </span>
    </a>
  )
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-lg text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {children}
    </a>
  )
}

export function Nav() {
  const { t, lang, toggleLang } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(SECTIONS)
  const scrolled = useScrolled(32)
  const [open, setOpen] = useState(false)

  useBodyScrollLock(open)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-line bg-canvas/80 backdrop-blur-xl'
            : 'border-b border-transparent',
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-18 sm:px-8">
          <Monogram />

          <nav aria-label={t.nav.sections} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {SECTIONS.map((id) => {
                const isActive = active === id
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'relative block rounded-full px-2.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors xl:px-3 xl:text-sm',
                        isActive ? 'text-fg' : 'text-fg-muted hover:text-fg',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-surface-2 ring-1 ring-line"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      {t.nav[id]}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t.actions.toggleLang}
              title={t.actions.toggleLang}
              className="flex h-9 items-center gap-1 rounded-lg px-2.5 font-mono text-xs font-semibold tracking-wider text-fg-muted uppercase transition-colors hover:bg-surface-2 hover:text-fg"
            >
              <span className={lang === 'es' ? 'text-brand-600 dark:text-brand-300' : ''}>es</span>
              <span className="text-line-strong">/</span>
              <span className={lang === 'en' ? 'text-brand-600 dark:text-brand-300' : ''}>en</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.actions.toggleTheme}
              title={t.actions.toggleTheme}
              className="grid size-9 place-items-center rounded-lg text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
                  transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                  className="grid place-items-center"
                >
                  {theme === 'dark' ? (
                    <SunIcon className="size-[18px]" />
                  ) : (
                    <MoonIcon className="size-[18px]" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <span
              className="mx-1 hidden h-5 w-px bg-line sm:block lg:hidden xl:block"
              aria-hidden
            />

            <div className="hidden sm:flex lg:hidden xl:flex">
              <IconLink href={CONTACT.github} label="GitHub">
                <GithubIcon className="size-[17px]" />
              </IconLink>
              <IconLink href={CONTACT.linkedin} label="LinkedIn">
                <LinkedinIcon className="size-[17px]" />
              </IconLink>
            </div>

            <a
              href={CONTACT.cvPath}
              download={CONTACT.cvFileName}
              className="ml-1 hidden items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-semibold whitespace-nowrap text-canvas transition-transform hover:scale-[1.03] active:scale-95 md:inline-flex"
            >
              <DownloadIcon className="size-4" />
              {t.actions.downloadCv}
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.nav.menu}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-lg text-fg transition-colors hover:bg-surface-2 lg:hidden"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label={t.nav.close}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-canvas/70 backdrop-blur-md"
            />

            <motion.nav
              aria-label={t.nav.sections}
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              className="absolute inset-x-3 top-3 overflow-hidden rounded-3xl border border-line bg-surface p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Monogram />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t.nav.close}
                  className="grid size-9 place-items-center rounded-lg text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  <CloseIcon className="size-5" />
                </button>
              </div>

              <ul className="mt-5 space-y-1">
                {SECTIONS.map((id, index) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * index + 0.08, duration: 0.4, ease: EASE_OUT_EXPO }}
                  >
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-3 py-3 font-display text-lg font-semibold transition-colors',
                        active === id ? 'bg-surface-2 text-fg' : 'text-fg-muted hover:bg-surface-2',
                      )}
                    >
                      {t.nav[id]}
                      <span className="font-mono text-xs text-fg-subtle">
                        0{index + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
                <a
                  href={CONTACT.cvPath}
                  download={CONTACT.cvFileName}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fg px-4 py-2.5 text-sm font-semibold text-canvas"
                >
                  <DownloadIcon className="size-4" />
                  {t.actions.downloadCv}
                </a>
                <IconLink href={CONTACT.github} label="GitHub">
                  <GithubIcon className="size-[18px]" />
                </IconLink>
                <IconLink href={CONTACT.linkedin} label="LinkedIn">
                  <LinkedinIcon className="size-[18px]" />
                </IconLink>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

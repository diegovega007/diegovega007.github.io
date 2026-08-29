import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT } from '../content'
import { cn } from '../lib/cn'
import { useI18n } from '../lib/i18n'
import {
  CheckIcon,
  CopyIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  ServerIcon,
  WhatsappIcon,
} from './icons'
import { Container, EASE_OUT_EXPO, Reveal, Section, SectionHeading } from './primitives'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type FieldName = 'name' | 'email' | 'subject' | 'message'

function CopyEmailButton({ copyLabel, copiedLabel }: { copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard permission denied; the mailto link next to this button still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? copiedLabel : copyLabel}
      title={copied ? copiedLabel : copyLabel}
      className="grid size-8 shrink-0 place-items-center rounded-lg text-fg-subtle transition-colors hover:bg-surface-2 hover:text-fg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? 'copied' : 'copy'}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.18 }}
          className="grid place-items-center"
        >
          {copied ? (
            <CheckIcon className="size-4 text-emerald-500" strokeWidth={2.5} />
          ) : (
            <CopyIcon className="size-4" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3.5 border-b border-line py-3.5 last:border-b-0">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-300">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] tracking-[0.16em] text-fg-subtle uppercase">{label}</p>
        <div className="mt-0.5 truncate text-sm font-medium">{children}</div>
      </div>
    </div>
  )
}

export function Contact() {
  const { t } = useI18n()
  const form = t.contact.form

  const [values, setValues] = useState<Record<FieldName, string>>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [sent, setSent] = useState(false)

  function update(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors: Partial<Record<FieldName, string>> = {}
    if (!values.name.trim()) nextErrors.name = form.required
    if (!values.email.trim()) nextErrors.email = form.required
    else if (!EMAIL_PATTERN.test(values.email.trim())) nextErrors.email = form.invalidEmail
    if (!values.message.trim()) nextErrors.message = form.required

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = values.subject.trim() || `${form.subjectPlaceholder} ${values.name.trim()}`
    const body = `${values.message.trim()}\n\n—\n${values.name.trim()}\n${values.email.trim()}`

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    window.setTimeout(() => setSent(false), 4000)
  }

  const fieldClass = (field: FieldName) =>
    cn(
      'w-full rounded-xl border bg-surface-2/60 px-4 py-3 text-sm transition-colors outline-none placeholder:text-fg-subtle/70 focus:border-brand-500 focus:bg-surface',
      errors[field] ? 'border-red-500/70' : 'border-line',
    )

  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          kicker={t.contact.kicker}
          heading={t.contact.heading}
          description={t.contact.blurb}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface/70 p-6 sm:p-7">
              <div>
                <InfoRow icon={<MailIcon className="size-[18px]" />} label={t.contact.emailLabel}>
                  <div className="flex items-center gap-1">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="truncate transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                    >
                      {CONTACT.email}
                    </a>
                    <CopyEmailButton
                      copyLabel={t.actions.copy}
                      copiedLabel={t.actions.copied}
                    />
                  </div>
                </InfoRow>

                <InfoRow icon={<PhoneIcon className="size-[18px]" />} label={t.contact.phoneLabel}>
                  <a
                    href={CONTACT.phoneHref}
                    className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </InfoRow>

                <InfoRow icon={<MapPinIcon className="size-[18px]" />} label={t.contact.locationLabel}>
                  {t.contact.locationValue}
                </InfoRow>

                <InfoRow
                  icon={<ServerIcon className="size-[18px]" />}
                  label={t.contact.availabilityLabel}
                >
                  {t.contact.availabilityValue}
                </InfoRow>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2.5">
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col items-center gap-2 rounded-xl border border-line bg-surface-2/50 py-4 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <WhatsappIcon className="size-5" />
                  WhatsApp
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col items-center gap-2 rounded-xl border border-line bg-surface-2/50 py-4 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-sky-500/60 hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <LinkedinIcon className="size-5" />
                  LinkedIn
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col items-center gap-2 rounded-xl border border-line bg-surface-2/50 py-4 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-brand-500/60 hover:text-brand-600 dark:hover:text-brand-300"
                >
                  <GithubIcon className="size-5" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-line bg-surface/70 p-6 sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    {form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={(event) => update('name', event.target.value)}
                    placeholder={form.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    className={cn('mt-1.5', fieldClass('name'))}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    {form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(event) => update('email', event.target.value)}
                    placeholder={form.emailPlaceholder}
                    aria-invalid={Boolean(errors.email)}
                    className={cn('mt-1.5', fieldClass('email'))}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="text-sm font-medium">
                  {form.subject}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={(event) => update('subject', event.target.value)}
                  placeholder={form.subjectPlaceholder}
                  className={cn('mt-1.5', fieldClass('subject'))}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-medium">
                  {form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) => update('message', event.target.value)}
                  placeholder={form.messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  className={cn('mt-1.5 resize-y', fieldClass('message'))}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.03] active:scale-95"
                >
                  <SendIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {form.submit}
                </button>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.p
                      key="sent"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                    >
                      <CheckIcon className="size-4" strokeWidth={2.5} />
                      {form.opening}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="hint"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="max-w-xs text-xs text-fg-subtle"
                    >
                      {form.hint}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

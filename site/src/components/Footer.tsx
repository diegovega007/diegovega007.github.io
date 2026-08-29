import { CONTACT } from '../content'
import { useI18n } from '../lib/i18n'
import { SECTION_IDS } from '../lib/sections'
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from './icons'
import { Container } from './primitives'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface/50">
      <Container className="py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-accent font-display text-sm font-bold text-white">
                DV
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                {CONTACT.name}
              </span>
            </div>
            <p className="mt-4 text-sm text-fg-muted">{t.footer.tagline}</p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label={t.contact.emailLabel}
                className="grid size-9 place-items-center rounded-lg border border-line text-fg-muted transition-colors hover:border-brand-500/60 hover:text-fg"
              >
                <MailIcon className="size-4" />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="grid size-9 place-items-center rounded-lg border border-line text-fg-muted transition-colors hover:border-brand-500/60 hover:text-fg"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="grid size-9 place-items-center rounded-lg border border-line text-fg-muted transition-colors hover:border-brand-500/60 hover:text-fg"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="grid size-9 place-items-center rounded-lg border border-line text-fg-muted transition-colors hover:border-brand-500/60 hover:text-fg"
              >
                <WhatsappIcon className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label={t.nav.sections}>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3">
              {SECTION_IDS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {t.nav[id]}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CONTACT.cvPath}
                  download={CONTACT.cvFileName}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {t.actions.downloadCv}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {CONTACT.name}. {t.footer.rights}
          </p>
          <p className="font-mono">{t.footer.builtWith}</p>
        </div>
      </Container>
    </footer>
  )
}

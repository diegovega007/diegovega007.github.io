import { motion } from 'motion/react'
import { useState } from 'react'
import { REPOS } from '../content'
import type { Dictionary, RepoProject } from '../content/types'
import { cn } from '../lib/cn'
import { useI18n } from '../lib/i18n'
import { CheckIcon, GithubIcon } from './icons'
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

function RepoLinks({
  id,
  labels,
  privateLabel,
}: {
  id: string
  labels: Dictionary['projects']
  privateLabel: string
}) {
  const links = REPOS[id]?.links ?? []

  if (links.length === 0) {
    return (
      <p className="inline-flex items-center gap-2 font-mono text-xs text-fg-subtle">
        <span aria-hidden className="size-1.5 rounded-full bg-fg-subtle/60" />
        {privateLabel}
      </p>
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/60 px-3.5 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-brand-500/60 hover:text-brand-600 dark:hover:text-brand-300"
        >
          <GithubIcon className="size-3.5" />
          {labels.linkLabels[link.kind]}
        </a>
      ))}
    </div>
  )
}

/** Screenshot viewer: one large frame plus thumbnails when a project has several. */
function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
        <motion.img
          key={images[active]}
          src={images[active]}
          alt={alt}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          className="aspect-[3/2] w-full object-cover object-top"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2.5">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${alt} ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              className={cn(
                'overflow-hidden rounded-lg border-2 transition-colors',
                index === active ? 'border-brand-500' : 'border-transparent hover:border-line-strong',
              )}
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                className="h-14 w-24 object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function FeaturedProject({ project, index }: { project: RepoProject; index: number }) {
  const { t } = useI18n()
  const meta = REPOS[project.id]
  const imageFirst = index % 2 === 1

  return (
    <Reveal amount={0.1}>
      <article className="overflow-hidden rounded-3xl border border-line bg-surface/70">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className={cn('flex flex-col', imageFirst && 'lg:order-2')}>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                {t.projects.featuredBadge}
              </span>
              {meta?.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-4 text-base text-pretty text-fg-muted">{project.description}</p>

            {project.highlights && (
              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-fg-muted">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500/12 text-brand-600 dark:text-brand-300">
                      <CheckIcon className="size-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-pretty">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto pt-6">
              <RepoLinks
                id={project.id}
                labels={t.projects}
                privateLabel={t.projects.privateRepo}
              />
            </div>
          </div>

          {meta?.images && (
            <div className={cn(imageFirst && 'lg:order-1')}>
              <Gallery images={meta.images} alt={project.title} />
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}

function ProjectCard({ project }: { project: RepoProject }) {
  const { t } = useI18n()
  const meta = REPOS[project.id]

  return (
    <StaggerItem className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5">
        {meta?.images?.[0] && (
          <div className="overflow-hidden border-b border-line bg-surface-2">
            <img
              src={meta.images[0]}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-bold tracking-tight text-balance">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm text-pretty text-fg-muted">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {meta?.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>

          <div className="mt-auto pt-5">
            <RepoLinks id={project.id} labels={t.projects} privateLabel={t.projects.privateRepo} />
          </div>
        </div>
      </article>
    </StaggerItem>
  )
}

export function Projects() {
  const { t } = useI18n()

  const featured = t.projects.items.filter((project) => REPOS[project.id]?.featured)
  const rest = t.projects.items.filter((project) => !REPOS[project.id]?.featured)

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          kicker={t.projects.kicker}
          heading={t.projects.heading}
          description={t.projects.note}
        />

        <div className="mt-12 space-y-5">
          {featured.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}

          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" amount={0.05}>
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  )
}

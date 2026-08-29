const TECH = [
  'Python',
  'Flask',
  'Django',
  'FastAPI',
  'PostgreSQL',
  'Redis',
  'Celery',
  'Docker',
  'Nginx',
  'Vue 3',
  'React',
  'React Native',
  'Firebase',
  'Google Cloud',
  'Twilio',
  'WhatsApp Business API',
  'Stripe',
  'OpenAI GPT-4',
  'Gemini',
  'Claude',
  'Cypress',
  'Pandas',
]

export function Marquee() {
  return (
    <div className="relative border-y border-line bg-surface/40 py-5">
      <div className="mask-fade-edges flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3">
          {[...TECH, ...TECH].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="flex shrink-0 items-center gap-3 font-mono text-sm tracking-tight text-fg-subtle"
            >
              {tech}
              <span className="size-1 rounded-full bg-brand-500/60" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

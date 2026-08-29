import { MotionConfig } from 'motion/react'
import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Metrics } from './components/Metrics'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'
import { Work } from './components/Work'
import { useI18n } from './lib/i18n'

function SkipLink() {
  const { lang } = useI18n()
  return (
    <a
      href="#about"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-canvas"
    >
      {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
    </a>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SkipLink />
      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Metrics />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}

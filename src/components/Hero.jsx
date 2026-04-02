import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../i18n'

export default function Hero() {
  const { t } = useLanguage()
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Reset typewriter when language (t) changes
    clearTimeout(timeoutRef.current)
    setText('')
    setRoleIndex(0)
    setIsDeleting(false)
  }, [t])

  useEffect(() => {
    const ROLES = t('hero.roles')
    const current = ROLES[roleIndex]

    if (!isDeleting && text === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    } else {
      const speed = isDeleting ? 30 : 60
      timeoutRef.current = setTimeout(() => {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }, speed)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [text, isDeleting, roleIndex, t])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-lime/3 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050505_70%)]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 glow-text">
          Denvil
        </h1>

        <div className="text-xl md:text-2xl font-light text-neon mb-8 h-9">
          <span>{text}</span>
          <span className="inline-block w-0.5 h-6 bg-neon ml-1 align-text-bottom animate-caret" />
        </div>

        <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {t('hero.desc')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="px-8 py-3.5 border border-neon text-neon font-semibold rounded-lg transition-all duration-300 hover:bg-neon hover:text-dark hover:shadow-[0_0_30px_rgba(0,255,127,0.3)]"
          >
            {t('hero.cta1')}
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-border text-text-muted hover:border-neon/40 hover:text-neon font-semibold rounded-lg transition-all duration-300"
          >
            {t('hero.cta2')}
          </a>
        </div>
      </div>
    </section>
  )
}

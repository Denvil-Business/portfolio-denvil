import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-neon/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          Denvil<span className="text-neon">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-text-muted hover:text-neon transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-sm font-medium border border-neon/50 text-neon px-5 py-2.5 rounded-lg hover:bg-neon hover:text-dark transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,127,0.3)]">
            Me contacter
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-neon transition-all ${open ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-0.5 bg-neon transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-neon transition-all ${open ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md border-t border-neon/10 px-6 pb-6 pt-2 space-y-4">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-text-muted hover:text-neon transition-colors py-2">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block text-sm font-medium border border-neon/50 text-neon px-5 py-2.5 rounded-lg text-center hover:bg-neon hover:text-dark transition-all">
            Me contacter
          </a>
        </div>
      )}
    </nav>
  )
}

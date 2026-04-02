import { useLanguage } from '../i18n'

export default function WhyMe() {
  const { t } = useLanguage()
  const items = t('whyme.items')

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-neon text-xs font-semibold tracking-widest uppercase">{t('whyme.label')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 glow-text">{t('whyme.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <div key={i} className="reveal text-center bg-dark-card border border-border rounded-2xl p-8 hover:border-neon/40 transition-all duration-300 hover:-translate-y-1 glow-box-hover">
              <span className="text-4xl mb-5 block">{p.emoji}</span>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

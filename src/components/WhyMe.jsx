const POINTS = [
  {
    emoji: '⚡',
    title: 'Livraison rapide',
    desc: 'Votre projet livré en jours, pas en semaines.',
  },
  {
    emoji: '🎨',
    title: 'Design premium',
    desc: 'Des interfaces modernes qui impressionnent vos clients.',
  },
  {
    emoji: '🤖',
    title: 'Expertise IA',
    desc: "J'intègre l'intelligence artificielle pour automatiser et innover.",
  },
]

export default function WhyMe() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-neon text-xs font-semibold tracking-widest uppercase">Avantages</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 glow-text">Pourquoi moi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POINTS.map((p) => (
            <div key={p.title} className="reveal text-center bg-dark-card border border-border rounded-2xl p-8 hover:border-neon/40 transition-all duration-300 hover:-translate-y-1 glow-box-hover">
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

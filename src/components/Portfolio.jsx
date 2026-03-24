const PROJECTS = [
  {
    title: 'Le Comptoir Doré',
    desc: 'Landing page premium pour un restaurant gastronomique parisien',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    url: 'https://lecomptoirdore.vercel.app',
  },
  {
    title: 'NovaTech Dashboard',
    desc: 'Dashboard analytics complet pour une boutique e-commerce',
    tags: ['React', 'Recharts', 'Tailwind CSS'],
    url: 'https://novatech-dash.vercel.app',
  },
  {
    title: 'Sérénity Chatbot',
    desc: "Chatbot IA intégré pour un site d'assurance",
    tags: ['React', 'IA', 'Chatbot'],
    url: 'https://serenity-assurance.vercel.app',
  },
  {
    title: 'PostGenius',
    desc: "Générateur de posts LinkedIn alimenté par l'IA",
    tags: ['React', 'IA', 'Génération de contenu'],
    url: 'https://postgenius-app.vercel.app/',
  },
]

/* ── CSS Mini-Screenshots ── */

function PreviewComptoir() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden p-3 flex flex-col">
      {/* Nav */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#c9a84c] text-[7px] font-bold tracking-wider">LE COMPTOIR DORÉ</span>
        <div className="flex gap-1.5">
          <div className="w-4 h-[2px] bg-[#c9a84c]/40 rounded" />
          <div className="w-4 h-[2px] bg-[#c9a84c]/40 rounded" />
          <div className="w-4 h-[2px] bg-[#c9a84c]/40 rounded" />
        </div>
      </div>
      {/* Hero area */}
      <div className="flex-1 flex flex-col items-center justify-center border border-[#c9a84c]/20 rounded relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/5 to-transparent" />
        <div className="w-8 h-[1px] bg-[#c9a84c]/60 mb-2" />
        <span className="text-[#c9a84c] text-[9px] font-semibold tracking-widest">GASTRONOMIE</span>
        <span className="text-[#c9a84c]/50 text-[5px] mt-1 tracking-wide">PARIS · DEPUIS 1987</span>
        <div className="w-8 h-[1px] bg-[#c9a84c]/60 mt-2" />
      </div>
      {/* Bottom cards */}
      <div className="flex gap-1.5 mt-2">
        {[1,2,3].map(i => (
          <div key={i} className="flex-1 h-6 bg-[#c9a84c]/8 rounded border border-[#c9a84c]/10" />
        ))}
      </div>
    </div>
  )
}

function PreviewDashboard() {
  return (
    <div className="w-full h-full bg-[#0f0f13] relative overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-8 bg-[#16161f] border-r border-[#2a2a3a] flex flex-col items-center pt-2 gap-2">
        <div className="w-3 h-3 rounded bg-[#7C3AED]/30" />
        <div className="w-3 h-[2px] rounded bg-[#7C3AED]/50 mt-1" />
        <div className="w-3 h-[2px] rounded bg-white/10" />
        <div className="w-3 h-[2px] rounded bg-white/10" />
        <div className="w-3 h-[2px] rounded bg-white/10" />
      </div>
      {/* Main content */}
      <div className="flex-1 p-2 flex flex-col gap-1.5">
        {/* KPI row */}
        <div className="flex gap-1">
          {['#7C3AED', '#3B82F6', '#10B981', '#F59E0B'].map((c, i) => (
            <div key={i} className="flex-1 h-7 bg-[#16161f] rounded border border-[#2a2a3a] p-1 flex flex-col justify-between">
              <div className="w-4 h-[2px] rounded" style={{ background: c + '66' }} />
              <div className="text-[6px] font-bold" style={{ color: c }}>
                {['24.5k','1.2k','89%','$47k'][i]}
              </div>
            </div>
          ))}
        </div>
        {/* Chart area */}
        <div className="flex-1 bg-[#16161f] rounded border border-[#2a2a3a] p-1.5 flex items-end gap-[2px]">
          {[40,65,45,80,55,70,90,60,75,50,85,65].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `linear-gradient(to top, #7C3AED, #3B82F6)`, opacity: 0.7 }} />
          ))}
        </div>
        {/* Table */}
        <div className="h-8 bg-[#16161f] rounded border border-[#2a2a3a] p-1 flex flex-col gap-[2px]">
          {[1,2,3].map(i => (
            <div key={i} className="flex gap-1 items-center">
              <div className="w-6 h-[2px] bg-white/10 rounded" />
              <div className="w-4 h-[2px] bg-white/5 rounded" />
              <div className="ml-auto w-3 h-[2px] rounded" style={{ background: i === 1 ? '#10B981' : i === 2 ? '#F59E0B' : '#EF4444', opacity: 0.5 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PreviewChatbot() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden p-2">
      {/* Nav bar */}
      <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-gray-100">
        <div className="w-4 h-4 rounded bg-[#2563EB]/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-sm bg-[#2563EB]/50" />
        </div>
        <span className="text-[7px] font-bold text-[#2563EB]">Sérénity</span>
        <div className="ml-auto flex gap-1">
          <div className="w-4 h-[2px] bg-gray-200 rounded" />
          <div className="w-4 h-[2px] bg-gray-200 rounded" />
        </div>
      </div>
      {/* Page content */}
      <div className="flex flex-col gap-1.5">
        <div className="w-3/4 h-2 bg-[#2563EB]/10 rounded" />
        <div className="w-1/2 h-1.5 bg-gray-100 rounded" />
        <div className="flex gap-1 mt-1">
          <div className="flex-1 h-10 bg-[#2563EB]/5 rounded border border-[#2563EB]/10" />
          <div className="flex-1 h-10 bg-[#2563EB]/5 rounded border border-[#2563EB]/10" />
        </div>
      </div>
      {/* Chat bubble */}
      <div className="absolute bottom-2 right-2 flex flex-col items-end gap-1">
        <div className="bg-white border border-gray-200 rounded-lg p-1.5 shadow-sm w-24">
          <div className="flex items-center gap-1 mb-1 pb-0.5 border-b border-gray-100">
            <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-[5px] font-semibold text-gray-700">Assistant</span>
          </div>
          <div className="w-full h-1 bg-[#2563EB]/15 rounded mb-0.5" />
          <div className="w-3/4 h-1 bg-[#2563EB]/10 rounded mb-1" />
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-[#2563EB]/30 animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-[#2563EB]/30 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 h-1 rounded-full bg-[#2563EB]/30 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center shadow-md">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function PreviewPostGenius() {
  return (
    <div className="w-full h-full bg-[#F3F2EF] relative overflow-hidden p-2">
      {/* Header */}
      <div className="bg-white rounded p-1.5 mb-1.5 border border-[#e0dfdc] flex items-center justify-center">
        <span className="text-[7px] font-bold text-[#191919]">Post<span className="text-[#0A66C2]">Genius</span></span>
      </div>
      {/* Two columns */}
      <div className="flex gap-1.5">
        {/* Form */}
        <div className="flex-1 bg-white rounded border border-[#e0dfdc] p-1.5 flex flex-col gap-1">
          <div className="w-full h-2 bg-[#F3F2EF] rounded border border-[#e0dfdc]" />
          <div className="flex gap-0.5">
            <div className="flex-1 h-3 rounded bg-[#0A66C2]/10 border border-[#0A66C2]/30" />
            <div className="flex-1 h-3 rounded bg-[#F3F2EF] border border-[#e0dfdc]" />
          </div>
          <div className="flex gap-0.5">
            <div className="flex-1 h-2.5 rounded bg-[#F3F2EF] border border-[#e0dfdc]" />
            <div className="flex-1 h-2.5 rounded bg-[#F3F2EF] border border-[#e0dfdc]" />
            <div className="flex-1 h-2.5 rounded bg-[#F3F2EF] border border-[#e0dfdc]" />
          </div>
          <div className="w-full h-3 bg-[#0A66C2] rounded mt-auto" />
        </div>
        {/* Preview */}
        <div className="flex-1 bg-white rounded border border-[#e0dfdc] p-1.5 flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gray-200" />
            <div>
              <div className="w-8 h-1 bg-gray-300 rounded" />
              <div className="w-5 h-0.5 bg-gray-200 rounded mt-0.5" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-0.5 mt-1">
            <div className="w-full h-[2px] bg-gray-200 rounded" />
            <div className="w-5/6 h-[2px] bg-gray-200 rounded" />
            <div className="w-full h-[2px] bg-gray-200 rounded" />
            <div className="w-3/4 h-[2px] bg-gray-200 rounded" />
            <div className="w-full h-[2px] bg-gray-200 rounded" />
          </div>
          <div className="flex gap-1.5 border-t border-gray-100 pt-0.5 mt-auto">
            <div className="w-3 h-1 bg-gray-200 rounded" />
            <div className="w-3 h-1 bg-gray-200 rounded" />
            <div className="w-3 h-1 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

const PREVIEWS = [PreviewComptoir, PreviewDashboard, PreviewChatbot, PreviewPostGenius]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-dark-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-neon text-xs font-semibold tracking-widest uppercase">Réalisations</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 glow-text">Mes projets</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => {
            const Preview = PREVIEWS[i]
            return (
              <div key={p.title} className="reveal group bg-dark-card border border-border rounded-2xl overflow-hidden hover:border-neon/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] glow-box-hover">
                {/* Mini screenshot */}
                <div className="h-48 relative overflow-hidden border-b border-border">
                  <Preview />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-neon transition-colors">{p.title}</h3>
                  <p className="text-text-muted text-sm mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-neon/20 text-neon bg-neon/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neon border border-neon/30 px-4 py-2 rounded-lg hover:bg-neon hover:text-dark transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,127,0.25)]"
                  >
                    Voir le projet
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { createContext, useContext, useState, useCallback } from 'react'

const translations = {
  fr: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: 'Me contacter',
    },
    hero: {
      roles: ['Développeur Web', 'Intégrateur IA', "Créateur d'outils sur mesure"],
      desc: "Je conçois des sites web modernes et des outils alimentés par l'intelligence artificielle. Livraison rapide, design premium, résultats concrets.",
      cta1: 'Voir mes projets',
      cta2: 'Me contacter',
    },
    services: {
      label: 'Ce que je fais',
      title: 'Mes services',
      items: [
        { title: 'Sites Web & Landing Pages', desc: 'Des sites rapides, élégants et optimisés pour convertir vos visiteurs en clients.' },
        { title: 'Dashboards & Applications', desc: 'Des interfaces sur mesure pour visualiser vos données et gérer votre activité.' },
        { title: 'Chatbots & Assistants IA', desc: 'Des assistants intelligents disponibles 24/7 pour répondre à vos clients.' },
        { title: 'Outils IA sur mesure', desc: 'Des outils personnalisés qui automatisent vos tâches et boostent votre productivité.' },
      ],
    },
    whyme: {
      label: 'Avantages',
      title: 'Pourquoi moi',
      items: [
        { emoji: '⚡', title: 'Livraison rapide', desc: 'Votre projet livré en jours, pas en semaines.' },
        { emoji: '🎨', title: 'Design premium', desc: 'Des interfaces modernes qui impressionnent vos clients.' },
        { emoji: '🤖', title: 'Expertise IA', desc: "J'intègre l'intelligence artificielle pour automatiser et innover." },
      ],
    },
    portfolio: {
      label: 'Réalisations',
      title: 'Mes projets',
      projects: [
        { title: 'Le Comptoir Doré', desc: 'Landing page premium pour un restaurant gastronomique parisien', tags: ['React', 'Tailwind CSS', 'Responsive'] },
        { title: 'NovaTech Dashboard', desc: 'Dashboard analytics complet pour une boutique e-commerce', tags: ['React', 'Recharts', 'Tailwind CSS'] },
        { title: 'Sérénity Chatbot', desc: "Chatbot IA intégré pour un site d'assurance", tags: ['React', 'IA', 'Chatbot'] },
        { title: 'PostGenius', desc: "Générateur de posts LinkedIn alimenté par l'IA", tags: ['React', 'IA', 'Génération de contenu'] },
      ],
      cta: 'Voir le projet',
    },
    contact: {
      label: 'Contact',
      title: 'Un projet en tête ?',
      subtitle: 'Discutons-en. Réponse garantie sous 24h.',
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      messageLabel: 'Message',
      messagePlaceholder: 'Décrivez votre projet...',
      send: 'Envoyer',
      sent: 'Message envoyé !',
      findMe: 'Retrouvez-moi',
    },
    footer: {
      text: '© 2026 Denvil — Développeur Web & IA',
    },
  },
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: 'Contact me',
    },
    hero: {
      roles: ['Web Developer', 'AI Integrator', 'Custom Tool Creator'],
      desc: "I design modern websites and tools powered by artificial intelligence. Fast delivery, premium design, concrete results.",
      cta1: 'View my projects',
      cta2: 'Contact me',
    },
    services: {
      label: 'What I do',
      title: 'My services',
      items: [
        { title: 'Websites & Landing Pages', desc: 'Fast, elegant sites optimized to convert visitors into customers.' },
        { title: 'Dashboards & Applications', desc: 'Custom interfaces to visualize your data and manage your business.' },
        { title: 'Chatbots & AI Assistants', desc: 'Intelligent assistants available 24/7 to respond to your customers.' },
        { title: 'Custom AI Tools', desc: 'Personalized tools that automate your tasks and boost your productivity.' },
      ],
    },
    whyme: {
      label: 'Advantages',
      title: 'Why me',
      items: [
        { emoji: '⚡', title: 'Fast delivery', desc: 'Your project delivered in days, not weeks.' },
        { emoji: '🎨', title: 'Premium design', desc: 'Modern interfaces that impress your clients.' },
        { emoji: '🤖', title: 'AI expertise', desc: 'I integrate artificial intelligence to automate and innovate.' },
      ],
    },
    portfolio: {
      label: 'Work',
      title: 'My projects',
      projects: [
        { title: 'Le Comptoir Doré', desc: 'Premium landing page for a Parisian gastronomic restaurant', tags: ['React', 'Tailwind CSS', 'Responsive'] },
        { title: 'NovaTech Dashboard', desc: 'Full analytics dashboard for an e-commerce store', tags: ['React', 'Recharts', 'Tailwind CSS'] },
        { title: 'Sérénity Chatbot', desc: 'Integrated AI chatbot for an insurance website', tags: ['React', 'AI', 'Chatbot'] },
        { title: 'PostGenius', desc: 'AI-powered LinkedIn post generator', tags: ['React', 'AI', 'Content Generation'] },
      ],
      cta: 'View project',
    },
    contact: {
      label: 'Contact',
      title: 'Have a project in mind?',
      subtitle: "Let's talk. Guaranteed response within 24h.",
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      messagePlaceholder: 'Describe your project...',
      send: 'Send',
      sent: 'Message sent!',
      findMe: 'Find me',
    },
    footer: {
      text: '© 2026 Denvil — Web & AI Developer',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => (navigator.language || navigator.userLanguage || '').startsWith('fr') ? 'fr' : 'en'
  )

  const t = useCallback((key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) {
      if (val == null) return key
      val = val[k]
    }
    return val ?? key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

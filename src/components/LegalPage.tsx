import { Helmet } from 'react-helmet-async'
import legal from '../data/legal.json'

export default function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const page = legal[kind]
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-36 pb-16 px-4">
    <Helmet><title>{page.meta.title}</title><meta name="description" content={page.meta.description} /><link rel="canonical" href={`https://www.webbitz.it/${kind}`} /></Helmet>
    <div className="max-w-3xl mx-auto"><h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{page.hero.title}</h1><p className="text-gray-300 leading-relaxed">{page.hero.subtitle}</p><p className="text-xs text-gray-400 mt-5 mb-9">{page.lastUpdatedLabel} {page.lastUpdatedDate}</p>
    {page.sections.map(section => <section id={section.id} key={section.id} className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-4"><h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>{section.content.map((paragraph, index) => <p className="text-gray-300 text-sm leading-relaxed mb-3 last:mb-0" key={index}>{paragraph}</p>)}</section>)}</div>
  </div>
}

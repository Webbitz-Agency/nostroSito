import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Globe, Bot, Megaphone, Layers } from 'lucide-react'
import PageHeading from '../components/PageHeading'
import ContactActions from '../components/ContactActions'
import { allProjects } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectDialog from '../components/ProjectDialog'

const categories = [
  { id: 'all', label: 'Tutti', icon: Layers },
  { id: 'web', label: 'Siti web', icon: Globe },
  { id: 'ads', label: 'Campagne ads', icon: Megaphone },
  { id: 'ai', label: 'Strumenti AI', icon: Bot },
]

export default function Portfolio() {
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState<Project | null>(null)
  const filtered = allProjects.filter(project => category === 'all' || project.tags.some(tag => category === 'web' ? ['Sito web', 'Landing page', 'E-commerce'].includes(tag) : category === 'ads' ? tag.includes('Ads') : tag === 'AI'))
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <Helmet><title>Lavori: siti web, campagne ads e AI | Webbitz</title><meta name="description" content="I lavori Webbitz: siti web, campagne Meta e Google Ads e strumenti AI. Attività svolte e obiettivi dei progetti." /><link rel="canonical" href="https://www.webbitz.it/portfolio" /></Helmet>
    <PageHeading title="I nostri" accent="lavori." description="Siti web, campagne e strumenti AI. Apri un progetto per vedere il lavoro svolto o visita direttamente il sito." />
    <section className="max-w-6xl mx-auto px-4 pb-10" aria-label="Progetti realizzati">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8" role="group" aria-label="Filtra i lavori per servizio">{categories.map(item => <button key={item.id} onClick={() => setCategory(item.id)} aria-pressed={category === item.id} className={`inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium transition-colors ${category === item.id ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white' : 'bg-white/5 border border-white/10 text-gray-300 hover:border-primary-400/50'}`}><item.icon size={16} aria-hidden="true" />{item.label}</button>)}</div>
      <p className="sr-only" role="status">{filtered.length} progetti visualizzati</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7">{filtered.map(project => <ProjectCard key={project.name} project={project} onOpen={() => setSelected(project)} />)}</div>
      {selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}
    </section>
    <section className="px-4 py-10 md:pb-20"><ContactActions /></section>
  </div>
}

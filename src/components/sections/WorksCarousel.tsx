import { useState } from 'react'
import { projects } from '../../data/projects'
import type { Project } from '../../data/projects'
import ProjectCard from '../ProjectCard'
import ProjectDialog from '../ProjectDialog'
import { Link } from 'react-router-dom'

const featuredNames = ['Studio Malacarne', 'Pokedo', 'Al Rosso di Sera', 'Vistamare', 'Go2West', 'AlmaryDream']
const featured = featuredNames.map(name => projects.find(project => project.name === name)!)

export default function WorksCarousel() {
  const [selected, setSelected] = useState<Project | null>(null)
  return <section className="py-10 md:py-14 px-4" aria-labelledby="home-work-title">
    <div className="max-w-6xl mx-auto">
      <h2 id="home-work-title" className="heading-lg text-white text-center mb-8">I nostri <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">lavori</span></h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">{featured.map(project => <ProjectCard key={project.name} project={project} onOpen={() => setSelected(project)} />)}</div>
      <div className="text-center mt-7"><Link to="/portfolio" className="inline-block py-3 text-sm text-gray-300 underline underline-offset-4 hover:text-primary-400">Tutti i lavori</Link></div>
    </div>
    {selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}
  </section>
}

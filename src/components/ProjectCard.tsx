import { ArrowRight, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return <article className="project-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:border-primary-400/40 transition-colors cursor-pointer" onClick={onOpen}>
    <div className={`project-card-image ${project.imageKind === 'logo' ? 'client-logo' : ''} ${project.imageTheme === 'dark' ? 'client-logo-dark' : ''}`}>
      <img src={project.image} alt="" width="640" height="400" loading="lazy" />
    </div>
    <div className="p-3 sm:p-5 flex flex-col flex-1">
      <div className="project-card-tags hidden sm:flex flex-wrap gap-2 mb-3">{project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}</div>
      <h3 className="project-card-title text-sm sm:text-lg md:text-xl font-bold text-white leading-snug mb-2 sm:mb-3">{project.name}</h3>
      <p className="project-card-desc text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5">{project.description}</p>
      <div className="project-card-actions mt-auto pt-3 sm:pt-4 border-t border-white/10">
        <button type="button" onClick={event => { event.stopPropagation(); onOpen() }} className="project-card-btn" aria-label={`Dettagli di ${project.name}`}>Dettagli <ArrowRight size={12} aria-hidden="true" /></button>
        {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card-btn project-card-btn-visit" onClick={event => event.stopPropagation()} aria-label={`Visita il sito di ${project.name} (nuova scheda)`}>Visita <ExternalLink size={11} aria-hidden="true" /></a>}
      </div>
    </div>
  </article>
}

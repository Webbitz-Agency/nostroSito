import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ExternalLink, X } from 'lucide-react'
import type { Project } from '../data/projects'

export default function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current!
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [])

  return createPortal(
    <dialog ref={ref} className="project-dialog" aria-labelledby="project-dialog-title" onKeyDown={event => {
      if (event.key !== 'Tab') return
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]'))
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }} onCancel={event => { event.preventDefault(); onClose() }} onClick={event => {
      if (event.target !== event.currentTarget) return
      const rect = event.currentTarget.getBoundingClientRect()
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose()
    }}>
      <button type="button" className="project-dialog-close" onClick={onClose} aria-label="Chiudi dettagli" autoFocus><X size={22} aria-hidden="true" /></button>
      {project.image && <div className={`project-dialog-image ${project.imageKind === 'logo' ? 'client-logo' : ''} ${project.imageTheme === 'dark' ? 'client-logo-dark' : ''}`}><img src={project.image} alt={project.imageKind === 'logo' ? `Logo ${project.name}` : `Il progetto ${project.name}`} /></div>}
      <div className="project-dialog-content">
        <h2 id="project-dialog-title">{project.name}</h2>
        {project.details
          ? <><h3>Cosa abbiamo realizzato</h3><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></>
          : <p>{project.description}</p>}
        {project.objective && <div className="project-goal"><h3>Obiettivo del progetto</h3><p>{project.objective}</p></div>}
        {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-3 mt-5 !text-sm">Visita il sito <ExternalLink size={17} aria-hidden="true" /><span className="sr-only"> (si apre in una nuova scheda)</span></a>}
      </div>
    </dialog>, document.body,
  )
}

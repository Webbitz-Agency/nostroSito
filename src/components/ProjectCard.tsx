import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <article className="project-card">
      <button
        type="button"
        onClick={onOpen}
        className={`project-card-image ${project.imageKind === "logo" ? "client-logo" : ""} ${project.imageTheme === "dark" ? "client-logo-dark" : ""}`}
        aria-label={`Dettagli di ${project.name}`}
      >
        <img
          src={project.image}
          alt={`Anteprima ${project.name}`}
          width="640"
          height="400"
          loading="lazy"
        />
        <span className="project-open">
          <ArrowUpRight size={23} />
        </span>
      </button>
      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.sector}</span>
          <span>{project.tags.join(" / ")}</span>
        </div>
        <h3>
          <button type="button" onClick={onOpen}>
            {project.name}
          </button>
        </h3>
        <p>{project.description}</p>
        <div className="project-card-actions">
          <button
            type="button"
            onClick={onOpen}
            className="text-link"
            aria-label={`Scopri il progetto ${project.name}`}
          >
            <span className="project-full-label">Scopri il progetto</span>
            <span className="project-short-label">Dettagli</span>{" "}
            <ArrowUpRight size={16} />
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-visit"
              aria-label={`Visita il sito di ${project.name} (nuova scheda)`}
            >
              Visita il sito <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

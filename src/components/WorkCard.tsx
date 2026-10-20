import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { workCover, workLogo } from "../utils/workAssets";

export default function WorkCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const logo = workLogo(project.name);
  // Se non c'è lo sfondo dedicato si usa l'anteprima del sito, tranne per i loghi su fondo chiaro
  const cover =
    workCover(project.name) ?? (project.imageKind === "logo" ? undefined : project.image);

  return (
    <article className="work-card">
      <div className="work-card-bg" aria-hidden="true">
        {cover && <img src={cover} alt="" width="800" height="1000" loading="lazy" />}
      </div>
      <button
        type="button"
        className="work-card-open"
        onClick={onOpen}
        aria-label={`Dettagli di ${project.name}`}
      />
      <ul className="work-card-tags" aria-label="Categorie">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="work-card-brand">
        {logo ? (
          <img src={logo} alt={project.name} loading="lazy" />
        ) : (
          <span>{project.name}</span>
        )}
      </div>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="work-card-visit"
          aria-label={`Visita il sito di ${project.name} (nuova scheda)`}
        >
          Visita il sito <ExternalLink size={13} />
        </a>
      )}
      <span className="work-card-arrow" aria-hidden="true">
        <ArrowUpRight size={23} />
      </span>
    </article>
  );
}

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import { allProjects } from "../data/projects";
import type { Project } from "../data/projects";
import WorkCard from "../components/WorkCard";
import ProjectDialog from "../components/ProjectDialog";
import { findProjectBySlug, projectSlug } from "../utils/projectSlug";
type CategoryId = "all" | "web" | "ads" | "ai" | "gestionali";

type CategoryFilter = {
  id: CategoryId;
  label: string;
  shortLabel?: string;
};

const categories: CategoryFilter[] = [
  { id: "all", label: "Tutti i progetti" },
  { id: "web", label: "Sviluppo web" },
  { id: "ads", label: "Campagne ads" },
  { id: "ai", label: "Strumenti AI", shortLabel: "AI" },
  { id: "gestionali", label: "Gestionali" },
];

/* In cima i progetti vicini a noi, poi tutti gli altri nell'ordine dell'elenco */
const localFirst = [
  "Fantozzi Bar",
  "La Vela Tirrenia",
  "Bagno Paradiso",
  "Spicchio Di Luna",
  "Ristoro L’Antica Scuderia",
  "La Bottega della Scuderia",
  "Al Rosso di Sera",
  "Pokedo",
  "PokeManager",
  "Studio Malacarne",
  "Vistamare",
];
const orderedProjects = [
  ...localFirst
    .map((name) => allProjects.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project)),
  ...allProjects.filter((project) => !localFirst.includes(project.name)),
];

function isCategoryId(value: string | null): value is Exclude<CategoryId, "all"> {
  return value === "web" || value === "ads" || value === "ai" || value === "gestionali";
}

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const servizio = searchParams.get("servizio");
  const category: CategoryId = isCategoryId(servizio) ? servizio : "all";
  const [selected, setSelected] = useState<Project | null>(() => {
    const slug = searchParams.get("progetto");
    return slug ? findProjectBySlug(slug, allProjects) ?? null : null;
  });

  const updateParams = ({
    nextCategory = category,
    progetto = searchParams.get("progetto"),
  }: {
    nextCategory?: CategoryId;
    progetto?: string | null;
  }) => {
    const next = new URLSearchParams();
    if (nextCategory !== "all") next.set("servizio", nextCategory);
    if (progetto) next.set("progetto", progetto);
    setSearchParams(next, { replace: true });
  };

  useEffect(() => {
    const slug = searchParams.get("progetto");
    if (!slug) {
      setSelected(null);
      return;
    }
    setSelected(findProjectBySlug(slug, allProjects) ?? null);
  }, [searchParams]);

  const openProject = (project: Project) => {
    setSelected(project);
    updateParams({ progetto: projectSlug(project.name) });
  };

  const closeProject = () => {
    setSelected(null);
    if (searchParams.has("progetto")) {
      updateParams({ progetto: null });
    }
  };

  const filtered = orderedProjects.filter(
    (project) =>
      category === "all" ||
      project.tags.some((tag) =>
        category === "web"
          ? ["Sito web", "Landing page", "E-commerce"].includes(tag)
          : category === "ads"
            ? tag.includes("Ads")
            : category === "ai"
              ? tag === "AI"
              : /gestional|crm/i.test(tag),
      ),
  );
  return (
    <div>
      <Helmet>
        <title>Progetti | Webbitz</title>
        <meta
          name="description"
          content="I progetti Webbitz: siti web, campagne Meta e Google Ads, strumenti AI e gestionali. Scopri il lavoro svolto per attività e professionisti."
        />
        <link rel="canonical" href="https://www.webbitz.it/progetti" />
      </Helmet>
      <PageHeading
        label="IL NOSTRO PORTFOLIO"
        title="Guarda cosa"
        accent="abbiamo fatto."
        description="Ristoranti, studi professionali, negozi e strutture ricettive. Trova un’attività vicina alla tua e scopri il lavoro svolto: siti, campagne, strumenti AI e gestionali."
      />
      <section
        className="wrap portfolio-section"
        aria-label="Progetti realizzati"
      >
        <div className="portfolio-toolbar">
          <div
            className="portfolio-filters"
            role="group"
            aria-label="Filtra i progetti per servizio"
          >
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => updateParams({ nextCategory: item.id })}
                aria-pressed={category === item.id}
                aria-label={item.shortLabel ? item.label : undefined}
              >
                <span className="filter-full-label">{item.label}</span>
                {item.shortLabel && (
                  <span className="filter-short-label">{item.shortLabel}</span>
                )}
              </button>
            ))}
          </div>
          <span className="project-count" role="status">
            {String(filtered.length).padStart(2, "0")} progetti
          </span>
        </div>
        <div className="work-grid">
          {filtered.map((project) => (
            <WorkCard
              key={project.name}
              project={project}
              onOpen={() => openProject(project)}
            />
          ))}
        </div>
        {selected && (
          <ProjectDialog
            key={selected.name}
            project={selected}
            onClose={closeProject}
          />
        )}
      </section>
    </div>
  );
}

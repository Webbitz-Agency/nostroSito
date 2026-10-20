import { useState } from "react";
import { allProjects } from "../../data/projects";
import type { Project } from "../../data/projects";
import WorkCard from "../WorkCard";
import ProjectDialog from "../ProjectDialog";
import Reveal from "../design/Reveal";
import MobileGallery from "../design/MobileGallery";
import SectionHeading from "../design/SectionHeading";
const selectedProjects = [
  "La Vela Tirrenia",
  "AlmaryDream",
  "Pokedo",
  "Studio Malacarne",
  "Ristoro L’Antica Scuderia",
  "Welpy",
]
  .map((name) => allProjects.find((project) => project.name === name)!)
  .filter(Boolean);
export default function WorksCarousel() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section className="section wrap featured-work">
      <Reveal>
        <SectionHeading
          label="PROGETTI SELEZIONATI"
          title="Attività come la tua."
          accent="Progetti da vedere."
          link="/progetti"
          linkText="Esplora tutti i progetti"
        />
      </Reveal>
      <MobileGallery
        className="featured-grid"
        label="Progetti in evidenza"
        labels={selectedProjects.map((project) => project.name)}
      >
        {selectedProjects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 0.12}>
            <WorkCard
              project={project}
              onOpen={() => setSelected(project)}
            />
          </Reveal>
        ))}
      </MobileGallery>
      {selected && (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

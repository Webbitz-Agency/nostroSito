import { useState } from "react";
import { allProjects } from "../../data/projects";
import type { Project } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import ProjectDialog from "../ProjectDialog";
import Reveal from "../design/Reveal";
import MobileGallery from "../design/MobileGallery";
import SectionHeading from "../design/SectionHeading";
const selectedProjects = [
  "Vistamare",
  "Area287",
  "Studio Malacarne",
  "La Vela Tirrenia",
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
          link="/lavori"
          linkText="Esplora tutti i lavori"
        />
      </Reveal>
      <MobileGallery
        className="featured-grid"
        label="Progetti in evidenza"
        labels={selectedProjects.map((project) => project.name)}
      >
        {selectedProjects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.12}>
            <ProjectCard
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

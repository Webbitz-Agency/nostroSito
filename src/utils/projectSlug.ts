import type { Project } from "../data/projects";

export function projectSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function findProjectBySlug(
  slug: string,
  projects: Project[],
): Project | undefined {
  return projects.find((project) => projectSlug(project.name) === slug);
}

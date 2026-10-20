import { projectSlug } from "./projectSlug";

/* Immagini dei progetti: src/assets/lavori/<slug>.jpg e <slug>-logo.png|svg (vedi LEGGIMI.md) */
const files = import.meta.glob("../assets/lavori/*.{jpg,jpeg,png,webp,avif,svg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const assetByName: Record<string, string> = {};
for (const [path, url] of Object.entries(files)) {
  const name = path.split("/").pop()!.replace(/\.[^.]+$/, "");
  assetByName[name] = url;
}

export const workCover = (name: string) => assetByName[projectSlug(name)];
export const workLogo = (name: string) => assetByName[`${projectSlug(name)}-logo`];

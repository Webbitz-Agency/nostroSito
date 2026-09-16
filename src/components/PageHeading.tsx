import Reveal from "./design/Reveal";
export default function PageHeading({
  title,
  accent,
  description,
  label = "IL MONDO WEBBITZ",
  singleLine = false,
}: {
  title: string;
  accent: string;
  description: string;
  label?: string;
  singleLine?: boolean;
}) {
  return (
    <section
      className={`page-heading wrap${singleLine ? " page-heading--single" : ""}`}
    >
      <div className="page-glow" aria-hidden="true" />
      <Reveal>
        <span className="eyebrow">
          <span />
          {label}
        </span>
        <h1>
          {title}
          {singleLine ? " " : <br />}
          <span>{accent}</span>
        </h1>
        <p>{description}</p>
      </Reveal>
    </section>
  );
}

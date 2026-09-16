import { ArrowUpRight, Globe2, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../design/Reveal";

const highlights = [
  {
    id: "web",
    label: "Sviluppo web",
    to: "/lavori?servizio=web",
    ariaLabel: "Vedi i lavori di sviluppo web",
  },
  {
    id: "ads",
    label: "Campagne ads",
    to: "/lavori?servizio=ads",
    ariaLabel: "Vedi i lavori di campagne ads",
  },
  {
    id: "ai",
    label: "Strumenti AI",
    to: "/lavori?servizio=ai",
    ariaLabel: "Vedi i lavori di strumenti AI",
  },
];

function PointArt({ id }: { id: string }) {
  if (id === "web") {
    return (
      <div className="mini-browser">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <div className="browser-layout">
          <div>
            <span />
            <span />
            <b />
          </div>
          <Globe2 size={66} strokeWidth={0.7} />
        </div>
      </div>
    );
  }
  if (id === "ads") {
    return (
      <div className="growth-bars">
        {[25, 41, 33, 59, 73, 96].map((height, index) => (
          <i key={index} style={{ height: `${height}%` }} />
        ))}
        <TrendingUp />
      </div>
    );
  }
  return (
    <div className="ai-orbit">
      <span />
      <span />
      <span />
      <Sparkles size={41} strokeWidth={1} />
    </div>
  );
}

export default function AgencyIntro() {
  return (
    <section className="agency-intro wrap reading-light" aria-labelledby="agency-intro-title">
      <Reveal className="agency-intro-copy">
        <span className="agency-intro-badge">
          Sviluppo web · Campagne ads · AI
        </span>
          <h2 id="agency-intro-title">
            Studio digitale a
            <br className="agency-intro-break" />{" "}
            <span className="agency-city">Pontedera</span> per{" "}
            <span className="section-accent">siti,</span>
            <br className="agency-intro-break" />{" "}
            <span className="section-accent agency-intro-tail">
              pubblicità e AI
            </span>
          </h2>
      </Reveal>
      <div className="agency-intro-grid">
        <Reveal className="agency-intro-prose">
          <p>
            Webbitz lavora con PMI, professionisti e attività locali che
            vogliono farsi trovare online, ricevere più richieste e semplificare
            il lavoro quotidiano.
          </p>
          <p>
            Realizziamo{" "}
            <Link to="/services">siti web</Link> ed e-commerce, gestiamo{" "}
            <Link to="/services">campagne Meta e Google Ads</Link> e
            sviluppiamo <Link to="/services">assistenti AI</Link> collegati ai
            processi reali dell&apos;attività. Ogni progetto lo seguiamo in
            prima persona: puoi vedere{" "}
            <Link to="/lavori">alcuni lavori</Link> e conoscere{" "}
            <Link to="/about">chi li realizza</Link>.
          </p>
        </Reveal>
        <Reveal className="agency-intro-points" delay={0.1}>
          <ul>
            {highlights.map((item) => (
              <li key={item.to} className={`agency-point agency-point-${item.id}`}>
                <Link to={item.to} aria-label={item.ariaLabel}>
                  <span className="agency-point-art" aria-hidden="true">
                    <PointArt id={item.id} />
                  </span>
                  <span className="agency-point-label">
                    {item.label}
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

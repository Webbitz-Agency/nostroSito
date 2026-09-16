import { Helmet } from "react-helmet-async";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import MobileGallery from "../components/design/MobileGallery";
import Reveal from "../components/design/Reveal";
const team = [
  {
    name: "Diego",
    image: "diego",
    role: "SVILUPPO · AI · ADS · COMMERCIALE",
    description:
      "Realizzo siti, strumenti AI e campagne su Meta e Google. Dal primo confronto al preventivo, seguo il tuo progetto dall’inizio alla fine.",
  },
  {
    name: "Tommaso",
    image: "Tommi2",
    role: "SVILUPPO · DESIGN",
    description:
      "Mi occupo di come si vede e si usa il sito. Metto insieme grafica, informazioni e codice per creare percorsi semplici e riconoscibili.",
  },
  {
    name: "Francesco",
    image: "Baro",
    role: "SVILUPPO · AI · ADS",
    description:
      "Costruisco siti, assistenti AI e campagne pubblicitarie. Collego tecnologia e comunicazione per accompagnare le persone verso la tua attività.",
  },
];
export default function About() {
  return (
    <div>
      <Helmet>
        <title>Lo studio e il team | Webbitz</title>
        <meta
          name="description"
          content="Diego, Tommaso e Francesco: il team Webbitz di Pontedera. Sviluppo web, strumenti AI e campagne ads, dal primo confronto alla messa online."
        />
        <link rel="canonical" href="https://www.webbitz.it/about" />
      </Helmet>
      <PageHeading
        label="DENTRO WEBBITZ"
        title="Parli con chi"
        accent="fa il lavoro."
        description="Hai già dovuto spiegare tutto da capo a persone diverse? Qui trovi Diego, Tommaso e Francesco: chi ascolta la tua idea è anche chi la realizza."
      />
      <section className="wrap about-intro">
        <span className="location-label">
          <MapPin size={17} /> Pontedera, Toscana
        </span>
        <p>
          Ci piace il rapporto diretto. Non passiamo i progetti a terzi: parli
          con chi realizza il sito, imposta le campagne e sviluppa gli strumenti
          AI. Lavoriamo con PMI e professionisti in Italia e all’estero, in
          presenza o da remoto.
        </p>
      </section>
      <section className="wrap team-section" aria-label="Il team Webbitz">
        <MobileGallery
          className="team-grid"
          label="Il team"
          labels={team.map((member) => member.name)}
        >
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <article className="team-card">
                <div className="team-photo">
                  <span className="team-index">0{i + 1} / WEBBITZ</span>
                  <img
                    src={`/TeamWebbitzAI/${member.image}.webp`}
                    alt={member.name}
                    width="480"
                    height="480"
                    loading="lazy"
                  />
                  <ArrowUpRight size={33} aria-hidden="true" />
                </div>
                <h2>{member.name}</h2>
                <span className="team-role">{member.role}</span>
                <p>{member.description}</p>
              </article>
            </Reveal>
          ))}
        </MobileGallery>
      </section>
      <section className="wrap values-section">
        <span className="eyebrow">
          <span />
          IL NOSTRO MODO DI ESSERE
        </span>
        <h2>
          Vicini al progetto.
          <br />
          <span className="section-accent">Vicini a te.</span>
        </h2>
        <div className="values-list">
          {[
            "Rapporto diretto",
            "Soluzioni su misura",
            "Creatività concreta",
            "Preventivi chiari",
            "Tecnologia utile",
            "Crescita condivisa",
          ].map((value) => (
            <span key={value}>
              {value}
              <ArrowUpRight size={16} />
            </span>
          ))}
        </div>
        <Link className="text-link" to="/contact#richiesta">
          Facciamo conoscenza <ArrowUpRight size={19} />
        </Link>
      </section>
    </div>
  );
}

import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import MobileGallery from "../components/design/MobileGallery";
import Reveal from "../components/design/Reveal";
import { whatsappUrlForNumber } from "../components/WhatsAppButton";
const team = [
  {
    name: "Diego",
    image: "diego",
    surname: "Simoncini",
    roles: ["AI", "Ads", "Commerciale"],
    whatsapp: { label: "+39 339 179 7616", number: "393391797616" },
    email: "diego.simoncini@webbitz.it",
    description:
      "Sviluppo strumenti AI e imposto le campagne su Meta e Google. Dal primo confronto al preventivo, seguo il tuo progetto dall’inizio alla fine.",
  },
  {
    name: "Francesco",
    image: "Baro",
    surname: "Barone",
    roles: ["Sviluppo", "Gestionali", "AI"],
    whatsapp: { label: "+39 370 337 4703", number: "393703374703" },
    email: "francesco.barone@webbitz.it",
    description:
      "Scrivo il codice di siti e gestionali su misura e ci porto dentro l’AI, dagli assistenti alle automazioni. Trasformo i processi della tua attività in strumenti che funzionano ogni giorno.",
  },
  {
    name: "Tommaso",
    image: "Tommi2",
    surname: "Guezze",
    roles: ["Sviluppo", "Design"],
    whatsapp: { label: "+39 370 317 3289", number: "393703173289" },
    email: "",
    description:
      "Mi occupo di come si vede e si usa il sito. Metto insieme grafica, informazioni e codice per creare percorsi semplici e riconoscibili.",
  },
];
export default function About() {
  return (
    <div>
      <Helmet>
        <title>Lo studio e il team | Webbitz</title>
        <meta
          name="description"
          content="Diego, Tommaso e Francesco: il team Webbitz di Pontedera. Sviluppo web, strumenti AI, gestionali e campagne ads, dal primo confronto alla messa online."
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
              <article className="member-card">
                <div className="member-photo">
                  <img
                    src={`/TeamWebbitzAI/${member.image}.webp`}
                    alt={member.name}
                    width="336"
                    height="336"
                    loading="lazy"
                  />
                </div>
                <h2>
                  <span>{member.name}</span>
                  {member.surname && (
                    <span className="member-surname">{member.surname}</span>
                  )}
                </h2>
                <ul className="member-roles" aria-label="Competenze">
                  {member.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
                <p>{member.description}</p>
                <ul className="member-contacts" aria-label={`Contatta ${member.name}`}>
                  <li>
                    <a
                      href={whatsappUrlForNumber(member.whatsapp.number, member.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="member-icon member-icon-whatsapp" aria-hidden="true">
                        <FaWhatsapp size={18} />
                      </span>
                      <span className="member-contact-label">
                        {member.whatsapp.label}
                      </span>
                      <span className="sr-only">
                        {" "}
                        WhatsApp di {member.name} (si apre in una nuova scheda)
                      </span>
                    </a>
                  </li>
                  {member.email && (
                    <li>
                      <a href={`mailto:${member.email}`}>
                        <span className="member-icon" aria-hidden="true">
                          <Mail size={18} />
                        </span>
                        <span className="member-contact-label">{member.email}</span>
                        <span className="sr-only"> Email di {member.name}</span>
                      </a>
                    </li>
                  )}
                </ul>
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

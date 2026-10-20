import { ArrowUpRight, Globe2, LayoutDashboard, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../design/Reveal";
import MobileGallery from "../design/MobileGallery";
import SectionHeading from "../design/SectionHeading";
const services = [
  {
    id: "web",
    number: "01",
    icon: Globe2,
    title: "Sviluppo web",
    description:
      "Un sito che spiega perché sceglierti e rende semplice chiedere un preventivo, prenotare o acquistare.",
    tags: ["Siti web", "E-commerce", "Landing page"],
    caption: "DALLE VISITE ALLE RICHIESTE",
    problem: "Hai visite, ma pochi contatti?",
  },
  {
    id: "ads",
    number: "02",
    icon: TrendingUp,
    title: "Campagne ads",
    description:
      "Annunci su Meta e Google collegati al tuo sito. Seguiamo pubblico, messaggi e budget per puntare alle richieste che ti servono.",
    tags: ["Meta Ads", "Google Ads", "Strategia"],
    caption: "UN OBIETTIVO PER IL TUO BUDGET",
    problem: "Investi in ads, ma non sai cosa funziona?",
  },
  {
    id: "ai",
    number: "03",
    icon: Sparkles,
    title: "Strumenti AI",
    description:
      "Assistenti che gestiscono le prime richieste e automazioni per email e documenti. Tu puoi dedicarti alle attività che richiedono davvero il tuo tempo.",
    tags: ["Assistenti AI", "Automazioni", "Integrazioni"],
    caption: "MENO ATTIVITÀ RIPETITIVE",
    problem: "Rispondi sempre alle stesse domande?",
  },
  {
    id: "gestionali",
    number: "04",
    icon: LayoutDashboard,
    title: "Gestionali",
    description:
      "Gestionali e CRM su misura per tenere clienti, ordini, preventivi e appuntamenti in un unico pannello. Meno fogli sparsi, più tempo per il lavoro vero.",
    tags: ["Gestionali su misura", "CRM", "Dashboard"],
    caption: "TUTTO IN UN UNICO PANNELLO",
    problem: "Gestisci tutto tra fogli Excel e messaggi?",
  },
];
export default function Features({ heading = true }: { heading?: boolean }) {
  return (
    <section
      id="servizi"
      className="section wrap services-section"
      aria-label="I nostri servizi"
    >
      {heading && (
        <Reveal>
          <SectionHeading
            label="COSA FACCIAMO"
            title="Ti riconosci?"
            accent="Partiamo da qui."
            link="/services"
            linkText="Tutti i servizi"
          />
        </Reveal>
      )}
      <MobileGallery
        className="services-grid"
        label="Servizi Webbitz"
        labels={services.map((service) => service.title)}
      >
        {services.map((service, i) => (
          <Reveal
            key={service.id}
            delay={i * 0.08}
            className={`service-card service-${service.id}`}
          >
            <article id={service.id}>
              <div className="service-top">
                <span className="card-index">/{service.number}</span>
                <service.icon size={25} strokeWidth={1.3} aria-hidden="true" />
              </div>
              <div
                className={`service-art art-${service.id}`}
                aria-hidden="true"
              >
                {service.id === "web" ? (
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
                ) : service.id === "ads" ? (
                  <div className="growth-bars">
                    {[25, 41, 33, 59, 73, 96].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                    <TrendingUp />
                  </div>
                ) : service.id === "ai" ? (
                  <div className="ai-orbit">
                    <span />
                    <span />
                    <span />
                    <Sparkles size={41} strokeWidth={1} />
                  </div>
                ) : (
                  <div className="mini-dash">
                    <div className="dash-side">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="dash-main">
                      {[0, 1, 2].map((row) => (
                        <div className="dash-row" key={row}>
                          <i />
                          <span />
                          <b />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <span className="service-caption">{service.caption}</span>
              <h3>{service.title}</h3>
              <p className="service-problem">{service.problem}</p>
              <p>{service.description}</p>
              <div className="tag-list">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link
                to={`/contact?service=${service.id}#richiesta`}
                className="service-link"
              >
                Parliamo del tuo obiettivo{" "}
                <span>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
              </Link>
            </article>
          </Reveal>
        ))}
      </MobileGallery>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import MobileGallery from "../design/MobileGallery";
import Reveal from "../design/Reveal";
const steps = [
  {
    title: "Sai cosa serve.",
    text: "Ci racconti cosa non sta funzionando. Ricevi una proposta con attività, tempi e costi: decidi con le informazioni in mano.",
  },
  {
    title: "Vedi il progetto.",
    text: "Sito, annunci e strumenti prendono forma con te. Hai un confronto diretto con chi li realizza, fino alla messa online.",
  },
  {
    title: "Si migliora insieme.",
    text: "Per le campagne rivediamo annunci, pubblico e pagine più volte al mese. Le scelte successive partono da ciò che funziona.",
  },
];
export default function BusinessApproach() {
  return (
    <section className="approach section" aria-labelledby="approach-title">
      <div className="wrap">
        <Reveal className="approach-intro">
          <span className="eyebrow">
            <span />
            IL NOSTRO METODO
          </span>
          <h2 id="approach-title">
            Un percorso chiaro.
            <br />
            Dal primo <span className="section-accent">confronto.</span>
          </h2>
          <p className="approach-lead">
            <span className="approach-lead-desktop">
              Se anche tu temi costi poco chiari e continui passaggi di mano,
              <br />
              con noi sai cosa stai acquistando e chi lo realizza.
            </span>
            <span className="approach-lead-mobile">
              Costi chiari, niente passaggi di mano: sai cosa acquisti e chi lo
              realizza.
            </span>
          </p>
        </Reveal>
        <MobileGallery
          className="process-grid"
          label="Come lavoriamo"
          labels={steps.map((step) => step.title)}
        >
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <article>
                <span className="process-number">
                  0{i + 1}
                  <ArrowUpRight size={24} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </MobileGallery>
        <Reveal className="approach-note">
          <p>
            <strong>Chiarezza, anche nel preventivo.</strong> Il sito non ha un
            nostro canone mensile. Realizzazione e gestione delle campagne sono
            voci distinte.
          </p>
          <Link to="/contact#richiesta" aria-label="Parliamo di tempi e costi">
            <ArrowUpRight size={23} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

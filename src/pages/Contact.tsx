import { Helmet } from "react-helmet-async";
import { ArrowUpRight, MapPin, Plus } from "lucide-react";
import PageHeading from "../components/PageHeading";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactForm from "../components/ContactForm";
const faqs = [
  [
    "Da dove iniziamo?",
    "Da una conversazione sulla tua attività e sui tuoi obiettivi. Insieme definiamo cosa serve, poi ti proponiamo il lavoro, i tempi e i costi.",
  ],
  [
    "Il sito ha un canone mensile?",
    "La realizzazione del sito non ha un nostro canone mensile. Gli eventuali servizi aggiuntivi e la gestione delle campagne sono voci distinte, definite nel preventivo.",
  ],
  [
    "Lavorate anche a distanza?",
    "Sì. Siamo a Pontedera, ma lavoriamo con attività in tutta Italia e all’estero. Possiamo seguire il progetto da remoto, dal primo confronto al lancio.",
  ],
];
export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Parliamo del tuo progetto | Webbitz</title>
        <meta
          name="description"
          content="Raccontaci la tua attività. Contatta Webbitz per siti web, campagne ads e strumenti AI: scrivici su WhatsApp oppure richiedi una proposta."
        />
        <link rel="canonical" href="https://www.webbitz.it/contact" />
      </Helmet>
      <PageHeading
        label="INIZIA DA QUI"
        title="Partiamo dalla"
        accent="tua attività."
        description="Ci dici cosa fai e cosa vuoi migliorare. Ti aiutiamo a scegliere da dove partire, poi ricevi una proposta con attività, tempi e costi."
      />
      <section id="richiesta" tabIndex={-1} className="wrap contact-layout">
        <div className="contact-info">
          <span className="eyebrow">
            <span />
            UN CONTATTO DIRETTO
          </span>
          <h2>
            Pochi contatti?
            <br />
            Troppo <span className="section-accent">lavoro manuale?</span>
          </h2>
          <p>
            Raccontaci il problema concreto. Non serve conoscere la soluzione:
            la definiamo insieme.
          </p>
          <div className="phone-block">
            <span>PREFERISCI UNA CHAT?</span>
            <WhatsAppButton label="Parla con Diego su WhatsApp" />
          </div>
          <p className="location-label">
            <MapPin size={16} /> Pontedera, Pisa · Lavoriamo ovunque
          </p>
        </div>
        <div className="contact-panel reading-light">
          <span className="form-heading">
            Raccontaci cosa vuoi migliorare <ArrowUpRight size={23} />
          </span>
          <ContactForm />
        </div>
      </section>
      <section className="wrap faq-section">
        <span className="eyebrow">
          <span />
          PRIMA DI INIZIARE
        </span>
        <h2>
          Qualche risposta,
          <br />
          <span className="section-accent">in anticipo.</span>
        </h2>
        <div>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <Plus size={21} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

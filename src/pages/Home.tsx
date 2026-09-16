import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import AgencyIntro from "../components/sections/AgencyIntro";
import Features from "../components/sections/Features";
import WorksCarousel from "../components/sections/WorksCarousel";
import BusinessApproach from "../components/sections/BusinessApproach";
import { allProjects } from "../data/projects";
import { projectSlug } from "../utils/projectSlug";
import Reveal from "../components/design/Reveal";
const ClientsMap = lazy(() => import("../components/sections/ClientsMap"));
const clientLogos = allProjects.filter(
  (project) => project.imageKind === "logo" && project.image,
);
export default function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Webbitz | Siti, campagne ads e AI per la tua attività</title>
        <meta
          name="description"
          content="Sviluppo web, campagne Meta e Google Ads e strumenti AI. Webbitz è il tuo studio digitale a Pontedera: creatività, tecnologia e strategia per PMI e professionisti."
        />
        <link rel="canonical" href="https://www.webbitz.it/" />
      </Helmet>
      <Hero />
      <AgencyIntro />
      <section
        className="brand-section"
        aria-label="Alcune realtà con cui lavoriamo"
      >
        <p className="wrap">CI HANNO SCELTO PER IL LORO DIGITALE.</p>
        <div className="brand-marquee">
          <div className="brand-marquee-track">
            {[0, 1].map((copy) => (
              <ul
                className="brand-marquee-group"
                key={copy}
                aria-hidden={copy === 1}
              >
                {clientLogos.map((project) => (
                  <li key={`${project.name}-${copy}`}>
                    <Link
                      className="brand-logo"
                      to={`/lavori?progetto=${projectSlug(project.name)}`}
                      aria-label={
                        copy === 0
                          ? `Dettagli del progetto ${project.name}`
                          : undefined
                      }
                      tabIndex={copy === 0 ? undefined : -1}
                    >
                      <img
                        src={project.image}
                        alt={copy === 0 ? `Logo ${project.name}` : ""}
                        height={48}
                        loading="lazy"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
      <section className="intro-section wrap reading-light">
        <Reveal className="intro-copy-block">
          <span className="eyebrow">
            <span />
            IL PUNTO È LA TUA ATTIVITÀ
          </span>
          <h2>
            Il passaparola conta.
            <br />
            Il digitale può{" "}
            <span className="section-accent">fare la sua parte.</span>
          </h2>
          <p className="intro-copy">
            Se i clienti arrivano solo da chi ti conosce già, ti aiutiamo a
            farti trovare anche dagli altri. Un sito chiaro, campagne mirate e
            meno lavoro ripetitivo: partiamo dal problema che oggi ti pesa di
            più.
          </p>
        </Reveal>
        <section className="proof-strip" aria-label="Webbitz in tre numeri">
          <div>
            <strong>{allProjects.length}</strong>
            <p className="proof-meta">
              <span className="proof-label-full">progetti da esplorare</span>
              <span className="proof-label-short">progetti</span>
              <Link to="/lavori">
                <span className="proof-link-full">
                  Guarda i lavori <ArrowUpRight size={13} />
                </span>
                <span className="proof-link-short">
                  Lavori <ArrowUpRight size={11} />
                </span>
              </Link>
            </p>
          </div>
          <div>
            <strong>3</strong>
            <p className="proof-meta">
              <span className="proof-label-full">persone, un team diretto</span>
              <span className="proof-label-short">in team</span>
              <Link to="/about">
                <span className="proof-link-full">
                  Conosci chi ti segue <ArrowUpRight size={13} />
                </span>
                <span className="proof-link-short">
                  Team <ArrowUpRight size={11} />
                </span>
              </Link>
            </p>
          </div>
          <div>
            <strong>0</strong>
            <p className="proof-meta">
              <span className="proof-label-full">canone mensile Webbitz sul sito</span>
              <span className="proof-label-short">canone</span>
            </p>
          </div>
        </section>
      </section>
      <Features />
      <BusinessApproach />
      <WorksCarousel />
      <section className="studio-section wrap section">
        <Reveal className="studio-visual">
          <div className="studio-orbit" aria-hidden="true" />
          <span className="eyebrow">
            LE PERSONE CHE SEGUONO IL TUO PROGETTO.
          </span>
          <div className="studio-portraits">
            {[
              { name: "Diego", image: "diego" },
              { name: "Tommaso", image: "Tommi2" },
              { name: "Francesco", image: "Baro" },
            ].map((member) => (
              <div key={member.name}>
                <img
                  src={`/TeamWebbitzAI/${member.image}.webp`}
                  alt={member.name}
                  width="160"
                  height="190"
                  loading="lazy"
                />
                <span>{member.name}</span>
              </div>
            ))}
          </div>
          <span className="studio-coordinates">
            43°39′ N · 10°38′ E / PONTEDERA
          </span>
        </Reveal>
        <Reveal className="studio-copy">
          <span className="eyebrow">
            <span />
            LE PERSONE, PRIMA
          </span>
          <h2>
            Il tuo progetto.
            <br />
            <span className="studio-title-line">
              Un solo <span className="section-accent">team.</span>
            </span>
          </h2>
          <p>
            Niente rimbalzi tra commerciale, grafico e sviluppatore. Parli
            direttamente con noi: le persone che realizzano il sito, seguono le
            campagne e sviluppano gli strumenti AI.
          </p>
          <Link to="/about" className="text-link">
            Conosci lo studio <ArrowUpRight size={19} />
          </Link>
        </Reveal>
      </section>
      <div className="map-section">
        <Suspense
          fallback={
            <div className="map-placeholder" role="status">
              Caricamento mappa dei progetti…
            </div>
          }
        >
          <ClientsMap />
        </Suspense>
      </div>
    </div>
  );
}

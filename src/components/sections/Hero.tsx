import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Reveal from "../design/Reveal";
import Constellation from "../design/Constellation";
import logoMark from "../../assets/logos/logo-bianco.png";
import MondoGlobe from "../design/MondoGlobe";

const WEBBITZ = ["W", "e", "b", "b", "i", "t", "z"];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Constellation />
      <div className="hero-aura" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content wrap">
        <Reveal delay={0.1}>
          <h1 id="hero-title">
            Fatti conoscere{" "}
            <br className="mobile-break" />
            <span className="hero-dal-mondo">dal <MondoGlobe /></span>
            <br />
            Con{" "}
            <span className="hero-highlight">
              <span className="hero-highlight-word" aria-label="Webbitz">
                {WEBBITZ.map((letter, i) => (
                  <span
                    key={`${letter}-${i}`}
                    className="hero-letter"
                    style={{ "--i": i } as CSSProperties}
                    aria-hidden="true"
                  >
                    {letter}
                  </span>
                ))}
              </span>
              <span className="hero-highlight-mark-wrap" aria-hidden="true">
                <img
                  src={logoMark}
                  alt=""
                  className="hero-highlight-mark"
                  width={160}
                  height={46}
                />
              </span>
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="hero-description">
            Se online ti fai vedere, ma ricevi poche richieste, mettiamo al
            lavoro sito e campagne. Insieme.
            <br />
            <strong>
              Per farti trovare, scegliere e contattare.
            </strong>
          </p>
        </Reveal>
        <Reveal delay={0.3} className="hero-actions">
          <Link to="/contact#richiesta" className="button">
            Parliamo della tua attività{" "}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
      <div className="hero-bottom wrap">
        <span>
          PONTEDERA, ITALIA <span className="tiny-star">✳</span> AL FIANCO DI
          PMI E PROFESSIONISTI
        </span>
        <span>
          SCOPRI COME <ArrowDown size={13} />
        </span>
      </div>
      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div className="marquee-group" key={i}>
              <span>FATTI TROVARE</span>
              <Asterisk />
              <span>FATTI SCEGLIERE</span>
              <Asterisk />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

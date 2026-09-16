import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import logo from "../../assets/logos/logo-bianco.png";
export default function Footer() {
  const { pathname } = useLocation();
  return (
    <footer className="site-footer">
      {pathname !== "/contact" && (
        <div className="footer-cta wrap reading-light">
          <span className="eyebrow">
            <span />
            IL PROSSIMO PROGETTO
          </span>
          <div className="footer-invitation">
            <h2>
              Il prossimo cliente
              <br />
              può <em>trovarti online.</em>
            </h2>
            <Link
              className="cta-circle"
              to="/contact#richiesta"
              aria-label="Parliamo del tuo progetto"
            >
              <ArrowUpRight size={44} strokeWidth={1.3} />
            </Link>
          </div>
          <p>
            Dicci cosa fai e cosa vuoi migliorare. Ti proponiamo da dove
            partire, con tempi e costi chiari.
          </p>
        </div>
      )}
      <div className="footer-main wrap">
        <div>
          <Link to="/" aria-label="Webbitz, homepage">
            <img
              src={logo}
              alt="Webbitz"
              width="150"
              height="46"
              className="footer-logo"
            />
          </Link>
          <p>
            Creatività, codice e connessioni.
            <br />
            Da Pontedera, ovunque serva.
          </p>
        </div>
        <div className="footer-links">
          <span>ESPLORA</span>
          <Link to="/services">Servizi</Link>
          <Link to="/lavori">Lavori</Link>
          <Link to="/about">Studio</Link>
        </div>
        <div className="footer-links footer-contact">
          <span>RESTIAMO IN CONTATTO</span>
          <Link to="/contact#richiesta" className="button">
            Raccontaci il tuo progetto <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <WhatsAppButton />
          <span className="footer-location">Pontedera · Pisa · Italia</span>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} Webbitz</span>
        <nav aria-label="Informazioni legali">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Termini e condizioni</Link>
        </nav>
        <a href="#main" className="back-top">
          Torna su <ArrowUp size={15} />
        </a>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        webbitz<span>®</span>
      </div>
    </footer>
  );
}

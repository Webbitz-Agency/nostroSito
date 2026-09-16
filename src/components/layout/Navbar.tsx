import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import WhatsAppButton from "../WhatsAppButton";
import logo from "../../assets/logos/logo-bianco.png";

const items = [
  { name: "Home", path: "/" },
  { name: "Servizi", path: "/services" },
  { name: "Lavori", path: "/lavori" },
  { name: "Studio", path: "/about" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [location.key]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const query = window.matchMedia("(min-width: 901px)");
    const resize = () => {
      if (query.matches) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    query.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", escape);
      query.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-inner" aria-label="Navigazione principale">
        <Link to="/" aria-label="Webbitz, homepage" className="brand">
          <img
            src={logo}
            alt="Webbitz"
            width="144"
            height="44"
            className="navbar-logo"
          />
        </Link>
        <div className="desktop-nav">
          {items.map((item) => (
            <NavLink key={item.path} to={item.path} end>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="theme-switch"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Attiva modalità giorno"
                : "Attiva modalità notte"
            }
            title="Cambia tema"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/contact#richiesta" className="button button-small nav-cta">
            Parliamone <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            ref={menuButton}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Navigazione mobile"
        >
          {items.map((item, index) => (
            <NavLink to={item.path} key={item.path} end>
              <span>0{index + 1}</span>
              {item.name}
              <ArrowUpRight size={23} />
            </NavLink>
          ))}
          <Link to="/contact#richiesta" className="button">
            Parliamo del tuo progetto <ArrowUpRight size={20} />
          </Link>
          <WhatsAppButton className="mobile-whatsapp" />
        </nav>
      )}
    </header>
  );
}

import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import logo from '../../assets/logos/logo-bianco.png'

export default function Footer() {
  return <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-white/10 text-white">
    <div className="max-w-5xl mx-auto px-4 py-9 flex flex-col items-center text-center gap-5">
      <Link to="/" aria-label="Webbitz — homepage"><img src={logo} alt="Webbitz" className="w-40 h-auto footer-logo" /></Link>
      <p className="text-sm text-gray-300">Sviluppo web. Campagne ads. Strumenti AI.</p>
      <a href="tel:+393391797616" className="inline-flex items-center gap-2 text-sm text-gray-300 py-2"><Phone size={16} aria-hidden="true" />339 179 7616</a>
      <nav aria-label="Informazioni legali" className="flex gap-6 text-xs text-gray-400"><Link className="py-2 hover:text-primary-400" to="/privacy">Privacy</Link><Link className="py-2 hover:text-primary-400" to="/terms">Termini e condizioni</Link></nav>
      <div className="flex items-center gap-5 text-xs text-gray-400"><span>© {new Date().getFullYear()} Webbitz</span></div>
    </div>
  </footer>
}

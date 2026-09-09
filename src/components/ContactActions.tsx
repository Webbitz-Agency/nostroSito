import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactActions() {
  return <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <Link to="/contact#richiesta" className="btn-primary inline-flex items-center justify-center gap-3 text-sm">Lascia una richiesta <ArrowRight size={18} aria-hidden="true" /></Link>
    <a href="tel:+393391797616" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 px-6 py-4 text-sm text-white hover:border-primary-400/50"><Phone size={18} aria-hidden="true" />339 179 7616</a>
  </div>
}

import { Helmet } from 'react-helmet-async'
import { Phone } from 'lucide-react'
import PageHeading from '../components/PageHeading'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <Helmet><title>Lascia una richiesta | Webbitz</title><meta name="description" content="Descrivi il tuo progetto oppure chiama Diego al 339 179 7616. Sviluppo web, campagne ads e strumenti AI." /><link rel="canonical" href="https://www.webbitz.it/contact" /></Helmet>
    <PageHeading title="Raccontaci" accent="cosa ti serve." description="Lascia una richiesta: ti ricontattiamo per capire il progetto e proporti tempi e costi." />
    <section id="richiesta" tabIndex={-1} className="max-w-5xl mx-auto px-4 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-[.75fr_1.25fr] gap-7 md:gap-12 items-start">
      <div className="md:pt-5"><h2 className="text-xl font-bold text-white mb-4">Preferisci parlarne a voce?</h2><a href="tel:+393391797616" className="inline-flex items-center gap-3 text-2xl font-semibold text-white py-2 hover:text-primary-400"><Phone size={23} className="text-primary-400" aria-hidden="true" />339 179 7616</a><p className="text-sm text-gray-300 mt-3">Parli direttamente con Diego.</p></div>
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 md:p-7"><ContactForm /></div>
    </section>
  </div>
}

import { Helmet } from 'react-helmet-async'
import PageHeading from '../components/PageHeading'
import Features from '../components/sections/Features'
import ContactActions from '../components/ContactActions'
import BusinessApproach from '../components/sections/BusinessApproach'

export default function Services() {
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <Helmet><title>Servizi | Webbitz</title><meta name="description" content="Sviluppo web, campagne Meta e Google Ads, strumenti AI su misura per PMI e professionisti." /><link rel="canonical" href="https://www.webbitz.it/services" /></Helmet>
    <PageHeading title="Cosa possiamo" accent="fare per te." description="Sviluppo web, campagne ads e strumenti AI. Partiamo da quello che serve alla tua attività." />
    <Features heading={false} /><BusinessApproach />
    <section className="px-4 pt-6 pb-16 md:pb-20 text-center"><p className="text-gray-300 mb-7">Descrivi la tua richiesta: definiamo insieme il lavoro, i tempi e i costi.</p><ContactActions /></section>
  </div>
}

import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import WorksCarousel from '../components/sections/WorksCarousel'
import ContactActions from '../components/ContactActions'
import BusinessApproach from '../components/sections/BusinessApproach'

const ClientsMap = lazy(() => import('../components/sections/ClientsMap'))

export default function Home() {
  return <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <Helmet><title>Webbitz | Sviluppo web, campagne ads e strumenti AI</title><meta name="description" content="Siti web per PMI e professionisti, landing page, e-commerce, campagne Meta e Google Ads e strumenti AI. Lascia una richiesta o chiama 339 179 7616." /><link rel="canonical" href="https://www.webbitz.it/" /></Helmet>
    <Hero /><Features /><BusinessApproach /><WorksCarousel /><Suspense fallback={<div className="h-96" />}><ClientsMap /></Suspense>
    <section className="px-4 py-14 md:py-20 text-center"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Di cosa hai bisogno?</h2><p className="text-gray-300 text-base mb-8">Raccontaci il progetto. Ti proponiamo tempi e costi.</p><ContactActions /></section>
  </div>
}

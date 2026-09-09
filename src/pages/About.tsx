import { Helmet } from 'react-helmet-async'
import { MapPin } from 'lucide-react'
import PageHeading from '../components/PageHeading'
import ContactActions from '../components/ContactActions'

const team = [
  {
    name: 'Diego',
    image: '/TeamWebbitzAI/diego.webp',
    role: 'Sviluppo web, AI, campagne ads e commerciale',
    description: 'Realizzo i siti, preparo gli strumenti automatici che rispondono ai clienti e gestisco le campagne su Facebook, Instagram e Google. Parlo anche con te del preventivo e seguo il lavoro dall’inizio alla fine.',
  },
  {
    name: 'Tommaso',
    image: '/TeamWebbitzAI/Tommi2.webp',
    role: 'Sviluppo web e design',
    description: 'Mi occupo di come si vede e si usa il sito. Studio la grafica, l’ordine delle informazioni e poi lo costruisco, così i clienti trovano subito cosa serve e possono contattarti senza difficoltà.',
  },
  {
    name: 'Francesco',
    image: '/TeamWebbitzAI/Baro.webp',
    role: 'Sviluppo web, AI e campagne ads',
    description: 'Realizzo siti, strumenti automatici per le domande dei visitatori e campagne pubblicitarie. Lavoro per farti trovare da chi cerca i tuoi servizi e per trasformare le visite in richieste.',
  },
]

export default function About() {
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <Helmet>
      <title>Il team | Webbitz</title>
      <meta name="description" content="Diego, Tommaso e Francesco: il team Webbitz di Pontedera (PI). Sviluppo web, strumenti AI e campagne ads, dal primo confronto alla messa online." />
      <link rel="canonical" href="https://www.webbitz.it/about" />
    </Helmet>
    <PageHeading title="Parli con chi" accent="fa il lavoro." description="Siamo Diego, Tommaso e Francesco. Combinamo creatività, tecnologia e strategia, e seguiamo i progetti dal primo confronto alla messa online." />

    <section className="max-w-3xl mx-auto px-4 pb-12 text-center" aria-labelledby="chi-siamo">
      <h2 id="chi-siamo" className="sr-only">Chi siamo</h2>
      <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 mb-5">
        <MapPin size={16} aria-hidden="true" />
        Pontedera (PI)
      </p>
      <p className="text-gray-300 text-base leading-relaxed mb-4">
        Webbitz è un team di tre persone, di Pontedera, in provincia di Pisa. Non passiamo i progetti a terzi: parli con chi realizza il sito, imposta le campagne e prepara gli strumenti automatici.
      </p>
      <p className="text-gray-300 text-base leading-relaxed">
        Lavoriamo con PMI e professionisti in Toscana, in Italia e all’estero. Possiamo seguirti in presenza oppure in remoto, dalla prima chiamata fino al lancio.
      </p>
    </section>

    <section className="max-w-5xl mx-auto px-4 pb-10 grid grid-cols-1 sm:grid-cols-3 gap-5" aria-label="Il team">
      {team.map(member => (
        <article key={member.name} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 text-center hover:border-primary-400/30 transition-colors flex flex-col">
          <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-5">
            <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-xl" />
            <img src={member.image} alt={member.name} width="112" height="112" className="relative w-full h-full object-cover rounded-full border border-white/20" />
          </div>
          <h2 className="text-xl font-bold text-white mb-1">{member.name}</h2>
          <p className="text-sm font-medium text-primary-400 mb-4">{member.role}</p>
          <p className="text-sm text-gray-300 leading-relaxed">{member.description}</p>
        </article>
      ))}
    </section>

    <section className="px-4 py-10 md:pb-20"><ContactActions /></section>
  </div>
}

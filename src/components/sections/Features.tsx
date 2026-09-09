import { Globe, Bot, Megaphone } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Sviluppo web', description: 'Siti web per PMI e professionisti, landing page ed e-commerce. Per presentare la tua attività, ricevere richieste e vendere online.' },
  { icon: Megaphone, title: 'Gestione campagne ads', description: 'Strategia, annunci e ottimizzazione delle campagne su Meta e Google. Per raggiungere persone interessate ai tuoi prodotti o servizi.' },
  { icon: Bot, title: 'Sviluppo strumenti AI', description: 'Assistenti e strumenti su misura per automatizzare attività ripetitive, consultare documenti e gestire richieste.' },
]
export default function Features({ heading = true }: { heading?: boolean }) {
  return <section className="py-10 md:py-12 relative" aria-label="I nostri servizi"><div className="container-premium max-w-6xl">
    {heading && <h2 className="heading-lg text-center text-white mb-9">I nostri <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">servizi</span></h2>}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">{services.map(service => <article key={service.title} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center hover:border-primary-400/30 transition-colors">
      <div className="inline-flex items-center justify-center bg-primary-500/20 w-12 h-12 rounded-xl mb-4"><service.icon className="text-primary-400" size={25} aria-hidden="true" /></div>
      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3><p className="text-gray-300 text-sm md:text-base leading-relaxed">{service.description}</p>
    </article>)}</div>
  </div></section>
}

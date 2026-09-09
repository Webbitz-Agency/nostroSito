import { Globe, Megaphone, TrendingUp } from 'lucide-react'

const steps = [
  { icon: Globe, title: 'Un sito che porta al contatto', text: 'Sito aziendale, landing page o e-commerce: scegliamo la struttura adatta a presentare la tua offerta e rendere semplice chiedere un preventivo, prenotare o acquistare.' },
  { icon: Megaphone, title: 'Le campagne portano le persone', text: 'Google per intercettare chi sta già cercando. Meta per far conoscere la tua offerta al pubblico giusto. Usiamo uno o entrambi i canali, in base all’attività.' },
  { icon: TrendingUp, title: 'Ottimizziamo più volte al mese', text: 'Rivediamo annunci, pubblici, parole chiave e pagine di arrivo. L’obiettivo è aumentare richieste, prenotazioni e vendite, usando meglio il budget delle campagne.' },
]

export default function BusinessApproach() {
  return <section className="px-4 py-12 md:py-16" aria-labelledby="approach-title">
    <div className="max-w-6xl mx-auto rounded-3xl border border-primary-400/20 bg-white/5 p-6 md:p-10">
      <div className="max-w-3xl mx-auto text-center mb-9">
        <h2 id="approach-title" className="text-3xl md:text-4xl font-bold text-white mb-4">Sito e campagne, <span className="text-primary-400">insieme.</span></h2>
        <p className="text-gray-300 text-base leading-relaxed">Le campagne portano visite. Il sito le trasforma in contatti e acquisti. Progettiamo e seguiamo entrambi, con lo stesso obiettivo.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">{steps.map(step => <article key={step.title}>
        <step.icon size={26} className="text-primary-400 mb-4" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">{step.text}</p>
      </article>)}</div>
      <div className="mt-9 pt-7 border-t border-white/10 text-center">
        <p className="font-semibold text-white">Il sito non ha un nostro canone mensile.</p>
        <p className="text-sm text-gray-300 mt-2 leading-relaxed">La realizzazione del sito e la gestione delle campagne sono voci distinte, definite nel preventivo.</p>
      </div>
    </div>
  </section>
}

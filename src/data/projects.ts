export interface Project {
  name: string
  sector: string
  tags: string[]
  description: string
  objective?: string
  url?: string
  image?: string
  imageKind?: 'logo' | 'screenshot'
  imageTheme?: 'light' | 'dark'
  details?: string[]
}

export const projects: Project[] = [
{
  "name": "Studio Malacarne",
  "sector": "Professionisti",
  "tags": [
    "Sito web",
    "AI"
  ],
  "image": "/images/clients/malacarne.svg",
  "imageKind": "logo",
  "url": "https://www.studiomalacarne.com/",
  "description": "Sito web dello studio e assistente AI integrato per raccogliere nuove richieste di consulenza.",
  "objective": "Trasformare le domande dei visitatori in contatti per lo studio.",
  "details": [
    "Presentazione dei servizi professionali, del team e delle sedi dello studio.",
    "Assistente AI nel sito per rispondere alle prime domande e accompagnare il visitatore verso una richiesta di consulenza.",
    "Percorso di contatto pensato per la raccolta di potenziali clienti."
  ]
},
{
  "name": "Pokedo",
  "sector": "Ristorazione",
  "tags": [
    "Sito web",
    "Gestionale su misura"
  ],
  "image": "/images/clients/pokedo.webp",
  "imageKind": "logo",
  "url": "https://www.pokedo.it/",
  "description": "Sito web e gestionale su misura per menu, ordini e prenotazioni.",
  "objective": "Semplificare il lavoro del locale e rendere più facile ordinare.",
  "details": [
    "Menu digitale con categorie, prezzi e allergeni.",
    "Composizione della bowl con ingredienti personalizzabili e ordini in sala o da asporto.",
    "Gestionale su misura per organizzare ordini, prenotazioni e attività del locale."
  ]
},
{
  "name": "Al Rosso di Sera",
  "sector": "Ospitalità",
  "tags": [
    "Sito web",
    "Prenotazioni online"
  ],
  "image": "/images/clients/alrossodisera.webp",
  "imageKind": "logo",
  "url": "https://www.alrossodisera.it/",
  "description": "Sito web con prenotazione camere su misura, gestibile in autonomia dalla struttura.",
  "objective": "Favorire le prenotazioni dirette e semplificare la gestione delle camere.",
  "details": [
    "Presentazione di camere, appartamenti e servizi della struttura.",
    "Sistema di prenotazione personalizzato con ricerca per date e numero di ospiti.",
    "Gestione autonoma da parte della struttura, senza doverci contattare per le operazioni quotidiane."
  ]
},
  {
    name: 'Vistamare', details: ["Sito del ristorante con menu e accesso alle prenotazioni.", "Campagna Meta estiva con video dedicati al menù degustazione, per promuovere le prenotazioni nel periodo estivo."], url: 'https://vistamarerosignano.it/', image: '/images/vistamare-preview.webp', sector: 'Ristorazione', tags: ['Sito web', 'Meta Ads'],
    description: 'Sito del ristorante e campagna estiva su Meta, con video dedicati al menù degustazione.',
    objective: 'Portare nuove prenotazioni per il menù estivo.',
  },
  {
    name: 'Go2West', details: ["Campagne Meta e Google dedicate ai viaggi in Perù, a New York e a San Francisco.", "Comunicazione delle diverse destinazioni per stimolare richieste di informazioni e preventivi."], image: '/images/clients/go2west.svg', imageKind: 'logo', url: 'https://www.go2west.org/', sector: 'Viaggi', tags: ['Meta Ads', 'Google Ads'],
    description: 'Campagne Meta e Google per promuovere i viaggi in Perù, a New York e a San Francisco.',
    objective: 'Raccogliere richieste di informazioni e preventivi sui viaggi.',
  },
  {
    name: 'EkoAfrica', details: ["Campagne sulla rete Google per promuovere i pacchetti viaggio in Africa.", "Promozione delle destinazioni rivolta a persone che stanno cercando un viaggio e vogliono richiedere un preventivo."], image: '/images/clients/ekoafrica.webp', imageKind: 'logo', url: 'https://ekoafrica.com/', sector: 'Viaggi', tags: ['Google Ads'],
    description: 'Campagne Google per i pacchetti viaggio in Africa, rivolte a chi cerca queste destinazioni.',
    objective: 'Generare richieste di preventivo per i viaggi in Africa.',
  },
  {
    name: 'FacileRisarcimento', details: ["Landing page dedicata alle richieste di assistenza per incidenti stradali.", "Campagne Meta collegate alla landing, con un percorso che porta dall’annuncio alla richiesta di contatto."], url: 'https://www.facile-risarcimento.it/', image: '/images/clients/facilerisarcimento.svg', imageKind: 'logo', sector: 'Servizi', tags: ['Landing page', 'Meta Ads'],
    description: 'Landing page e campagne Meta collegate in un percorso di richiesta assistenza per risarcimenti da incidenti stradali.',
    objective: 'Raccogliere contatti di persone che hanno bisogno di assistenza.',
  },
  {
    name: 'AlmaryDream', details: ["Sito web dedicato alla struttura ricettiva e alle sue camere in Costa Smeralda.", "Campagna Meta per promuovere i soggiorni e portare gli interessati alla richiesta di disponibilità."], image: '/images/clients/almary.webp', imageKind: 'logo', url: 'https://www.almarydream.com/', sector: 'Ospitalità', tags: ['Sito web', 'Meta Ads'],
    description: 'Sito web e campagne Meta per una struttura ricettiva in Costa Smeralda.',
    objective: 'Favorire le richieste di disponibilità e le prenotazioni dirette.',
  },
  {
    name: 'Erboristeria Officinale Sardegna', details: ["Sito web per presentare l’erboristeria e i suoi prodotti.", "Campagna Meta dedicata al pubblico di Milano, con strategia e comunicazione specifiche.", "Campagna Meta separata per i turisti in Sardegna, con messaggi dedicati a chi si trova sul territorio."], image: '/images/clients/erboristeria.webp', imageKind: 'logo', sector: 'Erboristeria', tags: ['Sito web', 'Meta Ads'],
    description: 'Sito web e due campagne Meta distinte: una per il pubblico di Milano, una per i turisti in Sardegna. Strategie e messaggi dedicati a ciascun pubblico.',
    objective: 'Stimolare richieste sui prodotti, acquisti e visite in erboristeria.',
    url: 'https://www.erboristeriaofficinalesardegna.it/',
  },
  {
    name: 'La Vela Tirrenia', details: ["Sito web dedicato a ristorante, terrazza, aperitivi ed eventi.", "Informazioni e contatti organizzati per accompagnare il visitatore alla prenotazione di un tavolo o alla richiesta per un evento."], image: '/images/lavela-preview.webp', sector: 'Ristorazione', tags: ['Sito web'],
    description: 'Sito web per presentare ristorante, terrazza, aperitivi ed eventi, con un accesso diretto alle prenotazioni.',
    objective: 'Semplificare le prenotazioni dei tavoli e le richieste per eventi.',
    url: 'https://lavelatirrenia.it/',
  },
]

export const otherProjects: Project[] = [
  {
    "name": "ThinkGood Music",
    "url": "https://www.thinkgoodmusic.com",
    "sector": "Musica",
    "tags": [
      "Sito web",
      "AI"
    ],
    "description": "Sito web e assistente AI per la piattaforma musicale.",
    "image": "/images/previews/thinkgood.webp"
  },
  {
    "name": "Threshold Coach",
    "url": "https://www.threshold.coach/",
    "sector": "Coaching",
    "tags": [
      "Sito web",
      "AI"
    ],
    "description": "Piattaforma web e strumenti AI per il coaching.",
    "image": "/images/previews/threshold.webp"
  },
  {
    "name": "AdmissionHub",
    "url": "https://theadmissionhub.com",
    "sector": "Formazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sviluppo del sito web.",
    "image": "/images/previews/admissionhub.webp"
  },
  {
    "name": "Area287",
    "url": "https://area287.it",
    "sector": "Abbigliamento",
    "tags": [
      "E-commerce"
    ],
    "description": "Sito e negozio online su Shopify.",
    "image": "/images/previews/area287.webp"
  },
  {
    "name": "Fantozzi Bar",
    "url": "https://barfantozzi.it",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web del locale.",
    "image": "/images/previews/fantozzi.webp"
  },
  {
    "name": "Ristoro L’Antica Scuderia",
    "url": "https://www.ristorolanticascuderia.it/",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web del ristorante.",
    "image": "/images/previews/scuderia.webp"
  },
  {
    "name": "La Bottega della Scuderia",
    "url": "https://labottegadellascuderia.com",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web della bottega.",
    "image": "/images/previews/bottega.webp"
  },
  {
    "name": "Bagno Paradiso",
    "url": "https://bagnoparadisotirrenia.it",
    "sector": "Ospitalità",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web dello stabilimento balneare.",
    "image": "/images/previews/bagnoparadiso.webp"
  },
  {
    "name": "Napoli Into Core",
    "url": "https://napolintocore.it",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web del ristorante.",
    "image": "/images/previews/napoli.webp"
  },
  {
    "name": "Spicchio Di Luna",
    "url": "https://spicchiodiluna.it",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web del locale.",
    "image": "/images/previews/sdl.webp"
  },
  {
    "name": "Diaz Microtorrefazione",
    "url": "https://diazmicrotorrefazione.com",
    "sector": "Caffè",
    "tags": [
      "E-commerce"
    ],
    "description": "Sito web e negozio online per la microtorrefazione.",
    "image": "/images/previews/diaz.webp"
  },
  {
    "name": "Welpy",
    "url": "https://www.welpy.it/",
    "sector": "Servizi",
    "tags": [
      "AI"
    ],
    "description": "Assistente AI per la gestione delle richieste.",
    "image": "/images/previews/chatbot_welpy.webp"
  },
  {
    "name": "RnD Hub",
    "url": "https://rndhub.io/",
    "sector": "Logistica",
    "tags": [
      "AI"
    ],
    "description": "Automazione della gestione email e integrazione con i servizi aziendali.",
    "image": "/images/previews/chatbot_rndhub.webp"
  }
]

export const allProjects = [...projects, ...otherProjects]

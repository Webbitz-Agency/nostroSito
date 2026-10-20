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
  "image": "/images/previews/malacarne.webp",
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
  "image": "/images/previews/pokedo.webp",
  "url": "https://www.pokedo.it/",
  "description": "Sito web con ordini online e gestionale su misura (PokeManager) per gestire menu, ordini e tavoli.",
  "objective": "Portare online tutto il locale e semplificare il lavoro quotidiano.",
  "details": [
    "Menu digitale con categorie, prezzi e allergeni, sempre aggiornato dal gestionale.",
    "Composizione della poke bowl con ingredienti personalizzabili e ordini da asporto.",
    "Ordine in autonomia dal tavolo tramite QR code, per ridurre code ed errori in sala.",
    "Tutto gestito dal locale con PokeManager, il gestionale su misura che abbiamo sviluppato per Pokedo."
  ]
},
{
  "name": "PokeManager",
  "sector": "Software",
  "tags": [
    "Gestionale su misura"
  ],
  "image": "/images/previews/pokemanager.webp",
  "description": "Gestionale su misura per ristoranti poke: menu, ordini, tavoli e sito sempre sotto controllo da un unico pannello.",
  "objective": "Mettere online l’intera infrastruttura del locale e darle in mano al titolare.",
  "details": [
    "Gestione del menu: aggiungi, modifica o nascondi piatti, prezzi e disponibilità si aggiornano subito sul sito.",
    "Regole della poke bowl configurabili: ingredienti, varianti e offerte in pochi click.",
    "Ordini da asporto e dai tavoli in un pannello unico, con stampa delle comande in cucina.",
    "Tavoli con QR code: il cliente ordina in autonomia dal telefono.",
    "Impostazioni del locale: coperto, orari, logo, foto e contenuti del sito.",
    "Piattaforma multi-cliente, pronta per essere attivata anche su altri locali."
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
    name: 'Vistamare', details: ["Sito del ristorante con menu e accesso alle prenotazioni.", "Campagna Meta estiva con video dedicati al menù degustazione, per promuovere le prenotazioni nel periodo estivo.", "Messaggi e creatività pensati per chi cerca un ristorante vista mare nella stagione alta."], url: 'https://vistamarerosignano.it/', image: '/images/vistamare-preview.webp', sector: 'Ristorazione', tags: ['Sito web', 'Meta Ads'],
    description: 'Sito del ristorante e campagna estiva su Meta, con video dedicati al menù degustazione.',
    objective: 'Portare nuove prenotazioni per il menù estivo.',
  },
  {
    name: 'Go2West', details: ["Campagne Meta e Google dedicate ai viaggi in Perù, a New York e a San Francisco.", "Comunicazione delle diverse destinazioni per stimolare richieste di informazioni e preventivi.", "Annunci e landing allineati, così chi clicca arriva su un percorso chiaro verso il contatto."], image: '/images/clients/go2west.svg', imageKind: 'logo', url: 'https://www.go2west.org/', sector: 'Viaggi', tags: ['Meta Ads', 'Google Ads'],
    description: 'Campagne Meta e Google per promuovere i viaggi in Perù, a New York e a San Francisco.',
    objective: 'Raccogliere richieste di informazioni e preventivi sui viaggi.',
  },
  {
    name: 'EkoAfrica', details: ["Campagne sulla rete Google per promuovere i pacchetti viaggio in Africa.", "Promozione delle destinazioni rivolta a persone che stanno cercando un viaggio e vogliono richiedere un preventivo.", "Messaggi e parole chiave scelti per intercettare chi sta già valutando queste mete."], image: '/images/clients/ekoafrica.webp', imageKind: 'logo', url: 'https://ekoafrica.com/', sector: 'Viaggi', tags: ['Google Ads'],
    description: 'Campagne Google per i pacchetti viaggio in Africa, rivolte a chi cerca queste destinazioni.',
    objective: 'Generare richieste di preventivo per i viaggi in Africa.',
  },
  {
    name: 'FacileRisarcimento', details: ["Landing page dedicata alle richieste di assistenza per incidenti stradali.", "Campagne Meta collegate alla landing, con un percorso che porta dall’annuncio alla richiesta di contatto.", "Modulo e messaggi pensati per chi ha bisogno di aiuto in un momento urgente, senza passaggi superflui."], url: 'https://www.facile-risarcimento.it/', image: '/images/clients/facilerisarcimento.svg', imageKind: 'logo', sector: 'Servizi', tags: ['Landing page', 'Meta Ads'],
    description: 'Landing page e campagne Meta collegate in un percorso di richiesta assistenza per risarcimenti da incidenti stradali.',
    objective: 'Raccogliere contatti di persone che hanno bisogno di assistenza.',
  },
  {
    name: 'AlmaryDream', details: ["Sito web dedicato alla struttura ricettiva e alle sue camere in Costa Smeralda.", "Campagna Meta per promuovere i soggiorni e portare gli interessati alla richiesta di disponibilità.", "Pagine e annunci allineati, dalla scoperta della struttura alla richiesta di date."], image: '/images/previews/almary.webp', url: 'https://www.almarydream.com/', sector: 'Ospitalità', tags: ['Sito web', 'Meta Ads'],
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
    name: 'La Vela Tirrenia', details: ["Sito web dedicato a ristorante, terrazza, aperitivi ed eventi.", "Informazioni e contatti organizzati per accompagnare il visitatore alla prenotazione di un tavolo o alla richiesta per un evento.", "Pagine pensate per chi arriva da ricerca locale e vuole capire subito cosa offre il locale."], image: '/images/lavela-preview.webp', sector: 'Ristorazione', tags: ['Sito web'],
    description: 'Sito web per presentare ristorante, terrazza, aperitivi ed eventi, con un accesso diretto alle prenotazioni.',
    objective: 'Semplificare le prenotazioni dei tavoli e le richieste per eventi.',
    url: 'https://lavelatirrenia.it/',
  },
]

export const otherProjects: Project[] = [
  {
    "name": "Threshold Coach",
    "url": "https://www.threshold.coach/",
    "sector": "Coaching",
    "tags": [
      "Sito web",
      "AI"
    ],
    "description": "Piattaforma web e strumenti AI per il coaching.",
    "image": "/images/previews/threshold.webp",
    "details": [
      "Piattaforma web per presentare il metodo di coaching e i percorsi disponibili.",
      "Strumenti AI a supporto del lavoro quotidiano di coach e clienti.",
      "Struttura delle pagine pensata per spiegare l’offerta e raccogliere nuove richieste."
    ],
    "objective": "Chiarire il metodo e favorire nuove richieste di coaching."
  },
  {
    "name": "AdmissionHub",
    "url": "https://theadmissionhub.com",
    "sector": "Formazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sviluppo del sito web.",
    "image": "/images/previews/admissionhub.webp",
    "details": [
      "Sito web per presentare i servizi di orientamento e ammissione.",
      "Pagine e contenuti organizzati per spiegare il percorso a studenti e famiglie.",
      "Chiamate all’azione visibili, dalla prima visita alla richiesta di informazioni."
    ],
    "objective": "Far capire l’offerta e raccogliere richieste di contatto."
  },
  {
    "name": "Fantozzi Bar",
    "url": "https://barfantozzi.it",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web del locale.",
    "image": "/images/previews/fantozzi.webp",
    "details": [
      "Sito web del locale, con orari, menù e informazioni pratiche in evidenza.",
      "Presentazione dello spazio e dell’offerta per chi cerca un bar in zona.",
      "Contatti e indicazioni organizzati per favorire una visita o una chiamata."
    ],
    "objective": "Far trovare il locale e rendere più semplice il contatto."
  },
  {
    "name": "Ristoro L’Antica Scuderia",
    "url": "https://www.ristorolanticascuderia.it/",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web del ristorante.",
    "image": "/images/previews/scuderia.webp",
    "details": [
      "Sito del ristorante, con cucina, location e informazioni per organizzare una visita.",
      "Pagine dedicate a menù, eventi e contatti, pensate per chi arriva da ricerca o passaparola.",
      "Percorso verso la prenotazione o la richiesta, senza passaggi inutili."
    ],
    "objective": "Presentare il ristorante e favorire prenotazioni e richieste."
  },
  {
    "name": "La Bottega della Scuderia",
    "url": "https://labottegadellascuderia.com",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web della bottega.",
    "image": "/images/previews/bottega.webp",
    "details": [
      "Sito della bottega, con prodotti, atmosfera e informazioni di contatto.",
      "Presentazione dell’offerta per chi vuole conoscere il locale prima di entrarci.",
      "Indicazioni chiare su dove si trova, cosa propone e come raggiungerla."
    ],
    "objective": "Far conoscere la bottega e portare nuove visite."
  },
  {
    "name": "Bagno Paradiso",
    "url": "https://bagnoparadisotirrenia.it",
    "sector": "Ospitalità",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web dello stabilimento balneare.",
    "image": "/images/previews/bagnoparadiso.webp",
    "details": [
      "Sito dello stabilimento balneare, con servizi, stagione e informazioni pratiche.",
      "Presentazione di spiaggia, ristoro e offerta per famiglie e ospiti della costa.",
      "Contatti e indicazioni visibili per chi cerca uno stabilimento a Tirrenia."
    ],
    "objective": "Far trovare lo stabilimento e semplificare le richieste."
  },
  {
    "name": "Napoli Into Core",
    "url": "https://napolintocore.it",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web del ristorante.",
    "image": "/images/previews/napoli.webp",
    "details": [
      "Sito del ristorante, con cucina, location e identità del locale.",
      "Menù e informazioni organizzati per chi vuole prenotare o farsi un’idea prima di arrivare.",
      "Percorso di contatto diretto, dalla homepage alla richiesta di un tavolo."
    ],
    "objective": "Presentare il ristorante e favorire le prenotazioni."
  },
  {
    "name": "Spicchio Di Luna",
    "url": "https://spicchiodiluna.it",
    "sector": "Ristorazione",
    "tags": [
      "Sito web"
    ],
    "description": "Sito web del locale.",
    "image": "/images/previews/sdl.webp",
    "details": [
      "Sito del locale, con atmosfera, proposta gastronomica e informazioni utili.",
      "Pagine pensate per chi cerca un posto dove fermarsi, dalla scoperta al contatto.",
      "Orari, indirizzo e richieste organizzati in modo semplice."
    ],
    "objective": "Far trovare il locale e rendere più facile il contatto."
  },
  {
    "name": "Welpy",
    "url": "https://www.welpy.it/",
    "sector": "Servizi",
    "tags": [
      "AI"
    ],
    "description": "Assistente AI per la gestione delle richieste.",
    "image": "/images/previews/chatbot_welpy.webp",
    "details": [
      "Assistente AI per rispondere alle prime richieste e filtrare i contatti.",
      "Integrazione nel sito per coprire orari in cui il team non è disponibile.",
      "Flusso pensato per raccogliere informazioni utili e passare al team solo le richieste rilevanti."
    ],
    "objective": "Ridurre il lavoro ripetitivo e non perdere le richieste in arrivo."
  },
  {
    "name": "RnD Hub",
    "url": "https://rndhub.io/",
    "sector": "Logistica",
    "tags": [
      "AI"
    ],
    "description": "Automazione della gestione email e integrazione con i servizi aziendali.",
    "image": "/images/previews/chatbot_rndhub.webp",
    "details": [
      "Automazione della gestione email, con classificazione e risposte alle richieste ricorrenti.",
      "Integrazione con i servizi aziendali già in uso, senza cambiare il modo di lavorare del team.",
      "Flusso pensato per togliere lavoro ripetitivo e lasciare alle persone i casi che richiedono attenzione."
    ],
    "objective": "Semplificare la gestione delle email e accelerare le risposte."
  }
]

export const allProjects = [...projects, ...otherProjects]

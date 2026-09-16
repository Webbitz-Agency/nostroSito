# Webbitz

Sito React, TypeScript e Vite. Redesign ispirato alla direzione visiva di 011enterprise.com: titoli Unbounded, testi Manrope, composizioni ampie, costellazione animata, bagliori e sezioni editoriali. Identità Webbitz: arancio #E85002, rosso #C10801, crema #D9C3AB e nero. Sono disponibili tema scuro e chiaro.

## Pagine e contenuti

- Home: hero con costellazione e marquee, clienti, presentazione dello studio, servizi illustrati, metodo, quattro progetti selezionati, team, mappa e invito al contatto.
- Servizi: sviluppo web, gestione campagne Meta e Google, sviluppo strumenti AI.
- Lavori (`/lavori`, con redirect da `/portfolio`): due progetti per riga su mobile, tre su tablet e quattro su desktop, con filtri per web, ads e AI. Schede con immagini e link diretti; i modal raccolgono descrizioni, attività svolte e obiettivi. I dati si trovano in `src/data/projects.ts`.
- Studio: Diego, Tommaso e Francesco, con ruoli, ritratti originali e valori del team.
- Contatti: form unico, pulsanti verdi WhatsApp e domande frequenti. I link dei servizi preselezionano la relativa voce nel modulo.
- Privacy e termini: contenuti in `src/data/legal.json`.

I testi dei casi descrivono attività e obiettivi. Non dichiarano risultati misurati non forniti, spesa pubblicitaria o percentuali inventate. Non vengono mostrati pacchetti commerciali, listini, chat o form modali. I dettagli dei lavori si aprono in dialog accessibili. Lo switch giorno/notte è nell’header su desktop e mobile. Le animazioni rispettano `prefers-reduced-motion`; la costellazione si ferma quando non è visibile o la scheda è in background.

## Sviluppo

```sh
npm install --legacy-peer-deps
npm run dev
npm run build
```

`npm run build` controlla TypeScript e genera `dist`. Il server Vite serve il frontend; non esegue le funzioni Vercel in `api/`.

## Form contatti

Il form invia una richiesta JSON a `POST /api/send-lead`. La funzione Vercel inoltra il messaggio a `diego.simoncini@webbitz.it` tramite il servizio SMTP già configurato nel progetto.

Impostare nell’ambiente Vercel:

- `GMAIL_USER`: account Gmail mittente.
- `GMAIL_APP_PASSWORD`: password per app dell’account mittente.

Le variabili sono documentate in `.env.example`. Nessuna credenziale va inserita nel frontend. Il form mostra la conferma solo se la funzione risponde con `success: true`; in caso di errore conserva i dati e permette di riprovare o scrivere su WhatsApp.

Per provare l’interfaccia del form in locale, simulare l’endpoint senza inviare email reali. Per un invio effettivo occorre un ambiente che esegua la funzione con le variabili SMTP configurate.

## Verifiche del redesign

Build TypeScript/Vite completata. Controllo browser Chromium su sette pagine a 320, 390, 768 e 1440 px: nessun overflow orizzontale rilevato nei testi e un H1 per pagina. Verificati numero di colonne del portfolio, puntini e indicatore delle gallerie, tastiera, swipe touch su servizi/metodo/progetti/team, filtri, dialog con chiusura Escape, tema chiaro/scuro, redirect da `/portfolio` e preselezione AI nel modulo. Verificata la gestione dell’errore di invio con endpoint simulato e pulsante WhatsApp. Nessuna email o messaggio WhatsApp reale inviato.

Il browser integrato non si è inizializzato; le verifiche sono state eseguite con un’istanza Chromium temporanea separata, senza modificare le dipendenze del progetto. Ispezionati screenshot mobile e desktop.

## Testi e layout mobile

I testi seguono problema riconoscibile → beneficio concreto → prova → invito all’azione. I numeri sono verificabili: conteggio dinamico dei progetti, tre membri del team e assenza di un canone Webbitz per il sito (realizzazione e campagne rimangono a preventivo). Non sono promesse percentuali di crescita o risultati economici non documentati. Il criterio di testi brevi, titoli informativi e contenuti facili da scorrere segue le [linee guida NN/g sulla scrittura web](https://www.nngroup.com/articles/be-succinct-writing-for-the-web/).

`MobileGallery` mantiene le griglie desktop e usa scorrimento nativo con snap fino a 680 px. Supporta swipe, puntini cliccabili, frecce tastiera, Home/End e movimento ridotto, senza avanzamento automatico. Il portfolio completo resta una griglia. I punti luce sono limitati all’introduzione, al modulo e all’invito finale.

Il comando `npm run lint` richiede `typescript-eslint`, già richiamato dalla configurazione ESLint ma assente dalle dipendenze del progetto.

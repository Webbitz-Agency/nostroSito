# Webbitz

Sito React, TypeScript e Vite. Mantiene l’identità originale: tema scuro e chiaro, gradienti arancioni, logo, navigazione flottante e schede arrotondate.

## Pagine e contenuti

- Home: introduzione, tre servizi, percorso sito + campagne, selezione lavori, mappa clienti e contatto.
- Servizi: sviluppo web, gestione campagne Meta e Google, sviluppo strumenti AI.
- Lavori: progetti con filtri per web, ads e AI. Schede con immagini e link diretti; i modal raccolgono descrizioni, attività svolte e obiettivi. I dati si trovano in `src/data/projects.ts`.
- Team: Diego, Tommaso e Francesco, con ruoli e avatar originali.
- Contatti: form unico e telefono **339 179 7616**.
- Privacy e termini: contenuti in `src/data/legal.json`.

I testi dei casi descrivono attività e obiettivi. Non dichiarano risultati misurati non forniti, spesa pubblicitaria o percentuali inventate. Non vengono mostrati pacchetti commerciali, listini, chat o form modali. I dettagli dei lavori si aprono in dialog accessibili. Lo switch Day/Night è nell’header su desktop e mobile.

## Sviluppo

```sh
npm install --legacy-peer-deps
npm run dev
npm run build
```

`npm run build` controlla TypeScript e genera `dist`. Il server Vite serve il frontend; non esegue le funzioni Vercel in `api/`.

## Form contatti

Il form invia una richiesta JSON a `POST /api/send-lead`. La funzione Vercel inoltra il messaggio a `webbitz.official@gmail.com` tramite il servizio SMTP già configurato nel progetto.

Impostare nell’ambiente Vercel:

- `GMAIL_USER`: account Gmail mittente.
- `GMAIL_APP_PASSWORD`: password per app dell’account mittente.

Le variabili sono documentate in `.env.example`. Nessuna credenziale va inserita nel frontend. Il form mostra la conferma solo se la funzione risponde con `success: true`; in caso di errore conserva i dati e permette di riprovare o chiamare.

Per provare l’interfaccia del form in locale, simulare l’endpoint senza inviare email reali. Per un invio effettivo occorre un ambiente che esegua la funzione con le variabili SMTP configurate.

## Verifiche

Build TypeScript/Vite e controlli browser su desktop e mobile: navigazione, filtri, validazione del form, conferma ed errori simulati, tema chiaro/scuro, dialog dei lavori, mappa e pagine legali.

Il comando `npm run lint` richiede `typescript-eslint`, già richiamato dalla configurazione ESLint ma assente dalle dipendenze del progetto.

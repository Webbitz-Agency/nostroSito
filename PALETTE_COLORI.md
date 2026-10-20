# Palette colori Webbitz

Fonte unica dei colori del sito. Le variabili CSS sono definite in `src/index.css` (`:root`), la scala Tailwind in `tailwind.config.js`.

## Palette base (brand)

| Nome | Hex | Variabile | Uso |
|---|---|---|---|
| Nero caldo | `#181818` | `--nero-caldo` | Sfondo tema scuro, testo tema chiaro |
| Arancio | `#e85002` | `--arancio` | Colore del brand: CTA, accenti, marker |
| Crema | `#ede6dd` | `--crema` | Sfondo tema chiaro |
| Grigio | `#797979` | `--grigio` | Testi secondari/muted, elementi neutri |
| Nero | `#000000` | `--nero` | Ombre, maschere, backdrop |
| Bianco | `#ffffff` | `--bianco` | Testo su scuro, card tema chiaro |
| Sabbia | `#c6ad96` | `--sabbia` | Filetti, testi caldi, aloni (le card servizi usano ancora il beige originale `#d9c3ab`, `--paper`) |

## Estensioni (coerenti con la base)

| Nome | Hex | Variabile | Perché |
|---|---|---|---|
| Nero caldo 2 | `#242220` | `--nero-caldo-2` | Secondo scuro: card e immagini sul tema scuro |
| Nero caldo 3 | `#2e2b28` | `--nero-caldo-3` | Hover delle card scure |
| Arancio hover | `#f26a1f` | `--arancio-hover` | Stato hover dei pulsanti arancio |
| Arancio testo | `#b83d00` | `--arancio-testo` | Arancio per testo piccolo su crema/sabbia (contrasto ~4.5:1; `#e85002` ne ha ~3:1) |
| Grigio scuro | `#5a5a5a` | `--grigio-scuro` | Testo secondario su crema (il `#797979` è troppo chiaro) |
| Rosso | `#d93a3a` | `--rosso` | Errori e avvisi; più freddo dell'arancio per non confondersi |
| Rosso scuro | `#b32626` | `--rosso-scuro` | Rosso su sfondi chiari |
| Verde | `#3aa76d` | `--verde` | Successo, pulsante WhatsApp |
| Verde scuro | `#1f7a4d` | `--verde-scuro` | Verde su sfondi chiari |

## Variabili di tema

| Variabile | Tema scuro | Tema chiaro |
|---|---|---|
| `--bg-primary` | Nero caldo | `#f5f1ec` (originale) |
| `--bg-secondary` | Nero caldo | `#eae4dd` (originale) |
| `--bg-card` | Nero caldo 2 | Bianco |
| `--bg-card-hover` | Nero caldo 3 | Sabbia 20% |
| `--text-primary` | Bianco | Nero caldo |
| `--text-secondary` | Bianco | Grigio scuro |
| `--text-muted` | Bianco | Grigio |
| `--accent-readable` | Arancio | Arancio testo |
| `--paper` | Sabbia | Sabbia |

## Regole

- Sfumature e trasparenze si ottengono con la **stessa tinta + alpha** (es. `#e8500233`), non con colori nuovi.
- Niente scale di arancio/rosso/blu: un solo arancio, con `hover` e `testo` come uniche varianti.
- I loghi dei clienti (`public/images/clients/*.svg`) mantengono i loro colori.
- Classi Tailwind: `primary-*` e `accent-*` mappano su arancio/sabbia/crema/nero caldo, `gray-*` sui neutri della palette, `red-500/600` e `green-500/600` sono rosso e verde.

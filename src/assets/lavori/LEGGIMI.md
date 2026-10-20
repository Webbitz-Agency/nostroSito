# Immagini dei lavori (card della vetrina)

Per ogni cliente servono **due file**, con il nome del cliente in minuscolo e trattini (lo "slug"):

| File | Cosa è |
|---|---|
| `nome-cliente.jpg` | Immagine di sfondo (verrà sfocata; si schiarisce al passaggio del mouse). Anche `.jpeg`, `.png`, `.webp`. Consigliato: verticale 4:5, almeno 1200 × 1500 px, sotto i 400 KB. |
| `nome-cliente-logo.svg` | Logo in **versione chiara** (bianco), sfondo trasparente. Meglio SVG, altrimenti `.png`/`.webp` trasparente. |

Se manca l'immagine di sfondo, la card usa l'anteprima attuale del sito (o uno sfondo scuro per i clienti senza anteprima).
Se manca il logo, nella card compare il nome del cliente in testo bianco.

Gli slug esatti sono nella lista che ti ha dato Claude (es. `la-vela-tirrenia.jpg` e `la-vela-tirrenia-logo.svg`).

import { Helmet } from "react-helmet-async";
import PageHeading from "../components/PageHeading";
import Features from "../components/sections/Features";
import BusinessApproach from "../components/sections/BusinessApproach";
export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Servizi | Webbitz</title>
        <meta
          name="description"
          content="Sviluppo siti web ed e-commerce, campagne Meta e Google Ads, assistenti AI e automazioni su misura. Scopri i servizi Webbitz."
        />
        <link rel="canonical" href="https://www.webbitz.it/services" />
      </Helmet>
      <PageHeading
        label="LE NOSTRE COMPETENZE"
        title="Cosa vuoi"
        accent="migliorare?"
        singleLine
        description="Più richieste dal sito, pubblicità con un obiettivo, meno tempo nelle attività ripetitive. Scegliamo insieme da dove partire, in base alla tua attività."
      />
      <Features heading={false} />
      <BusinessApproach />
    </div>
  );
}

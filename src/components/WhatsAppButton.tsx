import { FaWhatsapp } from "react-icons/fa";

/* Messaggio precompilato, personalizzato con il nome di chi riceve */
const message = (name: string) =>
  encodeURIComponent(
    `Ciao ${name}! Vorrei parlarti della mia attività e capire come puoi aiutarmi.`,
  );

const people = {
  diego: { name: "Diego", number: "393391797616" },
  francesco: { name: "Francesco", number: "393703374703" },
} as const;

type Person = keyof typeof people;

export const whatsappUrlForNumber = (number: string, name: string) =>
  `https://wa.me/${number}?text=${message(name)}`;

export const whatsappUrl = (person: Person = "diego") =>
  whatsappUrlForNumber(people[person].number, people[person].name);

export default function WhatsAppButton({
  className = "",
  label = "Scrivici su WhatsApp",
  person = "diego",
}: {
  className?: string;
  label?: string;
  person?: Person;
}) {
  return (
    <a
      className={`whatsapp-button ${className}`}
      href={whatsappUrl(person)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      <FaWhatsapp size={20} aria-hidden="true" />
      <span className="sr-only"> (si apre in una nuova scheda)</span>
    </a>
  );
}

/** Un pulsante per Diego e uno per Francesco (fragment: restano figli diretti del contenitore). */
export function WhatsAppButtons({
  className = "",
  labelFor = (name: string) => `Scrivi a ${name} su WhatsApp`,
}: {
  className?: string;
  labelFor?: (name: string) => string;
}) {
  return (
    <>
      {(Object.keys(people) as Person[]).map((person) => (
        <WhatsAppButton
          key={person}
          person={person}
          className={className}
          label={labelFor(people[person].name)}
        />
      ))}
    </>
  );
}

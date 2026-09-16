import { FaWhatsapp } from "react-icons/fa";

export const whatsappUrl =
  "https://wa.me/393391797616?text=" +
  encodeURIComponent(
    "Ciao Webbitz! Vorrei parlarvi della mia attività e capire come potete aiutarmi.",
  );
export default function WhatsAppButton({
  className = "",
  label = "Scrivici su WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      className={`whatsapp-button ${className}`}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      <FaWhatsapp size={20} aria-hidden="true" />
      <span className="sr-only"> (si apre in una nuova scheda)</span>
    </a>
  );
}

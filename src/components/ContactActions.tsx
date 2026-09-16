import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";
export default function ContactActions() {
  return (
    <div className="contact-actions">
      <Link to="/contact#richiesta" className="button">
        Richiedi una proposta <ArrowRight size={18} aria-hidden="true" />
      </Link>
      <WhatsAppButton />
    </div>
  );
}

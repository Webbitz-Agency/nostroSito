import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function SectionHeading({
  label,
  title,
  accent,
  link,
  linkText,
}: {
  label: string;
  title: string;
  accent?: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          <span />
          {label}
        </span>
        <h2>
          {title}
          {accent && (
            <>
              <br />
              <span className="section-accent">{accent}</span>
            </>
          )}
        </h2>
      </div>
      {link && (
        <Link className="text-link" to={link}>
          {linkText}
          <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

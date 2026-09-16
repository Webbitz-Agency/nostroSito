import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import clientLocations from "../../data/clientLocations";

export default function MapLocationSelect({
  selected,
  onChange,
}: {
  selected: number;
  onChange: (index: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const listId = useId();
  const label =
    selected < 0
      ? "Vista generale"
      : clientLocations[selected]?.name ?? "Vista generale";

  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent | TouchEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(index: number) {
    onChange(index);
    setOpen(false);
  }

  return (
    <div className="map-location-select" ref={root}>
      <button
        type="button"
        className="map-location-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{label}</span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>
      {open && (
        <ul
          id={listId}
          className="map-location-menu"
          role="listbox"
          aria-label="Località dei progetti"
        >
          <li>
            <button
              type="button"
              role="option"
              aria-selected={selected === -1}
              className={selected === -1 ? "is-active" : undefined}
              onClick={() => pick(-1)}
            >
              Vista generale
            </button>
          </li>
          {clientLocations.map((location, index) => (
            <li key={location.name}>
              <button
                type="button"
                role="option"
                aria-selected={selected === index}
                className={selected === index ? "is-active" : undefined}
                onClick={() => pick(index)}
              >
                {location.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

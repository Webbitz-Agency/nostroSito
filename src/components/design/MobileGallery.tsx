import {
  Children,
  useEffect,
  useId,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";

/** Slider a transform su mobile, griglia normale su desktop. */
export default function MobileGallery({
  children,
  className,
  label,
  labels,
}: {
  children: ReactNode;
  className: string;
  label: string;
  labels: string[];
}) {
  const slides = Children.toArray(children);
  const id = useId();
  const [active, setActive] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 680px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function goTo(index: number) {
    setActive(Math.max(0, Math.min(index, slides.length - 1)));
  }

  function keyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!mobile || event.target !== event.currentTarget) return;
    const destination = {
      ArrowLeft: active - 1,
      ArrowRight: active + 1,
      Home: 0,
      End: slides.length - 1,
    }[event.key];
    if (destination === undefined) return;
    event.preventDefault();
    goTo(destination);
  }

  function onSlideClick(index: number, event: MouseEvent<HTMLDivElement>) {
    if (!mobile) return;
    const target = event.target as HTMLElement;
    if (target.closest("a, button, input, select, textarea, label")) return;
    if (index === active) {
      goTo(active + 1 >= slides.length ? 0 : active + 1);
      return;
    }
    goTo(index);
  }

  const trackClass = [
    className,
    "gallery-track",
    mobile ? "gallery-track--slider" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const trackStyle = mobile
    ? {
        transform: `translate3d(-${active * 100}%, 0, 0)`,
      }
    : undefined;

  const track = (
    <div
      id={id}
      className={trackClass}
      style={trackStyle}
      onKeyDown={keyDown}
      aria-label={mobile ? `${label}: tocca una scheda o usa i pallini` : undefined}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="gallery-slide"
          role={mobile ? "group" : undefined}
          aria-hidden={mobile ? active !== index : undefined}
          aria-label={
            mobile
              ? `${index + 1} di ${slides.length}: ${labels[index]}`
              : undefined
          }
          onClick={(event) => onSlideClick(index, event)}
        >
          {slide}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`mobile-gallery${mobile ? " mobile-gallery--slider" : ""}`}
      role={mobile ? "region" : undefined}
      aria-roledescription={mobile ? "carosello" : undefined}
      aria-label={label}
    >
      {mobile ? <div className="gallery-viewport">{track}</div> : track}
      <div className="gallery-controls">
        <div
          className="gallery-dots"
          role="group"
          aria-label={`Scegli una scheda: ${label}`}
        >
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => goTo(index)}
              aria-controls={id}
              aria-label={`Mostra ${labels[index]} (${index + 1} di ${slides.length})`}
              aria-current={active === index ? "true" : undefined}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

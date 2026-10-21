import {
  Children,
  useEffect,
  useId,
  useRef,
  useState,
  type TouchEvent,
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
  const [drag, setDrag] = useState(0);
  const touch = useRef<{ x: number; y: number; horizontal: boolean | null } | null>(null);
  const swiped = useRef(false);

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

  /* Swipe con il dito: segue il movimento, poi scatta sulla scheda vicina */
  function touchStart(event: TouchEvent<HTMLDivElement>) {
    const point = event.touches[0];
    touch.current = { x: point.clientX, y: point.clientY, horizontal: null };
    swiped.current = false;
  }

  function touchMove(event: TouchEvent<HTMLDivElement>) {
    const start = touch.current;
    if (!start) return;
    const point = event.touches[0];
    const dx = point.clientX - start.x;
    const dy = point.clientY - start.y;
    if (start.horizontal === null && Math.abs(dx) + Math.abs(dy) > 8) {
      start.horizontal = Math.abs(dx) > Math.abs(dy);
    }
    if (!start.horizontal) return;
    const atEdge = (active === 0 && dx > 0) || (active === slides.length - 1 && dx < 0);
    setDrag(atEdge ? dx / 4 : dx);
  }

  function touchEnd() {
    const start = touch.current;
    touch.current = null;
    if (!start?.horizontal) return;
    swiped.current = true;
    if (drag < -50) goTo(active + 1);
    else if (drag > 50) goTo(active - 1);
    setDrag(0);
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
    if (swiped.current) {
      swiped.current = false;
      return;
    }
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
        transform: `translate3d(calc(-${active * 100}% + ${drag}px), 0, 0)`,
        transition: drag ? "none" : undefined,
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
      {mobile ? (
        <div
          className="gallery-viewport"
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
          onTouchCancel={touchEnd}
        >
          {track}
        </div>
      ) : (
        track
      )}
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

import { useEffect, useRef } from "react";

/** A lightweight, decorative network. Sleeps offscreen and respects reduced motion. */
export default function Constellation() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0,
      height = 0,
      frame = 0,
      visible = true,
      phase = 0;
    const points = Array.from({ length: 42 }, (_, i) => ({
      x: ((i * 73 + 19) % 101) / 101,
      y: ((i * 47 + 13) % 97) / 97,
      offset: i * 1.7,
    }));
    const paint = () => {
      ctx.clearRect(0, 0, width, height);
      const positions = points.map((p) => ({
        x: p.x * width + Math.sin(phase + p.offset) * 14,
        y: p.y * height + Math.cos(phase * 0.6 + p.offset) * 16,
      }));
      positions.forEach((p, i) => {
        ctx.fillStyle = "rgba(241,160,110,0.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, i % 4 === 0 ? 2 : 1, 0, Math.PI * 2);
        ctx.fill();
        positions.slice(i + 1).forEach((q) => {
          const distance = Math.hypot(p.x - q.x, p.y - q.y);
          if (distance < 155) {
            ctx.strokeStyle = `rgba(232,80,2,${(1 - distance / 155) * 0.22})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        });
      });
    };
    const tick = () => {
      phase += 0.003;
      paint();
      frame = requestAnimationFrame(tick);
    };
    const update = () => {
      cancelAnimationFrame(frame);
      paint();
      if (visible && !document.hidden && !media.matches)
        frame = requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(() => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      update();
    });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    resize.observe(canvas);
    observer.observe(canvas);
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return <canvas ref={ref} className="constellation" aria-hidden="true" />;
}

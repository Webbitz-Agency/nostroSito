import { useEffect, useRef } from "react";

type Vec = { x: number; y: number; z: number };

const TILT = -0.36;
const WORD = "mondo.";

const CONTINENTS: [number, number][][] = [
  [
    [-17, 21], [-16, 16], [-12, 10], [-5, 5], [0, 6], [8, 4], [9, -2],
    [12, -6], [14, -18], [19, -34], [26, -34], [32, -28], [33, -26],
    [36, -20], [32, -3], [43, -12], [51, 4], [49, 12], [43, 11],
    [39, 15], [32, 16], [30, 31], [25, 32], [18, 31], [10, 33],
    [9, 37], [-2, 36], [-6, 35], [-17, 27],
  ],
  [
    [-9, 37], [-9, 43], [-2, 43], [0, 49], [-5, 48], [-5, 54],
    [2, 51], [2, 53], [8, 55], [8, 58], [12, 55], [13, 46],
    [16, 45], [16, 41], [22, 41], [27, 42], [29, 46], [24, 38],
    [16, 38], [12, 36],
  ],
  [[-8, 54], [-6, 58], [-2, 59], [-1, 51], [-5, 50], [-10, 52]],
  [
    [28, 41], [36, 36], [44, 39], [48, 30], [56, 27], [61, 25],
    [67, 25], [72, 21], [77, 8], [80, 15], [88, 22], [97, 16],
    [104, 11], [109, 1], [117, 8], [122, 12], [122, 31], [128, 32],
    [132, 43], [141, 50], [142, 54], [135, 62], [128, 72], [90, 72],
    [80, 62], [75, 60], [66, 55], [60, 50], [50, 55], [40, 47],
  ],
  [
    [-168, 66], [-141, 60], [-130, 55], [-124, 48], [-124, 40],
    [-117, 33], [-110, 24], [-97, 16], [-90, 15], [-83, 22],
    [-81, 25], [-80, 32], [-74, 40], [-67, 45], [-60, 47],
    [-56, 51], [-70, 58], [-85, 66], [-95, 72], [-120, 70],
    [-140, 70], [-166, 69],
  ],
  [
    [-81, 1], [-73, 12], [-60, 9], [-51, 4], [-44, -2], [-35, -7],
    [-39, -16], [-49, -26], [-53, -35], [-68, -50], [-71, -55],
    [-68, -56], [-74, -44], [-77, -33], [-71, -18], [-81, -5],
  ],
  [
    [114, -22], [126, -14], [136, -13], [143, -12], [146, -19],
    [153, -27], [150, -38], [141, -38], [129, -32], [115, -34],
  ],
  [
    [-45, 60], [-51, 64], [-62, 71], [-72, 76], [-60, 83],
    [-40, 83], [-22, 70], [-30, 67],
  ],
];

const SPIN_MS = 3000;
const MORPH_MS = 720;

function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function globeAmount(elapsed: number, reduced: boolean) {
  if (reduced) return 0;
  if (elapsed <= SPIN_MS) return 1;
  if (elapsed >= SPIN_MS + MORPH_MS) return 0;
  return 1 - ease((elapsed - SPIN_MS) / MORPH_MS);
}

function project(lon: number, lat: number, rot: number): Vec {
  const λ = (lon * Math.PI) / 180 + rot;
  const φ = (lat * Math.PI) / 180;
  const x = Math.cos(φ) * Math.sin(λ);
  const y0 = Math.sin(φ);
  const z0 = Math.cos(φ) * Math.cos(λ);
  const c = Math.cos(TILT);
  const s = Math.sin(TILT);
  return { x, y: y0 * c - z0 * s, z: y0 * s + z0 * c };
}

function clipFront(points: Vec[]) {
  const out: Vec[] = [];
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const a = points[i];
    const b = points[(i + 1) % n];
    const aIn = a.z > 0.02;
    const bIn = b.z > 0.02;
    if (aIn) out.push(a);
    if (aIn !== bIn) {
      const u = a.z / (a.z - b.z);
      out.push({
        x: a.x + (b.x - a.x) * u,
        y: a.y + (b.y - a.y) * u,
        z: 0,
      });
    }
  }
  return out;
}

function withAlpha(color: string, alpha: number) {
  const raw = color.trim();
  if (raw.startsWith("rgba(")) {
    const [r, g, b] = raw.slice(5, -1).split(",").map((p) => p.trim());
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  if (raw.startsWith("rgb("))
    return raw.replace("rgb(", "rgba(").replace(")", `,${alpha})`);
  return raw;
}

export default function MondoGlobe() {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let start = performance.now();
    let font = "400 40px Unbounded, sans-serif";
    let color = "#fff";
    let baseline = 32;
    let textW = 0;
    let lastFontSize = 0;
    let done = false;

    const toScreen = (p: Vec, cx: number, cy: number, r: number) => [
      cx + p.x * r,
      cy - p.y * r,
    ];

    const layout = () => {
      const cs = getComputedStyle(wrap);
      color = cs.color;
      const size = parseFloat(cs.fontSize);
      font = `${cs.fontWeight || "400"} ${size}px Unbounded, sans-serif`;
      ctx.font = font;
      ctx.letterSpacing = `${size * -0.065}px`;
      const metrics = ctx.measureText(WORD);
      textW = metrics.width;
      baseline =
        metrics.fontBoundingBoxAscent ||
        metrics.actualBoundingBoxAscent ||
        size * 0.8;
      canvas.style.width = `${Math.ceil(textW)}px`;
    };

    const strokeGrid = (
      rot: number,
      cx: number,
      cy: number,
      r: number,
      front: boolean,
    ) => {
      ctx.beginPath();
      const band = (pts: Vec[]) => {
        let drawing = false;
        for (const p of pts) {
          const ok = front ? p.z > 0 : p.z <= 0;
          if (!ok) {
            drawing = false;
            continue;
          }
          const [sx, sy] = toScreen(p, cx, cy, r);
          if (!drawing) {
            ctx.moveTo(sx, sy);
            drawing = true;
          } else ctx.lineTo(sx, sy);
        }
      };
      for (let lon = -180; lon < 180; lon += 30) {
        const pts: Vec[] = [];
        for (let lat = -90; lat <= 90; lat += 6) pts.push(project(lon, lat, rot));
        band(pts);
      }
      for (let lat = -60; lat <= 60; lat += 30) {
        const pts: Vec[] = [];
        for (let lon = -180; lon <= 180; lon += 6) pts.push(project(lon, lat, rot));
        band(pts);
      }
      ctx.stroke();
    };

    const drawGlobe = (
      rot: number,
      cx: number,
      cy: number,
      r: number,
      alpha: number,
    ) => {
      if (alpha <= 0.02 || r < 2) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = withAlpha(color, 0.1);
      ctx.fill();

      ctx.strokeStyle = withAlpha(color, 0.16);
      ctx.lineWidth = Math.max(0.6, r * 0.012);
      strokeGrid(rot, cx, cy, r, false);

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = withAlpha(color, 0.94);
      CONTINENTS.forEach((poly) => {
        const pts = clipFront(poly.map(([lon, lat]) => project(lon, lat, rot)));
        if (pts.length < 3) return;
        ctx.beginPath();
        pts.forEach((p, i) => {
          const [sx, sy] = toScreen(p, cx, cy, r);
          if (i === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        });
        ctx.closePath();
        ctx.fill();
      });
      ctx.restore();

      ctx.strokeStyle = withAlpha(color, 0.32);
      ctx.lineWidth = Math.max(0.7, r * 0.014);
      strokeGrid(rot, cx, cy, r, true);

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(1.15, r * 0.04);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(
        cx - r * 0.28,
        cy - r * 0.32,
        r * 0.32,
        r * 0.18,
        -0.5,
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = withAlpha(color, 0.1);
      ctx.fill();
      ctx.restore();
    };

    const paint = (now: number) => {
      const cs = getComputedStyle(wrap);
      color = cs.color;
      ctx.clearRect(0, 0, width, height);
      ctx.font = font;
      ctx.letterSpacing = `${parseFloat(cs.fontSize) * -0.065}px`;
      ctx.fillStyle = color;
      ctx.textBaseline = "alphabetic";
      ctx.textAlign = "left";

      const elapsed = now - start;
      const m = globeAmount(elapsed, media.matches);
      const r = height * 0.48;
      const gx = r + height * 0.04;
      const gy = height * 0.52;
      const globeW = Math.max(r * 2 + height * 0.08, height);
      const shownW = globeW + (textW - globeW) * (1 - m);
      wrap.style.width = `${Math.max(1, shownW)}px`;

      let rot = -0.35;
      if (!media.matches) {
        if (elapsed <= SPIN_MS) rot = -0.35 + (elapsed / SPIN_MS) * Math.PI * 3;
        else rot = -0.35 + Math.PI * 3 + Math.min(1, (elapsed - SPIN_MS) / MORPH_MS) * 0.2;
      }

      ctx.save();
      ctx.globalAlpha = 1 - m;
      ctx.fillText(WORD, 0, baseline);
      ctx.restore();

      drawGlobe(rot, gx, gy, r * (0.4 + 0.6 * m), m);
    };

    const tick = (now: number) => {
      paint(now);
      if (now - start >= SPIN_MS + MORPH_MS) {
        done = true;
        paint(start + SPIN_MS + MORPH_MS);
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const run = () => {
      cancelAnimationFrame(frame);
      if (media.matches) {
        paint(start + SPIN_MS + MORPH_MS);
        return;
      }
      if (done) {
        paint(start + SPIN_MS + MORPH_MS);
        return;
      }
      if (visible && !document.hidden) frame = requestAnimationFrame(tick);
      else paint(performance.now());
    };

    const resize = () => {
      const size = parseFloat(getComputedStyle(wrap).fontSize);
      if (lastFontSize === size && canvas.width) return;
      layout();
      height = canvas.clientHeight || size;
      const drawW = Math.max(textW, size);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      lastFontSize = size;
      width = drawW;
      canvas.width = Math.max(1, drawW * ratio);
      canvas.height = Math.max(1, height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      run();
    };

    const ro = new ResizeObserver(resize);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      run();
    });

    ro.observe(wrap);
    io.observe(wrap);
    media.addEventListener("change", run);
    document.addEventListener("visibilitychange", run);
    void document.fonts.load("400 48px Unbounded").then(() => {
      lastFontSize = 0;
      resize();
    });
    resize();

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      media.removeEventListener("change", run);
      document.removeEventListener("visibilitychange", run);
    };
  }, []);

  return (
    <span ref={wrapRef} className="hero-mondo" aria-label="mondo.">
      <canvas ref={canvasRef} aria-hidden="true" />
    </span>
  );
}

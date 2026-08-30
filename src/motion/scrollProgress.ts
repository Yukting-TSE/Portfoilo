import { useEffect, useRef, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/**
 * Continuous scroll progress for a track element (SCROLL-BASED).
 * progress 0 → track top at viewport top
 * progress 1 → track bottom aligned with viewport bottom
 */
export function useScrollProgress<T extends HTMLElement = HTMLElement>(
  options: { onProgress?: (p: number) => void } = {}
) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  const onProgressRef = useRef(options.onProgress);
  onProgressRef.current = options.onProgress;

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const total = Math.max(el.offsetHeight - window.innerHeight, 1);
      const scrolled = -el.getBoundingClientRect().top;
      const p = clamp(scrolled / total, 0, 1);
      setProgress(p);
      onProgressRef.current?.(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, progress };
}

/** Imperative scroll progress (for RAF loops that skip React state) */
export function readScrollProgress(el: HTMLElement | null) {
  if (!el) return 0;
  const total = Math.max(el.offsetHeight - window.innerHeight, 1);
  const scrolled = -el.getBoundingClientRect().top;
  return clamp(scrolled / total, 0, 1);
}

import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLElement>(
  options: Options = {}
) {
  const { threshold = 0.15, rootMargin = "0px 0px -8% 0px", once = true } =
    options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

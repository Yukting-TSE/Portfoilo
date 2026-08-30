import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { useTriggeredTypewriter } from "../hooks/useTriggeredTypewriter";
import { aboutMotion } from "../motion/motionConfig";
import { readScrollProgress } from "../motion/scrollProgress";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/** Cubic-bezier-like ease-in-out (≈ cubic-bezier(0.42, 0, 0.58, 1)) */
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function stageT(p: number, start: number, end: number) {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return easeInOutCubic((p - start) / (end - start));
}

/**
 * Title + big image already peeking from below; scroll rises + scales into place (ease-in-out).
 * Then left type → mid image ↑ → small image ↑ → right type.
 */
export function AboutIntro() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [leftOn, setLeftOn] = useState(false);
  const [rightOn, setRightOn] = useState(false);
  const leftLatched = useRef(false);
  const rightLatched = useRef(false);

  const leftType = useTriggeredTypewriter(profile.aboutLeft, leftOn, {
    speed: aboutMotion.typeSpeed,
  });
  const rightType = useTriggeredTypewriter(profile.aboutRight, rightOn, {
    speed: aboutMotion.typeSpeed,
  });

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let running = true;

    const layout = (p: number) => {
      const pin = pinRef.current;
      if (!pin) return;
      const vh = pin.clientHeight;
      const vw = pin.clientWidth;

      const ranges = [
        aboutMotion.stages.bigIn,
        aboutMotion.stages.midIn,
        aboutMotion.stages.smallIn,
      ];

      aboutMotion.images.forEach((spec, i) => {
        const el = imageRefs.current[i];
        if (!el) return;

        const t = reduced ? 1 : stageT(p, ranges[i].start, ranges[i].end);
        const scale = spec.fromScale + (1 - spec.fromScale) * t;

        const restTop = (spec.top / 100) * vh;
        const startTop = (spec.fromTop / 100) * vh;
        const cy = startTop + (restTop - startTop) * t;

        const baseW = (spec.width / 100) * vw;
        const fullW = vw < 768 ? Math.min(baseW * 1.55, vw * 0.52) : baseW;
        const w = fullW * scale;
        const h = w / spec.aspect;
        const left = (spec.left / 100) * vw - w / 2;

        const show =
          spec.visibleFromStart || t > 0.001 || reduced ? 1 : 0;

        el.style.width = `${w}px`;
        el.style.height = `${h}px`;
        el.style.opacity = String(show);
        el.style.transform = `translate3d(${left}px, ${cy - h / 2}px, 0)`;
      });
    };

    const syncTriggers = (p: number) => {
      if (reduced) {
        if (!leftLatched.current) {
          leftLatched.current = true;
          setLeftOn(true);
        }
        if (!rightLatched.current) {
          rightLatched.current = true;
          setRightOn(true);
        }
        return;
      }

      if (p < 0.05) {
        leftLatched.current = false;
        rightLatched.current = false;
        setLeftOn(false);
        setRightOn(false);
      } else {
        if (p >= aboutMotion.stages.leftType && !leftLatched.current) {
          leftLatched.current = true;
          setLeftOn(true);
        }
        if (p >= aboutMotion.stages.rightType && !rightLatched.current) {
          rightLatched.current = true;
          setRightOn(true);
        }
      }
    };

    const tick = () => {
      if (!running) return;
      const p = clamp(readScrollProgress(trackRef.current), 0, 1);
      layout(p);
      syncTriggers(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      id="about"
      ref={trackRef}
      className="relative z-[1] scroll-mt-16 bg-black lg:scroll-mt-20"
      style={{ height: `${aboutMotion.trackVh}vh` }}
    >
      <section
        ref={pinRef}
        className="sticky top-0 isolate h-[100svh] overflow-hidden bg-black"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          {aboutMotion.images.map((spec, i) => (
            <div
              key={spec.src}
              ref={(node) => {
                imageRefs.current[i] = node;
              }}
              className="absolute left-0 top-0 overflow-hidden will-change-transform"
              style={{
                background: spec.tone,
                opacity: spec.visibleFromStart ? 1 : 0,
              }}
            >
              <img
                src={spec.src}
                alt=""
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between px-5 pb-16 pt-16 mix-blend-difference sm:px-8 sm:pb-20 sm:pt-[4.5rem] lg:px-10 lg:pb-24 lg:pt-20">
          <h2 className="relative z-20 max-w-[22ch] font-[family-name:var(--font-display)] text-[clamp(2.2rem,5.1vw,4.125rem)] font-bold leading-[1.12] tracking-[-0.035em] text-white sm:max-w-[24ch] lg:max-w-[28ch]">
            {profile.aboutHeadline}
          </h2>

          <div className="relative z-20 grid items-end gap-10 pb-2 lg:grid-cols-[minmax(0,1fr)_minmax(10rem,0.55fr)_minmax(0,1fr)] lg:gap-10">
            <p
              className="min-h-[7.5em] max-w-[36ch] text-[clamp(0.95rem,1.25vw,1.15rem)] font-normal leading-[1.65] tracking-[-0.01em] text-white lg:justify-self-start"
              aria-live="polite"
            >
              {leftType.displayed}
              {leftOn && !leftType.done && (
                <span
                  className="ml-[2px] inline-block h-[1em] w-[2px] align-middle bg-white"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              )}
            </p>
            <div className="hidden lg:block" aria-hidden />
            <p
              className="min-h-[7.5em] max-w-[36ch] text-[clamp(0.95rem,1.25vw,1.15rem)] font-normal leading-[1.65] tracking-[-0.01em] text-white lg:justify-self-end"
              aria-live="polite"
            >
              {rightType.displayed}
              {rightOn && !rightType.done && (
                <span
                  className="ml-[2px] inline-block h-[1em] w-[2px] align-middle bg-white"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

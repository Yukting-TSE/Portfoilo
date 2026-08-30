import { useEffect, useRef } from "react";
import { motion } from "./motionConfig";

export type PointerMotionState = {
  pointerX: number;
  pointerY: number;
  normalizedX: number;
  normalizedY: number;
  velocityX: number;
  velocityY: number;
  targetX: number;
  targetY: number;
  currentX: number;
  currentY: number;
  smoothedVelocityX: number;
  smoothedVelocityY: number;
};

const empty: PointerMotionState = {
  pointerX: 0,
  pointerY: 0,
  normalizedX: 0,
  normalizedY: 0,
  velocityX: 0,
  velocityY: 0,
  targetX: 0,
  targetY: 0,
  currentX: 0,
  currentY: 0,
  smoothedVelocityX: 0,
  smoothedVelocityY: 0,
};

type Options = {
  maxX?: number;
  maxY?: number;
  ease?: number;
  enabled?: boolean;
  onFrame?: (state: PointerMotionState) => void;
};

/**
 * POINTER + inertia physics. One RAF loop; current lags behind target.
 */
export function usePointerMotion(options: Options = {}) {
  const state = useRef<PointerMotionState>({ ...empty });
  const opts = useRef(options);
  opts.current = options;

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse || options.enabled === false) return;

    let prevX = window.innerWidth / 2;
    let prevY = window.innerHeight / 2;
    let raf = 0;
    let running = true;

    const onMove = (e: PointerEvent) => {
      const s = state.current;
      s.pointerX = e.clientX;
      s.pointerY = e.clientY;
      s.normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      s.normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      s.velocityX = e.clientX - prevX;
      s.velocityY = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;

      const maxX = opts.current.maxX ?? motion.maxPointerMove;
      const maxY = opts.current.maxY ?? motion.maxPointerMove * 0.65;
      s.targetX = s.normalizedX * maxX;
      s.targetY = s.normalizedY * maxY;
    };

    const tick = () => {
      if (!running) return;
      const s = state.current;
      const ease = opts.current.ease ?? motion.pointerEase;
      s.currentX += (s.targetX - s.currentX) * ease;
      s.currentY += (s.targetY - s.currentY) * ease;
      s.smoothedVelocityX += (s.velocityX - s.smoothedVelocityX) * 0.1;
      s.smoothedVelocityY += (s.velocityY - s.smoothedVelocityY) * 0.1;
      s.velocityX *= 0.85;
      s.velocityY *= 0.85;
      opts.current.onFrame?.(s);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [options.enabled]);

  return state;
}

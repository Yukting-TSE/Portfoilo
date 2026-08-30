import { useEffect, useRef, useState } from "react";

const SCRUB_SENSITIVITY = 0.8;
/** Video-seconds advanced per real second when auto-playing */
const AUTO_SPEED = 0.35;

/**
 * Hero video: mouse scrub + continuous ping-pong playback
 * (forward → reverse → forward…) even when the cursor is still.
 */
export function useVideoScrub(src: string) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let prevX: number | null = null;
    let targetTime = 0;
    let direction = 1;
    let seeking = false;
    let ready = false;
    let raf = 0;
    let lastTs = 0;
    let running = true;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v));

    const applySeek = () => {
      if (!ready || seeking) return;
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      const next = clamp(targetTime, 0, duration);
      if (Math.abs(video.currentTime - next) < 0.01) return;
      seeking = true;
      try {
        video.currentTime = next;
      } catch {
        seeking = false;
      }
    };

    const bounce = (duration: number) => {
      if (targetTime >= duration) {
        targetTime = duration;
        direction = -1;
      } else if (targetTime <= 0) {
        targetTime = 0;
        direction = 1;
      }
    };

    const onMeta = () => {
      ready = true;
      const start = Math.min(
        video.duration * 0.35,
        Math.max(video.duration - 0.05, 0)
      );
      targetTime = start;
      direction = 1;
      try {
        video.currentTime = start;
      } catch {
        video.currentTime = 0;
        targetTime = 0;
      }
      lastTs = performance.now();
    };

    const onSeeked = () => {
      seeking = false;
      setVisible(true);
      applySeek();
    };

    const onLoadedData = () => {
      setVisible(true);
    };

    const onMove = (e: MouseEvent) => {
      if (!ready) return;
      if (prevX === null) {
        prevX = e.clientX;
        return;
      }
      const delta = e.clientX - prevX;
      prevX = e.clientX;
      if (delta === 0) return;

      const duration = video.duration || 0;
      if (duration <= 0) return;

      // Scrub follows mouse; direction follows scrub so auto continues that way
      if (delta > 0) direction = 1;
      else if (delta < 0) direction = -1;

      targetTime = clamp(
        targetTime + (delta / window.innerWidth) * SCRUB_SENSITIVITY * duration,
        0,
        duration
      );
      bounce(duration);
      applySeek();
    };

    const tick = (ts: number) => {
      if (!running) return;
      raf = requestAnimationFrame(tick);

      if (!ready || reduced || document.hidden) {
        lastTs = ts;
        return;
      }

      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) {
        lastTs = ts;
        return;
      }

      const dt = Math.min(0.064, (ts - lastTs) / 1000 || 0);
      lastTs = ts;
      if (dt <= 0) return;

      targetTime += direction * AUTO_SPEED * dt;
      bounce(duration);
      applySeek();
    };

    const onVisibility = () => {
      lastTs = performance.now();
    };

    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    // Keep element paused — we drive time manually for reverse support
    video.pause();
    if (video.src !== src) {
      video.src = src;
    }
    video.load();

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("seeked", onSeeked);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [src]);

  return { videoRef, visible };
}

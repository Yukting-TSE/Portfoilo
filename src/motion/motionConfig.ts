/**
 * Central motion tokens — calibrate here, not in JSX.
 */

import { publicUrl } from "../lib/publicUrl";

export const MOTION_DEBUG = false;

export const motion = {
  easeOut: "outExpo",
  easeInOut: "inOutCubic",
  easeSoft: "outQuad",

  fast: 300,
  medium: 600,
  slow: 1000,
  reveal: 1100,

  pointerEase: 0.08,
  parallaxEase: 0.06,

  maxPointerMove: 32,
  maxParallax: 24,
} as const;

/**
 * About scroll choreography (progress 0 → 1 while pinned):
 * 1. Title + big image already visible → scroll scale-up (ease-in-out)
 * 2. Left copy typewriter
 * 3. Mid image scale-in & settle
 * 4. Small image scale-in & settle
 * 5. Right copy typewriter
 */
export const aboutMotion = {
  trackVh: 420,

  stages: {
    /** Big image grows from already-visible start → rest */
    bigIn: { start: 0, end: 0.22 },
    leftType: 0.24,
    midIn: { start: 0.38, end: 0.54 },
    smallIn: { start: 0.58, end: 0.74 },
    rightType: 0.78,
  },

  typeSpeed: 22,

  /**
   * Layout in % of pin viewport.
   * Big starts visible under the title at fromScale / fromTop,
   * then eases to width / top at scale 1.
   */
  images: [
    {
      src: publicUrl("images/about/big.jpg"),
      left: 52,
      top: 52,
      /** Start lower in viewport so it rises upward into place */
      fromTop: 92,
      width: 28.6,
      aspect: 3 / 4,
      fromScale: 0.58,
      tone: "#e8e4de",
      /** Already peeking from below when title shows */
      visibleFromStart: true,
    },
    {
      src: publicUrl("images/about/mid.jpg"),
      left: 62,
      top: 28,
      fromTop: 88,
      width: 15,
      aspect: 4 / 3,
      fromScale: 0.55,
      tone: "#d4cfc7",
      visibleFromStart: false,
    },
    {
      src: publicUrl("images/about/small.png"),
      left: 36,
      top: 62,
      fromTop: 95,
      width: 11,
      aspect: 3 / 4,
      fromScale: 0.55,
      tone: "#f0ebe4",
      visibleFromStart: false,
    },
  ] as const,
} as const;

export type AboutMotionConfig = typeof aboutMotion;

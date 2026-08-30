/**
 * About scroll sequence
 *
 * | Beat | Input  | Action                          | Progress window |
 * |------|--------|---------------------------------|-----------------|
 * | 1    | scroll | Big image slides up & settles   | 0.02 → 0.18     |
 * | 2    | scroll | Left copy typewriter starts     | ≥ 0.20          |
 * | 3    | scroll | Mid image slides in & settles   | 0.38 → 0.52     |
 * | 4    | scroll | Small image slides in & settles | 0.58 → 0.72     |
 * | 5    | scroll | Right copy typewriter starts    | ≥ 0.76          |
 */

export const aboutMotionTable = [
  {
    element: "Big image",
    input: "scroll",
    property: "translateY",
    category: "SCROLL-BASED",
  },
  {
    element: "Left copy",
    input: "scroll latch",
    property: "typewriter",
    category: "TIME-BASED",
  },
  {
    element: "Mid image",
    input: "scroll",
    property: "translateY",
    category: "SCROLL-BASED",
  },
  {
    element: "Small image",
    input: "scroll",
    property: "translateY",
    category: "SCROLL-BASED",
  },
  {
    element: "Right copy",
    input: "scroll latch",
    property: "typewriter",
    category: "TIME-BASED",
  },
] as const;

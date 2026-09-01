export type DetailMetaItem = {
  label: string;
  value: string;
};

export type DetailFigure = {
  src: string;
  alt?: string;
  caption?: string;
  /** Short description under the figure (e.g. interaction feature) */
  body?: string;
  /** Relative display scale, e.g. 0.3 */
  scale?: number;
  /** CSS invert filter for dark backgrounds */
  invert?: boolean;
  /** Render as muted video; plays when scrolled into view */
  video?: boolean;
  /** Animated GIF; loads/plays only when scrolled into view */
  gif?: boolean;
  /** Cover/hero fit: natural keeps original aspect (no crop) */
  fit?: "cover" | "natural";
};

export type DetailTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type DetailPrototype = {
  index: string;
  title: string;
  device?: string;
  based?: string;
  bullets?: string[];
  body?: string[];
  figures?: DetailFigure[];
};

export type DetailSection =
  | {
      type: "prose";
      title?: string;
      paragraphs: string[];
      /** Body weight; default bold to match case-study style */
      weight?: "bold" | "normal";
    }
  | { type: "meta"; items: DetailMetaItem[] }
  | {
      type: "figure";
      figures: DetailFigure[];
      fullWidth?: boolean;
      /** Equal-width columns for figures (e.g. 3 GIF demos) */
      columns?: 2 | 3;
    }
  | {
      type: "featureGrid";
      /** Desktop column count; default 3 */
      columns?: 2 | 3;
      items: {
        figure: DetailFigure;
        title?: string;
        body: string;
      }[];
    }
  | { type: "table"; table: DetailTable }
  | {
      type: "goals";
      highlight?: boolean;
      /** Tighter divider spacing between items */
      compact?: boolean;
      items: { title: string; body: string; figure?: DetailFigure }[];
    }
  | { type: "prototype"; prototype: DetailPrototype }
  | { type: "part"; number: string; title: string; subtitle?: string }
  /** Explicit two-column block (e.g. Research Background) */
  | {
      type: "columns";
      /** Optional large section title above / in the left column */
      heading?: string;
      /** Vertical alignment between columns; default start */
      align?: "start" | "end";
      left: DetailSection[];
      right: DetailSection[];
    };

export type ProjectDetail = {
  cover?: DetailFigure;
  /** Small label above the left title, e.g. "Case Study" */
  eyebrow?: string;
  /** Short left headline; falls back to project.title when omitted */
  headline?: string;
  /** Large right-column title, e.g. "Report 2026." */
  secondaryTitle?: string;
  /** Left meta rows (Client / Year / Industry style) */
  meta?: DetailMetaItem[];
  /** Right meta row aligned with the first left meta row */
  services?: DetailMetaItem;
  lead: string[];
  sections: DetailSection[];
  closing?: string;
};

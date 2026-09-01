import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MutableRefObject,
  type RefObject,
} from "react";
import { Link, useParams } from "react-router-dom";
import { ContactOverlay } from "../components/ContactOverlay";
import { Footer } from "../components/Footer";
import { MobileMenu } from "../components/MobileMenu";
import { Navigation } from "../components/Navigation";
import { caseDetailFor, findProject } from "../data/projects";
import type {
  DetailFigure,
  DetailPrototype,
  DetailSection,
  DetailTable,
  ProjectDetail,
} from "../data/projectDetail";
import { useInView } from "../hooks/useInView";

export function ProjectPage() {
  const { id = "" } = useParams();
  const found = findProject(id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [navOpacity, setNavOpacity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || contactOpen ? "hidden" : "";
  }, [menuOpen, contactOpen]);

  useEffect(() => {
    const update = () => {
      const contact = document.getElementById("contact");
      if (!contact) {
        setNavOpacity(1);
        return;
      }
      const { top } = contact.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const next = Math.min(1, Math.max(0, top / vh));
      setNavOpacity(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [found]);

  if (!found) {
    return (
      <main className="flex min-h-[100svh] flex-col items-center justify-center bg-black px-6 text-white">
        <p className="mb-6 text-white/70">Project not found.</p>
        <Link to="/" className="underline underline-offset-4 hover:opacity-60">
          ← Back home
        </Link>
      </main>
    );
  }

  const { project } = found;

  return (
    <>
      <Navigation
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        opacity={navOpacity}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ContactOverlay
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <main className="min-h-[100svh] bg-black pt-20 text-[var(--fg)] sm:pt-24">
        <CaseStudy title={project.title} detail={caseDetailFor(project)} />
      </main>

      <Footer onOpenContact={() => setContactOpen(true)} />
    </>
  );
}

function CaseStudy({
  title,
  detail,
}: {
  title: string;
  detail: ProjectDetail;
}) {
  const headline = detail.headline ?? title;
  const meta = detail.meta ?? [];
  const bodySections = detail.sections.filter((s) => s.type !== "meta");

  return (
    <article className="pb-28">
      <div className="px-5 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
        <div className="grid gap-x-12 gap-y-0 lg:grid-cols-2 xl:gap-x-20">
          <div>
            <p className="mb-4 text-[0.85rem] font-bold tracking-[0.02em] text-white sm:mb-5 sm:text-[0.9rem]">
              {detail.eyebrow ?? "Case Study"}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.15rem,4.4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em] text-white">
              {headline}
            </h1>
          </div>

          <div className="hidden lg:block" aria-hidden />

          {meta.length > 0 && (
            <dl className="mt-10 w-full max-w-xl sm:mt-12">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[7.5rem_minmax(0,1fr)] items-baseline gap-3 border-t border-white/25 py-3 text-[0.88rem] font-bold text-white last:border-b sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:text-[0.95rem]"
                >
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div
            className={`w-full max-w-xl space-y-5 text-[0.95rem] font-bold leading-[1.7] tracking-[0.035em] text-white sm:text-[1.05rem] ${
              meta.length > 0 ? "mt-10 sm:mt-12" : "mt-8"
            }`}
          >
            {detail.lead.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {detail.cover && (
        <div className="mt-14 w-full px-5 sm:mt-16 sm:px-8 lg:mt-20 lg:px-12">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={detail.cover.src}
              alt={detail.cover.alt ?? ""}
              className={
                detail.cover.fit === "natural"
                  ? "h-auto w-full"
                  : "aspect-video h-auto w-full object-cover"
              }
            />
          </div>
        </div>
      )}

      <div className="mt-16 space-y-14 px-5 sm:px-8 lg:mt-20 lg:space-y-16 lg:px-12">
        {bodySections.map((section, i) => (
          <BodySection key={`${section.type}-${i}`} section={section} />
        ))}
      </div>

      {detail.closing && (
        <p className="mx-auto mt-28 max-w-3xl px-5 text-center font-[family-name:var(--font-display)] text-[clamp(1.15rem,2.5vw,1.55rem)] font-bold tracking-[-0.02em] text-white sm:px-8">
          {detail.closing}
        </p>
      )}
    </article>
  );
}

function BodySection({ section }: { section: DetailSection }) {
  if (section.type === "columns") {
    const isEnd = section.align === "end";
    return (
      <div
        className={`grid gap-x-12 gap-y-12 lg:grid-cols-2 xl:gap-x-20 ${
          isEnd ? "lg:items-stretch" : "lg:items-start"
        }`}
      >
        <div
          className={
            isEnd
              ? "flex w-full max-w-xl flex-col gap-12"
              : "w-full max-w-xl space-y-10"
          }
        >
          {section.heading && (
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.65rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.045em] text-white">
              {section.heading}
            </h2>
          )}
          <div className={`space-y-10 ${isEnd ? "mt-auto" : ""}`}>
            {section.left.map((child, i) => (
              <SectionBlock key={`L-${child.type}-${i}`} section={child} />
            ))}
          </div>
        </div>
        <div className="space-y-12">
          {section.right.map((child, i) => (
            <SectionBlock key={`R-${child.type}-${i}`} section={child} />
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "prototype") {
    return (
      <div className="relative grid items-start gap-x-12 gap-y-12 -mt-24 pt-24 lg:-mt-28 lg:grid-cols-2 lg:pt-28 xl:gap-x-20">
        {/* Divider centered in the gap, full width across both columns */}
        <div
          className="pointer-events-none absolute top-12 right-0 left-0 h-px bg-white/25 lg:top-14"
          aria-hidden
        />
        <div className="w-full max-w-xl">
          <PrototypeText prototype={section.prototype} />
        </div>
        {section.prototype.figures && section.prototype.figures.length > 0 && (
          <FigureRow figures={section.prototype.figures} />
        )}
      </div>
    );
  }

  if (section.type === "figure") {
    const stackGap =
      section.figures.length > 1 ? "space-y-5" : "space-y-12";
    if (section.columns && section.columns > 1) {
      return (
        <div
          className={`grid w-full gap-x-6 gap-y-10 sm:gap-x-8 ${
            section.columns === 3
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {section.figures.map((fig) => (
            <FigureBlock key={fig.src} figure={fig} />
          ))}
        </div>
      );
    }
    if (section.fullWidth) {
      return (
        <div className={`w-full ${stackGap}`}>
          {section.figures.map((fig) => (
            <FigureBlock key={fig.src} figure={fig} />
          ))}
        </div>
      );
    }
    return (
      <div className="grid items-start gap-x-12 lg:grid-cols-2 xl:gap-x-20">
        <div className="hidden lg:block" aria-hidden />
        <div className={stackGap}>
          {section.figures.map((fig) => (
            <FigureBlock key={fig.src} figure={fig} />
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "part") {
    return <PartHeader section={section} />;
  }

  if (section.type === "goals" && section.highlight) {
    return (
      <div className="w-full max-w-3xl">
        <SectionBlock section={section} />
      </div>
    );
  }

  return (
    <div className="grid items-start gap-x-12 lg:grid-cols-2 xl:gap-x-20">
      <div className="w-full max-w-xl">
        <SectionBlock section={section} />
      </div>
      <div className="hidden lg:block" aria-hidden />
    </div>
  );
}

function PartHeader({
  section,
}: {
  section: Extract<DetailSection, { type: "part" }>;
}) {
  return (
    <header className="w-full max-w-xl pt-6 lg:pt-8">
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.65rem,3.2vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.045em] text-white">
        {section.title}
      </h2>
    </header>
  );
}

function SectionBlock({ section }: { section: DetailSection }) {
  switch (section.type) {
    case "part":
      return <PartHeader section={section} />;

    case "meta":
    case "columns":
      return null;

    case "prose":
      return (
        <section>
          {section.title && (
            <h3 className="mb-2 font-[family-name:var(--font-display)] text-[clamp(0.95rem,1.5vw,1.15rem)] font-bold tracking-[-0.02em] text-white">
              {section.title}
            </h3>
          )}
          <div className="space-y-3.5">
            {section.paragraphs.map((p, i) => (
              <p
                key={`${i}-${p.slice(0, 24)}`}
                className={`text-[0.8rem] leading-[1.75] tracking-[0.035em] text-white sm:text-[0.88rem] ${
                  section.weight === "normal" ? "font-normal" : "font-bold"
                } ${p.includes("\n") ? "whitespace-pre-line" : ""}`}
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      );

    case "figure":
      return (
        <div
          className={
            section.figures.length > 1 ? "space-y-5" : "space-y-12"
          }
        >
          {section.figures.map((fig) => (
            <FigureBlock key={fig.src} figure={fig} />
          ))}
        </div>
      );

    case "table":
      return <TableBlock table={section.table} />;

    case "goals": {
      const compact = Boolean(section.compact);
      return (
        <section
          className={
            section.highlight
              ? "space-y-6 rounded-2xl border border-white/30 bg-white/[0.06] px-5 py-6 sm:px-6 sm:py-7"
              : compact
                ? "space-y-0"
                : "space-y-10"
          }
        >
          {section.items.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className={
                section.highlight
                  ? "border-t border-white/20 pt-5 first:border-t-0 first:pt-0"
                  : compact
                    ? "border-t border-white/25 py-3.5 first:border-t-0 first:pt-0"
                    : "border-t border-white/25 pt-6"
              }
            >
              <h3
                className={`font-[family-name:var(--font-display)] text-[1rem] font-bold tracking-[-0.02em] text-white ${
                  compact ? "mb-1.5" : "mb-3"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-[0.8rem] font-bold leading-[1.7] tracking-[0.035em] text-white sm:text-[0.88rem]">
                {item.body}
              </p>
            </div>
          ))}
        </section>
      );
    }

    case "prototype":
      return <PrototypeText prototype={section.prototype} />;

    default:
      return null;
  }
}

function FigureRow({ figures }: { figures: DetailFigure[] }) {
  const sideBySide = figures.length > 1 && figures.some((f) => (f.scale ?? 1) < 1);
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLImageElement>(null);
  const [pairHeight, setPairHeight] = useState<number | null>(null);
  const [thumbWidth, setThumbWidth] = useState<number | null>(null);

  const thumb = sideBySide
    ? figures.find((f) => (f.scale ?? 1) < 1)
    : undefined;
  const main = sideBySide
    ? figures.find((f) => (f.scale ?? 1) >= 1) ?? figures[figures.length - 1]
    : undefined;

  useEffect(() => {
    if (!sideBySide) {
      setPairHeight(null);
      setThumbWidth(null);
      return;
    }
    const mainEl = mainBoxRef.current;
    const thumbEl = thumbRef.current;
    if (!mainEl) return;

    const update = () => {
      const next = mainEl.clientHeight;
      if (next > 0) setPairHeight(next);
      if (thumbEl && thumbEl.clientWidth > 0) {
        setThumbWidth(thumbEl.clientWidth);
      }
    };

    update();
    thumbEl?.addEventListener("load", update);
    const ro = new ResizeObserver(update);
    ro.observe(mainEl);
    if (thumbEl) ro.observe(thumbEl);
    return () => {
      thumbEl?.removeEventListener("load", update);
      ro.disconnect();
    };
  }, [sideBySide, figures]);

  if (!sideBySide || !thumb || !main) {
    return (
      <div className="space-y-12">
        {figures.map((fig) => (
          <FigureBlock key={fig.src} figure={fig} />
        ))}
      </div>
    );
  }

  const captionClass =
    "text-[0.7rem] font-bold italic leading-[1.5] tracking-[0.02em] text-white/55";

  return (
    <div className="relative w-full overflow-visible">
      <div className="relative w-full">
        <div className="mb-3 w-fit lg:absolute lg:top-0 lg:right-full lg:mb-0 lg:mr-3 xl:mr-4">
          <div className="overflow-hidden rounded-2xl">
            <img
              ref={thumbRef}
              src={thumb.src}
              alt={thumb.alt ?? thumb.caption ?? ""}
              className="block h-40 w-auto max-w-none object-contain object-top lg:h-[var(--pair-h,auto)]"
              style={{
                ...(thumb.invert ? { filter: "invert(1)" } : null),
                ...(pairHeight
                  ? ({ "--pair-h": `${pairHeight}px` } as CSSProperties)
                  : null),
              }}
              loading="lazy"
            />
          </div>
        </div>

        <div
          ref={mainBoxRef}
          className={`overflow-hidden rounded-2xl`}
        >
          {main.video ? (
            <InViewVideo
              src={main.src}
              className="block h-auto w-full object-contain"
            />
          ) : main.gif ? (
            <InViewGif
              src={main.src}
              alt={main.alt ?? main.caption ?? ""}
              className="block h-full w-full object-contain"
            />
          ) : (
            <img
              src={main.src}
              alt={main.alt ?? main.caption ?? ""}
              className="block h-auto w-full object-contain"
              style={main.invert ? { filter: "invert(1)" } : undefined}
              loading="lazy"
            />
          )}
        </div>
      </div>

      {(thumb.caption || main.caption) && (
        <div className="relative mt-3 flex w-full items-start gap-3 lg:gap-0">
          {thumb.caption && (
            <figcaption
              className={`shrink-0 lg:absolute lg:right-full lg:mr-3 xl:mr-4 ${captionClass}`}
              style={thumbWidth ? { width: thumbWidth } : undefined}
            >
              {thumb.caption}
            </figcaption>
          )}
          {main.caption && (
            <figcaption className={`min-w-0 flex-1 ${captionClass}`}>
              {main.caption}
            </figcaption>
          )}
        </div>
      )}
    </div>
  );
}

function InViewGif({
  src,
  alt,
  className,
  mediaRef,
}: {
  src: string;
  alt?: string;
  className?: string;
  mediaRef?: RefObject<HTMLImageElement | null>;
}) {
  const { ref: wrapRef, inView } = useInView<HTMLDivElement>({
    once: false,
    threshold: 0.35,
  });
  const [poster, setPoster] = useState<string | null>(null);
  const [ratio, setRatio] = useState<number | null>(null);

  // Capture a still first frame so the image stays visible when off-screen
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (cancelled) return;
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx || img.naturalWidth === 0) {
          setPoster(src);
          return;
        }
        ctx.drawImage(img, 0, 0);
        setPoster(canvas.toDataURL("image/jpeg", 0.88));
        setRatio(img.naturalWidth / img.naturalHeight);
      } catch {
        setPoster(src);
      }
    };
    img.onerror = () => {
      if (!cancelled) setPoster(src);
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  const displaySrc = inView ? src : (poster ?? undefined);

  return (
    <div
      ref={wrapRef}
      className="w-full overflow-hidden rounded-2xl bg-white/[0.03]"
      style={{ aspectRatio: ratio ? String(ratio) : "16 / 9" }}
    >
      {displaySrc ? (
        <img
          ref={mediaRef}
          src={displaySrc}
          alt={alt ?? ""}
          className={className}
          onLoad={(e) => {
            const el = e.currentTarget;
            if (el.naturalWidth > 0 && el.naturalHeight > 0) {
              setRatio(el.naturalWidth / el.naturalHeight);
            }
          }}
        />
      ) : null}
    </div>
  );
}

function InViewVideo({
  src,
  className,
  mediaRef,
}: {
  src: string;
  className?: string;
  mediaRef?: RefObject<HTMLImageElement | HTMLVideoElement | null>;
}) {
  const { ref: wrapRef, inView } = useInView<HTMLDivElement>({
    once: false,
    threshold: 0.35,
  });
  const localRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = localRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    if (inView) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, src]);

  return (
    <div ref={wrapRef} className="w-full">
      <video
        ref={(el) => {
          localRef.current = el;
          if (mediaRef) {
            (
              mediaRef as MutableRefObject<
                HTMLImageElement | HTMLVideoElement | null
              >
            ).current = el;
          }
        }}
        src={src}
        className={className}
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
      />
    </div>
  );
}

function FigureBlock({ figure }: { figure: DetailFigure }) {
  const scale = figure.scale ?? 1;
  return (
    <figure className="w-full">
      <div
        className="overflow-hidden rounded-2xl bg-transparent"
        style={{
          width: scale < 1 ? `${scale * 100}%` : undefined,
          maxWidth: "100%",
        }}
      >
        {figure.video ? (
          <InViewVideo
            src={figure.src}
            className="h-auto w-full object-contain"
          />
        ) : figure.gif ? (
          <InViewGif
            src={figure.src}
            alt={figure.alt ?? figure.caption ?? ""}
            className="h-auto w-full object-contain"
          />
        ) : (
          <img
            src={figure.src}
            alt={figure.alt ?? figure.caption ?? ""}
            className="h-auto w-full object-contain"
            style={figure.invert ? { filter: "invert(1)" } : undefined}
            loading="lazy"
          />
        )}
      </div>
      {figure.caption && (
        <figcaption
          className="mt-3 text-[0.7rem] font-bold italic leading-[1.5] tracking-[0.02em] text-white/55"
          style={scale < 1 ? { maxWidth: `${scale * 100}%` } : undefined}
        >
          {figure.caption}
        </figcaption>
      )}
      {figure.body && (
        <p
          className="mt-3 text-[0.8rem] font-bold leading-[1.7] tracking-[0.035em] text-white sm:text-[0.88rem]"
          style={scale < 1 ? { maxWidth: `${scale * 100}%` } : undefined}
        >
          {figure.body}
        </p>
      )}
    </figure>
  );
}

function TableBlock({ table }: { table: DetailTable }) {
  return (
    <figure className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse text-left text-[0.7rem] sm:text-[0.78rem]">
        <thead>
          <tr className="border-b border-white/25 bg-white/[0.06]">
            {table.headers.map((h) => (
              <th
                key={h}
                className="px-2.5 py-2.5 font-bold tracking-[0.02em] text-white first:pl-0 sm:px-3"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr
              key={row[0]}
              className={`border-b border-white/15 ${
                rowIndex % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
              }`}
            >
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`px-2.5 py-2 font-bold text-white first:pl-0 sm:px-3 ${
                    i === 0 ? "" : "text-center"
                  }`}
                >
                  {cell || "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption && (
        <figcaption className="mt-4 text-[0.7rem] font-bold italic leading-[1.5] text-white/55">
          {table.caption}
        </figcaption>
      )}
    </figure>
  );
}

function PrototypeText({ prototype }: { prototype: DetailPrototype }) {
  return (
    <section>
      <p className="mb-2 text-[0.72rem] font-bold tracking-[0.08em] text-white">
        {prototype.index}
        {prototype.device ? ` · ${prototype.device}` : ""}
      </p>
      <h3 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(1.1rem,2vw,1.45rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white">
        {prototype.title}
      </h3>
      {prototype.based && (
        <p className="mb-4 text-[0.75rem] font-bold tracking-[0.04em] text-white">
          Based · {prototype.based}
        </p>
      )}
      {prototype.bullets && prototype.bullets.length > 0 && (
        <ul className="mb-2 space-y-2 text-[0.8rem] font-bold leading-[1.7] tracking-[0.035em] text-white sm:text-[0.88rem]">
          {prototype.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {prototype.body && (
        <div className="space-y-3">
          {prototype.body.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="text-[0.8rem] font-bold leading-[1.75] tracking-[0.035em] text-white sm:text-[0.88rem]"
            >
              {p}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { findProject } from "../data/projects";
import { profile } from "../data/profile";

export function ProjectPage() {
  const { id = "" } = useParams();
  const found = findProject(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  const { project, category } = found;
  const tags = project.method
    .split(/[·•|,/]/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <main className="min-h-[100svh] bg-black text-[var(--fg)]">
      <header className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="font-[family-name:var(--font-display)] text-[21px] tracking-tight transition-opacity hover:opacity-45 sm:text-[26px]"
        >
          {profile.logo}{" "}
          <span className="select-none" aria-hidden>
            ✳︎
          </span>
        </Link>
        <Link
          to={"/#works"}
          className="text-[13px] tracking-[0.04em] transition-opacity hover:opacity-45"
        >
          ← Works
        </Link>
      </header>

      <article className="mx-auto max-w-5xl px-5 pb-24 pt-6 sm:px-8 lg:px-10">
        <p className="mb-4 text-[0.8rem] tracking-[0.06em] text-white/45">
          {category.label}
        </p>
        <h1 className="mb-8 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.035em]">
          {project.title}
        </h1>

        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl">
          <img
            src={project.images[0]}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {tags.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/30 px-3 py-[0.4em] text-[12px] text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <section>
            <h2 className="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-white/45">
              Challenge
            </h2>
            <p className="text-[0.95rem] leading-[1.75] text-white/80">
              {project.challenge}
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-white/45">
              Approach
            </h2>
            <p className="text-[0.95rem] leading-[1.75] text-white/80">
              {project.approach}
            </p>
          </section>
        </div>

        <dl className="mt-12 grid gap-6 border-t border-white/15 pt-10 text-[0.9rem] sm:grid-cols-3">
          <div>
            <dt className="mb-1 text-[0.7rem] uppercase tracking-[0.1em] text-white/40">
              Time
            </dt>
            <dd className="text-white/75">{project.time}</dd>
          </div>
          <div>
            <dt className="mb-1 text-[0.7rem] uppercase tracking-[0.1em] text-white/40">
              Role
            </dt>
            <dd className="text-white/75">{project.role}</dd>
          </div>
          <div>
            <dt className="mb-1 text-[0.7rem] uppercase tracking-[0.1em] text-white/40">
              Impact
            </dt>
            <dd className="text-white/75">{project.impact}</dd>
          </div>
        </dl>
      </article>
    </main>
  );
}

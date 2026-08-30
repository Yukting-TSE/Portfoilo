import { useEffect, useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import { submitContactForm } from "../lib/submitContactForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "sending" | "sent" | "error";

export function ContactOverlay({ open, onClose }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.body.classList.add("contact-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("contact-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      role: String(fd.get("role") || ""),
      help: String(fd.get("help") || ""),
      message: String(fd.get("message") || ""),
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");
      await submitContactForm(data);
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] overflow-y-auto bg-[var(--black)] text-[var(--white)]"
      role="dialog"
      aria-modal="true"
      aria-label="Contact"
    >
      <div className="mx-auto flex min-h-full max-w-3xl flex-col px-6 py-10 sm:px-10">
        <div className="mb-12 flex items-center justify-between">
          <p className="text-sm tracking-[0.14em] uppercase text-white/55">
            Contact
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-sm uppercase tracking-[0.14em] transition-opacity duration-300 hover:opacity-55"
          >
            Close
          </button>
        </div>

        <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,5.5rem)] font-normal leading-[0.92] tracking-[-0.05em]">
          Let&apos;s talk.
        </h2>
        <p className="mb-12 max-w-md text-white/60">
          Every collaboration starts with a message. Tell me what you&apos;re
          building — or just say hello at{" "}
          <a
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          .
        </p>

        <form className="space-y-8 pb-16" onSubmit={onSubmit} noValidate>
          {(
            [
              ["01", "Name", "name", "text", true],
              ["02", "Email", "email", "email", true],
              ["03", "Company / Organization", "company", "text", false],
              ["04", "Role", "role", "text", false],
              ["05", "What can I help with?", "help", "text", false],
            ] as const
          ).map(([num, label, name, type, required]) => (
            <label key={name} className="block">
              <span className="mb-3 flex gap-3 text-xs uppercase tracking-[0.14em] text-white/45">
                <span>{num}</span>
                <span>{label}</span>
              </span>
              <input
                name={name}
                type={type}
                required={required}
                className="w-full border-0 border-b border-white/35 bg-transparent py-3 text-[var(--white)] outline-none transition-[border-color] duration-300 placeholder:text-white/25 focus:border-white"
                autoComplete="off"
              />
            </label>
          ))}

          <label className="block">
            <span className="mb-3 flex gap-3 text-xs uppercase tracking-[0.14em] text-white/45">
              <span>06</span>
              <span>Message</span>
            </span>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full resize-y border-0 border-b border-white/35 bg-transparent py-3 text-[var(--white)] outline-none transition-[border-color] duration-300 placeholder:text-white/25 focus:border-white"
            />
          </label>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-3 rounded-none bg-[var(--fg)] px-8 py-4 text-sm uppercase tracking-[0.12em] text-[var(--bg)] transition-all duration-300 hover:brightness-90 active:scale-[0.98] disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <span aria-hidden>→</span>
            </button>
            {status === "sent" && (
              <p className="text-sm text-white/70">Message sent.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-white/70">
                Please check required fields and try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

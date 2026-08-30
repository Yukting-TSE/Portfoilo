type Props = {
  open: boolean;
  onClose: () => void;
};

const items = [
  { label: "人机交互", href: "#cat-hci" },
  { label: "媒体设计", href: "#cat-media" },
  { label: "装置艺术", href: "#cat-install" },
  { label: "About ME", href: "#about" },
];

export function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-[90] flex flex-col justify-center gap-8 bg-[var(--black)]/95 px-8 backdrop-blur-md transition-opacity duration-300 md:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      {items.map((item, i) => (
        <a
          key={item.label}
          href={item.href}
          className={`text-[32px] font-medium text-[var(--white)] no-underline transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
          onClick={onClose}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

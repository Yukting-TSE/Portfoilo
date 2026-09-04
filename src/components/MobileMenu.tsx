import { Link } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

const items = [
  { label: "人机交互", hash: "cat-hci" },
  { label: "媒体艺术", hash: "cat-media" },
  { label: "商业合作", hash: "cat-commercial" },
  { label: "About ME", to: "/about" },
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
      {items.map((item, i) => {
        const className = `text-[32px] font-medium text-[var(--white)] no-underline transition-all duration-500 ${
          open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`;
        const style = { transitionDelay: open ? `${120 + i * 60}ms` : "0ms" };

        if ("to" in item && item.to) {
          return (
            <Link
              key={item.label}
              to={item.to}
              className={className}
              style={style}
              onClick={onClose}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <Link
            key={item.label}
            to={{ pathname: "/", hash: `#${item.hash}` }}
            className={className}
            style={style}
            onClick={onClose}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

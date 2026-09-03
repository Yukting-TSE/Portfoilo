import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ImgHTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import { publicUrl } from "../lib/publicUrl";

export const MEDIA_PLACEHOLDER = publicUrl("images/media-placeholder.svg");

/** Probe intrinsic media size so loading/error placeholders match the original. */
export function useMediaDimensions(
  src?: string,
  fallback?: { width?: number; height?: number; aspectRatio?: number },
) {
  const [ratio, setRatio] = useState<number | null>(() => {
    if (fallback?.width && fallback?.height) {
      return fallback.width / fallback.height;
    }
    return fallback?.aspectRatio ?? null;
  });

  useEffect(() => {
    if (fallback?.width && fallback?.height) {
      setRatio(fallback.width / fallback.height);
    } else if (fallback?.aspectRatio) {
      setRatio(fallback.aspectRatio);
    } else {
      setRatio(null);
    }

    if (!src) return;

    let cancelled = false;
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (
        !cancelled &&
        img.naturalWidth > 0 &&
        img.naturalHeight > 0
      ) {
        setRatio(img.naturalWidth / img.naturalHeight);
      }
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src, fallback?.width, fallback?.height, fallback?.aspectRatio]);

  return ratio;
}

/** Probe video intrinsic size for placeholders before the visible element loads. */
export function useVideoDimensions(src?: string) {
  const [ratio, setRatio] = useState<number | null>(null);

  useEffect(() => {
    setRatio(null);
    if (!src) return;

    let cancelled = false;
    const video = document.createElement("video");
    video.preload = "metadata";
    video.muted = true;
    video.onloadedmetadata = () => {
      if (
        !cancelled &&
        video.videoWidth > 0 &&
        video.videoHeight > 0
      ) {
        setRatio(video.videoWidth / video.videoHeight);
      }
    };
    video.src = src;
    return () => {
      cancelled = true;
      video.removeAttribute("src");
      video.load();
    };
  }, [src]);

  return ratio;
}

/** Placeholder art + spinner for loading / failed media. */
export function LoadingMark({
  className = "",
  label = "Loading",
  showSpinner = true,
  posterSrc,
  objectFit = "cover",
}: {
  className?: string;
  label?: string;
  showSpinner?: boolean;
  /** Prefer the original asset so placeholder matches its framing */
  posterSrc?: string;
  objectFit?: "cover" | "contain";
}) {
  const fitClass =
    objectFit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      className={`relative overflow-hidden bg-[#111] ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <img
        src={posterSrc ?? MEDIA_PLACEHOLDER}
        alt=""
        aria-hidden
        className={`absolute inset-0 h-full w-full ${fitClass}`}
        draggable={false}
        onError={(e) => {
          if (posterSrc && e.currentTarget.src !== MEDIA_PLACEHOLDER) {
            e.currentTarget.src = MEDIA_PLACEHOLDER;
          }
        }}
      />
      {showSpinner && (
        <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black/25">
          <span className="media-spinner" aria-hidden />
        </div>
      )}
    </div>
  );
}

type SmartImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "onLoad" | "onError"
> & {
  imgRef?: Ref<HTMLImageElement>;
  wrapClassName?: string;
  wrapStyle?: CSSProperties;
  /** Fallback min-height only when intrinsic ratio is unknown */
  minHeightClass?: string;
  objectFit?: "cover" | "contain";
  children?: ReactNode;
};

/** Image that shows original-sized placeholder + spinner until loaded. */
export function SmartImage({
  src,
  alt = "",
  className = "",
  style,
  imgRef,
  wrapClassName = "",
  wrapStyle,
  minHeightClass = "min-h-[12rem]",
  objectFit = "cover",
  width,
  height,
  children,
  ...rest
}: SmartImageProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const imgElRef = useRef<HTMLImageElement | null>(null);

  const aspectRatio = useMediaDimensions(typeof src === "string" ? src : undefined, {
    width: typeof width === "number" ? width : undefined,
    height: typeof height === "number" ? height : undefined,
  });

  useEffect(() => {
    const img = imgElRef.current;
    if (img?.complete) {
      setStatus(img.naturalWidth > 0 ? "ready" : "error");
    } else {
      setStatus("loading");
    }
  }, [src]);

  const setImgRef = (el: HTMLImageElement | null) => {
    imgElRef.current = el;
    if (typeof imgRef === "function") imgRef(el);
    else if (imgRef) imgRef.current = el;

    if (el?.complete) {
      setStatus(el.naturalWidth > 0 ? "ready" : "error");
    }
  };

  const showFallback = status !== "ready";
  const ratioStyle: CSSProperties | undefined =
    showFallback && aspectRatio
      ? { aspectRatio: String(aspectRatio), width: "100%" }
      : undefined;

  return (
    <div
      className={`relative overflow-hidden ${
        showFallback && !aspectRatio ? minHeightClass : ""
      } ${wrapClassName}`}
      style={{ ...wrapStyle, ...ratioStyle }}
    >
      {showFallback && (
        <LoadingMark
          className="absolute inset-0 z-[1] h-full w-full"
          label={status === "error" ? "Media unavailable" : "Loading"}
          showSpinner={status === "loading"}
          posterSrc={typeof src === "string" ? src : undefined}
          objectFit={objectFit}
        />
      )}
      {src ? (
        <img
          {...rest}
          width={width}
          height={height}
          ref={setImgRef}
          src={src}
          alt={alt}
          className={`${className} relative z-[2] transition-opacity duration-300 ${
            status === "ready" ? "opacity-100" : "opacity-0"
          }`}
          style={style}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
        />
      ) : null}
      {children}
    </div>
  );
}

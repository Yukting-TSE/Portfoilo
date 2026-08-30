import { useEffect, useState } from "react";

/** Typewriter that only runs after `active` becomes true (SCROLL-triggered). */
export function useTriggeredTypewriter(
  text: string,
  active: boolean,
  { speed = 22, startDelay = 120 } = {}
) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      setDone(false);
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);
    let i = 0;
    let intervalId = 0;

    const delayId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(delayId);
      window.clearInterval(intervalId);
    };
  }, [text, active, speed, startDelay]);

  return { displayed, done };
}

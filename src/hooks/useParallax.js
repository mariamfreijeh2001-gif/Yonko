import { useEffect, useRef } from "react";

const prefersReducedMotion = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Drives the hero parallax: the background drifts slower than the scroll while
 * the content lifts and fades. Returns refs to attach to the hero elements.
 */
export default function useParallax() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    if (!hero || !bg || prefersReducedMotion()) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.pageYOffset || document.documentElement.scrollTop || 0;
      const h = hero.offsetHeight || 1;
      if (y > h) return; // hero off-screen
      bg.style.transform =
        "translate3d(0," + (y * 0.18).toFixed(2) + "px,0) scale(1.05)";
      const content = contentRef.current;
      if (content) {
        const fade = Math.max(0, 1 - y / (h * 0.65));
        content.style.transform =
          "translate3d(0," + (y * 0.22).toFixed(2) + "px,0)";
        content.style.opacity = fade.toFixed(3);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { heroRef, bgRef, contentRef };
}

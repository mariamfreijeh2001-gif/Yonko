import { useEffect, useRef } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fades + slides its children in when they scroll into view, then strips the
 * reveal classes so the animation never interferes with hover effects.
 *
 * Props:
 *   as     - element/tag to render (default "div")
 *   delay  - stagger delay in ms
 *   className - extra classes passed through
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const settle = () => {
      el.classList.remove("reveal", "is-visible");
      el.style.removeProperty("--reveal-delay");
    };

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      settle();
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          el.classList.add("is-visible");
          obs.unobserve(el);

          let done = false;
          const finish = () => {
            if (done) return;
            done = true;
            settle();
            el.removeEventListener("transitionend", onEnd);
          };
          const onEnd = (e) => { if (e.propertyName === "transform") finish(); };
          el.addEventListener("transitionend", onEnd);
          window.setTimeout(finish, 1800); // fallback if transitionend never fires
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

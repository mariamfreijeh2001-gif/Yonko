import { useEffect, useState } from "react";

/**
 * Watches the given section hrefs (e.g. "#what-we-do") and returns the href of
 * whichever section is currently in view, for highlighting the active nav link.
 */
export default function useScrollSpy(hrefs) {
  const [active, setActive] = useState(hrefs[0] || "");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = hrefs
      .map((href) => (href.startsWith("#") ? document.getElementById(href.slice(1)) : null))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // Depend on the stable joined string, not the array identity, so the
    // observer isn't rebuilt on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hrefs.join(",")]);

  return active;
}

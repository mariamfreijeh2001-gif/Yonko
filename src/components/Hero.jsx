import { hero } from "../data/site";
import useParallax from "../hooks/useParallax";

export default function Hero() {
  const { heroRef, bgRef, contentRef } = useParallax();

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg" ref={bgRef}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content" ref={contentRef}>
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
      </div>
      <a className="scroll-cue" href="#what-we-do" aria-label="Scroll to content">
        <span className="scroll-cue-mouse"><span className="scroll-cue-dot"></span></span>
      </a>
    </section>
  );
}

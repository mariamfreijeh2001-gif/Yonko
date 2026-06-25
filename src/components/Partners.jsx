import { partners, partnersHeading } from "../data/partners";
import Reveal from "./Reveal";

// One logo link. The duplicated track is aria-hidden so screen readers
// only announce the partners once.
const Logo = ({ partner, hidden }) => (
  <a
    className="partner-logo"
    href={partner.url}
    target="_blank"
    rel="noopener"
    aria-label={hidden ? undefined : partner.name}
    aria-hidden={hidden || undefined}
    tabIndex={hidden ? -1 : undefined}
  >
    <img src={partner.logo} alt={hidden ? "" : partner.name} loading="lazy" decoding="async" />
  </a>
);

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <Reveal as="h2" className="section-heading center">{partnersHeading}</Reveal>
        <Reveal as="span" className="rule center-rule" delay={120} />
      </div>

      {/* Two identical tracks scroll side-by-side for a seamless loop. */}
      <div className="marquee">
        <div className="marquee-track">
          {partners.map((p) => <Logo key={p.name} partner={p} />)}
        </div>
        <div className="marquee-track" aria-hidden="true">
          {partners.map((p) => <Logo key={p.name + "-dup"} partner={p} hidden />)}
        </div>
      </div>
    </section>
  );
}

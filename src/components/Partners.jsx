import { partners, partnersHeading } from "../data/partners";
import Reveal from "./Reveal";

// Repeat the set enough times that one track is always wider than the viewport,
// so the marquee stays continuously filled (no empty gaps) — logos repeat on
// the line as needed.
const REPEATS = 3;

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

// `muted` tracks are duplicates used only for the seamless loop; everything in
// them is hidden from assistive tech so partners are announced once.
function Track({ muted }) {
  return (
    <div className="marquee-track" aria-hidden={muted || undefined}>
      {Array.from({ length: REPEATS }).flatMap((_, r) =>
        partners.map((p, i) => (
          <Logo key={`${r}-${i}`} partner={p} hidden={muted || r > 0} />
        ))
      )}
    </div>
  );
}

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <Reveal as="h2" className="section-heading center">{partnersHeading}</Reveal>
        <Reveal as="span" className="rule center-rule" delay={120} />
      </div>

      <div className="marquee">
        <Track />
        <Track muted />
      </div>
    </section>
  );
}

import { trustedPartner } from "../data/site";
import Reveal from "./Reveal";

export default function TrustedPartner() {
  return (
    <section className="trusted">
      <div className="container">
        <Reveal as="h2" className="section-heading center">
          {trustedPartner.heading}
        </Reveal>
        <Reveal as="p" className="lede center" delay={120}>
          {trustedPartner.body}
        </Reveal>
      </div>
    </section>
  );
}

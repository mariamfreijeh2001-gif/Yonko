import { services, servicesHeading, servicesImage } from "../data/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="split" id="what-we-do">
      <div className={`split-media ${servicesImage}`}></div>
      <div className="split-body">
        <Reveal as="h2" className="section-heading">{servicesHeading}</Reveal>
        <Reveal as="span" className="rule" />
        <div className="cards">
          {services.map((s, i) => (
            <Reveal className="card" key={s.title} delay={i * 110}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

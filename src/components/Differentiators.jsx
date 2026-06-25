import {
  differentiators,
  differentiatorsHeading,
  differentiatorsImage,
} from "../data/differentiators";
import Reveal from "./Reveal";

export default function Differentiators() {
  return (
    <section className="split" id="why">
      <div className={`split-media ${differentiatorsImage}`}></div>
      <div className="split-body">
        <Reveal as="h2" className="section-heading">{differentiatorsHeading}</Reveal>
        <Reveal as="span" className="rule" />
        <div className="features">
          {differentiators.map((item, i) => (
            <Reveal className="feature" key={item.title} delay={i * 90}>
              <img
                className="feature-icon"
                src={item.icon}
                alt=""
                width="36"
                height="36"
              />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

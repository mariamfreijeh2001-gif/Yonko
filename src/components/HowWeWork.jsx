import { howWeWork } from "../data/site";
import Reveal from "./Reveal";

export default function HowWeWork() {
  return (
    <section className="split reverse" id="how-we-work">
      <div className={`split-media ${howWeWork.image}`}></div>
      <div className="split-body">
        <Reveal as="h2" className="section-heading">{howWeWork.heading}</Reveal>
        <Reveal as="span" className="rule" />
        {howWeWork.paragraphs.map((text, i) => (
          <Reveal as="p" key={i} delay={i * 90}>{text}</Reveal>
        ))}
      </div>
    </section>
  );
}

import { contact } from "../data/site";
import Reveal from "./Reveal";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);

export default function Contact() {
  return (
    <section className="split reverse contact" id="contact">
      <div className={`split-media ${contact.image}`}></div>
      <div className="split-body">
        <Reveal as="h2" className="section-heading">{contact.heading}</Reveal>
        <Reveal as="span" className="rule" />
        {contact.paragraphs.map((text, i) => (
          <Reveal as="p" key={i} delay={i * 90}>{text}</Reveal>
        ))}

        <Reveal as="ul" className="contact-list" delay={120}>
          <li>
            <span className="ci" aria-hidden="true"><PinIcon /></span>
            <a href={contact.mapUrl} target="_blank" rel="noopener">{contact.address}</a>
          </li>
          <li>
            <span className="ci" aria-hidden="true"><SendIcon /></span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
        </Reveal>

        <Reveal delay={200}>
          <a
            className="social"
            href={contact.linkedin}
            aria-label="Yonko Capital on LinkedIn"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

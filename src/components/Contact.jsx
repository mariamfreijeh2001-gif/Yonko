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
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.8-2.05 3.7-2.05 3.96 0 4.69 2.6 4.69 6V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
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

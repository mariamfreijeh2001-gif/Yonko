import { brand, footer } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <span className="brand small">{brand.name} <span>{brand.accent}</span></span>
        <p>&copy; {year} Yonko Capital. All rights reserved.</p>
        <nav className="footer-links">
          {footer.links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

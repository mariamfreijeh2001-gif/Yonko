import { useState } from "react";
import { brand, nav } from "../data/site";
import useScrollSpy from "../hooks/useScrollSpy";

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(nav.map((n) => n.href));

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#hero" className="brand" aria-label={`${brand.name} ${brand.accent}`}>
          <img className="brand-logo" src="/assets/logo.png" alt={`${brand.name} ${brand.accent}`} />
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${active === item.href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

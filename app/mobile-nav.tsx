"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Portal target (document.body) only exists client-side; flip after
    // mount so the server-rendered HTML matches the client's first paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const panel = (
    <div className={open ? "mobile-nav-panel mobile-nav-open" : "mobile-nav-panel"} id="mobile-nav-panel" inert={!open}>
      <nav aria-label="Mobile">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a
          href="/cv.pdf"
          download="Esther-Ingabire-CV.pdf"
          className="mobile-nav-cv"
          onClick={() => setOpen(false)}
        >
          Download CV
        </a>
      </nav>
    </div>
  );

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={open ? "burger burger-open" : "burger"} aria-hidden="true">
          <span /><span /><span />
        </span>
      </button>

      {/* Portalled to <body> so it escapes the sticky header's backdrop-filter,
          which would otherwise become the containing block for this fixed panel. */}
      {mounted ? createPortal(panel, document.body) : null}
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-serif text-2xl tracking-wide text-primary">
          Aurélie <span className="italic text-accent-foreground/70">Bridal</span>
        </Link>
        <nav className="hidden gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border/50 px-6 py-5 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl text-primary">Aurélie Bridal</h3>
          <p className="mt-2 text-sm text-muted-foreground">Where every bride's story begins.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>123 Rosewood Avenue</p>
          <p>New York, NY 10012</p>
          <p className="mt-2">Tue – Sat · 10am – 7pm</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>hello@aureliebridal.com</p>
          <p>+1 (212) 555-0188</p>
        </div>
      </div>
      <div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aurélie Bridal Studio. All rights reserved.
      </div>
    </footer>
  );
}

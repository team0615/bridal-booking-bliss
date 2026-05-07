import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurélie Bridal Studio — Timeless Gowns & Bespoke Moments" },
      { name: "description", content: "A boutique bridal studio offering bespoke gowns, fittings, and styling for the modern bride." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="grid gap-10 px-6 pb-20 pt-12 md:grid-cols-2 md:items-center md:px-12 lg:px-20 lg:pt-20">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Est. 2008 · New York</p>
            <h1 className="font-serif text-5xl leading-[1.05] text-primary md:text-6xl lg:text-7xl">
              Where every bride's <em className="italic text-accent-foreground">story</em> begins.
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Aurélie is a boutique bridal studio creating bespoke gowns and intimate fitting experiences for the modern, discerning bride.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/services" className="rounded-full bg-primary px-7 py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90">
                Our Services
              </Link>
              <Link to="/contact" className="rounded-full border border-primary px-7 py-3 text-sm uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                Book a Visit
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-sm border border-accent/60" />
            <img src={hero} alt="Bridal studio interior with elegant wedding gown" width={1536} height={1024} className="relative aspect-[4/5] w-full rounded-sm object-cover shadow-xl" />
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary/30 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Promise</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl text-primary md:text-4xl">
            "Designed slowly, fitted with care, and worn with confidence on the most important day of your life."
          </h2>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { n: "01", t: "Private Fittings", d: "One-on-one appointments in our serene atelier with a dedicated stylist." },
            { n: "02", t: "Bespoke Design", d: "Co-create your dream gown from sketch to final stitch with our designers." },
            { n: "03", t: "Lifetime Care", d: "Preservation, alterations, and care services long after your wedding day." },
          ].map((f) => (
            <div key={f.n} className="border-t border-accent/60 pt-6">
              <p className="font-serif text-3xl text-accent-foreground">{f.n}</p>
              <h3 className="mt-3 font-serif text-2xl text-primary">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

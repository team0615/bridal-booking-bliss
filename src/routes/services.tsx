import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lūme & Co." },
      { name: "description", content: "Facials, threading, haircuts, spa massage, manicure, pedicure, bridal makeup and waxing at Lūme & Co." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <PageShell>
      <section className="border-b border-border/50 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Menu</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-primary md:text-6xl">
            Treatments crafted with <em className="italic text-accent-foreground">care.</em>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Every service is built around you — your skin, your hair, your mood. Mix, match, or chat with Élise to design your perfect ritual.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.slug} className={`flex flex-col gap-5 ${i % 2 ? "md:mt-16" : ""}`}>
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-serif text-3xl text-primary">{s.title}</h2>
                  <span className="text-xs uppercase tracking-wider text-accent-foreground">{s.price}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.duration}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

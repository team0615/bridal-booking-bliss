import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { HeroCarousel } from "@/components/HeroCarousel";
import { services } from "@/lib/services-data";
import { Leaf, Sparkles, Heart } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lūme & Co. — Modern Beauty & Spa Sanctuary" },
      { name: "description", content: "A modern beauty and spa sanctuary offering facials, hair, nails, massage, bridal makeup and more." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <HeroCarousel />

      {/* Intro */}
      <section className="texture-grain border-b border-border/50 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3 md:items-start">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Welcome to Lūme</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-primary md:text-5xl">
              Quietly modern. <em className="italic text-accent-foreground">Endlessly considered.</em>
            </h2>
          </div>
          <div className="md:col-span-2 grid gap-8 sm:grid-cols-3">
            {[
              { I: Leaf, t: "Clean Beauty", d: "Plant-forward, cruelty-free formulations." },
              { I: Sparkles, t: "Master Therapists", d: "Senior-trained team with 8+ yrs experience." },
              { I: Heart, t: "Personal Touch", d: "Every treatment shaped around you." },
            ].map(({ I, t, d }) => (
              <div key={t}>
                <I size={22} className="text-accent-foreground" />
                <h3 className="mt-3 font-serif text-xl text-primary">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Treatments</p>
            <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">Our signature services</h2>
          </div>
          <Link to="/services" className="hidden text-sm uppercase tracking-[0.18em] text-accent-foreground hover:text-primary md:inline">View all →</Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s) => (
            <article key={s.slug} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-serif text-xl text-primary">{s.title}</h3>
                <span className="text-xs uppercase tracking-wider text-accent-foreground">{s.price}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.duration}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="border-y border-border/50 bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80">Book in seconds</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Your next ritual is one chat away.
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Tap the chat icon and let Élise help you book your perfect appointment in under a minute.
          </p>
          <Link to="/contact" className="mt-8 inline-block rounded-full border border-primary-foreground/40 px-8 py-3 text-sm uppercase tracking-[0.18em] hover:bg-primary-foreground hover:text-primary">
            Visit Us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lūme & Co." },
      { name: "description", content: "Lūme & Co. is a modern Brooklyn-based beauty and spa sanctuary founded in 2017." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Story</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-primary md:text-6xl">
              Beauty rituals, <em className="italic text-accent-foreground">slowed down.</em>
            </h1>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Lūme &amp; Co. opened in 2017 as a quiet rebellion against rushed appointments and one-size-fits-all beauty.</p>
              <p>Our therapists take time — to listen, to understand, to tailor every treatment. We work with clean, plant-forward formulations and treat each chair like a small sanctuary.</p>
              <p>Today, our Brooklyn studio welcomes hundreds of guests a week. Yet every visit still feels personal. That's the point.</p>
            </div>
          </div>
          <img src={about} alt="Glowing natural beauty portrait" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl" />
        </div>

        <div className="mt-24 grid gap-8 border-t border-border/50 pt-12 md:grid-cols-4">
          {[
            { k: "8 yrs", v: "Open in Brooklyn" },
            { k: "20+", v: "Senior therapists" },
            { k: "12k+", v: "Happy clients" },
            { k: "100%", v: "Cruelty-free" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-serif text-4xl text-primary">{s.k}</p>
              <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

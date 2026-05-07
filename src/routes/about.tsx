import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aurélie Bridal Studio" },
      { name: "description", content: "Learn about Aurélie Bridal — a family-run atelier crafting timeless gowns since 2008." },
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
              A quiet atelier, <em className="italic text-accent-foreground">rooted in craft.</em>
            </h1>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded in 2008 by mother-and-daughter duo Aurélie and Camille Laurent, our studio began as a small dressmaker's workshop in the West Village.</p>
              <p>Today, we've dressed over 1,200 brides — yet our philosophy hasn't changed. Every gown is touched by hand, fitted in person, and made to feel as if it were always yours.</p>
              <p>We believe a wedding gown should not just be worn; it should be remembered.</p>
            </div>
          </div>
          <img src={about} alt="Bride in a lace gown" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl" />
        </div>

        <div className="mt-24 grid gap-8 border-t border-border/50 pt-12 md:grid-cols-4">
          {[
            { k: "1,200+", v: "Brides dressed" },
            { k: "16", v: "Years of craft" },
            { k: "32", v: "Designers & seamstresses" },
            { k: "48hr", v: "Average fitting turnaround" },
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

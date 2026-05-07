import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aurélie Bridal Studio" },
      { name: "description", content: "Bridal gown fittings, custom design, bridesmaid styling and more at Aurélie Bridal Studio." },
    ],
  }),
  component: Services,
});

const services = [
  { title: "Bridal Gown Fitting", price: "from $250", desc: "Two-hour private appointment with a dedicated stylist to explore our seasonal collection." },
  { title: "Custom Design Consultation", price: "from $1,800", desc: "Co-create a one-of-a-kind gown from initial sketch through three personal fittings." },
  { title: "Bridesmaid Styling", price: "from $180 / person", desc: "Cohesive looks for your bridal party — fittings, fabric selection and palette curation." },
  { title: "Pre-Wedding Makeover", price: "from $420", desc: "Hair, makeup and styling trial in collaboration with our partner glam team." },
  { title: "Veil & Accessory Design", price: "from $320", desc: "Hand-finished veils, headpieces and heirloom accessories tailored to your gown." },
  { title: "Gown Preservation", price: "from $290", desc: "Museum-grade cleaning and archival boxing so your gown lasts generations." },
];

function Services() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">What We Offer</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-primary md:text-6xl">
          Services crafted around <em className="italic text-accent-foreground">you.</em>
        </h1>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="bg-card p-8 transition-colors hover:bg-secondary/40">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl text-primary">{s.title}</h2>
                <span className="text-xs uppercase tracking-wider text-accent-foreground">{s.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-sm border border-accent/60 bg-secondary/40 p-10 text-center">
          <h2 className="font-serif text-3xl text-primary">Not sure where to start?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Chat with Élise, our virtual concierge — she'll help guide you to the perfect appointment.
          </p>
        </div>
      </section>
    </PageShell>
  );
}

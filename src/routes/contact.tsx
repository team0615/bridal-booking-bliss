import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aurélie Bridal Studio" },
      { name: "description", content: "Visit our atelier or send us a note. We'd love to hear about your wedding." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Get in Touch</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-primary md:text-6xl">
              Let's create something <em className="italic text-accent-foreground">unforgettable.</em>
            </h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Visit our atelier in the heart of New York, or reach out — we typically respond within one business day.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { I: MapPin, t: "123 Rosewood Avenue, New York, NY 10012" },
                { I: Phone, t: "+1 (212) 555-0188" },
                { I: Mail, t: "hello@aureliebridal.com" },
                { I: Clock, t: "Tuesday – Saturday · 10am – 7pm (by appointment)" },
              ].map(({ I, t }) => (
                <div key={t} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/40 text-accent-foreground">
                    <I size={16} />
                  </span>
                  <p className="pt-2 text-sm text-muted-foreground">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-5 rounded-sm border border-border bg-card p-8 shadow-sm"
          >
            <h2 className="font-serif text-2xl text-primary">Send us a note</h2>
            {sent ? (
              <div className="rounded-sm border border-accent/60 bg-secondary/50 p-6 text-center">
                <p className="font-serif text-xl text-primary">Thank you ✨</p>
                <p className="mt-2 text-sm text-muted-foreground">Your message is on its way. We'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <Field label="Full Name" type="text" required />
                <Field label="Email" type="email" required />
                <Field label="Wedding Date" type="text" placeholder="e.g. June 2026" />
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea required rows={4} className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                </div>
                <button type="submit" className="w-full rounded-full bg-primary py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90">
                  Send Inquiry
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input {...props} className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
    </div>
  );
}

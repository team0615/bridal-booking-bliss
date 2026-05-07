import { useEffect, useState } from "react";
import h1 from "@/assets/hero-1.jpg";
import h2 from "@/assets/hero-2.jpg";
import h3 from "@/assets/hero-3.jpg";

const slides = [
  { src: h1, eyebrow: "Sanctuary", title: "Where calm meets craft.", caption: "An urban retreat for skin, hair & soul." },
  { src: h2, eyebrow: "Ritual", title: "Slow beauty, beautifully done.", caption: "Hand-blended treatments in candlelit rooms." },
  { src: h3, eyebrow: "Detail", title: "The little luxuries, perfected.", caption: "Manicures, pedicures and polish, refined." },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-primary">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.src} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 via-primary/30 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20 md:px-12">
        <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/80">
          {slides[i].eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[1.05] text-primary-foreground md:text-7xl">
          {slides[i].title}
        </h1>
        <p className="mt-4 max-w-md text-primary-foreground/85">{slides[i].caption}</p>

        <div className="mt-10 flex items-center gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-[2px] transition-all ${i === idx ? "w-12 bg-primary-foreground" : "w-6 bg-primary-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

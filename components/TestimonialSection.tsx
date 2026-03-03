const testimonials = [
  {
    quote:
      "Depuis DocStore, notre équipe retrouve chaque fichier en quelques secondes. La collaboration est fluide et l’historique évite les erreurs.",
    name: "Moussa Traoré",
    role: "CEO, PageBulb",
  },
  {
    quote:
      "Nous avons réduit de 40% le temps passé à chercher des documents. Les permissions granulaires nous ont vraiment aidés.",
    name: "Sarah Kouamé",
    role: "Ops Lead, KiteLab",
  },
  {
    quote:
      "L’interface est claire, rapide et sécurisée. DocStore est devenu notre source unique de vérité.",
    name: "Yann Ndiaye",
    role: "Head of Product, Orbis",
  },
];

export default function TestimonialSection() {
  const active = 0;

  return (
    <section id="testimonials" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="mt-3 text-3xl font-display font-semibold text-foreground sm:text-4xl">
              Ce que nos utilisateurs racontent
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              “{testimonials[active].quote}”
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-foreground">
                {testimonials[active].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[active].role}
              </p>
            </div>

            <button
              type="button"
              className="mt-8 text-sm font-semibold text-primary transition-colors hover:text-foreground"
            >
              More stories
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -right-6 top-1/2 flex -translate-y-1/2 flex-col gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className={`h-3 w-3 rounded-full ${
                    index === active ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

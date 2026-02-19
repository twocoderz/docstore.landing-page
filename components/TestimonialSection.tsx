const testimonials = [
  {
    quote:
      'Depuis DocStore, notre équipe retrouve chaque fichier en quelques secondes. La collaboration est fluide et l’historique évite les erreurs.',
    name: 'Moussa Traoré',
    role: 'CEO, PageBulb',
  },
  {
    quote:
      'Nous avons réduit de 40% le temps passé à chercher des documents. Les permissions granulaires nous ont vraiment aidés.',
    name: 'Sarah Kouamé',
    role: 'Ops Lead, KiteLab',
  },
  {
    quote:
      'L’interface est claire, rapide et sécurisée. DocStore est devenu notre source unique de vérité.',
    name: 'Yann Ndiaye',
    role: 'Head of Product, Orbis',
  },
];

export default function TestimonialSection() {
  const active = 0;

  return (
    <section id="testimonials" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              What users say
            </p>
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
            <div className="absolute -left-6 top-10 h-14 w-14 rounded-full bg-primary/10 blur-[1px]" />
            <div className="relative h-[360px] w-[320px] overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,_#dbeafe_0%,_#eff6ff_45%,_#ffffff_100%)] shadow-[0_35px_80px_rgba(15,23,42,0.18)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[radial-gradient(circle,_rgba(15,23,42,0.08)_0%,_rgba(15,23,42,0)_70%)]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 text-3xl font-semibold text-primary">
                  MT
                </div>
              </div>
            </div>

            <div className="absolute -right-6 top-1/2 flex -translate-y-1/2 flex-col gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className={`h-3 w-3 rounded-full ${
                    index === active ? 'bg-primary' : 'bg-muted'
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

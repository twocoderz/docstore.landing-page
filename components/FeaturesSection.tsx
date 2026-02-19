const features = [
  {
    title: 'Planifier vos docs',
    description:
      'Organisez vos dossiers par projets, équipes ou clients et gardez une structure claire qui évolue avec vous.',
  },
  {
    title: 'Sécuriser vos fichiers',
    description:
      'Contrôles d’accès, partage maîtrisé et sauvegardes automatiques pour protéger vos documents sensibles.',
  },
  {
    title: 'Collaborer en temps réel',
    description:
      'Commentaires, versions et historiques pour avancer ensemble sans perdre le fil.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Une nouvelle approche
          </p>
          <h2 className="mt-3 text-3xl font-display font-semibold text-foreground sm:text-4xl">
            Simplicité, sécurité et collaboration pour vos documents
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-transform hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-2xl font-semibold">{index + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <button
                type="button"
                className="mt-6 text-sm font-semibold text-primary transition-colors group-hover:text-foreground"
              >
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

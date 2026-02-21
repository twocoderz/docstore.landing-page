const features = [
  {
    title: 'Révision centralisée',
    description:
      'Retrouve en un seul espace écoles, filières, UE, ressources pédagogiques et concours.',
  },
  {
    title: 'Documents prêts à lire',
    description:
      'Ouvre instantanément les PDF (cours, exercices, tutoriels, examens) depuis l’application.',
  },
  {
    title: 'Mode hors ligne pour réviser partout',
    description:
      'Télécharge tes documents et continue de travailler sans connexion.',
  },
  {
    title: 'Recherche rapide et ciblée',
    description:
      'Trouve vite un contenu grâce à la recherche multi-entités et à l’historique.',
  },
  {
    title: 'Notifications utiles, sans bruit',
    description:
      'Active uniquement les alertes qui t’intéressent (nouveaux documents, écoles, filières).',
  },
  {
    title: 'Partage simple avec tes camarades',
    description:
      'Envoie un document en quelques secondes.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-display font-semibold text-foreground sm:text-4xl">
            Tout ce qu&apos;il faut pour réviser efficacement
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1"
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

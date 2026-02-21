const highlights = [
  {
    title: 'Sécurité niveau entreprise',
    description:
      'Chiffrement, permissions granulaires et journaux d’activité pour protéger vos contenus sensibles.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 2l7 4v6c0 4.5-3 8.6-7 10-4-1.4-7-5.5-7-10V6l7-4z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M12 3.5L6 6.7V12c0 3.8 2.3 7.2 6 8.6 3.7-1.4 6-4.8 6-8.6V6.7L12 3.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9.5 12.5l1.7 1.7 3.8-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Meilleurs investissements temps',
    description:
      'Recherche instantanée, prévisualisations et modèles prêts à l’emploi pour aller plus vite.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.18" />
        <path
          d="M12 7v5l3 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 4.5l1.8 1.8M17 4.5l-1.8 1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Sous surveillance active',
    description:
      'Alertes intelligentes, versions automatiques et accès contrôlés pour rester serein.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 4c4.2 0 7.7 3 9 8-1.3 5-4.8 8-9 8s-7.7-3-9-8c1.3-5 4.8-8 9-8z"
          fill="currentColor"
          opacity="0.18"
        />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function Share() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-12 h-40 w-40 rounded-full border-2 border-primary/10" />
        <div className="absolute left-16 top-20 h-40 w-40 rounded-full border-2 border-accent/10" />
        <div className="absolute left-24 top-28 h-40 w-40 rounded-full border-2 border-primary/10" />
        <div className="absolute bottom-12 left-12 h-12 w-12 rounded-full bg-accent/20" />
        <div className="absolute bottom-6 left-24 h-2 w-2 rounded-full bg-primary/40" />
        <div className="absolute bottom-10 left-32 h-2 w-2 rounded-full bg-primary/40" />
        <div className="absolute bottom-14 left-40 h-2 w-2 rounded-full bg-primary/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Illustration - screen image */}
          <div className="relative flex justify-center lg:justify-start">
            
            
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-display font-semibold text-foreground sm:text-4xl">
              Partage simple avec tes camarades
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Envoie un document en quelques secondes.
            </p>

            <div className="mt-10 space-y-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: 'Importez vos documents',
    description:
      'Glissez-déposez vos fichiers ou connectez vos sources cloud pour centraliser vos données.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 14c0-3.5 2.6-6 6-6 2.6 0 4.7 1.4 5.5 3.6 2.1.2 3.5 1.7 3.5 3.7 0 2.2-1.7 3.7-3.9 3.7H8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10v7m0 0l-3-3m3 3l3-3"
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
    title: 'Organisez et partagez',
    description:
      'Classez par équipes, projets ou clients et partagez des accès précis en un clic.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="3"
          fill="currentColor"
          opacity="0.18"
        />
        <path
          d="M8 9h8M8 13h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Suivez les versions',
    description:
      'Historique automatique, commentaires et notifications pour rester alignés.',
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
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-background py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-12 h-28 w-28 rounded-full border border-primary/15" />
        <div className="absolute right-24 top-24 h-36 w-36 rounded-full border border-accent/15" />
        <div className="absolute left-10 bottom-12 h-2 w-2 rounded-full bg-primary/40" />
        <div className="absolute left-16 bottom-16 h-2 w-2 rounded-full bg-primary/40" />
        <div className="absolute left-22 bottom-20 h-2 w-2 rounded-full bg-primary/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Visual */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <div className="rounded-[36px] border border-border bg-card p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>CARD DETAILS</span>
                  <span>09:41</span>
                </div>
                <div className="mt-5 rounded-3xl bg-[linear-gradient(140deg,_#2a5bff_0%,_#163aa1_50%,_#0b1f57_100%)] p-5 text-white shadow-[0_20px_30px_rgba(15,23,42,0.2)]">
                  <p className="text-xs uppercase text-white/70">Card number</p>
                  <p className="mt-2 text-sm tracking-[0.3em]">4890 9041 0021 8321</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-white/70">
                    <span>11/20</span>
                    <span>563</span>
                    <span className="text-white">VISA</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-border bg-background px-3 py-2 text-center"
                      >
                        {item}
                      </div>
                    )
                  )}
                  <div className="col-span-2 rounded-xl border border-border bg-background px-3 py-2 text-center">
                    0
                  </div>
                  <div className="rounded-xl border border-border bg-background px-3 py-2 text-center">
                    ⌫
                  </div>
                </div>
              </div>

              <div className="absolute -left-10 bottom-6 hidden rounded-2xl bg-white p-3 shadow-[0_20px_40px_rgba(15,23,42,0.12)] md:block">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20" />
                  <div>
                    <div className="h-2 w-24 rounded-full bg-muted" />
                    <div className="mt-2 h-2 w-16 rounded-full bg-muted/60" />
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-8 hidden rounded-full bg-accent/20 p-4 md:block">
                <div className="h-5 w-5 rounded-sm bg-accent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Comment ça marche
            </p>
            <h2 className="mt-3 text-3xl font-display font-semibold text-foreground sm:text-4xl">
              Vos documents bien protégés et accessibles partout
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              DocStore simplifie chaque étape : import, organisation et suivi des
              versions pour une collaboration fluide.
            </p>

            <div className="mt-10 space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-muted-foreground">
                        0{index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
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

export default function HomeSection() {
  const clientLogos = ['Nest', 'Lime', 'Stripe', 'Jet', 'Bolt', 'Nova'];

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* Background glow + arcs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(35,79,235,0.18)_0%,_rgba(35,79,235,0)_70%)]" />
        <div className="absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(34,197,94,0.14)_0%,_rgba(34,197,94,0)_70%)]" />
        <svg
          className="absolute right-0 top-0 h-[420px] w-[620px] opacity-40"
          viewBox="0 0 620 420"
          fill="none"
        >
          <path
            d="M640 20C460 40 340 130 300 250C260 370 160 410 -20 400"
            stroke="rgba(35,79,235,0.25)"
            strokeWidth="3"
          />
          <path
            d="M620 60C470 80 360 160 330 260C300 360 200 400 20 390"
            stroke="rgba(35,79,235,0.18)"
            strokeWidth="3"
          />
          <path
            d="M600 110C470 120 380 200 350 280C320 360 230 390 40 380"
            stroke="rgba(35,79,235,0.12)"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              DocStore aide à
            </p>
            <h1 className="mt-3 text-4xl font-display font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Mettre vos documents
              <span className="block text-primary"> au travail</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Centralisez, partagez et sécurisez vos fichiers en un seul
              endroit. DocStore vous aide à organiser vos dossiers, collaborer
              en temps réel et retrouver l&apos;essentiel en un instant.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://docstore-univ.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-md transition-transform hover:scale-[1.02]"
              >
                Télécharger pour iOS
              </a>
              <a
                href="https://docstore-univ.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-transform hover:scale-[1.02]"
              >
                Télécharger pour Android
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                4.9
              </span>
              <span>Note moyenne sur les stores</span>
            </div>
          </div>

          {/* Right: device mock */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-[28px] bg-accent/40 blur-[2px]" />
            <div className="absolute -left-10 bottom-6 h-12 w-12 rounded-full bg-primary/30" />

            <div className="relative w-[260px] rounded-[36px] border border-border bg-foreground p-3 shadow-[0_30px_80px_rgba(15,23,42,0.25)] sm:w-[300px]">
              <div className="relative h-[540px] w-full overflow-hidden rounded-[30px] bg-[linear-gradient(160deg,_#2a5bff_0%,_#0b2b7a_50%,_#081b46_100%)]">
                <div className="absolute left-1/2 top-4 h-5 w-24 -translate-x-1/2 rounded-full bg-black/40" />
                <div className="absolute left-5 top-14 text-xs font-semibold text-white/70">
                  Total documents
                </div>
                <div className="absolute left-5 top-20 text-3xl font-display font-semibold text-white">
                  56,984
                </div>

                <div className="absolute left-5 right-5 top-36 grid grid-cols-3 gap-3 text-white/90">
                  <div className="rounded-xl bg-white/10 px-3 py-2 text-center text-xs">
                    132
                    <div className="text-[10px] text-white/60">Dossiers</div>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-2 text-center text-xs">
                    1,204
                    <div className="text-[10px] text-white/60">Fichiers</div>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-2 text-center text-xs">
                    87%
                    <div className="text-[10px] text-white/60">Sync</div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-44 rounded-t-[26px] bg-white/95 px-5 py-4 text-slate-800">
                  <p className="text-xs font-semibold text-slate-500">
                    Aperçu des activités
                  </p>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-xs">
                      <span>Contrat_2025.pdf</span>
                      <span className="text-primary">Partagé</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-xs">
                      <span>Design_system.fig</span>
                      <span className="text-accent">Modifié</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-xs">
                      <span>Brief_marketing.docx</span>
                      <span className="text-slate-500">Archivé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-16 rounded-3xl border border-border bg-card/80 px-6 py-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <p className="text-center text-sm font-semibold text-muted-foreground">
            Trusted by
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-lg font-semibold text-foreground/70">
            {clientLogos.map((logo) => (
              <span key={logo} className="tracking-tight">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

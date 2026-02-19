export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(140deg,_#0b2b7a_0%,_#0a2a9a_40%,_#0d1f66_100%)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-56 w-56 rounded-full bg-blue-600/30 blur-[8px]" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-blue-400/20 blur-[4px]" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-b-[120px] bg-blue-700/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8">
        {/* CTA Card */}
        <div className="mx-auto max-w-4xl rounded-[32px] bg-[linear-gradient(160deg,_#2954ff_0%,_#1738c9_45%,_#0b2b7a_100%)] px-8 py-12 text-center shadow-[0_40px_90px_rgba(8,23,68,0.35)]">
          <p className="text-sm font-semibold text-blue-100">Gagnez du temps</p>
          <h2 className="mt-2 text-3xl font-display font-semibold text-white sm:text-4xl">
            Téléchargez DocStore
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-100 sm:text-base">
            Centralisez vos documents, collaborez en temps réel et sécurisez vos
            fichiers en un seul endroit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://docstore-univ.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              Google Play
            </a>
            <a
              href="https://docstore-univ.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              App Store
            </a>
          </div>
        </div>

        {/* Footer content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg font-semibold">
                DS
              </div>
              <span className="text-xl font-semibold">DocStore</span>
            </div>
            <p className="mt-4 text-sm text-blue-100">
              Get the future you want. DocStore vous aide à organiser vos
              documents pour travailler plus vite, ensemble.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Produits</p>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              <li>Features</li>
              <li>Templates</li>
              <li>Pricing</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Entreprise</p>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              <li>About Us</li>
              <li>Press & Media</li>
              <li>Careers</li>
              <li>Ambassadors</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Support</p>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Customer Stories</li>
            </ul>
            <div className="mt-6 space-y-2 text-sm text-blue-100">
              <p>support@docstore.app</p>
              <p>+33 1 84 80 12 34</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-blue-100">
          <p>© 2026 DocStore. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Follow us</span>
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-white/10" />
              <span className="h-8 w-8 rounded-full bg-white/10" />
              <span className="h-8 w-8 rounded-full bg-white/10" />
              <span className="h-8 w-8 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

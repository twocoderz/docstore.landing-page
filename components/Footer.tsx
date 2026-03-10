import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer-white text-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-b-[120px] bg-blue-700/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8">
        {/* CTA Card */}
        <div className="mx-auto max-w-6xl rounded-32 bg-primary px-8 py-12 text-center">
          <p className="text-sm font-semibold text-blue-100">
            Tes cours toujours avec toi
          </p>
          <h2 className="mt-2 text-6xl font-display font-semibold text-white sm:text-4xl">
            Téléchargez DocStore
          </h2>
          <p className="mx-auto mt-3 max-w-4xl text-sm text-blue-100 sm:text-base">
            Valide toutes tes UEs avec Docstore.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://docstore-univ.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-[1.02]"
            >
              <Image
                src="/images/app-store.svg"
                alt="Télécharger sur App Store"
                width={160}
                height={48}
                className="w-auto h-10"
              />
            </a>
            <a
              href="https://docstore-univ.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-[1.02]"
            >
              <Image
                src="/images/google-play.svg"
                alt="Télécharger sur Google Play"
                width={160}
                height={48}
                className="w-auto h-10"
              />
            </a>
          </div>
        </div>

        {/* Footer content */}
        <div className="mt-16 text-black-100 flex justify-between">
          <div>
            <div className="flex items-center gap-3">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="DocStore"
                  width={28}
                  height={28}
                  className="h-18 w-18"
                  priority
                />
              </Link>
            </div>
            <p className="mt-4 text-sm text-left max-w-100 text-black-100">
              DocStore aide les étudiants et candidats à gagner du temps dans
              leur préparation : moins de recherche, plus de concentration sur
              l&apos;essentiel — apprendre, s&apos;exercer et réussir les
              examens.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Liens rapides</p>
            <ul className="mt-4 space-y-3 text-sm text-blue-600">
              <li>
                <Link
                  href="#home"
                  className="hover:text-blue-800 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="hover:text-blue-800 transition-colors"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-blue-800 transition-colors"
                >
                  Ce que disent nos utilisateurs
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-sm">
              <p>rahim100codeur@gmail.com</p>
              <p>+228 91 79 61 15</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-primary/10 pt-6 text-sm text-black-100">
          <p>© 2026 DocStore. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span className="text-primary border-b border-2 p-3 rounded-full hover:bg-primary hover:text-white hover:border-white cursor-pointer transition-all ease-in">
              Nous suivre
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

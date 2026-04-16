"use client";

import Image from "next/image";
import Link from "next/link";
import { APP_URL, WEB_URL } from "@/lib/content";

/**
 * Mobile footer — simplified single-column layout.
 * CTA card + minimal links + contact.
 */
export default function MobileFooter() {
  const GITHUB_URL = "https://github.com";
  const WEBSITE_URL = "https://votre-site.com";

  return (
    <footer className="bg-footer-white text-black">
      <div className="px-5 pb-10 pt-12">
        {/* CTA Card */}
        <div className="rounded-3xl bg-primary px-6 py-10 text-center">
          <p className="text-xs font-semibold text-blue-100">
            Tes cours toujours avec toi
          </p>
          <h2 className="mt-2 text-2xl font-display font-semibold text-white">
            Commence maintenant sur DocStore
          </h2>
          <p className="mt-2 text-sm text-blue-100">
            Telecharge l&apos;app ou ouvre la version web en un clic.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-transform active:scale-95"
            >
              Telecharger l&apos;app
            </a>
            <a
              href={WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors active:bg-white active:text-primary"
            >
              Version web
            </a>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform active:scale-95"
            >
              <Image
                src="/images/app-store.svg"
                alt="Telecharger sur App Store"
                width={140}
                height={42}
                className="h-auto w-32"
              />
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform active:scale-95"
            >
              <Image
                src="/images/google-play.svg"
                alt="Telecharger sur Google Play"
                width={140}
                height={42}
                className="h-auto w-32"
              />
            </a>
          </div>
        </div>

        {/* Logo + description */}
        <div className="mt-10">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="DocStore"
              width={28}
              height={28}
              className="h-10 w-10"
            />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-6">
            DocStore aide les étudiants et candidats à gagner du temps dans leur
            préparation : moins de recherche, plus de concentration sur
            l&apos;essentiel — apprendre, s&apos;exercer et réussir les examens.
          </p>
        </div>

        {/* Links + contact */}
        <div className="mt-8">
          <p className="text-sm font-semibold">Liens rapides</p>
          <ul className="mt-3 space-y-2 text-sm text-primary">
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
                href="#features"
                className="hover:text-blue-800 transition-colors"
              >
                Comment ça marche
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
          <div className="mt-5 space-y-1 text-sm text-muted-foreground">
            <p>rahim100codeur@gmail.com</p>
            <p>+228 91 79 61 15</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-primary/10 pt-5 flex items-center justify-between text-xs text-muted-foreground">
          <p>© 2026 DocStore. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-primary/20 p-2 text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 2C6.48 2 2 6.59 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.06A9.36 9.36 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.48.1 2.74.64.73 1.03 1.65 1.03 2.78 0 3.97-2.34 4.85-4.57 5.1.36.33.68.98.68 1.99 0 1.44-.01 2.59-.01 2.94 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.59 17.52 2 12 2Z" />
              </svg>
            </a>
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Site web"
              className="rounded-full border border-primary/20 p-2 text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a15 15 0 0 1 0 18" />
                <path d="M12 3a15 15 0 0 0 0 18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

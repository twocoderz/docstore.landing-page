"use client";

import Image from "next/image";
import Link from "next/link";
import { APP_URL, WEB_URL } from "@/lib/content";
import { Button } from "./Button";

export default function Footer() {
  const GITHUB_URL = "https://github.com/twocoderz/docstore.mobile";
  const WEBSITE_URL = "https://twocoderz-team.vercel.app/";

  const openExternalPage = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative overflow-hidden bg-footer-white text-black">
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8">
        {/* CTA Card */}
        <div className="rounded-md bg-black/5 px-6 py-10 sm:px-8 sm:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl text-center lg:text-left">
              <h2 className="mt-2 text-3xl font-display max-w-lg font-semibold text-black sm:text-4xl">
                Commence maintenant sur DocStore
              </h2>
              <p className="mt-3 text-sm max-w-lg text-black sm:text-base">
                Télécharge l&apos;app pour réviser partout, ou ouvre la version
                web en un clic.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  openExternalPage("https://docstore-univ.vercel.app/")
                }
                aria-label="Télécharger l'application via Play Store"
                className="font-medium"
              >
                Télécharger l&apos;app
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  openExternalPage("https://docstore-univ.vercel.app/")
                }
                aria-label="Voir la version web"
                className="font-medium"
              >
                Version web
              </Button>
            </div>
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
            <p className="text-sm font-semibold text-black/70">Liens rapides</p>
            <ul className="mt-4 space-y-3 text-sm text-black/50">
              <li>
                <Link
                  href="#features"
                  className="hover:text-black transition-colors"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-black transition-colors"
                >
                  Témoignages
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-sm text-black/50">
              <p className="hover:text-black">+228 91 79 61 15</p>
              <p className="hover:text-black">rahim100codeur@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-around border-t border-primary/10 pt-6 text-sm text-black-100">
          <p>© 2026 DocStore. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-black/50 transition-all hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 2C6.48 2 2 6.59 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.06A9.36 9.36 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.48.1 2.74.64.73 1.03 1.65 1.03 2.78 0 3.97-2.34 4.85-4.57 5.1.36.33.68.98.68 1.99 0 1.44-.01 2.59-.01 2.94 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.59 17.52 2 12 2Z" />
              </svg>
            </a>
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Site web"
              className="text-black/50 transition-all hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
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

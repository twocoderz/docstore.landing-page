"use client";

import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "@/lib/content";

/**
 * Mobile footer — simplified single-column layout.
 * CTA card + minimal links + contact.
 */
export default function MobileFooter() {
  return (
    <footer className="bg-footer-white text-black">
      <div className="px-5 pb-10 pt-12">
        {/* CTA Card */}
        <div className="rounded-3xl bg-primary px-6 py-10 text-center">
          <p className="text-xs font-semibold text-blue-100">
            Tes cours toujours avec toi
          </p>
          <h2 className="mt-2 text-2xl font-display font-semibold text-white">
            Téléchargez DocStore
          </h2>
          <p className="mt-2 text-sm text-blue-100">
            Valide toutes tes UEs avec DocStore.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform active:scale-95"
            >
              <Image
                src="/images/app-store.svg"
                alt="Télécharger sur App Store"
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
                alt="Télécharger sur Google Play"
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
          <span className="text-primary border border-primary/20 px-3 py-2 rounded-full text-xs font-medium">
            Nous suivre
          </span>
        </div>
      </div>
    </footer>
  );
}

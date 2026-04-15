"use client";

import Image from "next/image";
import { useRef } from "react";
import { useHeroAnimation } from "@/hooks/useAnimations";
import { Button } from "./Button";

export default function HomeSection() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);

  useHeroAnimation(titleRef, subtitleRef, buttonRef, phoneRef);
  const openExternalPage = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* Background glow + arcs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-105 w-105 rounded-full bg-hero-primary-glow" />
        <div className="absolute -right-32 top-10 h-130 w-130 rounded-full bg-hero-accent-glow" />
        <svg
          className="absolute right-0 top-0 h-105 w-155 opacity-40"
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

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <h1
              ref={titleRef}
              className="mt-3 font-display font-semibold text-foreground text-6xl"
            >
              Réussis tes examens et devoirs avec
              <span className="block text-primary"> DocStore. </span>
            </h1>
            <p
              ref={subtitleRef}
              className="mt-8 max-w-xl leading-10 text-lg lg:text-xl text-muted-foreground"
            >
              Tous tes supports académiques au même endroit : cours, TD,
              examens, concours et documents PDF, accessibles rapidement sur
              mobile — même hors ligne.
            </p>

            <div
              ref={buttonRef}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
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
                  className="h-auto w-40"
                />
              </a>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  openExternalPage("https://docstore-univ.vercel.app/")
                }
                aria-label="Voir la version web"
                className="font-semibold"
              >
                Version web
              </Button>
            </div>

            <div className="mt-6 mb-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                4.9
              </span>
              <span>Note moyenne sur les stores</span>
            </div>
          </div>

          {/* Right image*/}
          <div
            ref={phoneRef}
            className="relative flex items-center justify-center"
          >
            <Image
              src="/images/screens1.svg"
              alt="Aperçu de l'application DocStore"
              width={520}
              height={520}
              className="h-auto w-75 max-w-full sm:w-90 lg:w-205"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

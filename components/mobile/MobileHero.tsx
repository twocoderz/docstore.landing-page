"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { heroContent, appScreenshots, APP_URL } from "@/lib/content";

/**
 * Mobile hero section:
 *   1. Big headline + subtitle
 *   2. App Store / Play Store badges (anchor target #download)
 *   3. Auto-rotating screenshot carousel (3.5s) with swipe support
 *
 * No GSAP / Lenis — pure CSS transitions + touch events for perf.
 */
export default function MobileHero() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = appScreenshots.length;

  /* ── Autoplay ─────────────────────────────────────────────── */
  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
    }, 3500);
  }, [total, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  /* ── Swipe handling ───────────────────────────────────────── */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    stopAutoplay();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    const threshold = 50;
    if (touchDeltaX.current < -threshold) {
      setCurrent((p) => (p + 1) % total);
    } else if (touchDeltaX.current > threshold) {
      setCurrent((p) => (p - 1 + total) % total);
    }
    startAutoplay();
  };

  return (
    <section
      id="home"
      className="relative bg-background pt-20 pb-10 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-hero-primary-glow opacity-60" />
      </div>

      <div className="relative px-5">
        {/* ── Headline ──────────────────────────────────────── */}
        <h1 className="text-[2rem] leading-10 font-display font-semibold text-foreground">
          {heroContent.title}
          <span className="block text-primary">{heroContent.titleAccent}</span>
        </h1>

        <p className="mt-5 text-base leading-7 text-muted-foreground">
          {heroContent.subtitle}
        </p>

        {/* ── Store badges (scroll target) ──────────────────── */}
        <div id="download" className="mt-8 flex items-center gap-3">
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
              className="h-auto w-36"
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
              className="h-auto w-36"
            />
          </a>
        </div>

        {/* ── Screenshot carousel ───────────────────────────── */}
        <div
          className="mt-10 relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {appScreenshots.map((shot, i) => (
                <div
                  key={i}
                  className="w-full shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={340}
                    height={680}
                    className="h-auto w-64 max-w-full"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {appScreenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  startAutoplay();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Capture ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

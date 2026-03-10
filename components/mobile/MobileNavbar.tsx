"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Mobile navbar: logo (left) + nav link (center) + CTA button (right).
 * Nav link smooth-scrolls to the #testimonials section.
 * The CTA button smooth-scrolls to the #download section.
 */
export default function MobileNavbar() {
  const scrollToDownload = () => {
    const el = document.getElementById("download");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonials = () => {
    const el = document.getElementById("testimonials");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 h-16">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="DocStore"
            width={28}
            height={28}
            className="h-10 w-10"
            priority
          />
        </Link>

        {/* Nav link — scrolls to #testimonials */}
        <button
          onClick={scrollToTestimonials}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Témoignages
        </button>

        {/* CTA — scrolls to store badges */}
        <button
          onClick={scrollToDownload}
          className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-md active:scale-95 transition-all"
        >
          Télécharger l&apos;app
        </button>
      </div>
    </nav>
  );
}

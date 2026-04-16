"use client";

import Image from "next/image";
import { testimonials } from "@/lib/content";

// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-amber-400" : "text-amber-200"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// Quotation mark SVG icon
function QuotationMark() {
  return (
    <svg
      className="h-6 w-6 text-gray-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.25-2.25-7-2s-6.3.75-7 2c-.75 1-1 4-1 7s1.42 8 7 8z" />
    </svg>
  );
}

/**
 * Mobile testimonial section — horizontal card grid.
 * Clean, minimaliste design with quotation marks, avatars, and ratings.
 */
export default function MobileTestimonials() {
  return (
    <section id="testimonials" className="bg-background py-14 px-5">
      <h2 className="text-2xl font-display font-semibold text-foreground">
        Ce que nos utilisateurs racontent
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            {/* Quote Mark */}
            <div className="mb-3">
              <QuotationMark />
            </div>

            {/* Quote */}
            <p className="mb-4 text-xs leading-5 text-gray-600">"{t.quote}"</p>

            {/* Author Section */}
            <div className="mt-auto flex items-center gap-2">
              <Image
                src={t.image}
                alt={t.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border border-gray-200 object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="truncate text-xs text-gray-500">{t.role}</p>
              </div>
              <StarRating rating={t.rating} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

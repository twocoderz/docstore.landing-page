"use client";

import Image from "next/image";
import { useRef } from "react";
import { testimonials } from "@/lib/content";
import { useFadeInUp } from "@/hooks/useAnimations";

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
      className="h-8 w-8 text-gray-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.25-2.25-7-2s-6.3.75-7 2c-.75 1-1 4-1 7s1.42 8 7 8z" />
    </svg>
  );
}

export default function TestimonialSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useFadeInUp(containerRef, 0.05, 0.9, 24);

  return (
    <section id="testimonials" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-5xl font-display max-w-lg font-semibold text-foreground">
          Témoignages
        </h2>

        <div
          ref={containerRef}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-sm"
            >
              {/* Quote Mark */}
              <div className="mb-4">
                <QuotationMark />
              </div>

              {/* Quote */}
              <p className="mb-6 text-sm leading-6 text-gray-600">
                "{testimonial.quote}"
              </p>

              {/* Author Section */}
              <div className="mt-auto flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border border-gray-200 object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

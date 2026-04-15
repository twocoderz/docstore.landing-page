"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFadeInUp, useParallax } from "@/hooks/useAnimations";

const testimonials = [
  {
    quote:
      "Depuis DocStore, notre équipe retrouve chaque fichier en quelques secondes. La collaboration est fluide et l’historique évite les erreurs.",
    name: "Moussa Traoré",
    role: "CEO, PageBulb",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=48&fit=crop&crop=faces",
  },
  {
    quote:
      "Nous avons réduit de 40% le temps passé à chercher des documents. Les permissions granulaires nous ont vraiment aidés.",
    name: "Sarah Kouamé",
    role: "Ops Lead, KiteLab",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=48&fit=crop&crop=faces",
  },
  {
    quote:
      "L’interface est claire, rapide et sécurisée. DocStore est devenu notre source unique de vérité.",
    name: "Yann Ndiaye",
    role: "Head of Product, Orbis",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=48&fit=crop&crop=faces",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useFadeInUp(contentRef, 0.05, 0.9, 24);
  useParallax(imageRef, 8);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="testimonials" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div ref={contentRef}>
            <h2 className="mt-3 text-3xl font-display font-semibold text-foreground sm:text-4xl">
              Ce que nos utilisateurs racontent
            </h2>
            <p className="mt-6 text-md max-w-xs text-muted-foreground">
              “{testimonials[active].quote}”
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-foreground">
                {testimonials[active].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[active].role}
              </p>
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative flex justify-center lg:justify-end"
          >
            <Image
              src={testimonials[active].image}
              alt={`Photo de ${testimonials[active].name}`}
              width={160}
              height={48}
              className="w-auto h-100"
            />
            <div className="absolute -right-6 top-1/2 flex -translate-y-1/2 flex-col gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className={`h-3 w-3 rounded-full ${
                    index === active ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

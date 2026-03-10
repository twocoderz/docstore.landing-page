"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "revise",
    title: "Révision centralisée",
    description:
      "Retrouve en un seul espace écoles, filières, UE, ressources pédagogiques et concours.",
    image: "/images/revise.svg",
    highlights: [
      {
        title: "Sécurité niveau entreprise",
        description:
          "Chiffrement, permissions granulaires et journaux d’activité pour protéger vos contenus sensibles.",
      },
      {
        title: "Meilleurs investissements temps",
        description:
          "Recherche instantanée, prévisualisations et modèles prêts à l’emploi pour aller plus vite.",
      },
      {
        title: "Sous surveillance active",
        description:
          "Alertes intelligentes, versions automatiques et accès contrôlés pour rester serein.",
      },
    ],
  },
  {
    id: "read",
    title: "Documents prêts à lire",
    description:
      "Ouvre instantanément les PDF (cours, exercices, tutoriels, examens) depuis l'application.",
    image: "/images/open-file.svg",
    highlights: [
      {
        title: "Visualisation fluide",
        description:
          "Un moteur de lecture optimisé pour tous vos supports académiques.",
      },
      {
        title: "Annotation rapide",
        description:
          "Prenez des notes directement sur vos documents PDF lors de vos révisions.",
      },
      {
        title: "Indexation automatique",
        description:
          "Vos documents sont classés intelligemment pour un accès sans effort.",
      },
    ],
  },
  {
    id: "offline",
    title: "Mode hors ligne pour réviser partout",
    description:
      "Télécharge tes documents et continue de travailler sans connexion.",
    image: "/images/download.svg",
    highlights: [
      {
        title: "Accès permanent",
        description:
          "Vos fichiers restent disponibles même dans les zones sans réseau.",
      },
      {
        title: "Économie de données",
        description:
          "Téléchargez une fois en WiFi et révisez toute la journée.",
      },
      {
        title: "Synchronisation auto",
        description:
          "Vos modifications sont synchronisées dès que vous retrouvez une connexion.",
      },
    ],
  },
  {
    id: "search",
    title: "Recherche rapide et ciblée",
    description:
      "Trouve vite un contenu grâce à la recherche multi-entités et à l'historique.",
    image: "/images/search.svg",
    highlights: [
      {
        title: "Moteur puissant",
        description:
          "Recherchez par mot-clé, UE, ou même directement dans le texte des PDF.",
      },
      {
        title: "Filtres avancés",
        description:
          "Affinez vos résultats par année, école ou type de document.",
      },
      {
        title: "Historique intelligent",
        description: "Retrouvez vos recherches récentes en un clin d'œil.",
      },
    ],
  },
  {
    id: "share",
    title: "Partage simple avec tes camarades",
    description: "Envoie un document en quelques secondes.",
    image: "/images/share.svg",
    highlights: [
      {
        title: "Collaboration directe",
        description:
          "Partagez vos notes et documents avec votre groupe d'étude.",
      },
      {
        title: "Liens sécurisés",
        description:
          "Contrôlez qui peut voir ou télécharger vos documents partagés.",
      },
      {
        title: "Export multi-format",
        description:
          "Exportez et partagez vos documents vers d'autres applications facilement.",
      },
    ],
  },
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !imagesRef.current || !textColumnRef.current)
        return;

      const sections = gsap.utils.toArray<HTMLElement>(".feature-content");
      const images = gsap.utils.toArray<HTMLElement>(".feature-image-wrapper");

      // Pin the main container
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${sections.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Animation loop for each section
      sections.forEach((section, i) => {
        if (i === 0) {
          // Initial state for the first section is visible
          gsap.set(images[0], { opacity: 1, scale: 1 });
          gsap.set(section, { opacity: 1, y: 0 });
          return;
        }

        const prevSection = sections[i - 1];
        const prevImage = images[i - 1];

        // Transition timeline
        scrollTl
          .to(prevSection, { opacity: 0, y: -50, duration: 0.5 }, i)
          .to(prevImage, { opacity: 0, scale: 0.9, duration: 0.5 }, i)
          .fromTo(
            section,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 },
            i + 0.2,
          )
          .fromTo(
            images[i],
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1, duration: 0.5 },
            i + 0.2,
          );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-background"
    >
      <div className="relative mx-auto h-full max-w-7xl px-6 lg:px-8">
        <div className="grid h-full items-center mt-8 gap-12 lg:grid-cols-2">
          {/* Left Column: Fixed Images stack */}
          <div className="relative flex h-full items-center justify-center overflow-hidden">
            <div ref={imagesRef} className="relative h-[80%] w-full">
              {features.map((feature, i) => (
                <div
                  key={`img-${feature.id}`}
                  className="feature-image-wrapper absolute inset-0 flex items-center justify-center opacity-0"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={520}
                    height={520}
                    className="h-auto w-75 max-w-full sm:w-90 lg:w-105"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Animating Text stack */}
          <div ref={textColumnRef} className="relative h-full">
            {features.map((feature) => (
              <div
                key={`text-${feature.id}`}
                className="feature-content absolute inset-0 flex flex-col justify-center opacity-0"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground sm:text-4xl">
                  {feature.title}
                </h2>
                <p className="mt-4 text-lg lg:text-xl text-muted-foreground">
                  {feature.description}
                </p>

                <div className="mt-10 space-y-6">
                  {feature.highlights.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                          aria-hidden="true"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            fill="currentColor"
                            opacity="0.18"
                          />
                          <path
                            d="M9 12.5l2 2 4-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

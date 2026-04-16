/**
 * Shared content data used by both desktop and mobile landing pages.
 * Single source of truth — no duplication between variants.
 */

export const APP_NAME = "DocStore";
export const APP_URL = "https://docstore-univ.vercel.app/";

export const navLinks = [
  { name: "Fonctionnalités", href: "#features" },
  { name: "Témoignages", href: "#testimonials" },
] as const;

export const heroContent = {
  title: "Réussis tes examens et devoirs avec",
  titleAccent: "DocStore.",
  subtitle:
    "Tous tes supports académiques au même endroit : cours, TD, examens, concours et documents PDF, accessibles rapidement sur mobile — même hors ligne.",
  rating: "4.9",
  ratingLabel: "Note moyenne sur les stores",
} as const;

export const appScreenshots = [
  { src: "/images/screens1.svg", alt: "Écran principal DocStore" },
  { src: "/images/screens2.svg", alt: "Écran filières DocStore" },
  { src: "/images/filieres-screen.svg", alt: "Vue filières" },
  { src: "/images/ues-screen.svg", alt: "Vue UEs" },
] as const;

export const testimonials = [
  {
    quote:
      "Depuis DocStore, notre équipe retrouve chaque fichier en quelques secondes. La collaboration est fluide et l'historique évite les erreurs.",
    name: "Moussa Traoré",
    role: "CEO, PageBulb",
    image: "/images/users/user1.jpg",
    rating: 4,
  },
  {
    quote:
      "Nous avons réduit de 40% le temps passé à chercher des documents. Les permissions granulaires nous ont vraiment aidés.",
    name: "Sarah Kouamé",
    role: "Ops Lead, KiteLab",
    image: "/images/users/user2.jpg",
    rating: 5,
  },
  {
    quote:
      "L'interface est claire, rapide et sécurisée. DocStore est devenu notre source unique de vérité.",
    name: "Yann Ndiaye",
    role: "Head of Product, Orbis",
    image: "/images/users/user3.jpg",
    rating: 3,
  },
  {
    quote:
      "L'interface est claire, rapide et sécurisée. DocStore est devenu notre source unique de vérité.",
    name: "Yann Ndiaye",
    role: "Head of Product, Orbis",
    image: "/images/users/user3.jpg",
    rating: 2,
  },
  {
    quote:
      "L'interface est claire, rapide et sécurisée. DocStore est devenu notre source unique de vérité.",
    name: "Yann Ndiaye",
    role: "Head of Product, Orbis",
    image: "/images/users/user3.jpg",
    rating: 4,
  },
] as const;

export const features = [
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
          "Chiffrement, permissions granulaires et journaux d'activité pour protéger vos contenus sensibles.",
      },
      {
        title: "Meilleurs investissements temps",
        description:
          "Recherche instantanée, prévisualisations et modèles prêts à l'emploi pour aller plus vite.",
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
] as const;

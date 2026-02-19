'use client';

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Composant React qui active un défilement fluide (« smooth scroll ») via Lenis,
 * et synchronise ce défilement avec GSAP ScrollTrigger (notamment utile pour les
 * animations au scroll, les sections “pinned” et les effets de parallaxe).
 *
 * @remarks
 * Au montage du composant :
 * - Instancie Lenis avec une durée d’animation, une fonction d’“easing”, le support
 *   de la molette (“smoothWheel”) et un multiplicateur tactile.
 * - Relie l’événement de scroll de Lenis à `ScrollTrigger.update()` afin que GSAP
 *   recalculent correctement les déclenchements et positions d’animation.
 * - Lance une boucle `requestAnimationFrame` qui appelle `lenis.raf(time)` pour
 *   animer le défilement de manière continue et performante.
 * - Configure `ScrollTrigger.scrollerProxy` sur `document.body` pour que ScrollTrigger
 *   lise/écrive la position de scroll via Lenis, ce qui évite des désynchronisations
 *   (en particulier quand des éléments sont épinglés (“pinned”) ou en parallaxe).
 *
 * Au démontage du composant :
 * - Détruit l’instance Lenis.
 * - Supprime (kill) tous les triggers ScrollTrigger afin d’éviter les fuites mémoire
 *   et les comportements résiduels.
 *
 * @param props - Propriétés du composant.
 * @param props.children - Contenu React à rendre à l’intérieur du wrapper.
 * @returns Le rendu des enfants, avec le comportement de défilement fluide activé.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.5
        });

        // Synchronisation lenis avec GSAP ScrollTriger
        lenis.on('scroll', ScrollTrigger.update);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf);

        // Important pour les sections pinned / parallax
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                if (arguments.length) lenis.scrollTo(value as number, {immediate: true});
                return lenis.scroll;
            },
            getBoundingClientRect() {
                return document.body.getBoundingClientRect();
            }
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);
    return <>{children}</>
}
// Ce fichier contiendra toutes les animations GSAP avec des explicaitons claires.
'use client';

import { RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/** 
 * 1. Fade In Up simple (très utilisé pour les titres et textes)
 * Explication : Élément arrive du bas avec opacité. Parfait pour hero, sous-titres, cartes.
 * Performance : Très légère, durée courte.
 */
export function useFadeInUp(
    ref: RefObject<HTMLElement>,
    delay: number = 0,
    duration: number = 1,
    y: number = 60
) {
    useGSAP(() => {
        if (!ref.current) return;
        gsap.fromTo(
            ref.current,
            { opacity: 0, y },
            {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease: 'power3.out',
            }
        );
    }, {scope: ref });
}

/** 
 * 2. Stagger (animations en cascade) – idéal pour les grilles de features
 * Explication : Tous les enfants d’un container s’animent l’un après l’autre.
 * Utilisation : Passe le ref du parent + le sélecteur des enfants (ex: '.feature-card')
 */
export function useStaggerFadeIn(
    containerRef: RefObject<HTMLElement>,
    childSelector: string = '.animate-item',
    staggerDelay: number = 0.1
) {
    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            containerRef.current.querySelectorAll(childSelector),
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: staggerDelay,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, { scope: containerRef });
}

/** 
 * 3. Parallax léger (très beau sur le mockup téléphone de la landing)
 * Explication : L’élément bouge lentement pendant le scroll (effet profondeur).
 * Amount = pourcentage de mouvement (15% = doux, 30% = plus marqué)
 */
export function useParallax(
    ref: RefObject<HTMLElement>,
    amount: number = 15,
    start: string = 'top bottom',
    end: string = 'bottom top'
) {
    useGSAP(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            yPercent: -amount,
            ease: 'none',
            scrollTrigger: {
                trigger: ref.current,
                start,
                end,
                scrub: 1.5,     // plus le chiffre est haut, plus c'est fluide
                toggleActions: 'play none none reverse',
            },
        });
    }, { scope: ref });
}

/** 
 * 4. Counter animé (pour les stats : "12 450 documents", "98% satisfaction", etc.)
 * Explication : Le nombre monte progressivement au scroll. Très engageant sur landing.
 */
export function useAnimatedCounter(
    ref: RefObject<HTMLElement>,
    target: number,
    duration: number = 2.5,
    prefix: string = '',
    suffix: string = ''
) {
    useGSAP(() => {
        if (!ref.current) return;

        const obj = { count: 0 };
        gsap.to(obj, {
            count: target,
            duration,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                once: true,
            },
            onUpdate: () => {
                ref.current!.textContent = prefix + Math.floor(obj.count).toLocaleString('fr-FR') + suffix;
            },
        });
    }, {scope: ref });
}

/** 
 * 5. Animation Hero complète (titre + sous-titre + bouton + mockup)
 * Explication : Animation d’entrée au chargement + parallax sur le téléphone.
 * Réutilisable directement dans ton Hero.
 */
export function useHeroAnimation(
    titleRef: RefObject<HTMLElement>,
    subtitleRef: RefObject<HTMLElement>,
    buttonRef: RefObject<HTMLElement>,
    phoneRef: RefObject<HTMLElement>
) {
    // Entree au chargement
    useGSAP(() => {
        const t1 = gsap.timeline();

        t1.fromTo(
            titleRef.current,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1.2 ,ease: 'power4.out'}
        )
        .fromTo(
            subtitleRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1 , ease: 'power3.out'},
            '-=0.8'
        )
        .fromTo(
            buttonRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' },
            '-=0.6'
        );
    }, []);

    // Parallax sur le telephone
    useParallax(phoneRef, 18);
}
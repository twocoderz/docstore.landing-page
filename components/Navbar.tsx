'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détection scroll pour changer le style (shadow + bg opacity)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'A-propos', href: '#about' },
    { name: 'Comment ça marche', href: '#how-it-works' },
    { name: 'Témoignages', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm'
          : 'bg-background/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" >
              <Image
                src="/logo.svg"
                alt="DocStore"
                width={28}
                height={28}
                className="h-18 w-18"
                priority
              />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://docstore-univ.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Télécharger l&apos;app
            </a>
          </div>

          {/* Hamburger - Mobile */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <Image
                src="/icons/close.svg"
                alt="Fermer le menu"
                width={28}
                height={28}
                className="h-7 w-7"
              />
            ) : (
              <Image
                src="/icons/menu.svg"
                alt="Ouvrir le menu"
                width={28}
                height={28}
                className="h-7 w-7"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-6 bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg text-foreground hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://docstore-univ.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl text-center hover:bg-primary/90 transition-all shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Télécharger l&apos;app
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

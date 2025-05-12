// -----------------------------------------------------------------------------
// Navbar.tsx
// -----------------------------------------------------------------------------
// Composant de barre de navigation principal du site Sotorec.
// - Affiche le logo, la navigation desktop et le menu mobile animé.
// - Gère l'effet de scroll, l'ouverture/fermeture du menu mobile, et l'animation.
// -----------------------------------------------------------------------------

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ShinyTextButton from './ShinyTextButton';

// Liste des liens de navigation
const navItems = [
  { name: 'Accueil', href: '#' },
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Tarifs', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

// Variantes d'animation pour le logo
const logoVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.8 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  hover: { scale: 1.08, transition: { type: 'spring', stiffness: 300 } },
};

// Variantes d'animation pour les liens de navigation
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.08, duration: 0.5 } }),
  hover: { scale: 1.08, color: '#0ea5e9' },
};

// Variantes d'animation pour le bouton premium
const buttonVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
  hover: { scale: 1.05, boxShadow: '0 4px 24px 0 rgba(14,165,233,0.15)' },
  tap: { scale: 0.97 },
};

export default function Navbar() {
  // Etat pour savoir si la page est scrollée (pour changer le fond de la navbar)
  const [isScrolled, setIsScrolled] = useState(false);
  // Etat pour ouvrir/fermer le menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ajoute un écouteur de scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-[9999] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo animé Sotorec */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/logo_sotorec.png" alt="Logo Sotorec" className="h-16 w-auto" />
              {/* Titre texte visible uniquement sur desktop */}
              <span className="hidden sm:inline text-xl font-heading font-bold text-primary-700 whitespace-nowrap">
                Sotorec
              </span>
            </Link>
          </motion.div>

          {/* Navigation desktop (masquée sur mobile) */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="inline-block"
              >
                <Link
                  href={item.href}
                  className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200
                    ${isScrolled ? 'text-gray-900' : 'text-white'}
                    hover:bg-blue-50 hover:text-primary-700 hover:shadow-md hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-primary-400`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            {/* Bouton premium animé */}
            <ShinyTextButton href="#contact" />
          </div>

          {/* Bouton hamburger pour ouvrir/fermer le menu mobile */}
          <button
            className="md:hidden z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Ouvrir le menu mobile"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              {/* 3 barres du hamburger */}
              <span className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile plein écran, animé avec Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-white/95 z-[200] fixed top-0 left-0 w-full h-screen shadow-2xl flex flex-col"
          >
            {/* Bouton Fermer (croix) en haut à droite */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-2xl text-primary-700 hover:text-orange-400 hover:bg-primary-100 transition-all duration-200 font-bold focus:outline-none z-20"
              aria-label="Fermer le menu mobile"
            >
              ×
            </button>
            <div className="container mx-auto px-4 py-4 flex-1 flex flex-col justify-center">
              <div className="flex flex-col space-y-4">
                {/* Liens de navigation mobile */}
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-900 font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:bg-blue-50 hover:text-primary-700 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Bouton premium mobile */}
                <ShinyTextButton href="#contact" className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 
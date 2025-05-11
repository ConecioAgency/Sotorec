'use client';

import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SplitText from './components/SplitText';
import BlurText from './components/BlurText';
import DevisModal from './components/DevisModal';
import { useState } from 'react';
import DigitalMarketingModal from './components/DigitalMarketingModal';
import Footer from './components/Footer';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [digitalModalOpen, setDigitalModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white">
        {/* Vidéo de fond */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/video1.mp4"
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [100, 0, 100],
              y: [50, 0, 50],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-20 flex flex-col items-center justify-center h-full">
          <div className="flex-1 flex flex-col justify-center">
            <SplitText text="Expertise Comptable & Consulting" className="text-3xl md:text-5xl font-heading font-bold mb-4 drop-shadow-lg max-w-4xl mx-auto break-words" />
            <BlurText text="Votre partenaire de confiance pour la croissance de votre entreprise" className="text-xl md:text-2xl max-w-2xl mx-auto text-primary-100 drop-shadow mb-4" />
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-white text-base shadow-lg bg-gradient-to-r from-primary-900 via-primary-600 to-orange-400 hover:scale-105 transition-all duration-200 mt-2 mx-auto"
              onClick={() => setModalOpen(true)}
            >
              Demander un devis gratuit
              <span className="ml-1 text-lg">→</span>
            </motion.button>
          </div>
          <DevisModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Bouton vertical flottant partenaire digital */}
      <button
        onClick={() => setDigitalModalOpen(true)}
        className="hidden md:flex fixed top-1/2 right-0 z-[9999] px-4 py-3 rounded-l-2xl bg-orange-500 text-white font-bold shadow-lg hover:bg-orange-600 transition-colors duration-200 text-xs tracking-widest rotate-[-90deg] origin-bottom-right"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'translateY(-50%)' }}
      >
        DIGITAL MARKETING
      </button>
      <DigitalMarketingModal open={digitalModalOpen} onClose={() => setDigitalModalOpen(false)} />
      <Footer />
    </main>
  );
} 
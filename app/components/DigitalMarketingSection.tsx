"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaSearch, FaBullhorn, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: FaGlobe,
    title: "Création de site web & app",
    description: "Sites vitrines, e-commerce, applications mobiles et web sur-mesure pour booster votre présence digitale.",
    accent: "bg-orange-100 text-orange-500",
  },
  {
    icon: FaSearch,
    title: "SEO & Référencement",
    description: "Optimisation de votre visibilité sur Google pour attirer plus de clients qualifiés.",
    accent: "bg-primary-100 text-primary-600",
  },
  {
    icon: FaBullhorn,
    title: "Publicité en ligne (Ads)",
    description: "Campagnes Google Ads, Facebook/Instagram Ads, LinkedIn Ads pour générer des leads et des ventes.",
    accent: "bg-orange-100 text-orange-500",
  },
  {
    icon: FaPaintBrush,
    title: "Branding & Identité visuelle",
    description: "Création de logo, charte graphique, supports de communication pour une image de marque forte.",
    accent: "bg-primary-100 text-primary-600",
  },
  {
    icon: FaMobileAlt,
    title: "Réseaux sociaux & Community management",
    description: "Stratégie, animation et gestion de vos réseaux sociaux pour engager votre audience.",
    accent: "bg-orange-100 text-orange-500",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function DigitalMarketingSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto relative">
        <div className="flex justify-end mb-2">
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm shadow hover:bg-blue-200 transition-colors duration-200 border border-blue-200"
            style={{ minWidth: 180 }}
          >
            Offre partenaire digital
          </a>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4 drop-shadow">
            Digital Marketing pour votre entreprise
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Développez votre activité grâce à des solutions digitales sur-mesure : web, SEO, publicité, branding et réseaux sociaux.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border-2 border-primary-100 hover:border-orange-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 text-3xl transition-all duration-300 shadow-md ${service.accent}`}
              >
                <service.icon />
              </motion.div>
              <h3 className="text-xl font-bold text-primary-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: '#fbbf24', color: '#fff' }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 px-6 py-2 rounded-lg font-semibold text-primary-700 bg-primary-100 hover:bg-orange-400 hover:text-white transition-all duration-300 shadow"
              >
                En savoir plus
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaSearch, FaBullhorn, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    icon: FaGlobe,
    title: 'Création de site web & app',
    description: 'Sites vitrines, e-commerce, applications mobiles et web sur-mesure pour booster votre présence digitale.',
    accent: 'bg-rose-100 text-rose-500',
  },
  {
    icon: FaSearch,
    title: 'SEO & Référencement',
    description: 'Optimisation de votre visibilité sur Google pour attirer plus de clients qualifiés.',
    accent: 'bg-pink-50 text-pink-500',
  },
  {
    icon: FaBullhorn,
    title: 'Publicité en ligne (Ads)',
    description: 'Campagnes Google Ads, Facebook/Instagram Ads, LinkedIn Ads pour générer des leads et des ventes.',
    accent: 'bg-rose-100 text-rose-500',
  },
  {
    icon: FaPaintBrush,
    title: 'Branding & Identité visuelle',
    description: 'Création de logo, charte graphique, supports de communication pour une image de marque forte.',
    accent: 'bg-pink-50 text-pink-500',
  },
  {
    icon: FaMobileAlt,
    title: 'Réseaux sociaux & Community management',
    description: 'Stratégie, animation et gestion de vos réseaux sociaux pour engager votre audience.',
    accent: 'bg-rose-100 text-rose-500',
  },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function DigitalMarketingModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 40 }}
            transition={{ duration: 0.25, type: 'spring' }}
            className="relative bg-white/40 backdrop-blur-2xl border border-white/30 shadow-2xl max-w-md w-full px-4 pt-4 pb-2 rounded-[2rem] flex flex-col items-center overflow-y-auto max-h-[90vh] scrollbar-none"
            style={{ boxShadow: '0 8px 48px 0 rgba(236,72,153,0.15), 0 1.5px 8px 0 rgba(0,0,0,0.08)', scrollbarWidth: 'none' }}
          >
            {/* Glow effet */}
            <div className="absolute -inset-2 rounded-[2.2rem] pointer-events-none bg-gradient-to-br from-rose-200/40 via-white/10 to-pink-200/30 blur-2xl opacity-60 z-0" />
            {/* Bouton fermer */}
            <button
              onClick={onClose}
              className="sticky top-2 left-full ml-[-3rem] w-10 h-10 flex items-center justify-center rounded-full text-2xl text-rose-400 hover:text-rose-600 hover:bg-rose-100/70 transition-all duration-200 font-bold focus:outline-none z-20"
              aria-label="Fermer"
              style={{ alignSelf: 'flex-end' }}
            >
              ×
            </button>
            <h2 className="text-xl md:text-2xl font-heading font-extrabold text-rose-600 mb-3 text-center drop-shadow-lg z-10">
              Digital Marketing – Offre partenaire
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-3 z-10 w-full">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-3 flex flex-col items-center text-center shadow border border-white/40 ${service.accent} bg-white/60 backdrop-blur-md`}
                  style={{ boxShadow: '0 2px 8px 0 rgba(236,72,153,0.08)' }}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-1 text-xl shadow ${service.accent} bg-white/80`}
                    style={{ boxShadow: '0 0 0 2px rgba(236,72,153,0.08)' }}>
                    <service.icon />
                  </div>
                  <h3 className="text-sm font-bold mb-0.5 text-rose-600">{service.title}</h3>
                  <p className="text-gray-700 text-xs leading-snug">{service.description}</p>
                </div>
              ))}
            </div>
            <a
              href="https://conecio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sticky bottom-0 mt-2 py-3 rounded-2xl font-bold text-base text-center bg-gradient-to-r from-rose-500 via-pink-400 to-rose-400 text-white shadow-lg hover:from-rose-600 hover:to-pink-500 transition-all duration-200 z-10"
              style={{ boxShadow: '0 2px 16px 0 rgba(236,72,153,0.18)' }}
            >
              Découvrir plus sur conecio.com
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
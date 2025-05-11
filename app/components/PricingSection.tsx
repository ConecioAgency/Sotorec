'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid';
import GradientText from './GradientText';

const pricingPlans = [
  {
    name: 'Start',
    price: '3 000',
    description: 'Parfait pour les petites entreprises',
    features: [
      'Tenue de comptabilité mensuelle',
      'Déclarations TVA trimestrielles',
      'Suivi des opérations bancaires',
      'Rapports financiers mensuels',
      'Support par email',
    ],
  },
  {
    name: 'Pro',
    price: '6 000',
    description: 'Idéal pour les entreprises en croissance',
    features: [
      'Tout le pack Start',
      'Analyse financière mensuelle',
      'Conseils stratégiques',
      'Optimisation fiscale',
      'Support prioritaire',
      'Accès à la plateforme digitale',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '10 000',
    description: 'Solution complète pour les grandes entreprises',
    features: [
      'Tout le pack Pro',
      'Consulting stratégique',
      'Gestion de trésorerie',
      'Externalisation complète',
      'Accompagnement personnalisé',
      'Formation de vos équipes',
      'Accès VIP aux événements',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-br from-white via-primary-50 to-white">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4 drop-shadow">
            Nos <GradientText className="text-4xl md:text-5xl">Packs & Tarifs</GradientText>
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Des solutions adaptées à chaque étape de votre développement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={itemVariants}
              className={`backdrop-blur-md bg-white/80 rounded-3xl shadow-lg p-10 flex flex-col items-center text-center border-t-4 ${plan.popular ? 'border-blue-300' : 'border-blue-100'} transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-1 rounded-full bg-orange-50 text-orange-500 font-semibold shadow text-xs z-20 border border-orange-200">
                  <StarIcon className="w-4 h-4 text-orange-400" /> Le plus populaire
                </div>
              )}
              <div className="w-14 h-14 flex items-center justify-center rounded-full mb-6 text-2xl shadow bg-blue-50 text-blue-500">
                <StarIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                {plan.name}
              </h3>
              <p className="text-gray-500 mb-6">
                {plan.description}
              </p>
              <div className="mb-6 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-blue-700">
                  {plan.price} DH
                </span>
                <span className="text-blue-400 font-medium">/mois</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-blue-900">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={plan.popular ? { backgroundColor: '#ea580c', color: '#fff' } : { backgroundColor: '#2563eb', color: '#fff' }}
                className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white'}`}
              >
                Choisir {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
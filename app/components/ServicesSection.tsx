'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CalculatorIcon, 
  ChartBarIcon, 
  DocumentTextIcon, 
  UserGroupIcon,
  BriefcaseIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import GradientText from './GradientText';

const services = [
  {
    title: 'Comptabilité',
    description: 'Tenue de comptabilité complète et suivi des opérations financières',
    icon: CalculatorIcon,
    color: 'bg-primary-100 text-primary-700',
    border: 'border-primary-200',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text',
  },
  {
    title: 'Gestion Financière',
    description: 'Analyse financière et conseils stratégiques pour optimiser vos performances',
    icon: ChartBarIcon,
    color: 'bg-orange-100 text-orange-500',
    border: 'border-orange-200',
    gradient: 'bg-gradient-to-r from-orange-400 to-primary-500 text-transparent bg-clip-text',
  },
  {
    title: 'Fiscalité',
    description: 'Optimisation fiscale et accompagnement dans vos déclarations',
    icon: DocumentTextIcon,
    color: 'bg-primary-100 text-primary-700',
    border: 'border-primary-200',
    gradient: 'bg-gradient-to-r from-primary-700 to-primary-400 text-transparent bg-clip-text',
  },
  {
    title: 'Consulting',
    description: 'Conseils stratégiques pour le développement de votre entreprise',
    icon: BriefcaseIcon,
    color: 'bg-orange-100 text-orange-500',
    border: 'border-orange-200',
    gradient: 'bg-gradient-to-r from-orange-400 to-primary-500 text-transparent bg-clip-text',
  },
  {
    title: 'Externalisation',
    description: 'Prise en charge complète de vos processus administratifs',
    icon: UserGroupIcon,
    color: 'bg-primary-100 text-primary-700',
    border: 'border-primary-200',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text',
  },
  {
    title: 'Solutions Digitales',
    description: 'Mise en place d\'outils numériques pour optimiser vos processus',
    icon: CogIcon,
    color: 'bg-orange-100 text-orange-500',
    border: 'border-orange-200',
    gradient: 'bg-gradient-to-r from-orange-400 to-primary-500 text-transparent bg-clip-text',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      delay: 0.2 + i * 0.12, 
      duration: 0.7, 
      type: 'spring' 
    } 
  }),
};

export default function ServicesSection() {
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
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4 drop-shadow">
            Nos <GradientText className="text-4xl md:text-5xl">Services</GradientText>
          </h2>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins pour une gestion optimale de votre entreprise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              variants={fadeIn}
              className={`backdrop-blur-md bg-white/70 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-t-4 ${service.border} hover:border-orange-400 transition-all duration-300 group relative overflow-hidden`}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 8px 32px 0 rgba(14,165,233,0.13)',
                y: -5
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.15, 
                  rotate: -5,
                  boxShadow: '0 0 0 8px rgba(251,191,36,0.10)' 
                }}
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 text-3xl shadow ${service.color} group-hover:shadow-lg transition-all duration-300`}
              >
                <service.icon className="w-8 h-8" />
              </motion.div>
              
              <h3 className={`text-2xl font-bold mb-4 ${service.gradient} group-hover:from-orange-400 group-hover:to-primary-700 transition-colors duration-300`}>
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 group-hover:text-primary-700 transition-colors duration-300">
                {service.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: '#fbbf24', color: '#fff' }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto px-6 py-2 rounded-lg font-semibold text-primary-700 bg-primary-100 hover:bg-orange-400 hover:text-white transition-all duration-300 shadow"
              >
                En savoir plus
              </motion.button>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
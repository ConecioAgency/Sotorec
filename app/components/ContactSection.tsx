'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { MapPinIcon, PhoneIcon, BuildingOffice2Icon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import GradientText from './GradientText';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';

const contactBlocks = [
  {
    icon: BuildingOffice2Icon,
    value: 'SOTOREC SARL',
    label: 'Nom de la société',
    context: "Cabinet d'expertise comptable",
    color: 'bg-primary-100 text-primary-700',
    border: 'border-primary-200',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text',
  },
  {
    icon: MapPinIcon,
    value: '5 Rue Aquitaine',
    label: 'Casablanca 20100',
    context: 'Adresse',
    color: 'bg-orange-100 text-orange-500',
    border: 'border-orange-200',
    gradient: 'bg-gradient-to-r from-orange-400 to-primary-400 text-transparent bg-clip-text',
  },
  {
    icon: PhoneIcon,
    value: '05222-09707',
    label: 'Téléphone',
    context: 'Appelez-nous',
    color: 'bg-primary-100 text-primary-700',
    border: 'border-primary-200',
    gradient: 'bg-gradient-to-r from-primary-700 to-primary-400 text-transparent bg-clip-text',
  },
  {
    icon: ArrowTopRightOnSquareIcon,
    value: 'Voir sur la carte',
    label: '',
    context: 'Google Maps',
    color: 'bg-orange-100 text-orange-500',
    border: 'border-orange-200',
    gradient: 'bg-gradient-to-r from-orange-400 to-primary-400 text-transparent bg-clip-text',
    link: 'https://www.google.com/maps/place/Sotorec+Sarl/@33.596457,-7.615478,26520m/data=!3m1!1e3!4m14!1m7!3m6!1s0xda7d283387f2a93:0xabbe7e22879d3ec3!2sSotorec+Sarl!8m2!3d33.596457!4d-7.615478!16s%2Fg%2F11b6j85jy4!3m5!1s0xda7d283387f2a93:0xabbe7e22879d3ec3!8m2!3d33.596457!4d-7.615478!16s%2Fg%2F11b6j85jy4?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.2 + i * 0.12, duration: 0.7, type: 'spring' } }),
};

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const recaptchaRef = useRef<any>(null);
  const [sending, setSending] = useState(false);

  const onSubmit = (data: any) => {
    setSending(true);
    if (recaptchaRef.current) {
      recaptchaRef.current.execute();
    }
  };

  const onReCAPTCHAChange = (token: string | null) => {
    setSending(false);
    if (!token) return;
    // Récupérer les valeurs du formulaire
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const nom = (form.elements.namedItem('nom') as HTMLInputElement).value;
    const prenom = (form.elements.namedItem('prenom') as HTMLInputElement).value;
    const tel = (form.elements.namedItem('tel') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLInputElement).value;
    const mailto = `mailto:conecioagency@gmail.com?subject=Contact%20depuis%20Sotorec&body=Nom:%20${encodeURIComponent(nom)}%0APrénom:%20${encodeURIComponent(prenom)}%0ATéléphone:%20${encodeURIComponent(tel)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.open(mailto, '_blank');
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Blocs d'infos à gauche */}
        <div className="flex-1 flex flex-col items-start gap-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-2">
            Contactez <GradientText className="text-4xl md:text-5xl ml-2">SOTOREC</GradientText>
          </h2>
          <p className="text-lg text-primary-700 mb-6">Nous sommes à votre écoute pour répondre à toutes vos questions.</p>
          <div className="grid grid-cols-2 gap-8 w-full">
            {contactBlocks.map((block, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                variants={fadeIn}
                className={`backdrop-blur-md bg-white/70 rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border-t-4 ${block.border} hover:border-orange-400 transition-all duration-300 group relative overflow-hidden`}
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(251,191,36,0.13)' }}
              >
                <motion.div
                  whileHover={{ scale: 1.18, boxShadow: '0 0 0 8px rgba(236,72,153,0.10)' }}
                  className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 text-2xl shadow ${block.color} group-hover:shadow-lg transition-all duration-300 animate-pulse`}
                >
                  {block.link ? (
                    <a href={block.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                      <block.icon />
                    </a>
                  ) : (
                    <block.icon />
                  )}
                </motion.div>
                <div className={`text-2xl font-extrabold ${block.gradient} group-hover:from-orange-400 group-hover:to-primary-700 transition-colors duration-300`}>{block.value}</div>
                {block.label && <div className="text-sm text-gray-700 font-medium mt-1">{block.label}</div>}
                <div className="text-xs text-primary-500 font-semibold mt-2 tracking-wide uppercase group-hover:text-orange-500 transition-colors duration-300">{block.context}</div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Formulaire à droite */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 backdrop-blur-md bg-white/70 rounded-2xl shadow-xl p-8 border-t-4 border-primary-200"
        >
          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input type="text" id="nom" name="nom" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                <input type="text" id="prenom" name="prenom" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
            </div>
            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
              <input type="tel" id="tel" name="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <button
              type="submit"
              disabled={sending}
              className={`w-full flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-white text-base shadow-lg bg-gradient-to-r from-primary-900 via-primary-600 to-orange-400 hover:scale-105 transition-all duration-200 mt-2 mx-auto ${sending ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {sending ? 'Vérification...' : 'Envoyer le message'}
              <span className="ml-1 text-lg">→</span>
            </button>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lcy7TUrAAAAAL8LWjcmcmW9mlxth6yPvWYaDNCx"
              size="invisible"
              badge="bottomright"
              onChange={onReCAPTCHAChange}
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
} 
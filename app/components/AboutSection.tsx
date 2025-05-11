'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaAward, FaUsers, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';
import GradientText from './GradientText';
import { useRef } from 'react';

const blocks = [
  {
    icon: FaAward,
    value: '26+',
    label: "ans d'expérience",
    context: 'Un accompagnement sur-mesure',
    color: 'bg-primary-100 text-primary-700',
    border: 'border-primary-200',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text',
  },
  {
    icon: FaUsers,
    value: '70+',
    label: 'Clients accompagnés',
    context: 'Tous secteurs confondus',
    color: 'bg-orange-100 text-orange-500',
    border: 'border-orange-200',
    gradient: 'bg-gradient-to-r from-orange-400 to-primary-500 text-transparent bg-clip-text',
  },
  {
    icon: FaShieldAlt,
    value: 'Agréé',
    label: "Agréé par l'Etat",
    context: "Reconnu par l'Etat",
    color: 'bg-primary-100 text-primary-700',
    border: 'border-primary-200',
    gradient: 'bg-gradient-to-r from-primary-700 to-primary-400 text-transparent bg-clip-text',
  },
  {
    icon: FaLaptopCode,
    value: '100%',
    label: 'Digital & Innovation',
    context: 'Toujours à la pointe',
    color: 'bg-orange-100 text-orange-500',
    border: 'border-orange-200',
    gradient: 'bg-gradient-to-r from-orange-400 to-primary-500 text-transparent bg-clip-text',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.2 + i * 0.12, duration: 0.7, type: 'spring' } }),
};

function TiltedImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px - rect.width / 2);
    y.set(py - rect.height / 2);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="rounded-3xl shadow-2xl w-full max-w-lg object-cover cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <img
        src={src}
        alt={alt}
        className="rounded-3xl w-full h-full object-cover select-none"
        style={{ minHeight: 320, maxHeight: 500 }}
        draggable={false}
      />
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image à gauche avec effet Tilted Card */}
        <TiltedImage src="/images/1.jpg" alt="Notre équipe" />
        {/* Blocs à droite */}
        <div className="flex-1 flex flex-col items-start gap-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-2">
            <GradientText className="text-4xl md:text-5xl mr-2">SOTOREC</GradientText> en chiffres
          </h2>
          <p className="text-lg text-primary-700 mb-6">Depuis 1994, nous accompagnons les entreprises avec expertise, fiabilité et innovation.</p>
          <div className="grid grid-cols-2 gap-8 w-full">
            {blocks.map((block, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                variants={fadeIn}
                className={`backdrop-blur-md bg-white/70 rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border-t-4 ${block.border} hover:border-orange-400 transition-all duration-300 group relative overflow-hidden`}
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(14,165,233,0.13)' }}
              >
                <motion.div
                  whileHover={{ scale: 1.18, boxShadow: '0 0 0 8px rgba(251,191,36,0.10)' }}
                  className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 text-2xl shadow ${block.color} group-hover:shadow-lg transition-all duration-300 animate-pulse`}
                >
                  <block.icon />
                </motion.div>
                <div className={`text-3xl font-extrabold ${block.gradient} group-hover:from-orange-400 group-hover:to-primary-700 transition-colors duration-300`}>{block.value}</div>
                <div className="text-sm text-gray-700 font-medium mt-1">{block.label}</div>
                <div className="text-xs text-primary-500 font-semibold mt-2 tracking-wide uppercase group-hover:text-orange-500 transition-colors duration-300">{block.context}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
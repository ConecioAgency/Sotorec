import { motion } from 'framer-motion';

export default function GradientText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
      className={`bg-gradient-to-r from-primary-600 via-primary-400 to-orange-400 bg-[length:200%_200%] bg-clip-text text-transparent font-extrabold ${className}`}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.span>
  );
} 
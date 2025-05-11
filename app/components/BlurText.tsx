import { motion } from 'framer-motion';

export default function BlurText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {text}
    </motion.span>
  );
} 
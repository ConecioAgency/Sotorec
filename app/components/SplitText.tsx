import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplitText({ text, className = '' }: { text: string; className?: string }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((k) => k + 1);
    }, 3500); // relance toutes les 3.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className} style={{ display: 'inline-block' }} key={key}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04, duration: 0.5 }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
} 
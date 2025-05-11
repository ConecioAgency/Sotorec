import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ShinyTextButton({ href = '#', className = '' }: { href?: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`relative inline-block px-6 py-2 rounded-full font-bold text-base bg-transparent border-2 border-primary-200 hover:border-orange-400 transition-all duration-200 overflow-hidden group ${className}`}
      style={{ minWidth: 160 }}
    >
      <motion.span
        className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-400 to-orange-400 group-hover:from-orange-400 group-hover:to-primary-700 animate-shiny"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: '200% 50%' }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      >
        Contactez-nous
      </motion.span>
      {/* Shiny overlay */}
      <span className="absolute inset-0 z-0 pointer-events-none">
        <motion.span
          className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-white/0 via-white/60 to-white/0 opacity-60 rounded-full blur-sm"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        />
      </span>
    </Link>
  );
}

/* Ajoute dans globals.css :
.animate-shiny {
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
*/ 
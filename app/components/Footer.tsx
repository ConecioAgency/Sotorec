import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a1a36] text-white pt-14 pb-6 px-4 mt-24">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
        {/* Logo + texte + réseaux */}
        <div className="flex flex-col gap-4">
          <img src="/images/logo_sotorec.png" alt="Logo Sotorec" className="h-12 w-auto mb-2" />
          <p className="text-sm text-gray-300 max-w-xs">
            Nous vous accompagnons avec expertise, flexibilité et innovation à chaque étape de votre croissance.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary-700 transition" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary-700 transition" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
        {/* Navigation */}
        <div>
          <h4 className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-widest">Pages</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-orange-400 transition">Accueil</Link></li>
            <li><Link href="#about" className="hover:text-orange-400 transition">À propos</Link></li>
            <li><Link href="#services" className="hover:text-orange-400 transition">Services</Link></li>
            <li><Link href="#pricing" className="hover:text-orange-400 transition">Tarifs</Link></li>
            <li><Link href="#contact" className="hover:text-orange-400 transition">Contact</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-widest">Services</h4>
          <ul className="space-y-2">
            <li><Link href="#services" className="hover:text-orange-400 transition">Comptabilité</Link></li>
            <li><Link href="#services" className="hover:text-orange-400 transition">Gestion financière</Link></li>
            <li><Link href="#services" className="hover:text-orange-400 transition">Fiscalité</Link></li>
            <li><Link href="#services" className="hover:text-orange-400 transition">Conseil</Link></li>
            <li><Link href="#services" className="hover:text-orange-400 transition">Digital</Link></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-widest">Besoin d'aide ?</h4>
          <div className="mb-2">
            <span className="block text-gray-400 text-xs">Téléphone</span>
            <a href="tel:0522209707" className="font-bold text-lg text-white hover:text-orange-400 transition">05222-09707</a>
          </div>
          <div className="mb-2">
            <span className="block text-gray-400 text-xs">Email</span>
            <a href="mailto:contact@sotorec.com" className="font-bold text-white hover:text-orange-400 transition">contact@sotorec.com</a>
          </div>
          <Link href="#contact" className="inline-block mt-2 px-4 py-2 rounded-full border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition font-semibold text-sm">Contactez-nous</Link>
        </div>
        {/* OPCA */}
        <div className="text-center text-white">
          <div className="font-bold uppercase tracking-wider text-gray-300 mb-2">MEMBRE DE L'OPCA</div>
          <a href="https://www.opca.ma/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <img
              src="/images/opca-white.png"
              alt="Logo OPCA"
              className="h-8 w-auto inline-block"
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
          </a>
          <div className="text-sm text-blue-300 mt-2">Organisation Professionnelle des Comptables Agréés du Maroc</div>
        </div>
      </div>
      {/* Barre du bas */}
      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div>&copy; {new Date().getFullYear()} Sotorec. Tous droits réservés.</div>
        <div className="flex items-center gap-4">
          <span>Français</span>
          <Link href="#contact" className="hover:text-orange-400 transition">Contact</Link>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-400 text-white hover:text-white transition text-lg"
          aria-label="Retour en haut"
        >
          ↑
        </button>
      </div>
      <div className="mt-4 text-center text-xs text-gray-500">
        Site créé par 
        <a 
          href="https://www.conecio.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-semibold bg-gradient-to-r from-primary-500 via-pink-400 to-orange-400 bg-clip-text text-transparent hover:text-orange-400 transition duration-300 underline underline-offset-2 hover:brightness-125"
          style={{
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Conecio Agency
        </a>
        &nbsp;– Digital Marketing Agency
      </div>
      <div className="text-center text-xs text-gray-400 mt-1">
        &copy; {new Date().getFullYear()} Sotorec SARL. Tous droits réservés.
      </div>
    </footer>
  );
} 
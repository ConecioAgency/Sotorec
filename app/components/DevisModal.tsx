import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaTimes, FaFileInvoiceDollar } from 'react-icons/fa';
import { useState } from 'react';

export default function DevisModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const onSubmit = (data: any) => {
    if (captcha.trim() !== '7') {
      setCaptchaError('Captcha incorrect');
      return;
    }
    setCaptchaError('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
      setCaptcha('');
      onClose();
    }, 2000);
    // Ici, tu peux envoyer les données à une API ou par email
    console.log('Devis envoyé :', data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, y: 80, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 80, opacity: 0 }}
            transition={{ duration: 0.35, type: 'spring' }}
            className="bg-white rounded-3xl shadow-2xl p-0 w-full max-w-lg relative overflow-hidden"
          >
            {/* Header sobre */}
            <div className="bg-white px-8 py-6 flex items-center gap-3 border-b border-gray-100">
              <FaFileInvoiceDollar className="text-primary-700 text-3xl" />
              <h3 className="text-2xl font-heading font-bold text-primary-800 flex-1">Demander un devis gratuit</h3>
              <button
                onClick={onClose}
                className="text-primary-700 text-2xl hover:text-primary-500 transition-colors"
                aria-label="Fermer"
              >
                <FaTimes />
              </button>
            </div>
            {/* Formulaire */}
            <div className="p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center text-primary-700 text-lg font-semibold py-8"
                >
                  Merci, votre demande a bien été envoyée 🚀
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="relative">
                    <input
                      type="text"
                      {...register('name', { required: true })}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-transparent"
                      placeholder="Nom complet"
                    />
                    <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs bg-white px-1 pointer-events-none">
                      Nom complet
                    </label>
                    {errors.name && <p className="text-sm text-red-600 mt-1">Ce champ est requis</p>}
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-transparent"
                      placeholder="Email"
                    />
                    <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs bg-white px-1 pointer-events-none">
                      Email
                    </label>
                    {errors.email && <p className="text-sm text-red-600 mt-1">Email invalide</p>}
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      {...register('phone')}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-transparent"
                      placeholder="Téléphone"
                    />
                    <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs bg-white px-1 pointer-events-none">
                      Téléphone
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      rows={3}
                      {...register('message', { required: true })}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-transparent"
                      placeholder="Message"
                    />
                    <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs bg-white px-1 pointer-events-none">
                      Message
                    </label>
                    {errors.message && <p className="text-sm text-red-600 mt-1">Ce champ est requis</p>}
                  </div>
                  {/* Captcha */}
                  <div className="relative">
                    <input
                      type="text"
                      value={captcha}
                      onChange={e => setCaptcha(e.target.value)}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 placeholder-transparent"
                      placeholder="Combien font 3 + 4 ?"
                    />
                    <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs bg-white px-1 pointer-events-none">
                      Captcha&nbsp;: Combien font 3 + 4 ?
                    </label>
                    {captchaError && <p className="text-sm text-red-600 mt-1">{captchaError}</p>}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: '#1d4ed8' }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg bg-primary-700 text-white mt-2 hover:bg-primary-800"
                  >
                    Envoyer la demande
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
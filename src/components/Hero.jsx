import { motion } from 'framer-motion';

export default function Hero({ onBookClick }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#c5a059] font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-sm"
        >
          Wellness Hotel Experience
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg"
        >
          Relajación Exclusiva <br /> en tu Habitación
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md font-light"
        >
          Masajes profesionales de nivel 5 estrellas, diseñados para restaurar tu cuerpo y mente sin salir de la comodidad de tu hotel.
        </motion.p>
        <motion.button 
          onClick={onBookClick}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#c5a059] hover:bg-[#b08d4b] text-white px-10 py-4 rounded-sm transition-all duration-300 text-lg tracking-wide uppercase font-medium shadow-xl hover:shadow-2xl"
        >
          Reservar Ahora
        </motion.button>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function HotStoneHighlight({ onBookClick }) {
  return (
    <section id="hot-stone" className="relative py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-[#2a2a2a] opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#c5a059] translate-x-4 translate-y-4 rounded-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Hot Stone Massage Experience" 
              className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="inline-block border border-[#c5a059] text-[#c5a059] px-4 py-1 text-sm tracking-widest uppercase mb-6">
            Experiencia Premium
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Hot Stone Massage</h2>
          <p className="text-gray-300 font-light text-lg mb-8 leading-relaxed">
            Nuestra terapia insignia. Experimenta la fusión perfecta entre el toque terapéutico y el calor penetrante de las piedras basálticas volcánicas.
          </p>
          <ul className="mb-10 space-y-4">
            {['Relajación muscular profunda', 'Mejora la circulación sanguínea', 'Alivio del estrés mental', 'Equilibrio energético integral'].map((benefit, i) => (
              <li key={i} className="flex items-center text-gray-200 font-light">
                <span className="w-2 h-2 bg-[#c5a059] rounded-full mr-4"></span>
                {benefit}
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => onBookClick('hot_stone')}
            className="bg-transparent border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-white px-8 py-4 transition-all duration-300 tracking-wide uppercase font-medium text-sm"
          >
            Reservar Experiencia
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}

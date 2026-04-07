import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', hotel: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensaje enviado:', formData);
    // Here we could simulate sending, for now just reset
    alert('Mensaje enviado exitosamente. Nos pondremos en contacto a la brevedad.');
    setFormData({ name: '', hotel: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">Contacto</h2>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mb-6"></div>
          <p className="text-gray-600 font-light">
            ¿Representas a un hotel y deseas integrar nuestro servicio? ¿O eres un huésped buscando información adicional? Escríbenos.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Nombre Completo</label>
              <input 
                type="text" 
                required
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#c5a059] transition-colors"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Hotel / Institución</label>
              <input 
                type="text" 
                className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#c5a059] transition-colors"
                value={formData.hotel}
                onChange={e => setFormData({...formData, hotel: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">Tu Mensaje</label>
            <textarea 
              required
              rows="4" 
              className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <div className="text-center pt-6">
            <button 
              type="submit" 
              className="bg-gray-900 hover:bg-[#c5a059] text-white px-10 py-4 transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
            >
              Enviar Mensaje
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

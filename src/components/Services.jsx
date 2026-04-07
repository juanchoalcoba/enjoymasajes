import { motion } from 'framer-motion';
import { Flower2, Sparkles, Wind, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'relaxing',
    title: 'Masaje Relajante',
    description: 'Movimientos suaves y rítmicos que liberan endorfinas, reducen el estrés y promueven una sensación profunda de bienestar.',
    icon: <Flower2 className="w-8 h-8 text-[#c5a059]" />
  },
  {
    id: 'decontracting',
    title: 'Descontracturante',
    description: 'Técnicas de presión profunda dirigidas a aliviar la tensión muscular crónica, nudos y molestias articulares.',
    icon: <Sparkles className="w-8 h-8 text-[#c5a059]" />
  },
  {
    id: 'lymphatic',
    title: 'Drenaje Linfático',
    description: 'Masaje suave que estimula el sistema linfático, reduciendo la retención de líquidos y eliminando toxinas.',
    icon: <Wind className="w-8 h-8 text-[#c5a059]" />
  },
  {
    id: 'shiatsu',
    title: 'Shiatsu Lumbar',
    description: 'Terapia de origen japonés que aplica presión en puntos específicos para restaurar el equilibrio energético del cuerpo.',
    icon: <Sparkles className="w-8 h-8 text-[#c5a059]" />
  }
];

export default function Services({ onBookClick }) {
  return (
    <section id="services" className="py-24 bg-[#f9f6f0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-[#c5a059] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de terapias holísticas diseñadas para brindarte una experiencia de relajación inigualable durante tu estadía.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => onBookClick(service.id)}
            >
              <div className="mb-6 bg-[#f9f6f0] w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-[#c5a059] font-medium group-hover:text-[#b08d4b] transition-colors">
                Reservar <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

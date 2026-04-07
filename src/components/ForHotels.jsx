import { motion } from 'framer-motion';
import { Building2, TrendingUp, HandHeart } from 'lucide-react';

const benefits = [
  {
    icon: <Building2 className="w-10 h-10 text-[#c5a059]" />,
    title: 'Valor Agregado al Huésped',
    description: 'Eleva la categoría de tu hotel ofreciendo un servicio wellness in-room de estándar internacional sin inversión en infraestructura.'
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-[#c5a059]" />,
    title: 'Nuevos Ingresos',
    description: 'Sistema de comisiones atractivo por cada reserva generada, creando una nueva línea de revenue sin costos operativos.'
  },
  {
    icon: <HandHeart className="w-10 h-10 text-[#c5a059]" />,
    title: 'Servicio Llave en Mano',
    description: 'Nos encargamos de todo: camillas, aceites de aromaterapia, toallas y música. Operativa invisible y profesional.'
  }
];

export default function ForHotels() {
  return (
    <section id="for-hotels" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">Para HOTELES</h2>
          <div className="w-24 h-1 bg-[#c5a059] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conviértete en nuestro Partner y transforma las estancias de tus huéspedes en auténticas experiencias de bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 border border-gray-100 hover:border-[#c5a059] transition-colors duration-300 rounded-sm"
            >
              <div className="mb-6 bg-[#f9f6f0] p-4 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

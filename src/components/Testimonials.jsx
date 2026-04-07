import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Elena R.",
    hotel: "Huésped, Hotel Boutique Centro",
    review: "Una experiencia sublime. El masaje de piedras calientes fue exactamente lo que necesitaba después de un largo vuelo. Profesionalismo absoluto."
  },
  {
    name: "Gerencia Comercial",
    hotel: "Hotel Grand Plaza & Spa",
    review: "Desde que nos asociamos con Enjoy Masajes, las reseñas de nuestros huéspedes sobre su estadía han mejorado notablemente. Un servicio impecable."
  },
  {
    name: "Thomas W.",
    hotel: "Huésped VIP",
    review: "No tuve que salir de mi suite. La masajista trajo todo, creando un ambiente de spa en mi habitación en minutos. Altamente recomendado."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f9f6f0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Experiencias</h2>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex text-[#c5a059] mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 font-light italic mb-6">"{t.review}"</p>
              <div>
                <p className="font-medium text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.hotel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

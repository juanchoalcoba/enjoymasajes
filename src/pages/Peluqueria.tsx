import { Scissors, Star, Palette, Sparkles, Clock, Check, ArrowRight } from 'lucide-react';

const Peluqueria = () => {
  const services = [
    { name: 'Corte de Dama VIP', price: '$45.000', duration: '60 min', icon: <Scissors size={24} /> },
    { name: 'Color Global Premium', price: '$85.000', duration: '120 min', icon: <Palette size={24} /> },
    { name: 'Balayage / Mechas', price: '$120.000+', duration: '180 min', icon: <Sparkles size={24} /> },
    { name: 'Corte Caballero Luxury', price: '$30.000', duration: '40 min', icon: <Scissors size={24} /> },
    { name: 'Tratamiento Olaplex', price: '$60.000', duration: '45 min', icon: <Star size={24} /> },
    { name: 'Peinado Eventos', price: '$55.000', duration: '60 min', icon: <Clock size={24} /> },
  ];

  return (
    <div className="pt-40 pb-32 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-24 reveal text-center">
          <span className="text-primary tracking-[0.4em] text-xs font-bold mb-6 block">HAUTE COIFFURE</span>
          <h1 className="text-5xl md:text-7xl font-display mb-8">
            Peluquería <span className="gold-gradient italic">High-End</span>
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            Donde el arte del estilismo se encuentra con la precisión técnica para transformar tu identidad.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`reveal stagger-${(index % 4) + 1} glass p-10 rounded-3xl hover:border-primary/40 transition-all duration-700 group card-shine cursor-pointer flex flex-col`}
            >
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  {service.icon}
                </div>
                <span className="text-3xl font-bold text-primary font-display">{service.price}</span>
              </div>
              <h3 className="text-2xl font-display text-white mb-4">{service.name}</h3>
              <div className="flex items-center text-white/30 text-xs mb-10 space-x-2 font-bold uppercase tracking-widest">
                <Clock size={14} />
                <span>{service.duration}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {['Productos L\'Oréal Professionnel', 'Diagnóstico Capilar VIP', 'Bebida de Cortesía (Ginebra/Café)'].map((feat, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs text-white/50 font-medium">
                    <Check size={14} className="text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 rounded-2xl bg-white/5 text-white hover:bg-primary hover:text-black transition-all duration-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                RESERVAR TURNO
              </button>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <section className="mt-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-display text-white reveal">Visual <span className="text-primary italic">Portfolio</span></h2>
            <button className="btn-premium flex items-center gap-3 group reveal stagger-1">
              <span>VER MÁS EN INSTAGRAM</span>
              <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`reveal stagger-${i} aspect-[3/4] rounded-3xl overflow-hidden glass group cursor-crosshair`}>
                <img 
                  src={`https://images.unsplash.com/photo-${[
                    '1560066984-138dadb4c035',
                    '1521590832167-7bcbfaa6381f',
                    '1562322140-8baeececf3df',
                    '1620331311520-246422fd82f9'
                  ][i-1]}?q=80&w=2070&auto=format&fit=crop`} 
                  alt="Hair Style" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Peluqueria;

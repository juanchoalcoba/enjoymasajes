import { Wind, Waves, Sun, Heart, Sparkles, Check, ArrowRight } from 'lucide-react';

const Spa = () => {
  const rituals = [
    { 
      name: 'Masaje Descontracturante', 
      price: '$55.000', 
      info: 'Fuerza profunda para liberar tensiones musculares crónicas corregidas con técnicas de presión.',
      icon: <Wind size={32} />
    },
    { 
      name: 'Ritual Piedras Volcánicas', 
      price: '$70.000', 
      info: 'Calor terapéutico que equilibra tus centros energéticos y promueve la relajación profunda.',
      icon: <Waves size={32} />
    },
    { 
      name: 'Limpieza Facial Profunda', 
      price: '$65.000', 
      info: 'Renovación celular con activos botánicos, peeling enzimático y alta frecuencia.',
      icon: <Sun size={32} />
    },
    { 
      name: 'Drenaje Linfático Gold', 
      price: '$60.000', 
      info: 'Estimulación suave para la eliminación de toxinas y mejora de la circulación sistémica.',
      icon: <Sparkles size={32} />
    },
    { 
      name: 'Día de Spa en Pareja', 
      price: '$150.000', 
      info: 'Experiencia inmersiva con aromaterapia premium, champaña y ambiente privado.',
      icon: <Heart size={32} />
    },
  ];

  return (
    <div className="pt-40 pb-32 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="mb-24 reveal">
          <span className="text-primary tracking-[0.4em] text-xs font-bold mb-6 block">RITUALES DE BIENESTAR</span>
          <h1 className="text-5xl md:text-7xl font-display mb-8">
            The <span className="gold-gradient italic">Wellness</span> Experience
          </h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Un santuario dedicado a la regeneración física y mental a través de tratamientos de autor.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-4">
            {rituals.map((ritual, index) => (
              <div 
                key={index} 
                className={`reveal stagger-${(index % 4) + 1} group glass p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-8 hover:bg-white/5 transition-all duration-700 card-shine cursor-pointer`}
              >
                <div className="shrink-0 p-6 bg-primary/10 rounded-3xl text-primary h-fit group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  {ritual.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-4">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-2xl font-display text-white flex-1 min-w-0">{ritual.name}</h3>
                      <span className="text-2xl font-bold text-primary whitespace-nowrap">{ritual.price}</span>
                    </div>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-md">{ritual.info}</p>
                  <div className="flex flex-wrap gap-4">
                    {['Aromaterapia', 'Música Zen', 'Infusión Herbal'].map((item) => (
                      <span key={item} className="flex items-center gap-2 text-[10px] text-white/20 uppercase tracking-widest font-bold">
                        <Check size={12} className="text-primary" /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-40 hidden lg:block reveal stagger-4">
            <div className="relative rounded-[3.5rem] overflow-hidden border border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
                alt="Spa Treatment" 
                className="w-full aspect-[4/5] object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black via-black/40 to-transparent">
                <p className="text-primary font-display text-3xl mb-6 italic">"El descanso es la inversión más rentable"</p>
                <button className="btn-premium-filled w-full flex items-center justify-center space-x-3">
                  <span>RESERVAR AHORA</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spa;

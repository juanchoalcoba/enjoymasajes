import { useNavigate } from 'react-router-dom';
import { Sparkles, Scissors, Calendar, ArrowRight, Phone, ArrowUpRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Sparkles className="text-primary" size={32} />,
      title: "Spa & Bienestar",
      desc: "Tratamientos de autor diseñados para una renovación celular profunda y relajación total.",
      action: () => navigate('/spa')
    },
    {
      icon: <Scissors className="text-primary" size={32} />,
      title: "Haute Coiffure",
      desc: "Estilismo de vanguardia y coloración premium para realzar tu identidad visual.",
      action: () => navigate('/peluqueria')
    }
  ];

  return (
    <div className="overflow-hidden bg-[#050505]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
            alt="Spa background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <span className="inline-block text-primary tracking-[0.4em] text-xs font-bold mb-8 reveal stagger-1">
            ESTÉTICA & BIENESTAR PREMIUM
          </span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.85] mb-12 reveal stagger-2">
            ENJOY <br />
            <span className="gold-gradient">MASAJES</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-16 font-body font-light leading-relaxed reveal stagger-3">
            Redefiniendo el lujo a través del cuidado personal avanzado. Una experiencia sensorial única para los más exigentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center reveal stagger-4">
            <button 
              onClick={() => navigate('/spa')}
              className="group btn-premium-filled flex items-center justify-center space-x-3"
            >
              <span>EXPLORAR SPA</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/peluqueria')}
              className="btn-premium flex items-center justify-center"
            >
              <span>PELUQUERÍA VIP</span>
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section - High Impact Layout */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop" 
                  alt="Philosophy" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl hidden md:block max-w-[280px]">
                <p className="text-primary text-4xl font-display mb-2">10+</p>
                <p className="text-white/60 text-sm">Años transformando vidas a través del bienestar absoluto.</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-12">
              <h2 className="text-4xl md:text-6xl font-display leading-tight">
                La Belleza como <br />
                <span className="italic text-primary">Estado Mental</span>
              </h2>
              <p className="text-white/40 text-base leading-relaxed max-w-xl">
                Nuestro enfoque trasciende la estética convencional. Combinamos tecnología de vanguardia con rituales ancestrales para ofrecer resultados que se sienten tanto por fuera como por dentro.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((f, i) => (
                  <div key={i} className="group cursor-pointer p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 glass card-shine" onClick={f.action}>
                    <div className="mb-6 flex justify-between items-start">
                      {f.icon}
                      <ArrowUpRight size={20} className="text-white/20 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-display mb-4">{f.title}</h3>
                    <p className="text-white/30 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-display mb-8">
              Tu Cambio <br />
              <span className="gold-gradient">Empieza Aquí</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://wa.me/+59898237197" className="glass p-12 rounded-[3rem] hover:bg-white/5 transition-all group flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-6 group-hover:scale-110 transition-transform">
                <Calendar size={32} />
              </div>
              <p className="text-xl font-display mb-2">Reservar Turno</p>
              <p className="text-white/40 text-sm">Vía Whatsapp Business</p>
            </a>
            <a href="tel:+123456789" className="glass p-12 rounded-[3rem] hover:bg-white/5 transition-all group flex flex-col items-center">
              <div className="p-4 bg-white/5 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <p className="text-xl font-display mb-2">Consultas VIP</p>
              <p className="text-white/40 text-sm">Atención inmediata</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <div className="font-display text-2xl font-bold tracking-tight">
              <span className="text-white">ENJOY</span>
              <span className="gold-gradient ml-2">MASAJES</span>
            </div>
            <p className="text-white/60 leading-relaxed font-body">
              Tu santuario de paz y belleza. Especialistas en masajes terapéuticos, 
              estética avanzada y estilismo de alto nivel en un ambiente exclusivo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary font-display text-xl mb-6">Servicios</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="/spa" className="hover:text-primary transition-colors">Masajes Relajantes</a></li>
              <li><a href="/peluqueria" className="hover:text-primary transition-colors">Cortes de Tendencia</a></li>
              <li><a href="/spa" className="hover:text-primary transition-colors">Tratamientos Faciales</a></li>
              <li><a href="/peluqueria" className="hover:text-primary transition-colors">Coloración Profesional</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-primary font-display text-xl mb-6">Horarios</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex justify-between">
                <span>Lun - Vie:</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos:</span>
                <span className="text-primary/50">Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-display text-xl mb-6">Contacto</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Calle Principal 123, Ciudad Elegancia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>hola@enjoymasajes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} ENJOY MASAJES. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

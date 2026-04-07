import { Mail, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="text-2xl font-serif font-bold text-white tracking-wider mb-6 md:mb-0">
            ENJOY <span className="text-[#c5a059]">MASAJES</span>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-[#c5a059] transition-colors"><Globe size={20} /></a>
            <a href="#" className="hover:text-[#c5a059] transition-colors"><MessageCircle size={20} /></a>
            <a href="#" className="hover:text-[#c5a059] transition-colors"><Mail size={20} /></a>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between text-sm items-center">
          <p>&copy; {new Date().getFullYear()} Enjoy Masajes. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

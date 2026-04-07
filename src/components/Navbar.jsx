import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3 border-b border-white/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section designed from banner reference */}
        <div className="flex items-center gap-4 group">
          {/* Logo Mark (Black circle with gold border) */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-black border-[2.5px] border-[#c5a059] flex items-center justify-center shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(197,160,89,0.5)]">
            {/* Elegant Line Art Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="#c5a059" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 md:w-8 md:h-8 transform transition-transform duration-500 group-hover:scale-110">
              <path d="M12 21.5c-4.5 0-7.5-3.5-7.5-7.5 0-4 4-8.5 7.5-12 3.5 3.5 7.5 8 7.5 12 0 4-3 7.5-7.5 7.5z"></path>
              <path d="M12 21.5v-10"></path>
              <path d="M12 11.5c-1.5-1.5-3.5-2.5-3.5-5 0-1.5 1-2.5 3.5-3.5"></path>
              <path d="M12 11.5c1.5-1.5 3.5-2.5 3.5-5 0-1.5-1-2.5-3.5-3.5"></path>
            </svg>
          </div>
          
          {/* Typographic Logo */}
          <div className="flex flex-col justify-center">
            <span className={`font-['Great_Vibes'] text-3xl md:text-4xl tracking-wide transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-black md:text-white drop-shadow-md'}`}>
              Enjoy Masajes
            </span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-[13px] font-semibold tracking-[0.15em] uppercase">
          {['Servicios', 'Premium', 'Para Hoteles', 'Contacto'].map((item, index) => {
            const hrefId = item.toLowerCase().replace(' ', '-').replace('para-hoteles', 'for-hotels');
            return (
              <a 
                key={index}
                href={`#${hrefId}`} 
                className={`relative py-2 transition-colors duration-300 group
                  ${isScrolled ? 'text-gray-700 hover:text-[#c5a059]' : 'text-gray-200 hover:text-white'}
                `}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c5a059] transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden rounded-full p-2 backdrop-blur-sm transition-colors duration-300 ${isScrolled ? 'text-gray-900 bg-gray-100/50' : 'text-black bg-white/50'}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-white/95 shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-80 border-t border-gray-100' : 'max-h-0'}`}>
        <div className="py-6 px-8 flex flex-col space-y-6">
          {['Servicios', 'Premium', 'Para Hoteles', 'Contacto'].map((item, index) => {
             const hrefId = item.toLowerCase().replace(' ', '-').replace('para-hoteles', 'for-hotels');
             return (
              <a 
                key={index}
                href={`#${hrefId}`} 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-gray-800 text-sm tracking-widest uppercase font-medium hover:text-[#c5a059] transition-colors"
              >
                {item}
              </a>
             )
          })}
        </div>
      </div>
    </nav>
  );
}

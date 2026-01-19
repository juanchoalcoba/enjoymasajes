import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Peluquería', path: '/peluqueria' },
    { name: 'Spa', path: '/spa' },
    { name: 'Sobre Nosotros', path: '/#about' },
    { name: 'Contacto', path: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-display text-2xl font-bold tracking-tight">
              <span className="text-white">ENJOY</span>
              <span className="gold-gradient ml-2">MASAJES</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/yournumber" 
              className="btn-premium-filled py-2 px-6"
            >
              Reservar
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full glass transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-white/90 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+123456789" 
            className="flex items-center justify-center space-x-2 text-primary border border-primary/30 rounded-full py-2 hover:bg-primary/10"
          >
            <Phone size={18} />
            <span>Llamar Ahora</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

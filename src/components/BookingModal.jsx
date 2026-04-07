import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';

const massageTypes = [
  { id: 'relaxing', name: 'Relajante' },
  { id: 'decontracting', name: 'Descontracturante' },
  { id: 'lymphatic', name: 'Drenaje Linfático' },
  { id: 'shiatsu', name: 'Shiatsu Lumbar' },
  { id: 'hot_stone', name: 'Hot Stone Premium' },
];

const durations = [
  { value: '30', label: '30 Minutos' },
  { value: '60', label: '60 Minutos' },
  { value: '90', label: '90 Minutos' },
];

export default function BookingModal({ isOpen, onClose, initialType }) {
  const [selectedType, setSelectedType] = useState(initialType || 'relaxing');
  const [selectedDuration, setSelectedDuration] = useState('60');

  // Set the initial type when modal opens
  if (isOpen && initialType && selectedType !== initialType) {
      setSelectedType(initialType);
  }

  const handleBook = () => {
    const typeName = massageTypes.find(t => t.id === selectedType)?.name;
    const message = `Hola! Me gustaría reservar un masaje ${typeName} de ${selectedDuration} minutos en mi hotel. Quedo atento/a para coordinar disponibilidad.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden"
          >
            <div className="bg-[#1a1a1a] p-6 text-center text-white relative">
              <button 
                onClick={onClose} 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-serif">Reservar Masaje</h3>
            </div>

            <div className="p-8 space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-wider">Tipo de Masaje</label>
                <select 
                  className="w-full border border-gray-300 p-3 bg-white focus:outline-none focus:border-[#c5a059] rounded-sm appearance-none"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {massageTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 uppercase tracking-wider">Duración</label>
                <div className="grid grid-cols-3 gap-3">
                  {durations.map(duration => (
                    <button
                      key={duration.value}
                      onClick={() => setSelectedDuration(duration.value)}
                      className={`py-3 border text-sm transition-colors rounded-sm ${
                        selectedDuration === duration.value 
                        ? 'border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059] font-medium' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {duration.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#f9f6f0] p-4 rounded-sm flex items-start text-sm text-gray-600">
                <Calendar className="w-5 h-5 text-[#c5a059] mr-3 shrink-0" />
                <p>Al continuar, serás redirigido a WhatsApp para confirmar la disponibilidad y horario con nuestro equipo.</p>
              </div>

              <button 
                onClick={handleBook}
                className="w-full bg-[#c5a059] hover:bg-[#b08d4b] text-white py-4 rounded-sm transition-colors duration-300 uppercase tracking-widest font-medium"
              >
                Continuar a WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

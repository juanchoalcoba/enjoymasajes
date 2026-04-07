import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HotStoneHighlight from './components/HotStoneHighlight';
import ForHotels from './components/ForHotels';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialType, setModalInitialType] = useState('relaxing');

  const openBookingModal = (type = 'relaxing') => {
    setModalInitialType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-[#c5a059] selection:text-white">
      <Navbar />
      
      <main>
        <Hero onBookClick={() => openBookingModal('relaxing')} />
        <Services onBookClick={openBookingModal} />
        <HotStoneHighlight onBookClick={openBookingModal} />
        <ForHotels />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialType={modalInitialType}
      />
    </div>
  );
}

export default App;

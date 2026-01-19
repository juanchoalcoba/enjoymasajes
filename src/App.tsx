import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Peluqueria from './pages/Peluqueria';
import Spa from './pages/Spa';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peluqueria" element={<Peluqueria />} />
          <Route path="/spa" element={<Spa />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

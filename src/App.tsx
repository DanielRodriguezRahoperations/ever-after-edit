import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SignaturePieces from './pages/SignaturePieces';
import Inquire from './pages/Inquire';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signature-pieces" element={<SignaturePieces />} />
        <Route path="/inquire" element={<Inquire />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

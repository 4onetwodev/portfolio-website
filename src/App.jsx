import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PerformanceMonitor from './components/common/PerformanceMonitor';
import CursorTrail from './components/common/CursorTrail';
import './styles/App.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <CursorTrail />
        <Header />
        <Hero />
        <About />
        <CaseStudies />
        <Contact />
        <Footer />
        <PerformanceMonitor />
      </div>
    </Router>
  );
};

export default App;
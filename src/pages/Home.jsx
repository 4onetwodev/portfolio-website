import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
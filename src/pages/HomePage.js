import React, { useState, useEffect } from 'react';
import '../Style';


import Header from '../components/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Courses from '../components/Resources';
import FunFacts from '../components/FunFacts';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Events from '../components/Events';
import Contact from '../components/Contact';
// import Footer from '../components/Footer';
// import Preloader from '../components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {loading && <Preloader />} */}
      <Header />
      <Banner />
      <Services />
      <AboutUs />
      <Courses />
      <FunFacts />
      <Team />
      <Testimonials />
      {/* <Events /> */}
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
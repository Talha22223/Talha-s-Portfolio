import React from 'react';
import Navbar from './Navbar';
import Hero from "./hero";
import Services  from './Service';
import About from './About';
import Contact from './Contact';
import BackToTopButton from './backtotop';
import Footer from './footer';
function App() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Navbar />
      <Hero/>
      <Services/>
      <About/>
      <BackToTopButton/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Features from './components/Features';
import Unbilled from './components/Unbilled';
import Cards from './components/Cards';

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Unbilled />
      <Cards />
    </main>
  );
};

export default App;
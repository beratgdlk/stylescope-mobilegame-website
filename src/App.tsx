import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GameStats } from './components/GameStats';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <GameStats />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import AboutSeries from './components/Series';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#fdf4ec] text-[#2e2e2e]">
      <Navbar />
      <Hero />
      <AboutSeries />
    </div>
  );
}

export default App;
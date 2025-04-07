import React from 'react';
import '../App.css';
import CharacterCard from './CharacterCard';
import TitanCard from './TitanCard';
import { characters } from '../data/charecters';
import { titans } from '../data/titans';

const AboutSeries = () => {
  return (
    <section className="py-20 px-4 md:px-20 space-y-20" id="about">
      <h1 className="text-4xl md:text-5xl tracking-wider text-[#8B0000] text-start relative inline-block">
        ABOUT THE SERIES
        <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-[#8B0000]"></span>
      </h1>

      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/assets/wall-and-titans.png"
            alt="Walls and Titans"
            className="w-full h-72 md:h-[30rem] object-cover brightness-90"
          />
        </div>
        <div className="max-w-5xl mx-auto -mt-10 z-10 relative text-center bg-[#ffffffb3] backdrop-blur-md px-8 py-6 rounded-xl shadow-lg border border-[#e0c7b0]">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#3e2f2f]">
            In a world where humanity teeters on the brink of extinction,
            <span className="italic font-bold text-[#8B0000]"> Attack on Titan </span>
            chronicles mankind's desperate fight behind massive walls,
            fending off terrifying giants known as Titans.
          </p>
        </div>
      </div>

      {/* Characters Carousel */}
      <div className="space-y-10">
        <h2 className="text-center font-ditty text-4xl md:text-5xl text-[#8B0000] tracking-wider relative inline-block">
          MAIN CHARACTERS
          <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-[#8B0000]"></span>
        </h2>
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 px-2 md:px-0">
          {characters.map((char) => (
            <div key={char.name} className="snap-start shrink-0 w-80">
              <CharacterCard {...char} />
            </div>
          ))}
        </div>
      </div>

      {/* Titans Carousel */}
      <div className="space-y-10">
        <h2 className="text-center font-ditty text-4xl md:text-5xl text-[#8B0000] tracking-wider relative inline-block">
          TITAN SHIFTERS
          <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-[#8B0000]"></span>
        </h2>
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 px-2 md:px-0">
          {titans.map((titan) => (
            <div key={titan.name} className="snap-start shrink-0 w-80">
              <TitanCard {...titan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSeries;
import React from 'react';

const CharacterCard = ({ name, role, image, description }) => {
  return (
    <div className="flex flex-col h-full bg-[#fdf5ef] rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-[#e6cfc2]">
      <img
        className="w-full h-64 object-cover filter grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-500"
        src={image}
        alt={name}
      />
      <div className="p-5 space-y-2">
        <h2 className="text-2xl font-bold text-[#8B0000] tracking-wider">{name}</h2>
        <p className="text-sm italic text-[#5a4a42] mb-2">{role}</p>
        <p className="text-sm text-[#3c3c3c] mt-auto">{description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;

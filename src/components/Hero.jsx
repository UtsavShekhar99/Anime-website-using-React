import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Error playing audio:", err));
    }
  };

  const [hoveredButton, setHoveredButton] = useState(null);
  const [typedText, setTypedText] = useState("");

  const fullText = "Attack on Titan";
  const index = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const currentText = fullText.substring(0, index.current);
      setTypedText(currentText);

      if (!isDeleting.current) {
        if (index.current < fullText.length) {
          index.current += 1;
          timeout = setTimeout(handleTyping, 120); // Faster typing
        } else {
          isDeleting.current = true;
          timeout = setTimeout(handleTyping, 2000); // Pause at full text
        }
      } else {
        if (index.current > 0) {
          index.current -= 1;
          timeout = setTimeout(handleTyping, 80); // Faster deleting
        } else {
          isDeleting.current = false;
          timeout = setTimeout(handleTyping, 500); // Pause before restarting
        }
      }
    };

    timeout = setTimeout(handleTyping, 500); // Initial delay

    return () => clearTimeout(timeout);
  }, []); // Empty deps = only run once

  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
      style={{ backgroundImage: "url('/assets/main-image-hero-section.jpg')" }}
    >
      {/* Floating Music Button */}
      <div className="absolute top-20 right-16 z-20">
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-black/40 text-white font-medium text-sm rounded-full backdrop-blur-md hover:bg-black/60 transition duration-200"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
      </div>

      <div className="flex flex-col ml-auto z-10 items-end pr-4 md:pr-12">
        {/* Typing Text */}
        <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-md text-right">
          {typedText}
          <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </h1>

        {/* Description Box */}
        <div className="bg-black/30 p-4 mt-3 rounded-md backdrop-blur-sm max-w-xl text-right">
          <p className="text-gray-100 text-lg md:text-xl">
            In a world where humanity teeters on the edge of extinction, giant man-eating Titans rule the land beyond the walls. Follow Eren Yeager and his allies as they rise against the monsters threatening
            their world—and uncover secrets darker than anyone imagined.
            <br />
            The fight for freedom begins now.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onMouseEnter={() => setHoveredButton("watchNow")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`px-6 py-2 rounded-full font-semibold transition duration-200 ${
              hoveredButton === "watchNow"
                ? "bg-white text-black"
                : "bg-white/20 text-white"
            }`}
          >
            Watch Now
          </button>

          <button
            onMouseEnter={() => setHoveredButton("readManga")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`px-6 py-2 rounded-full font-semibold transition duration-200 ${
              hoveredButton === "readManga"
                ? "bg-white text-black"
                : "bg-white/20 text-white"
            }`}
          >
            Read Manga
          </button>
        </div>
      </div>

      {/* Audio Tag */}
      <audio ref={audioRef} src="/assets/background-song.mp3" loop />
    </section>
  );
};

export default Hero;
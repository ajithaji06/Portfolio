import { ArrowBigDown } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="min-h-screen w-full flex flex-col justify-center items-center gap-4 px-4 text-center relative"
    >
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h1 className="text-foreground font-bold text-2xl sm:text-xl md:text-5xl leading-snug">
          <span className="text-glow opacity-0 animate-fade-in">Hi,</span>
          <span className="text-glow opacity-0 animate-fade-in-delay-1"> I AM</span>
          <span className="text-glow opacity-0 animate-fade-in-delay-2  text-primary "> AJITH TS</span>
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-[650px] w-full flex justify-center">
        <p className="text-glow opacity-0 animate-fade-in-delay-3 text-sm sm:text-base md:text-xl leading-relaxed">
          Passionate and detail-oriented Front-End Developer seeking an entry-level
          position to leverage skills in HTML, CSS, JavaScript, and React.js to build
          responsive, user-friendly web applications.
        </p>
      </div>

      {/* Button */}
      <a href='#project' className="cosmic-button opacity-0 animate-fade-in-delay-4 mt-4 text-sm sm:text-base px-4 py-2">
        View my Projects
      </a>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-base sm:text-lg text-glow font-bold animate-bounce">
        <span>Scroll</span>
        <span className="text-primary">
          <ArrowBigDown />
        </span>
      </div>
    </div>
  );
};

export default HeroSection;

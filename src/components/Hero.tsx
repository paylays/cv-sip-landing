import React from "react";
import { ArrowRight, Settings } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://placehold.co/1920x1080/1a1a1a/ffffff?text=Hero+Banner+Image")',
        }}
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-sip-red/20 border border-sip-red/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Settings className="text-sip-red w-4 h-4" />
            <span className="text-sip-red font-semibold text-xs tracking-wider uppercase">
              Heavy Equipment Support Specialist
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Empowering Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sip-red to-orange-500">
              Operations
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
            Delivering top-tier heavy equipment parts backed by rigorous
            testing. We ensure every component passes strict inspection before
            it reaches you, guaranteeing reliability for your toughest
            operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#products"
              className="px-8 py-4 bg-sip-red text-white font-bold rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-sip-red rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

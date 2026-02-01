import React from "react";
// Import logo tetap sama
import bumaLogo from "../assets/clients/buma-v2.png";
import chakraLogo from "../assets/clients/chakra-v2.png";
import kbkLogo from "../assets/clients/kbk-v2.png";
import kpucLogo from "../assets/clients/kpuc.webp";
import thiessLogo from "../assets/clients/thiess-v2.png";
import trakindoLogo from "../assets/clients/trakindo-v2.png";

const Clients: React.FC = () => {
  const clientLogos = [
    { name: "BUMA", src: bumaLogo },
    { name: "Chakra", src: chakraLogo },
    { name: "KBK", src: kbkLogo },
    { name: "KPUC", src: kpucLogo },
    { name: "Thiess", src: thiessLogo },
    { name: "Trakindo", src: trakindoLogo },
  ];

  return (
    <section id="clients" className="py-16 bg-white overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-14">
          <span className="text-sip-red font-bold tracking-widest uppercase text-xs md:text-sm">
            Our Strategic Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Trusted by Industry Giants
          </h2>
          <div className="w-24 h-1.5 bg-sip-red mx-auto rounded-full"></div>
        </div>

        {/* Container Masking dengan Gradient Fade di Kiri & Kanan agar terlihat halus */}
        <div
          className="relative w-full mx-auto overflow-hidden group"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max">
            {/* --- LOOP PERTAMA --- */}
            <div className="flex items-center gap-2 animate-scroll min-w-full justify-around shrink-0">
              {clientLogos.map((client, i) => (
                <div
                  key={`original-${i}`}
                  className="w-32 md:w-40 h-20 flex items-center justify-center transition-all duration-300"
                >
                  <img
                    src={client.src}
                    alt={`${client.name} Logo`}
                    className="w-auto object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>

            {/* --- LOOP KEDUA (DUPLIKAT) --- */}
            <div
              className="flex items-center gap-2 animate-scroll min-w-full justify-around shrink-0"
              aria-hidden="true"
            >
              {clientLogos.map((client, i) => (
                <div
                  key={`duplicate-${i}`}
                  className="w-32 md:w-40 h-20 flex items-center justify-center transition-all duration-300"
                >
                  <img
                    src={client.src}
                    alt={`${client.name} Logo`}
                    className="w-auto object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

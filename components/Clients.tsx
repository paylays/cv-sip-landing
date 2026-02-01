import React from 'react';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted By Industry Leaders</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
          {/* Using placeholder logos with simple text for demonstration, as per standard */}
          {['Mining Co.', 'Construct One', 'HeavyMove', 'PowerGrid', 'IndoParts'].map((client, i) => (
             <div key={i} className="text-2xl md:text-3xl font-black text-gray-300 hover:text-gray-800 transition-colors cursor-default select-none">
               {client}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
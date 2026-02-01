import React from 'react';
import { ShieldCheck, Clock, ThumbsUp, Leaf } from 'lucide-react';

const Commitment: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 overflow-hidden relative">
          {/* Decorative Circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sip-red rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

          <div className="relative z-10 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Commitment to Excellence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We don't just supply parts; we supply reliability. Our commitment defines every interaction and transaction we handle.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              { icon: ShieldCheck, title: "Quality Guarantee", desc: "100% Genuine and certified parts." },
              { icon: Clock, title: "Speed", desc: "Fast processing and delivery." },
              { icon: ThumbsUp, title: "Integrity", desc: "Transparent pricing and honest service." },
              { icon: Leaf, title: "Safety", desc: "Adhering to strict safety standards." },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                  <item.icon className="w-8 h-8 text-sip-red" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
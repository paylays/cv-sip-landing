import React from "react";
import { ShieldCheck, Users, FileCheck, TrendingUp } from "lucide-react";

const Commitment: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 overflow-hidden relative">
          {/* Decorative Circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sip-red rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

          <div className="relative z-10 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Commitment to Excellence
            </h2>
            {/* Diambil dari teks "Komitmen Kami": Meningkatkan pelayanan & profesionalitas */}
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              We are dedicated to continuously improving our service and
              professionalism through
              <span className="text-white font-medium">
                {" "}
                constant innovation{" "}
              </span>
              and strict
              <span className="text-white font-medium">
                {" "}
                quality assurance{" "}
              </span>
              , ensuring that every solution we deliver meets the highest
              standards.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              // 1. Usaha Resmi
              {
                icon: FileCheck,
                title: "Fully Licensed",
                desc: "Legally registered business with complete operational permits.",
              },
              // 2. Tenaga Profesional
              {
                icon: Users,
                title: "Expert Workforce",
                desc: "Our team consists of experienced professionals competent in their fields.",
              },
              // 3. Jaminan Mutu
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "We guarantee that all services meet mutually agreed-upon standards.",
              },
              // 4. Inovasi (Diambil dari paragraf Komitmen untuk melengkapi grid)
              {
                icon: TrendingUp,
                title: "Continuous Innovation",
                desc: "Always upgrading our methods to provide better service value.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10 group-hover:bg-sip-red/20 group-hover:border-sip-red transition-all duration-300">
                  <item.icon className="w-8 h-8 text-sip-red group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;

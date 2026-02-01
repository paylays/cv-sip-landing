import React from "react";
import { Wrench, Settings2, FileText, Zap } from "lucide-react";
import { ServiceItem } from "../../types";

const services: ServiceItem[] = [
  {
    title: "Heavy Equipment Service & Parts",
    description:
      "Expert repair services and comprehensive procurement of genuine heavy equipment components across all major brands to ensure operational readiness.",
    icon: Wrench,
  },
  {
    title: "Custom Parts & Consumables",
    description:
      "Tailored fabrication of custom parts alongside a complete supply of workshop essentials and high-standard safety equipment (PPE) for your workforce.",
    icon: Settings2,
  },
  {
    title: "Industrial Electrical Solutions",
    description:
      "Supply of specialized workshop electrical equipment and supporting machinery, engineered to meet specific site power and performance requirements.",
    icon: Zap,
  },
  {
    title: "Office & Operational Supplies",
    description:
      "Streamlined procurement for essential office stationery (ATK), administrative documents, and organizational tools to support your back-office efficiency.",
    icon: FileText,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sip-red font-bold tracking-widest uppercase text-xs md:text-sm block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Our Core Services
          </h2>
          <div className="w-24 h-1.5 bg-sip-red mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 leading-relaxed">
            Comprehensive support solutions designed to keep your heavy
            machinery operations efficient and uninterrupted.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-sip-red transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sip-red transition-colors">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

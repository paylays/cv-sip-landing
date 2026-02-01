import React from "react";
import { Truck, Wrench, ShoppingBag, Settings2 } from "lucide-react";
import { ServiceItem } from "../../types";

const services: ServiceItem[] = [
  {
    title: "Parts Procurement",
    description:
      "Sourcing hard-to-find and genuine parts for all major heavy equipment brands with global supplier networks.",
    icon: ShoppingBag,
  },
  {
    title: "Custom Fabrication",
    description:
      "Tailored manufacturing of custom hoses, fittings, and specific metal parts to match unique machinery requirements.",
    icon: Settings2,
  },
  {
    title: "Site Logistics",
    description:
      "Reliable delivery to remote sites and mining areas, ensuring your components arrive safely and on schedule.",
    icon: Truck,
  },
  {
    title: "Technical Consultation",
    description:
      "Expert advice on part compatibility, upgrades, and maintenance schedules to optimize fleet performance.",
    icon: Wrench,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-400">
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

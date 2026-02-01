import React from "react";
import { Target, Eye, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src="https://placehold.co/800x600/f3f4f6/1a1a1a?text=About+Company+Image"
                alt="Company Overview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gray-900 p-8 rounded-lg shadow-xl hidden md:flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-bold text-sip-red mb-2">8+</span>
              <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h4 className="text-sip-red font-bold uppercase tracking-widest text-sm mb-3">
              About Us
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Empowering Industries with Integrated Solutions
            </h2>

            <div className="w-24 h-1.5 bg-sip-red rounded-full mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              As the demands of the{" "}
              <span className="font-semibold text-gray-900">
                Mining, Industrial, and Oil & Gas sectors
              </span>{" "}
              become increasingly advanced,
              <span className="font-semibold text-gray-900">
                {" "}
                CV. Sumber Inti Prima
              </span>{" "}
              evolves alongside them. We are more than just a supplier; we are a
              strategic solution partner committed to fulfilling complex
              procurement and technology needs to keep your operations moving
              forward.
            </p>

            {/* Paragraf 2: Fokus pada Layanan Spesifik (Repairs, Goods, IT Tools) */}
            <p className="text-gray-600 leading-relaxed mb-8">
              We deliver end-to-end expertise, ranging from{" "}
              <span className="font-semibold text-gray-800">
                comprehensive procurement
              </span>{" "}
              of goods and consumables to{" "}
              <span className="font-semibold text-gray-800">
                expert repair services
              </span>
              . Additionally, we bridge the gap in modernization by providing
              cutting-edge{" "}
              <span className="font-semibold text-gray-800">
                Information & Technology (IT) workshop tools
              </span>
              , ensuring your facility is equipped for the future.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="bg-sip-red/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-sip-red w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a sustainable national private company rooted in Good
              Corporate Governance (GCG), ensuring the welfare of our employees,
              shareholders, and management while delivering continuous value to
              the industry.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="bg-sip-red/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-sip-red w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-sip-red"></div>
                <p className="text-gray-600">
                  Provide professional and competitive services in
                  <span className="font-semibold text-gray-800">
                    {" "}
                    Engineering, Procurement, and Technology fulfillment
                  </span>
                  .
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-sip-red"></div>
                <p className="text-gray-600">
                  Establish high-quality systems and standards in every service
                  delivery to ensure operational excellence.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-sip-red"></div>
                <p className="text-gray-600">
                  Place customer satisfaction and service quality as our top
                  priority.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

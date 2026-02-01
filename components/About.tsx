import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

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
              <span className="text-5xl font-bold text-sip-red mb-2">10+</span>
              <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Years of<br/>Experience</span>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h4 className="text-sip-red font-bold uppercase tracking-widest text-sm mb-4">About Us</h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Reliable Partner in Heavy Industry</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              CV. Sumber Inti Prima is a premier supplier dedicated to supporting the heavy equipment industry. We specialize in providing high-quality spare parts, electrical components, and maintenance supplies that ensure your machinery operates with minimal downtime.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded on principles of integrity and excellence, we have established ourselves as a trusted name across the region, serving mining, construction, and industrial sectors with speed and precision.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="bg-sip-red/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-sip-red w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading and most trusted heavy equipment support supplier in the nation, known for our innovative solutions, comprehensive inventory, and unwavering dedication to customer success.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="bg-sip-red/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-sip-red w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-sip-red"></div>
                <p className="text-gray-600">Provide superior quality products that meet international standards.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-sip-red"></div>
                <p className="text-gray-600">Ensure rapid response and delivery times to minimize client downtime.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-sip-red"></div>
                <p className="text-gray-600">Build long-lasting partnerships through transparency and service excellence.</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
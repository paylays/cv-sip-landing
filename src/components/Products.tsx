import React, { useState } from "react";
import { ArrowRight, ShoppingCart, Info } from "lucide-react";

interface Product {
  id: string;
  category: string;
  name: string;
  code: string;
  description: string;
  image: string;
}

const CATEGORIES = [
  "Electrical Products",
  "Consumable Workshop Products",
  "Hose and Fitting Products",
  "Custom Part Products",
];

const PRODUCTS_DATA: Product[] = [
  // Electrical
  {
    id: "e1",
    category: "Electrical Products",
    name: "Heavy Duty Alternator 24V",
    code: "ALT-24V-HD",
    description: "High output alternator for mining trucks and excavators.",
    image:
      "https://placehold.co/600x400/e2e8f0/1e293b?text=Heavy+Duty+Alternator",
  },
  {
    id: "e2",
    category: "Electrical Products",
    name: "Starter Motor Type-C",
    code: "STR-500-C",
    description: "Reliable cold-start capabilities for heavy machinery.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Starter+Motor",
  },
  {
    id: "e3",
    category: "Electrical Products",
    name: "Wiring Harness Assembly",
    code: "WH-CAT-01",
    description: "Custom loom and harness protection for rugged environments.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Wiring+Harness",
  },
  {
    id: "e4",
    category: "Electrical Products",
    name: "LED Work Lamp 50W",
    code: "LGT-LED-50",
    description: "High-lumen floodlight for night operations.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=LED+Work+Lamp",
  },

  // Consumable
  {
    id: "c1",
    category: "Consumable Workshop Products",
    name: "Heavy Equipment Oil Filter",
    code: "FIL-OIL-HE",
    description: "High-efficiency filtration for longer engine life.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Oil+Filter",
  },
  {
    id: "c2",
    category: "Consumable Workshop Products",
    name: "Industrial Safety Gloves",
    code: "PPE-GLV-01",
    description: "Cut-resistant gloves for workshop handling.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Safety+Gloves",
  },
  {
    id: "c3",
    category: "Consumable Workshop Products",
    name: "Hydraulic Oil ISO 46",
    code: "LUB-HYD-46",
    description: "Premium anti-wear hydraulic fluid (200L Drum).",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Hydraulic+Oil",
  },
  {
    id: "c4",
    category: "Consumable Workshop Products",
    name: "Air Filter Element",
    code: "FIL-AIR-PRI",
    description: "Primary air cleaner element for dust protection.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Air+Filter",
  },

  // Hose & Fitting
  {
    id: "h1",
    category: "Hose and Fitting Products",
    name: "Hydraulic Hose 4SP",
    code: "HOS-4SP-12",
    description: "Four-wire spiral hose for very high pressure applications.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Hydraulic+Hose",
  },
  {
    id: "h2",
    category: "Hose and Fitting Products",
    name: "JIC 37° Fitting",
    code: "FIT-JIC-08",
    description: "Stainless steel fitting for secure hydraulic connections.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=JIC+Fitting",
  },
  {
    id: "h3",
    category: "Hose and Fitting Products",
    name: "Quick Release Coupler",
    code: "CPL-QR-12",
    description: "Flat-face hydraulic coupler to prevent leaks.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Quick+Coupler",
  },
  {
    id: "h4",
    category: "Hose and Fitting Products",
    name: "Hose Protection Spiral",
    code: "ACC-SPR-20",
    description: "Plastic spiral guard to prevent hose abrasion.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Protection+Spiral",
  },

  // Custom
  {
    id: "cu1",
    category: "Custom Part Products",
    name: "Precision Machined Gear",
    code: "CUS-GEAR-01",
    description: "CNC machined alloy steel gear to spec.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Machined+Gear",
  },
  {
    id: "cu2",
    category: "Custom Part Products",
    name: "Specialized Seal Kit",
    code: "CUS-SEAL-KIT",
    description: "High-temperature viton seals for custom cylinders.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Seal+Kit",
  },
  {
    id: "cu3",
    category: "Custom Part Products",
    name: "Fabricated Bracket",
    code: "CUS-BRA-HVY",
    description: "Heavy gauge steel bracket with powder coating.",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Steel+Bracket",
  },
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const filteredProducts = PRODUCTS_DATA.filter(
    (product) => product.category === activeCategory,
  );

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-sip-red font-bold uppercase tracking-widest text-sm mb-3">
            Our Catalog
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
            Premium Product Selection
          </h2>
          <div className="w-24 h-1.5 bg-sip-red mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 leading-relaxed">
            Browse our comprehensive inventory of heavy equipment parts and
            consumables designed for durability in the toughest environments.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-sip-red text-white border-sip-red shadow-lg scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-sip-red hover:text-sip-red"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeCategory}">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-sip-red hover:text-white transition-colors">
                    <Info size={16} /> Details
                  </button>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  {product.code}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                  {product.description}
                </p>

                <button className="w-full mt-auto py-2 border border-sip-red text-sip-red rounded-lg font-semibold text-sm hover:bg-sip-red hover:text-white transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={16} /> Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4 text-sm">
            Can't find what you're looking for?
          </p>
          <a
            href="#footer"
            className="inline-flex items-center gap-2 text-sip-red font-bold hover:underline"
          >
            Contact our Sales Team for Custom Orders <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;

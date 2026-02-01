import React from "react";
import { FileText, Download } from "lucide-react";
import { DocumentItem } from "../../types";

const documents: DocumentItem[] = [
  { title: "Nomor Induk Berusaha", refNumber: "8120005712xxx" },
  { title: "Surat Izin Usaha", refNumber: "503/0012/SIUP/xxx" },
  {
    title: "Surat Pengukuhan Pengusaha Kena Pajak",
    refNumber: "76.406.080.2-721.xxx",
  },
  { title: "NPWP Company", refNumber: "82.112.441.1-xxx" },
];

const Licenses: React.FC = () => {
  return (
    <section
      id="licenses"
      className="py-20 bg-gray-50 border-t border-gray-200"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-sip-red font-bold uppercase tracking-widest text-sm mb-3">
            Legal Compliance
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
            Business Licenses
          </h2>
          <div className="w-24 h-1.5 bg-sip-red mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We operate with full legal compliance and transparency. Below are
            our verified business credentials that prove our commitment to
            professional standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center"
            >
              <div className="w-16 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sip-red/10 transition-colors relative">
                <FileText className="w-8 h-8 text-gray-400 group-hover:text-sip-red transition-colors" />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  VALID
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">
                {doc.title}
              </h3>
              <p className="text-xs text-gray-500 break-all mb-4">
                {doc.refNumber}
              </p>
              <button className="mt-auto text-xs font-semibold text-sip-red flex items-center gap-1 hover:underline">
                <Download size={12} /> View File
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Licenses;

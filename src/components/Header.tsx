import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NavItem } from "../../types";

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Licenses", href: "#licenses" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#footer" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section highlighting logic
      const sections = navItems.map((item) => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a
            href="#hero"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <img
              src={
                scrolled
                  ? "/assets/logo-white.svg"
                  : "/assets/logo-black-v4.png"
              }
              alt="SIP Logo"
              className="h-12 w-auto object-contain bg-transparent"
            />
            <div
              className={`hidden md:block border-l-2 pl-2 ${scrolled ? "border-gray-300" : "border-white/30"}`}
            >
              <p
                className={`text-sm font-bold leading-none ${scrolled ? "text-gray-800" : "text-white"}`}
              >
                CV. Sumber
              </p>
              <p className={`text-sm font-bold leading-none text-sip-red`}>
                Inti Prima
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-sip-red relative group ${
                  scrolled ? "text-gray-700" : "text-gray-100"
                } ${activeSection === item.href.substring(1) ? "text-sip-red font-bold" : ""}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-sip-red transition-all duration-300 group-hover:w-full ${activeSection === item.href.substring(1) ? "w-full" : ""}`}
                ></span>
              </a>
            ))}
            <a
              href="#footer"
              onClick={(e) => handleNavClick(e, "#footer")}
              className="bg-sip-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={scrolled ? "text-black" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-black" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col py-4 px-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-gray-800 hover:text-sip-red font-medium ${activeSection === item.href.substring(1) ? "text-sip-red" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#footer"
                className="bg-sip-red text-white text-center py-3 rounded-md font-semibold"
                onClick={(e) => handleNavClick(e, "#footer")}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

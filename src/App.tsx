import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Commitment from "./components/Commitment";
import Licenses from "./components/Licenses";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-sip-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Commitment />
        <Licenses />
        <Clients />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

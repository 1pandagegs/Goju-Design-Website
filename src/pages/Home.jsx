import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import About from "../components/About";
import OurValues from "../components/OurValues";
import MeetOurTeam from "../components/MeetOurTeam";
import ContactSection from "../components/ContactSection";


const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />

        <Services />
        <PortfolioSection />
        <TestimonialsSection />
        <About />
        <OurValues />
        <MeetOurTeam />
        <ContactSection />
     
    </div>
  );
};

export default Home;

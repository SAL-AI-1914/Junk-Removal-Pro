import React from "react";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import AboutSection from "../components/landing/AboutSection";
import ContactSection from "../components/landing/ContactSection";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
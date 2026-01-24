import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import ServicesSection from "../components/landing/ServicesSection";
import ProjectsSection from "../components/landing/ProjectsSection";
import WhyAlgohives from "../components/landing/WhyAlgohives";
import TeamSection from "../components/landing/TeamSection";
import CTASection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";
// src/pages/LandingPage.jsx
import "../styles/landing.css";


export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyAlgohives />
      <TeamSection />
      <CTASection />
      <Footer />
    </>
  );
}

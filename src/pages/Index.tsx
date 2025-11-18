import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import ScheduleSection from "@/components/ScheduleSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <main>
        <HeroSection />
        <CoursesSection />
        <ScheduleSection />
        <DifferentialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

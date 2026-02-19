
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <HomeSection />
        <FeaturesSection />
        <AboutSection />
        <HowItWorksSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}

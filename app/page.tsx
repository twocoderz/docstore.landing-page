
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import Offline from "@/components/Offline";
import Read from "@/components/Read";
import Revise from "@/components/Revise";
import Search from "@/components/Search";
import Share from "@/components/Share"
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main>
        <HomeSection />
        <Revise/>
        <Read/>
        <Offline/>
        <Search/>
        <Share/>
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}

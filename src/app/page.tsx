import CoachSection from "@/components/CoachSection";
import FifthHero from "@/components/FifthHero";
import FourthHero from "@/components/FourthHero";
import Hero from "@/components/Hero";
import SecondHero from "@/components/SecondHero";
import ThirdHero from "@/components/ThirdHero";
import MovingSection from "@/components/MovingSection";
import InfiniteCard from "@/components/InfiniteCard";
import BaseSection from "@/components/BaseSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <SecondHero />
      <ThirdHero />
      <FourthHero />
      <FifthHero />
      <CoachSection />
      <MovingSection />
      <InfiniteCard />
      <BaseSection />
      <Footer />
    </main>

  );

}

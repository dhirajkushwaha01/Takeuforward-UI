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
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-300 relative overflow-x-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/15 via-orange-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />
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

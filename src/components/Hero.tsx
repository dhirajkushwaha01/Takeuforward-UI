import React from "react";
import Link from "next/link";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CheckCircle2, Sparkles } from "lucide-react";
import HeroFloatingCard from "./ui/HeroFloatingCard";

function Hero() {
    return (
        <div className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto pt-32 sm:pt-36 md:pt-40 lg:pt-40">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

                {/* Left Section - Centered on mobile/phone, Left-aligned on Desktop */}
                <ScrollReveal
                    direction="up"
                    delay={0.1}
                    className="w-full lg:max-w-[490px] shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left"
                >

                    <div className="inline-flex items-center gap-1.5 bg-amber-500/10 dark:bg-zinc-800/80 text-amber-600 dark:text-amber-400 border border-amber-500/20 dark:border-zinc-700/80 py-1 px-3 rounded-full text-xs font-semibold shadow-sm">
                        <Sparkles size={13} className="animate-pulse" />
                        <span>17,21,180+ Learners Trust Us</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold mt-4 leading-tight tracking-tight text-zinc-900 dark:text-white">
                        ONE STOP
                        <br />
                        <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                            Learning Platform
                        </span>
                        <br />
                        For TECH Interviews
                    </h1>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto lg:mx-0">
                        Learn DSA, System Design, and Core CS Subjects with personalised roadmaps,
                        expert video solutions, and practice built for real placement results.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6">

                        <Link href="/plus">
                            <button className="py-2.5 px-5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 rounded-full text-xs sm:text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-md">
                                Start Learning For Free
                            </button>
                        </Link>

                        <Link href="/plus">
                            <button className="py-2.5 px-5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full text-xs sm:text-sm font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-amber-500/20 flex items-center gap-1.5">
                                <span>Explore Plus</span>
                                <span>➜</span>
                            </button>
                        </Link>

                    </div>

                    <div className="mt-8 sm:mt-9 space-y-2.5 w-full max-w-md mx-auto lg:mx-0">

                        {[
                            "Curated sheets designed for a comprehensive learning experience.",
                            "Detailed videos and editorials to help you master every problem.",
                            "Stay consistent with streaks and leaderboard competition.",
                            "AI-powered instant doubt support for faster learning."
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-start text-left gap-2.5 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm">
                                <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </div>
                        ))}

                    </div>

                </ScrollReveal>

                {/* Right Section - 3D Floating Card without borders */}
                <ScrollReveal direction="left" delay={0.2} className="w-full lg:flex-1 flex justify-center lg:justify-end shrink-0 mt-6 lg:mt-0">
                    <HeroFloatingCard />
                </ScrollReveal>

            </div>

        </div>
    );
}

export default Hero;
import React from "react";
import { ScrollReveal } from "./ui/ScrollReveal";

function FourthHero() {
    return (
        <div className="mt-12 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto flex flex-wrap gap-6 items-stretch justify-between">

            <ScrollReveal direction="up" delay={0.1} className="w-full md:w-[48%]">
                <div className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5 sm:p-6 flex flex-col shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 group">

                    <p className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                        COMPANY-SPECIFIC INTERVIEW PREP
                    </p>

                    <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        Target your dream job with practice sets curated for companies like Google, Amazon, Microsoft, and more.
                    </p>

                    <p className="mt-2 sm:mt-3 text-zinc-500 dark:text-zinc-500 text-xs sm:text-sm">
                        Train with their most frequently asked questions to build confidence and precision.
                    </p>

                    <div className="mt-5 w-full h-52 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black/20">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        >
                            <source src="/v1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="w-full md:w-[48%]">
                <div className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5 sm:p-6 flex flex-col shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 group">

                    <p className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                        PERSONALIZED ROADMAPS
                    </p>

                    <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        Create a custom learning path based on your schedule and skill level.
                    </p>

                    <p className="mt-2 sm:mt-3 text-zinc-500 dark:text-zinc-500 text-xs sm:text-sm">
                        Whether you have 2 months or 12, get a clear step-by-step roadmap that keeps you focused.
                    </p>

                    <div className="mt-5 w-full h-52 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black/20">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        >
                            <source src="/v2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} className="w-full md:w-[48%]">
                <div className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5 sm:p-6 flex flex-col shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 group">

                    <p className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                        MASTER DSA, SYSTEM DESIGN & CORE CS
                    </p>

                    <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        Build a rock-solid foundation with 1000+ DSA problems, 100+ system design challenges, and complete coverage of DBMS, OS, and CN to ace every coding interview.
                    </p>

                    <div className="mt-auto pt-5 w-full h-52 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black/20">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        >
                            <source src="/v3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="w-full md:w-[48%]">
                <div className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5 sm:p-6 flex flex-col shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 group">

                    <p className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                        ACE INTERVIEWS WITH SHARED EXPERIENCES
                    </p>

                    <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        Read verified stories from real candidates. Learn what to expect in interviews, common questions, and proven strategies to perform your best.
                    </p>

                    <div className="mt-auto pt-5 w-full h-52 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black/20">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        >
                            <source src="/v4.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
            </ScrollReveal>

        </div>
    );
}

export default FourthHero;
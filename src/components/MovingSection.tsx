import React from "react";
import { ScrollReveal } from "./ui/ScrollReveal";

function MovingSection() {
    return (
        <div className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto my-20 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">

            <ScrollReveal direction="right" delay={0.1}>
                <div className="p-3 w-fit rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 mb-8 mx-auto md:mx-0">
                    <img
                        src="/icon2.svg"
                        alt="icon"
                        className="w-12 h-12"
                    />
                </div>

                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-sans font-medium text-zinc-500 leading-tight">
                    Coders that
                </span>

                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-sans font-bold text-zinc-900 dark:text-white mt-1 leading-tight tracking-tight">
                    turned around their careers
                </span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2} className="mt-6 md:mt-24">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold text-xs sm:text-sm shadow-sm">
                    <span className="text-xs">🌟</span>
                    <span>17,31,704+ Learners & Counting!</span>
                </div>
            </ScrollReveal>

        </div>
    );
}

export default MovingSection;
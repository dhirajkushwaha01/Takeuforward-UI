import React from "react";
import Link from "next/link";
import { ScrollReveal } from "./ui/ScrollReveal";

export default function CoachSection() {
    return (
        <div className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto my-24 flex flex-col md:flex-row items-center justify-between gap-12">

            <ScrollReveal direction="right" delay={0.1} className="w-full md:w-1/2 text-center md:text-left">

                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-sans font-medium text-zinc-500 leading-tight">
                    Your Coach,
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-sans font-bold text-zinc-900 dark:text-white mt-1 leading-tight tracking-tight">
                    Not Just A Creator
                </span>

                <p className="mt-6 text-zinc-700 dark:text-zinc-300 font-medium text-sm sm:text-base">
                    Hey, I'm Raj, Founder & CEO of takeUforward, formerly known as Striver.
                </p>

                <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                    I began my journey at Media.net, moved to Google, and spent three incredible years there before choosing a different path: building something of my own. Today, I run takeUforward full-time, a platform born from passion, persistence, and the desire to make learning truly accessible.
                </p>

                <div className="mt-6 p-4 rounded-xl border-l-4 border-amber-500 bg-amber-500/5 dark:bg-amber-500/10 text-left">
                    <p className="text-xs uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider">
                        Remember:
                    </p>
                    <p className="mt-1 font-semibold text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">
                        You don't need a perfect background to build a great future. You just need direction, discipline, and the courage to start.
                    </p>
                </div>

                <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                    Let's move forward, one step, one skill, one leap at a time.
                </p>

                <div className="mt-8 flex justify-center md:justify-start">
                    <Link href="/plus">
                        <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 font-bold rounded-full text-white shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all duration-300">
                            Get Started Now ➜
                        </button>
                    </Link>
                </div>

                <div className="mt-10 space-y-3 max-w-[380px] mx-auto md:mx-0 text-left">

                    <div className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-neutral-800 rounded-xl px-4 py-3 shadow-sm hover:border-amber-500/50 transition-colors">

                        <img
                            src="/takeUforward.svg"
                            alt="takeUforward"
                            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-neutral-700 shrink-0"
                        />

                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-zinc-900 dark:text-white text-sm font-semibold">
                                    @takeuforward
                                </p>

                                <span className="text-red-500 text-sm">
                                    ▶
                                </span>

                                <span className="text-zinc-500 dark:text-zinc-400 text-xs">
                                    1M subscribers
                                </span>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-4 mt-0.5">
                                100+ in-depth videos on Data Structures, Algorithms & more.
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-neutral-800 rounded-xl px-4 py-3 shadow-sm hover:border-amber-500/50 transition-colors">

                        <img
                            src="/raj-vikramaditya.png"
                            alt="Raj Vikramaditya"
                            className="w-10 h-10 rounded-full shrink-0"
                        />

                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-zinc-900 dark:text-white text-sm font-semibold">
                                    Raj Vikramaditya
                                </p>

                                <span className="text-blue-500 text-sm font-bold">
                                    in
                                </span>

                                <span className="text-zinc-500 dark:text-zinc-400 text-xs">
                                    913k+ followers
                                </span>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-4 mt-0.5">
                                Building takeUforward • Ex - Google, Amazon | GSoC Mentor
                            </p>
                        </div>

                    </div>

                </div>

            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2} className="w-full md:w-1/2 flex justify-center items-center">

                <div className="relative group w-full max-w-[500px] lg:max-w-[560px]">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-transparent rounded-3xl blur-3xl group-hover:opacity-100 opacity-60 transition duration-1000 -z-10" />
                    <img
                        src="/coach.png"
                        alt="Raj Vikramaditya - Striver"
                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                </div>

            </ScrollReveal>

        </div>
    );
}
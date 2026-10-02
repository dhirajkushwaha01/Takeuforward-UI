"use client";

import React from "react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export default function SecondHero() {
    return (
        <section className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto mt-20 sm:mt-28 lg:mt-36 mb-16 sm:mb-20 select-none">
            {/* Contained Theater Card for Seamless Light & Dark Mode Display */}
            <div className="relative min-h-[500px] sm:min-h-[520px] md:h-[560px] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-zinc-200/80 dark:border-white/10 bg-zinc-950 py-10 sm:py-12 px-4 sm:px-6 flex items-center justify-center">

                {/* Background Video with enhanced visibility */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute left-1/2 top-1/2 z-0 w-[600px] md:w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] object-cover opacity-80 dark:opacity-85 brightness-100 blur-[2px]"
                >
                    <source src="/typing.mp4" type="video/mp4" />
                </video>

                {/* Seamless Dark Overlay - clear visibility */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/65 backdrop-blur-[0.5px]" />

                {/* Content Container */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">

                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-zinc-300 text-xs font-semibold mb-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>GLOBAL TECH COMMUNITY</span>
                        </div>

                        <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                            12,02,101+
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.2}>
                        <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
                            Engineers Learning on TakeUforward
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.3}>
                        <p className="mt-3 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-zinc-300 font-normal">
                            From YouTube to LinkedIn, our community keeps growing every day.
                            Learn DSA, Development, System Design, and prepare for your dream tech career with confidence.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.4} className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">

                        {/* YouTube Card */}
                        <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl bg-zinc-900/85 hover:bg-zinc-800/90 text-white px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:scale-105 border border-white/10 group">
                            <div className="p-1.5 rounded-xl bg-red-500/10 text-red-500 shrink-0">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                                    alt="youtube"
                                    className="h-4 w-4 sm:h-5 sm:w-5 shrink-0"
                                />
                            </div>

                            <div className="text-left">
                                <div className="flex items-center gap-1.5">
                                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                        1M Subscribers
                                    </h4>
                                    <CheckCircle2 size={13} className="text-red-400" />
                                </div>
                                <p className="text-[10px] sm:text-[11px] text-zinc-400">
                                    @takeuforward
                                </p>
                            </div>
                        </div>

                        {/* LinkedIn Card */}
                        <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl bg-zinc-900/85 hover:bg-zinc-800/90 text-white px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:scale-105 border border-white/10 group">
                            <div className="p-1.5 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                    alt="linkedin"
                                    className="h-4 w-4 sm:h-5 sm:w-5 shrink-0"
                                />
                            </div>

                            <div className="text-left">
                                <div className="flex items-center gap-1.5">
                                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                                        950K+ Followers
                                    </h4>
                                    <CheckCircle2 size={13} className="text-blue-400" />
                                </div>
                                <p className="text-[10px] sm:text-[11px] text-zinc-400">
                                    Dhiraj Kushwaha
                                </p>
                            </div>
                        </div>

                    </ScrollReveal>

                </div>

            </div>
        </section>
    );
}
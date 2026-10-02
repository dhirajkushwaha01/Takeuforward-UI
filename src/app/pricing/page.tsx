"use client";

import React from "react";
import plansSection from "@/utils/plansSection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Footer from "@/components/Footer";
import { Sparkles, Check, X } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative overflow-x-hidden flex flex-col justify-between">
            {/* Ambient lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-amber-500/15 via-orange-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />

            <div className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 w-full">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto px-2">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-sm">
                            <Sparkles size={13} className="animate-pulse" />
                            <span>INVEST IN YOUR CAREER</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                            Explore More Plans <br />
                            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                                Tailored to Your Needs
                            </span>
                        </h1>
                        <p className="mt-3 sm:mt-4 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                            Get complete access to all tracks, coding challenges, video editorials, and premium mentorship.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Cards Grid - Responsive from 1 to 3 columns */}
                <StaggerContainer className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {plansSection.map((item, index) => (
                        <StaggerItem key={index}>
                            <div
                                className={`h-full flex flex-col justify-between rounded-3xl border ${
                                    index === 2
                                        ? "border-amber-500/60 dark:border-amber-500/50 shadow-lg shadow-amber-500/5"
                                        : "border-zinc-200 dark:border-zinc-800"
                                } bg-white dark:bg-zinc-900/70 p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-2xl hover:border-amber-500/60 hover:-translate-y-1.5 transition-all duration-300 relative group`}
                            >
                                {index === 2 && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                                        Best Value Track
                                    </div>
                                )}

                                <div>
                                    {/* Plan Name */}
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                            {item.name}
                                        </h3>

                                        <span className="shrink-0 rounded-full bg-orange-500/15 border border-orange-500/30 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-orange-600 dark:text-orange-400">
                                            {item.learners}
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="mt-5 sm:mt-6">
                                        <p className="text-zinc-400 dark:text-zinc-500 line-through text-xs sm:text-sm md:text-base">
                                            {item.currency}{item.originalPrice}
                                        </p>

                                        <div className="mt-1 flex items-baseline gap-2 sm:gap-3 flex-wrap">
                                            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-zinc-900 dark:text-white tracking-tight">
                                                {item.currency}{item.discountedPrice}
                                            </h2>

                                            <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                                {item.discountPercent}% OFF
                                            </span>
                                        </div>

                                        <p className="mt-1.5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                                            Valid for {item.duration}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="my-5 sm:my-6 h-px bg-zinc-100 dark:bg-zinc-800" />

                                    {/* Features */}
                                    <div className="space-y-2.5 sm:space-y-3">
                                        {item.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                                                <div
                                                    className={`flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded-full text-xs shrink-0 mt-0.5 ${
                                                        feature.included
                                                            ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                                            : "bg-red-500/15 text-red-500"
                                                    }`}
                                                >
                                                    {feature.included ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
                                                </div>

                                                <p
                                                    className={`text-xs sm:text-sm leading-relaxed ${
                                                        feature.included
                                                            ? "text-zinc-700 dark:text-zinc-300 font-medium"
                                                            : "text-zinc-400 dark:text-zinc-500 line-through"
                                                    }`}
                                                >
                                                    {feature.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Button */}
                                <button className="mt-6 sm:mt-8 w-full rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 py-3 sm:py-3.5 font-bold text-xs sm:text-sm md:text-base text-white shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    {item.ctaText}
                                </button>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            <Footer />
        </div>
    );
}
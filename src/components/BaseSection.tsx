"use client";

import { faqData } from "@/utils/faqData";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

function BaseSection() {
    type Category = keyof typeof faqData;

    const categories = Object.keys(faqData) as Category[];

    const [activeCategory, setActiveCategory] = useState<Category>(
        categories[0]
    );

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto py-14 sm:py-16 select-none">

            <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-3 border border-zinc-200/80 dark:border-zinc-700/60 shadow-sm">
                    <HelpCircle size={13} />
                    <span>Got Questions? We Have Answers</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                    Frequently Asked Questions
                </h2>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                    Everything you need to know about TakeUforward's learning roadmaps, sheets, and interview prep.
                </p>
            </ScrollReveal>

            <div className="mt-8 md:grid md:grid-cols-[260px_1fr] md:gap-6 items-stretch">

                {/* Categories Column */}
                <ScrollReveal direction="right" delay={0.2} className="h-full">
                    <div className="h-full rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm p-2.5 flex flex-col justify-between shadow-sm">
                        <div className="flex md:flex-col gap-1.5 overflow-x-auto md:overflow-visible pb-1 md:pb-0 scrollbar-none">
                            {categories.map((category) => {
                                const isActive = activeCategory === category;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setOpenIndex(0);
                                        }}
                                        className={`shrink-0 rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-all duration-200 flex items-center justify-between group ${
                                            isActive
                                                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                                                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                                        }`}
                                    >
                                        <span className="truncate pr-2">{category}</span>
                                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full transition-colors ${
                                            isActive
                                                ? "bg-white/20 text-white dark:bg-zinc-900/15 dark:text-zinc-900"
                                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700"
                                        }`}>
                                            {faqData[category].length}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="hidden md:block mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 px-2 text-xs text-zinc-400">
                            Select a category to view answers
                        </div>
                    </div>
                </ScrollReveal>

                {/* Accordion Questions Column */}
                <ScrollReveal direction="left" delay={0.2} className="h-full mt-4 md:mt-0">
                    <div className="h-full rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-sm flex flex-col justify-start">
                        {faqData[activeCategory].map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`border-b border-zinc-100 dark:border-zinc-800/80 last:border-b-0 transition-colors ${
                                        isOpen ? "bg-zinc-50/70 dark:bg-zinc-800/20" : ""
                                    }`}
                                >
                                    <button
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="w-full flex items-center justify-between gap-3 px-5 py-4 sm:px-6 sm:py-4.5 text-left group hover:bg-zinc-50/80 dark:hover:bg-zinc-800/30 transition-colors"
                                    >
                                        <span className={`font-semibold text-sm sm:text-base transition-colors ${
                                            isOpen
                                                ? "text-zinc-900 dark:text-white"
                                                : "text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white"
                                        }`}>
                                            {item.question}
                                        </span>

                                        <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                                            isOpen
                                                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700"
                                        }`}>
                                            <ChevronDown
                                                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                                    isOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                        </div>
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 pb-5 sm:px-6 sm:pb-5.5 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-100 dark:border-zinc-800/50 pt-3">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}

export default BaseSection;
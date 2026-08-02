"use client";
import React from "react";
import { faqData } from "@/utils/faqData";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function BaseSection() { 

    type Category = keyof typeof faqData;

    const categories = Object.keys(faqData) as Category[];

    const [activeCategory, setActiveCategory] = useState<Category>(
        categories[0]
    );
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-6xl mx-auto py-20">
            <span className="text-5xl font-bold">
                Frequently Asked <br />
                Questions
            </span>

            <div className="mt-14 grid grid-cols-[300px_1fr] gap-20">

                {/* Left Side */}
                <div className="space-y-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setOpenIndex(null); // Category change hone par first FAQ open hoga
                            }}
                            className={`w-full rounded-full border px-5 py-3 text-left transition
                            ${activeCategory === category
                                    ? "bg-zinc-700 border-zinc-600"
                                    : "border-zinc-800 hover:border-zinc-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Right Side */}
                <div className="border border-zinc-800 rounded-2xl overflow-hidden">
                    {faqData[activeCategory].map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-zinc-800 last:border-b-0"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex items-center justify-between px-8 py-6 text-left"
                            >
                                <span className="font-semibold text-white">
                                    {item.question}
                                </span>

                                <ChevronDown
                                    className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-8 pb-6 text-gray-400 leading-7">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BaseSection;
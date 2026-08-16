"use client";

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
        <div className="max-w-6xl mx-auto py-20 px-4 sm:px-0">

            <span className="text-4xl sm:text-5xl font-bold">
                Frequently Asked <br />
                Questions
            </span>

            <div className="mt-14 md:grid md:grid-cols-[300px_1fr] md:gap-20">

               
                <div className="mb-8 flex gap-3 overflow-x-auto scrollbar-none pb-2 md:mb-0 md:block md:space-y-2 md:overflow-visible md:pb-0">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setOpenIndex(null);
                            }}
                            className={`shrink-0 rounded-full border px-5 py-3 text-left transition md:w-full ${activeCategory === category
                                    ? "bg-zinc-700 border-zinc-600"
                                    : "border-zinc-800 hover:border-zinc-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="border border-zinc-800 rounded-2xl overflow-hidden">

                    {faqData[activeCategory].map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-zinc-800 last:border-b-0"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }
                                className="w-full flex items-center justify-between gap-4 px-5 py-5 md:px-8 md:py-6 text-left"
                            >
                                <span className="font-semibold text-white">
                                    {item.question}
                                </span>

                                <ChevronDown
                                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${openIndex === index
                                        ? "rotate-180"
                                        : ""
                                        }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-5 pb-5 md:px-8 md:pb-6 text-gray-400 leading-7">
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
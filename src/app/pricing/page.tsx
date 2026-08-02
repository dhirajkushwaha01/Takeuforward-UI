import React from "react";
import plansSection from "@/utils/plansSection";

function Page() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-5xl font-semibold text-white leading-tight">
                    Explore More Plans <br />
                    <span className="text-zinc-500">Tailored to Your Needs</span>
                </h2>
            </div>

            {/* Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {plansSection.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
                    >
                        {/* Plan Name */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-white">{item.name}</h3>

                            <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-400">
                                {item.learners}
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mt-8">
                            <p className="text-zinc-500 line-through text-lg">
                                {item.currency}
                                {item.originalPrice}
                            </p>

                            <div className="mt-2 flex items-end gap-3">
                                <h1 className="text-5xl font-bold text-white">
                                    {item.currency}
                                    {item.discountedPrice}
                                </h1>

                                <span className="rounded-md bg-green-500/15 px-2 py-1 text-sm font-semibold text-green-400">
                                    {item.discountPercent}% OFF
                                </span>
                            </div>

                            <p className="mt-2 text-sm text-zinc-400">
                                Valid for {item.duration}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="my-8 h-px bg-zinc-800" />

                        {/* Features */}
                        <div className="space-y-4">
                            {item.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div
                                        className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${feature.included
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-red-500/20 text-red-400"
                                            }`}
                                    >
                                        {feature.included ? "✓" : "✕"}
                                    </div>

                                    <p
                                        className={`text-sm ${feature.included
                                                ? "text-zinc-300"
                                                : "text-zinc-500 line-through"
                                            }`}
                                    >
                                        {feature.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <button className="mt-8 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
                            {item.ctaText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
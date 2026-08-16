import React from "react";
import Image from "next/image";

function Hero() {
    return (
        <div className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto pt-32 sm:pt-36 md:pt-40 lg:pt-40">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Left Section */}
                <div className="w-full lg:w-auto">

                    <span className="bg-gray-200 text-black py-1 px-2 rounded-full text-sm">
                        17,21,180+ Learners
                    </span>

                    <h1 className="text-4xl sm:text-4xl font-bold mt-6 leading-tight">
                        ONE STOP
                        <br className="hidden sm:block" />
                        Learning Platform
                        <br className="hidden sm:block" />
                        For TECH Interviews
                    </h1>

                    <p className="mt-6 text-gray-400 leading-relaxed">
                        Learn DSA, System Design, and Core CS Subjects
                        <br className="hidden sm:block" />
                        with personalised brroadmaps, expert videos, and
                        <br className="hidden sm:block" />
                        practice built for results.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">

                        <a href="/">
                            <button className="py-3 px-5 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-100 transition-all duration-300">
                                Start Learning For Free
                            </button>
                        </a>

                        <a href="/">
                            <button className="py-3 px-5 bg-amber-600 text-black rounded-full font-bold hover:bg-amber-400 transition-all duration-300">
                                Explore Plus ➜
                            </button>
                        </a>

                    </div>

                    <div className="mt-16 sm:mt-20">

                        <p className="text-gray-400 mt-2">
                            📄 Curated sheets designed for a better learning experience.
                        </p>

                        <p className="text-gray-400 mt-2">
                            🎥 Detailed videos and editorials to help you master every problem.
                        </p>

                        <p className="text-gray-400 mt-2">
                            🏆 Stay consistent with streaks and leaderboard competition.
                        </p>

                        <p className="text-gray-400 mt-2">
                            🤖 AI-powered instant doubt support for faster learning.
                        </p>

                    </div>

                </div>

                {/* Right Section */}
                <div className="w-full lg:w-auto flex justify-center shrink-0">

                    <Image
                        src="/heropic.png"
                        alt="pic"
                        width={600}
                        height={400}
                        className="cursor-pointer w-full max-w-[600px] h-auto"
                    />

                </div>

            </div>

        </div>
    );
}

export default Hero;
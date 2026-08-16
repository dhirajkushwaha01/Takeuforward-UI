export default function CoachSection() {
    return (
        <div className="max-w-6xl mx-auto mt-50 flex flex-col md:flex-row">

            <div className="w-full md:w-auto text-center md:text-left">

                <span className="text-5xl font-sans font-medium text-gray-600">
                    Your Coach,
                </span>

                <span className="text-5xl font-sans font-medium text-white">
                    Not <br />
                    Just A Creator
                </span>

                <p className="mt-10 text-gray-400">
                    Hey, I'm Raj, Founder & CEO of takeUforward, formerly known as Striver.
                </p>

                <p className="mt-8 text-gray-400">
                    I began my journey at Media.net, moved to Google, andspent three
                    <br />
                    incredible years there before choosing a different path;building something of my own.
                    <br />
                    Today, I run takeUforward full-time, a platform born from
                    <br />
                    passion, persistence, and the desire to make learning truly accessible.
                </p>

                <p className="mt-8 text-gray-400">
                    Remember:
                </p>

                <p className="mt-2 font-bold text-gray-400">
                    You don't need a perfect background to build a great future.
                    <br />
                    You just need direction, discipline, and the courage to start.
                </p>

                <p className="mt-8 text-gray-400">
                    Let's move forward, one step, one skill, one leap at a time.
                </p>

                <a href="/">
                    <button className="px-6 py-3 bg-orange-500 mt-8 font-bold rounded-full text-amber-50">
                        Get Started Now ➜
                    </button>
                </a>

                <div className="mt-8 space-y-3 max-w-[340px] mx-auto md:mx-0 text-left">

                    <div className="flex items-center gap-3 bg-[#171717] border border-neutral-800 rounded-xl px-3 py-2">

                        <img
                            src="/takeUforward.svg"
                            alt="takeUforward"
                            className="w-10 h-10 rounded-full border border-neutral-700"
                        />

                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-white text-sm font-medium">
                                    @takeuforward
                                </p>

                                <span className="text-red-500 text-sm">
                                    ▶
                                </span>

                                <span className="text-gray-400 text-xs">
                                    1M subscribers
                                </span>
                            </div>

                            <p className="text-gray-400 text-xs leading-4">
                                100+ in-depth videos on Data Structures,
                                Algorithms & more.
                            </p>
                        </div>

                    </div>

                    <div className="flex items-center gap-3 bg-[#171717] border border-neutral-800 rounded-xl px-3 py-2">

                        <img
                            src="/raj-vikramaditya.png"
                            alt="Raj Vikramaditya"
                            className="w-10 h-10 rounded-full"
                        />

                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-white text-sm font-medium">
                                    Raj Vikramaditya
                                </p>

                                <span className="text-blue-500 text-sm font-bold">
                                    in
                                </span>

                                <span className="text-gray-400 text-xs">
                                    913k+ followers
                                </span>
                            </div>

                            <p className="text-gray-400 text-xs leading-4">
                                Building takeUforward • Ex - Google, Amazon | GSoC Mentor
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="w-full md:w-auto">

                <img
                    src="/coach.png"
                    alt="Raj Vikramaditya"
                    className="w-full md:w-150 h-auto md:h-150 mt-5 md:mt-30 rounded-full"
                />

            </div>

        </div>
    );
}
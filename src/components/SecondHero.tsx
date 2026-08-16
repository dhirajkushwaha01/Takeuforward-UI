"use client";

export default function SecondHero() {
    return (
        <section className="relative h-[750px] w-full overflow-hidden">

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute left-1/2 top-1/2 z-0 w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] object-cover opacity-70 brightness-95 blur-[2px] max-md:w-[550px]"
            >
                <source src="/typing.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 z-10 bg-black/35" />

            <div className="absolute left-1/2 top-1/2 z-10 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/2 blur-[120px]" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">

                <h1 className="text-5xl font-extrabold text-amber-500 md:text-3xl">
                    12,02,101+
                </h1>

                <h2 className="mt-5 text-3xl font-bold text-white md:text-2xl">
                    Engineers learning on TUF
                </h2>

                <p className="mt-6 max-w-xl leading-5 text-sm text-gray-300">
                    From YouTube to LinkedIn, our growing community{" "}
                    <br className="max-md:hidden" />
                    keeps growing every day. Learn DSA, Development,{" "}
                    <br className="max-md:hidden" />
                    System Design and prepare for your dream tech career.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6">

                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                            alt="youtube"
                            className="h-9 w-9 shrink-0"
                        />

                        <div className="text-left">

                            <h3 className="text-md font-semibold text-white">
                                1M Subscribers
                            </h3>

                            <p className="text-sm text-gray-400">
                                @dhirajkushwaha
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            alt="linkedin"
                            className="h-9 w-9 shrink-0"
                        />

                        <div className="text-left">

                            <h3 className="text-md font-semibold text-white">
                                950K+ Followers
                            </h3>

                            <p className="text-sm text-gray-400">
                                Dhiraj Kushwaha
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
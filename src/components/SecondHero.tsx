"use client";

export default function SecondHero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute left-1/2 top-1/2 z-0 w-[850px] md:w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] object-cover opacity-70 brightness-95 blur-[2px]"
            >
                <source src="/typing.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35 z-10" />

            {/* Orange Glow */}
            <div className="absolute left-1/2 top-1/2 z-10 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/2 blur-[120px]" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center">

                <h1 className="text-5xl md:text-3xl font-extrabold text-amber-500">
                    12,02,101+
                </h1>

                <h2 className="mt-5 text-3xl md:text-2xl font-bold text-white">
                    Engineers learning on TUF
                </h2>

                <p className="mt-6 max-w-xl leading-5 text-sm text-gray-300">
                    From YouTube to LinkedIn, our growing community <br /> keeps growing every
                    day. Learn DSA, Development, <br /> System Design and prepare for your dream
                    tech career.
                </p>

                {/* Social Cards */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6">

                    {/* Youtube */}
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                            alt="youtube"
                            className="h-9 w-9"
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

                    {/* Linkedin */}
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            alt="linkedin"
                            className="h-9 w-9"
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
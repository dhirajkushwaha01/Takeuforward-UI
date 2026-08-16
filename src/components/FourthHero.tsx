function FourthHero() {
    return (
        <div className="mt-10 max-w-6xl mx-auto flex flex-wrap gap-6 items-stretch justify-between px-4 sm:px-0">

            <div className="border border-gray-600 p-5 flex flex-col w-full md:w-[48%]">

                <p className="font-semibold text-lg">
                    COMPANY-SPECIFIC INTERVIEW PREP
                </p>

                <p className="mt-1 text-gray-400">
                    Target your dream job with practice sets curated for companies
                    <br className="hidden sm:block" /> like Google, Amazon, Microsoft, and more.
                </p>

                <p className="mt-5 text-gray-400">
                    Train with their most frequently asked questions to build
                    <br className="hidden sm:block" /> confidence and precision.
                </p>

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-72 mt-5 object-cover rounded-lg"
                >
                    <source src="/v1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

            <div className="border border-gray-600 p-5 flex flex-col w-full md:w-[48%]">

                <p className="font-semibold text-lg">
                    PERSONALIZED ROADMAPS
                </p>

                <p className="mt-1 text-gray-400">
                    Create a custom learning path based on your schedule and
                    <br className="hidden sm:block" /> skill level.
                </p>

                <p className="mt-5 text-gray-400">
                    Whether you have 2 months or 12, get a clear step-by-step
                    <br className="hidden sm:block" /> roadmap that keeps you focused.
                </p>

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-72 mt-5 object-cover rounded-lg"
                >
                    <source src="/v2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

            <div className="border border-gray-600 p-5 flex flex-col w-full md:w-[48%]">

                <p className="font-semibold text-lg">
                    Master DSA, System Design, and Core CS
                </p>

                <p className="mt-1 text-gray-400">
                    Build a rock-solid foundation with 1000+ DSA problems, 100+ system design challenges, and complete coverage of DBMS, OS, and CN to ace every coding interview.
                </p>

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-72 mt-5 object-cover rounded-lg"
                >
                    <source src="/v3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

            <div className="border border-gray-600 p-5 flex flex-col w-full md:w-[48%]">

                <p className="font-semibold text-lg">
                    Ace Interviews with Shared Experiences
                </p>

                <p className="mt-1 text-gray-400">
                    Read verified stories from real candidates. Learn what to expect in interviews, common questions, and proven strategies to perform your best.
                </p>

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-72 mt-5 object-cover rounded-lg"
                >
                    <source src="/v4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

        </div>
    );
}

export default FourthHero;
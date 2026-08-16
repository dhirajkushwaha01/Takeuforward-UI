function MovingSection() {
    return (
        <div className="max-w-6xl mx-auto mt-45 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">

            <div>
                <img
                    src="/icon2.svg"
                    alt="icon"
                    className="w-20 h-20 mb-20 mx-auto md:mx-0"
                />

                <span className="text-5xl font-sans font-medium text-gray-600">
                    Coders that <br />
                </span>

                <span className="text-5xl font-sans font-medium text-white">
                    turned around <br />
                    their careers
                </span>
            </div>

            <div className="mt-10 md:mt-0">
                <p className="text-orange-600 text-lg font-bold md:mt-70">
                    17,31,704+ Learners!
                </p>
            </div>

        </div>
    );
}

export default MovingSection;
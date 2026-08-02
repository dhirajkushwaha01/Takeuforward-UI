import { div } from 'motion/react-client'
import React from 'react'
import Image from "next/image";
function Hero() {
    return (
        <div className=' mt-50 max-w-6xl mx-auto flex justify-between'>
            <div>

                <span className=' bg-gray-200 text-black py-1 px-2 rounded-full text-sm'>17,21,180+ Learners</span>
                <h1 className=' text-5xl font-bold mt-6'> ONE STOP <br />Learning Platform <br />For TECH Interviews </h1>
                <p className='mt-6 text-gray-400'>Learn DSA, System Design, and Core CS Subjects <br /> with personalised brroadmaps, expert videos, and <br /> practice built for results.</p>


                <a href="/">
                    <button className="py-3 px-5 bg-gray-200 text-black rounded-full font-bold mt-6 hover:bg-gray-100 transition-all duration-300">
                        Start Learning For Free
                    </button>
                </a>

                <a href="/">
                    <button className="py-3 px-5 bg-amber-600 text-black rounded-full font-bold ml-2 mt-6 hover:bg-amber-400 transition-all duration-300">
                        Explore Plus ➜
                    </button>
                </a>

                <p className=' text-gray-400 mt-25 '>📄 Curated sheets designed for a better learning experience.</p>
                <p className=' text-gray-400 mt-2 '>🎥 Detailed videos and editorials to help you master every problem.</p>
                <p className=' text-gray-400 mt-2 '>🏆 Stay consistent with streaks and leaderboard competition.</p>
                <p className=' text-gray-400 mt-2 '>🤖 AI-powered instant doubt support for faster learning.</p>
            </div>
            <div>
                <Image
                    src="/heropic.png"
                    alt="pic"
                    width={600}
                    height={400}
                    className="cursor-pointer"
                />

            </div>

        </div>

    )
}

export default Hero
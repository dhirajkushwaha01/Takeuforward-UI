import React from 'react'
import Image from "next/image";

function ThirdHero() {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 gap-10 md:gap-0'>
            <div className='w-full md:w-auto flex flex-col items-center md:items-start'>
                <Image
                    src="/icon.svg"
                    alt="icon"
                    width={60}
                    height={60}
                    className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]'
                />
                <div className='mt-10 sm:mt-16 md:mt-30 text-center md:text-left'>
                    <span className='text-3xl sm:text-4xl lg:text-5xl font-sans font-medium text-gray-600'>
                        Everything You <br /> Need To
                    </span>
                    <span className='text-3xl sm:text-4xl lg:text-5xl font-sans font-medium text-white'>
                        Crack <br /> Tech Interviews
                    </span>
                </div>
            </div>

            <div className='w-full md:w-auto mt-0 md:mt-56 text-gray-400 text-center md:text-left'>
                <p className='text-sm sm:text-base leading-relaxed'>
                    A single platform that combines structured <br />
                    learning, real practice, and expert guidance <br />
                    so you can master coding, system design, <br />
                    and core CS subjects with confidence.
                </p>
            </div>
        </div>
    )
}

export default ThirdHero
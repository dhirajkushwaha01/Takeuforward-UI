import React from 'react'
import Image from "next/image";
import { div } from 'motion/react-client';
function ThirdHero() {
    return (
        <div className='flex justify-between max-w-6xl mx-auto'>
            <div>
                <Image
                    src="/icon.svg"
                    alt="icon"
                    width={60}
                    height={60}
                />
                <div className='mt-30'>
                    <span className=' text-5xl font-sans font-medium text-gray-600'>Everything You <br /> Need To </span>
                    <span className=' text-5xl font-sans font-medium text-white '>Crack <br /> Tech Interviews</span>
                </div>
            </div>


            <div className='mt-56 text-gray-400'>
                <p>A single platform that combines structured <br /> learning, real practice, and expert guidance <br /> so you can master coding, system design, <br /> and core CS subjects with confidence.</p>
            </div>
        </div>
    )
}

export default ThirdHero 
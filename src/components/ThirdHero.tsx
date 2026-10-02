import React from 'react';
import Image from "next/image";
import { ScrollReveal } from "./ui/ScrollReveal";

function ThirdHero() {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto gap-10 md:gap-0 my-16'>
            <ScrollReveal direction="right" delay={0.1} className='w-full md:w-auto flex flex-col items-center md:items-start'>
                <div className="p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20">
                    <Image
                        src="/icon.svg"
                        alt="icon"
                        width={60}
                        height={60}
                        className='w-[44px] h-[44px] sm:w-[54px] sm:h-[54px]'
                    />
                </div>
                <div className='mt-8 sm:mt-12 md:mt-16 text-center md:text-left'>
                    <span className='block text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-sans font-medium text-zinc-500 dark:text-zinc-500 leading-tight'>
                        Everything You <br /> Need To
                    </span>
                    <span className='block text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-sans font-bold text-zinc-900 dark:text-white mt-1 leading-tight tracking-tight'>
                        Crack Tech Interviews
                    </span>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2} className='w-full md:w-auto mt-0 md:mt-36 text-zinc-600 dark:text-zinc-400 text-center md:text-left'>
                <p className='text-sm sm:text-base leading-relaxed max-w-md'>
                    A single platform that combines structured learning, real practice, and expert guidance so you can master coding, system design, and core CS subjects with unwavering confidence.
                </p>
            </ScrollReveal>
        </div>
    );
}

export default ThirdHero;
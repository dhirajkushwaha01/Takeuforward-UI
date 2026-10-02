"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Play, FileText, ChevronDown } from "lucide-react";

export default function HeroFloatingCard() {
  return (
    <div className="relative w-full max-w-[580px] lg:max-w-[620px] perspective-[1200px] select-none py-4 sm:py-6">
      {/* Ambient background glow (no border, pure warm glow) */}
      <div className="absolute -inset-4 sm:-inset-5 bg-gradient-to-tr from-orange-500/20 via-amber-500/15 to-transparent rounded-[44px] blur-3xl -z-10 pointer-events-none" />

      {/* Main 3D Card (Code Editor from heropic.png) - NO BORDER */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative rounded-[28px] sm:rounded-[32px] bg-[#0c0c0e] text-white p-5 sm:p-7 md:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] transform-gpu transition-transform duration-700 hover:rotate-0 [transform:rotateY(-3deg)_rotateX(2deg)] group"
      >
        {/* Top Window Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-3">
          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f]" />
        </div>

        {/* Problem Header */}
        <div className="mb-3 sm:mb-3.5">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-400 uppercase">
            <FileText size={13} className="text-zinc-400" />
            <span>Problem</span>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide mt-0.5 sm:mt-1 uppercase">
            Strivers A2Z DSA Sheet
          </h3>
        </div>

        {/* Editor Toolbar with Language Dropdown and Run Button */}
        <div className="relative flex items-start justify-between mb-3 sm:mb-3.5 z-30">
          {/* Language Selector Dropdown Mockup */}
          <div className="relative">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-zinc-900/90 text-[11px] sm:text-xs font-medium text-zinc-200 cursor-pointer shadow-sm">
              <span>Go</span>
              <ChevronDown size={13} className="text-zinc-400" />
            </div>

            {/* Dropdown Menu Overlay matching heropic.png */}
            <div className="absolute top-8 sm:top-9 left-0 w-28 sm:w-32 rounded-xl bg-[#17171a]/95 backdrop-blur-xl shadow-2xl p-1.5 text-xs z-40 text-zinc-300">
              <div className="px-2 py-0.5 sm:py-1 rounded hover:bg-zinc-800 text-zinc-400">C</div>
              <div className="px-2 py-0.5 sm:py-1 rounded hover:bg-zinc-800 text-zinc-400">C++</div>
              <div className="px-2 py-0.5 sm:py-1 rounded hover:bg-zinc-800 text-zinc-400">Java</div>
              <div className="px-2 py-0.5 sm:py-1 rounded bg-amber-500/20 text-amber-400 font-semibold flex items-center justify-between">
                <span>Python</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </div>
              <div className="px-2 py-0.5 sm:py-1 rounded hover:bg-zinc-800 text-zinc-400">JavaScript</div>
              <div className="px-2 py-0.5 sm:py-1 rounded hover:bg-zinc-800 text-zinc-400">C#</div>
              <div className="px-2 py-0.5 sm:py-1 rounded hover:bg-zinc-800 text-zinc-400">Go</div>
            </div>
          </div>

          {/* Run Button */}
          <button className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-[11px] sm:text-xs shadow-lg shadow-orange-500/30 transition-transform active:scale-95">
            <Play size={11} className="fill-white" />
            <span>Run</span>
          </button>
        </div>

        {/* Code Content Area (Matching heropic.png Python code) */}
        <div className="rounded-2xl bg-[#070709] p-3.5 sm:p-5 font-mono text-[11px] sm:text-[13.5px] leading-relaxed flex gap-3 sm:gap-4 shadow-inner overflow-hidden">
          {/* Line Numbers */}
          <div className="text-zinc-600 select-none text-right flex flex-col font-mono text-[11px] sm:text-[13.5px] leading-relaxed shrink-0">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>

          {/* Syntax Code */}
          <div className="flex-1 overflow-x-auto scrollbar-none font-mono">
            <div className="text-[#3bca5e]"># Python program to find the sum</div>
            <div className="text-[#3bca5e]"># of first n numbers</div>
            <div className="mt-0.5 sm:mt-1">
              <span className="text-white">n = </span>
              <span className="text-[#38bdf8]">int</span>
              <span className="text-zinc-300">(</span>
              <span className="text-[#38bdf8]">input</span>
              <span className="text-zinc-300">(</span>
              <span className="text-[#f87171]">&quot;Enter n: &quot;</span>
              <span className="text-zinc-300">))</span>
            </div>
            <div className="mt-0.5 sm:mt-1">
              <span className="text-white">sum = </span>
              <span className="text-[#f59e0b]">0</span>
            </div>
            <div className="mt-0.5 sm:mt-1">
              <span className="text-[#60a5fa]">for</span>{" "}
              <span className="text-white">i </span>
              <span className="text-[#60a5fa]">in</span>{" "}
              <span className="text-[#38bdf8]">range</span>
              <span className="text-zinc-300">(1, n + 1):</span>
            </div>
            <div className="pl-3 sm:pl-4 text-white">sum += i</div>
            <div className="mt-0.5 sm:mt-1">
              <span className="text-[#38bdf8]">print</span>
              <span className="text-zinc-300">(</span>
              <span className="text-[#f87171]">&quot;Sum =&quot;</span>
              <span className="text-zinc-300">, sum)</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: Top-Right (LinkedIn - Dhiraj Kushwaha) - NO BORDER */}
      <motion.div
        animate={{
          y: [4, -4, 4],
          x: [1, -1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-3 right-1 sm:right-3 rounded-2xl bg-[#141417]/95 text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 shadow-2xl backdrop-blur-xl z-20 flex items-center gap-2 sm:gap-2.5 scale-90 sm:scale-100 origin-top-right"
      >
        <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-xl bg-[#0077b5] flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0 shadow-md">
          in
        </div>
        <div className="text-left">
          <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">Dhiraj Kushwaha</div>
          <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] text-zinc-400 mt-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            <span>Joined <strong className="text-[#0077b5] font-bold">LinkedIn</strong></span>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2: Left Side (Deloitte - Dhiraj Kushwaha) - NO BORDER */}
      <motion.div
        animate={{
          y: [-3, 3, -3],
          x: [-1, 1, -1],
        }}
        transition={{
          duration: 5.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -translate-y-1/2 -left-1 sm:-left-5 rounded-2xl bg-[#141417]/95 text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 shadow-2xl backdrop-blur-xl z-20 flex items-center gap-2 sm:gap-2.5 scale-90 sm:scale-100 origin-left"
      >
        <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-full overflow-hidden bg-zinc-800 shrink-0 border border-white/10">
          <Image
            src="/coach.png"
            alt="Dhiraj Kushwaha"
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">Dhiraj Kushwaha</div>
          <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] text-zinc-400 mt-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#86bc25]" />
            <span>Joined <strong className="text-zinc-200">Deloitte.</strong></span>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 3: Bottom (Amazon - Dhiraj Kushwaha) - NO BORDER */}
      <motion.div
        animate={{
          y: [4, -3, 4],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-3 right-1 sm:right-6 rounded-2xl bg-[#141417]/95 text-white px-3 py-1.5 sm:px-4 sm:py-2.5 shadow-2xl backdrop-blur-xl z-20 flex items-center gap-2 sm:gap-2.5 scale-90 sm:scale-100 origin-bottom-right"
      >
        <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-full overflow-hidden bg-zinc-800 shrink-0 border border-white/10">
          <Image
            src="/coach.png"
            alt="Dhiraj Kushwaha"
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">Dhiraj Kushwaha</div>
          <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] text-zinc-400 mt-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff9900]" />
            <span>Joined <strong className="text-amber-400 font-bold">amazon</strong></span>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge: Python (Top-Left) */}
      <motion.div
        animate={{ y: [-3, 3, -3], rotate: [-2, 2, -2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 left-5 sm:left-10 p-1.5 sm:p-2 rounded-2xl bg-[#141417]/95 shadow-xl backdrop-blur-md z-10 scale-90 sm:scale-100"
      >
        <svg className="h-5 w-5 sm:h-7 sm:w-7" viewBox="0 0 24 24">
          <path fill="#387eb8" d="M11.91 0c-3.1 0-5.07.41-5.07 1.83v2.38h5.16v.79H4.69C1.94 5 0 6.64 0 9.87c0 3.32 2.1 4.78 4.7 4.78h1.49v-2.09c0-2.4 2.12-4.49 4.53-4.49h5.16V5.44C15.88.75 14.52 0 11.91 0zm-2.6 1.48a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" />
          <path fill="#ffe052" d="M12.09 24c3.1 0 5.07-.41 5.07-1.83v-2.38H12v-.79h7.31c2.75 0 4.69-1.64 4.69-4.87 0-3.32-2.1-4.78-4.7-4.78h-1.49v2.09c0 2.4-2.12 4.49-4.53 4.49H8.12v2.63C8.12 23.25 9.48 24 12.09 24zm2.6-1.48a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
        </svg>
      </motion.div>

      {/* Floating Badge: JavaScript (Right Side) */}
      <motion.div
        animate={{ y: [3, -3, 3], rotate: [2, -2, 2] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 -right-2 sm:-right-5 h-7 w-7 sm:h-9 sm:w-9 rounded-xl bg-[#f7df1e] text-black font-extrabold flex items-center justify-center text-xs sm:text-sm shadow-xl z-10"
      >
        JS
      </motion.div>

      {/* Floating Badge: Java (Bottom-Left) */}
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-4 sm:left-6 p-1.5 sm:p-2 rounded-2xl bg-[#141417]/95 shadow-xl backdrop-blur-md z-10 flex items-center justify-center scale-90 sm:scale-100"
      >
        <span className="text-base sm:text-xl">☕</span>
      </motion.div>
    </div>
  );
}

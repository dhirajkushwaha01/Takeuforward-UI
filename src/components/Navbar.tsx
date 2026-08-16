"use client";

import {
    Home,
    LayoutDashboard,
    BadgeDollarSign,
    Moon,
    Sun,
    Menu as MenuIcon,
    X,
} from "lucide-react";

import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isDark, setIsDark] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className={cn("fixed top-2 sm:top-3 md:top-4 inset-x-0 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>

                <div className="flex items-center justify-between w-full gap-2">

                  

                    <Link href="/" className="shrink-0">
                        <Image
                            src="/SecondaryLogoWO.png"
                            alt="Logo"
                            width={152}
                            height={23}
                            className="cursor-pointer w-[105px] sm:w-[125px] md:w-[140px] lg:w-[152px] h-auto"
                        />
                    </Link>



                    <div className="hidden md:flex items-center gap-5 lg:gap-10">

                        <Link href="/home">
                            <div className="group flex items-center gap-2 cursor-pointer whitespace-nowrap transition-all duration-300 hover:text-amber-600 hover:scale-105">
                                <Home size={18} className="text-white transition-colors duration-300 group-hover:text-amber-600" />
                                <span className="text-white transition-colors duration-300 group-hover:text-amber-600">Home</span>
                            </div>
                        </Link>

                        <Link href="/">
                            <div className="group flex items-center gap-2 cursor-pointer whitespace-nowrap transition-all duration-300 hover:text-amber-600 hover:scale-105">
                                <LayoutDashboard size={18} className="text-white transition-colors duration-300 group-hover:text-amber-600" />
                                <span className="text-white transition-colors duration-300 group-hover:text-amber-600">Plush Dashboard</span>
                            </div>
                        </Link>

                        <Link href="/pricing">
                            <div className="group flex items-center gap-2 cursor-pointer whitespace-nowrap transition-all duration-300 hover:text-amber-600 hover:scale-105">
                                <BadgeDollarSign size={18} className="text-white transition-colors duration-300 group-hover:text-amber-600" />
                                <span className="text-white transition-colors duration-300 group-hover:text-amber-600">Pricing</span>
                            </div>
                        </Link>

                    </div>



                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">



                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-300 text-gray-700 shadow-md transition-all hover:bg-gray-200 active:scale-95"
                        >
                            {isDark ? (
                                <Sun size={18} className="text-black transition-all duration-300" />
                            ) : (
                                <Moon size={18} className="text-slate-700 transition-all duration-300" />
                            )}
                        </button>

               

                        <Link href="/">
                            <button className="group flex items-center gap-1 sm:gap-2 rounded-full bg-amber-600 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-sm sm:text-base text-white whitespace-nowrap transition-all duration-300 hover:bg-amber-700 hover:shadow-lg hover:scale-105">
                                <span>Get Started</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                            </button>
                        </Link>



                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-gray-300 text-gray-700 shadow-md transition-all active:scale-95"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
                        </button>

                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden mt-3 w-full rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl backdrop-blur-md">
                        <div className="flex flex-col gap-1">

                            <Link href="/home" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center gap-3 rounded-xl px-4 py-3 text-white transition-all duration-300 hover:bg-white/5">
                                <Home size={18} className="text-white transition-colors duration-300 group-hover:text-amber-500" />
                                <span className="text-white transition-colors duration-300 group-hover:text-amber-500">Home</span>
                            </Link>

                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center gap-3 rounded-xl px-4 py-3 text-white transition-all duration-300 hover:bg-white/5">
                                <LayoutDashboard size={18} className="text-white transition-colors duration-300 group-hover:text-amber-500" />
                                <span className="text-white transition-colors duration-300 group-hover:text-amber-500">Plush Dashboard</span>
                            </Link>

                            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center gap-3 rounded-xl px-4 py-3 text-white transition-all duration-300 hover:bg-white/5">
                                <BadgeDollarSign size={18} className="text-white transition-colors duration-300 group-hover:text-amber-500" />
                                <span className="text-white transition-colors duration-300 group-hover:text-amber-500">Pricing</span>
                            </Link>

                        </div>
                    </div>
                )}

            </Menu>
        </div>
    );
}

export default Navbar;
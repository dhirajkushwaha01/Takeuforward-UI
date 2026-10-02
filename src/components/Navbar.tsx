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
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : true;

    return (
        <div className={cn("fixed top-2 sm:top-3 md:top-4 inset-x-0 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>

                <div className="flex items-center justify-between w-full gap-2">

                    <Link href="/" className="shrink-0">
                        <Image
                            src="/SecondaryLogoWO.png"
                            alt="takeUforward"
                            width={152}
                            height={23}
                            priority
                            className="cursor-pointer w-[105px] sm:w-[125px] md:w-[140px] lg:w-[152px] h-auto"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-5 lg:gap-10">

                        <Link href="/">
                            <div className="group flex items-center gap-2 cursor-pointer whitespace-nowrap transition-all duration-300 hover:scale-105">
                                <Home size={18} className="text-zinc-300 transition-colors duration-300 group-hover:text-amber-500" />
                                <span className="text-zinc-200 transition-colors duration-300 group-hover:text-amber-500 text-sm font-medium">Home</span>
                            </div>
                        </Link>

                        <Link href="/plus">
                            <div className="group flex items-center gap-2 cursor-pointer whitespace-nowrap transition-all duration-300 hover:scale-105">
                                <LayoutDashboard size={18} className="text-zinc-300 transition-colors duration-300 group-hover:text-amber-500" />
                                <span className="text-zinc-200 transition-colors duration-300 group-hover:text-amber-500 text-sm font-medium">Plus Dashboard</span>
                            </div>
                        </Link>

                        <Link href="/pricing">
                            <div className="group flex items-center gap-2 cursor-pointer whitespace-nowrap transition-all duration-300 hover:scale-105">
                                <BadgeDollarSign size={18} className="text-zinc-300 transition-colors duration-300 group-hover:text-amber-500" />
                                <span className="text-zinc-200 transition-colors duration-300 group-hover:text-amber-500 text-sm font-medium">Pricing</span>
                            </div>
                        </Link>

                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">

                        {/* Dark/Light mode toggle button */}
                        <button
                            onClick={() => setTheme(isDark ? "light" : "dark")}
                            aria-label="Toggle dark and light mode"
                            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                            className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 hover:bg-white/20 text-white shadow-md transition-all duration-300 active:scale-95"
                        >
                            {mounted ? (
                                isDark ? (
                                    <Sun size={18} className="text-amber-400 transition-all duration-300 hover:rotate-45" />
                                ) : (
                                    <Moon size={18} className="text-amber-300 transition-all duration-300 hover:-rotate-12" />
                                )
                            ) : (
                                <Sun size={18} className="text-amber-400 opacity-70" />
                            )}
                        </button>

                        <Link href="/plus" className="hidden md:block">
                            <button className="group flex items-center gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-sm sm:text-base text-white font-medium whitespace-nowrap transition-all duration-300 hover:from-amber-600 hover:to-orange-700 hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105">
                                <span>Get Started</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                            </button>
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex md:hidden h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-md transition-all active:scale-95"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={18} /> : <MenuIcon size={18} />}
                        </button>

                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden mt-3 w-full rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-md">
                        <div className="flex flex-col gap-1">

                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center gap-3 rounded-xl px-4 py-3 text-white transition-all duration-300 hover:bg-white/5">
                                <Home size={18} className="text-zinc-400 transition-colors duration-300 group-hover:text-amber-500" />
                                <span className="text-zinc-200 transition-colors duration-300 group-hover:text-amber-500">Home</span>
                            </Link>

                            <Link href="/plus" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center gap-3 rounded-xl px-4 py-3 text-white transition-all duration-300 hover:bg-white/5">
                                <LayoutDashboard size={18} className="text-zinc-400 transition-colors duration-300 group-hover:text-amber-500" />
                                <span className="text-zinc-200 transition-colors duration-300 group-hover:text-amber-500">Plus Dashboard</span>
                            </Link>

                            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center gap-3 rounded-xl px-4 py-3 text-white transition-all duration-300 hover:bg-white/5">
                                <BadgeDollarSign size={18} className="text-zinc-400 transition-colors duration-300 group-hover:text-amber-500" />
                                <span className="text-zinc-200 transition-colors duration-300 group-hover:text-amber-500">Pricing</span>
                            </Link>

                            {/* Get Started Button for Phone inside Menu Bar */}
                            <div className="pt-2 mt-2 border-t border-white/10">
                                <Link
                                    href="/plus"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full"
                                >
                                    <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 active:scale-98 transition-all">
                                        <span>Get Started Now</span>
                                        <span>➜</span>
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                )}

            </Menu>
        </div>
    );
}

export default Navbar;
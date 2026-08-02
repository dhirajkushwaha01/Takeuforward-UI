"use client";
import {
    Home,
    LayoutDashboard,
    BadgeDollarSign,
    Moon,
    Sun,
} from "lucide-react";

import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    const [isDark, setIsDark] = useState(false);

    return (
        <div
            className={cn(
                "fixed top-4 inset-x-0 max-w-6xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>

                <div className="flex items-center justify-between w-full">

                    {/* Left - Logo */}
                    <Link href="/">
                        <Image
                            src="/SecondaryLogoWO.png"
                            alt="Logo"
                            width={152}
                            height={23}
                            className="cursor-pointer"
                        />
                    </Link>

                    {/* Center - Navigation */}
                    <div className="flex items-center gap-10">

                        <Link href="/home">
                            <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-amber-600 hover:scale-105">
                                <Home
                                    size={18}
                                    className="transition-colors duration-300 group-hover:text-amber-600"
                                />
                                <span>Home</span>
                            </div>
                        </Link>

                        <Link href="/">
                            <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-amber-600 hover:scale-105">
                                <LayoutDashboard
                                    size={18}
                                    className="transition-colors duration-300 group-hover:text-amber-600"
                                />
                                <span>Plush Dashboard</span>
                            </div>
                        </Link>

                        <Link href="/pricing">
                            <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-amber-600 hover:scale-105">
                                <BadgeDollarSign
                                    size={18}
                                    className="transition-colors duration-300 group-hover:text-amber-600"
                                />
                                <span>Pricing</span>
                            </div>
                        </Link>

                    </div>

                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-300 text-gray-700 shadow-md transition-all  hover:bg-gray-200 active:scale-95"
                        >
                            {isDark ? (
                                <Sun
                                    size={18}
                                    className=" text-black transition-all duration-300 rotate-0"
                                />
                            ) : (
                                <Moon
                                    size={18}
                                    className="text-slate-700 transition-all duration-300"
                                />
                            )}
                        </button>

                        {/* Get Started */}
                        <Link href="/">
                            <button className="group flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2 text-white whitespace-nowrap transition-all duration-300 hover:bg-amber-700 hover:shadow-lg hover:scale-105">
                                <span>Get Started</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    &gt;
                                </span>
                            </button>
                        </Link>
                    </div>

                </div>
            </Menu>
        </div>
    );
}

export default Navbar;
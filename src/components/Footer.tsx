import React from 'react'
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
            <div className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto py-12">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="px-3.5 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 shadow-sm">
                            <Image
                                src="/SecondaryLogoWO.png"
                                alt="TakeUforward"
                                width={135}
                                height={26}
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {[
                            { name: "About", href: "/" },
                            { name: "Plus Dashboard", href: "/plus" },
                            { name: "Pricing", href: "/pricing" },
                            { name: "Privacy Policy", href: "/" },
                            { name: "Terms & Conditions", href: "/" },
                        ].map((item, index) => (
                            <React.Fragment key={item.name}>
                                <Link
                                    href={item.href}
                                    className="hover:text-amber-500 transition-colors duration-200 px-2"
                                >
                                    {item.name}
                                </Link>

                                {index !== 4 && (
                                    <span className="text-zinc-300 dark:text-zinc-700 select-none">•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://youtube.com/@takeuforward"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-red-500 hover:border-red-500/50 transition-all duration-200 shadow-sm"
                            aria-label="YouTube"
                        >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-200 shadow-sm"
                            aria-label="LinkedIn"
                        >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-200 shadow-sm"
                            aria-label="Twitter / X"
                        >
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/60 text-center">
                    <p className="text-xs sm:text-sm text-zinc-500">
                        Copyright © 2026 Moveforward Private Limited | All rights reserved
                    </p>
                </div>

            </div>
        </footer>
    );
}

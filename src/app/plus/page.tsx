"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { resourcesData } from "@/utils/resourcesData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import Footer from "@/components/Footer";
import {
  Boxes,
  Users,
  Code2,
  Network,
  Search,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Trophy,
  Flame,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function PlusPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Map category icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Boxes":
        return <Boxes className="w-5 h-5" />;
      case "Users":
        return <Users className="w-5 h-5" />;
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Network":
        return <Network className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  // Category Accent Badges
  const getCategoryTheme = (id: number) => {
    switch (id) {
      case 1:
        return {
          badge: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
          accentBorder: "border-orange-500",
          hoverBorder: "hover:border-orange-500/50",
          glow: "group-hover:shadow-orange-500/10",
        };
      case 2:
        return {
          badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
          accentBorder: "border-emerald-500",
          hoverBorder: "hover:border-emerald-500/50",
          glow: "group-hover:shadow-emerald-500/10",
        };
      case 3:
        return {
          badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
          accentBorder: "border-violet-500",
          hoverBorder: "hover:border-violet-500/50",
          glow: "group-hover:shadow-violet-500/10",
        };
      case 4:
        return {
          badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
          accentBorder: "border-blue-500",
          hoverBorder: "hover:border-blue-500/50",
          glow: "group-hover:shadow-blue-500/10",
        };
      default:
        return {
          badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
          accentBorder: "border-amber-500",
          hoverBorder: "hover:border-amber-500/50",
          glow: "group-hover:shadow-amber-500/10",
        };
    }
  };

  // Filtered resources based on category and search query
  const filteredData = useMemo(() => {
    return resourcesData
      .map((cat) => {
        // If category filter doesn't match, skip
        if (selectedCategory !== "All" && cat.title !== selectedCategory) {
          return null;
        }

        // If search is entered, filter items inside
        const matchingItems = cat.items.filter((item) => {
          const query = searchQuery.toLowerCase().trim();
          if (!query) return true;
          return (
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
          );
        });

        if (matchingItems.length === 0) return null;

        return {
          ...cat,
          items: matchingItems,
        };
      })
      .filter(Boolean) as typeof resourcesData;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-amber-500/15 via-orange-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Main Content Container */}
      <main className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto pt-32 sm:pt-36 md:pt-40 pb-20">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles size={14} className="animate-pulse" />
              <span>TUF+ PREMIUM RESOURCES & ROADMAPS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Accelerate Your <br />
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Tech Preparation
              </span>
            </h1>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              Curated DSA sheets, verified interview experiences, core computer science notes, and system design roadmaps — designed to take you from foundational basics to top-tier placements.
            </p>
          </ScrollReveal>

          {/* Quick Stats Badges */}
          <ScrollReveal direction="up" delay={0.2} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: "Curated Sheets", val: "4+ Major Paths", icon: Layers },
              { label: "Problems Covered", val: "1000+ Questions", icon: Trophy },
              { label: "Community", val: "1.7M+ Learners", icon: Flame },
              { label: "Success Rate", val: "Top Tier Offers", icon: CheckCircle2 },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-3.5 sm:p-4 text-center backdrop-blur-sm shadow-sm hover:border-amber-500/40 transition-all duration-300"
                >
                  <Icon size={18} className="mx-auto text-amber-500 mb-1" />
                  <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">{stat.val}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </ScrollReveal>
        </section>

        {/* Filter and Search Bar */}
        <section className="mb-14">
          <ScrollReveal direction="up" delay={0.2} className="flex flex-col md:flex-row items-center justify-between gap-4 bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-2.5 sm:p-3 rounded-2xl backdrop-blur-xl">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full md:w-auto p-1">
              {["All", "DSA Sheets", "Interview Experience", "Core CS Subjects", "System Design"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                        : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sheets, subjects..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-sm bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </ScrollReveal>
        </section>

        {/* Resources Grid Sections */}
        {filteredData.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
            <BookOpen size={40} className="mx-auto text-zinc-400 mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200">No resources found</h3>
            <p className="text-sm text-zinc-500 mt-1">Try searching for something else or reset filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-amber-500 text-white text-xs font-semibold hover:bg-amber-600 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredData.map((category) => {
            const theme = getCategoryTheme(category.id);
            return (
              <section key={category.id} className="mb-20">
                {/* Category Header */}
                <ScrollReveal direction="up" delay={0.1} className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 dark:bg-zinc-800 dark:text-amber-400 shadow-sm">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        {category.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {category.items.length} Curated Tracks Available
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.badge}`}>
                    {category.items[0]?.type || "Resource"}
                  </span>
                </ScrollReveal>

                {/* Cards Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, index) => (
                    <StaggerItem key={index}>
                      <div
                        className={`group relative h-full flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${theme.hoverBorder} ${theme.glow}`}
                      >
                        {/* Top Section */}
                        <div>
                          {/* Accent Bar & Header */}
                          <div className={`border-l-3 ${theme.accentBorder} pl-3.5 mb-4`}>
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                                {item.type}
                              </span>
                              <div className="p-1 rounded-full text-zinc-400 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                                <ArrowUpRight size={16} />
                              </div>
                            </div>
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-1 group-hover:text-amber-500 transition-colors">
                              {item.title}
                            </h3>
                          </div>

                          <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mt-2">
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Active Track
                          </span>

                          <button className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
                            <span>Explore</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>
            );
          })
        )}

        {/* Why TUF Plus Section */}
        <section className="mt-24 p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 via-zinc-100/50 to-white dark:from-zinc-900/60 dark:via-zinc-900/30 dark:to-zinc-950/80 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <ScrollReveal direction="up" delay={0.1} className="max-w-2xl mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-400">
              Why Learn With TUF+
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mt-2">
              Everything Engineered for High Performance
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-3">
              Don't waste time figuring out what to study. Follow battle-tested curricula proven by thousands of engineers who landed offers at Google, Microsoft, Amazon, and top unicorns.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Structured, No-Fluff Paths",
                desc: "Every topic broken down from absolute fundamentals to complex variations with zero wasted effort.",
                icon: Layers,
              },
              {
                title: "Curated by Striver",
                desc: "Handcrafted problem sets and intuition-first explanations from an ex-Google and Media.net engineer.",
                icon: Trophy,
              },
              {
                title: "Placement Oriented",
                desc: "Practice what is actually asked in modern tech interviews, from coding rounds to system design loops.",
                icon: Sparkles,
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  delay={0.1 * (idx + 1)}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/40 p-6 backdrop-blur-sm"
                >
                  <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-500 mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">{feature.desc}</p>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800/80">
            <div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-white">Ready to elevate your preparation?</h4>
              <p className="text-xs sm:text-sm text-zinc-500">Join over 1.7 million coders mastering computer science today.</p>
            </div>
            <Link href="/pricing">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all">
                View All Plans ➜
              </button>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

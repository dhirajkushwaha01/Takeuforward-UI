import React from "react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { Users, Trophy } from "lucide-react";

function FifthHero() {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-8 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:max-w-6xl mx-auto">

      <ScrollReveal direction="up" delay={0.1} className="w-full md:w-1/2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
            <Users size={20} />
          </div>
          <h3 className="font-bold text-zinc-900 dark:text-white tracking-wide">
            COMMUNITY SUPPORT
          </h3>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-sm leading-relaxed">
          Join 1.2M+ coders worldwide, share progress, ask questions, and accelerate learning through an active, supportive global network of passionate developers.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2} className="w-full md:w-1/2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
            <Trophy size={20} />
          </div>
          <h3 className="font-bold text-zinc-900 dark:text-white tracking-wide">
            MOCK TESTS & CONTESTS
          </h3>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-sm leading-relaxed">
          Sharpen your speed, accuracy, and problem-solving stamina by competing in realistic, high-pressure scenarios that prepare you for assessments.
        </p>
      </ScrollReveal>

    </div>
  );
}

export default FifthHero;
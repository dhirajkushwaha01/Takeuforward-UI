"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    company?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      if (scrollerRef.current.children.length === items.length) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "40s"
        );
      } else if (speed === "normal") {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "60s"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-duration",
          "80s"
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] shrink-0 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 sm:w-[350px] sm:p-6 md:w-[420px] shadow-sm hover:border-amber-500/50 transition-colors"
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              <span className="relative z-20 text-xs sm:text-sm leading-relaxed font-normal text-zinc-700 dark:text-zinc-300">
                &ldquo;{item.quote}&rdquo;
              </span>

              <div className="relative z-20 mt-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 pt-3">
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {item.name}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.title}
                  </span>
                </span>
                {item.company && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {item.company}
                  </span>
                )}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
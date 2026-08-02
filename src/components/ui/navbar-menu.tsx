"use client";
import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-amber-500 transition-colors"
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 -translate-x-1/2 pt-2">
              <motion.div
                layoutId="active"
                transition={transition}
                className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-sm  shadow-2xl overflow-hidden"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="
        relative
        flex
        items-center
        justify-between
        w-full
        rounded-full
        border
        border-white/10
        bg-black/25
        backdrop-blur-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.45)]
        px-8
        py-3
      "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex gap-3">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="rounded-md"
      />

      <div>
        <h4 className="mb-1 text-lg font-semibold text-white">
          {title}
        </h4>

        <p className="max-w-[12rem] text-sm text-gray-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
};
import React from "react";
import { resourcesData } from "@/utils/resourcesData";

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {resourcesData.map((item) => (
        <div key={item.id} className="mb-20">
          {/* Section Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">{item.title}</h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {item.items.map((i, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1"
              >
                {/* Title */}
                <div className="border-l-2 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-white">
                    {i.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {i.description}
                  </p>
                </div>

                {/* Button */}
                <button className="mt-6 inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-orange-500 hover:text-orange-400">
                  {i.type}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}































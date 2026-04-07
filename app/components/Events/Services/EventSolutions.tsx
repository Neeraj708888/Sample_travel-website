"use client";

import Link from "next/link";
import { solutions } from "@/app/data/solution";

export default function EventSolutions() {
  return (
    <section className="py-16 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">

          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[2px] bg-yellow-500"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-16 h-[2px] bg-yellow-500"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Corporate Event Solutions
          </h2>

          <p className="text-gray-100 mt-4 max-w-2xl mx-auto">
            Everything you need to plan, produce, and execute a world-class corporate event.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {solutions.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={`/solutions/${service.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur hover:border-yellow-500 transition duration-300"
              >

                {/* Icon */}
                {Icon && (
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500/10 text-3xl mb-5 group-hover:bg-yellow-500 group-hover:text-black transition">
                    <Icon />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                  {service.title}
                </h3>

                {/* Children count */}
                {service.children && service.children.length > 0 && (
                  <p className="text-sm text-gray-400">
                    {service.children.length} sub-service{service.children.length > 1 ? "s" : ""}
                  </p>
                )}

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}

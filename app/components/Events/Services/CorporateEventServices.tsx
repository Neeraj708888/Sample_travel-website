"use client";

type Service = {
  icon: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "📅",
    title: "Event Planning",
    description:
      "End-to-end event management from concept to execution. We handle timelines, vendor coordination, and on-ground logistics.",
  },
  {
    icon: "🎭",
    title: "Stage Design",
    description:
      "Custom-built stages, backdrops, and structures that create a strong visual presence for your event.",
  },
  {
    icon: "🎬",
    title: "Audio Video Production",
    description:
      "Professional sound systems, LED screens, projection, and live streaming for a seamless AV experience.",
  },
  {
    icon: "🎨",
    title: "Event Branding",
    description:
      "Consistent brand identity across all touchpoints — signage, print, digital assets, and environmental graphics.",
  },
  {
    icon: "🏛️",
    title: "Exhibition",
    description:
      "Thoughtfully designed exhibition spaces with curated displays and interactive zones for trade shows and showcases.",
  },
  {
    icon: "🏪",
    title: "Booth Setup",
    description:
      "Turnkey booth fabrication for expos and trade fairs — modular or custom builds, fully branded and ready to go.",
  },
];

export default function CorporateEventServices() {
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

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur hover:border-yellow-500 transition duration-300"
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500/10 text-3xl mb-5 group-hover:bg-yellow-500 group-hover:text-black transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-100 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
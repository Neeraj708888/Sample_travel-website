"use client";

import Image from "next/image";

const events = [
    {
        title: "Royal Palace Wedding",
        location: "Udaipur, Rajasthan",
        type: "Destination Wedding",
        story:
            "A breathtaking royal wedding hosted in a heritage palace with traditional decor and cultural performances.",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
        title: "Luxury Corporate Summit",
        location: "New Delhi",
        type: "Corporate Event",
        story:
            "An elite corporate gathering featuring keynote speakers and luxury hospitality.",
        image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865",
    },
    {
        title: "Beach Anniversary Celebration",
        location: "Goa",
        type: "Private Event",
        story:
            "A romantic beachside anniversary celebration with sunset views and live music.",
        image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    },
];

export default function FeaturedEvents() {
    return (
        <section className="py-16 text-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="text-center mb-12 md:mb-16">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Featured Events
                    </h2>

                    <p className="text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                        Discover some of our most memorable and luxurious events.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

                    {events.map((event, index) => (

                        <div
                            key={index}
                            className="group relative h-[360px] sm:h-[380px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
                        >

                            {/* Image */}
                            <Image
                                src={`${event.image}?auto=format&fit=crop&w=900&q=80`}
                                alt={event.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Text Container */}
                            <div
                                className="
                absolute bottom-0 left-0 right-0 p-4 md:p-6
                translate-y-0 md:translate-y-24
                opacity-100 md:opacity-0
                md:group-hover:translate-y-0
                md:group-hover:opacity-100
                transition-all duration-700
                "
                            >

                                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-yellow-400">
                                    {event.type}
                                </span>

                                <h3 className="text-lg sm:text-xl font-semibold mt-1 sm:mt-2">
                                    {event.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                                    📍 {event.location}
                                </p>

                                <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3">
                                    {event.story}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
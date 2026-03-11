"use client";

import Image from "next/image";
import { MapPin, User } from "lucide-react";

type Portfolio = {
    image: string;
    client: string;
    location: string;
    title: string;
};

const events: Portfolio[] = [
    {
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
        client: "TechNova Pvt Ltd",
        location: "New Delhi",
        title: "Global Tech Conference",
    },
    {
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
        client: "Future Leaders Group",
        location: "Mumbai",
        title: "Leadership Strategy Summit",
    },
    {
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
        client: "Innovate India",
        location: "Bangalore",
        title: "Innovation & Startup Conference",
    },
    {
        image: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b",
        client: "Global Business Forum",
        location: "Dubai",
        title: "International Business Conference",
    },
];

export default function ServiceTypePortfolioCaseStudy() {
    return (
        <section className="py-20 bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Our Conference Event Portfolio
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Explore some of the successful conferences we have planned and
                        executed for our clients across different industries and locations.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500 transition backdrop-blur"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={`${event.image}?auto=format&fit=crop&w=900&q=80`}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Content */}
                            <div className="p-5">

                                <h3 className="text-lg font-semibold mb-3 group-hover:text-yellow-400 transition">
                                    {event.title}
                                </h3>

                                <div className="flex items-center gap-4 text-sm text-gray-400">

                                    <div className="flex items-center gap-1">
                                        <User size={16} />
                                        {event.client}
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        {event.location}
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
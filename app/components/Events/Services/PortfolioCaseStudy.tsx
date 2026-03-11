"use client";

import Image from "next/image";
import { MapPin, User } from "lucide-react";

type CaseStudy = {
    image: string;
    title: string;
    location: string;
    client: string;
    description: string;
};

const caseStudies: CaseStudy[] = [
    {
        image: "https://images.unsplash.com/photo-1519741497674-611481863552",
        title: "Royal Palace Wedding",
        location: "Udaipur, Rajasthan",
        client: "Sharma Family",
        description:
            "A grand destination wedding hosted at a heritage palace with traditional decor, live performances, and luxury guest experiences.",
    },
    {
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
        title: "Global Corporate Summit",
        location: "New Delhi",
        client: "TechNova Pvt. Ltd.",
        description:
            "A large-scale corporate summit with keynote speakers, LED stage design, networking lounges, and premium hospitality.",
    },
    {
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        title: "Luxury Beach Celebration",
        location: "Goa",
        client: "Mehta Family",
        description:
            "A romantic anniversary celebration on the beach featuring sunset ceremony, live music, and elegant décor.",
    },
];

export default function PortfolioCaseStudy() {
    return (
        <section className="py-16 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Our Case Studies
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Explore some of our most memorable events crafted with creativity,
                        precision and premium experiences.
                    </p>

                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {caseStudies.map((event, index) => (

                        <div
                            key={index}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur hover:border-yellow-500 transition"
                        >

                            {/* Image */}
                            <div className="relative h-60 overflow-hidden">

                                <Image
                                    src={`${event.image}?auto=format&fit=crop&w=900&q=80`}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-black/40"></div>

                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition">
                                    {event.title}
                                </h3>

                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">

                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        {event.location}
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <User size={16} />
                                        {event.client}
                                    </div>

                                </div>

                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {event.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
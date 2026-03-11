"use client";

import Image from "next/image";
import {
    Layout,
    Tv,
    Lightbulb,
    Palette,
    ClipboardList,
    Video,
} from "lucide-react";

type Solution = {
    icon: any;
    title: string;
    description: string;
    image: string;
};

const solutions: Solution[] = [
    {
        icon: Layout,
        title: "Conference Stage Design",
        description:
            "Custom stage design including backdrops, podium setup, branding elements and speaker layouts tailored for professional conferences.",
        image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865",
    },
    {
        icon: Tv,
        title: "LED Screen & AV Production",
        description:
            "High-resolution LED screens, projection systems and complete audio visual production for impactful presentations.",
        image:
            "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b",
    },
    {
        icon: Lightbulb,
        title: "Lighting & Sound Setup",
        description:
            "Professional lighting rigs and sound systems ensuring crystal clear audio and visually immersive stage experiences.",
        image:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    },
    {
        icon: Palette,
        title: "Conference Branding",
        description:
            "Complete conference branding including backdrop design, signage, stage graphics and brand storytelling.",
        image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
        icon: ClipboardList,
        title: "Registration Desk Setup",
        description:
            "Professional attendee registration counters, badge printing, welcome kits and smooth check-in experiences.",
        image:
            "https://images.unsplash.com/photo-1551817958-20204f8c7a0b",
    },
    {
        icon: Video,
        title: "Live Streaming Setup",
        description:
            "Multi-camera production and live streaming services to broadcast your conference to a global audience.",
        image:
            "https://images.unsplash.com/photo-1581091215367-59ab6b43d1c1",
    },
];

export default function ServiceEventTypeSolutions() {
    return (
        <section className="py-20 bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Conference Event Solutions
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Comprehensive event production services designed to deliver
                        seamless, professional and impactful conference experiences.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {solutions.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500 transition backdrop-blur"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={`${service.image}?auto=format&fit=crop&w=900&q=80`}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">

                                    {/* Icon */}
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400 mb-4 group-hover:bg-yellow-500 group-hover:text-black transition">
                                        <Icon size={18} />
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {service.description}
                                    </p>

                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}
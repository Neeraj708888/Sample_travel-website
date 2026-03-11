"use client";

import Image from "next/image";
import {
    ClipboardList,
    Layout,
    Video,
    Palette,
    Users,
    Radio,
} from "lucide-react";

type Solution = {
    icon: any;
    title: string;
    description: string;
    image: string;
};

const solutions: Solution[] = [
    {
        icon: ClipboardList,
        title: "Conference Planning",
        description:
            "Strategic conference planning including venue selection, program scheduling, vendor coordination and logistics management.",
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    },
    {
        icon: Layout,
        title: "Stage & LED Setup",
        description:
            "Custom stage design with LED walls, podium setup, speaker layout and immersive visual presentation elements.",
        image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865",
    },
    {
        icon: Video,
        title: "Audio Video Production",
        description:
            "Professional AV production with high quality sound systems, projection screens and presentation support.",
        image:
            "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b",
    },
    {
        icon: Palette,
        title: "Event Branding & Signage",
        description:
            "Complete conference branding including backdrop design, stage graphics, signage and branded event environments.",
        image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
        icon: Users,
        title: "Registration & Check-in Management",
        description:
            "Efficient attendee registration with welcome desks, badge printing, guest management and smooth entry flow.",
        image:
            "https://images.unsplash.com/photo-1551817958-20204f8c7a0b",
    },
    {
        icon: Radio,
        title: "Live Streaming & Recording",
        description:
            "Multi-camera live streaming and professional recording services to broadcast your conference globally.",
        image:
            "https://images.unsplash.com/photo-1581091215367-59ab6b43d1c1",
    },
];

export default function ServiceTypeCaseStudy() {
    return (
        <section className="py-20 bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Complete Industry Conference Solutions
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        We provide end-to-end conference production services to ensure
                        seamless event execution from planning to live broadcasting.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {solutions.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur hover:border-yellow-500 transition"
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
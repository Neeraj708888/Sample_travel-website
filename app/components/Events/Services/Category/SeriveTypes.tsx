"use client";

import Link from "next/link";
import { Mic, Users, Globe, Presentation, Lightbulb, Building } from "lucide-react";

type ConferenceType = {
    icon: any;
    title: string;
    slug: string;
    description: string;
};

const conferences: ConferenceType[] = [
    {
        icon: Mic,
        title: "Industry Conferences",
        slug: "industry-conference",
        description:
            "Large scale conferences bringing industry leaders, professionals and innovators together for insights and networking.",
    },
    {
        icon: Users,
        title: "Leadership Summits",
        slug: "leadership-summit",
        description:
            "Executive level gatherings focused on leadership strategy, collaboration and future business direction.",
    },
    {
        icon: Globe,
        title: "International Conferences",
        slug: "international-conference",
        description:
            "Global conferences hosting speakers and delegates from multiple countries with seamless event coordination.",
    },
    {
        icon: Presentation,
        title: "Product Launch Conferences",
        slug: "product-launch-conference",
        description:
            "Strategically designed conferences to unveil new products with media coverage and brand storytelling.",
    },
    {
        icon: Lightbulb,
        title: "Innovation Conferences",
        slug: "innovation-conference",
        description:
            "Events focused on innovation, technology discussions and startup ecosystem collaboration.",
    },
    {
        icon: Building,
        title: "Corporate Annual Conferences",
        slug: "annual-conference",
        description:
            "Annual corporate gatherings for company updates, strategy discussions and employee engagement.",
    },
];

export default function ServiceTypes() {
    return (
        <section className="py-20 bg-neutral-950 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Conference Types We Manage
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        We plan and manage a wide range of conferences tailored to your
                        organization’s goals, audience and industry.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {conferences.map((conf, index) => {
                        const Icon = conf.icon;

                        return (
                            <Link
                                key={index}
                                href={`/events/corporate-event/conference/${conf.slug}`}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur hover:border-yellow-500 transition block"
                            >

                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400 mb-5 group-hover:bg-yellow-500 group-hover:text-black transition">
                                    <Icon size={20} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                                    {conf.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {conf.description}
                                </p>

                                {/* CTA */}
                                <span className="inline-block mt-4 text-sm text-yellow-400 group-hover:underline">
                                    View Details →
                                </span>

                            </Link>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
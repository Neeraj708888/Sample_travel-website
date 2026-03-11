"use client";

import Link from "next/link";
import {
    Cpu,
    HeartPulse,
    Landmark,
    GraduationCap,
    Building2,
    FlaskConical,
} from "lucide-react";

type Industry = {
    icon: any;
    title: string;
    slug: string;
    description: string;
};

const industries: Industry[] = [
    {
        icon: Cpu,
        title: "Technology Conferences",
        slug: "technology-conference",
        description:
            "Innovation driven conferences for tech companies, startups and digital transformation leaders.",
    },
    {
        icon: HeartPulse,
        title: "Healthcare Conferences",
        slug: "healthcare-conference",
        description:
            "Medical and healthcare conferences bringing professionals together to discuss research and advancements.",
    },
    {
        icon: Landmark,
        title: "Finance & Banking Conferences",
        slug: "finance-conference",
        description:
            "Industry events focused on financial markets, fintech innovation and banking leadership.",
    },
    {
        icon: GraduationCap,
        title: "Education Conferences",
        slug: "education-conference",
        description:
            "Academic and education sector conferences for universities, institutions and research organizations.",
    },
    {
        icon: Building2,
        title: "Corporate Leadership Conferences",
        slug: "corporate-leadership-conference",
        description:
            "Executive leadership events designed for corporate strategy, management discussions and networking.",
    },
    {
        icon: FlaskConical,
        title: "Science & Research Conferences",
        slug: "science-research-conference",
        description:
            "Research focused conferences connecting scientists, researchers and innovation leaders.",
    },
];

export default function ConferenceIndustries() {
    return (
        <section className="py-20 bg-neutral-950 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Industries We Organize Conferences For
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        We organize industry focused conferences designed to bring
                        professionals, innovators and leaders together to exchange ideas
                        and build meaningful collaborations.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {industries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <Link
                                key={index}
                                href={`/events/corporate-event/conference/${industry.slug}`}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur hover:border-yellow-500 transition block"
                            >

                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400 mb-5 group-hover:bg-yellow-500 group-hover:text-black transition">
                                    <Icon size={20} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                                    {industry.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {industry.description}
                                </p>

                                {/* Link */}
                                <span className="inline-block mt-4 text-sm text-yellow-400 group-hover:underline">
                                    Explore Conference →
                                </span>

                            </Link>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
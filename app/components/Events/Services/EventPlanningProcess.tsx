"use client";

import {
    MessageCircle,
    Lightbulb,
    Palette,
    Rocket,
    Headphones,
} from "lucide-react";

type Step = {
    icon: any;
    title: string;
    description: string;
};

const steps: Step[] = [
    {
        icon: MessageCircle,
        title: "Consultation",
        description:
            "We begin with a detailed consultation to understand your event vision, goals, budget, and expectations.",
    },
    {
        icon: Lightbulb,
        title: "Concept & Planning",
        description:
            "Our team develops creative concepts, event flow, venue strategy, and vendor planning tailored to your event.",
    },
    {
        icon: Palette,
        title: "Design & Production",
        description:
            "We design event branding, décor, stage layouts, lighting concepts, and all visual production elements.",
    },
    {
        icon: Rocket,
        title: "Event Execution",
        description:
            "Our experienced team manages the entire event day ensuring smooth operations and flawless experiences.",
    },
    {
        icon: Headphones,
        title: "Post Event Support",
        description:
            "After the event we gather feedback, analyze outcomes, and provide post-event support and reporting.",
    },
];

export default function EventPlanningProcess() {
    return (
        <section className="py-20 bg-neutral-950 text-white">

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Event Planning Process
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Our structured planning process ensures every event is executed
                        with creativity, precision, and exceptional attention to detail.
                    </p>

                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-yellow-500/30"></div>

                    <div className="space-y-12">

                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >

                                    {/* Content */}
                                    <div className="md:w-5/12">

                                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur hover:border-yellow-500 transition">

                                            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                                                {step.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {step.description}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Icon */}
                                    <div className="relative flex items-center justify-center md:w-2/12 my-6 md:my-0">

                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-black shadow-lg z-10">
                                            <Icon size={20} />
                                        </div>

                                    </div>

                                    {/* Empty spacing for alternating layout */}
                                    <div className="hidden md:block md:w-5/12"></div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}
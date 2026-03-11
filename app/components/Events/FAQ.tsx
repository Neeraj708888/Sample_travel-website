"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How early should we start planning an event?",
        answer:
            "We recommend starting the planning process at least 3-6 months in advance to ensure venue availability and flawless execution.",
    },
    {
        question: "Do you manage destination weddings?",
        answer:
            "Yes, we specialize in luxury destination weddings including venue selection, decor planning and guest experience.",
    },
    {
        question: "Can you handle corporate events and conferences?",
        answer:
            "Absolutely. Our team has extensive experience managing corporate events, product launches and conferences.",
    },
    {
        question: "Do you provide customized event themes?",
        answer:
            "Yes, we design personalized themes based on your vision including decor, lighting, entertainment and guest experience.",
    },
    {
        question: "Do you arrange vendors and catering?",
        answer:
            "Yes, we coordinate trusted vendors including catering, photography, entertainment and decor services.",
    },
    {
        question: "Do you manage last minute changes?",
        answer:
            "Our experienced team is trained to handle unexpected changes smoothly so your event remains perfect.",
    },
];

export default function FAQ() {

    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 text-white">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h2>

                <div className="flex items-center justify-center gap-4 mb-16">
                    <div className="w-16 h-[2px] bg-yellow-500"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-16 h-[2px] bg-yellow-500"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {faqs.map((faq, index) => {

                        const isOpen = hoverIndex === index || activeIndex === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                                className="group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-yellow-500"
                            >

                                {/* Question */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >

                                    <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition">
                                        {faq.question}
                                    </h3>

                                    <span
                                        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-yellow-400" : ""
                                            }`}
                                    >
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>

                                </button>

                                {/* Answer */}
                                <div
                                    className={`grid transition-all duration-500 ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 text-gray-800 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
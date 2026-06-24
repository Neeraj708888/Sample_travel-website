"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ as FAQType } from "@/app/types/page.types";


interface FAQProps {
    faqs?: FAQType[]
}


export default function FAQ({ faqs }: FAQProps) {

    const faqList = faqs ?? [];

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

                    {faqList.map((faq, index) => {

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

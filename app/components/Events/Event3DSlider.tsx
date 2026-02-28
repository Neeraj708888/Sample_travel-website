"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
    {
        title: "Wedding Planning",
        desc: "Destination & luxury wedding planners crafting unforgettable celebrations with flawless execution.",
    },
    {
        title: "Corporate Events",
        desc: "Professional conferences, product launches & brand activations designed to impress and convert.",
    },
    {
        title: "Private Celebrations",
        desc: "Birthdays, anniversaries & exclusive private parties curated with premium elegance.",
    },
];

export function Event3DSlider() {
    const [active, setActive] = useState(1);

    // ✅ Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % services.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setActive((prev) =>
            prev === 0 ? services.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setActive((prev) => (prev + 1) % services.length);
    };

    return (
        <section className="text-white overflow-hidden">
            <div className="max-w-8xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Our Premium Services
                </h2>

                <div className="relative flex items-center justify-center">

                    {/* Left Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-20 p-3 bg-white/10 hover:bg-yellow-500 text-white rounded-full transition"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* 3D Perspective Container */}
                    <div className="relative w-full h-94 flex items-center justify-center perspective-[1200px]">

                        {services.map((service, index) => {
                            const offset = index - active;

                            let transform = "scale(0.7) translateX(0)";
                            let zIndex = 0;
                            let opacity = "opacity-40";

                            if (offset === 0) {
                                transform = "scale(1) translateZ(120px)";
                                zIndex = 20;
                                opacity = "opacity-100";
                            } else if (offset === -1 || offset === services.length - 1 && active === 0) {
                                transform = "scale(0.8) translateX(-250px)";
                                zIndex = 10;
                                opacity = "opacity-70";
                            } else if (offset === 1 || offset === -(services.length - 1) && active === services.length - 1) {
                                transform = "scale(0.8) translateX(250px)";
                                zIndex = 10;
                                opacity = "opacity-70";
                            }

                            return (
                                <div
                                    key={index}
                                    className={`absolute w-80 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-700 ${opacity}`}
                                    style={{
                                        transform,
                                        zIndex,
                                    }}
                                >
                                    <h3 className="text-yellow-400 text-xl font-semibold mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-20 p-3 bg-white/10 hover:bg-yellow-500 text-white rounded-full transition"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
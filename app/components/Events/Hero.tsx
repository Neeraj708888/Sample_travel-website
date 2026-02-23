"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mic, Search } from "lucide-react";

const services = [
    "Wedding Planner",
    "Corporate Event",
    "Birthday Party",
    "Destination Wedding",
    "Product Launch Event",
    "Anniversary Celebration",
];

export default function EventSearch() {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isListening, setIsListening] = useState(false);

    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleChange = (value: string) => {
        setQuery(value);

        if (!value.trim()) {
            setFiltered([]);
            setShowDropdown(false);
            return;
        }

        const results = services.filter((service) =>
            service.toLowerCase().includes(value.toLowerCase())
        );

        setFiltered(results);
        setShowDropdown(results.length > 0);
    };

    const handleSelect = (service: string) => {
        const slug = service.toLowerCase().replace(/\s+/g, "-");
        router.push(`/events/${slug}`);
        setQuery(service);
        setShowDropdown(false);
    };

    const handleSubmit = () => {
        const exactMatch = services.find(
            (service) => service.toLowerCase() === query.toLowerCase()
        );

        if (!exactMatch) {
            alert("Service not found!");
            return;
        }

        handleSelect(exactMatch);
    };

    const handleVoiceSearch = () => {
        const SpeechRecognition =
            (window as any).SpeechRecognition ||
            (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Voice search not supported.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = "en-IN";
        recognition.start();
        setIsListening(true);

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setQuery(transcript);
            handleChange(transcript);
            setIsListening(false);
        };

        recognition.onend = () => setIsListening(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <section className="relative py-32 px-6 text-white overflow-hidden bg-black">
            <div className="max-w-6xl mx-auto text-center">

                {/* H1 */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Premium Event Management Company in India
                </h1>

                {/* H2 */}
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    Weddings, Corporate Events & Luxury Celebrations
                </h2>

                {/* SEO Paragraph */}
                <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-14">
                    We are a professional event management company in India offering
                    luxury wedding planning, corporate event organization, birthday party
                    management, and exclusive private celebrations tailored to your
                    vision.
                </p>

                {/* Search Box */}
                <div ref={dropdownRef} className="relative max-w-2xl mx-auto">
                    <div className="flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full p-3 shadow-2xl hover:border-yellow-500 transition-all duration-500">

                        <input
                            type="text"
                            placeholder="Search events like Wedding Planner, Corporate Event..."
                            value={query}
                            onChange={(e) => handleChange(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            className="flex-1 bg-transparent px-6 py-3 text-white placeholder-gray-400 focus:outline-none"
                        />

                        <button
                            onClick={handleVoiceSearch}
                            className={`mx-2 p-3 rounded-full transition ${isListening
                                ? "bg-red-500 animate-pulse"
                                : "bg-white/10 hover:bg-white/20"
                                }`}
                        >
                            <Mic size={18} />
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full font-semibold transition flex items-center gap-2"
                        >
                            <Search size={18} />
                            Search
                        </button>
                    </div>

                    {showDropdown && (
                        <ul className="absolute mt-4 w-full bg-black border border-white/10 rounded-2xl shadow-2xl max-h-64 overflow-y-auto">
                            {filtered.map((service) => (
                                <li
                                    key={service}
                                    onClick={() => handleSelect(service)}
                                    className="px-6 py-3 text-left hover:bg-yellow-500/10 hover:text-yellow-400 cursor-pointer transition"
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Service Highlights */}
                <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
                    <div>
                        <h3 className="text-yellow-400 font-semibold mb-2">
                            Wedding Planning
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Destination and traditional wedding planners creating luxurious
                            unforgettable celebrations.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-yellow-400 font-semibold mb-2">
                            Corporate Events
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Professional event organizers for conferences, seminars, and
                            product launches.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-yellow-400 font-semibold mb-2">
                            Private Celebrations
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Birthday parties, anniversaries, and exclusive premium events
                            tailored perfectly.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-14">
                    <button className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition">
                        Get Free Event Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
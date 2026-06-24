"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cities } from "@/app/data/india-locations";
import { Mic, Search } from "lucide-react";

export default function PremiumDestinationSearch() {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isListening, setIsListening] = useState(false);

    const router = useRouter();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Filter logic
    const handleChange = (value: string) => {
        setQuery(value);

        if (!value.trim()) {
            setFiltered([]);
            setShowDropdown(false);
            return;
        }

        const results = cities
            .filter((dest) =>
                dest.city.toLowerCase().includes(value.toLowerCase())
            )
            .map((dest) => dest.city);

        setFiltered(results);
        setShowDropdown(results.length > 0);
    };

    // Select city
    const handleSelect = (dest: string) => {
        const slug = dest.toLowerCase().replace(/\s+/g, "-");
        router.push(`/destinations/${slug}`);
        setQuery(dest);
        setShowDropdown(false);
    };

    // Submit
    const handleSubmit = () => {
        const exactMatch = cities.find(
            (dest) => dest.city.toLowerCase() === query.toLowerCase()
        );

        if (!exactMatch) {
            alert("Destination not found!");
            return;
        }

        handleSelect(exactMatch.city);
    };

    // Voice Search
    const handleVoiceSearch = () => {
        const SpeechRecognition =
            (window as any).SpeechRecognition ||
            (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Voice search not supported in this browser.");
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

        recognition.onerror = () => {
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };
    };

    // Close dropdown outside
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
        // <section className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
        <section className="relative py-32 px-6 text-white overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Discover Extraordinary Destinations Across India
                </h1>

                {/* Subtext */}
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-14">
                    Explore handpicked luxury destinations, curated travel experiences,
                    and unforgettable journeys crafted by our expert travel designers.
                    Start your premium adventure today.
                </p>

                {/* Search Container */}
                <div
                    ref={dropdownRef}
                    className="relative max-w-2xl mx-auto"
                >
                    <div className="flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full p-3 shadow-2xl hover:border-yellow-500 transition-all duration-500">

                        <input
                            type="text"
                            placeholder="Search destinations like Goa, Manali, Jaipur..."
                            value={query}
                            onChange={(e) => handleChange(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            className="flex-1 bg-transparent px-6 py-3 text-white placeholder-gray-400 focus:outline-none"
                        />

                        {/* Voice Button */}
                        <button
                            onClick={handleVoiceSearch}
                            className={`mx-2 p-3 rounded-full transition ${isListening
                                ? "bg-red-500 animate-pulse"
                                : "bg-white/10 hover:bg-white/20"
                                }`}
                        >
                            <Mic size={18} />
                        </button>

                        {/* Search Button */}
                        <button
                            onClick={handleSubmit}
                            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full font-semibold transition flex items-center gap-2"
                        >
                            <Search size={18} />
                            Search
                        </button>
                    </div>

                    {/* Animated Dropdown */}
                    <div
                        className={`absolute mt-4 w-full transition-all duration-300 ease-in-out ${showDropdown
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 -translate-y-4 invisible"
                            }`}
                    >
                        {filtered.length > 0 && (
                            <ul className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-h-64 overflow-y-auto">
                                {filtered.map((city) => (
                                    <li
                                        key={city}
                                        onClick={() => handleSelect(city)}
                                        className="px-6 py-2 text-start hover:bg-yellow-500/10 hover:text-yellow-400 cursor-pointer transition-all duration-200"
                                    >
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

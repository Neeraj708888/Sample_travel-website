"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cities } from "@/app/data/india-locations";

// const destinations = [
//     "Delhi",
//     "Mumbai",
//     "Jaipur",
//     "Goa",
//     "Kerala",
//     "Varanasi",
//     "Udaipur",
//     "Manali",
//     "Shimla",
//     "Rishikesh",
// ];

export default function DestinationSlider() {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();
    const dropdownRef = useRef<HTMLUListElement>(null);

    // Filter destinations on typing
    const handleChange = (value: string) => {
        setQuery(value);

        if (!value) {
            setFiltered([]);
            setShowDropdown(false);
            return;
        }

        const results = cities.filter((dest) =>
            dest.city.toLowerCase().includes(value.toLowerCase())
        ).map(dest => dest.city);

        setFiltered(results);
        setShowDropdown(results.length > 0);
    };

    // Handle click on dropdown item
    const handleSelect = (dest: string) => {
        const slug = dest.toLowerCase().replace(/\s+/g, "-");
        router.push(`/destinations/${slug}`);
        setQuery(dest); // Set input value to selected
        setShowDropdown(false);
    };

    // Handle submit via Enter or Search button
    const handleSubmit = () => {
        const exactMatch = cities.find(
            (dest) => dest.city.toLowerCase() === query.toLowerCase()
        );

        if (!exactMatch) {
            alert("Destination not found!");
            return;
        } else {
            handleSelect(exactMatch.city);
        }
    };

    // Close dropdown when clicked outside
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
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="p-10 bg-gray-800 flex flex-col items-center relative w-full max-w-md mx-auto">
            <div className="flex w-full relative">
                <input
                    type="text"
                    placeholder="Search destination..."
                    value={query}
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    className="border p-2 w-full rounded"
                />
                <button
                    onClick={handleSubmit}
                    className="ml-2 bg-blue-600 text-white px-4 rounded"
                >
                    Search
                </button>

                {/* Dropdown */}
                {showDropdown && filtered.length > 0 && (
                    <ul
                        ref={dropdownRef}
                        className="absolute top-12 left-0 w-full bg-white text-black border shadow-lg max-h-60 overflow-y-auto z-50 rounded"
                    >
                        {filtered.map((city) => (
                            <li
                                key={city}
                                onClick={() => handleSelect(city)}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                            >
                                {city}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
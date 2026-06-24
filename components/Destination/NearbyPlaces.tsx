"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cities } from "@/app/data/india-locations";

export default function DestinationSlider() {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState<typeof cities>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();
    const dropdownRef = useRef<HTMLUListElement>(null);

    // Filter cities while typing
    const handleChange = (value: string) => {
        setQuery(value);

        if (!value) {
            setFiltered([]);
            setShowDropdown(false);
            return;
        }

        const results = cities.filter((item) =>
            item.city.toLowerCase().includes(value.toLowerCase())
        );

        setFiltered(results);
        setShowDropdown(results.length > 0);
    };

    // Convert city to slug
    const generateSlug = (city: string) =>
        city.toLowerCase().replace(/\s+/g, "-");

    // Select from dropdown
    const handleSelect = (city: string) => {
        const slug = generateSlug(city);
        router.push(`/destinations/${slug}`);
        setQuery(city);
        setShowDropdown(false);
    };

    // Submit via Enter or button
    const handleSubmit = () => {
        const exactMatch = cities.find(
            (item) =>
                item.city.toLowerCase() === query.toLowerCase()
        );

        if (!exactMatch) {
            alert("Destination not found!");
            return;
        }

        handleSelect(exactMatch.city);
    };

    // Close dropdown when clicking outside
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
        <div className="p-6 bg-gray-800 flex flex-col items-center relative w-full max-w-md mx-auto rounded-lg">
            <h1 className="text-xl font-semibold mb-4">Near By</h1>
            <div className="flex w-full relative">
                <input
                    type="text"
                    placeholder="Search city..."
                    value={query}
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={(e) =>
                        e.key === "Enter" && handleSubmit()
                    }
                    className="border p-2 w-full rounded text-gray-50"
                />

                <button
                    onClick={handleSubmit}
                    className="ml-2 bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
                >
                    Search
                </button>

                {showDropdown && filtered.length > 0 && (
                    <ul
                        ref={dropdownRef}
                        className="absolute top-12 left-0 w-full bg-white text-black border shadow-lg max-h-60 overflow-y-auto z-50 rounded"
                    >
                        {filtered.map((item) => (
                            <li
                                key={item.city}
                                onClick={() =>
                                    handleSelect(item.city)
                                }
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                            >
                                {item.city}{" "}
                                <span className="text-gray-500 text-sm">
                                    ({item.state})
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

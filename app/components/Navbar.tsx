"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CalendarRange, Menu, X } from "lucide-react";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import ServicesMegaContent from "./Services/ServiceMegaMenu";

const categories = [
    "Conference",
    "Seminars and Workshops",
    "Corporate Meetings",
    "Team-Building Events",
    "Product Launches",
    "Corporate Social Responsibility (CSR) Events",
    "Trade Shows and Exhibitions",
    "Networking Events",
    "Incentive Programs",
    "Corporate Parties and Celebrations",
    "Executive Retreats",
    "Celebrity Booking",
    "DJ Night",
];

export default function Navbar() {
    const [activeCategory, setActiveCategory] = useState<string>("Conference");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();

    return (
        <>
            {/* ===== Navbar (Premium Glass Style) ===== */}
            <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex gap-4">
                        {/* Logo */}
                        <CalendarRange size={30} />
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-wide text-black"
                        >
                            Event Management Company
                        </Link>
                    </div>

                    {/* Desktop Menu (Same Links) */}
                    <div className="hidden md:flex gap-8 text-gray-700 font-medium item-center">
                        <Link href="/" className="relative group">
                            Home
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                        </Link>

                        <Link href="/about-us" className="relative group">
                            About Us
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                        </Link>

                        <div className="relative group">
                            <button
                                className="relative"
                                onClick={() => router.push("/event-services")}
                            >
                                Our Services
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                            </button>

                            {/* Centered Full Width Mega Menu */}
                            <div className="fixed top-[65px] left-1/2 -translate-x-1/2 w-screen z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">


                                {/* Horizontal Categories */}
                                {/* <div className="flex gap-2 overflow-x-auto pb-5 border-b">
                                        {[
                                            "Corporate Event",
                                            "Artist Management",
                                            "Wedding Planning",
                                            "Exhibition",
                                            "Conference Planning",
                                            "Brand Promotion",
                                            "Birthday Party",
                                            "Product Launch",
                                            "Team Building",
                                            "Conference",
                                            "Award Night",
                                            "Celebrity Booking",
                                            "DJ Night",
                                        ].map((category: string) => (
                                            <button
                                                key={category}
                                                onClick={() => setActiveCategory(category)}
                                                className={`whitespace-nowrap px-5 py-2 bg-gray-100 hover:bg-amber-300 hover:text-black rounded-lg transition ${activeCategory === category
                                                    ? "bg-amber-400 text-black"
                                                    : "bg-gray-100 hover:bg-amber-300"
                                                    }`}

                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div> */}

                                {/* Parent Opetions */}
                                <div className="max-w-6xl mx-auto px-8 py-5 bg-gray-200 rounded-lg shadow-lg">
                                    <ServicesMegaContent />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 bg-amber-100 px-5 py-8 rounded-lg h-[300px]">

                                    {/* Left Side - Vertical Scroll */}
                                    <div className="flex flex-col gap-3 overflow-y-auto pr-3 border-r">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setActiveCategory(category)}
                                                className={`text-left px-4 py-2 rounded-lg transition ${activeCategory === category
                                                    ? "bg-teal-400 text-black"
                                                    : "bg-gray-100 hover:bg-teal-200"
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Right Side - Dynamic Content */}
                                    <div className="overflow-y-auto pl-3">
                                        <h2 className="text-xl font-semibold mb-4">{activeCategory}</h2>

                                        {activeCategory === "Conference" && (
                                            <div>
                                                <p>Conference related content yaha show hoga.</p>
                                            </div>
                                        )}

                                        {activeCategory === "Seminars and Workshops" && (
                                            <div>
                                                <p>Seminars and Workshops ka content yaha show hoga.</p>
                                            </div>
                                        )}

                                        {/* Default Example */}
                                        {!["Conference", "Seminars and Workshops"].includes(activeCategory) && (
                                            <div>
                                                <p>{activeCategory} ka dynamic content yaha show hoga.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <Link href="/gallery" className="relative group">
                            Gallery
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                        </Link>

                        <Link href="/support" className="relative group">
                            Support
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Hamburger (Same Functionality) */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-black hover:scale-110 transition"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>


            {/* ===== Mobile Sidebar (Same Links) ===== */}
            <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}
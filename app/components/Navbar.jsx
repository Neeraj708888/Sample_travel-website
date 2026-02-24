"use client";
import { useState } from "react";
import Link from "next/link";
import { CalendarRange, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                    <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                        <Link href="/" className="relative group">
                            Home
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                        </Link>

                        <Link href="/about-us" className="relative group">
                            About Us
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                        </Link>

                        <Link href="/event-services" className="relative group">
                            Our Services
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                        </Link>

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

            {/* ===== Overlay (Same Functionality) ===== */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* ===== Right Sidebar (Same Structure, Premium Styling) ===== */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-black text-white shadow-2xl z-50 transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b border-gray-800">
                    <h2 className="text-lg font-semibold tracking-wide">Company</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5 text-gray-300 font-medium">

                    {/* Mobile Main Links (UNCHANGED) */}
                    <div className="md:hidden flex flex-col gap-5 border-b border-gray-800 pb-5">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                            Home
                        </Link>

                        <Link href="/about-us" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                            About Us
                        </Link>

                        <Link href="/event-services" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                            Our Services
                        </Link>
                        <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                            Gallery
                        </Link>

                        <Link href="/support" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                            Support
                        </Link>
                    </div>

                    {/* Sidebar Extra Links (UNCHANGED) */}

                    <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                        Blog
                    </Link>

                    <Link href="/locations" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                        Locations
                    </Link>

                    <Link href="/vision" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                        Our Vision
                    </Link>

                    <Link href="/success-story" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                        Success Story
                    </Link>
                </div>
            </div>
        </>
    );
}

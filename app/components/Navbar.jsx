"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        Ananta Group
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                        <Link href="/destinations" className="hover:text-blue-600 transition">
                            Destinations
                        </Link>
                        <Link href="/packages" className="hover:text-blue-600 transition">
                            Packages
                        </Link>
                        <Link href="/event-services" className="hover:text-blue-600 transition">
                            Event Services
                        </Link>
                        <Link href="/support" className="hover:text-blue-600 transition">
                            Support
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-gray-700 hover:text-blue-600"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Right Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-4 text-gray-50 font-medium">

                    {/* Mobile Main Links */}
                    <div className="md:hidden flex flex-col gap-4 border-b pb-4">
                        <Link href="/destinations" onClick={() => setIsOpen(false)}>
                            Destinations
                        </Link>
                        <Link href="/packages" onClick={() => setIsOpen(false)}>
                            Packages
                        </Link>
                        <Link href="/event-services" onClick={() => setIsOpen(false)}>
                            Event Services
                        </Link>
                        <Link href="/support" onClick={() => setIsOpen(false)}>
                            Support
                        </Link>
                    </div>

                    {/* Sidebar Extra Links */}
                    <Link href="/about" onClick={() => setIsOpen(false)}>
                        About Us
                    </Link>
                    <Link href="/blog" onClick={() => setIsOpen(false)}>
                        Blog
                    </Link>
                    <Link href="/locations" onClick={() => setIsOpen(false)}>
                        Locations
                    </Link>
                    <Link href="/vision" onClick={() => setIsOpen(false)}>
                        Our Vision
                    </Link>
                    <Link href="/success-story" onClick={() => setIsOpen(false)}>
                        Success Story
                    </Link>
                </div>
            </div>
        </>
    );
}

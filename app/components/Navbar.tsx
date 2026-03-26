"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CalendarRange, Menu, X } from "lucide-react";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import ServicesMegaContent from "./Services/ServiceMegaMenu";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();

    return (
        <>
            {/* ===== Navbar (Premium Glass Style) ===== */}
            <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 overflow-visible">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex gap-4">
                        {/* Logo */}
                        {/* <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.webp"
                                alt="Ananta Hospitality"
                                width={120}
                                height={60}
                                className="object-contain absolute rounded-xl"
                                priority
                            />
                        </Link> */}
                        <Image
                            src="/logo-transparent.png"  // ✅ Transparent PNG
                            alt="Ananta Hospitality"
                            width={120}
                            height={60}
                            className="object-contain absolute -top-6"
                            priority
                        />
                        {/* <Link
                            href="/"
                            className="text-2xl font-bold tracking-wide text-black"
                        >
                            Event Management Company
                        </Link> */}
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
                                className="relative cursor-pointer"
                                onClick={() => router.push("/events")}
                            >
                                Our Services
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                            </button>

                            {/* Centered Full Width Mega Menu */}
                            <div className="fixed top-[65px] left-1/2 -translate-x-1/2 w-screen z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                                {/* Parent Opetions */}
                                <div className="max-w-6xl mx-auto px-4 py-2 bg-gray-200 rounded-lg shadow-lg">
                                    <ServicesMegaContent />
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
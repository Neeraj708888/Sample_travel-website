"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";

interface MobileSidebarProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

/* ================= SERVICES DATA ================= */
const services = [
    {
        title: "Wedding Planning",
        slug: "wedding",
        children: [
            {
                title: "Destination Wedding",
                slug: "destination",
            },
            {
                title: "Theme Decor",
                slug: "decor",
            },
            {
                title: "Catering",
                slug: "catering",
            },
        ],
    },
    {
        title: "Corporate Event",
        slug: "corporate",
        children: [
            {
                title: "Conference",
                slug: "conference",
            },
            {
                title: "Product Launch",
                slug: "product-launch",
            },
            {
                title: "Award Night",
                slug: "award-night",
            },
        ],
    },
];

export default function MobileSidebar({
    isOpen,
    setIsOpen,
}: MobileSidebarProps): JSX.Element {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [openChildIndex, setOpenChildIndex] = useState<number | null>(null);
    const [serviceOpen, setServiceOpen] = useState<boolean>(false);

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-black text-white shadow-2xl z-50 transform transition-transform duration-500 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-5 border-b border-gray-800">
                    <h2 className="text-lg font-semibold">Company</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-5 text-gray-300 font-medium overflow-y-auto">

                    <Link href="/" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    <Link href="/about-us" onClick={() => setIsOpen(false)}>
                        About Us
                    </Link>

                    {/* ================= OUR SERVICES ================= */}
                    <div>
                        <button
                            onClick={() => setServiceOpen(!serviceOpen)}
                            className="flex justify-between items-center w-full"
                        >
                            Our Services
                            <ChevronDown
                                size={18}
                                className={`transition-transform ${serviceOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {serviceOpen && (
                            <div className="ml-4 mt-4 flex flex-col gap-4 text-sm">

                                {services.map((service, index) => (
                                    <div key={service.slug}>
                                        {/* Parent Service */}
                                        <button
                                            onClick={() =>
                                                setOpenIndex(openIndex === index ? null : index)
                                            }
                                            className="flex justify-between items-center w-full"
                                        >
                                            {service.title}
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform ${openIndex === index ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {/* Children */}
                                        {openIndex === index && (
                                            <div className="ml-4 mt-3 flex flex-col gap-2 text-gray-400">
                                                {service.children.map((child) => (
                                                    <Link
                                                        key={child.slug}
                                                        href={`/event-services/${service.slug}/${child.slug}`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {child.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                            </div>
                        )}
                    </div>

                    <Link href="/gallery" onClick={() => setIsOpen(false)}>
                        Gallery
                    </Link>

                    <Link href="/support" onClick={() => setIsOpen(false)}>
                        Support
                    </Link>

                    <hr className="border-gray-700 my-4" />

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
"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { ServiceNode, services } from "@/app/data/services";

interface MobileSidebarProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function MobileSidebar({
    isOpen,
    setIsOpen,
}: MobileSidebarProps) {
    const [serviceOpen, setServiceOpen] = useState(false);
    const [activePath, setActivePath] = useState<string[]>([]);

    /* ================= Recursive Renderer ================= */
    const renderNodes = (
        nodes: ServiceNode[],
        parentSlugs: string[] = []
    ) => {
        return nodes.map((node) => {
            const currentPath = [...parentSlugs, node.slug];
            const hasChildren = node.children && node.children.length > 0;

            // 🔥 FIXED LOGIC
            const isOpen = activePath
                .slice(0, currentPath.length)
                .join("/") === currentPath.join("/");

            return (
                <div key={node.id}>
                    {hasChildren ? (
                        <>
                            <button
                                onClick={() => setActivePath(currentPath)}
                                className="flex justify-between items-center w-full"
                            >
                                {node.title}
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${isOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {isOpen && (
                                <div className="ml-4 mt-3 flex flex-col gap-2 text-gray-400">
                                    {renderNodes(node.children!, currentPath)}
                                </div>
                            )}
                        </>
                    ) : (
                        <Link
                            href={`/event-services/${currentPath.join("/")}`}
                            onClick={() => setIsOpen(false)}
                            className="block"
                        >
                            {node.title}
                        </Link>
                    )}
                </div>
            );
        });
    };
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

                    {/* OUR SERVICES */}
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
                                {renderNodes(services)}
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
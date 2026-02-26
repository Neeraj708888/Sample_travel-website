"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Factory, ArrowBigRight } from "lucide-react";
import { ServiceNode, services } from "@/app/data/services";
import GlobalServiceSearch from "../GlobalServiceSearch";

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
    const activeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (activeRef.current) {
            activeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, [activePath]);

    /* ================= Recursive Renderer ================= */
    const renderNodes = (
        nodes: ServiceNode[],
        parentSlugs: string[] = []
    ) => {
        return nodes.map((node) => {
            const currentPath = [...parentSlugs, node.slug];
            const hasChildren = node.children && node.children.length > 0;

            const isOpen = currentPath.every(
                (slug, index) => activePath[index] === slug
            );

            return (
                <div key={node.id} ref={activePath.join("/") === currentPath.join("/")
                    ? activeRef
                    : null}>
                    {hasChildren ? (
                        <>
                            <button
                                // onClick={() => setActivePath(currentPath)}
                                onClick={() =>
                                    setActivePath((prev) =>
                                        isOpen ? parentSlugs : currentPath
                                    )
                                }
                                className="flex justify-between items-center w-full"
                            >
                                <span className="flex gap-2 text-start">
                                    <Factory size={20} />
                                    {node.title}
                                </span>

                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${isOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`ml-4 mt-3 flex flex-col gap-2 text-gray-400 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden"
                                    } ${node.children && node.children.length > 4
                                        ? "max-h-[200px] overflow-y-auto pr-2"
                                        : "max-h-[500px]"
                                    }`}
                            >
                                {isOpen && renderNodes(node.children!, currentPath)}
                            </div>
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
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen w-80 bg-purple-900 text-white shadow-2xl z-50 transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
                    } flex flex-col`}
            >
                {/* Header */}
                <div className="flex items-center py-5 border-b border-gray-800">

                    {/* 📱 Mobile → Only Search */}
                    <div className="w-full md:hidden px-4">
                        <GlobalServiceSearch />
                    </div>

                    {/* 💻 Desktop → Only Title */}
                    <h4 className="hidden md:block mx-auto text-lg sm:text-xl font-semibold tracking-wide">
                        Event Management Company
                    </h4>

                </div>

                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5 bg-amber-950 text-gray-300 font-medium">
                    {/* MOBILE ONLY LINKS */}
                    <div className="md:hidden flex flex-col gap-5">
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
                                <div className="ml-2 mt-4 flex flex-col gap-4 text-sm max-h-[70vh] overflow-y-auto pr-2">
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
                    </div>

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
                <button onClick={() => setIsOpen(false)} className="p-2">
                    <ArrowBigRight size={30} />
                </button>
            </div>


        </>
    );
}
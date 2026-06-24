"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Factory, ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import GlobalServiceSearch from "../GlobalServiceSearch";
import { ServiceNode, services } from "@/data/services";

interface MobileSidebarProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function MobileSidebar({ isOpen, setIsOpen }: MobileSidebarProps) {
    const router = useRouter();
    const [serviceOpen, setServiceOpen] = useState(false);
    const [activePath, setActivePath] = useState<string[]>([]);
    const activeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (activeRef.current) {
            activeRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [activePath]);

    /* ================= Recursive Renderer ================= */
    const renderNodes = (nodes: ServiceNode[], parentSlugs: string[] = []) => {
        return nodes.map((node) => {
            const currentPath = [...parentSlugs, node.slug];
            const hasChildren = node.children && node.children.length > 0;
            const isNodeOpen = currentPath.every((slug, i) => activePath[i] === slug);
            const pageUrl = `/events/${currentPath.join("/")}`;

            return (
                <div
                    key={node.id}
                    ref={activePath.join("/") === currentPath.join("/") ? activeRef : null}
                >
                    {hasChildren ? (
                        <>
                            <div className="flex items-center justify-between w-full gap-2">

                                {/* Left: title → page navigate + accordion expand */}
                                {/* ✅ Sidebar band NAHI hoga — user manually band karega */}
                                <button
                                    className="flex items-center gap-2 text-start flex-1 hover:text-white transition-colors"
                                    onClick={() => {
                                        setActivePath(isNodeOpen ? parentSlugs : currentPath);
                                        router.push(pageUrl); // navigate
                                        // setIsOpen(false) ← intentionally nahi hai
                                    }}
                                >
                                    <Factory size={18} className="shrink-0" />
                                    <span>{node.title}</span>
                                </button>

                                {/* Right: chevron → sirf accordion toggle */}
                                <button
                                    className="p-1 hover:text-white transition-colors shrink-0"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActivePath(isNodeOpen ? parentSlugs : currentPath);
                                    }}
                                >
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${isNodeOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                            </div>

                            {/* Children */}
                            <div
                                className={`ml-4 mt-3 flex flex-col gap-2 text-gray-400 transition-all duration-300 ease-in-out ${isNodeOpen ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden"
                                    } ${node.children && node.children.length > 4
                                        ? "max-h-[200px] overflow-y-auto pr-2"
                                        : "max-h-[500px]"
                                    }`}
                            >
                                {isNodeOpen && renderNodes(node.children!, currentPath)}
                            </div>
                        </>
                    ) : (
                        // Leaf node — sidebar band hoga (user ne final page choose kiya)
                        <Link
                            href={pageUrl}
                            onClick={() => setIsOpen(false)}
                            className="block hover:text-white transition-colors"
                        >
                            {node.title}
                        </Link>
                    )}
                </div>
            );
        });
    };

    const MOBILE_ONLY_LINKS = [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "/gallery", label: "Gallery" },
        { href: "/support", label: "Support" },
    ];

    const COMMON_LINKS = [
        { href: "/blog", label: "Blog" },
        { href: "/locations", label: "Locations" },
        { href: "/success-story", label: "Success Story" },
    ];

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
                    <div className="w-full md:hidden px-4">
                        <GlobalServiceSearch />
                    </div>
                    <h4 className="hidden md:block mx-auto text-lg sm:text-xl font-semibold tracking-wide">
                        Event Management Company
                    </h4>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5 bg-amber-950 text-gray-300 font-medium">

                    {/* MOBILE ONLY */}
                    <div className="md:hidden flex flex-col gap-5">
                        {MOBILE_ONLY_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-white transition-colors"
                            >
                                {label}
                            </Link>
                        ))}

                        {/* OUR SERVICES accordion */}
                        <div>
                            <button
                                onClick={() => setServiceOpen(!serviceOpen)}
                                className="flex justify-between items-center w-full hover:text-white transition-colors"
                            >
                                Our Services
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-200 ${serviceOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {serviceOpen && (
                                <div className="ml-2 mt-4 flex flex-col gap-4 text-sm max-h-[70vh] overflow-y-auto pr-2">
                                    {renderNodes(services)}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* COMMON LINKS */}
                    {COMMON_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-white transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:text-white transition-colors"
                    aria-label="Close sidebar"
                >
                    <ArrowBigRight size={30} />
                </button>
            </div>
        </>
    );
}
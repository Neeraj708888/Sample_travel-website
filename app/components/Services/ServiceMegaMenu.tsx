"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { services, ServiceNode } from "@/app/data/services";
import { findNodeByPath, getFirstFullPath } from "./servicesUtils";

export default function ServicesMegaContent() {
    const [activePath, setActivePath] = useState<string[]>([]);

    useEffect(() => {
        const defaultPath = getFirstFullPath(services);
        setActivePath(defaultPath);
    }, []);

    if (!activePath.length) return null;

    const parentNode: ServiceNode | undefined = services.find(
        (s) => s.slug === activePath[0]
    );

    const childNode: ServiceNode | null = findNodeByPath(
        services,
        activePath.slice(0, 2)
    );

    const rightOptions: ServiceNode[] = childNode?.children || [];

    return (
        <>
            {/* Horizontal Categories */}
            <div className="flex gap-2 overflow-x-auto pb-5 border-b">
                {services.map((category: ServiceNode) => (
                    <button
                        key={category.slug}
                        onClick={() =>
                            setActivePath(getFirstFullPath([category]))
                        }
                        className={`whitespace-nowrap px-5 py-2 rounded-lg transition ${activePath[0] === category.slug
                            ? "bg-amber-400 text-black"
                            : "bg-gray-100 hover:bg-amber-300"
                            }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 bg-amber-100 px-5 py-8 rounded-lg h-[300px]">

                {/* LEFT SIDE */}
                <div className="flex flex-col gap-3 overflow-y-auto pr-3 border-r">
                    {parentNode?.children?.map((child: ServiceNode) => (
                        <button
                            key={child.slug}
                            onClick={() =>
                                setActivePath([parentNode.slug, child.slug])
                            }
                            className={`text-left px-4 py-2 rounded-lg transition ${activePath[1] === child.slug
                                ? "bg-teal-400 text-black"
                                : "bg-gray-100 hover:bg-teal-200"
                                }`}
                        >
                            {child.title}
                        </button>
                    ))}
                </div>

                {/* RIGHT SIDE GRID */}
                <div className="overflow-y-auto pl-3">
                    {rightOptions.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4">
                            {rightOptions.map((item: ServiceNode) => (
                                <Link
                                    key={item.slug}
                                    href={`/services/${parentNode?.slug}/${childNode?.slug}/${item.slug}`}
                                    className="bg-white hover:bg-amber-400 hover:text-black transition p-3 rounded-lg shadow text-center"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p>No options available</p>
                    )}
                </div>
            </div>
        </>
    );
}
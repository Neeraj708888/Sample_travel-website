"use client";

import Link from "next/link";

import { services, ServiceNode } from "@/app/data/services";
import { findNodeByPath } from "./servicesUtils";
import GlobalServiceSearch from "../GlobalServiceSearch";
import { useServicePathNavigation } from "@/app/hooks/useServicePathNavigation";

export default function ServicesMegaContent() {

    const [activePath, updatePath] = useServicePathNavigation(services);

    if (!activePath.length) return null;

    /* LEVEL 1 */
    const parentNode: ServiceNode | undefined =
        services.find((s) => s.slug === activePath[0]);

    /* LEVEL 2 NODE */

    let childNode: ServiceNode | null = null;

    /* agar user ne level 2 select kiya hai */
    if (activePath.length >= 2) {
        childNode = findNodeByPath(services, activePath.slice(0, 2));
    }

    /* agar user ne select nahi kiya -> first child ka children show */
    else if (parentNode?.children?.length) {
        childNode = parentNode.children[0];
    }

    /* MIDDLE COL (LEVEL 3): fixed — always shows childNode's children */
    const middleItems: ServiceNode[] = childNode?.children || [];

    /* RIGHT COL (LEVEL 4+): deepest node in activePath starting from depth 3 that has children */
    let rightParent: ServiceNode | null = null;
    let rightParentDepth = 3;

    if (activePath.length >= 3) {
        for (let depth = activePath.length; depth >= 3; depth--) {
            const node = findNodeByPath(services, activePath.slice(0, depth));
            if (node?.children?.length) {
                rightParent = node;
                rightParentDepth = depth;
                break;
            }
        }
    }

    const rightItems: ServiceNode[] = rightParent?.children || [];
    const selectedRightSlug = activePath[rightParentDepth];

    return (
        <>
            {/* TOP CATEGORY BAR */}
            <div className="flex gap-1 overflow-x-auto pb-2 border-b">

                {services.map((category: ServiceNode) => (

                    <button
                        key={category.slug}
                        onClick={() => updatePath(0, category.slug)}
                        className={`whitespace-nowrap px-3 py-2 rounded-lg transition cursor-pointer
                        ${activePath[0] === category.slug
                                ? "bg-amber-400 text-black"
                                : "bg-gray-100 hover:bg-amber-300"
                            }`}
                    >
                        {category.title}

                    </button>

                ))}

            </div>

            {/* SEARCH */}
            <GlobalServiceSearch />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1 bg-amber-100 px-4 py-6 rounded-lg h-[300px]">

                {/* COL 1 — LEVEL 2 */}
                <div className="flex flex-col gap-2 overflow-y-auto pr-3 border-r">

                    {parentNode?.children?.map((child: ServiceNode) => (

                        <button
                            key={child.slug}
                            onClick={() => updatePath(1, child.slug)}
                            className={`text-left px-4 py-2 rounded-lg transition
                            ${activePath[1] === child.slug
                                    ? "bg-teal-400 text-black"
                                    : "bg-gray-100 hover:bg-teal-200"
                                }`}
                        >
                            {child.title} ›

                        </button>

                    ))}

                </div>

                {/* COL 2 — LEVEL 3 (fixed, never replaced) */}
                <div className="flex flex-col gap-2 overflow-y-auto pr-3 border-r">

                    {middleItems.length > 0 ? (

                        middleItems.map((item: ServiceNode) => {

                            const isSelected = activePath[2] === item.slug;
                            const hasChildren = !!item.children?.length;

                            const cls = `text-left px-4 py-2 rounded-lg shadow transition
                                ${isSelected
                                    ? "bg-amber-400 text-black"
                                    : "bg-white hover:bg-amber-400 hover:text-black"
                                }`;

                            /* Has children → button, drill into col 3 */
                            if (hasChildren) {
                                return (
                                    <button
                                        key={item.slug}
                                        onClick={() => updatePath(2, item.slug)}
                                        className={cls}
                                    >
                                        {item.title} ›
                                    </button>
                                );
                            }

                            /* Leaf → Link */
                            return (
                                <Link
                                    key={item.slug}
                                    href={`/events/${[...activePath.slice(0, 2), item.slug].join("/")}`}
                                    onClick={() => updatePath(2, item.slug)}
                                    className={cls}
                                >
                                    {item.title}
                                </Link>
                            );

                        })

                    ) : (

                        <p className="text-gray-400 text-sm">No options available</p>

                    )}

                </div>

                {/* COL 3 — LEVEL 4+ (recursive drill-down) */}
                <div className="flex flex-col gap-2 overflow-y-auto pr-3">

                    {rightItems.length > 0 ? (

                        rightItems.map((item: ServiceNode) => {

                            const isSelected = selectedRightSlug === item.slug;
                            const hasChildren = !!item.children?.length;
                            const fullPath = [...activePath.slice(0, rightParentDepth), item.slug];

                            const cls = `text-left px-4 py-2 rounded-lg shadow transition
                                ${isSelected
                                    ? "bg-amber-400 text-black"
                                    : "bg-white hover:bg-amber-400 hover:text-black"
                                }`;

                            if (hasChildren) {
                                return (
                                    <button
                                        key={item.slug}
                                        onClick={() => updatePath(rightParentDepth, item.slug)}
                                        className={cls}
                                    >
                                        {item.title} ›
                                    </button>
                                );
                            }

                            return (
                                <Link
                                    key={item.slug}
                                    href={`/events/${fullPath.join("/")}`}
                                    onClick={() => updatePath(rightParentDepth, item.slug)}
                                    className={cls}
                                >
                                    {item.title}
                                </Link>
                            );

                        })

                    ) : (

                        <p className="text-gray-400 text-sm">
                            {activePath.length >= 3 ? "No options available" : "← Select an option"}
                        </p>

                    )}

                </div>

            </div>

        </>
    );
}
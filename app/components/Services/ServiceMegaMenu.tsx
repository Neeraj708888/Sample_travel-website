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

    /* LEVEL 3 */

    const rightOptions: ServiceNode[] = childNode?.children || [];

    return (
        <>
            {/* TOP CATEGORY BAR */}
            <div className="flex gap-1 overflow-x-auto pb-5 border-b">

                {services.map((category: ServiceNode) => (

                    <button
                        key={category.slug}
                        onClick={() => updatePath(0, category.slug)}
                        className={`whitespace-nowrap px-5 py-1 rounded-lg transition cursor-pointer 
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 bg-amber-100 px-4 py-6 rounded-lg h-[300px]">

                {/* LEFT SIDE (LEVEL 2) */}
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
                            {child.title}

                        </button>

                    ))}

                </div>

                {/* RIGHT SIDE (LEVEL 3) */}
                <div className="overflow-y-auto pl-3">

                    {rightOptions.length > 0 ? (

                        <div className="grid grid-cols-2 gap-2">

                            {rightOptions.map((item: ServiceNode) => (

                                <Link
                                    key={item.slug}
                                    href={`/events/${[...activePath.slice(0, 2), item.slug].join("/")}`}
                                    onClick={() => updatePath(2, item.slug)}
                                    className={`p-2 rounded-lg shadow text-center transition 
                                    ${activePath.length === 3 && activePath[2] === item.slug
                                            ? "bg-amber-400 text-black"
                                            : "bg-white hover:bg-amber-400 hover:text-black"
                                        }`}
                                >
                                    {item.title}

                                </Link>

                            ))}

                        </div>

                    ) : (

                        <p className="text-gray-500">
                            No options available
                        </p>

                    )}

                </div>

            </div>

        </>
    );
}
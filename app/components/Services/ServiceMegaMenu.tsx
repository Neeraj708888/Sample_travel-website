"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { services, ServiceNode } from "@/app/data/services";
import { findNodeByPath, getFirstFullPath } from "./servicesUtils";
import GlobalServiceSearch from "../GlobalServiceSearch";

export default function ServicesMegaContent() {

    const [activePath, setActivePath] = useState<string[]>([]);
    const router = useRouter();

    /* Default open first service */
    useEffect(() => {
        const defaultPath = getFirstFullPath(services);
        setActivePath(defaultPath);
    }, []);

    if (!activePath.length) return null;

    /* LEVEL 1 */
    const parentNode: ServiceNode | undefined = services.find(
        (s) => s.slug === activePath[0]
    );

    /* LEVEL 2 */
    const childNode: ServiceNode | null = findNodeByPath(
        services,
        activePath.slice(0, 2)
    );

    /* LEVEL 3 */
    const rightOptions: ServiceNode[] = childNode?.children || [];

    return (
        <>
            {/* TOP CATEGORY BAR */}
            <div className="flex gap-1 overflow-x-auto pb-5 border-b">
                {services.map((category: ServiceNode) => (

                    <button
                        key={category.slug}
                        onClick={() => {

                            /* Only route change */
                            router.push(`/events/${category.slug}`);

                        }}
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
                            onClick={() => {

                                const path = [parentNode.slug, child.slug];

                                setActivePath(path);

                                router.push(`/events/${path.join("/")}`);

                            }}
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
                                    href={`/events/${[...activePath, item.slug].join("/")}`}
                                    onClick={() => {

                                        const path = [...activePath, item.slug];
                                        setActivePath(path);

                                    }}
                                    className={`p-2 rounded-lg shadow text-center transition 
                                    ${activePath[2] === item.slug
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
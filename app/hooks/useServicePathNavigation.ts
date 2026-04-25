// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { ServiceNode } from "../data/services";


// export function useServicePathNavigation(services: ServiceNode[]) {

//     const router = useRouter();
//     const [activePath, setActivePath] = useState<string[]>([]);

//     /* Default open parent -> first child */
//     useEffect(() => {

//         if (!services.length) return;

//         const firstParent = services[0];
//         const firstChild = firstParent.children?.[0];

//         if (firstParent && firstChild) {
//             setActivePath([firstParent.slug, firstChild.slug]);
//         }

//     }, [services]);

//     /* Universal path updater (scalable for any depth) */
//     const updatePath = (level: number, slug: string) => {

//         const newPath = [...activePath.slice(0, level), slug];

//         setActivePath(newPath);

//         router.push(`/events/${newPath.join("/")}`);
//     };

//     return [activePath, updatePath] as const;
// }

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ServiceNode } from "../data/services";
import { findNodeFullPath } from "@/app/liv/utils/treeHelper";

export function useServicePathNavigation(services: ServiceNode[]) {

    const router = useRouter();
    const [activePath, setActivePath] = useState<string[]>([]);

    /* 🔥 SYNC FROM URL */
    useEffect(() => {

        if (!services.length) return;

        const path = window.location.pathname.replace("/events/", "");
        const slugs = path.split("/").filter(Boolean);

        if (slugs.length) {

            // 🔥 FULL PATH RESOLVE FROM TREE
            const fullPathNodes = findNodeFullPath(services, slugs);

            if (fullPathNodes?.length) {
                setActivePath(fullPathNodes.map(n => n.slug));
                return;
            }

            // fallback
            setActivePath(slugs);
            return;
        }

        // default
        const firstParent = services[0];
        const firstChild = firstParent.children?.[0];

        if (firstParent && firstChild) {
            setActivePath([firstParent.slug, firstChild.slug]);
        }

    }, [services]);

    /* 🔥 SMART UPDATE */
    const updatePath = (level: number, slug: string) => {

        const newPath = [...activePath];

        newPath[level] = slug;

        const finalPath = newPath.slice(0, level + 1);

        setActivePath(finalPath);

        router.push(`/events/${finalPath.join("/")}`);
    };

    return [activePath, updatePath] as const;
}
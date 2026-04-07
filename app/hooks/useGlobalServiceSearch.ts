// "use client";

// import { useMemo, useState } from "react";
// import { services, ServiceNode } from "@/app/data/services";

// export interface FlattenedService {
//     title: string;
//     fullPath: string[];
// }

// /* 🔥 Flatten Service Tree */
// const flattenServices = (
//     nodes: ServiceNode[],
//     parentPath: string[] = []
// ): FlattenedService[] => {
//     let result: FlattenedService[] = [];

//     nodes.forEach((node) => {
//         const currentPath = [...parentPath, node.slug];

//         result.push({
//             title: node.title,
//             fullPath: currentPath,
//         });

//         if (node.children?.length) {
//             result = result.concat(
//                 flattenServices(node.children, currentPath)
//             );
//         }
//     });

//     return result;
// };

// export function useGlobalServiceSearch() {
//     const [query, setQuery] = useState("");
//     const [showDropdown, setShowDropdown] = useState(false);

//     const flatServices = useMemo(
//         () => flattenServices(services),
//         []
//     );

//     const filtered = useMemo(() => {
//         if (!query.trim()) return [];

//         return flatServices.filter((service) =>
//             service.title
//                 .toLowerCase()
//                 .includes(query.toLowerCase())
//         );
//     }, [query, flatServices]);

//     const selectService = (service: FlattenedService) => {
//         setQuery(service.title);
//         setShowDropdown(false);
//         return service.fullPath;
//     };

//     return {
//         query,
//         setQuery,
//         filtered,
//         showDropdown,
//         setShowDropdown,
//         selectService,
//     };
// }

"use client";

import { useMemo, useState } from "react";
import { services, ServiceNode } from "@/app/data/services";
import { solutions } from "../data/solution";


export interface FlattenedService {
    title: string;
    fullPath: string[];
    prefix: "events" | "solutions";  // ✅ Add — navigate karne ke liye
}

/* 🔥 Flatten Service Tree */
const flattenServices = (
    nodes: ServiceNode[],
    prefix: "events" | "solutions",  // ✅ Add
    parentPath: string[] = []
): FlattenedService[] => {
    let result: FlattenedService[] = [];

    nodes.forEach((node) => {
        const currentPath = [...parentPath, node.slug];

        result.push({
            title: node.title,
            fullPath: currentPath,
            prefix,  // ✅ Add
        });

        if (node.children?.length) {
            result = result.concat(
                flattenServices(node.children, prefix, currentPath)
            );
        }
    });

    return result;
};

export function useGlobalServiceSearch() {
    const [query, setQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const flatServices = useMemo(
        () => [
            ...flattenServices(services, "events"),      // ✅ Events tree
            ...flattenServices(solutions, "solutions"),  // ✅ Solutions tree
        ],
        []
    );

    const filtered = useMemo(() => {
        if (!query.trim()) return [];

        return flatServices.filter((service) =>
            service.title
                .toLowerCase()
                .includes(query.toLowerCase())
        );
    }, [query, flatServices]);

    const selectService = (service: FlattenedService) => {
        setQuery(service.title);
        setShowDropdown(false);
        return {
            path: service.fullPath,
            prefix: service.prefix,  // ✅ prefix bhi return karo
        };
    };

    return {
        query,
        setQuery,
        filtered,
        showDropdown,
        setShowDropdown,
        selectService,
    };
}
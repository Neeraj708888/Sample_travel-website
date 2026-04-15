"use client";

import { useMemo, useState } from "react";
import { services } from "@/app/data/services";
import { solutions } from "../data/solution";

type TreeNode = {
    title: string;
    slug: string;
    children?: TreeNode[];
};

export interface FlattenedService {
    title: string;
    fullPath: string[];
    prefix: "events" | "solutions";
}

const flattenServices = (
    nodes: TreeNode[],
    prefix: "events" | "solutions",
    parentPath: string[] = []
): FlattenedService[] => {
    let result: FlattenedService[] = [];

    nodes.forEach((node) => {
        const currentPath = [...parentPath, node.slug];

        result.push({
            title: node.title,
            fullPath: currentPath,
            prefix,
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
            ...flattenServices(services, "events"),
            ...flattenServices(solutions, "solutions"),
        ],
        []
    );

    const filtered = useMemo(() => {
        if (!query.trim()) return [];

        return flatServices.filter((service) =>
            service.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, flatServices]);

    const selectService = (service: FlattenedService) => {
        setQuery(service.title);
        setShowDropdown(false);

        return {
            path: service.fullPath,
            prefix: service.prefix,
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
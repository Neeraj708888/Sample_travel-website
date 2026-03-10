"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ServiceNode } from "../data/services";


export function useServicePathNavigation(services: ServiceNode[]) {

    const router = useRouter();
    const [activePath, setActivePath] = useState<string[]>([]);

    /* Default open parent -> first child */
    useEffect(() => {

        if (!services.length) return;

        const firstParent = services[0];
        const firstChild = firstParent.children?.[0];

        if (firstParent && firstChild) {
            setActivePath([firstParent.slug, firstChild.slug]);
        }

    }, [services]);

    /* Universal path updater (scalable for any depth) */
    const updatePath = (level: number, slug: string) => {

        const newPath = [...activePath.slice(0, level), slug];

        setActivePath(newPath);

        router.push(`/events/${newPath.join("/")}`);
    };

    return [activePath, updatePath] as const;
}
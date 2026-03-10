// import { ServiceNode } from "@/app/data/services";


// export function getFirstFullPath(nodes: ServiceNode[]): string[] {
//     if (!nodes.length) return [];

//     const path: string[] = [];
//     let current = nodes[0];

//     while (current) {
//         path.push(current.slug);
//         current = current.children?.[0]!;
//     }

//     return path;
// }

// export function findNodeByPath(
//     nodes: ServiceNode[],
//     path: string[]
// ): ServiceNode | null {
//     let currentLevel = nodes;
//     let currentNode: ServiceNode | null = null;

//     for (const slug of path) {
//         currentNode = currentLevel.find((n) => n.slug === slug) || null;
//         if (!currentNode) return null;
//         currentLevel = currentNode.children || [];
//     }

//     return currentNode;
// }

import { ServiceNode } from "@/app/data/services"

export function getFirstFullPath(nodes: ServiceNode[]): string[] {

    if (!nodes.length) return []

    const path: string[] = []

    let current: ServiceNode | undefined = nodes[0]

    while (current) {

        path.push(current.slug)

        if (!current.children?.length) break

        current = current.children[0]
    }

    return path
}

export function findNodeByPath(
    nodes: ServiceNode[],
    path: string[]
): ServiceNode | null {

    let level = nodes
    let node: ServiceNode | undefined

    for (const slug of path) {

        node = level.find((n) => n.slug === slug)

        if (!node) return null

        level = node.children || []
    }

    return node || null
}
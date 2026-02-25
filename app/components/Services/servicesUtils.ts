import { ServiceNode } from "@/app/data/services";


export function getFirstFullPath(nodes: ServiceNode[]): string[] {
    if (!nodes.length) return [];

    const path: string[] = [];
    let current = nodes[0];

    while (current) {
        path.push(current.slug);
        current = current.children?.[0]!;
    }

    return path;
}

export function findNodeByPath(
    nodes: ServiceNode[],
    path: string[]
): ServiceNode | null {
    let currentLevel = nodes;
    let currentNode: ServiceNode | null = null;

    for (const slug of path) {
        currentNode = currentLevel.find((n) => n.slug === slug) || null;
        if (!currentNode) return null;
        currentLevel = currentNode.children || [];
    }

    return currentNode;
}
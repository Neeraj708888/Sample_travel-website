// import { services, ServiceNode } from "../data/services"

// export function findEventPath(slugs: string[]) {
//     const path: ServiceNode[] = []

//     function traverse(
//         nodes: ServiceNode[],
//         depth: number
//     ): boolean {
//         for (const node of nodes) {
//             if (node.slug === slugs[depth]) {
//                 path.push(node)

//                 if (depth === slugs.length - 1) {
//                     return true
//                 }

//                 if (node.children) {
//                     if (traverse(node.children, depth + 1)) {
//                         return true
//                     }
//                 }

//                 path.pop()
//             }
//         }
//         return false
//     }

//     const found = traverse(services, 0)

//     return found ? path : null
// }


// ✅ services ko argument me allow kar rahe hain
// findEventPath.ts

import { services, ServiceNode } from "../data/services"

export type PathResult = {
    nodes: ServiceNode[]
}

export function findEventPath(slugs: string[]): PathResult | null {
    if (!slugs?.length) return null

    const path: ServiceNode[] = []

    function traverse(nodes: ServiceNode[], depth: number): boolean {
        for (const node of nodes) {
            if (node.slug === slugs[depth]) {
                path.push(node)

                if (depth === slugs.length - 1) {
                    return true
                }

                if (node.children && traverse(node.children, depth + 1)) {
                    return true
                }

                path.pop()
            }
        }
        return false
    }

    const found = traverse(services, 0)

    if (!found) return null

    return { nodes: [...path] }
}
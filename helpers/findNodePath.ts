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

// 2dn Approach 
// ✅ services ko argument me allow kar rahe hain
// findEventPath.ts

// import { services, ServiceNode } from "../data/services"

// export type PathResult = {
//     nodes: ServiceNode[]
// }

// export function findEventPath(slugs: string[]): PathResult | null {
//     if (!slugs?.length) return null

//     const path: ServiceNode[] = []

//     function traverse(nodes: ServiceNode[], depth: number): boolean {
//         for (const node of nodes) {
//             if (node.slug === slugs[depth]) {
//                 path.push(node)

//                 if (depth === slugs.length - 1) {
//                     return true
//                 }

//                 if (node.children && traverse(node.children, depth + 1)) {
//                     return true
//                 }

//                 path.pop()
//             }
//         }
//         return false
//     }

//     const found = traverse(services, 0)

//     if (!found) return null

//     return { nodes: [...path] }
// }


// 3rd Approach
export function findNodePath(tree: any[], slugPath: string[]) {
    let currentList = tree
    let current = null

    for (const slug of slugPath) {
        // ✅ Direct child mein dhundo pehle
        current = currentList.find(item => item.slug === slug)

        if (!current) {
            // ✅ Deep search — poore subtree mein dhundo
            current = deepFind(currentList, slug)
        }

        if (!current) return null

        currentList = current.children || []
    }

    return { current }
}

// ✅ Recursive deep search — kisi bhi depth pe slug dhundo
function deepFind(nodes: any[], slug: string): any | null {
    for (const node of nodes) {
        if (node.slug === slug) return node
        if (node.children?.length) {
            const found = deepFind(node.children, slug)
            if (found) return found
        }
    }
    return null
}
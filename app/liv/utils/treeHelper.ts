// /liv/utils/treeHelpers.ts

/**
 * 🔹 Get direct children titles (AI prompt ke liye)
 */
export function getChildrenTitles(nodes: any[] = []): string[] {
    return nodes.map((n) => n.title)
}

/**
 * 🔹 Flatten full tree (admin panel / search / sitemap ke liye)
 */
export function flattenTree(nodes: any[] = [], level = 0): any[] {
    let result: any[] = []

    for (const node of nodes) {
        result.push({
            id: node.id,
            title: node.title,
            slug: node.slug,
            level,
        })

        if (node.children && node.children.length > 0) {
            result = result.concat(flattenTree(node.children, level + 1))
        }
    }

    return result
}

/**
 * 🔹 Find full path (breadcrumb ke liye 🔥)
 */
export function findNodeFullPath(tree: any[], slugPath: string[]) {
    let path: any[] = []
    let currentList = tree

    for (const slug of slugPath) {
        const found = currentList.find((item) => item.slug === slug)

        if (!found) return null

        path.push(found)
        currentList = found.children || []
    }

    return path
}

/**
 * 🔹 Check if node has children
 */
export function hasChildren(node: any): boolean {
    return Array.isArray(node?.children) && node.children.length > 0
}
// import { ServiceNode, services } from "../data/services"
// /* ---------------------------------- */
// /* ✅ Find only Last Node Path -- Using Currently      */
// /* ---------------------------------- */

// export type ServicePathResult = {
//     current: ServiceNode
//     path: ServiceNode[]
// }

// export function findServiceBySlugPath(path: string[]): ServiceNode | null {
//     let nodes = services
//     let current: ServiceNode | undefined

//     for (const slug of path) {
//         current = nodes.find((n) => n.slug === slug)
//         if (!current) return null
//         nodes = current.children || []
//     }

//     return current ?? null
// }

// /* ------------------------------------------ */
// /* ✅ Find only Last Node Path in Array & Last Node Both    */
// /* ----------------------------------------- */
// export function findServicePath(path: string[]): ServicePathResult | null {
//     // ✅ Edge case: empty path
//     if (!path || path.length === 0) return null

//     let nodes: ServiceNode[] = services
//     const result: ServiceNode[] = []

//     for (const slug of path) {
//         // ✅ Safe matching (case insensitive optional)
//         const current = nodes.find((n) => n.slug === slug)

//         if (!current) {
//             return null // ❌ slug not found
//         }

//         result.push(current)

//         // ✅ Move to next level
//         nodes = current.children ?? []
//     }

//     // ✅ Final safety check
//     if (result.length === 0) return null

//     return {
//         current: result[result.length - 1], // ✅ last node
//         path: result
//     }
// }

// /* ---------------------------------- */
// /* ✅ SEO Title Builder                */
// /* ---------------------------------- */

// export function buildTitle(
//     node: ServiceNode,
//     slug?: string[],
//     city?: string
// ): string {

//     // ✅ Safe keyword extraction
//     const keyword =
//         Array.isArray(slug) && slug.length > 1
//             ? slug[slug.length - 2]?.replace(/-/g, " ") || ""
//             : ""

//     // ✅ Safe location
//     const location = city ? ` in ${city}` : " in Delhi"

//     // ✅ Normalize for comparison
//     const nodeTitle = node.title?.toLowerCase() || ""
//     const keywordLower = keyword.toLowerCase()

//     if (keyword && keywordLower !== nodeTitle) {
//         return `${node.title} Management Company for ${keyword}${location}`
//     }

//     return `${node.title} Management Company${location}`
// }
// /* ---------------------------------- */
// /* ✅ Format City                      */
// /* ---------------------------------- */

// export function formatCity(city?: string) {
//     if (!city) return undefined

//     return city
//         .replace(/-/g, " ")
//         .replace(/\b\w/g, (c) => c.toUpperCase())
// }



import { ServiceNode, services } from "../data/services"
import { solutions } from "../data/solution"


/* ---------------------------------- */
/* ✅ Find only Last Node Path -- Using Currently      */
/* ---------------------------------- */

export type ServicePathResult = {
    current: ServiceNode
    path: ServiceNode[]
}

export function findServiceBySlugPath(path: string[]): ServiceNode | null {
    let nodes = services
    let current: ServiceNode | undefined

    for (const slug of path) {
        current = nodes.find((n) => n.slug === slug)
        if (!current) return null
        nodes = current.children || []
    }

    return current ?? null
}

/* ------------------------------------------ */
/* ✅ Helper — Kisi bhi tree mein path dhundho */
/* ------------------------------------------ */
function findPathInTree(nodes: ServiceNode[], path: string[]): ServicePathResult | null {
    const result: ServiceNode[] = []
    let currentNodes = nodes

    for (const slug of path) {
        const current = currentNodes.find((n) => n.slug === slug)
        if (!current) return null
        result.push(current)
        currentNodes = current.children ?? []
    }

    if (result.length === 0) return null

    return {
        current: result[result.length - 1],
        path: result
    }
}

/* ------------------------------------------ */
/* ✅ Find only Last Node Path in Array & Last Node Both    */
/* ----------------------------------------- */
export function findServicePath(path: string[]): ServicePathResult | null {
    // ✅ Edge case: empty path
    if (!path || path.length === 0) return null

    // ✅ Pehle services mein dhundho
    const fromServices = findPathInTree(services, path)
    if (fromServices) return fromServices

    // ✅ Phir solutions mein dhundho
    const fromSolutions = findPathInTree(solutions, path)
    if (fromSolutions) return fromSolutions

    return null
}

/* ---------------------------------- */
/* ✅ SEO Title Builder                */
/* ---------------------------------- */

export function buildTitle(
    node: ServiceNode,
    slug?: string[],
    city?: string
): string {

    // ✅ Safe keyword extraction
    const keyword =
        Array.isArray(slug) && slug.length > 1
            ? slug[slug.length - 2]?.replace(/-/g, " ") || ""
            : ""

    // ✅ Safe location
    const location = city ? ` in ${city}` : " in Delhi"

    // ✅ Normalize for comparison
    const nodeTitle = node.title?.toLowerCase() || ""
    const keywordLower = keyword.toLowerCase()

    if (keyword && keywordLower !== nodeTitle) {
        return `${node.title} Management Company for ${keyword}${location}`
    }

    return `${node.title} Management Company${location}`
}

/* ---------------------------------- */
/* ✅ Format City                      */
/* ---------------------------------- */

export function formatCity(city?: string) {
    if (!city) return undefined

    return city
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
}
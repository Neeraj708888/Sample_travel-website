import { solutions } from "@/app/data/solution"
import type { ServiceNode } from "@/app/data/solution"
import { generateSeo } from "@/app/liv/seo"

/* ---------------------------------- */
/* ✅ Solutions tree traversal         */
/* ---------------------------------- */

function findSolutionPath(slugs: string[]): { nodes: ServiceNode[]; current: ServiceNode } | null {
    if (!slugs?.length) return null

    const path: ServiceNode[] = []

    function traverse(nodes: ServiceNode[], depth: number): boolean {
        for (const node of nodes) {
            if (node.slug === slugs[depth]) {
                path.push(node)
                if (depth === slugs.length - 1) return true
                if (node.children && traverse(node.children, depth + 1)) return true
                path.pop()
            }
        }
        return false
    }

    if (!traverse(solutions, 0)) return null

    return {
        nodes: [...path],
        current: path[path.length - 1],  // ✅ page.tsx ke saath consistent
    }
}

/* ---------------------------------- */
/* ✅ generateMetadata                 */
/* ---------------------------------- */

type PageProps = {
    params: Promise<{ slug: string[] }>
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params

    const result = findSolutionPath(slug)
    if (!result) return {}

    const { nodes, current } = result  // ✅ current directly use karo — lastNode pattern hataya
    const url = `${baseUrl}/solutions/${slug.join("/")}`

    // ✅ buildTitle import hataya — eventSlugFinder events ke liye hai
    //    Solutions ke liye direct title string kafi hai
    const title = `${current.title} Solutions Company in Delhi`

    return generateSeo({
        title,
        description: `${current.title} solutions in Delhi`,
        url,
        type: "service",
        breadcrumb: [
            { name: "Home", url: baseUrl },
            { name: "Solutions", url: `${baseUrl}/solutions` },  // ✅ uncommented — missing tha
            ...nodes.map((node, index) => ({
                name: node.title,
                url: `${baseUrl}/solutions/${slug.slice(0, index + 1).join("/")}`,
            })),
        ],
    })
}
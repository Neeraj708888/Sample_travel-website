import { solutions } from "@/app/data/solution"
import type { ServiceNode } from "@/app/data/solution"
import { buildTitle } from "@/app/liv/serviceSlugFinder"
import { generateSeo } from "@/app/liv/seo"

/* ---------------------------------- */
/* ✅ solutions tree traversal         */
/* ---------------------------------- */

type PathResult = {
    nodes: ServiceNode[]
}

function findSolutionPath(slugs: string[]): PathResult | null {
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

    return traverse(solutions, 0) ? { nodes: [...path] } : null
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

    const { nodes } = result
    const lastNode = nodes[nodes.length - 1]
    const url = `${baseUrl}/solutions/${slug.join("/")}`

    const title =
        buildTitle(lastNode, slug)
        || `${lastNode.title} Management Company in Delhi`

    return generateSeo({
        title,
        description: `${lastNode.title} Company in Delhi`,
        url,
        type: "service",
        breadcrumb: [
            { name: "Home", url: baseUrl },
            { name: "Solutions", url: `${baseUrl}/solutions` },
            ...nodes.map((node, index) => ({
                name: node.title,
                url: `${baseUrl}/solutions/${slug.slice(0, index + 1).join("/")}`,
            })),
        ],
    })
}

// lib/sitemap-utils.ts
import { MetadataRoute } from "next"

export const domain =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.anantahospitality.com"

export function flattenRoutes(nodes: any[], basePath: string, path: string[] = []): MetadataRoute.Sitemap {
    let urls: MetadataRoute.Sitemap = []

    for (const node of nodes) {
        const currentPath = [...path, node.slug]
        urls.push({
            url: `${domain}/${basePath}/${currentPath.join("/")}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        })
        if (node.children?.length) {
            urls = urls.concat(flattenRoutes(node.children, basePath, currentPath))
        }
    }
    return urls
}
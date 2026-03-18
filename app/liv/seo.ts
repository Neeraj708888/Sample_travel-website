import { ServiceNode, services } from "../data/services"

type BreadcrumbItem = {
    name: string
    url: string
}

type SeoProps = {
    title: string
    description: string
    url: string
    image?: string
    type?: "event" | "category" | "service" | "article"
    breadcrumb?: BreadcrumbItem[]
    noIndex?: boolean
}

export function generateSeo({
    title,
    description,
    url,
    image,
    type = "category",
    breadcrumb = [],
    noIndex = false,
}: SeoProps) {

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    const defaultImage = image || `${baseUrl}/og-image.jpg`

    // ✅ SEO Safe Title (max 60 chars)
    const seoTitle =
        title.length > 60
            ? `${title.substring(0, 57)}...`
            : title

    // ✅ SEO Safe Description (max 155 chars)
    const seoDescription =
        description.length > 155
            ? `${description.substring(0, 152)}...`
            : description

    return {
        title: seoTitle,
        description: seoDescription,

        alternates: {
            canonical: url,
        },

        robots: {
            index: !noIndex,
            follow: !noIndex,
        },

        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url,
            type: type === "article" ? "article" : "website",
            images: [{ url: defaultImage }],
        },

        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: seoDescription,
            images: [defaultImage],
        },
        // ✅ schema field hataya — page.tsx mein <Schema> component handle karta hai
    }
}

/* ---------------------------------- */
/* ✅ Find Service By Slug Path        */
/* ---------------------------------- */

export function findServiceBySlugPath(path: string[]): ServiceNode | null {
    let nodes = services
    let current: ServiceNode | undefined

    for (const slug of path) {
        current = nodes.find((n) => n.slug === slug)
        if (!current) return null
        nodes = current.children || []
    }

    return current || null
}

/* ---------------------------------- */
/* ✅ SEO Title Builder                */
/* ---------------------------------- */

export function buildTitle(
    node: ServiceNode,
    slug?: string[],
    city?: string
) {
    const keyword = slug?.length
        ? slug[slug.length - 1].replace(/-/g, " ")
        : ""

    const location = city ? ` in ${city}` : " in Delhi"

    // ✅ Consistent "Services" use karo
    if (keyword && keyword !== node.title.toLowerCase()) {
        return `${node.title} Management Company for ${keyword}${location}`
    }

    return `${node.title} Management COmpany${location}`
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
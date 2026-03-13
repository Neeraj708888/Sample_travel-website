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

    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

    const defaultImage = image || `${baseUrl}/og-image.jpg`

    // ✅ SEO Safe Title (max 60 chars)
    const seoTitle =
        title.length > 60
            ? `${title.substring(0, 57)}...`
            : `${title} | Event Management`

    // ✅ SEO Safe Description (150-160 chars)
    const seoDescription =
        description.length > 155
            ? `${description.substring(0, 152)}...`
            : description

    const schema: any[] = []

    // 🟢 Service Schema
    if (type === "service") {
        schema.push({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: seoTitle,
            description: seoDescription,
            url,
            areaServed: {
                "@type": "Country",
                name: "India",
            },
            provider: {
                "@type": "Organization",
                name: "Event Management Pvt Ltd",
                url: baseUrl,
            },
        })
    }

    // 🟢 Article Schema
    if (type === "article") {
        schema.push({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: seoTitle,
            description: seoDescription,
            image: defaultImage,
            author: {
                "@type": "Organization",
                name: "Event Management Pvt Ltd",
            },
            publisher: {
                "@type": "Organization",
                name: "Event Management Pvt Ltd",
                logo: {
                    "@type": "ImageObject",
                    url: `${baseUrl}/logo.png`,
                },
            },
            mainEntityOfPage: url,
        })
    }

    // 🟢 Breadcrumb Schema
    if (breadcrumb.length) {
        schema.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: breadcrumb.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.url,
            })),
        })
    }

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

        schema,
    }
}


// FIND SERVICE BY SLUG PATH
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


// SEO Friendly Title Builder
export function buildTitle(node: ServiceNode) {
    return `${node.title} Services in India | Event Management Company`
}
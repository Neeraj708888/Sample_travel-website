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

    const schema: any[] = []

    // 🟢 Service Schema
    if (type === "service") {
        schema.push({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: title,
            description,
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
            headline: title,
            description,
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
    if (breadcrumb.length > 0) {
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
        title,
        description,
        alternates: { canonical: url },

        robots: {
            index: !noIndex,
            follow: !noIndex,
        },

        openGraph: {
            title,
            description,
            url,
            type: type === "article" ? "article" : "website",
            images: [{ url: defaultImage }],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [defaultImage],
        },

        other: schema.length
            ? {
                "script:ld+json": JSON.stringify(schema),
            }
            : undefined,
    }
}


// Service.tsx
// export async function generateMetadata({ params }: PageProps) {
//     const url = `${baseUrl}/event-services/...`

//     return generateSeo({
//         title: "Wedding Planning Services",
//         description: "Premium wedding planning services in Delhi.",
//         url,
//         type: "service",
//         breadcrumb: [
//             { name: "Home", url: baseUrl },
//             { name: "Events", url: `${baseUrl}/event-services` },
//         ],
//     })
// }
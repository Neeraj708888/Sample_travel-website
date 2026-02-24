type SeoProps = {
    title: string
    description: string
    url: string
    image?: string
    type?: "event" | "category" | "service"
    breadcrumb?: { name: string; url: string }[]
}

export function generateSeo({
    title,
    description,
    url,
    image,
    type = "category",
    breadcrumb = [],
}: SeoProps) {
    const schema: any[] = []

    // Service Schema
    if (type === "service") {
        schema.push({
            "@context": "https://schema.org",
            "@type": "Service",
            name: title,
            description,
            url,
            areaServed: {
                "@type": "Country",
                name: "India",
            },
            provider: {
                "@type": "Organization",
                name: "Your Company Name",
                url: process.env.NEXT_PUBLIC_SITE_URL,
            },
        })
    }

    // Breadcrumb Schema
    if (breadcrumb.length > 0) {
        schema.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
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
        openGraph: {
            title,
            description,
            url,
            images: image ? [{ url: image }] : [],
        },
        other: {
            "script:ld+json": JSON.stringify(schema),
        },
    }
}

type BreadcrumbItem = {
    name: string
    url: string
}

type SeoProps = {
    title: string
    description: string
    url: string
    image?: string
    type?: "event" | "category" | "service" | "article" | "solution"
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

    const fullUrl = url.startsWith("http")
        ? url
        : `${baseUrl}${url}`

    const defaultImage = image || `${baseUrl}/og-image.jpg`

    // =========================
    // ✅ SEO SAFE TITLE
    // =========================
    const seoTitle =
        title.length > 60
            ? `${title.substring(0, 57)}...`
            : title

    // =========================
    // ✅ SEO SAFE DESCRIPTION
    // =========================
    const seoDescription =
        description.length > 155
            ? `${description.substring(0, 152)}...`
            : description

    // =========================
    // ✅ OG TYPE MAPPING
    // =========================
    const ogType =
        type === "article"
            ? "article"
            : "website"

    return {
        title: seoTitle,
        description: seoDescription,

        metadataBase: new URL(baseUrl),

        alternates: {
            canonical: fullUrl,
        },

        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
            },
        },

        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url: fullUrl,
            type: ogType,
            siteName: "Ananta Hospitality",
            images: [
                {
                    url: defaultImage,
                    width: 1200,
                    height: 630,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: seoDescription,
            images: [defaultImage],
        },

        // ✅ OPTIONAL: breadcrumb data pass (schema component use karega)
        extra: {
            breadcrumb,
        },
    }
}
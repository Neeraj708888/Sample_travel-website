import { findEventPath } from "@/app/liv/eventSlugFinder"
import { generateSeo } from "@/app/liv/seo"
import { Metadata } from "next"

type Props = {
    params: Promise<{ slug: string[] }>
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const resolvedParams = await params
    const slugArr = resolvedParams.slug

    // ✅ findEventPath use karo — findServicePath nahi
    const result = findEventPath(slugArr)
    if (!result) return {}

    const current = result.current
    const url = `${baseUrl}/events/${slugArr.join("/")}`

    // ✅ Breadcrumb nodes — slug prefix walk
    const breadcrumbNodes = slugArr.map((_, index) => {
        const prefixResult = findEventPath(slugArr.slice(0, index + 1))
        return prefixResult?.current ?? null
    }).filter(Boolean)

    const title = `${current.title} Management Company in Delhi`
    const description = `${current.title} Company in Delhi`

    return generateSeo({
        title,
        description,
        url,
        type: "service",
        breadcrumb: [
            { name: "Home", url: baseUrl },
            { name: "Events", url: `${baseUrl}/events` },
            ...breadcrumbNodes.map((node: any, index: number) => ({
                name: node.title,
                url: `${baseUrl}/events/${slugArr.slice(0, index + 1).join("/")}`,
            })),
        ],
    })
}



// import { buildTitle, findServicePath, formatCity } from "@/app/liv/serviceSlugFinder";
// import { Metadata } from "next"

// type Props = {
//     params: { slug: string[] }
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {

//     const { slug } = params

//     const data = findServicePath(slug)
//     const node = data?.current

//     // ✅ Safe city extraction
//     const rawCity = slug?.[slug.length - 1]
//     const city = formatCity(rawCity)

//     const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
//     const url = `${baseUrl}/${slug.join("/")}`

//     const title = node
//         ? buildTitle(node, slug, city)
//         : "Event Management Company in Delhi"

//     return {
//         title,

//         alternates: {
//             canonical: url,
//         },

//         openGraph: {
//             title,
//             url,
//             siteName: "Event Management",
//             type: "website",
//         },

//         twitter: {
//             card: "summary_large_image",
//             title,
//         },

//         robots: {
//             index: true,
//             follow: true
//         }
//     }
// }




// Agar chaho next step me main:
// 🔥 auto meta description generator
// 🔥 schema markup (breadcrumb + service)
// 🔥 dynamic OG images

// add kar deta hoon — next level SEO 🚀
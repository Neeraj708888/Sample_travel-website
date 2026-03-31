
import { buildTitle, findServicePath, formatCity } from "@/app/liv/serviceSlugFinder";
import { Metadata } from "next"

type Props = {
    params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const resolvedParams = await params;

    const data = findServicePath(resolvedParams.slug)
    const node = data?.current

    // City
    const rawCity = resolvedParams.slug[resolvedParams.slug.length - 1];
    const city = formatCity(rawCity);

    const title = node ? buildTitle(node, resolvedParams.slug, city) : "Event Manangement Company in Delhi"
    // const description = node
    //     ? buildDescription(node)
    //     : "Professional event management services."

    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/${resolvedParams.slug.join("/")}`

    return {
        title,
        // description,

        alternates: {
            canonical: url,
        },

        openGraph: {
            title,
            // description,
            url,
            siteName: "Event Management",
            type: "website",
            // images: node?.image
            //     ? [
            //         {
            //             url: node.image,
            //             width: 1200,
            //             height: 630,
            //         },
            //     ]
            //     : [],
        },

        twitter: {
            card: "summary_large_image",
            title,
            // description,
        },

        robots: {
            index: true,
            follow: true
        }
    }
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
import { buildTitle, findServiceBySlugPath } from "@/app/liv/seo"
import { Metadata } from "next"

type Props = {
    params: { slug: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const node = findServiceBySlugPath(params.slug)

    const title = node ? buildTitle(node, params.slug) : "Event Services"
    // const description = node
    //     ? buildDescription(node)
    //     : "Professional event management services."

    const url = `http://localhost:3000/events/${params.slug.join("/")}`

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
    }
}
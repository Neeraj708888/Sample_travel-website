// // app/sitemap.ts

import { services } from "./data/services"

// import { MetadataRoute } from 'next'
// import { createClient } from '@supabase/supabase-js'

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

//     const supabase = createClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL!,
//         process.env.SUPABASE_SERVICE_ROLE_KEY!
//     )

//     // Fetch all services
//     const { data: services } = await supabase
//         .from('services')
//         .select('event_slug, category_slug, slug, updated_at')

//     const baseUrl = 'http://localhost:3000';

//     const dynamicUrls = services?.map((item, index) => ({
//         url: `${baseUrl}/events/${(item.slug)s
//             .slice(0, index + 1)
//             .join("/")}`,
//         lastModified: new Date(item.updated_at),
//         changeFrequency: 'weekly' as const,
//         priority: 0.8,
//     })) || []

//     return [
//         {
//             url: baseUrl,
//             lastModified: new Date(),
//             changeFrequency: 'daily',
//             priority: 1,
//         },
//         ...dynamicUrls,
//     ]
// }



const domain = "https://yourdomain.com"

function flattenServices(nodes, path = []) {
    let urls = []

    for (const node of nodes) {

        const currentPath = [...path, node.slug]

        urls.push({
            url: `${domain}/events/${currentPath.join("/")}`,
            lastModified: new Date(),
        })

        if (node.children) {
            urls = urls.concat(flattenServices(node.children, currentPath))
        }
    }

    return urls
}

export default function sitemap() {
    return [
        {
            url: domain,
            lastModified: new Date(),
        },
        ...flattenServices(services),
    ]
}
import { services } from "./data/services"
import { MetadataRoute } from "next"

const domain =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.anantahospitality.com"

// reusable function
function flattenRoutes(nodes: any[], basePath: string, path: string[] = []) {
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

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: domain,
            lastModified: new Date(),
            priority: 1,
        },

        // EVENTS ROUTES
        ...flattenRoutes(services, "events"),

        // SOLUTIONS ROUTES (agar same data use ho raha hai)
        ...flattenRoutes(services, "solutions"),
    ]
}


// import { services } from "./data/services"
// import { MetadataRoute } from "next"

// const domain =
//     process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

// function flattenServices(nodes: any[], path: string[] = []) {
//     let urls: MetadataRoute.Sitemap = []

//     for (const node of nodes) {

//         const currentPath = [...path, node.slug]

//         urls.push({
//             url: `${domain}/events/${currentPath.join("/")}`,
//             lastModified: new Date(),
//             changeFrequency: "weekly",  // optional
//             priority: 0.8,   // optional
//         })

//         if (node.children?.length) {
//             urls = urls.concat(flattenServices(node.children, currentPath))
//         }
//     }

//     return urls
// }

// export default function sitemap(): MetadataRoute.Sitemap {

//     return [
//         {
//             url: domain,
//             lastModified: new Date(),
//         },

//         ...flattenServices(services),

//     ]
// }
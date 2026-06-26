// import { MetadataRoute } from 'next'

// export default function robots(): MetadataRoute.Robots {
//     return {
//         rules: {
//             userAgent: '*',
//             allow: '/',
//         },
//         sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"}/sitemap.xml`,
//     }
// }

import { MetadataRoute } from 'next'

const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://www.anantahospitality.com"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin/',    // admin pages crawl mat karo
                    '/api/',      // API routes crawl mat karo
                    '/private/',  // private pages
                ],
            },
        ],
        sitemap: [
            `${domain}/sitemap.xml`,
            `${domain}/events/sitemap.xml`,
            `${domain}/solutions/sitemap.xml`,
        ],
    }
}
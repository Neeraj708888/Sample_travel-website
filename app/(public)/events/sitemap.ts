// /events/sitemap.ts
import { services } from "@/data/services"
import { flattenRoutes } from "@/lib/sitemap-utils"

import { MetadataRoute } from "next"
const domain =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.anantahospitality.com" || "http://localhost:3000";
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // ✅ Pehle /events khud add karo
        {
            url: `${domain}/events`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        ...flattenRoutes(services, "events")
    ]
}
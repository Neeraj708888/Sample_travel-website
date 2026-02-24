// app/sitemap.ts

import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Fetch all services
    const { data: services } = await supabase
        .from('services')
        .select('event_slug, category_slug, slug, updated_at')

    const baseUrl = 'https://yourdomain.com'

    const dynamicUrls = services?.map((item) => ({
        url: `${baseUrl}/event-services/${item.event_slug}/${item.category_slug}/${item.slug}`,
        lastModified: new Date(item.updated_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    })) || []

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...dynamicUrls,
    ]
}

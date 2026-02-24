import EventSearch from "@/app/components/Events/Hero"
import { generateSeo } from "../liv/seo"
import { breadcrumbSchema, organizationSchema } from "../liv/schema"
import Schema from "../liv/components/Schema"


const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"

export const metadata = generateSeo({
    title:
        "Best Event Management Company in India | Luxury Wedding & Corporate Planners",
    description:
        "Hire the best event management company in India for weddings, corporate events, birthdays and luxury celebrations. Professional planning with premium execution.",
    url: `${baseUrl}/event-services`,
})

export default function EventServicesPage() {
    const pageUrl = `${baseUrl}/event-services`

    const schemaData = [
        organizationSchema(),

        // Collection Page Schema (Important for listing pages)
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${pageUrl}#collection`,
            name: "Event Management Services",
            description:
                "Explore premium wedding, corporate and birthday event management services across India.",
            url: pageUrl,
            inLanguage: "en-IN",
        },

        breadcrumbSchema([
            { name: "Home", url: baseUrl },
            { name: "Events", url: pageUrl },
        ]),
    ]

    return (
        <>
            <main>
                <EventSearch />
            </main>

            <Schema data={schemaData} id="events-listing-schema" />
        </>
    )
}

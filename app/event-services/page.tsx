import EventSearch from "@/app/components/Events/Hero"
import { generateSeo } from "../liv/seo"
import { breadcrumbSchema, organizationSchema } from "../liv/schema"
import Schema from "../liv/components/Schema"
import { PortfolioSection } from "../components/Events/PortfolioSection"
import { TestimonialsSection } from "../components/Events/TestimonialSection"
import { FAQSection } from "../components/Events/FaqSection"
import { LocationSEOSection } from "../components/Events/LocationSeoSection"
import { ContactCTA } from "../components/Events/ContactCTA"


const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"

export const metadata = generateSeo({
    title:
        "Best Event Management Company in Delhi | Luxury Wedding & Corporate Planners",
    description:
        "Hire the best event management company in Delhi for weddings, corporate events, birthdays and luxury celebrations. Professional planning with premium execution.",
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
                "Explore premium wedding, corporate and birthday event management services in Delhi.",
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
            <PortfolioSection />
            <TestimonialsSection />
            <FAQSection />
            <LocationSEOSection />
            <ContactCTA />

            <Schema data={schemaData} id="events-listing-schema" />
        </>
    )
}

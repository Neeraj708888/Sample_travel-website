
import { generateSeo } from "../liv/seo"
import {
    breadcrumbSchema,
    localBusinessSchema,
    organizationSchema,
    faqSchema,
} from "../liv/schema"
import Schema from "../liv/components/Schema"
import { PortfolioSection } from "../components/Events/PortfolioSection"
import { TestimonialsSection } from "../components/Events/TestimonialSection"
import { FAQSection } from "../components/Events/FaqSection"
import { LocationSEOSection } from "../components/Events/LocationSeoSection"
import { ContactCTA } from "../components/Events/ContactCTA"
import { EventSearch } from "../components/Events/Hero"

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export async function generateMetadata() {
    const url = `${baseUrl}/events`

    return generateSeo({
        title: "Premium Event Management Company in Delhi",
        description:
            "Luxury wedding planning, corporate events, and private celebrations in Delhi.",
        url,
        type: "category",
        breadcrumb: [
            { name: "Home", url: baseUrl },
            { name: "Events", url },
        ],
    })
}

export default function EventServicesPage() {
    const url = `${baseUrl}/event`

    const pageFaqs = [
        {
            question: "What types of events do you manage?",
            answer:
                "We manage weddings, corporate events, destination events, and luxury private celebrations across India.",
        },
        {
            question: "Do you provide services outside Delhi?",
            answer:
                "Yes, we provide premium event management services across India.",
        },
    ]

    const schemaData = [
        organizationSchema(),
        localBusinessSchema(url),
        breadcrumbSchema([
            { name: "Home", url: baseUrl },
            { name: "Events", url },
        ]),
        faqSchema(pageFaqs, url),
    ].filter(Boolean)

    return (
        <>
            <Schema
                data={schemaData}
                id="event-services-structured-data"
            />

            <EventSearch />
            <PortfolioSection />
            <TestimonialsSection />
            <FAQSection />
            <LocationSEOSection />
            <ContactCTA />
        </>
    )
}
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

/* ---------------------------------- */
/* ✅ SEO Metadata */
/* ---------------------------------- */

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

/* ---------------------------------- */
/* ✅ Page Component */
/* ---------------------------------- */

export default function EventServicesPage() {

    const url = `${baseUrl}/events`

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

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" },
    ]

    return (
        <>
            {/* ✅ Structured Data */}
            <Schema
                data={schemaData}
                id="event-services-structured-data"
            />

            {/* ✅ Hero Section */}
            <EventSearch
                title="Event"
                breadcrumbItems={breadcrumbItems}
            />

            {/* ✅ Page Sections */}
            <PortfolioSection />

            <TestimonialsSection />

            <FAQSection />

            <LocationSEOSection />

            <ContactCTA />
        </>
    )
}
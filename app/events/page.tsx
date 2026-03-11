import { generateSeo } from "../liv/seo"
import {
    breadcrumbSchema,
    localBusinessSchema,
    organizationSchema,
    faqSchema,
} from "../liv/schema"

import Schema from "../liv/components/Schema"

import { PopularEvent } from "../components/Events/PopularEvent"
// import { TestimonialsSection } from "../components/Events/TestimonialSection"
// import { LocationSEOSection } from "../components/Events/LocationSeoSection"
import { ContactCTA } from "../components/Events/ContactCTA"
import { EventSearch } from "../components/Events/Hero"
import EventCategories from "../components/Events/EventCategories"
import HowWePlanEvents from "../components/Events/HowWePlanEvents"
import FeaturedEvents from "../components/Events/FeaturedEvents"
import FAQ from "../components/Events/FAQ"

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

            {/* Category Card */}
            <EventCategories />

            {/* ✅ Page Sections */}
            <PopularEvent />

            {/* How We plan events */}
            <HowWePlanEvents />

            {/* Featured Events */}
            <FeaturedEvents />
            {/* FAQ */}
            <FAQ />

            {/* <TestimonialsSection /> */}

            {/* <LocationSEOSection /> */}

            <ContactCTA />
        </>
    )
}
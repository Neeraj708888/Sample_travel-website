import { generateSeo } from "../liv/seo"
import {
    breadcrumbSchema,
    localBusinessSchema,
    organizationSchema,
    faqSchema,
} from "../liv/schema"

import Schema from "../liv/components/Schema"

import { PopularEvent } from "../components/Events/PopularEvent"
import { ContactCTA } from "../components/Events/ContactCTA"
import { EventSearch } from "../components/Events/Hero"
import EventCategories from "../components/Events/EventCategories"
import HowWePlanEvents from "../components/Events/HowWePlanEvents"
import FeaturedEvents from "../components/Events/FeaturedEvents"
import FAQ from "../components/Events/FAQ"
import { getPageData } from "../liv/pageData"

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

/* ---------------------------------- */
/* ✅ SEO Metadata                     */
/* ---------------------------------- */

export async function generateMetadata() {
    const url = `${baseUrl}/events`

    const { page } = await getPageData("events")

    return generateSeo({
        title: page?.meta_title || "Premium Event Management Company in Delhi",
        description:
            page?.meta_description ||
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
/* ✅ Page Component                   */
/* ---------------------------------- */

type FAQItem = {
    question: string
    answer: string
}

export default async function EventServicesPage() {

    const url = `${baseUrl}/events`

    const { faqs: dbFaqs = [] } =
        (await getPageData("events")) as { faqs: FAQItem[] }

    const faqList =
        dbFaqs.length > 0
            ? dbFaqs.map((f: FAQItem) => ({
                question: f.question,
                answer: f.answer
            }))
            : undefined

    const schemaData = [
        organizationSchema(),
        localBusinessSchema(url),
        breadcrumbSchema([
            { name: "Home", url: baseUrl },
            { name: "Events", url },
        ]),
        faqSchema(faqList, url),
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

            {/* Category Cards */}
            <EventCategories />

            {/* Popular Events */}
            <PopularEvent />

            {/* How We Plan Events */}
            <HowWePlanEvents />

            {/* Featured Events */}
            <FeaturedEvents />

            {/* FAQ */}
            <FAQ faqs={faqList} />

            <ContactCTA />
        </>
    )
}
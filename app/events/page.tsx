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
import { getPageData } from "../liv/pageData"
import FAQ from "../components/Events/FAQ"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

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
        type: "event",
        breadcrumb: [
            { name: "Home", url: baseUrl },
            { name: "Events", url },
        ],
    })
}

/* ---------------------------------- */
/* ✅ Page Component                   */
/* ---------------------------------- */

export default async function EventServicesPage() {
    const url = `${baseUrl}/events`

    // ✅ Sirf ek baar DB call
    const { page, faqs: dbFaqs = [] } = await getPageData("events")

    const parsedContent =
        typeof page?.content === "string"
            ? JSON.parse(page.content)
            : page?.content;

    const hero = parsedContent?.hero || {};

    const faqList = dbFaqs.length ? dbFaqs : undefined

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
            <Schema
                data={schemaData}
                id="event-services-structured-data"
            />
            <EventSearch
                breadcrumbItems={breadcrumbItems}
                title={hero?.h1 || "Event Management Company in Delhi"}
                h2={hero?.h2 || "Professional Event Planning & Execution Services"}
                shortDesc={hero?.shortDesc || "We provide complete event management solutions including corporate events, weddings, brand promotions, and exhibitions across India."}
            />
            <EventCategories page={page} />
            <PopularEvent />
            <HowWePlanEvents />
            <FeaturedEvents />
            <FAQ faqs={faqList} />
            <ContactCTA />
        </>
    )
}
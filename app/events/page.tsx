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
import { services } from "../data/services"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const dynamic = "force-dynamic"

/* ---------------------------------- */
/* ✅ SEO Metadata                     */
/* ---------------------------------- */

export async function generateMetadata() {
    const url = `${baseUrl}/events`

    return generateSeo({
        title: "Event Management Company in Delhi",
        description: "Luxury wedding planning, corporate events, and private celebrations in Delhi.",
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

    // ✅ Sirf ek DB/AI call
    let page: any = null
    let dbFaqs: any[] = []

    try {
        const data = await getPageData("events")
        page = data?.page
        dbFaqs = data?.faqs || []
    } catch (error) {
        console.error("PAGE FETCH ERROR:", error)
    }

    // ✅ Content parse karo — same as [...slug]/page.tsx
    let parsedContent: any = {}
    try {
        parsedContent =
            typeof page?.content === "string"
                ? JSON.parse(page.content)
                : page?.content ?? {}
    } catch (e) {
        console.error("JSON PARSE ERROR:", e)
        parsedContent = {}
    }

    const hero = parsedContent?.hero || {}
    const eventCards = parsedContent?.eventType?.cards || []

    // ✅ finalCards — AI cards + services.ts hybrid (same logic as [...slug])
    let finalCards = eventCards

    if (services.length > 0) {
        finalCards = services.map((child) => {
            const aiCard = eventCards?.find(
                (card: any) => card.slug === child.slug
            )

            return {
                title: child.title,
                slug: child.slug,
                cardType: child.title,
                desc:
                    aiCard?.desc ||
                    `${child.title} services tailored for exceptional event experiences.`,
            }
        })
    }

    const faqList = dbFaqs.length > 0 ? dbFaqs : undefined

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
            <Schema data={schemaData} id="event-services-structured-data" />
            <EventSearch
                breadcrumbItems={breadcrumbItems}
                title={hero?.h1 || "Event Management Company in Delhi"}
                h2={hero?.h2 || "Professional Event Planning & Execution Services"}
                shortDesc={hero?.shortDesc || "We provide complete event management solutions including corporate events, weddings, brand promotions, and exhibitions across India."}
            />
            <EventCategories
                page={page}
                cards={finalCards}
            />
            <PopularEvent />
            <HowWePlanEvents />
            <FeaturedEvents />
            <FAQ faqs={faqList} />
            <ContactCTA />
        </>
    )
}
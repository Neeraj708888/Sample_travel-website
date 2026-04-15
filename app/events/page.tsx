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
import { services } from "../data/services"

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const dynamic = "force-dynamic"

/* =======================================
   🔹 AI CARD TYPE (FIX 🔥)
======================================= */
type AICard = {
    slug: string
    desc?: string
}

/* ---------------------------------- */
/* ✅ SEO Metadata                     */
/* ---------------------------------- */

export async function generateMetadata() {

    const data = await getPageData("events")
    const page = data?.page

    return generateSeo({
        title: page?.meta_title || "Event Management Company in Delhi",
        description:
            page?.meta_description ||
            "Luxury wedding planning, corporate events, and private celebrations in Delhi.",
        url: `${baseUrl}/events`,
        type: "event",
        breadcrumb: [
            { name: "Home", url: baseUrl },
            { name: "Events", url: `${baseUrl}/events` },
        ],
    })
}

/* ---------------------------------- */
/* ✅ Page Component                   */
/* ---------------------------------- */

export default async function EventServicesPage() {

    const url = `${baseUrl}/events`

    let page: any = null

    try {
        const data = await getPageData("events")
        page = data?.page
    } catch (error) {
        console.error("PAGE FETCH ERROR:", error)
    }

    /* =========================
       ✅ SAFE CONTENT PARSE
    ========================= */

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

    /* =========================
       ✅ TYPE-SAFE CARDS 🔥
    ========================= */

    const eventCards: AICard[] =
        parsedContent?.eventType?.cards || []

    const aiMap = new Map<string, AICard>(
        eventCards.map((c) => [c.slug, c])
    )

    /* =========================
       ✅ FINAL CARDS
    ========================= */

    const finalCards = services.map((item) => {
        const aiCard = aiMap.get(item.slug)

        return {
            title: item.title,
            slug: item.slug,
            cardType: "service",
            desc:
                aiCard?.desc ||
                `${item.title} services tailored for exceptional event experiences.`,
        }
    })

    /* =========================
       ✅ FAQ
    ========================= */

    const faqList = page?.faqs || []

    /* =========================
       ✅ SCHEMA
    ========================= */

    const schemaData = [
        organizationSchema(),
        localBusinessSchema(),
        breadcrumbSchema([
            { name: "Home", url: baseUrl },
            { name: "Events", url },
        ]),
        faqSchema(faqList, url),
    ].filter(Boolean)

    /* =========================
       ✅ UI
    ========================= */

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" },
    ]

    return (
        <>
            <Schema data={schemaData} id="event-services-schema" />

            <EventSearch
                breadcrumbItems={breadcrumbItems}
                title={hero?.h1 || "Event Management Company in Delhi"}
                h2={
                    hero?.h2 ||
                    "Professional Event Planning & Execution Services"
                }
                shortDesc={
                    hero?.shortDesc ||
                    "We provide complete event management solutions including corporate events, weddings, brand promotions, and exhibitions across India."
                }
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
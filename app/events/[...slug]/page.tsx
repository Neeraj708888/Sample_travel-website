import { notFound } from "next/navigation"

import { breadcrumbSchema, serviceSchema, faqSchema } from "@/app/liv/schema"
import Schema from "@/app/liv/components/Schema"
import { getPageData } from "@/app/liv/pageData"

import { EventSearch } from "@/app/components/Events/Hero"
import EventCategories from "@/app/components/Events/EventCategories"
import PortfolioCaseStudy from "@/app/components/Events/Services/PortfolioCaseStudy"
import EventSolutions from "@/app/components/Events/Services/EventSolutions"
import { ContactCTA } from "@/app/components/Events/ContactCTA"
import ServiceTypes from "@/app/components/Events/Services/Category/SeriviceTypes"
import ServiceTypeCaseStudy from "@/app/components/Events/Services/Category/Types/ServiceTypesCaseStudy"
import FAQ from "@/app/components/Events/FAQ"

import { findEventPath } from "@/app/liv/eventSlugFinder"

type PageProps = {
    params: Promise<{
        slug: string[]
    }>
}

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const dynamicParams = true
export { generateMetadata } from "./metadata"

/* =======================================
   🔹 AI CARD TYPE
======================================= */
type AICard = {
    slug: string
    desc?: string
}

/* =======================================
   🔹 PAGE COMPONENT
======================================= */
export default async function DynamicServicePage({ params }: PageProps) {

    const { slug } = await params

    const result = findEventPath(slug)
    if (!result) notFound()

    const current = result.current
    const depth = slug.length

    const dbSlug = `events/${slug.join("/")}`
    const url = `${baseUrl}/events/${slug.join("/")}`

    /* =========================
       ✅ Breadcrumb Nodes
    ========================= */
    const breadcrumbNodes = slug.map((_, index) => {
        const r = findEventPath(slug.slice(0, index + 1))
        return r?.current
    }).filter(Boolean)

    /* =========================
       ✅ ONLY CURRENT PAGE FETCH 🔥
    ========================= */
    let page: any = null

    try {
        const data = await getPageData(dbSlug)
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
    } catch {
        parsedContent = {}
    }

    const hero = parsedContent?.hero || {}

    /* =========================
       ✅ AI CARDS
    ========================= */
    const eventCards: AICard[] =
        parsedContent?.eventType?.cards || []

    const aiMap = new Map<string, AICard>(
        eventCards.map((c) => [c.slug, c])
    )

    const childrenNodes = current.children || []

    /* =========================
       ✅ FINAL CARDS (NO PREFETCH 🔥)
    ========================= */
    const finalCards =
        childrenNodes.length > 0
            ? childrenNodes.map((child: any) => {

                const aiCard = aiMap.get(child.slug)

                return {
                    title: child.title,
                    slug: child.slug,
                    cardType: "service",
                    desc:
                        aiCard?.desc ||
                        `${child.title} services in Delhi`,
                }
            })
            : []

    /* =========================
       ✅ FAQ
    ========================= */
    const faqList = page?.faqs || []

    /* =========================
       ✅ SCHEMA
    ========================= */
    const schemaData = [
        serviceSchema({
            name: page?.display_title || current.title,
            description:
                page?.meta_description ||
                `${current.title} services in Delhi`,
            url,
        }),
        breadcrumbSchema([
            { name: "Home", url: baseUrl },
            { name: "Events", url: `${baseUrl}/events` },
            ...breadcrumbNodes.map((node: any, index: number) => ({
                name: node.title,
                url: `${baseUrl}/events/${slug
                    .slice(0, index + 1)
                    .join("/")}`,
            })),
        ]),
        faqSchema(faqList, url),
    ].filter(Boolean)

    /* =========================
       ✅ Breadcrumb UI
    ========================= */
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" },
        ...breadcrumbNodes.map((node: any, index: number) => ({
            label: node.title,
            href: `/events/${slug.slice(0, index + 1).join("/")}`,
        })),
    ]

    /* =========================
       ✅ TOP SECTION
    ========================= */
    const TopSection = (
        <>
            <EventSearch
                breadcrumbItems={breadcrumbItems}
                title={page?.display_title || hero?.h1 || current.title}
                h2={hero?.h2 || ""}
                shortDesc={hero?.shortDesc || ""}
            />

            <EventCategories
                page={page}
                cards={finalCards} // 🔥 no pagesMap
            />
        </>
    )

    return (
        <>
            <Schema data={schemaData} id={`schema-${slug.join("-")}`} />

            {depth === 1 && (
                <>
                    {TopSection}
                    <EventSolutions page={page} />
                    {/* <PortfolioCaseStudy /> */}
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}

            {depth === 2 && (
                <>
                    {TopSection}
                    {/* <ServiceTypes />
                    <ServiceEventTypeSolutions />
                    <ServiceTypePortfolioCaseStudy /> */}
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}

            {depth >= 3 && (
                <>
                    {TopSection}
                    <ServiceTypes />
                    {/* <ServiceTypeCaseStudy /> */}
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}
        </>
    )
}
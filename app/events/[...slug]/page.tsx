import { notFound } from "next/navigation"
import { findEventPath } from "@/app/liv/findEventsPath"
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/app/liv/schema"
import Schema from "@/app/liv/components/Schema"
import { getPageData } from "@/app/liv/pageData"

import { EventSearch } from "@/app/components/Events/Hero"
import EventCategories from "@/app/components/Events/EventCategories"
import CorporateEventServices from "@/app/components/Events/Services/CorporateEventServices"
import PortfolioCaseStudy from "@/app/components/Events/Services/PortfolioCaseStudy"
import { ContactCTA } from "@/app/components/Events/ContactCTA"
import ServiceTypes from "@/app/components/Events/Services/Category/SeriviceTypes"
import ServiceEventTypeSolutions from "@/app/components/Events/Services/Category/ServiceEventTypeSolutions"
import ServiceTypePortfolioCaseStudy from "@/app/components/Events/Services/Category/ServiceTypePortfolioCaseStudy"
import ServiceTypeCaseStudy from "@/app/components/Events/Services/Category/Types/ServiceTypesCaseStudy"
import FAQ from "@/app/components/Events/FAQ"
import { buildTitle, findServicePath } from "@/app/liv/serviceSlugFinder"
import { generateSeo } from "@/app/liv/seo"

type PageProps = {
    params: Promise<{
        slug: string[]
    }>
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const dynamic = "force-dynamic"
export const dynamicParams = true

/* ---------------------------------- */
/* ✅ METADATA                         */
/* ---------------------------------- */

export async function generateMetadata({ params }: PageProps) {
    const resolvedParams = await params
    const result = findEventPath(resolvedParams.slug)
    if (!result) return {}

    const { nodes } = result
    const lastNode = nodes[nodes.length - 1]
    const url = `${baseUrl}/events/${resolvedParams.slug.join("/")}`
    const dbSlug = `events/${resolvedParams.slug.join("/")}`

    let page: any = null

    try {
        const data = await getPageData(dbSlug)
        page = data?.page
    } catch (error) {
        console.error("META FETCH ERROR:", error)
    }

    const title = buildTitle(lastNode, resolvedParams.slug)
        || page?.meta_title
        || "Event Company in Delhi"

    return generateSeo({
        title,
        description: page?.meta_description || `${lastNode.title} Company in Delhi`,
        url,
        type: "service",
        breadcrumb: [
            { name: "Home", url: baseUrl },
            { name: "Events", url: `${baseUrl}/events` },
            ...nodes.map((node, index) => ({
                name: node.title,
                url: `${baseUrl}/events/${resolvedParams.slug.slice(0, index + 1).join("/")}`,
            })),
        ],
    })
}

/* ---------------------------------- */
/* ✅ PAGE COMPONENT                   */
/* ---------------------------------- */

export default async function DynamicServicePage({ params }: PageProps) {
    const resolvedParams = await params
    const { slug } = resolvedParams

    const result = findEventPath(slug)
    if (!result) notFound()

    const { nodes } = result
    const lastNode = nodes[nodes.length - 1]
    const depth = slug.length

    const url = `${baseUrl}/events/${slug.join("/")}`
    const dbSlug = `events/${slug.join("/")}`

    // ✅ Current page DB call
    let page: any = null
    let dbFaqs: any[] = []

    try {
        const data = await getPageData(dbSlug)
        page = data?.page
        dbFaqs = data?.faqs || []
    } catch (error) {
        console.error("PAGE FETCH ERROR:", error)
    }

    // ✅ Content parse karo
    const parsedContent =
        typeof page?.content === "string"
            ? JSON.parse(page.content)
            : page?.content

    const hero = parsedContent?.hero || {}
    const eventCards = parsedContent?.eventType?.cards || []

    // ✅ pagesMap — children ke DB slugs fetch karo
    const currentNode = findServicePath(slug.filter(s => s !== "events"))
    const childrenNodes = currentNode?.current?.children || []

    const pagesMap: Record<string, any> = {}
    await Promise.all(
        childrenNodes.map(async (child) => {
            const childSlug = `${dbSlug}/${child.slug}`
            try {
                const data = await getPageData(childSlug)
                if (data?.page) pagesMap[childSlug] = data.page
            } catch { }
        })
    )

    const faqList = dbFaqs.length > 0 ? dbFaqs : undefined

    const schemaData = [
        serviceSchema({
            name: lastNode.title,
            description: `Professional ${lastNode.title} Company in Delhi.`,
            url,
            serviceType: lastNode.title,
        }),
        breadcrumbSchema(
            nodes.map((node, index) => ({
                name: node.title,
                url: `${baseUrl}/events/${slug.slice(0, index + 1).join("/")}`,
            }))
        ),
        faqSchema(faqList, url),
    ].filter(Boolean)

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" },
        ...nodes.map((node, index) => ({
            label: node.title,
            href: `/events/${slug.slice(0, index + 1).join("/")}`,
        })),
    ]

    return (
        <>
            <Schema data={schemaData} id={`schema-${slug.join("-")}`} />

            {depth === 1 && (
                <>
                    <EventSearch
                        breadcrumbItems={breadcrumbItems}
                        title={hero?.h1 || lastNode.title}
                        h2={hero?.h2 || ""}
                        shortDesc={hero?.shortDesc || ""}
                    />
                    <EventCategories
                        page={page}
                        pagesMap={pagesMap}
                        cards={eventCards}
                    />
                    <CorporateEventServices />
                    <PortfolioCaseStudy />
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}

            {depth === 2 && (
                <>
                    <EventSearch
                        breadcrumbItems={breadcrumbItems}
                        title={hero?.h1 || lastNode.title}
                        h2={hero?.h2 || ""}
                        shortDesc={hero?.shortDesc || ""}
                    />
                    <EventCategories
                        page={page}
                        pagesMap={pagesMap}
                        cards={eventCards}
                    />
                    <ServiceTypes />
                    <ServiceEventTypeSolutions />
                    <ServiceTypePortfolioCaseStudy />
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}

            {depth === 3 && (
                <>
                    <EventSearch
                        breadcrumbItems={breadcrumbItems}
                        title={hero?.h1 || lastNode.title}
                        h2={hero?.h2 || ""}
                        shortDesc={hero?.shortDesc || ""}
                    />
                    <EventCategories
                        page={page}
                        pagesMap={pagesMap}
                        cards={eventCards}
                    />
                    <ServiceTypes />
                    <ServiceTypeCaseStudy />
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}

            {depth === 4 && (
                <>
                    <EventSearch
                        breadcrumbItems={breadcrumbItems}
                        title={hero?.h1 || lastNode.title}
                        h2={hero?.h2 || ""}
                        shortDesc={hero?.shortDesc || ""}
                    />
                    <EventCategories
                        page={page}
                        pagesMap={pagesMap}
                        cards={eventCards}
                    />
                    <ServiceTypes />
                    <ServiceTypeCaseStudy />
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}

            {depth === 5 && (
                <>
                    <EventSearch
                        breadcrumbItems={breadcrumbItems}
                        title={hero?.h1 || lastNode.title}
                        h2={hero?.h2 || ""}
                        shortDesc={hero?.shortDesc || ""}
                    />
                    <EventCategories
                        page={page}
                        pagesMap={pagesMap}
                        cards={eventCards}
                    />
                    <ServiceTypes />
                    <ServiceTypeCaseStudy />
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}
        </>
    )
}
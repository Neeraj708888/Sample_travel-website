import { notFound } from "next/navigation"
import { findEventPath } from "@/app/liv/findEventsPath"
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/app/liv/schema"
import Schema from "@/app/liv/components/Schema"
import { getPageData } from "@/app/liv/pageData"

import { EventSearch } from "@/app/components/Events/Hero"
import EventCategories from "@/app/components/Events/EventCategories"
import PortfolioCaseStudy from "@/app/components/Events/Services/PortfolioCaseStudy"
import EventSolutions from "@/app/components/Events/Services/EventSolutions"
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

    // ❌ DB/AI call remove kar diya → race condition khatam
    // const data = await getPageData(dbSlug)

    const title =
        buildTitle(lastNode, resolvedParams.slug)
        || `${lastNode.title} Management Company in Delhi`

    return generateSeo({
        title,
        description: `${lastNode.title} Company in Delhi`,
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
    const pagesMap: Record<string, any> = {}

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

    // page null ho to fallback content use karo — crash mat karo
    if (!page) {
        console.warn("Page data missing, using fallback:", dbSlug)
    }
    // ✅ Content parse karo
    let parsedContent: any = {}

    try {
        parsedContent =
            typeof page?.content === "string"
                ? JSON.parse(page.content)
                : page?.content
    } catch (e) {
        console.error("JSON PARSE ERROR:", e)
        parsedContent = {}
    }

    const hero = parsedContent?.hero || {}
    const eventCards = parsedContent?.eventType?.cards || []


    // ✅ pagesMap — children ke DB slugs fetch karo
    const currentNode = findServicePath(slug.filter(s => s !== "events"))
    const childrenNodes = currentNode?.current?.children || []

    // 🔥 NEW: smart cards logic (AI + children hybrid)
    // 🔥 NOW SAFE (pagesMap ready hai)
    let finalCards = eventCards

    if (childrenNodes.length > 0) {
        finalCards = childrenNodes.map((child) => {
            const childSlug = `${dbSlug}/${child.slug}`
            const childPage = pagesMap[childSlug] // ✅ अब safe

            const aiCard = eventCards?.find(
                (card: any) => card.slug === child.slug
            )

            return {
                title: child.title,
                slug: child.slug,
                description:
                    aiCard?.desc ||
                    childPage?.meta_description ||
                    `${child.title} services in Delhi`,
            }
        })
    }
    // await Promise.all(
    //     childrenNodes.map(async (child) => {
    //         const childSlug = `${dbSlug}/${child.slug}`
    //         try {
    //             const data = await getPageData(childSlug)
    //             if (data?.page) pagesMap[childSlug] = data.page
    //         } catch {
    //             if (!page) notFound()
    //         }
    //     })
    // )
    await Promise.all(
        childrenNodes.map(async (child) => {
            const childSlug = `${dbSlug}/${child.slug}`
            try {
                const data = await getPageData(childSlug)
                if (data?.page) pagesMap[childSlug] = data.page
            } catch (error) {
                // ✅ FIX: child fail hone pe parent ko crash mat karo
                console.warn("Child page fetch failed:", childSlug);
            }
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
                        cards={finalCards}
                    />
                    <EventSolutions />
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
                        cards={finalCards}
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
                        cards={finalCards}
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
                        cards={finalCards}
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
                        cards={finalCards}
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
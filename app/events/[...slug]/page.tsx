import { notFound } from "next/navigation"
import { services } from "@/app/data/services"
import { findEventPath } from "@/app/liv/findEventsPath"
import { buildTitle, generateSeo } from "@/app/liv/seo"
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

type PageProps = {
    params: Promise<{
        slug: string[]
    }>
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

// ✅ Sirf force-dynamic rakho
export const dynamic = "force-dynamic"
export const dynamicParams = true

// ✅ generateStaticParams hatao — force-dynamic ke saath conflict hai

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
    let faqs: any[] = []

    try {
        const data = await getPageData(dbSlug)  // ✅ Sirf ek baar
        page = data?.page
        faqs = data?.faqs || []
    } catch (error) {
        console.error("META FETCH ERROR:", error)
    }

    const title = buildTitle(lastNode, resolvedParams.slug)
        || page?.meta_title
        || "Event Services in Delhi"

    return generateSeo({
        title,
        description: page?.meta_description || `Premium ${lastNode.title} services`,
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

    // ✅ Sirf ek baar DB call
    let page: any = null
    let dbFaqs: any[] = []

    try {
        const data = await getPageData(dbSlug)
        page = data?.page
        dbFaqs = data?.faqs || []
    } catch (error) {
        console.error("PAGE FETCH ERROR:", error)
    }

    const faqList = dbFaqs.length > 0 ? dbFaqs : undefined

    const schemaData = [
        serviceSchema({
            name: lastNode.title,
            description: `Professional ${lastNode.title} services.`,
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
                    <EventSearch breadcrumbItems={breadcrumbItems} title={lastNode.title} />
                    <EventCategories />
                    <CorporateEventServices />
                    <PortfolioCaseStudy />
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}

            {depth === 2 && (
                <>
                    <EventSearch breadcrumbItems={breadcrumbItems} title={lastNode.title} />
                    <EventCategories />
                    <ServiceTypes />
                    <ServiceEventTypeSolutions />
                    <ServiceTypePortfolioCaseStudy />
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}

            {depth === 3 && (
                <>
                    <EventSearch breadcrumbItems={breadcrumbItems} title={lastNode.title} />
                    <EventCategories />
                    <ServiceTypes />
                    <ServiceTypeCaseStudy />
                    <FAQ faqs={faqList} />
                    <ContactCTA />
                </>
            )}
        </>
    )
}
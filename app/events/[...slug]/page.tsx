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

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

/* ---------------------------------- */
/* ✅ RENDERING STRATEGY (FIXED)       */
/* ---------------------------------- */

// ✅ FIX 1: force-dynamic रखा ताकि build time DB call fail न करे
export const dynamic = "force-dynamic";

// ✅ FIX 2: dynamicParams true (false हटाया)
export const dynamicParams = true

/* ---------------------------------- */
/* ❌ OPTIONAL: REMOVE if not needed   */
/* ---------------------------------- */

// ⚠️ NOTE: force-dynamic use कर रहे हो → ये optional है
function getAllPaths(nodes: any[], parent: string[] = []) {
    let paths: string[][] = []

    for (const node of nodes) {
        const current = [...parent, node.slug]
        paths.push(current)

        if (node.children?.length) {
            paths = paths.concat(getAllPaths(node.children, current))
        }
    }

    return paths
}

// ⚠️ OPTIONAL (remove if not needed)
export async function generateStaticParams() {
    const allPaths = getAllPaths(services)
    return allPaths.map(slug => ({ slug }))
}

/* ---------------------------------- */
/* ✅ METADATA (SAFE VERSION)          */
/* ---------------------------------- */

export async function generateMetadata({ params }: PageProps) {
    const resolvedParams = await params
    const result = findEventPath(resolvedParams.slug)

    if (!result) return {}

    const { nodes } = result
    const lastNode = nodes[nodes.length - 1]
    const url = `${baseUrl}/events/${resolvedParams.slug.join("/")}`

    const dbSlug = `events/${resolvedParams.slug.join("/")}`

    // ✅ FIX 3: SAFE DB CALL (try-catch)
    let page: any = null;

    try {
        const data = await getPageData(dbSlug);
        page = data?.page;
    } catch (error) {
        console.error("META FETCH ERROR:", error);
    }

    // ✅ STATIC + DYNAMIC TITLE STRATEGY
    const dynamicTitle = buildTitle(lastNode, resolvedParams.slug);
    const dbTitle = page?.meta_title;

    const title =
        dynamicTitle || dbTitle || "Event Services in Delhi";

    return generateSeo({
        title,
        description:
            page?.meta_description ||
            `Premium ${lastNode.title} services`,
        url,
        type: "service",
        breadcrumb: [
            { name: "Home", url: baseUrl },
            { name: "Events", url: `${baseUrl}/events` },
            ...nodes.map((node, index) => ({
                name: node.title,
                url: `${baseUrl}/events/${resolvedParams.slug
                    .slice(0, index + 1)
                    .join("/")}`,
            })),
        ],
    })
}

/* ---------------------------------- */
/* ✅ PAGE COMPONENT                   */
/* ---------------------------------- */

export default async function DynamicServicePage({
    params,
}: PageProps) {
    const resolvedParams = await params
    const { slug } = resolvedParams

    const result = findEventPath(slug)
    if (!result) notFound()

    const { nodes } = result
    const lastNode = nodes[nodes.length - 1]
    const depth = slug.length

    const url = `${baseUrl}/events/${slug.join("/")}`
    const dbSlug = `events/${slug.join("/")}`

    // ✅ FIX 4: SAFE FAQ FETCH (NO BUILD CRASH)
    let dbFaqs: any[] = [];

    try {
        const data = await getPageData(dbSlug);
        dbFaqs = data?.faqs || [];
    } catch (error) {
        console.error("FAQ FETCH ERROR:", error);
    }

    // ✅ SAFE FALLBACK
    const faqList =
        dbFaqs && dbFaqs.length > 0 ? dbFaqs : undefined;

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
                url: `${baseUrl}/events/${slug
                    .slice(0, index + 1)
                    .join("/")}`,
            }))
        ),

        // ✅ FAQ schema only if exists
        faqSchema(faqList, url),
    ].filter(Boolean)

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" },
        ...nodes.map((node, index) => ({
            label: node.title,
            href: `/events/${slug
                .slice(0, index + 1)
                .join("/")}`,
        })),
    ]

    return (
        <>
            <Schema
                data={schemaData}
                id={`schema-${slug.join("-")}`}
            />

            {depth === 1 && (
                <>
                    <EventSearch
                        breadcrumbItems={breadcrumbItems}
                        title={lastNode.title}
                    />
                    <EventCategories />
                    <CorporateEventServices />
                    <PortfolioCaseStudy />

                    {/* ✅ FAQ SAFE */}
                    <FAQ faqs={faqList} />

                    <ContactCTA />
                </>
            )}

            {depth === 2 && (
                <>
                    <EventSearch
                        breadcrumbItems={breadcrumbItems}
                        title={lastNode.title}
                    />
                    <EventCategories />
                    <ServiceTypes />
                    <ServiceEventTypeSolutions />
                    <ServiceTypePortfolioCaseStudy />

                    {/* ✅ FAQ SAFE */}
                    <FAQ faqs={faqList} />

                    <ContactCTA />
                </>
            )}

            {depth === 3 && (
                <>
                    <EventSearch
                        breadcrumbItems={breadcrumbItems}
                        title={lastNode.title}
                    />
                    <EventCategories />
                    <ServiceTypes />
                    <ServiceTypeCaseStudy />

                    {/* ✅ FAQ SAFE */}
                    <FAQ faqs={faqList} />

                    <ContactCTA />
                </>
            )}
        </>
    )
}
import { notFound } from "next/navigation"
import { services } from "@/app/data/services"
import { findEventPath } from "@/app/liv/findEventsPath"
import { generateSeo } from "@/app/liv/seo"
import { breadcrumbSchema, serviceSchema } from "@/app/liv/schema"
import Schema from "@/app/liv/components/Schema"

import { Event3DSlider } from "@/app/components/Events/Event3DSlider"
import { FAQSection } from "@/app/components/Events/FaqSection"
import { EventSearch } from "@/app/components/Events/Hero"
import Breadcrumb from "@/app/components/Common/Breadcum"

type PageProps = {
    params: Promise<{
        slug: string[]
    }>
}

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

/* ---------------------------------- */
/* ✅ STATIC GENERATION */
/* ---------------------------------- */

export const dynamicParams = false

// function getAllPaths(nodes: any[], parent: string[] = []): string[][] {
//     let paths: string[][] = []

//     for (const node of nodes) {
//         const current = [...parent, node.slug]

//         if (node.children?.length) {
//             paths = paths.concat(getAllPaths(node.children, current))
//         } else {
//             paths.push(current)
//         }
//     }

//     return paths
// }

function getAllPaths(nodes: any[], parent: string[] = []) {
    let paths: string[][] = []

    for (const node of nodes) {
        const current = [...parent, node.slug]

        // 🔥 PUSH EVERY LEVEL
        paths.push(current)

        if (node.children?.length) {
            paths = paths.concat(getAllPaths(node.children, current))
        }
    }

    return paths
}

export async function generateStaticParams() {
    const allPaths = getAllPaths(services)
    return allPaths.map(slug => ({ slug }))
}

/* ---------------------------------- */
/* ✅ METADATA */
/* ---------------------------------- */

export async function generateMetadata({ params }: PageProps) {
    const resolvedParams = await params
    const result = findEventPath(resolvedParams.slug)

    if (!result) return {}

    const { nodes } = result
    const lastNode = nodes[nodes.length - 1]

    const url = `${baseUrl}/events/${resolvedParams.slug.join("/")}`

    return generateSeo({
        title: `${lastNode.title} | ${nodes[0].title}`,
        description: `Premium ${lastNode.title} services`,
        url,
        type: "service",
    })
}

/* ---------------------------------- */
/* ✅ PAGE COMPONENT */
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
    ]

    return (
        <>
            <Schema
                data={schemaData}
                id={`schema-${slug.join("-")}`}
            />

            <section className="py-28 mt-16 bg-black text-white text-center">
                <h1 className="text-5xl font-bold">
                    {lastNode.title}
                </h1>

                {/* <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                    {nodes.map(n => n.title).join(" → ")}
                </p> */}

                <Breadcrumb
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Events", href: "/events" },

                        ...nodes.map((node, index) => ({
                            label: node.title,
                            href: `/events/${slug.slice(0, index + 1).join("/")}`,
                        })),
                    ]}
                />

            </section>

            {depth === 1 && (
                <>
                    <EventSearch />
                    <Event3DSlider />
                    <FAQSection />
                </>
            )}

            {depth === 2 && (
                <>
                    <Event3DSlider />
                    <FAQSection />
                </>
            )}

            {depth === 3 && (
                <>
                    <EventSearch />
                    <Event3DSlider />
                    <FAQSection />
                </>
            )}
        </>
    )
}
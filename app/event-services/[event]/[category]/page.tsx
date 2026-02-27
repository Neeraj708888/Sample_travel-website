import Schema from "@/app/liv/components/Schema"
import { breadcrumbSchema, serviceSchema } from "@/app/liv/schema"
import { generateSeo } from "@/app/liv/seo"

type PageProps = {
    params: Promise<{
        event: string
        category: string
    }>
}

const format = (str: string) =>
    str.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())

export async function generateMetadata({ params }: PageProps) {
    const { event, category } = await params

    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

    const url = `${baseUrl}/event-services/${event}/${category}`

    return generateSeo({
        title: `${format(category)} ${format(event)} Services in Delhi`,
        description: `Premium ${format(category)} services for ${format(event)}. Luxury execution with professional event management.`,
        url,
    })
}

export default async function CategoryPage({ params }: PageProps) {
    const { event, category } = await params

    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

    const url = `${baseUrl}/event-services/${event}/${category}`

    const formattedEvent = format(event)
    const formattedCategory = format(category)

    const schemaData = [
        serviceSchema({
            name: `${formattedCategory} ${formattedEvent}`,
            description: `Professional ${formattedCategory} services for ${formattedEvent}.`,
            url,
            serviceType: formattedCategory,
        }),
        breadcrumbSchema([
            { name: "Home", url: baseUrl },
            { name: "Events", url: `${baseUrl}/event-services` },
            { name: formattedEvent, url: `${baseUrl}/event-services/${event}` },
            { name: formattedCategory, url },
        ]),
    ]

    return (
        <>
            <section className="py-28 mt-16 bg-black text-white text-center">
                <h1 className="text-5xl font-bold capitalize">
                    {formattedCategory} for {formattedEvent}
                </h1>
                <p className="mt-6 text-lg text-gray-300">
                    Premium {formattedCategory} services designed for {formattedEvent}.
                </p>
            </section>

            <Schema data={schemaData} id="category-schema" />
        </>
    )
}

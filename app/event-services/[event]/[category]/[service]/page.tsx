import Schema from "@/app/liv/components/Schema"
import { breadcrumbSchema, serviceSchema } from "@/app/liv/schema"
import { generateSeo } from "@/app/liv/seo"


type PageProps = {
    params: Promise<{
        event: string
        category: string
        service: string
    }>
}

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"

const format = (str: string) =>
    str.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())

export async function generateMetadata({ params }: PageProps) {
    const { event, category, service } = await params;

    const formattedEvent = format(event)
    const formattedCategory = format(category)
    const formattedService = format(service)

    const url = `${baseUrl}/events/${event}/${category}/${service}`

    return generateSeo({
        title: `${formattedService} | ${formattedCategory} ${formattedEvent} Services in India`,
        description: `Premium ${formattedService} services under ${formattedCategory} ${formattedEvent} planning in India. Luxury execution with expert management.`,
        url,
    })
}

export default async function ServicePage({ params }: PageProps) {
    const { event, category, service } = await params;

    const formattedEvent = format(event)
    const formattedCategory = format(category)
    const formattedService = format(service)

    const pageUrl = `${baseUrl}/events/${event}/${category}/${service}`

    const schemaData = [
        serviceSchema({
            name: formattedService,
            description: `Professional ${formattedService} services for ${formattedCategory} ${formattedEvent}.`,
            url: pageUrl,
            serviceType: formattedCategory,
        }),
        breadcrumbSchema([
            { name: "Home", url: baseUrl },
            { name: "Events", url: `${baseUrl}/events` },
            { name: formattedEvent, url: `${baseUrl}/events/${event}` },
            {
                name: formattedCategory,
                url: `${baseUrl}/events/${event}/${category}`,
            },
            { name: formattedService, url: pageUrl },
        ]),
    ]

    return (
        <>
            <section className="py-28 mt-16 bg-black text-white text-center">
                <h1 className="text-5xl font-bold capitalize">
                    {formattedService}
                </h1>

                <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                    Expert {formattedService} services for {formattedCategory}{" "}
                    {formattedEvent}. Delivering premium event experiences
                    across India.
                </p>
            </section>

            <Schema data={schemaData} id={`service-schema-${service}`} />
        </>
    )
}

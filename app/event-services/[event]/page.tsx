import Schema from "@/app/liv/components/Schema"
import { breadcrumbSchema } from "@/app/liv/schema"
import { generateSeo } from "@/app/liv/seo"
import { notFound } from "next/navigation"

type PageProps = {
    params: Promise<{ event: string }> | { event: string }
}

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"

const events = ["wedding", "corporate", "birthday"]

const format = (str: string) =>
    str.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())

export async function generateMetadata({ params }: PageProps) {
    const { event } = await params
    if (!events.includes(event)) return {}

    const formattedEvent = format(event)

    return generateSeo({
        title: `${formattedEvent} Event Management in Delhi`,
        description: `Luxury ${formattedEvent} event planners in India. Professional planning, premium execution and unforgettable experiences.`,
        url: `${baseUrl}/event-services/${event}`,
    })
}

export default async function EventPage({ params }: PageProps) {
    const { event } = await params;
    if (!events.includes(event)) notFound()

    const formattedEvent = format(event)
    const pageUrl = `${baseUrl}/event-services/${event}`

    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "Event",
            "@id": `${pageUrl}#event`,
            name: `${formattedEvent} Event Management`,
            description: `Professional ${formattedEvent} event planning services in Delhi.`,
            eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
                "@type": "Country",
                name: "India",
            },
            organizer: {
                "@type": "Organization",
                name: "Your Company Name",
                url: baseUrl,
            },
        },
        breadcrumbSchema([
            { name: "Home", url: baseUrl },
            { name: "Events", url: `${baseUrl}/events` },
            { name: formattedEvent, url: pageUrl },
        ]),
    ]

    return (
        <>
            <section className="py-28 mt-16 bg-black text-white text-center">
                <h1 className="text-5xl font-bold capitalize">
                    {formattedEvent}
                </h1>

                <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                    Premium {formattedEvent} event management services
                    delivering luxury experiences across India.
                </p>
            </section>

            <Schema data={schemaData} id={`event-schema-${event}`} />
        </>
    )
}

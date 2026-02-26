// lib/schema.ts

const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"

// Organization Schema
export function organizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "www.eventmanagement.co.in",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        sameAs: [
            "https://instagram.com/yourprofile",
            "https://facebook.com/yourprofile",
            "https://linkedin.com/company/yourprofile",
        ],
        areaServed: {
            "@type": "State",
            name: "Delhi",
        },
    }
}

// Service Schema
export function serviceSchema({
    name,
    description,
    url,
    serviceType,
}: {
    name: string
    description: string
    url: string
    serviceType?: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description,
        serviceType,
        url,
        inLanguage: "en-IN",
        areaServed: {
            "@type": "Country",
            name: "India",
        },
        provider: {
            "@id": `${baseUrl}/#organization`,
        },
        offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url,
        },
    }
}

export function breadcrumbSchema(
    items: { name: string; url: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${items[items.length - 1].url}#breadcrumb`,
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}

// FAQ Schema Generator
export function faqSchema(
    faqs: { question: string; answer: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }
}

// Local Business Schema (Professional Service)
export function localBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${baseUrl}#localbusiness`,
        name: "Your Company Name",
        image: `${baseUrl}/logo.png`,
        url: baseUrl,
        telephone: "+91-9999999999",
        priceRange: "₹₹₹",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Your Street Address",
            addressLocality: "Delhi",
            addressRegion: "DL",
            postalCode: "110001",
            addressCountry: "IN",
        },
        areaServed: {
            "@type": "Country",
            name: "India",
        },
        sameAs: [
            "https://instagram.com/yourprofile",
            "https://facebook.com/yourprofile",
        ],
    }
}
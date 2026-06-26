// // lib/schema.ts

// import {
//     Organization,
//     LocalBusiness,
//     BreadcrumbList,
//     Service,
//     FAQPage,
//     WithContext,
//     Article,
//     Person,
// } from "schema-dts"

// const baseUrl: string =
//     process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"

// /* =====================================================
//    ORGANIZATION SCHEMA
// ===================================================== */
// export function organizationSchema(
//     url: string = baseUrl
// ): WithContext<Organization> {
//     return {
//         "@context": "https://schema.org",
//         "@type": "Organization",
//         "@id": `${url}/#organization`,
//         name: "Event Management Pvt Ltd",
//         url,
//         logo: `${url}/logo.png`,
//         description:
//             "Premium Event Management Company in Delhi providing corporate, wedding and social event planning services.",
//         foundingDate: "2018",
//         contactPoint: {
//             "@type": "ContactPoint",
//             telephone: "+91-9355056666",
//             contactType: "customer support",
//             areaServed: "IN",
//             availableLanguage: ["English", "Hindi"],
//         },
//         sameAs: [
//             "https://instagram.com/yourprofile",
//             "https://facebook.com/yourprofile",
//             "https://linkedin.com/company/yourprofile",
//         ],
//     }
// }

// /* =====================================================
//    LOCAL BUSINESS SCHEMA
// ===================================================== */
// export function localBusinessSchema(
//     url: string = baseUrl
// ): WithContext<LocalBusiness> {
//     return {
//         "@context": "https://schema.org",
//         "@type": "LocalBusiness",

//         // 👇 This tells Google you're event company
//         additionalType: "https://schema.org/EventPlanning",

//         "@id": `${url}/#localbusiness`,
//         name: "Event Management Pvt Ltd",
//         image: `${url}/office.jpg`,
//         url,
//         telephone: "+91-9355056666",
//         priceRange: "₹₹₹",

//         address: {
//             "@type": "PostalAddress",
//             streetAddress: "Burari",
//             addressLocality: "New Delhi",
//             addressRegion: "DL",
//             postalCode: "110084",
//             addressCountry: "IN",
//         },

//         geo: {
//             "@type": "GeoCoordinates",
//             latitude: 28.6139,
//             longitude: 77.209,
//         },

//         openingHoursSpecification: [
//             {
//                 "@type": "OpeningHoursSpecification",
//                 dayOfWeek: [
//                     "Monday",
//                     "Tuesday",
//                     "Wednesday",
//                     "Thursday",
//                     "Friday",
//                     "Saturday",
//                 ],
//                 opens: "09:00",
//                 closes: "18:00",
//             },
//         ],
//     }
// }

// /* =====================================================
//    SERVICE SCHEMA
// ===================================================== */
// interface ServiceSchemaParams {
//     name: string
//     description: string
//     url: string
//     serviceType?: string
// }

// export function serviceSchema({
//     name,
//     description,
//     url,
//     serviceType,
// }: ServiceSchemaParams): WithContext<Service> {

//     return {
//         "@context": "https://schema.org",
//         "@type": "Service",
//         "@id": `${url}#service`,
//         name,
//         description,
//         serviceType,
//         url,

//         areaServed: {
//             "@type": "Country",
//             name: "India",
//         },

//         provider: {
//             "@type": "Organization",
//             "@id": `${baseUrl}/#organization`,
//         },

//         offers: {
//             "@type": "Offer",
//             url,
//             priceCurrency: "INR",
//             availability: "https://schema.org/InStock",
//         },
//     }
// }
// /* =====================================================
//    BREADCRUMB SCHEMA
// ===================================================== */
// interface BreadcrumbItem {
//     name: string
//     url: string
// }

// export function breadcrumbSchema(
//     items: BreadcrumbItem[]
// ): WithContext<BreadcrumbList> {
//     return {
//         "@context": "https://schema.org",
//         "@type": "BreadcrumbList",
//         "@id": `${items[items.length - 1]?.url}#breadcrumb`,
//         itemListElement: items.map((item, index) => ({
//             "@type": "ListItem",
//             position: index + 1,
//             name: item.name,
//             item: item.url,
//         })),
//     }
// }

// /* =====================================================
//    FAQ SCHEMA
// ===================================================== */

// interface FAQItem {
//     question: string
//     answer: string
// }

// export function faqSchema(
//     faqs?: FAQItem[],
//     url?: string
// ): WithContext<FAQPage> | null {

//     if (!faqs || faqs.length === 0) return null

//     const pageUrl = (url || baseUrl).replace(/\/$/, "")

//     const validFaqs = faqs.filter(
//         (f) => f.question?.trim() && f.answer?.trim()
//     )

//     if (validFaqs.length === 0) return null

//     return {
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         "@id": `${pageUrl}#faq`,
//         mainEntity: validFaqs.map((faq) => ({
//             "@type": "Question",
//             name: faq.question,
//             acceptedAnswer: {
//                 "@type": "Answer",
//                 text: faq.answer,
//             },
//         })),
//     }
// }

// interface ArticleSchemaParams {
//     title: string
//     description: string
//     slug: string
//     image: string
//     datePublished: string
//     dateModified?: string
//     authorName: string
// }

// export function articleSchema({
//     title,
//     description,
//     slug,
//     image,
//     datePublished,
//     dateModified,
//     authorName,
// }: ArticleSchemaParams): WithContext<Article> {
//     return {
//         "@context": "https://schema.org",
//         "@type": "Article",
//         "@id": `${baseUrl}/blog/${slug}#article`,
//         headline: title,
//         description,
//         image: [`${baseUrl}${image}`],
//         datePublished,
//         dateModified: dateModified || datePublished,
//         mainEntityOfPage: {
//             "@type": "WebPage",
//             "@id": `${baseUrl}/blog/${slug}`,
//         },
//         author: {
//             "@type": "Person",
//             name: authorName,
//         } as Person,
//         publisher: {
//             "@type": "Organization",
//             "@id": `${baseUrl}/#organization`,
//         } as Organization,
//         inLanguage: "en-IN",
//     }
// }

// export function blogBreadcrumbSchema(
//     title: string,
//     slug: string
// ): WithContext<BreadcrumbList> {
//     return {
//         "@context": "https://schema.org",
//         "@type": "BreadcrumbList",
//         "@id": `${baseUrl}/blog/${slug}#breadcrumb`,
//         itemListElement: [
//             {
//                 "@type": "ListItem",
//                 position: 1,
//                 name: "Home",
//                 item: baseUrl,
//             },
//             {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "Blog",
//                 item: `${baseUrl}/blog`,
//             },
//             {
//                 "@type": "ListItem",
//                 position: 3,
//                 name: title, // real DB title
//                 item: `${baseUrl}/blog/${slug}`,
//             },
//         ],
//     }
// }




// lib/schema.ts

import {
    Organization,
    LocalBusiness,
    BreadcrumbList,
    Service,
    FAQPage,
    WithContext,
    Article,
    Person,
} from "schema-dts"

const baseUrl: string =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

/* =====================================================
   ORGANIZATION SCHEMA
===================================================== */
export function organizationSchema(): WithContext<Organization> {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Ananta Hospitality",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description:
            "Leading event management company in Delhi offering corporate events, weddings, exhibitions and brand promotions.",
        foundingDate: "2010",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9355056666",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
            "https://instagram.com/yourprofile",
            "https://facebook.com/yourprofile",
            "https://linkedin.com/company/yourprofile",
        ],
    }
}

/* =====================================================
   LOCAL BUSINESS SCHEMA
===================================================== */
export function localBusinessSchema(): WithContext<LocalBusiness> {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        additionalType: "https://schema.org/EventPlanning",
        "@id": `${baseUrl}/#localbusiness`,
        name: "Ananta Hospitality",
        image: `${baseUrl}/office.jpg`,
        url: baseUrl,
        telephone: "+91-9355056666",
        priceRange: "₹₹₹",

        address: {
            "@type": "PostalAddress",
            streetAddress: "Burari",
            addressLocality: "New Delhi",
            addressRegion: "DL",
            postalCode: "110084",
            addressCountry: "IN",
        },

        geo: {
            "@type": "GeoCoordinates",
            latitude: 28.6139,
            longitude: 77.209,
        },
    }
}

/* =====================================================
   SERVICE SCHEMA (Dynamic pages 🔥)
===================================================== */
interface ServiceSchemaParams {
    name: string
    description: string
    url: string
}

export function serviceSchema({
    name,
    description,
    url,
}: ServiceSchemaParams): WithContext<Service> {

    const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`

    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${fullUrl}#service`,
        name,
        description,
        url: fullUrl,

        provider: {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
        },

        areaServed: {
            "@type": "Country",
            name: "India",
        },
    }
}

/* =====================================================
   BREADCRUMB SCHEMA (Dynamic from UI 🔥)
===================================================== */
interface BreadcrumbItem {
    name: string
    url: string
}

export function breadcrumbSchema(
    items: BreadcrumbItem[]
): WithContext<BreadcrumbList> {

    if (!items || items.length === 0) {
        throw new Error("Breadcrumb requires at least 1 item")
    }

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${items[items.length - 1].url}#breadcrumb`,
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url.startsWith("http")
                ? item.url
                : `${baseUrl}${item.url}`,
        })),
    }
}

/* =====================================================
   FAQ SCHEMA (AI driven 🔥)
===================================================== */
interface FAQItem {
    question: string
    answer: string
}

export function faqSchema(
    faqs?: FAQItem[],
    url?: string
): WithContext<FAQPage> | null {

    if (!faqs || faqs.length !== 6) return null   // ✅ strict rule

    const pageUrl = (url || baseUrl).replace(/\/$/, "")

    const validFaqs = faqs.filter(
        (f) => f.question?.trim() && f.answer?.trim()
    )

    if (validFaqs.length === 0) return null

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: validFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }
}

/* =====================================================
   ARTICLE SCHEMA (Blog)
===================================================== */
interface ArticleSchemaParams {
    title: string
    description: string
    slug: string
    image: string
    datePublished: string
    dateModified?: string
    authorName: string
}

export function articleSchema({
    title,
    description,
    slug,
    image,
    datePublished,
    dateModified,
    authorName,
}: ArticleSchemaParams): WithContext<Article> {

    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${baseUrl}/blog/${slug}#article`,
        headline: title,
        description,
        image: [`${baseUrl}${image}`],
        datePublished,
        dateModified: dateModified || datePublished,

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${slug}`,
        },

        author: {
            "@type": "Person",
            name: authorName,
        } as Person,

        publisher: {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
        } as Organization,

        inLanguage: "en-IN",
    }
}
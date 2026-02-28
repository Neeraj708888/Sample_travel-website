// // components/Schema.tsx

// type SchemaProps = {
//     data: Record<string, any> | Record<string, any>[]
//     id?: string
// }

// export default function Schema({ data, id }: SchemaProps) {
//     if (!data) return null

//     const jsonLd = JSON.stringify(data).replace(/</g, "\\u003c")

//     return (
//         <script
//             id={id}
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{ __html: jsonLd }}
//         />
//     )
// }


// Reusable Schema

type SchemaProps = {
    data?: Record<string, any> | Record<string, any>[]
    id?: string
}

export default function Schema({ data, id }: SchemaProps) {
    if (!data || (Array.isArray(data) && data.length === 0)) return null

    const cleanData = Array.isArray(data)
        ? data.filter(Boolean)
        : data

    const jsonLd = JSON.stringify(cleanData).replace(/</g, "\\u003c")

    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
    )
}


// Use in pages
// const schemaData = [
//   serviceSchema(...),
//   breadcrumbSchema(...),
//   faqSchema(...)
// ]

// <Schema data={schemaData} id="service-page-schema" />
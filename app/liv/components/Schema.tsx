// // Reusable Schema

// type SchemaProps = {
//     data?: Record<string, any> | Record<string, any>[]
//     id?: string
// }

// export default function Schema({ data, id }: SchemaProps) {
//     // Check Points
//     if (!data || (Array.isArray(data) && data.length === 0)) return null

//     const cleanData = Array.isArray(data)
//         ? data.filter(Boolean)
//         : [data]

//     const jsonLd = JSON.stringify(cleanData).replace(/</g, "\\u003c")

//     return (
//         <script
//             id={id ?? "json-ld-schema"}
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{ __html: jsonLd }}
//         />
//     )
// }


"use client";

type SchemaData = Record<string, any>;

type SchemaProps = {
    data?: SchemaData | SchemaData[];
    id?: string;
};

export default function Schema({ data, id }: SchemaProps) {

    // =========================
    // ✅ GUARD CLAUSE
    // =========================
    if (!data || (Array.isArray(data) && data.length === 0)) return null;

    // =========================
    // ✅ NORMALIZE DATA
    // =========================
    const cleanData: SchemaData[] = Array.isArray(data)
        ? data.filter(Boolean)
        : [data];

    // =========================
    // ✅ SECURITY (XSS SAFE 🔥)
    // =========================
    const jsonLd = JSON.stringify(cleanData)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026");

    // =========================
    // ✅ UNIQUE ID (important for multiple schemas)
    // =========================
    const scriptId = id ?? `json-ld-${Math.random().toString(36).slice(2)}`;

    return (
        <script
            id={scriptId}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
    );
}

// Use in pages
// const schemaData = [
//   serviceSchema(...),
//   breadcrumbSchema(...),
//   faqSchema(...)
// ]

// <Schema data={schemaData} id="service-page-schema" />
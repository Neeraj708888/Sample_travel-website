// components/Schema.tsx

type SchemaProps = {
    data: Record<string, any> | Record<string, any>[]
    id?: string
}

export default function Schema({ data, id }: SchemaProps) {
    if (!data) return null

    const jsonLd = JSON.stringify(data).replace(/</g, "\\u003c")

    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
    )
}

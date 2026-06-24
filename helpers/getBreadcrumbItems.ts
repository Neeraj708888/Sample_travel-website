type BreadcrumbNode = {
    title: string
    slug: string
}

export function getBreadcrumbItems(
    slug: string[],
    nodes: BreadcrumbNode[]
) {

    const items = [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" }
    ]

    slug.forEach((segment, index) => {

        const node = nodes[index]

        if (!node) return

        items.push({
            label: node.title,
            href: `/events/${slug.slice(0, index + 1).join("/")}`
        })
    })

    return items
}
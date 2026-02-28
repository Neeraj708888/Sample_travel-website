export function getBreadcrumbItems(
    slug: string[],
    nodes: { title: string; slug: string }[]
) {
    const items = [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" },
    ]

    slug.forEach((_, index) => {
        items.push({
            label: nodes[index].title,
            href: `/events/${slug.slice(0, index + 1).join("/")}`,
        })
    })

    return items
}
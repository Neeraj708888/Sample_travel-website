"use client"

import Image from "next/image"
import { useParams, usePathname } from "next/navigation"
import { services, ServiceNode } from "@/app/data/services"
import { solutions } from "@/app/data/solution"
import CategoryCard from "./CategoryCard"
import { findNodeByPath } from "../Services/servicesUtils"
import { useEffect, useState } from "react"

interface PageData {
    description?: string
    meta_description?: string
    [key: string]: any
}

interface Props {
    page?: PageData | null
    pagesMap?: Record<string, any>
    cards?: { cardType: string; slug: string; desc?: string }[]
}

export default function EventCategories({ page, pagesMap = {}, cards = [] }: Props) {

    const params = useParams()
    const pathname = usePathname()  // ✅ Route detect karo

    // ✅ Hydration fix — client side ready hone tak wait karo
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const slug = (params?.slug ?? []) as string[]

    // ✅ Route ke hisaab se tree aur basePath decide karo
    const isSolutions = pathname?.startsWith("/solutions")
    const tree = isSolutions ? solutions : services
    const baseRoute = isSolutions ? "solutions" : "events"

    // ✅ Dono trees mein node dhundho
    const node: ServiceNode | null = findNodeByPath(tree, slug)
    const parentSlug = slug.slice(0, -1)
    const parentNode: ServiceNode | null = findNodeByPath(tree, parentSlug)

    const isLeaf = slug.length > 0 && (!node?.children || node.children.length === 0)

    const categories: ServiceNode[] =
        slug.length === 0
            ? tree
            : node?.children?.length
                ? node.children
                : parentNode?.children ?? tree

    const basePath = slug.length ? `/${baseRoute}/${slug.join("/")}` : `/${baseRoute}`

    // ✅ Content ek baar parse karo
    let parsedContent: any = {}

    try {
        parsedContent =
            typeof page?.content === "string"
                ? JSON.parse(page.content)
                : page?.content
    } catch {
        parsedContent = {}
    }

    const eventTypeShortDesc = parsedContent?.eventType?.shortDesc
        || "Discover curated experiences and premium event services."

    // ✅ Leaf Node UI
    if (isLeaf) {
        return (
            <section className="py-16 bg-neutral-950 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl font-bold leading-tight">
                                {node?.title}
                            </h2>
                            {page?.description && (
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {page.description}
                                </p>
                            )}
                            {!page?.description && page?.meta_description && (
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {page.meta_description}
                                </p>
                            )}
                        </div>
                        {node?.image && (
                            <div className="flex-1 w-full aspect-video relative rounded-2xl overflow-hidden">
                                <Image src={node.image} alt={node.title} fill sizes="" className="object-cover" />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )
    }

    // ✅ Normal Category Cards UI
    return (
        <section className="py-16 bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-12">
                    <h2 className="text-4xl text-center md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        {node?.title
                            ? `${node.title} Types We Manage`
                            : "Event Types We Manage"
                        }
                    </h2>
                    {/* ✅ DB se shortDesc */}
                    <p className="text-gray-400 mt-2 text-xl max-w-7xl text-center">
                        {eventTypeShortDesc}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards?.length > 0
                        ? cards.map((card) => {
                            // ✅ Current tree se fullNode lo
                            const fullNode = categories.find(c => c.slug === card.slug)
                            return (
                                <CategoryCard
                                    key={card.slug}
                                    category={fullNode ?? {
                                        id: card.slug,
                                        slug: card.slug,
                                        title: (card as any).cardType || (card as any).title
                                    } as ServiceNode}
                                    basePath={basePath}
                                    description={
                                        card.desc ||
                                        (card as any).description ||
                                        ""
                                    }
                                />
                            )
                        })
                        : categories.map((category: ServiceNode) => {
                            // ✅ DB slug bhi route ke hisaab se
                            const childDbSlug = `${baseRoute}/${[...slug, category.slug].join("/")}`
                            const childPage = pagesMap[childDbSlug]
                            return (
                                <CategoryCard
                                    key={category.slug}
                                    category={category}
                                    basePath={basePath}
                                    page={childPage}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}
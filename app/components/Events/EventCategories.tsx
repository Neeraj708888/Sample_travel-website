"use client";

import Image from "next/image"
import { useParams, usePathname } from "next/navigation"
import { services, ServiceNode } from "@/app/data/services"
import { solutions } from "@/app/data/solution"
import CategoryCard from "./CategoryCard"
import { findNodeFullPath, hasChildren } from "@/app/liv/utils/treeHelper";



/* =========================
   TYPES
========================= */

interface PageData {
    content?: any
    description?: string
    meta_description?: string
}

type CardItem = {
    title: string
    slug: string
    desc?: string
}

interface Props {
    page?: PageData | null
    pagesMap?: Record<string, any>
    cards?: CardItem[]
}

/* =========================
   COMPONENT
========================= */

export default function EventCategories({
    page,
    pagesMap = {},
    cards = [],
}: Props) {

    const params = useParams()
    const pathname = usePathname()

    const slug = (params?.slug ?? []) as string[]

    /* =========================
       ✅ ROUTE DETECT
    ========================= */

    const isSolutions = pathname?.startsWith("/solutions")

    const tree = isSolutions ? solutions : services
    const baseRoute = isSolutions ? "solutions" : "events"

    /* =========================
       ✅ TREE CONTEXT (NEW 🔥)
    ========================= */

    const fullPath = findNodeFullPath(tree, slug)

    const node = fullPath?.[fullPath.length - 1] || null
    const parentNode = fullPath?.[fullPath.length - 2] || null

    const isLeaf = slug.length > 0 && !hasChildren(node)

    const categories: ServiceNode[] =
        slug.length === 0
            ? tree
            : hasChildren(node)
                ? node!.children
                : parentNode?.children ?? tree

    // const basePath = slug.length
    //     ? `/${baseRoute}/${slug.join("/")}`
    //     : `/${baseRoute}`

    const resolvedPath = fullPath?.map((n: any) => n.slug) || []

    const basePath = resolvedPath.length
        ? `/${baseRoute}/${resolvedPath.join("/")}`
        : `/${baseRoute}`

    // Helper: find full node path from tree
    function getFullPathForSlug(cardSlug: string): string {

        // 1. direct child
        const directChild = categories.find(c => c.slug === cardSlug)

        if (directChild) {
            return `/${baseRoute}/${[...resolvedPath, cardSlug].join("/")}`
        }

        // 2. full path from tree
        const cardFullPath = findNodeFullPath(tree, [...resolvedPath, cardSlug])

        if (cardFullPath && cardFullPath.length > 0) {
            const pathSlugs = cardFullPath.map((n: any) => n.slug)
            return `/${baseRoute}/${pathSlugs.join("/")}`
        }

        // 3. fallback
        return `${basePath}/${cardSlug}`
    }

    /* =========================
       ✅ CONTENT PARSE
    ========================= */

    let parsedContent: any = {}

    try {
        parsedContent =
            typeof page?.content === "string"
                ? JSON.parse(page.content)
                : page?.content ?? {}
    } catch {
        parsedContent = {}
    }

    const shortDesc =
        parsedContent?.eventType?.shortDesc ||
        parsedContent?.eventSolution?.shortDesc ||
        "Discover curated experiences and premium event services."

    /* =========================
       ✅ LEAF UI
    ========================= */

    if (isLeaf && node) {
        return (
            <section className="py-16 bg-neutral-950 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">

                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl font-bold leading-tight">
                                {node.title}
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                {page?.description ||
                                    page?.meta_description ||
                                    "Professional services tailored for exceptional experiences."}
                            </p>
                        </div>

                        {node.image && (
                            <div className="flex-1 w-full aspect-video relative rounded-2xl overflow-hidden">
                                <Image
                                    src={node.image}
                                    alt={node.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                    </div>
                </div>
            </section>
        )
    }

    /* =========================
       ✅ GRID UI
    ========================= */

    return (
        <section className="py-16 bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="mb-12">
                    <h2 className="text-4xl text-center md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        {node?.title
                            ? `${node.title} Types We Manage`
                            : isSolutions
                                ? "Event Solutions We Provide"
                                : "Event Types We Manage"}
                    </h2>

                    <p className="text-gray-400 mt-2 text-xl max-w-4xl mx-auto text-center">
                        {shortDesc}
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* ✅ AI CARDS */}
                    {cards?.length > 0
                        ? cards.map((card) => {

                            const fullNode = categories.find(
                                (c) => c.slug === card.slug
                            )

                            return (
                                <CategoryCard
                                    key={card.slug}
                                    category={
                                        fullNode ?? {
                                            id: card.slug,
                                            slug: card.slug,
                                            title: card.title,
                                        } as ServiceNode
                                    }
                                    // basePath={basePath}
                                    href={getFullPathForSlug(card.slug)}
                                    description={card.desc || ""}
                                />
                            )
                        })

                        /* ✅ FALLBACK */
                        : categories.map((category) => {

                            const childDbSlug = `${baseRoute}/${[
                                ...slug,
                                category.slug,
                            ].join("/")}`

                            const childPage = pagesMap[childDbSlug]

                            return (
                                <CategoryCard
                                    key={category.slug}
                                    category={category}
                                    // basePath={basePath}
                                    href={getFullPathForSlug(category.slug)}
                                    page={childPage}
                                />
                            )
                        })}

                </div>
            </div>
        </section>
    )
}
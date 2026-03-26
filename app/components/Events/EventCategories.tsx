"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import { services, ServiceNode } from "@/app/data/services"
import CategoryCard from "./CategoryCard"
import { findNodeByPath } from "../Services/servicesUtils"

interface PageData {
    description?: string
    meta_description?: string
    [key: string]: any
}

interface Props {
    page?: PageData | null
}

export default function EventCategories({ page }: Props) {

    const params = useParams()
    const slug = (params?.slug ?? []) as string[]

    const node: ServiceNode | null = findNodeByPath(services, slug)
    const parentSlug = slug.slice(0, -1)
    const parentNode: ServiceNode | null = findNodeByPath(services, parentSlug)

    const isLeaf = slug.length > 0 && (!node?.children || node.children.length === 0)

    const categories: ServiceNode[] =
        slug.length === 0
            ? services
            : node?.children?.length
                ? node.children
                : parentNode?.children ?? services

    const basePath = slug.length ? `/events/${slug.join("/")}` : "/events"

    // ✅ Leaf Node UI
    if (isLeaf) {
        return (
            <section className="py-16 bg-neutral-950 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-12 items-center">

                        {/* Left — Name + Description */}
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

                        {/* Right — Image */}
                        {node?.image && (
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

    // ✅ Normal Category Cards UI
    return (
        <section className="py-16 bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-12">
                    <h2 className="text-4xl font-bold">
                        {node?.title ?? "Explore Event Categories"}
                    </h2>
                    <p className="text-gray-400 mt-2 max-w-xl">
                        Discover curated experiences and premium event services.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category: ServiceNode) => (
                        <CategoryCard
                            key={category.slug}
                            category={category}
                            basePath={basePath}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
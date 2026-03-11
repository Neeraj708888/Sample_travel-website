"use client"

import { useParams } from "next/navigation"
import { services, ServiceNode } from "@/app/data/services"
import CategoryCard from "./CategoryCard"
import { findNodeByPath } from "../Services/servicesUtils"
import Breadcrumb from "../Common/Breadcum"

export default function EventCategories() {

    const params = useParams()

    // slug ko safe array banana
    const slug = (params?.slug ?? []) as string[]

    // current node
    const node: ServiceNode | null = findNodeByPath(services, slug)

    // children categories
    const categories: ServiceNode[] = node?.children ?? services

    // base path
    const basePath = slug.length ? `/events/${slug.join("/")}` : "/events"

    return (
        <section className="py-16 bg-neutral-950 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* <Breadcrumb slug={slug} /> */}

                {/* Heading */}
                <div className="mb-12">

                    <h1 className="text-4xl font-bold">
                        {node?.title ?? "Explore Event Categories"}
                    </h1>

                    <p className="text-gray-400 mt-2 max-w-xl">
                        Discover curated experiences and premium event services.
                    </p>

                </div>

                {/* Categories */}
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
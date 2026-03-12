"use client"

import Link from "next/link"
// import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ServiceNode } from "@/app/data/services"

interface CategoryCardProps {
    category: ServiceNode
    basePath: string
}

export default function CategoryCard({ category, basePath }: CategoryCardProps) {

    const href = `${basePath}/${category.slug}`

    return (
        <Link href={href} className="block group">

            <div className="relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-primary">

                {/* Gradient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-2xl transition duration-500" />

                {/* Icon */}
                {/* {category.icon && (
                    <div className="
          relative w-14 h-14 mb-5
          flex items-center justify-center
          rounded-xl bg-primary/10
          group-hover:scale-110
          transition-transform duration-300
          ">
                        <Image
                            // src={category.icon}
                            alt={category.title}
                            width={32}
                            height={32}
                        />
                    </div>
                )} */}

                {/* Title */}
                <h3 className="relative text-lg font-semibold text-white group-hover:text-primary transition">
                    {category.title}
                </h3>

                {/* Description */}
                {/* {category.description && (
                    <p className="relative text-sm text-gray-400 mt-2 line-clamp-2">
                        {category.description}
                    </p>
                )} */}

                {/* Navigation */}
                <div className="relative flex items-center gap-2 mt-5 text-primary font-medium text-sm">

                    Explore

                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />

                </div>

            </div>

        </Link>
    )
}
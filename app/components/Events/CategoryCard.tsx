"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
    FaHandshake,
    FaUsers,
    FaBriefcase,
    FaChalkboardTeacher
} from "react-icons/fa"

import { ServiceNode } from "@/app/data/services"

interface CategoryCardProps {
    category: ServiceNode
    basePath: string
}

// 🔥 Icon mapping (dynamic)
const iconMap: any = {
    corporate: FaHandshake,
    conference: FaUsers,
    seminar: FaChalkboardTeacher,
    business: FaBriefcase,
}

export default function CategoryCard({ category, basePath }: CategoryCardProps) {

    const href = `${basePath}/${category.slug}`

    // 👉 fallback icon
    const Icon =
        iconMap[category.slug?.split("-")[0]] || FaBriefcase

    return (
        <Link href={href} className="block group">

            <div className="relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-primary">

                {/* Gradient Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-2xl transition duration-500" />

                {/* 🔥 Icon + Title Center */}
                <div className="relative flex flex-col items-center text-center">

                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 text-white text-2xl shadow-lg group-hover:scale-110 transition duration-300">
                        <Icon size={28} />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-primary transition">
                        {category.title}
                    </h3>

                </div>

                {/* Description (Left aligned) */}
                {/* {category.description && (
                    <p className="mt-4 text-sm text-gray-400 text-left line-clamp-2">
                        {category.description}
                    </p>
                )} */}

                {/* 🔥 Bottom Row */}
                <div className="mt-6 flex items-center justify-between text-sm font-medium">

                    {/* Left Text */}
                    <span className="text-gray-400">
                        View Details about Corporate Event Planning
                    </span>
                </div>
                {/* Right Explore */}
                <div className="flex items-center float-end gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                    Explore
                    <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </div>

            </div>

        </Link>
    )
}
// "use client"

// import Link from "next/link"
// import { ArrowRight } from "lucide-react"
// import {
//     FaHandshake,
//     FaUsers,
//     FaBriefcase,
//     FaChalkboardTeacher
// } from "react-icons/fa"

// import { ServiceNode } from "@/app/data/services"

// interface CategoryCardProps {
//     category: ServiceNode
//     basePath: string
// }

// // 🔥 Icon mapping (dynamic)
// const iconMap: any = {
//     corporate: FaHandshake,
//     conference: FaUsers,
//     seminar: FaChalkboardTeacher,
//     business: FaBriefcase,
// }

// export default function CategoryCard({ category, basePath }: CategoryCardProps) {

//     const href = `${basePath}/${category.slug}`

//     // 👉 fallback icon
//     const Icon =
//         iconMap[category.slug?.split("-")[0]] || FaBriefcase

//     return (
//         <Link href={href} className="block group">

//             <div className="relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:border-primary">

//                 {/* Gradient Glow */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-2xl transition duration-500" />

//                 {/* 🔥 Icon + Title Center */}
//                 <div className="relative flex flex-col items-center text-center">

//                     <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 text-white text-2xl shadow-lg group-hover:scale-110 transition duration-300">
//                         <Icon size={28} />
//                     </div>

//                     <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-primary transition">
//                         {category.title}
//                     </h3>

//                 </div>

//                 {/* Description (Left aligned) */}
//                 {/* {category.description && (
//                     <p className="mt-4 text-sm text-gray-400 text-left line-clamp-2">
//                         {category.description}
//                     </p>
//                 )} */}

//                 {/* 🔥 Bottom Row */}
//                 <div className="mt-6 flex items-center justify-between text-sm font-medium">

//                     {/* Left Text */}
//                     <span className="text-gray-400">
//                         View Details about Corporate Event Planning
//                     </span>
//                 </div>
//                 {/* Right Explore */}
//                 <div className="flex items-center float-end gap-2 text-primary group-hover:gap-3 transition-all duration-300">
//                     Explore
//                     <ArrowRight
//                         size={16}
//                         className="transition-transform group-hover:translate-x-1"
//                     />
//                 </div>

//             </div>

//         </Link>
//     )
// }

"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { ServiceNode } from "@/app/data/services"
import { FaCalendarAlt } from "react-icons/fa"

interface CategoryCardProps {
    category: ServiceNode
    basePath: string
    pages?: any
}

export default function CategoryCard({
    category,
    basePath,
    pages = null
}: CategoryCardProps) {

    const href = `${basePath}/${category.slug}`

    // ✅ Safe page extraction (important fix)
    const pageData = pages?.page || pages || null

    console.log("FINAL PAGE DATA:", pageData)

    const Icon = category.icon ?? FaCalendarAlt

    return (
        <Link href={href} className="block group">
            <div
                className="relative overflow-hidden rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(212,175,55,0.4), rgba(255,255,255,0.05), rgba(212,175,55,0.2))"
                }}
            >
                <div className="relative rounded-2xl bg-teal-800 p-6 h-full flex flex-col gap-5 overflow-hidden">

                    {/* Hover shimmer */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                            background:
                                "radial-gradient(ellipse at top left, rgba(212,175,55,0.08) 0%, transparent 70%)"
                        }}
                    />

                    {/* Top */}
                    <div className="relative flex items-center justify-between">

                        {/* Image / Icon */}
                        {category.image ? (
                            <div className="w-12 h-12 rounded-xl overflow-hidden relative border border-yellow-400/30">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-[70px] h-[70px] rounded-4xl flex items-center justify-center bg-gradient-to-tr from-yellow-500/20 to-yellow-500/5 border border-yellow-400/30 text-yellow-400">
                                <Icon size={40} />
                            </div>
                        )}

                        {/* Arrow */}
                        <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 bg-yellow-400/10 border border-yellow-400/30">
                            <ArrowUpRight size={14} className="text-yellow-400" />
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <h3 className="text-white font-semibold text-base leading-snug group-hover:text-yellow-200 transition">
                            {category.title}
                        </h3>

                        <div className="mt-2 h-[1px] w-8 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-yellow-400 to-transparent" />
                    </div>

                    {/* ✅ Description FIXED */}
                    <p className="text-sm text-gray-400 leading-relaxed flex-1 line-clamp-2">
                        {pageData?.description ||
                            pageData?.meta_description ||
                            `Premium ${category.title.toLowerCase()} services tailored for exceptional event experiences.`}
                    </p>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between mt-4 text-xs uppercase tracking-wider">

                        <div className="flex items-center gap-2 text-yellow-400 font-medium group-hover:gap-3 transition-all">
                            Explore
                            <ArrowUpRight
                                size={13}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </Link>
    )
}
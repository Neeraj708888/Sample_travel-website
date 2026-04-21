import { notFound } from "next/navigation"
import { solutions, ServiceNode } from "@/app/data/solution"

import {
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/app/liv/schema"
import Schema from "@/app/liv/components/Schema"
import { getPageData } from "@/app/liv/pageData"

import { EventSearch } from "@/app/components/Events/Hero"
import EventCategories from "@/app/components/Events/EventCategories"
import { ContactCTA } from "@/app/components/Events/ContactCTA"
import FAQ from "@/app/components/Events/FAQ"
import { findSolutionPath } from "@/app/liv/solutionSlugFinder"

type PageProps = {
  params: Promise<{
    slug: string[]
  }>
}

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const dynamicParams = true
export { generateMetadata } from "./metadata"

type AICard = {
  slug: string
  desc?: string
}

/* =======================================
   🔹 FIND SOLUTION PATH
======================================= */
// function findSolutionPath(slugs: string[]): {
//   nodes: ServiceNode[]
//   current: ServiceNode
// } | null {
//   if (!slugs?.length) return null

//   const path: ServiceNode[] = []

//   function traverse(nodes: ServiceNode[], depth: number): boolean {
//     for (const node of nodes) {
//       if (node.slug === slugs[depth]) {
//         path.push(node)

//         if (depth === slugs.length - 1) return true

//         if (node.children && traverse(node.children, depth + 1)) return true

//         path.pop()
//       }
//     }
//     return false
//   }

//   if (!traverse(solutions, 0)) return null

//   return {
//     nodes: [...path],
//     current: path[path.length - 1],
//   }
// }

/* =======================================
   🔹 PAGE COMPONENT
======================================= */
export default async function SolutionSlugPage({ params }: PageProps) {

  const { slug } = await params

  const result = findSolutionPath(slug)
  if (!result) notFound()

  // const { nodes, current } = result
  const current = result.current
  const depth = slug.length

  const dbSlug = `solutions/${slug.join("/")}`
  const url = `${baseUrl}/solutions/${slug.join("/")}`

  /* =========================
        ✅ Breadcrumb Nodes
     ========================= */
  const breadcrumbNodes = slug.map((_, index) => {
    const r = findSolutionPath(slug.slice(0, index + 1))
    return r?.current
  }).filter(Boolean)

  /* =========================
     ✅ ONLY CURRENT PAGE FETCH 🔥
  ========================= */
  let page: any = null

  try {
    const data = await getPageData(dbSlug)
    page = data?.page
  } catch (error) {
    console.error("PAGE FETCH ERROR:", error)
  }

  /* =========================
     ✅ SAFE CONTENT PARSE
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

  const hero = parsedContent?.hero || {}

  const solutionCards: AICard[] =
    parsedContent?.eventSolution?.cards || []


  /* =========================
     ✅ AI MAP
  ========================= */
  const aiMap = new Map<string, AICard>(
    solutionCards.map((c) => [c.slug, c])
  )

  // const childrenNodes: ServiceNode[] = current.children || []
  const childrenNodes = current.children || []

  /* =========================
     ✅ FINAL CARDS (NO PREFETCH 🔥)
  ========================= */
  const finalCards =
    childrenNodes.length > 0
      ? childrenNodes.map((child: any) => {

        const aiCard = aiMap.get(child.slug)

        return {
          title: child.title,
          slug: child.slug,
          cardType: "service",
          desc:
            aiCard?.desc ||
            `${child.title} services in Delhi`,
        }
      })
      : []

  const faqList = page?.faqs || []

  /* =========================
     ✅ SCHEMA
  ========================= */
  const schemaData = [
    serviceSchema({
      name: page?.display_title || current.title,
      description:
        page?.meta_description ||
        `${current.title} services in Delhi`,
      url,
    }),
    breadcrumbSchema([
      { name: "Home", url: baseUrl },
      { name: "Solutions", url: `${baseUrl}/solutions` },
      ...breadcrumbNodes.map((node, index) => ({
        name: node.title,
        url: `${baseUrl}/solutions/${slug
          .slice(0, index + 1)
          .join("/")}`,
      })),
    ]),
    faqSchema(faqList, url),
  ].filter(Boolean)

  /* =========================
    ✅ Breadcrumb UI
 ========================= */
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    ...breadcrumbNodes.map((node, index) => ({
      label: node.title,
      href: `/solutions/${slug
        .slice(0, index + 1)
        .join("/")}`,
    })),
  ]

  return (
    <>
      <Schema data={schemaData} id={`schema-sol-${slug.join("-")}`} />

      <EventSearch
        breadcrumbItems={breadcrumbItems}
        title={page?.display_title || hero?.h1 || current.title}
        h2={hero?.h2 || ""}
        shortDesc={hero?.shortDesc || ""}
      />

      <EventCategories
        page={page}
        cards={finalCards} // 🔥 fixed
      />

      <FAQ faqs={faqList} />

      <ContactCTA />
    </>
  )
}
import { notFound } from "next/navigation"
import { solutions, ServiceNode } from "@/app/data/solution"
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/app/liv/schema"
import Schema from "@/app/liv/components/Schema"
import { getPageData } from "@/app/liv/pageData"

import { EventSearch } from "@/app/components/Events/Hero"
import EventCategories from "@/app/components/Events/EventCategories"
import { ContactCTA } from "@/app/components/Events/ContactCTA"
import FAQ from "@/app/components/Events/FAQ"

export { generateMetadata } from "./metadata"

type PageProps = {
  params: Promise<{
    slug: string[]
  }>
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const dynamic = "force-dynamic"
export const dynamicParams = true

/* ---------------------------------- */
/* ✅ Tree helper — solutions specific */
/* ---------------------------------- */

function findSolutionPath(slugs: string[]): { nodes: ServiceNode[]; current: ServiceNode } | null {
  if (!slugs?.length) return null
  const path: ServiceNode[] = []

  function traverse(nodes: ServiceNode[], depth: number): boolean {
    for (const node of nodes) {
      if (node.slug === slugs[depth]) {
        path.push(node)
        if (depth === slugs.length - 1) return true
        if (node.children && traverse(node.children, depth + 1)) return true
        path.pop()
      }
    }
    return false
  }

  if (!traverse(solutions, 0)) return null

  return {
    nodes: [...path],
    current: path[path.length - 1],   // ✅ current expose karo — lastNode ke liye
  }
}

/* ---------------------------------- */
/* ✅ PAGE COMPONENT                   */
/* ---------------------------------- */

export default async function SolutionSlugPage({ params }: PageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  // ✅ findSolutionPath use karo — findServicePath nahi (wo eventSlugFinder ka hai)
  const result = findSolutionPath(slug)
  if (!result) notFound()

  const { nodes, current } = result
  const depth = slug.length
  const url = `${baseUrl}/solutions/${slug.join("/")}`
  const dbSlug = `solutions/${slug.join("/")}`

  // ✅ Current page DB/AI call
  let page: any = null
  let dbFaqs: any[] = []

  try {
    const data = await getPageData(dbSlug)
    page = data?.page
    dbFaqs = data?.faqs || []
  } catch (error) {
    console.error("PAGE FETCH ERROR:", error)
  }

  if (!page) {
    console.warn("Page data missing, using fallback:", dbSlug)
  }

  // ✅ Content parse safely
  let parsedContent: any = {}
  try {
    parsedContent =
      typeof page?.content === "string"
        ? JSON.parse(page.content)
        : page?.content ?? {}
  } catch (e) {
    console.error("JSON PARSE ERROR:", e)
    parsedContent = {}
  }

  const hero = parsedContent?.hero || {}

  // ✅ FIXED: solutions page mein eventSolution.cards use karo — eventType nahi
  const solutionCards = parsedContent?.eventSolution?.cards || []

  const childrenNodes: ServiceNode[] = current.children || []

  // ✅ STEP 1: pagesMap PEHLE populate karo — finalCards se pehle
  const pagesMap: Record<string, any> = {}

  await Promise.all(
    childrenNodes.map(async (child) => {
      const childSlug = `${dbSlug}/${child.slug}`
      try {
        const data = await getPageData(childSlug)
        if (data?.page) pagesMap[childSlug] = data.page
      } catch {
        // ✅ Child fail hone pe parent crash nahi hoga
        console.warn("Child page fetch failed:", childSlug)
      }
    })
  )

  // ✅ STEP 2: finalCards BAAD mein banao — pagesMap ready hai ab
  let finalCards = solutionCards

  if (childrenNodes.length > 0) {
    finalCards = childrenNodes.map((child) => {
      const childSlug = `${dbSlug}/${child.slug}`
      const childPage = pagesMap[childSlug]

      const aiCard = solutionCards?.find(
        (card: any) => card.slug === child.slug
      )

      return {
        title: child.title,
        slug: child.slug,
        cardType: child.title,
        desc:
          aiCard?.desc ||
          childPage?.meta_description ||
          `${child.title} services in Delhi`,
      }
    })
  }

  const faqList = dbFaqs.length > 0 ? dbFaqs : undefined

  const schemaData = [
    serviceSchema({
      name: page?.display_title || current.title,
      description: `Professional ${current.title} services in Delhi.`,
      url,
      serviceType: page?.display_title || current.title,
    }),
    breadcrumbSchema(
      nodes.map((node, index) => ({
        name: node.title,
        url: `${baseUrl}/solutions/${slug.slice(0, index + 1).join("/")}`,
      }))
    ),
    faqSchema(faqList, url),
  ].filter(Boolean)

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    ...nodes.map((node, index) => ({
      label: node.title,
      href: `/solutions/${slug.slice(0, index + 1).join("/")}`,
    })),
  ]

  // ✅ Shared section — all depths same hai solutions mein
  const TopSection = (
    <>
      <EventSearch
        breadcrumbItems={breadcrumbItems}
        title={hero?.h1 || page?.display_title || current.title}  // ✅ priority: AI h1 > display_title > fallback
        h2={hero?.h2 || ""}
        shortDesc={hero?.shortDesc || ""}
      />
      <EventCategories
        page={page}
        pagesMap={pagesMap}
        cards={finalCards}
      />
    </>
  )

  return (
    <>
      <Schema data={schemaData} id={`schema-solutions-${slug.join("-")}`} />

      {/* ✅ depth >= 1: all solution depths same layout — collapsed from 5 identical blocks */}
      {depth >= 1 && (
        <>
          {TopSection}
          <FAQ faqs={faqList} />
          <ContactCTA />
        </>
      )}
    </>
  )
}
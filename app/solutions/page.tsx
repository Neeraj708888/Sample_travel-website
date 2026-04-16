import { generateSeo } from "../liv/seo"
import {
  breadcrumbSchema,
  localBusinessSchema,
  organizationSchema,
  faqSchema,
} from "../liv/schema"
import Schema from "../liv/components/Schema"

import { ContactCTA } from "../components/Events/ContactCTA"
import { EventSearch } from "../components/Events/Hero"
import EventCategories from "../components/Events/EventCategories"
import FAQ from "../components/Events/FAQ"

import { getPageData } from "../liv/pageData"
import { solutions } from "../data/solution"

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/* ---------------------------------- */
/* ✅ SEO Metadata (Dynamic 🔥)        */
/* ---------------------------------- */

export async function generateMetadata() {

  const data = await getPageData("solutions")
  const page = data?.page

  return generateSeo({
    title:
      page?.meta_title ||
      "Event Solutions Company in Delhi",
    description:
      page?.meta_description ||
      "Complete event solutions including planning, logistics, fabrication and execution services in Delhi.",
    url: `${baseUrl}/solutions`,
    type: "solution",
    breadcrumb: [
      { name: "Home", url: baseUrl },
      { name: "Solutions", url: `${baseUrl}/solutions` },
    ],
  })
}

/* ---------------------------------- */
/* ✅ Page Component                   */
/* ---------------------------------- */

export default async function SolutionsPage() {

  const url = `${baseUrl}/solutions`

  let page: any = null

  try {
    const data = await getPageData("solutions")
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

  /* =========================
     ✅ FIXED (eventSolution)
  ========================= */

  type AICard = {
    slug: string
    desc?: string
  }

  const solutionCards: AICard[] =
    parsedContent?.eventSolution?.cards || []

  /* =========================
     ✅ SLUG-BASED MAP 🔥
  ========================= */

  const aiMap = new Map<string, AICard>(
    solutionCards.map((c) => [c.slug, c])
  )

  /* =========================
     ✅ FINAL CARDS
  ========================= */

  const finalCards = solutions.map((item) => {
    const aiCard = aiMap.get(item.slug)

    return {
      title: item.title,
      slug: item.slug,
      cardType: "service",
      desc:
        aiCard?.desc ||
        `${item.title} solutions designed for seamless execution and business impact.`,
    }
  })

  /* =========================
     ✅ FAQ (single source)
  ========================= */

  const faqList = page?.faqs || []

  /* =========================
     ✅ SCHEMA
  ========================= */

  const schemaData = [
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", url: baseUrl },
      { name: "Solutions", url },
    ]),
    faqSchema(faqList, url),
  ].filter(Boolean)

  /* =========================
     ✅ UI
  ========================= */

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
  ]

  return (
    <>
      <Schema data={schemaData} id="solutions-schema" />

      <EventSearch
        breadcrumbItems={breadcrumbItems}
        title={
          page?.display_title ||
          hero?.h1 ||
          "Complete Event Solutions Company in Delhi"
        }
        h2={
          hero?.h2 ||
          "End-to-End Event Planning, Production & Execution Services"
        }
        shortDesc={
          hero?.shortDesc ||
          "We deliver complete event solutions including planning, logistics, fabrication, technical production, and execution across India."
        }
      />

      <EventCategories
        page={page}
        cards={finalCards}
      />

      <FAQ faqs={faqList} />

      <ContactCTA />
    </>
  )
}
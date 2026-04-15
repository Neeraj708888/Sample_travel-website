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
import { getPageData } from "../liv/pageData"
import FAQ from "../components/Events/FAQ"
import { services } from "../data/services"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const dynamic = "force-dynamic"

/* ---------------------------------- */
/* ✅ SEO Metadata (FIXED)             */
/* ---------------------------------- */

export async function generateMetadata() {
  const url = `${baseUrl}/solutions`

  return generateSeo({
    title: "Event Solutions Company in Delhi",
    description: "Luxury wedding planning, corporate events, and private celebrations in Delhi.",
    url,
    type: "solution",
    breadcrumb: [
      { name: "Home", url: baseUrl },
      { name: "Solutions", url },
    ],
  })
}



/* ---------------------------------- */
/* ✅ Page Component (FIXED)           */
/* ---------------------------------- */

export default async function SolutionsPage() {
  const url = `${baseUrl}/solutions`

  // ✅ Single DB call
  let page: any = null
  let dbFaqs: any[] = []

  try {
    const data = await getPageData("solutions") // ✅ FIXED
    page = data?.page
    dbFaqs = data?.faqs || []
  } catch (error) {
    console.error("PAGE FETCH ERROR:", error)
  }

  // ✅ Parse content
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
  const solutionCards = parsedContent?.solutions?.cards || []

  // ✅ Merge AI + static services
  let finalCards = solutionCards

  if (services.length > 0) {
    finalCards = services.map((child) => {
      const aiCard = solutionCards?.find(
        (card: any) => card.slug === child.slug
      )

      return {
        title: child.title,
        slug: child.slug,
        cardType: child.title,
        desc:
          aiCard?.desc ||
          `${child.title} solutions designed for seamless execution and business impact.`,
      }
    })
  }

  const faqList = dbFaqs.length > 0 ? dbFaqs : undefined

  const schemaData = [
    organizationSchema(),
    localBusinessSchema(url),
    breadcrumbSchema([
      { name: "Home", url: baseUrl },
      { name: "Solutions", url }, // ✅ FIXED
    ]),
    faqSchema(faqList, url),
  ].filter(Boolean)

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" }, // ✅ FIXED
  ]

  return (
    <>
      <Schema data={schemaData} id="solutions-structured-data" />

      <EventSearch
        breadcrumbItems={breadcrumbItems}
        title={
          hero?.h1 || "Complete Event Solutions Company in Delhi"
        }
        h2={
          hero?.h2 ||
          "End-to-End Event Planning, Production & Execution Services"
        }
        shortDesc={
          hero?.shortDesc ||
          "We deliver complete event solutions including planning, logistics, fabrication, technical production, and on-ground execution across India."
        }
      />

      <EventCategories page={page} cards={finalCards} />

      <FAQ faqs={faqList} />

      <ContactCTA />
    </>
  )
}
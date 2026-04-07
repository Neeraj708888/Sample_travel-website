import Link from "next/link";
import { notFound } from "next/navigation";

export { generateMetadata } from "./metadata";

import { solutions, ServiceNode } from "@/app/data/solution";
import { getPageData } from "@/app/liv/pageData";
import { EventSearch } from "@/app/components/Events/Hero";
import FAQ from "@/app/components/Events/FAQ";

/* ---------------------------------- */
/* ✅ Tree helpers                     */
/* ---------------------------------- */

function findSolutionPath(slugs: string[]): { nodes: ServiceNode[] } | null {
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

  return traverse(solutions, 0) ? { nodes: [...path] } : null
}

function findNodeByPath(nodes: ServiceNode[], slugPath: string[]): ServiceNode | null {
  const [current, ...rest] = slugPath
  const node = nodes.find((n) => n.slug === current)
  if (!node) return null
  if (rest.length === 0) return node
  if (!node.children) return null
  return findNodeByPath(node.children, rest)
}

function collectAllPaths(nodes: ServiceNode[], prefix: string[] = []): string[][] {
  const paths: string[][] = []
  for (const node of nodes) {
    const current = [...prefix, node.slug]
    paths.push(current)
    if (node.children) paths.push(...collectAllPaths(node.children, current))
  }
  return paths
}

/* ---------------------------------- */
/* ✅ Static params                    */
/* ---------------------------------- */

export async function generateStaticParams() {
  return collectAllPaths(solutions).map((slugPath) => ({ slug: slugPath }))
}

/* ---------------------------------- */
/* ✅ Page                             */
/* ---------------------------------- */

interface Props {
  params: Promise<{ slug: string[] }>
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params

  const result = findSolutionPath(slug)
  if (!result) notFound()

  const { nodes } = result
  const lastNode = nodes[nodes.length - 1]
  const node = findNodeByPath(solutions, slug)
  if (!node) notFound()

  const dbSlug = `solutions/${slug.join("/")}`
  const basePath = `/solutions/${slug.join("/")}`

  /* ── DB / AI data ── */
  let page: any = null
  let dbFaqs: any[] = []

  try {
    const data = await getPageData(dbSlug)
    page = data?.page
    dbFaqs = data?.faqs || []
  } catch (error) {
    console.error("PAGE FETCH ERROR:", error)
  }

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
  const faqList = dbFaqs.length > 0 ? dbFaqs : undefined

  /* ── Breadcrumb ── */
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    // { label: "Solutions", href: "/solutions" },
    ...nodes.map((n, index) => ({
      label: n.title,
      href: `/solutions/${slug.slice(0, index + 1).join("/")}`,
    })),
  ]

  return (
    <>
      {/* Hero */}
      <EventSearch
        breadcrumbItems={breadcrumbItems}
        title={hero?.h1 || lastNode.title}
        h2={hero?.h2 || ""}
        shortDesc={hero?.shortDesc || ""}
      />

      {/* Children grid */}
      {node.children && node.children.length > 0 && (
        <section className="py-16 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {node.children.map((child) => {
                const Icon = child.icon
                return (
                  <Link
                    key={child.id}
                    href={`${basePath}/${child.slug}`}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur hover:border-yellow-500 transition duration-300"
                  >
                    {Icon && (
                      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500/10 text-3xl mb-5 group-hover:bg-yellow-500 group-hover:text-black transition">
                        <Icon />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                      {child.title}
                    </h3>
                    {child.children && child.children.length > 0 && (
                      <p className="text-sm text-gray-400">
                        {child.children.length} sub-service{child.children.length > 1 ? "s" : ""}
                      </p>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQ faqs={faqList} />
    </>
  )
}

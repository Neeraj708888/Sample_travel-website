import { supabase } from "@/app/liv/supabase"
import { generateDestinationContent } from "@/app/liv/ai"
import { notFound } from "next/navigation"

export const revalidate = 86400

/* ---------- FETCH ---------- */
async function getDestination(slug: string) {
  const { data, error } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", slug.toLowerCase())
    .eq("is_published", true)
    .maybeSingle()

  if (error) {
    console.error(error)
    return null
  }

  return data
}

/* ---------- CREATE ---------- */
async function createDestination(slug: string) {
  const cleanSlug = slug.toLowerCase()
  const formattedName = cleanSlug.replace(/-/g, " ")

  const aiData = await generateDestinationContent(formattedName)

  if (!aiData?.content) return null

  const { data, error } = await supabase
    .from("destinations")
    .insert({
      name: aiData.name || formattedName,
      slug: cleanSlug,
      country: aiData.country,
      hero_title: aiData.hero_title,
      hero_description: aiData.hero_description,
      highlights: aiData.highlights,
      faqs: aiData.faqs,
      packages: aiData.packages,
      images: aiData.images,
      content: aiData.content,
      meta_title: aiData.meta_title,
      meta_description: aiData.meta_description,
      meta_keywords: aiData.meta_keywords,
      canonical_url: `${process.env.NEXT_PUBLIC_SITE_URL}/destinations/${cleanSlug}`,
      og_image: aiData.og_image,
      schema_json: aiData.schema_json,
      faq_schema: aiData.faq_schema,
      ai_generated: true,
      is_published: true,
    })
    .select()
    .single()

  if (error) {
    console.error("Insert Error:", error)
    return null
  }

  return data
}

/* ---------- SEO ---------- */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const data = await getDestination(slug)

  if (!data) return {}

  return {
    title: data.meta_title,
    description: data.meta_description,
    keywords: data.meta_keywords,
    alternates: {
      canonical: data.canonical_url,
    },
    openGraph: {
      title: data.meta_title,
      description: data.meta_description,
      images: data.og_image ? [data.og_image] : [],
    },
  }
}

/* ---------- PAGE ---------- */
export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  let destination = await getDestination(slug)

  if (!destination) {
    destination = await createDestination(slug)
  }

  if (!destination) return notFound()

  return (
    <main className="bg-white text-gray-800 mt-16">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {destination.hero_title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {destination.hero_description}
          </p>
        </div>
      </section>


      {/* ================= HIGHLIGHTS ================= */}
      {destination.highlights?.length > 0 && (
        <section className="py-14 px-6 md:px-12 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Why Visit {destination.name}?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {destination.highlights.map((item: string, i: number) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-orange-600">
          <div
            dangerouslySetInnerHTML={{
              __html: destination.content,
            }}
          />
        </div>
      </section>


      {/* ================= PACKAGES ================= */}
      {destination.packages?.length > 0 && (
        <section className="py-16 bg-gray-50 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-10 text-center">
              Popular Packages
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {destination.packages.map((pkg: any, i: number) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Duration: {pkg.duration}
                  </p>
                  <p className="text-orange-600 font-bold text-lg">
                    {pkg.price}
                  </p>
                  <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ================= FAQ SECTION ================= */}
      {destination.faqs?.length > 0 && (
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {destination.faqs.map((faq: any, i: number) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ================= JSON-LD ================= */}
      {destination.schema_json && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(destination.schema_json),
          }}
        />
      )}

      {destination.faq_schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(destination.faq_schema),
          }}
        />
      )}

    </main>
  )
}


// import { createDestination, getDestination } from "@/app/liv/destinationService"
// import { notFound } from "next/navigation"
// import Hero from "./components/Hero"

// export const revalidate = 86400

// export default async function Page({ params }: { params: { slug: string } }) {
//   const slug = params.slug

//   let destination = await getDestination(slug)

//   if (!destination) {
//     destination = await createDestination(slug)
//   }

//   if (!destination) return notFound()

//   return (
//     <main className="bg-white text-gray-800 mt-16">
//       <Hero destination={destination} />
//       <Highlights destination={destination} />
//       <Content destination={destination} />
//       <Packages destination={destination} />
//       <FAQ destination={destination} />
//       <CTA destination={destination} />

//       {/* JSON LD */}
//       {destination.schema_json && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(destination.schema_json),
//           }}
//         />
//       )}
//     </main>
//   )
// }
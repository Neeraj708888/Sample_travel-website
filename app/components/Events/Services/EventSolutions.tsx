"use client";

import Link from "next/link";
import { solutions } from "@/app/data/solution";

// ✅ Static solutions se icon lookup map — O(1) access
const iconMap = new Map(
  solutions.map((s) => [s.slug, s.icon])
)

type SolutionCard = {
  title: string
  desc?: string
  slug: string
  cardType?: string
}

export default function EventSolutions({ page }: { page?: any }) {

  // ✅ STEP 1: page.content safely parse karo
  let parsedContent: any = {}
  try {
    parsedContent =
      typeof page?.content === "string"
        ? JSON.parse(page.content)
        : page?.content ?? {}
  } catch {
    parsedContent = {}
  }

  // ✅ STEP 2: DB se eventSolution.cards lo
  //    DB JSON structure: { content: { eventSolution: { cards: [...] } } }
  const dbCards: SolutionCard[] =
    parsedContent?.eventSolution?.cards || []

  // ✅ STEP 3: DB cards + static icon merge karo
  //    Priority: DB title/desc > static fallback
  const solutionCards =
    dbCards.length > 0
      ? dbCards.map((card) => ({
        title: card.title,
        desc: card.desc || "",
        slug: card.slug,
        icon: iconMap.get(card.slug) || null,  // ✅ static se icon attach
      }))
      : solutions.map((s) => ({              // ✅ fallback: DB nahi toh static
        title: s.title,
        desc: "",
        slug: s.slug,
        icon: s.icon || null,
      }))

  // ✅ STEP 4: Section heading — DB se lo ya fallback
  const sectionTitle =
    parsedContent?.eventSolution?.title ||
    "Corporate Event Solutions"

  const sectionDesc =
    parsedContent?.eventSolution?.shortDesc ||
    "Everything you need to plan, produce, and execute a world-class corporate event."

  return (
    <section className="py-16 text-white bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[2px] bg-yellow-500"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-16 h-[2px] bg-yellow-500"></div>
          </div>

          {/* ✅ DB se title */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            {sectionTitle}
          </h2>

          {/* ✅ DB se shortDesc */}
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {sectionDesc}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCards.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.slug}
                href={`/solutions/${service.slug}`}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur hover:border-yellow-500 transition duration-300 overflow-hidden"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-500/10 to-transparent" />

                {/* ✅ ICON — static se aata hai */}
                {Icon && (
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500/10 text-3xl mb-5 group-hover:bg-yellow-500 group-hover:text-black transition">
                    <Icon />
                  </div>
                )}

                {/* ✅ TITLE — DB se aata hai */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
                  {service.title}
                </h3>

                {/* ✅ DESC — DB se aata hai */}
                {service.desc && (
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {service.desc}
                  </p>
                )}

                {/* CTA */}
                <div className="mt-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  <span className="text-yellow-400 text-sm font-semibold">
                    View Details →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}


// /events/[...slug]
let eventPlusSolutionData = {
  "hero": {
    "h1": "Corporate Event Management Company in Delhi",
    "h2": "Your Partner for Unforgettable Corporate Experiences",
    "image": "/images/corporate event management company in delhi.jpg",
    "shortDesc": "Ananta Hospitality’s expertise in corporate event management ensures your events are executed flawlessly, leaving a lasting impression on attendees."
  },
  "eventSolution": {
    "cards": [
      {
        "desc": "Professional and innovative event setup services to create the perfect atmosphere for your corporate gatherings. We manage everything from decor to layout.",
        "slug": "eve-set",
        "title": "Event Setup",
        "cardType": "service"
      },
      {
        "desc": "State-of-the-art audio-visual and lighting solutions that ensure your corporate event is visually impactful and acoustically flawless.",
        "slug": "ava-lgt-snd",
        "title": "Audio-visual (AV) and Light-Sound",
        "cardType": "service"
      },
      {
        "desc": "Expert assistance in venue booking, tailored to your event needs. We identify and secure ideal locations that align with your corporate image.",
        "slug": "ven-bkg",
        "title": "Venue Booking",
        "cardType": "service"
      },
      {
        "desc": "Thoughtful corporate gifting solutions to express appreciation to your clients and employees, strengthening relationships and enhancing brand loyalty.",
        "slug": "corp-gft",
        "title": "Corporate Gifting",
        "cardType": "service"
      },
      {
        "desc": "Reliable transport booking solutions for your corporate events. We ensure that your guests arrive on time and enjoy a comfortable journey.",
        "slug": "tra-bkg",
        "title": "Transport Booking",
        "cardType": "service"
      },
      {
        "desc": "Engaging corporate video production services that capture the essence of your event, ideal for marketing and internal communications.",
        "slug": "corp-vdo",
        "title": "Corporate Video",
        "cardType": "service"
      },
      {
        "desc": "Skilled manpower solutions for your events, ensuring operational efficiency and allowing you to focus on your core objectives.",
        "slug": "manpower",
        "title": "Manpower",
        "cardType": "service"
      }
    ],
    "title": "Corporate Event Management Company in Delhi Solutions",
    "shortDesc": "Our comprehensive solutions cover every aspect of corporate event planning."
  }
}


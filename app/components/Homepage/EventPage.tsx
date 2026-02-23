import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Event Services | Destination Weddings & Corporate Events",
  description:
    "Luxury destination weddings, corporate events and private celebrations managed with elegance and perfection.",
};

const events = [
  {
    title: "Destination Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
    description:
      "Luxury wedding planning at exotic destinations with complete arrangements.",
  },
  {
    title: "Corporate Events",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    description:
      "Professional corporate meetings, conferences and executive retreats.",
  },
  {
    title: "Private Parties",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    description:
      "Birthday, anniversary and exclusive private celebrations in style.",
  },
  {
    title: "Adventure Events",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description:
      "Adventure tours, curated group trips and outdoor experiences.",
  },
];

export default function EventsPage() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">

      {/* Subtle Golden Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-black to-yellow-900/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent mb-6">
            Premium Event Experiences
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We craft unforgettable weddings, corporate gatherings and private
            celebrations at breathtaking destinations.
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-32">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-500 transition duration-500 backdrop-blur-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-8 bg-zinc-900">
                <h2 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition">
                  {event.title}
                </h2>
                <p className="text-gray-400 text-sm">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="bg-gradient-to-r from-yellow-500/20 via-amber-400/10 to-yellow-500/20 border border-yellow-500/30 rounded-3xl py-20 px-12 text-center shadow-2xl mb-32 backdrop-blur-xl">

          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Why Plan Your Event With Us?
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 mb-10">
            From venue selection and logistics to décor, catering and guest
            management — we handle everything with precision and elegance.
          </p>

          <Link
            href="/contact"
            className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold rounded-full hover:scale-105 transition duration-300 shadow-xl"
          >
            Plan Your Event
          </Link>
        </div>

        {/* Featured Event Packages */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Event Packages
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Curated event packages tailored to your vision and expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="p-[1px] rounded-3xl bg-gradient-to-r from-yellow-500/40 to-amber-400/30">
            <div className="bg-zinc-900 rounded-3xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                Royal Destination Wedding
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Complete wedding management at luxury resorts including décor,
                catering, photography and premium guest hospitality.
              </p>
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black rounded-full font-semibold hover:scale-105 transition"
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="p-[1px] rounded-3xl bg-gradient-to-r from-yellow-500/40 to-amber-400/30">
            <div className="bg-zinc-900 rounded-3xl p-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                Corporate Retreat Package
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Executive conferences, team-building retreats, luxury stays
                and complete travel coordination for corporate groups.
              </p>
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black rounded-full font-semibold hover:scale-105 transition"
              >
                Get Quote
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

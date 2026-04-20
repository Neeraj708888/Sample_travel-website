import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Popular Event Management Services in India | Corporate & Wedding Events",
  description:
    "Explore top event management services including corporate events, weddings, product launches, exhibitions and brand promotions. Hire expert planners today.",
};

const events = [
  {
    name: "Corporate Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    description: "Professional corporate event planning for meetings and conferences.",
  },
  {
    name: "Wedding Events",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    description: "Complete wedding planning with decoration and execution.",
  },
  {
    name: "Product Launch",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    description: "Creative product launch events to boost brand visibility.",
  },
  {
    name: "Exhibitions",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
    description: "End-to-end exhibition planning and stall design.",
  },
  {
    name: "Brand Promotions",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    description: "Innovative brand promotion campaigns and activations.",
  },
  {
    name: "Conferences",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    description: "Seamless conference management with AV support.",
  },
];

// ✅ slug fix (safe URL)
const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-");

export default function PopularEvents() {
  return (
    <section className="py-24 px-6 bg-white">

      {/* Hero */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Popular Event Management Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover our most popular event services including corporate events,
          weddings, exhibitions and brand promotions across India.
        </p>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Link
            key={event.name}
            href={`/events/${slugify(event.name)}`}
            className="group block rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="relative h-80 w-full">

              {/* ✅ Image Fix */}
              <Image
                src={event.image}
                alt={event.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
                priority={false}
              />

              {/* ✅ Overlay Fix */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 z-10"></div>

              {/* ✅ Content Fix */}
              <div className="absolute bottom-0 p-6 text-white z-20">
                <h2 className="text-2xl font-bold mb-2">
                  {event.name} Management
                </h2>
                <p className="text-sm opacity-90">
                  {event.description}
                </p>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* SEO Content */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Leading Event Management Company in India
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We specialize in corporate events, wedding planning, exhibitions,
          product launches and brand promotions. Our expert team delivers
          creative concepts, flawless execution and complete event solutions
          tailored to your needs.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Plan Your Next Event With Experts
        </h3>
        <Link
          href="/contact"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition shadow-lg"
        >
          Get Free Quote
        </Link>
      </div>

    </section>
  );
}
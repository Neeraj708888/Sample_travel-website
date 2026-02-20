import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Services | Destination Weddings, Corporate & Private Events",
  description:
    "Plan your destination weddings, corporate events, private parties and luxury celebrations with our premium event management services.",
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
      "Professional corporate meetings, conferences and team retreats.",
  },
  {
    title: "Private Parties",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    description:
      "Birthday, anniversary and private celebrations in style.",
  },
  {
    title: "Adventure Events",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description:
      "Adventure tours, group trips and outdoor experiences.",
  },
];

export default function EventsPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Premium Event Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We design and manage unforgettable events at stunning destinations with complete planning and execution.
        </p>
      </div>

      {/* Event Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-20">
        {events.map((event, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="relative h-60">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">
                {event.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="bg-blue-600 text-white rounded-3xl max-w-6xl mx-auto py-16 px-10 text-center shadow-xl mb-20">
        <h2 className="text-3xl font-bold mb-6">
          Why Plan Events With Us?
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-sm md:text-base opacity-90">
          From venue selection to logistics, catering, decoration and guest management —
          we handle everything with perfection and elegance.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Plan Your Event
        </Link>
      </div>

      {/* Featured Event Packages */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Featured Event Packages
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Customized event packages tailored to your vision and budget.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Royal Destination Wedding
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Complete wedding management at luxury resorts including decor, catering, photography and guest hospitality.
          </p>
          <Link
            href="/contact"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Get Quote
          </Link>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Corporate Retreat Package
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Team-building activities, conference setup, luxury stays and travel management for corporate groups.
          </p>
          <Link
            href="/contact"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Get Quote
          </Link>
        </div>
      </div>

    </section>
  );
}

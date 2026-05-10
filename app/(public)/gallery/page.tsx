"use client";

import Image from "next/image";

const gallery = [
    {
        title: "Royal Wedding",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
        title: "Corporate Conference",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    },
    {
        title: "Beach Celebration",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    },
    {
        title: "Luxury Decor",
        image: "https://images.unsplash.com/photo-1505238680356-667803448bb6",
    },
    {
        title: "Destination Wedding",
        image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
    },
    {
        title: "Private Party",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    },
];

export default function Gallery() {
    return (
        <section className="py-24 bg-neutral-950 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Event Gallery
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Explore unforgettable moments from our events.
                    </p>

                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {gallery.map((item, index) => (

                        <div
                            key={index}
                            className="group relative h-52 md:h-64 rounded-2xl overflow-hidden"
                        >

                            <Image
                                src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
                                alt={item.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

                            {/* Title */}
                            <div className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition">
                                {item.title}
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
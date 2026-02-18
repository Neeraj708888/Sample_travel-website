import Link from "next/link";

const destinations = [
    { slug: "delhi", name: "Delhi" },
    { slug: "mumbai", name: "Mumbai" },
    { slug: "jaipur", name: "Jaipur" },
];

export default function DestinationsPage() {
    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold mb-6">All Destinations</h1>

            <ul className="space-y-3">
                {destinations.map((item) => (
                    <li key={item.slug}>
                        <Link
                            href={`/destinations/${item.slug}`}
                            className="text-blue-600 hover:underline"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

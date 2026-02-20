export default function Loading() {
    return (
        <main className="min-h-screen px-6 py-10 animate-pulse space-y-10">

            {/* Title Skeleton */}
            <div className="h-10 w-1/3 bg-gray-300 rounded"></div>

            {/* Slider Skeleton */}
            <div className="h-[400px] w-full bg-gray-300 rounded-2xl"></div>

            {/* Content Skeleton */}
            <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>

            {/* Grid Skeleton */}
            <div className="grid md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-52 bg-gray-300 rounded-xl"
                    />
                ))}
            </div>

        </main>
    );
}

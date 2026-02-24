export default function Hero({ destination }: any) {
    return (
        <section className="relative h-[70vh] flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url(${destination.images?.[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {destination.hero_title}
                </h1>
                <p className="max-w-2xl mx-auto text-lg">
                    {destination.hero_description}
                </p>
            </div>
        </section>
    )
}
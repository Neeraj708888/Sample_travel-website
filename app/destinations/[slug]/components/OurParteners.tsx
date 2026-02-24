export default function OurPartners() {
    const partners = [
        "/partners/partner1.png",
        "/partners/partner2.png",
        "/partners/partner3.png",
        "/partners/partner4.png",
    ]

    return (
        <section className="py-16 bg-white px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-12">Trusted By Leading Brands</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {partners.map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt="Partner"
                            className="h-14 mx-auto opacity-70 hover:opacity-100 transition"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
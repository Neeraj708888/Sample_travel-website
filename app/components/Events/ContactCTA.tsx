export function ContactCTA() {
    return (
        <section className="py-16 text-white text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Let's Plan Your Dream Event
                </h2>

                <p className="text-gray-400 mb-10">
                    Schedule your free consultation today and let our experts craft
                    an unforgettable experience tailored perfectly to your vision.
                </p>

                <a
                    href="/support"
                    className="px-12 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition transform hover:scale-105 shadow-xl shadow-yellow-500/30"
                >
                    Book Free Consultation
                </a>
            </div>
        </section>
    );
}
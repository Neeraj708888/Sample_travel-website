export default function Testimonial() {
    return (
        // <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">

        <section className="py-20 px-6">

            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    What Our Travelers Say
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Real experiences from our happy clients who explored the world with us.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 border border-gray-100">
                    <p className="text-gray-600 mb-6 italic">
                        “The trip was perfectly organized. From booking to return, everything was seamless. Highly recommended!”
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="client"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                            <span className="text-sm text-gray-500">Delhi, India</span>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 border border-gray-100">
                    <p className="text-gray-600 mb-6 italic">
                        “Amazing event services! Our destination wedding was like a dream come true.”
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="client"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-gray-800">Rahul Verma</h4>
                            <span className="text-sm text-gray-500">Mumbai, India</span>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 border border-gray-100">
                    <p className="text-gray-600 mb-6 italic">
                        “Affordable packages and excellent support. Definitely booking again!”
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            alt="client"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-gray-800">Anjali Mehta</h4>
                            <span className="text-sm text-gray-500">Bangalore, India</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Ready For Your Next Adventure?
                </h3>
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition duration-300 shadow-lg">
                    Book Your Trip Now
                </button>
            </div>

        </section>
    );
}

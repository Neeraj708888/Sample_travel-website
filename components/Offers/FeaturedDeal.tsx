import Image from "next/image";

export default function FeaturedDeal() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

                <div className="relative h-96">
                    <Image
                        src="/maldives.jpg"
                        alt="Maldives Luxury Package"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-12 flex flex-col justify-center">
                    <span className="text-yellow-400 font-semibold mb-4">
                        Featured Deal
                    </span>

                    <h2 className="text-4xl font-bold mb-4">
                        Maldives Luxury Escape
                    </h2>

                    <p className="text-gray-400 mb-6">
                        5 Nights · Beach Villa · Complimentary Breakfast · Free Airport Transfer
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-white">
                            ₹79,999
                        </span>
                        <span className="line-through text-gray-500">
                            ₹1,29,999
                        </span>
                    </div>

                    <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition">
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    );
}

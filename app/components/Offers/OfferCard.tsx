import Image from "next/image";

export default function OfferCard() {
    return (
        <div className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="relative h-60">
                <Image
                    src="/dubai.jpg"
                    alt="Dubai travel deal"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                    Dubai City Break
                </h3>

                <p className="text-gray-400 mb-4">
                    3 Nights · 4 Star Hotel · Breakfast Included
                </p>

                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-yellow-400">
                        ₹29,999
                    </span>

                    <button className="text-sm px-4 py-2 border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
                        View Deal
                    </button>
                </div>
            </div>
        </div>
    );
}

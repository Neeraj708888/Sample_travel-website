"use client";

import { useEffect, useRef, useState } from "react";

export default function EnquiryPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let openTimer: NodeJS.Timeout;
        let closeTimer: NodeJS.Timeout;

        openTimer = setTimeout(() => {
            const lastShown = localStorage.getItem("enquiryShown");

            if (!lastShown || Date.now() - Number(lastShown) > 86400000) {
                setIsOpen(true);
                localStorage.setItem("enquiryShown", Date.now().toString());

                // ✅ Auto close after 10 sec
                closeTimer = setTimeout(() => {
                    setIsOpen(false);
                }, 10000);
            }
        }, 3000);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(closeTimer);
        };
    }, []);

    // Outside click handler
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div ref={modalRef} className="relative w-full max-w-lg rounded-2xl bg-black/80 shadow-2xl p-6 sm:p-8 animate-scaleIn">

                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                >
                    ✕
                </button>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                    Get Free Event Consultation
                </h2>
                <p className="text-gray-500 text-center mb-6 text-sm sm:text-base">
                    Fill the form below and our team will contact you shortly.
                </p>

                {/* Form */}
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <textarea
                        placeholder="Tell us about your event..."
                        rows={3}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                        Submit Enquiry
                    </button>
                </form>
            </div>
        </div>
    );
}

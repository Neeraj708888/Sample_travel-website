"use client";

import { useEffect, useRef, useState } from "react";

export default function EnquiryPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const openTimer = setTimeout(() => {
            const lastShown = localStorage.getItem("enquiryShown");

            if (!lastShown || Date.now() - Number(lastShown) > 86400000) {
                setIsOpen(true);
                localStorage.setItem("enquiryShown", Date.now().toString());

                startCloseTimer();
            }
        }, 3000);

        return () => clearTimeout(openTimer);
    }, []);

    // Start auto close timer
    const startCloseTimer = () => {
        closeTimerRef.current = setTimeout(() => {
            if (!isInteracting) {
                setIsOpen(false);
            }
        }, 20000);
    };

    // Stop auto close when user interacts
    const handleUserInteraction = () => {
        setIsInteracting(true);

        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
        }
    };

    // Outside click close
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
                ref={modalRef}
                className="relative w-full max-w-lg rounded-2xl bg-black/80 shadow-2xl p-6 sm:p-8"
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-white text-xl"
                >
                    ✕
                </button>

                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
                    Get Free Event Consultation
                </h2>

                <p className="text-gray-300 text-center mb-6">
                    Fill the form below and our team will contact you shortly.
                </p>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        onFocus={handleUserInteraction}
                        onChange={handleUserInteraction}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        onFocus={handleUserInteraction}
                        onChange={handleUserInteraction}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        onFocus={handleUserInteraction}
                        onChange={handleUserInteraction}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <textarea
                        placeholder="Tell us about your event..."
                        rows={3}
                        onFocus={handleUserInteraction}
                        onChange={handleUserInteraction}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg"
                    >
                        Submit Enquiry
                    </button>
                </form>
            </div>
        </div>
    );
}
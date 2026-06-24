"use client";

import React, { useEffect, useRef, useState } from "react";

export default function EnquiryPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

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

    // Input Handler
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        handleUserInteraction();

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    // Submit Handler
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setLoading(true);
            setToast(null);

            const res = await fetch("/api/admin/query", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!data.success) throw new Error(data.message || "Something went wrong");

            setToast({
                type: "success",
                message: 'Enquiry submitted successfully!',
            });

            setForm({
                name: "",
                email: "",
                mobile: "",
                message: "",
            });

            // Auto close after success
            setTimeout(() => {
                setIsOpen(false);
            }, 2000);

        } catch (error: any) {
            setToast({
                type: "error",
                message:
                    error.message ||
                    "Failed to submit enquiry",
            });
        } finally {
            setLoading(false);
        }
    }

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

                {/* Toast */}
                {toast && (
                    <div
                        className={`mb-4 rounded-xl px-4 py-3 text-sm font-medium border ${toast.type === "success"
                            ? "bg-green-50 border-green-200 text-green-600"
                            : "bg-red-50 border-red-200 text-red-600"
                            }`}
                    >
                        {toast.message}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        onFocus={handleUserInteraction}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        onFocus={handleUserInteraction}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        onFocus={handleUserInteraction}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                    <textarea
                        placeholder="Tell us about your event..."
                        rows={3}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleUserInteraction}
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
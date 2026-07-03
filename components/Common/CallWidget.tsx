"use client";

import { PhoneCall } from "lucide-react";

interface CallWidgetProps {
    phone?: string;
}

export default function CallWidget({
    phone = "+919355056666", // Replace with your number
}: CallWidgetProps) {
    return (
        <a
            href={`tel:${phone}`}
            aria-label="Call Us"
            className="fixed bottom-6 left-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-700"
        >
            <PhoneCall size={28} />
        </a>
    );
}
"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {

    useEffect(() => {
        console.error("Destination Page Error:", error);
    }, [error]);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">

            <h1 className="text-4xl font-bold text-red-600 mb-4">
                Something went wrong
            </h1>

            <p className="text-gray-600 mb-6">
                We couldn’t load this destination page.
                Please try again.
            </p>

            <button
                onClick={() => reset()}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
                Try Again
            </button>

        </main>
    );
}

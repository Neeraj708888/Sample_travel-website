"use client";

import { useState } from "react";

export default function MessageModal({
    message,
}: {
    message: string;
}) {

    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Table Cell */}
            <div className="flex items-start gap-3">

                {/* Preview */}
                <div className="text-sm text-gray-500 max-w-xs">
                    <p className="line-clamp-2 break-words">
                        {message}
                    </p>
                </div>

                {/* Eye Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="flex-shrink-0 w-7 h-7 rounded-lg border border-blue-100 flex items-center justify-center text-purple-500 hover:bg-red-50 transition"
                >
                    <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z"
                        />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </button>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

                    {/* Modal Box */}
                    <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl">

                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Full Message
                            </h2>

                            <button
                                onClick={() => setOpen(false)}
                                className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-500 transition"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-6 py-5 max-h-[70vh] overflow-y-auto">
                            <p className="text-sm leading-7 text-gray-600 whitespace-pre-wrap break-words">
                                {message}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-gray-100 px-6 py-4 flex justify-end">
                            <button
                                onClick={() => setOpen(false)}
                                className="h-10 px-5 rounded-xl bg-black text-white text-sm hover:bg-gray-800 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
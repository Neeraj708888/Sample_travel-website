// app/components/common/ConfirmModal.tsx

"use client";

import Image from "next/image";

interface ConfirmModalProps {
    open: boolean;
    title?: string;
    description?: string;
    loading?: boolean;
    onConfirm: () => void;
    onClose: () => void;
}

export default function ConfirmModal({
    open,
    title = "",
    description = "",
    loading = false,
    onConfirm,
    onClose,
}: ConfirmModalProps) {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">

            {/* Modal */}
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#c9a96e]/20 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)] animate-in fade-in zoom-in duration-200">

                {/* Top Glow */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c9a96e] via-yellow-400 to-[#c9a96e]" />

                {/* Header */}
                <div className="relative flex flex-col items-center px-6 pt-8 pb-5">

                    {/* Logo */}
                    <div className="mb-4 flex items-center justify-center">
                        <div className="relative w-20 h-20 rounded-2xl bg-black shadow-lg ring-4 ring-[#c9a96e]/10 overflow-hidden">
                            <Image
                                src="/logo.png"
                                alt="Ananta Hospitality"
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-gray-900 text-center">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-center text-sm leading-6 text-gray-500 max-w-sm">
                        {description}
                    </p>

                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 flex items-center justify-center w-10 h-10 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
                    >
                        ✕
                    </button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Footer */}
                <div className="flex items-center justify-center gap-4 px-6 py-5 bg-gray-50/50">

                    {/* Cancel */}
                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="h-11 min-w-[120px] rounded-xl border border-gray-200 bg-white px-5 text-sm font-medium text-gray-600 hover:bg-gray-100 transition disabled:opacity-50"
                    >
                        Cancel
                    </button>

                    {/* Delete */}
                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className="flex items-center justify-center gap-2 h-11 min-w-[140px] rounded-xl bg-red-500 px-5 text-sm font-semibold text-white shadow-lg shadow-red-100 transition-all duration-200 hover:bg-red-600 hover:scale-[1.02] disabled:opacity-50"
                    >

                        {loading && (
                            <svg
                                className="animate-spin"
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    className="opacity-25"
                                />
                                <path
                                    fill="currentColor"
                                    className="opacity-75"
                                    d="M4 12a8 8 0 018-8v8z"
                                />
                            </svg>
                        )}

                        {loading
                            ? "Deleting..."
                            : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}
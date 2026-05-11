"use client";

interface Props {
    label: string;
    value: string;
    onChange: (v: string) => void;
    error?: string;
    placeholder?: string;
    hint?: string;
    max?: number;
    rows?: number;
}

export default function TextareaField({
    label,
    value,
    onChange,
    error,
    placeholder,
    hint,
    max,
    rows = 3,
}: Props) {

    return (
        <div className="flex flex-col gap-1.5">

            <div className="flex items-center justify-between">

                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {label}
                </label>

                {max && (
                    <span
                        className={`text-xs ${value.length > max
                            ? "text-red-500"
                            : "text-gray-400"
                            }`}
                    >
                        {value.length}/{max}
                    </span>
                )}
            </div>

            {hint && (
                <p className="text-xs text-gray-400 -mt-1">
                    {hint}
                </p>
            )}

            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={rows}
                className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-700 outline-none resize-none transition-all focus:ring-2 ${error
                    ? "border-red-300 focus:border-red-300 focus:ring-red-100"
                    : "border-gray-200 focus:border-[#c9a96e] focus:ring-[#c9a96e]/10"
                    }`}
            />

            {error && (
                <p className="text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}
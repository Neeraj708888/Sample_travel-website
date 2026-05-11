"use client";

interface Props {
    label: string;
    value: string;
    onChange: (v: string) => void;
    error?: string;
    placeholder?: string;
    hint?: string;
}

export default function TextInput({
    label,
    value,
    onChange,
    error,
    placeholder,
    hint,
}: Props) {

    return (
        <div className="flex flex-col gap-1.5">

            <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {label}
            </label>

            {hint && (
                <p className="text-xs text-gray-400 -mt-1">
                    {hint}
                </p>
            )}

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`h-11 w-full rounded-xl border px-4 text-sm text-gray-700 outline-none transition-all focus:ring-2 ${error
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
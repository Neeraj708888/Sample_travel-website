"use client";

import Link from "next/link";

interface BreadcrumbProps {
    items: {
        label: string;
        href: string;
    }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center gap-2">
                        {index !== 0 && <span className="text-gray-600">/</span>}
                        {index === items.length - 1 ? (
                            <span className="text-yellow-400">{item.label}</span>
                        ) : (
                            <Link
                                href={item.href}
                                className="hover:text-yellow-400 transition"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
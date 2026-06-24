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
        <nav aria-label="Breadcrumb" className="py-2">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={`${item.href}-${index}`} className="flex items-center gap-2">
                            {index !== 0 && (
                                <span className="text-gray-600">/</span>
                            )}

                            {isLast ? (
                                <span
                                    className="text-yellow-400"
                                    aria-current="page"
                                >
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="hover:text-yellow-400 transition"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
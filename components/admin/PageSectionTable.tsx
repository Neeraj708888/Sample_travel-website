"use client";

import { useEffect, useMemo, useState } from "react";
import Pagination from "../Common/Pagination";
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 10;

export default function PageSectionsTable({
    initialPages = [],
}: {
    initialPages?: any[];
}) {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearch(search), 300);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch]);

    const filteredPages = useMemo(() => {
        if (!Array.isArray(initialPages)) return [];
        if (!debouncedSearch.trim()) return initialPages;
        const value = debouncedSearch.toLowerCase();
        return initialPages.filter((q) =>
            q?.slug?.toLowerCase()?.includes(value) ||
            q?.id?.toString().includes(value) ||
            q?.meta_title?.toLowerCase()?.includes(value)
        );
    }, [debouncedSearch, initialPages]);

    const totalPages = Math.ceil(filteredPages.length / ITEMS_PER_PAGE);
    const safePage = Math.min(currentPage, Math.max(totalPages, 1));
    const paginatedPages = useMemo(() => {
        const start = (safePage - 1) * ITEMS_PER_PAGE;
        return filteredPages.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredPages, safePage]);

    return (
        <div className="w-full">
            {/* Top Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Page Sections</h2>
                    <p className="text-sm text-gray-400 mt-1">{filteredPages.length} Pages</p>
                </div>
                <div className="relative w-full lg:w-[360px]">
                    <input
                        type="text"
                        placeholder="Search by slug or title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full h-11 rounded-xl border border-gray-200 bg-white pl-11 pr-10 text-sm text-gray-700 outline-none transition focus:border-gray-300 focus:ring-4 focus:ring-gray-100"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    {search && (
                        <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition">
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="hidden md:grid grid-cols-12 gap-4 border-b border-gray-100 bg-gray-50 px-6 py-4">
                    {[
                        { label: "ID", span: "col-span-1" },
                        { label: "Slug", span: "col-span-3" },
                        { label: "Title", span: "col-span-4" },
                        { label: "Created", span: "col-span-2" },
                        { label: "Actions", span: "col-span-2 text-right" },
                    ].map(({ label, span }) => (
                        <div key={label} className={span}>
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</span>
                        </div>
                    ))}
                </div>

                {paginatedPages.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 gap-3">
                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} className="text-gray-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <p className="text-sm text-gray-400">
                            {search ? `"${search}" se koi result nahi mila` : "No pages added yet"}
                        </p>
                        {search && (
                            <button onClick={() => setSearch("")} className="text-xs text-[#c9a96e] hover:underline">Clear search</button>
                        )}
                    </div>
                )}

                {/* Desktop Rows */}
                <div className="hidden md:block divide-y divide-gray-50">
                    {paginatedPages.map((q) => (
                        <div key={q.id} className="grid grid-cols-12 gap-4 items-center px-6 py-4 transition hover:bg-gray-50/70">
                            <div className="col-span-1">
                                <span className="inline-flex items-center rounded-lg bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">#{q.id}</span>
                            </div>
                            <div className="col-span-3">
                                <p className="truncate text-sm font-medium text-gray-700">{q.slug}</p>
                            </div>
                            <div className="col-span-4">
                                <p className="truncate text-sm text-gray-500">{q.meta_title}</p>
                            </div>
                            <div className="col-span-2">
                                <span className="text-sm text-gray-400">
                                    {new Date(q.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                                </span>
                            </div>
                            <div className="col-span-2 flex items-center justify-end gap-2">
                                <ActionButton color="blue" title="View Sections" icon={<EyeIcon />}
                                    onClick={() => router.push(`/admin/pages/edit/${q.id}/sections`)} />
                                {/* ✅ Pencil → sections page */}
                                <ActionButton color="yellow" title="Manage Sections" icon={<EditIcon />}
                                    onClick={() => router.push(`/admin/pages/edit/${q.id}`)} />
                                <ActionButton color="red" title="Delete" icon={<DeleteIcon />} onClick={() => { }} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Rows */}
                <div className="block md:hidden divide-y divide-gray-50">
                    {paginatedPages.map((q) => (
                        <div key={q.id} className="p-4">
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="inline-flex items-center rounded-md bg-gray-100 px-1.5 py-0.5 text-[11px] font-medium text-gray-500">#{q.id}</span>
                                    </div>
                                    <h3 className="truncate text-sm font-semibold text-gray-800">{q.slug}</h3>
                                    <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">{q.meta_title}</p>
                                </div>
                                <span className="whitespace-nowrap text-xs text-gray-400 shrink-0">
                                    {new Date(q.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                                </span>
                            </div>
                            <div className="mt-3 flex items-center gap-2">
                                <ActionButton color="blue" title="View Sections" icon={<EyeIcon />}
                                    onClick={() => router.push(`/admin/pages/edit/${q.id}/sections`)} />
                                <ActionButton color="yellow" title="Manage Sections" icon={<EditIcon />}
                                    onClick={() => router.push(`/admin/pages/edit/${q.id}/sections`)} />
                                <ActionButton color="red" title="Delete" icon={<DeleteIcon />} onClick={() => { }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                totalItems={filteredPages.length}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

const COLOR_MAP = {
    blue: "border-blue-100 text-blue-500 hover:bg-blue-50",
    yellow: "border-yellow-100 text-yellow-500 hover:bg-yellow-50",
    red: "border-red-100 text-red-500 hover:bg-red-50",
};

function ActionButton({ color, icon, title, onClick }: {
    color: keyof typeof COLOR_MAP;
    icon: React.ReactNode;
    title: string;
    onClick: () => void;
}) {
    return (
        <button title={title} onClick={onClick}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition ${COLOR_MAP[color]}`}>
            {icon}
        </button>
    );
}

const EyeIcon = () => (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);
const EditIcon = () => (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
    </svg>
);
const DeleteIcon = () => (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 7.5h12M9.75 7.5v9m4.5-9v9M5.25 7.5l.675 10.125A2.25 2.25 0 008.169 19.5h7.662a2.25 2.25 0 002.244-1.875L18.75 7.5M9 4.5h6a1.5 1.5 0 011.5 1.5v1.5h-9V6A1.5 1.5 0 019 4.5z" />
    </svg>
);
// src/components/admin/Pagination.tsx
"use client";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    // ─── Page numbers generate karo ───────────────────────────────────────────
    // Logic: always show first, last, current ± 1, aur "..." in between
    function getPageNumbers(): (number | "...")[] {
        const pages: (number | "...")[] = [];

        if (totalPages <= 7) {
            // Kam pages hain — sab dikhao
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }

        pages.push(1);

        if (currentPage > 3) pages.push("...");

        // Current ke aas paas
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        for (let i = start; i <= end; i++) pages.push(i);

        if (currentPage < totalPages - 2) pages.push("...");

        pages.push(totalPages);

        return pages;
    }

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">

            {/* Left — showing x–y of z */}
            <p className="text-sm text-gray-400 order-2 sm:order-1">
                Showing{" "}
                <span className="font-medium text-gray-600">{startItem}</span>
                {" "}–{" "}
                <span className="font-medium text-gray-600">{endItem}</span>
                {" "}of{" "}
                <span className="font-medium text-gray-600">{totalItems}</span>
                {" "}results
            </p>

            {/* Right — page buttons */}
            <div className="flex items-center gap-1 order-1 sm:order-2">

                {/* Prev */}
                <NavButton
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    title="Previous page"
                >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </NavButton>

                {/* Page numbers */}
                {pageNumbers.map((page, idx) =>
                    page === "..." ? (
                        <span
                            key={`dots-${idx}`}
                            className="w-9 h-9 flex items-center justify-center text-sm text-gray-400 select-none"
                        >
                            ···
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-9 h-9 rounded-xl text-sm font-medium transition-all duration-150 ${page === currentPage
                                    ? "bg-[#1a1a1a] text-[#c9a96e] shadow-sm"
                                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                                }`}
                        >
                            {page}
                        </button>
                    )
                )}

                {/* Next */}
                <NavButton
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    title="Next page"
                >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </NavButton>
            </div>
        </div>
    );
}

// ─── Nav button (prev / next) ─────────────────────────────────────────────────
function NavButton({
    children,
    onClick,
    disabled,
    title,
}: {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
    title: string;
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            title={title}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all duration-150 hover:bg-gray-100 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500"
        >
            {children}
        </button>
    );
}
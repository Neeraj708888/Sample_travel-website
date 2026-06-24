// app/admin/(protected)/queries/page.tsx

"use client";

import ConfirmModal from "@/components/admin/modals/ConfirmModal";
import MessageModal from "@/components/admin/modals/MessageModal";
import { deleteData } from "@/helpers/deleteData";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface QueryType {
    id: number;
    name: string;
    email: string;
    mobile: string;
    message: string;
    created_at: string;
}

export default function QueriesPage() {

    const [queries, setQueries] = useState<QueryType[]>([]);
    const [loadingPage, setLoadingPage] = useState(true);

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    // ─────────────────────────────────────────────
    // FETCH ALL QUERIES
    // ─────────────────────────────────────────────
    async function fetchQueries() {

        try {

            setLoadingPage(true);

            const res = await fetch("/api/admin//query");

            const data = await res.json();

            console.log("Query Data: ", data);

            if (!data.success) {
                throw new Error(data.message);
            }

            // FIX
            setQueries(data.data || []);

        } catch (error: any) {

            console.error(error.message);

        } finally {

            setLoadingPage(false);

        }
    }

    useEffect(() => {
        fetchQueries();
    }, []);

    // ─────────────────────────────────────────────
    // OPEN DELETE MODAL
    // ─────────────────────────────────────────────
    function handleOpenDeleteModal(id: number) {
        setSelectedId(id);
        setOpenDeleteModal(true);
    }

    // ─────────────────────────────────────────────
    // DELETE QUERY
    // ─────────────────────────────────────────────
    async function handleDelete() {

        if (!selectedId) return;

        setLoading(true);

        try {

            await deleteData({
                endpoint: "/api/admin/query",
                id: selectedId,
            });

            // REMOVE FROM UI
            setQueries((prev) =>
                prev.filter((item) => item.id !== selectedId)
            );

            setOpenDeleteModal(false);

        } catch (error: any) {

            alert(error.message);

        } finally {

            setLoading(false);

        }
    }

    return (
        <div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Queries
                </h2>

                <p className="text-sm text-gray-400 mt-0.5">
                    {queries?.length ?? 0} Pages
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">

                {/* Table header */}
                <div className="grid grid-cols-7 gap-2 px-6 py-3 border-b border-gray-100 bg-gray-50">
                    {[
                        "ID",
                        "Name",
                        "Email",
                        "Phone",
                        "Date",
                        "Message",
                        "Actions",
                    ].map((h) => (
                        <span
                            key={h}
                            className="text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                            {h}
                        </span>
                    ))}
                </div>

                {/* Loading */}
                {loadingPage && (
                    <p className="text-center text-gray-400 text-sm py-12">
                        Loading queries...
                    </p>
                )}

                {/* Empty */}
                {!loadingPage && queries?.length === 0 && (
                    <p className="text-center text-gray-400 text-sm py-12">
                        Doesn't exist any query
                    </p>
                )}

                {/* Rows */}
                {queries?.map((q) => (
                    <div
                        key={q.id}
                        className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-sm font-medium text-gray-800 truncate">
                            {q.id}
                        </span>

                        <span className="text-sm font-medium text-gray-800 truncate">
                            {q.name}
                        </span>

                        <span className="text-sm text-gray-500 truncate">
                            {q.email}
                        </span>

                        <span className="text-sm text-gray-500">
                            {q.mobile}
                        </span>

                        <span className="text-sm text-gray-400">
                            {new Date(q.created_at).toLocaleDateString(
                                "en-IN",
                                {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                }
                            )}
                        </span>

                        <MessageModal message={q.message} />

                        <div className="relative group">
                            <button
                                onClick={() =>
                                    handleOpenDeleteModal(q.id)
                                }
                                className="flex items-center justify-center w-8 h-8 rounded-xl border border-red-100 bg-red-50/60 text-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-lg hover:shadow-red-100 active:scale-95"
                            >
                                <RiDeleteBin5Fill
                                    size={16}
                                    className="transition-transform duration-200 group-hover:scale-110"
                                />
                            </button>

                            {/* Tooltip */}
                            <div className="absolute left-1/2 z-10 -translate-x-1/2 rounded-lg bg-black px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 whitespace-nowrap">
                                Delete
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ConfirmModal
                open={openDeleteModal}
                loading={loading}
                title="Delete Query"
                description="Are you sure you want to delete this query?"
                onClose={() => setOpenDeleteModal(false)}
                onConfirm={handleDelete}
            />
        </div>
    );
}
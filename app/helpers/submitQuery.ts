import { Query } from "../types/page.types";


export async function submitQuery(payload: Query) {

    const res = await fetch("/api/admin/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!data.success) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
}
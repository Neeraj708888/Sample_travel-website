import { error } from "console"

interface DeleteProps {
    endpoint: string,
    id: string | number
}

export async function deleteData({
    endpoint,
    id,
}: DeleteProps) {
    if (!endpoint) throw new Error("Endpoint is Required");

    if (!id) throw new Error("ID is Required");

    const res = await fetch(`${endpoint}/${id}`, { method: "Delete" });

    const data = await res.json();

    if (!data.success) throw new Error(data.message || "Delete failed");

    return data;
}
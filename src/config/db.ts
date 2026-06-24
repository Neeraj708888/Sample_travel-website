import { createClient, SupabaseClient } from "@supabase/supabase-js"

let client: SupabaseClient | null = null

export function getDb(): SupabaseClient {
    if (!client) {
        const supabase_url = process.env.DB_URL!
        const supabase_key = process.env.DB_KEY!
        client = createClient(supabase_url, supabase_key)
    }
    return client
}

export const dbConnect = new Proxy({} as SupabaseClient, {
    get(_target, prop) {
        const client = getDb()
        const value = (client as any)[prop]
        if (typeof value === "function") {
            return value.bind(client)
        }
        return value
    }
})

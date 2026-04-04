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

export const db = new Proxy({} as SupabaseClient, {
    get(_target, prop) {
        return (getDb() as any)[prop]
    }
})

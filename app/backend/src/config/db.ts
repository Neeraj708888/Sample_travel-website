import { createClient } from "@supabase/supabase-js"

const supabase_url = process.env.DB_URL
const supabase_key = process.env.DB_KEY

if (!supabase_url || !supabase_key) {
    throw new Error("Supabase credentials missing in environment variables")
}

export const db = createClient(supabase_url, supabase_key)
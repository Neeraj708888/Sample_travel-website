import { FAQ } from "@/app/types/page.types"
import { db } from "../config/db"

export const FaqModel = {

    async createFaqs(faqs: FAQ[]): Promise<FAQ[]> {

        const { data, error } = await db
            .from("faq")
            .insert(faqs)
            .select()

        if (error) throw error

        return data as FAQ[]
    },

    async getFaq(page_id: number): Promise<FAQ[]> {

        const { data, error } = await db
            .from("faq")
            .select("*")
            .eq("page_id", page_id)

        if (error) throw error

        return data as FAQ[]

    }

}
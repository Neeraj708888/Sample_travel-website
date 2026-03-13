import { db } from "../config/db"
import { PageSection } from "../../../types/page.types"

export const PageSectionModel = {

    async createSections(sections: PageSection[]): Promise<PageSection[]> {

        const { data, error } = await db
            .from("page_sections")
            .insert(sections)
            .select()

        if (error) throw error

        return data as PageSection[]
    },

    async getSections(page_id: number): Promise<PageSection[]> {

        const { data, error } = await db
            .from("page_sections")
            .select("*")
            .eq("page_id", page_id)
            .order("section_order")

        if (error) throw error

        return data as PageSection[]
    }

}
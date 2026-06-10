export interface PlanningProcessItem {
    id?: string;
    step_number: number;
    step_label?: string;           // "Step 01", "Step 02"
    title: string;
    short_description: string;
    detailed_description?: string;
    icon?: string;
    icon_alt?: string;
    image_url?: string;
    image_alt?: string;
    seo_keyword?: string;
    schema_step_name?: string;
    schema_step_text?: string;
    display_order?: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
}
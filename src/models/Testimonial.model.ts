export interface TestimonialItem {
    id?: string;
    client_name: string;
    client_designation?: string;
    client_company?: string;
    client_photo_url?: string;
    client_photo_alt?: string;
    review_text: string;
    rating: number;               // 1–5
    event_type?: string;          // "Corporate", "Wedding", etc.
    review_title?: string;
    review_date?: string;
    is_featured?: boolean;
    display_order?: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;

}
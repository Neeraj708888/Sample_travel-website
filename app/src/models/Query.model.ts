
export interface QueryModel {
    id?: number,
    name: string,
    email: string,
    mobile: string,
    message: string,
    updated_at?: string,
    created_at?: string,
    deleted_at?: string | null
}
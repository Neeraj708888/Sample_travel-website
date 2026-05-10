export interface AdminUser {
    id: string
    email: string
    password: string
    name: string
    role: 'admin' | 'user'
    status: boolean
    created_at: string
}
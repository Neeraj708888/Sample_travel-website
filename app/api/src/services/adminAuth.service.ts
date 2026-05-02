
import bcrypt from 'bcryptjs'
import { AdminUser } from '../models/AdminUser'
import { dbConnect } from '../config/db'


export async function findAdminByEmail(email: string) {
    const cleanEmail = email.trim().toLowerCase()

    const { data, error } = await dbConnect
        .from('admin_users')
        .select('*')
        .eq('email', cleanEmail)
        .maybeSingle()

    console.log('ENV URL:', process.env.DB_URL)
    console.log('Has Key:', !!process.env.DB_KEY)
    console.log('Searching:', cleanEmail)
    console.log('Data:', data)
    console.log('Error:', error)

    return data
}

export const validatePassword = async (
    plainPassword: string,
    hashPassword: string
) => {
    return await bcrypt.compare(plainPassword, hashPassword)
}
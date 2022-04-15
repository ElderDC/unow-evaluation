import { User } from 'models'

export const createUserAdapter = (data: any): User => ({
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    role: data.role,
})

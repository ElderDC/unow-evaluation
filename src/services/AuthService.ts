import { IUser } from 'models/User'

class AuthService {
    private user: IUser

    constructor() {
        this.user = {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'admin@email.com',
            phone: '+380991234567',
            role: 'admin',
        }
    }

    login(email: string, password: string): { success: boolean; data?: IUser } {
        const isValid =
            this.user.email === 'admin@email.com' && password === 'admin'
        return {
            success: isValid,
            data: isValid ? this.user : undefined,
        }
    }
}

export default new AuthService()

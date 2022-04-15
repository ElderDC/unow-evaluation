import { User } from 'models'

class AuthService {
    private user: User

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

    login(email: string, password: string): { success: boolean; data?: User } {
        const isValid = email === this.user.email && password === 'admin'
        return {
            success: isValid,
            data: isValid ? this.user : undefined,
        }
    }
}

export default new AuthService()

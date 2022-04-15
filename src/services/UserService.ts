import { delay, joinDataToSearch } from 'utilities'
import { User } from 'models'

class UserService {
    users: User[] = [
        {
            id: 1,
            firstName: 'John1',
            lastName: 'Doe',
            email: 'example1@email.com',
            phone: '+380991234567',
            role: 'Admin',
        },
        {
            id: 2,
            firstName: 'John2',
            lastName: 'Doe',
            email: 'example2@email.com',
            phone: '+380991234567',
            role: 'Admin',
        },
        {
            id: 3,
            firstName: 'John3',
            lastName: 'Doe',
            email: 'example3@email.com',
            phone: '+380991234567',
            role: 'Admin',
        },
        {
            id: 4,
            firstName: 'John4',
            lastName: 'Doe',
            email: 'example4@email.com',
            phone: '+380991234567',
            role: 'Admin',
        },
        {
            id: 5,
            firstName: 'John5',
            lastName: 'Doe',
            email: 'example5@email.com',
            phone: '+380991234567',
            role: 'Admin',
        },
        {
            id: 6,
            firstName: 'John6',
            lastName: 'Doe',
            email: 'example6@email.com',
            phone: '+380991234567',
            role: 'Admin',
        },
    ]

    async getAll(search: string): Promise<User[]> {
        await delay(300)
        return this.users.filter((item) => {
            const searchLower = joinDataToSearch(search)
            const userLower = joinDataToSearch(
                item.email,
                item.firstName,
                item.lastName,
                item.phone,
                item.role
            )
            return userLower.includes(searchLower)
        })
    }

    get(id: number): User | null {
        const user = this.users.find((item: User) => item.id === id)
        return user || null
    }

    create(data: User): { success: boolean } {
        this.users.push(data)
        return { success: true }
    }

    update(id: number, data: User): { success: boolean } {
        const userIndex = this.users.findIndex((item: User) => item.id === id)
        if (userIndex === -1) {
            return { success: false }
        }
        this.users.splice(userIndex, 1, data)
        return { success: true }
    }

    delete(id: number): { success: boolean } {
        const userIndex = this.users.findIndex((item: User) => item.id === id)
        if (userIndex === -1) {
            return { success: false }
        }
        this.users.splice(userIndex, 1)
        return { success: true }
    }
}

export default new UserService()

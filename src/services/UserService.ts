import { IUser } from 'models/User'

class UserService {
    users: IUser[] = [
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

    getAll(search: string): IUser[] {
        return this.users.filter((item) => {
            const userLower =
                `${item.email}${item.firstName}${item.lastName}${item.phone}${item.role}`.toLocaleLowerCase()
            const searchLower = search
                .trim()
                .replace(' ', '')
                .toLocaleLowerCase()
            return userLower.includes(searchLower)
        })
    }

    get(id: number): IUser | null {
        const user = this.users.find((item: IUser) => item.id === id)
        return user || null
    }

    create(data: IUser): { success: boolean } {
        this.users.push(data)
        return { success: true }
    }

    update(id: number, data: IUser): { success: boolean } {
        const userIndex = this.users.findIndex((item: IUser) => item.id === id)
        if (userIndex === -1) {
            return { success: false }
        }
        this.users.splice(userIndex, 1, data)
        return { success: true }
    }

    delete(id: number): { success: boolean } {
        const userIndex = this.users.findIndex((item: IUser) => item.id === id)
        if (userIndex === -1) {
            return { success: false }
        }
        this.users.splice(userIndex, 1)
        return { success: true }
    }
}

export default new UserService()

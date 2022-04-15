import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AppStore } from 'redux/store'
import { User } from 'models'
import UserCard from 'components/UserCard'
import UserService from 'services/UserService'
import { Text } from 'components/ui/atoms'
import { Header } from 'components/ui/organisms'
import { createUserListAdapter } from 'adapters'

function Home(props: any): JSX.Element {
    const [search, setSearch] = useState<string>('')
    const [users, setUsers] = React.useState<User[]>([])

    const getAllUsers = async (): Promise<void> => {
        const data = await UserService.getAll(search)
        const adaptedUsers = createUserListAdapter(data)
        setUsers(adaptedUsers)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    useEffect(() => {
        const currentSearch = search
        setTimeout(() => {
            if (currentSearch === search) {
                getAllUsers()
            }
        }, 1000)
    }, [search])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): any => {
        const { value } = event.target
        setSearch(value)
    }

    return (
        <div>
            <Header />
            <div className="p-4">
                <div className="mb-4">
                    <Text size="h6">Directorio de empleados</Text>
                </div>
                <div className="mb-8">
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Buscar"
                        className="col-span-2 px-4 py-2 border-2"
                        onInput={handleSearch}
                        required
                    />
                </div>
                <div
                    className="grid gap-4"
                    style={{
                        gridTemplateColumns:
                            'repeat(auto-fill, minmax(49%, 1fr))',
                    }}
                >
                    {users.map((user: User) => (
                        <UserCard user={user} key={user.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStore): any => ({})
const mapActionsToProps = (dispatch: any): any => ({})

export default connect(mapStateToProps, mapActionsToProps)(Home)

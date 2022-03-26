import React, { useEffect, useState } from 'react'
import { Button, Text } from 'components/ui/atoms'
import { actionCreators as authActionCreators } from 'store/reducers/auth'
import { connect } from 'react-redux'
import { AppState } from 'store'
import UserService from 'services/UserService'
import { useNavigate } from 'react-router-dom'
import { IUser } from 'models/User'
import UserCard from 'components/UserCard'

function Home(props: any): JSX.Element {
    const { logout, isAuthenticated, authUser } = props
    const navigate = useNavigate()
    const [search, setSearch] = useState<string>('')
    const [users, setUser] = React.useState<IUser[]>([])

    const getAllUsers = async (): Promise<void> => {
        const data = UserService.getAll(search)
        setUser(data)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    useEffect(() => {
        getAllUsers()
    }, [search])

    const handleLogout = (): void => {
        logout()
        navigate('/login')
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): any => {
        const { value } = event.target
        setSearch(value)
    }

    return (
        <div>
            <div className="w-screen p-4 bg-primary text-white">
                <div className="flex items-center justify-between">
                    <Text size="subtitle2">Endalia HR</Text>
                    <Button onClick={handleLogout}>
                        <Text>logout</Text>
                    </Button>
                </div>
            </div>
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
                    {users.map((user: IUser) => (
                        <UserCard user={user} key={user.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapActionsToProps = (dispatch: any): any => ({
    logout: (email: string, password: string) =>
        dispatch(authActionCreators.logout()),
})

const mapStateToProps = (state: AppState): any => ({
    isAuthenticated: state.auth.isAuthenticated,
    authUser: state.auth.user,
})

export default connect(mapStateToProps, mapActionsToProps)(Home)

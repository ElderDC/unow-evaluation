import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Text } from 'components/ui/atoms'
import { login as loginAction } from 'redux/states/auth.state'
import { AppStore } from 'redux/store'
import AuthService from 'services/AuthService'
import { useLocalStorage } from 'hooks'
import { User } from 'models'
import { createUserAdapter } from 'adapters'

function Login(props: any): JSX.Element {
    const { login } = props
    const navigate = useNavigate()
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [error, setError] = React.useState<string>('')
    const [, setUser] = useLocalStorage<User>('user')
    const [, setIsAuthenticated] = useLocalStorage<boolean>('isAuthenticated')

    const handleLogin = async (): Promise<void> => {
        if (!email || !password) {
            setError('Los campos Usuario y Contraseña son requeridos')
            return
        }

        const { success, data } = AuthService.login(email, password)

        if (success) {
            const adaptedUser = createUserAdapter(data)
            setIsAuthenticated(success)
            setUser(adaptedUser)
            login(adaptedUser)
            navigate('/')
        } else {
            setError('Los datos introducidos son incorrectos')
        }
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target
        setEmail(value)
        setError('')
    }

    const handlePass = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target
        setPassword(value)
        setError('')
    }

    return (
        <div className="w-screen h-screen overflow-y-auto bg-slate-400">
            <div className="w-full h-full p-8 flex items-center justify-center">
                <div
                    className="p-12 bg-white shadow-lg shadow-gray-500 rounded"
                    style={{ maxWidth: '500px' }}
                >
                    <div className="flex flex-col">
                        <div className="flex justify-center mb-8">
                            <Text size="h4" className="text-primary">
                                endalia
                            </Text>
                        </div>
                        <div className="flex flex-col mb-12">
                            <Text size="h6">Bienvenido/a</Text>
                            <Text size="body1" className="text-gray-500">
                                Introduce tus credenciales para acceder
                            </Text>
                        </div>
                        {error && (
                            <div className="mb-12 text-center">
                                <Text size="overline" className="text-red-600">
                                    {error}
                                </Text>
                            </div>
                        )}
                        <div className="mb-12">
                            <div className="grid gap-4 grid-cols-3 mb-4">
                                <label
                                    htmlFor="email"
                                    className="py-2 text-gray-500"
                                >
                                    Usuario
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Usuario"
                                    className="col-span-2 px-4 py-2 border-2"
                                    onInput={handleEmail}
                                    required
                                />
                            </div>
                            <div className="grid gap-4 grid-cols-3">
                                <label
                                    htmlFor="password"
                                    className="py-2 text-gray-500"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    className="col-span-2 px-4 py-2 border-2"
                                    onInput={handlePass}
                                    required
                                />
                            </div>
                        </div>
                        <Button
                            block
                            type="button"
                            className="bg-primary text-white"
                            onClick={handleLogin}
                        >
                            <Text size="button">Acceder</Text>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStore): any => ({})
const mapActionsToProps = (dispatch: any): any => ({
    login: (user: User) => dispatch(loginAction(user)),
})

export default connect(mapStateToProps, mapActionsToProps)(Login)

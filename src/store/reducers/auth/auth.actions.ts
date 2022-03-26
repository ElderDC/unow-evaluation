import { LOGIN, LOGOUT } from './auth.types'

function login(
    email: string,
    password: string
): {
    type: 'LOGIN'
    payload: { email: string; password: string }
} {
    return {
        type: LOGIN,
        payload: {
            email,
            password,
        },
    }
}

function logout(): { type: 'LOGOUT' } {
    return {
        type: LOGOUT,
    }
}
const actionCreators = {
    login,
    logout,
}

export { actionCreators }

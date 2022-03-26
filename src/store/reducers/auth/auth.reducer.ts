import AuthService from 'services/AuthService'
import { LOGIN, LOGOUT, AuthReducerState } from './auth.types'

// CONSTANTS
const initialState: AuthReducerState = {
    isAuthenticated: false,
    user: undefined,
}

function applyLogin(
    state: AuthReducerState,
    payload: { email: 'string'; password: 'string' }
): AuthReducerState {
    const { email, password } = payload
    const { success, data } = AuthService.login(email, password)
    if (success) {
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('user', JSON.stringify(data))
    }
    return {
        ...state,
        isAuthenticated: success,
        user: data,
    }
}

function applyLogout(state: AuthReducerState): AuthReducerState {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
    return {
        ...state,
        isAuthenticated: false,
        user: undefined,
    }
}

// REDUCER
function reducer(
    state = initialState,
    { type, payload }: { type: string; payload?: any }
): AuthReducerState {
    switch (type) {
        case LOGIN:
            return applyLogin(state, payload)
        case LOGOUT:
            return applyLogout(state)
        default:
            return state
    }
}

export default reducer

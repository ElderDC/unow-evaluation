import { IUser } from 'models/User'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export interface AuthReducerState {
    isAuthenticated: boolean
    user: IUser | undefined
}

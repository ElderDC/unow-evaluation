import { createSlice } from '@reduxjs/toolkit'
import { User } from 'models'

export interface AuthInitialState {
    isAuthenticated: boolean
    user: User | object
}

export const AuthInitialState: AuthInitialState = {
    isAuthenticated: false,
    user: {},
}

export const authSlice = createSlice({
    name: 'user',
    initialState: AuthInitialState,
    reducers: {
        login: (state, action) => ({
            isAuthenticated: true,
            user: action.payload,
        }),
        refresh: (state, action) => ({
            ...state,
            user: action.payload,
        }),
        logout: () => AuthInitialState,
    },
})

export const { login, refresh, logout } = authSlice.actions

export default authSlice.reducer

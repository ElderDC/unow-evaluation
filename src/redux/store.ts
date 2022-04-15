import { configureStore } from '@reduxjs/toolkit'
import authReducer, { AuthInitialState } from 'redux/states/auth.state'
import { loggerMiddleware } from './middlewares'

export interface AppStore {
    auth: AuthInitialState
}

export default function initStore(preloadedState?: AppStore): any {
    const store = configureStore<AppStore>({
        reducer: {
            auth: authReducer,
        },
        middleware: [loggerMiddleware],
        preloadedState,
    })

    return store
}

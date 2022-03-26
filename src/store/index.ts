import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loggerMiddleware } from 'store/middlewares'
import { authReducer } from 'store/reducers'
import { AuthReducerState } from './reducers/auth/auth.types'

interface InitialState {
    auth?: AuthReducerState
}

export interface AppState {
    auth: AuthReducerState
}

function generateStore(initialState: InitialState): any {
    const reducers = {
        auth: authReducer,
    }
    const rootReducer = combineReducers(reducers)

    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, initialState, composedEnhancers)

    return store
}

export default generateStore

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Error404, Home, Login } from 'pages'
import generateStore from 'store'
import PrivateRoute from 'components/PrivateRoute'
import GuestRoute from 'components/GuestRoute'
import { AuthReducerState } from 'store/reducers/auth/auth.types'

function App(): JSX.Element {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const userLocalStorage = localStorage.getItem('user')

    const auth: AuthReducerState = {
        isAuthenticated: isAuthenticated ? JSON.parse(isAuthenticated) : false,
        user: userLocalStorage ? JSON.parse(userLocalStorage) : null,
    }
    const store = generateStore({
        auth,
    })
    return (
        <Provider store={store}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute isAuthenticated>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <GuestRoute isAuthenticated>
                            <Login />
                        </GuestRoute>
                    }
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Provider>
    )
}

export default App

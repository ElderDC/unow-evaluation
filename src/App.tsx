import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import PrivateRoute from 'components/PrivateRoute'
import GuestRoute from 'components/GuestRoute'
import initStore from 'redux/store'
import { useLocalStorage } from 'hooks'
import { User } from 'models'

const Error404 = lazy(() => import('pages/Error404/Error404'))
const Home = lazy(() => import('pages/Home/Home'))
const Login = lazy(() => import('pages/Login/Login'))

function App(): JSX.Element {
    const [user] = useLocalStorage<User | object>('user', {})
    const [isAuthenticated] = useLocalStorage<boolean>('isAuthenticated', false)

    const store = initStore({
        auth: { user, isAuthenticated },
    })

    return (
        <Suspense fallback={<div>Loading ...</div>}>
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
        </Suspense>
    )
}

export default App

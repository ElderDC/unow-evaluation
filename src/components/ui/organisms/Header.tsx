import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Text } from 'components/ui/atoms'
import { logout as logoutAction } from 'redux/states/auth.state'
import { useLocalStorage } from 'hooks'
import { User } from 'models'
import { AppStore } from 'redux/store'

function Header(props: any): JSX.Element {
    const { logout } = props
    const navigate = useNavigate()
    const [, setUser] = useLocalStorage<User | object>('user')
    const [, setIsAuthenticated] = useLocalStorage<boolean>('isAuthenticated')

    const handleLogout = (): void => {
        setIsAuthenticated(false)
        setUser({})
        logout()
        navigate('/login')
    }

    return (
        <div className="w-screen p-4 bg-primary text-white">
            <div className="flex items-center justify-between">
                <Text size="subtitle2">Endalia HR</Text>
                <Button onClick={handleLogout}>
                    <Text>logout</Text>
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStore): any => ({})
const mapActionsToProps = (dispatch: any): any => ({
    logout: () => dispatch(logoutAction()),
})

export default connect(mapStateToProps, mapActionsToProps)(Header)

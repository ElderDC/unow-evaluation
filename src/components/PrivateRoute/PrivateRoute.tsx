import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStore } from 'redux/store'

interface PrivateRouteProps {
    children: JSX.Element
    isAuthenticated: boolean
}

function PrivateRoute({
    children,
    isAuthenticated,
}: PrivateRouteProps): JSX.Element {
    return isAuthenticated ? children : <Navigate to="/login" />
}

const mapStateToProps = (state: AppStore): any => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(PrivateRoute)

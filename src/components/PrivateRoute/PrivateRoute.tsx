import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppState } from 'store'

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

const mapStateToProps = (state: AppState): any => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(PrivateRoute)

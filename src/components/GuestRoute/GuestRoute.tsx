import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppState } from 'store'

interface GuestRouteProps {
    children: JSX.Element
    isAuthenticated: boolean
}

function GuestRoute({
    children,
    isAuthenticated,
}: GuestRouteProps): JSX.Element {
    return isAuthenticated ? <Navigate to="/" /> : children
}

const mapStateToProps = (state: AppState): any => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(GuestRoute)

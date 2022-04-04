import {Navigate} from 'react-router-dom'
import React from 'react'

import {isAuthenticated} from './authModule'

interface Props {
    component: React.ComponentType
    path?: string
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const isAuth = isAuthenticated()

    if (isAuth) {
        return <RouteComponent />
    }

    return <Navigate to="/login" replace />
}

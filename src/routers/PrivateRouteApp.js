import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRouteApp = ({
    isAuth,
    children,
    ...rest
}) => {

    // localStorage.setItem('lastPage', rest.location.pathname)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth
                    ? children
                    : <Redirect to="/auth/login" />
            }
        />
    )
}

PrivateRouteApp.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired
}
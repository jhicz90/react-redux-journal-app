import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom'

import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { firebase } from '../firebase/firebaseConfig'
import { login } from '../actions/auth'
import { useDispatch } from 'react-redux'
import { PrivateRouteApp } from './PrivateRouteApp'
import { PublicRouteApp } from './PublicRouteApp'

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }

            setChecking(false)
        })
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouteApp
                        isAuth={isLoggedIn}
                        path="/auth"
                        component={AuthRouter}
                    />

                    <PrivateRouteApp
                        isAuth={isLoggedIn}
                        exact
                        path="/"
                    >
                        <JournalScreen />
                    </PrivateRouteApp>

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router >
    )
}

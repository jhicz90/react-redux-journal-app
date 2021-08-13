import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { finishLoading, startLoading } from "./ui"

export const loginEmailPassw = (email, passw) => {
    return (dispatch) => {
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email, passw)
            .then(async ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
                dispatch(finishLoading())
            })
            .catch(e => {
                console.log(e)
                dispatch(finishLoading())
            })
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => console.log(e))
    }
}

export const registerWithEmailPassword = (email, passw, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, passw)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => console.log(e))
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const logoutInit = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})
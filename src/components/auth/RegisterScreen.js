import React from 'react';
import { Link } from 'react-router-dom';
import { UseForm } from '../../hooks/UseForm';
import validator from 'validator'
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = UseForm({
        name: 'Dulce',
        email: 'dulce18@gmail.com',
        password: '852456',
        password2: '852456'
    })

    const { name, email, password, password2 } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        if (formValid()) {
            console.log(name, email, password, password2)
        }
    }

    const formValid = () => {
        if (name.trim().length === 0) {
            // console.log('Name is required')
            dispatch(setError('Name is required'))
            return false
        } else if (!validator.isEmail(email)) {
            // console.log('Email no is valid')
            dispatch(setError('Email no is valid'))
            return false
        } else if (password !== password2 || password.length < 5) {
            // console.log('Password deberia tener mayor a 5 caracteres y que las contraseñas coincidan')
            dispatch(setError('Password deberia tener mayor a 5 caracteres y que las contraseñas coincidan'))
            return false
        }

        dispatch(removeError())
        return true
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}

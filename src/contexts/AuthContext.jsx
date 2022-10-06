import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()

const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [pending, setPending] = useState(null)

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setUserEmail(user?.email)
            setPending(false)
        })

        return unsub
    }, [])

    const values = {
        currentUser,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={values}>
            {pending ? (<div>Loading...</div>) : (children)}
        </AuthContext.Provider>
    )
}

export {
    AuthContextProvider as default,
    useAuthContext,
}
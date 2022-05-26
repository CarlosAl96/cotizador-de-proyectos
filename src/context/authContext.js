import { createContext, useEffect, useState } from "react"
import { useContext } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase"

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext) 

    if(!context) {
        throw new Error('There is no auth provider')
    }
    return context
}

export function AuthProvider ({ children }) {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)
    const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password)
    
    const login = (email, password) => 
        signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const resetPass = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])


    
    return (
        <authContext.Provider value={{signup, login, logout, loading, user, loginWithGoogle, resetPass}}>
            { children }
        </authContext.Provider>
    )
}
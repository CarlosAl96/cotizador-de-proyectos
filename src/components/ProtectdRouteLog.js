import { Navigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

const ProtectedRouteLog = ({ children }) => {
    const { user, loading } = useAuth()

    if(loading) return <h1>Loading</h1>
    if(user =! null) return <Navigate to='/profile' />


    return <>{children}</>
}

export default ProtectedRouteLog
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"

const Profile = () => {

    const { user, loading, logout } = useAuth()

    const naviagte = useNavigate()

    const handleLogout = async () => {
        
        try {
            await logout()
            naviagte('/login')            
        } catch (error) {
            console.log(error.message)
        }

    }


    const createProject = () => {
        naviagte('/project')
    }

    if(loading) return <h1>Loading</h1>

    return (
        <div>
            {user && <h1>{user.email}</h1> }
            <button onClick={handleLogout} >Logout</button>
            <button onClick={createProject} >Create New Project</button>
        </div>
    )

}

export default Profile